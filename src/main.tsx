import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import "./index.css";
import LenisWrapper from "./Lenis";



ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <LenisWrapper>
      <RouterProvider router={router} />
    </LenisWrapper>
  </React.StrictMode>
);
