import {StrictMode} from "react";
import {createRoot} from "react-dom/client";

import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

import {initializeErrorTracking} from "./utils/errorTracking.js";

import App from "./App.jsx";
import "./index.css";

initializeErrorTracking();
const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <App/>
        </QueryClientProvider>
    </StrictMode>
);
