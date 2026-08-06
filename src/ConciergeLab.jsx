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

async function createTestIntelligence() {
  if (!selectedProduct?.id) return;

  setIntelligenceSaving(true);
  setIntelligenceError("");

  const { data, error } = await supabase
    .from("concierge_product_intelligence")
    .upsert(
      {
        product_id: selectedProduct.id,
        product_type: "wine",
        subcategory: "test record",
        ai_summary:
          "Temporary Clubhouse Concierge test record. This will be replaced by real generated product intelligence.",
        confidence_score: 0.5,
        review_status: "pending",
        active: true,
        updated_at: new Date().toISOString(),
      },
      {
        onConflict: "product_id",
      }
    )
    .select()
    .single();

  if (error) {
    console.error("Concierge intelligence save error:", error);
    setIntelligenceError(error.message);
  } else {
    setProductIntelligence(data);
  }

  setIntelligenceSaving(false);
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
    </div>
  ) : (
    <div style={{ marginTop: 10 }}>
      <p style={{ color: "#777" }}>
        No Clubhouse Concierge intelligence exists for this product yet.
      </p>

      <button
        type="button"
        onClick={createTestIntelligence}
        disabled={intelligenceSaving}
        style={{
          padding: "11px 16px",
          border: 0,
          borderRadius: 10,
          background: "#8b1734",
          color: "white",
          fontWeight: 700,
          cursor: intelligenceSaving ? "default" : "pointer",
          opacity: intelligenceSaving ? 0.6 : 1,
        }}
      >
        {intelligenceSaving
          ? "Creating Test Record..."
          : "Create Test Intelligence Record"}
      </button>
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

          <textarea
            placeholder="Example: I like Caymus but want something under $30..."
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
            disabled
            style={{
              marginTop: 12,
              padding: "12px 18px",
              border: 0,
              borderRadius: 10,
              background: "#8b1734",
              color: "white",
              fontWeight: 700,
              opacity: 0.5,
            }}
          >
            Ask Clubhouse Concierge
          </button>
        </div>
      </div>
    </div>
  );
}
