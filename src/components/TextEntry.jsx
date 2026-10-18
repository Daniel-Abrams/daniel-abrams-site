
import { useState } from "react";
import "./TextEntry.css";

const API_URL = "https://u1ztf3wcc6.execute-api.us-east-1.amazonaws.com/predict";
const maxLenth = 1000;

export default function TextEntry() {
  var [text, setText] = useState("");
  const [tokens, setTokens] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [hasPredicted, setHasPredicted] = useState(false);

  async function handlePredict() {
    setLoading(true);
    setError("");

    try {
      if (text.length() > maxLenth)
      {
        text = text.substring(0,maxLenth);
      }
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
      setHasPredicted(true);
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main>
      {!hasPredicted ? (
        <textarea
            className="textentry"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text to analyze..."
            rows={6}
        />
        ) : (
        <div className="prediction-output">
            {tokens.map((item, index) => (
            <span
                key={index}
                style={{
                color: item.prediction === 1 ? "red" : "green",
                }}
            >
                {item.token}
            </span>
            ))}
        </div>
        )}

        <button
        className="analyze-button"
        onClick={() => {
            if (hasPredicted) {
            setHasPredicted(false);
            } else {
            handlePredict();
            }
        }}
        disabled={loading || (!hasPredicted && !text.trim())}
        >
        {loading ? "Analyzing..." : hasPredicted ? "Edit text" : "Analyze text"}
        </button>
    </main>
  );
}
