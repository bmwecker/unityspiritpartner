import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { initContactTracking } from "./lib/analytics";

createRoot(document.getElementById("root")!).render(<App />);

// Initialize contact link tracking after DOM is ready
initContactTracking();
