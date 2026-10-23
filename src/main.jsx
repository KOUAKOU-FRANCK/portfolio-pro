import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import App from "./App.jsx";
import "./index.css";
import "./animations.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* Statistiques de visite : à activer dans Vercel (projet → Analytics → Enable). */}
    <Analytics />
  </StrictMode>
);
