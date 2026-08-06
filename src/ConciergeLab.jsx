import React, { useEffect, useMemo, useState } from "react";
import { createClient } from "@supabase/supabase-js";

// COPY THESE TWO VALUES FROM THE TOP OF App.jsx
const SUPABASE_URL = "https://ztqtfftgtwgxrtoqqggx.supabase.co";
const SUPABASE_KEY = "sb_publishable_V3P46SsSqP3cj8-hensd9w_OYqIvuhC"; 

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export default function ConciergeLab() {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [loadingProducts, setLoadingProducts] = useState(true);
  const [productError, setProductError] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
const [productIntelligence, setProductIntelligence] = useState(null);
const [intelligenceLoading, setIntelligenceLoading] = useState(false);
const [intelligenceSaving, setIntelligenceSaving] = useState(false);
const [intelligenceError, setIntelligenceError] = useState("");
  const [generatedIntelligence, setGeneratedIntelligence] = useState(null);
const [generationLoading, setGenerationLoading] = useState(false);
const [generationError, setGenerationError] = useState("");
  const [approvalSaving, setApprovalSaving] = useState(false);
  const [conciergeQuestion, setConciergeQuestion] = useState("");
const [conciergeResults, setConciergeResults] = useState([]);
const [conciergeLoading, setConciergeLoading] = useState(false);
const [conciergeError, setConciergeError] = useState("");
  useEffect(() => {
    loadProducts(); 
  }, []);

  async function loadProducts() {
    setLoadingProducts(true);
    setProductError("");
 
    const { data, error } = await supabase
      .from("products")
      .select(`
        *,
        product_merchandising (*)
      `)
      .order("name", { ascending: true })
      .limit(5000);

    if (error) {
      console.error("Concierge inventory error:", error);
      setProductError(error.message);
      setProducts([]);
    } else {
      setProducts(data || []);
    }

    setLoadingProducts(false);
  }
async function loadProductIntelligence(productId) {
  if (!productId) return;

  setIntelligenceLoading(true);
  setIntelligenceError("");
  setProductIntelligence(null);

  const { data, error } = await supabase
    .from("concierge_product_intelligence")
    .select("*")
    .eq("product_id", productId)
    .maybeSingle();

  if (error) {
    console.error("Concierge intelligence load error:", error);
    setIntelligenceError(error.message);
  } else {
    setProductIntelligence(data || null);
  }

  setIntelligenceLoading(false);
}
async function approveAndSaveIntelligence() {
  if (!selectedProduct?.id || !generatedIntelligence) return;

  setApprovalSaving(true);
  setGenerationError("");

  const intelligenceToSave = {
    product_id: selectedProduct.id,

    product_type: generatedIntelligence.product_type ?? null,
    subcategory: generatedIntelligence.subcategory ?? null,
    country: generatedIntelligence.country ?? null,
    region: generatedIntelligence.region ?? null,
    producer: generatedIntelligence.producer ?? null,
    grape_varieties: generatedIntelligence.grape_varieties ?? null,
    age_statement: generatedIntelligence.age_statement ?? null,
    abv: generatedIntelligence.abv ?? null,

    body: generatedIntelligence.body ?? null,
    sweetness: generatedIntelligence.sweetness ?? null,
    tannin: generatedIntelligence.tannin ?? null,
    acidity: generatedIntelligence.acidity ?? null,
    oak_level: generatedIntelligence.oak_level ?? null,
    smoke_level: generatedIntelligence.smoke_level ?? null,

    flavor_notes: generatedIntelligence.flavor_notes || [],
    style_tags: generatedIntelligence.style_tags || [],
    food_pairings: generatedIntelligence.food_pairings || [],
    occasion_tags: generatedIntelligence.occasion_tags || [],

    customer_fit: generatedIntelligence.customer_fit ?? null,
    avoid_if: generatedIntelligence.avoid_if ?? null,
    similar_products_notes:
      generatedIntelligence.similar_products_notes ?? null,
    ai_summary: generatedIntelligence.ai_summary ?? null,
    source_notes: generatedIntelligence.source_notes ?? null,
    confidence_score:
      generatedIntelligence.confidence_score ?? null,

    review_status: "approved",
    reviewed_by: "admin",
    reviewed_at: new Date().toISOString(),
    active: true,
    updated_at: new Date().toISOString(),
  };

  const { data, error } = await supabase
    .from("concierge_product_intelligence")
    .upsert(intelligenceToSave, {
      onConflict: "product_id",
    })
    .select()
    .single();

  if (error) {
    console.error("Approval save error:", error);
    setGenerationError(
      error.message || "Unable to save approved intelligence."
    );
  } else {
    setProductIntelligence(data);
    setGeneratedIntelligence(null);
  }

  setApprovalSaving(false);
}
async function generateProductIntelligence() {
  if (!selectedProduct?.id) return;

  setGenerationLoading(true);
  setGenerationError("");
  setGeneratedIntelligence(null);

  try {
    const { data, error } = await supabase.functions.invoke(
      "generate-concierge-intelligence",
      {
        body: {
          product: {
            id: selectedProduct.id,
            name: selectedProduct.name ?? null,
            brand: selectedProduct.brand ?? null,
            category: selectedProduct.category ?? null,
            sku:
              selectedProduct.sku ??
              selectedProduct.item_number ??
              null,
            upc: selectedProduct.upc ?? null,
            description: selectedProduct.description ?? null,
          },
        },
      }
    );

    if (error) {
      console.error("Concierge generation error:", error);
      setGenerationError(error.message || "AI generation failed.");
    } else if (!data?.intelligence) {
      console.error("Unexpected Concierge response:", data);
      setGenerationError(
        "The AI function responded, but no intelligence was returned."
      );
    } else {
      setGeneratedIntelligence(data.intelligence);
    }
  } catch (error) {
    console.error("Concierge generation exception:", error);

    setGenerationError(
      error instanceof Error
        ? error.message
        : "Unknown AI generation error."
    );
  }

  setGenerationLoading(false);
}
  async function askClubhouseConcierge() {
  const question = conciergeQuestion.trim();

  if (!question) return;

  setConciergeLoading(true);
  setConciergeError("");
  setConciergeResults([]);

  try {
    const { data, error } = await supabase
      .from("concierge_product_intelligence")
      .select(`
        *,
        products (*)
      `)
      .eq("review_status", "approved")
      .eq("active", true);

    if (error) {
      throw error;
    }

    const words = question
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, " ")
      .split(/\s+/)
      .filter((word) => word.length > 2);

    const scored = (data || [])
      .filter((item) => item.products?.active === true)
      .map((item) => {
        const product = item.products;

        const searchableText = [
          product?.name,
          product?.brand,
          item.product_type,
          item.subcategory,
          item.country,
          item.region,
          item.producer,
          item.grape_varieties,
          item.body,
          item.sweetness,
          item.tannin,
          item.acidity,
          item.oak_level,
          item.smoke_level,
          ...(item.flavor_notes || []),
          ...(item.style_tags || []),
          ...(item.food_pairings || []),
          ...(item.occasion_tags || []),
          item.customer_fit,
          item.ai_summary,
        ]
          .filter(Boolean)
          .join(" ")
          .toLowerCase();

        let score = 0;

        for (const word of words) {
          if (searchableText.includes(word)) {
            score += 1;
          }
        }

        return {
          ...item,
          product,
          score,
        };
      })
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 10);

    setConciergeResults(scored);
  } catch (error) {
    console.error("Concierge recommendation error:", error);

    setConciergeError(
      error instanceof Error
        ? error.message
        : "Unable to search Concierge intelligence."
    );
  }

  setConciergeLoading(false);
}
  const filteredProducts = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) return [];

    return products
      .filter((product) => {
        const searchableValues = [
          product.name,
          product.brand,
          product.category,
          product.sku,
          product.upc,
          product.item_number,
          product.description,
        ];

        return searchableValues.some((value) =>
          String(value || "")
            .toLowerCase()
            .includes(query)
        );
      })
      .slice(0, 50);
  }, [products, search]);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f7f4f3",
        padding: "32px 20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: 1000,
          margin: "0 auto",
          background: "white",
          borderRadius: 18,
          padding: 28,
          boxShadow: "0 4px 18px rgba(0,0,0,0.08)",
        }}
      >
        <div
          style={{
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: 1.2,
            color: "#8b1734",
            marginBottom: 6,
          }}
        >
          DEVELOPMENT LAB
        </div>

        <h1 style={{ margin: "0 0 8px", color: "#4a0d20" }}>
          Clubhouse Concierge
        </h1>

        <p style={{ marginTop: 0, color: "#666", lineHeight: 1.5 }}>
          Private testing environment for Addy's product intelligence and
          recommendation system.
        </p>

        <div
          style={{
            marginTop: 28,
            padding: 20,
            border: "1px solid #e5dedb",
            borderRadius: 14,
          }}
        >
          <h2 style={{ marginTop: 0 }}>Live Inventory Search</h2>

          {loadingProducts ? (
            <p style={{ color: "#666" }}>Loading live inventory...</p>
          ) : productError ? (
            <p style={{ color: "#a00000" }}>
              Inventory error: {productError}
            </p>
          ) : (
            <p style={{ color: "#666", fontSize: 13 }}>
              Connected to {products.length.toLocaleString()} live products.
            </p>
          )}

          <input
            value={search}
            onChange={(event) => {
              setSearch(event.target.value);
              setSelectedProduct(null);
            }}
            placeholder="Search by product, brand, category, SKU, or UPC..."
            style={{
              width: "100%",
              boxSizing: "border-box",
              padding: 13,
              borderRadius: 10,
              border: "1px solid #ccc",
              fontSize: 15,
            }}
          />

          {search.trim() && !loadingProducts && (
            <div
              style={{
                marginTop: 14,
                display: "grid",
                gap: 8,
              }}
            >
              <div
                style={{
                  fontSize: 13,
                  color: "#777",
                }}
              >
                {filteredProducts.length} result
                {filteredProducts.length === 1 ? "" : "s"} shown
              </div>

              {filteredProducts.map((product) => (
                <button
                  key={product.id}
                  type="button"
                 onClick={() => {
  setSelectedProduct(product);
  loadProductIntelligence(product.id);
}}
                  style={{
                    textAlign: "left",
                    background:
                      selectedProduct?.id === product.id
                        ? "#f6ecef"
                        : "#fff",
                    border:
                      selectedProduct?.id === product.id
                        ? "1px solid #8b1734"
                        : "1px solid #e4dfdc",
                    borderRadius: 10,
                    padding: 12,
                    cursor: "pointer",
                  }}
                >
                  <div
                    style={{
                      fontWeight: 700,
                      fontSize: 15,
                      color: "#32101b",
                    }}
                  >
                    {product.name || "Unnamed Product"}
                  </div>

                  <div
                    style={{
                      color: "#777",
                      fontSize: 13,
                      marginTop: 4,
                    }}
                  >
                    {[product.brand, product.category]
                      .filter(Boolean)
                      .join(" • ")}
                  </div>
                </button>
              ))}

              {filteredProducts.length === 0 && (
                <div style={{ color: "#777", padding: "10px 0" }}>
                  No matching products found.
                </div>
              )}
            </div>
          )}
        </div>

        {selectedProduct && (
          <div
            style={{
              marginTop: 18,
              padding: 20,
              border: "1px solid #8b1734",
              borderRadius: 14,
              background: "#fffafa",
            }}
          >
            <div
              style={{
                fontSize: 12,
                fontWeight: 700,
                color: "#8b1734",
                letterSpacing: 1,
              }}
            >
              PRODUCT INTELLIGENCE
            </div>

            <h2 style={{ marginBottom: 8 }}>
              {selectedProduct.name || "Unnamed Product"}
            </h2>

            <div
              style={{
                display: "grid",
                gap: 7,
                fontSize: 14,
              }}
            >
              <div>
                <strong>Brand:</strong>{" "}
                {selectedProduct.brand || "Not available"}
              </div>

              <div>
                <strong>Category:</strong>{" "}
                {selectedProduct.category || "Not available"}
              </div>

              <div>
                <strong>SKU:</strong>{" "}
                {selectedProduct.sku ||
                  selectedProduct.item_number ||
                  "Not available"}
              </div>

              <div>
                <strong>UPC:</strong>{" "}
                {selectedProduct.upc || "Not available"}
              </div>
            </div>

            <div style={{ marginTop: 18 }}>
              <strong>Existing Merchandising Data</strong>

              <pre
                style={{
                  marginTop: 8,
                  padding: 14,
                  borderRadius: 10,
                  background: "#f3efed",
                  overflowX: "auto",
                  whiteSpace: "pre-wrap",
                  fontSize: 12,
                }}
              >
                {JSON.stringify(
                  selectedProduct.product_merchandising,
                  null,
                  2
                )}
              </pre>
            </div>
            <div
  style={{
    marginTop: 18,
    paddingTop: 18,
    borderTop: "1px solid #ddd6d2",
  }}
>
 <strong>Clubhouse Concierge Intelligence</strong>

{intelligenceLoading ? (
  <p style={{ color: "#777" }}>Loading intelligence...</p>
) : intelligenceError ? (
  <p style={{ color: "#a00000" }}>
    Intelligence error: {intelligenceError}
  </p>
) : productIntelligence ? (
  <div style={{ marginTop: 10 }}>
    <div style={{ marginBottom: 6 }}>
      <strong>Status:</strong>{" "}
      {productIntelligence.review_status || "pending"}
    </div>

    <div style={{ marginBottom: 6 }}>
      <strong>Product Type:</strong>{" "}
      {productIntelligence.product_type || "Not set"}
    </div>

    <div style={{ marginBottom: 6 }}>
      <strong>Subtype:</strong>{" "}
      {productIntelligence.subcategory || "Not set"}
    </div>

    <div style={{ marginBottom: 6 }}>
      <strong>Confidence:</strong>{" "}
      {productIntelligence.confidence_score ?? "Not set"}
    </div>

    <div style={{ marginTop: 10 }}>
      <strong>Summary:</strong>

      <div
        style={{
          marginTop: 6,
          padding: 12,
          background: "#f3efed",
          borderRadius: 10,
          lineHeight: 1.5,
        }}
      >
        {productIntelligence.ai_summary || "No summary yet."}
      </div>
    </div>

    <details style={{ marginTop: 12 }}>
      <summary style={{ cursor: "pointer", fontWeight: 700 }}>
        View raw intelligence record
      </summary>

      <pre
        style={{
          marginTop: 8,
          padding: 14,
          borderRadius: 10,
          background: "#f3efed",
          overflowX: "auto",
          whiteSpace: "pre-wrap",
          fontSize: 12,
        }}
      >
        {JSON.stringify(productIntelligence, null, 2)}
      </pre>
    </details>

    <button
      type="button"
      onClick={generateProductIntelligence}
      disabled={generationLoading}
      style={{
        marginTop: 14,
        padding: "11px 16px",
        border: 0,
        borderRadius: 10,
        background: "#8b1734",
        color: "white",
        fontWeight: 700,
        cursor: generationLoading ? "default" : "pointer",
        opacity: generationLoading ? 0.6 : 1,
      }}
    >
      {generationLoading
        ? "Generating New Intelligence..."
        : "Regenerate Intelligence"}
    </button>
  </div>
) : (
  <div style={{ marginTop: 10 }}>
    <p style={{ color: "#777" }}>
      No Clubhouse Concierge intelligence exists for this product yet.
    </p>

    <button
      type="button"
      onClick={generateProductIntelligence}
      disabled={generationLoading}
      style={{
        padding: "11px 16px",
        border: 0,
        borderRadius: 10,
        background: "#8b1734",
        color: "white",
        fontWeight: 700,
        cursor: generationLoading ? "default" : "pointer",
        opacity: generationLoading ? 0.6 : 1,
      }}
    >
      {generationLoading
        ? "Generating Product Intelligence..."
        : "Generate Product Intelligence"}
    </button>
  </div>
)}

{generationError && (
  <div
    style={{
      marginTop: 12,
      padding: 12,
      borderRadius: 10,
      background: "#fff1f1",
      color: "#a00000",
      lineHeight: 1.4,
    }}
  >
    {generationError}
  </div>
)}

{generatedIntelligence && (
  <div
    style={{
      marginTop: 16,
      padding: 16,
      borderRadius: 12,
      background: "#f3efed",
    }}
  >
    <div
      style={{
        fontWeight: 700,
        color: "#8b1734",
        marginBottom: 10,
      }}
    >
      AI Generated Preview
    </div>

    <div style={{ display: "grid", gap: 7 }}>
      <div>
        <strong>Product Type:</strong>{" "}
        {generatedIntelligence.product_type || "Unknown"}
      </div>

      <div>
        <strong>Subtype:</strong>{" "}
        {generatedIntelligence.subcategory || "Unknown"}
      </div>

      <div>
        <strong>Country:</strong>{" "}
        {generatedIntelligence.country || "Unknown"}
      </div>

      <div>
        <strong>Region:</strong>{" "}
        {generatedIntelligence.region || "Unknown"}
      </div>

      <div>
        <strong>Body:</strong>{" "}
        {generatedIntelligence.body || "Unknown"}
      </div>

      <div>
        <strong>Sweetness:</strong>{" "}
        {generatedIntelligence.sweetness || "Unknown"}
      </div>

      <div>
        <strong>Tannin:</strong>{" "}
        {generatedIntelligence.tannin || "Unknown"}
      </div>

      <div>
        <strong>Acidity:</strong>{" "}
        {generatedIntelligence.acidity || "Unknown"}
      </div>

      <div>
        <strong>Oak:</strong>{" "}
        {generatedIntelligence.oak_level || "Unknown"}
      </div>

      <div>
        <strong>Flavor Notes:</strong>{" "}
        {(generatedIntelligence.flavor_notes || []).join(", ") || "None"}
      </div>

      <div>
        <strong>Style:</strong>{" "}
        {(generatedIntelligence.style_tags || []).join(", ") || "None"}
      </div>

      <div>
        <strong>Food Pairings:</strong>{" "}
        {(generatedIntelligence.food_pairings || []).join(", ") || "None"}
      </div>

      <div>
        <strong>Customer Fit:</strong>{" "}
        {generatedIntelligence.customer_fit || "Unknown"}
      </div>

      <div>
        <strong>Avoid If:</strong>{" "}
        {generatedIntelligence.avoid_if || "Unknown"}
      </div>

      <div>
        <strong>Confidence:</strong>{" "}
        {generatedIntelligence.confidence_score ?? "Unknown"}
      </div>
    </div>

    <div style={{ marginTop: 14 }}>
      <strong>Summary:</strong>

      <div
        style={{
          marginTop: 6,
          lineHeight: 1.5,
        }}
      >
        {generatedIntelligence.ai_summary || "No summary returned."}
      </div>
    </div>

    <button
      type="button"
      onClick={approveAndSaveIntelligence}
      disabled={approvalSaving}
      style={{
        marginTop: 16,
        padding: "11px 16px",
        border: 0,
        borderRadius: 10,
        background: "#8b1734",
        color: "white",
        fontWeight: 700,
        cursor: approvalSaving ? "default" : "pointer",
        opacity: approvalSaving ? 0.6 : 1,
      }}
    >
      {approvalSaving
        ? "Saving Approved Intelligence..."
        : productIntelligence
        ? "Approve & Replace Intelligence"
        : "Approve & Save Intelligence"}
    </button>

    <details style={{ marginTop: 14 }}>
      <summary style={{ cursor: "pointer", fontWeight: 700 }}>
        View full generated JSON
      </summary>

      <pre
        style={{
          marginTop: 8,
          whiteSpace: "pre-wrap",
          overflowX: "auto",
          fontSize: 12,
        }}
      >
        {JSON.stringify(generatedIntelligence, null, 2)}
      </pre>
    </details>
  </div>
)}

</div>
</div>
)}
        <div
  style={{
    marginTop: 18,
    padding: 20,
    border: "1px solid #e5dedb",
    borderRadius: 14,
  }}
