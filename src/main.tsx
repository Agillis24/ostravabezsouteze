
  import { Component, type ReactNode } from "react";
  import { createRoot } from "react-dom/client";
  import App from "./app/App.tsx";
  import "./styles/index.css";

  type ErrorBoundaryState = {
    hasError: boolean;
    message: string;
  };

  class RootErrorBoundary extends Component<{ children: ReactNode }, ErrorBoundaryState> {
    state: ErrorBoundaryState = {
      hasError: false,
      message: "",
    };

    static getDerivedStateFromError(error: Error): ErrorBoundaryState {
      return {
        hasError: true,
        message: error?.message ?? "Neznámá chyba",
      };
    }

    componentDidCatch(error: Error) {
      // Keep logging for debugging in browser console.
      console.error("Runtime error:", error);
    }

    render() {
      if (this.state.hasError) {
        return (
          <div style={{ minHeight: "100vh", padding: "24px", fontFamily: "system-ui, sans-serif", background: "#fff", color: "#111" }}>
            <h1 style={{ marginTop: 0, fontSize: "24px" }}>Aplikace narazila na chybu při vykreslení</h1>
            <p style={{ lineHeight: 1.6 }}>
              Zkuste stránku obnovit. Pokud problém přetrvá, pošlete prosím text níže.
            </p>
            <pre style={{ background: "#f5f5f5", border: "1px solid #e5e5e5", borderRadius: "8px", padding: "12px", whiteSpace: "pre-wrap" }}>
              {this.state.message}
            </pre>
          </div>
        );
      }

      return this.props.children;
    }
  }

  createRoot(document.getElementById("root")!).render(
    <RootErrorBoundary>
      <App />
    </RootErrorBoundary>
  );
  