import {StrictMode} from "react";
import { createRoot } from "react-dom/client";
import App from './router/index';
const root = createRoot(document.getElementById("app"))
root.render(<StrictMode><App/></StrictMode>)