>
 <h2 style={{ marginTop: 0 }}>Concierge Test</h2>

<p style={{ color: "#666", lineHeight: 1.5 }}>
  Ask a recommendation question using approved Clubhouse Concierge
  intelligence and current live inventory.
</p>

<textarea
  value={conciergeQuestion}
  onChange={(event) => setConciergeQuestion(event.target.value)}
  placeholder="Example: I want a full-bodied California Cabernet..."
  style={{
    width: "100%",
    minHeight: 100,
    boxSizing: "border-box",
    padding: 13,
    borderRadius: 10,
    border: "1px solid #ccc",
    fontSize: 15,
    resize: "vertical",
  }}
/>

<button
  type="button"
  onClick={askClubhouseConcierge}
  disabled={conciergeLoading || !conciergeQuestion.trim()}
  style={{
    marginTop: 12,
    padding: "12px 18px",
    border: 0,
    borderRadius: 10,
    background: "#8b1734",
    color: "white",
    fontWeight: 700,
    cursor:
      conciergeLoading || !conciergeQuestion.trim()
        ? "default"
        : "pointer",
    opacity:
      conciergeLoading || !conciergeQuestion.trim()
        ? 0.5
        : 1,
  }}
>
  {conciergeLoading
    ? "Searching Concierge Intelligence..."
    : "Ask Clubhouse Concierge"}
