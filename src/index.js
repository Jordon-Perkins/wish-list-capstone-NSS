import { createRoot } from "react-dom/client"

import { AppRoutes } from "./components/AppRoutes"
import { BrowserRouter } from "react-router-dom"

import 'bootstrap/dist/css/bootstrap.css';
import "./index.css"


const container = document.getElementById("root")
const root = createRoot(container)
root.render(
    <BrowserRouter>
        <AppRoutes />
    </BrowserRouter>
)

