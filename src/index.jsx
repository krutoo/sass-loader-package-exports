import { createRoot } from "react-dom/client";
import "./index.scss";

function App() {
  return <div>Hello</div>;
}

createRoot(document.querySelector("#root")).render(<App />);