</button>

{conciergeError && (
  <div
    style={{
      marginTop: 14,
      padding: 12,
      borderRadius: 10,
      background: "#fff1f1",
      color: "#a00000",
    }}
  >
    {conciergeError}
  </div>
)}

{!conciergeLoading &&
  conciergeQuestion.trim() &&
  conciergeResults.length === 0 &&
  !conciergeError && (
    <p style={{ marginTop: 16, color: "#777" }}>
      No approved Concierge products matched this request.
    </p>
  )}

{conciergeResults.length > 0 && (
  <div style={{ marginTop: 18 }}>
    <strong>Recommended Matches</strong>

    <div
      style={{
        display: "grid",
        gap: 12,
        marginTop: 10,
      }}
    >
      {conciergeResults.map((result) => (
        <div
          key={result.id}
          style={{
            padding: 14,
            border: "1px solid #e2d8d5",
            borderRadius: 12,
            background: "#fffafa",
          }}
        >
          <div
            style={{
              fontSize: 16,
              fontWeight: 700,
              color: "#4a0d20",
            }}
          >
            {result.product?.name || "Unknown Product"}
          </div>

          {result.product?.brand && (
            <div
              style={{
                marginTop: 3,
                color: "#777",
                fontSize: 13,
              }}
            >
              {result.product.brand}
            </div>
          )}

          <div style={{ marginTop: 10, lineHeight: 1.5 }}>
            {result.ai_summary || "No product summary available."}
          </div>

          <div
            style={{
              marginTop: 10,
              fontSize: 13,
              color: "#666",
            }}
          >
            Match score: {result.score}
            {result.product?.price != null
              ? ` • $${Number(result.product.price).toFixed(2)}`
              : ""}
            {result.product?.inventory_quantity != null
              ? ` • ${result.product.inventory_quantity} in inventory`
              : ""}
          </div>
        </div>
      ))}
    </div>
  </div>
)}
        </div>
      </div>
    </div>
  );
}
