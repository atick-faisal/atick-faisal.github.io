import React from "react";
import ReactGA from "react-ga4";

export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {hasError: false, error: null, errorInfo: null};
    }

    static getDerivedStateFromError(error) {
        return {hasError: true, error: error};
    }

    componentDidCatch(error, errorInfo) {
        console.error("Error Boundary caught an error", error, errorInfo);

        // https://developers.google.com/tag-platform/gtagjs/reference/events#exception
        ReactGA.event("exception", {
            description: `${error.toString()} | ${JSON.stringify(errorInfo)}`,
            fatal: true,
        });
    }

    render() {
        if (this.state.hasError) {
            return (
                this.props.fallback || (
                    <p className="text-center text-red-400">
                        {this.state.error.toString()}
                    </p>
                )
            );
        }

        return this.props.children;
    }
}
