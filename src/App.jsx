import ErrorBoundary from "./utils/ErrorBoundary";
import AppContent from "./components/AppContent";
import "./App.css";

function App() {
    return (
        <div className="h-screen flex flex-col p-8 items-center gap-8 justify-center">
            <ErrorBoundary>
                <AppContent/>
            </ErrorBoundary>
        </div>
    );
}

export default App;
