import React, { useState } from "react";

export default function ConciergeLab() {
  const [search, setSearch] = useState("");

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

          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search Addy's inventory..."
            style={{
              width: "100%",
              boxSizing: "border-box",
              padding: 13,
              borderRadius: 10,
              border: "1px solid #ccc",
              fontSize: 15,
            }}
          />

          <p style={{ color: "#888", fontSize: 13, marginBottom: 0 }}>
            Inventory connection coming next.
          </p>
        </div>

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
