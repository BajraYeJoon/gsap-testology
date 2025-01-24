import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import gsap from 'gsap'
import { useGSAP } from "@gsap/react";
import LenisWrapper from "./Lenis.tsx";

gsap.registerPlugin(useGSAP);



ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <LenisWrapper>
      <App />
    </LenisWrapper>
  </React.StrictMode>
);
