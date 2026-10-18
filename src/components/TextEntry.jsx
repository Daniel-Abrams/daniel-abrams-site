
import { useState } from "react";

const API_URL = "https://u1ztf3wcc6.execute-api.us-east-1.amazonaws.com/predict";

export default function TextEntry() {
  const [text, setText] = useState("");
  const [tokens, setTokens] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handlePredict() {
    setLoading(true);
    setError("");

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
      });

      if (!response.ok) {
        throw new Error(`Request failed: ${response.status}`);
      }

      const data = await response.json();
      setTokens(data);
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main>
      <h1>AI Text Detector</h1>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text to analyze..."
        rows={6}
      />

      <br />

      <button
        onClick={handlePredict}
        disabled={loading || !text.trim()}
      >
        {loading ? "Analyzing..." : "Analyze text"}
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <div style={{ whiteSpace: "pre-wrap", marginTop: "1rem" }}>
        {tokens.map((item, index) => (
          <span
            key={index}
            style={{
              color: item.prediction === 1 ? "green" : "red",
            }}
          >
            {item.token}
          </span>
        ))}
      </div>
    </main>
  );
}
