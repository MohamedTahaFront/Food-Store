import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "swiper/css";
import "swiper/css/navigation";
import { ApiContextProvider } from "./context/ApiContext.jsx";
import { CartContextProvider } from "./context/CartContext.jsx";
import { ScrollContextProvider } from "./context/ScrollContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ApiContextProvider>
      <CartContextProvider>
        <ScrollContextProvider>
          <App />
        </ScrollContextProvider>
      </CartContextProvider>
    </ApiContextProvider>
  </StrictMode>,
);
