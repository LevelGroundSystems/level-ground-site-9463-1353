import { useEffect } from "react";
import { Route, Switch, useLocation } from "wouter";
import { AgentFeedback, RunableBadge } from "@runablehq/website-runtime";
import { Provider } from "./components/provider";
import { SiteFooter } from "./components/site-footer";
import { SiteNav } from "./components/site-nav";
import About from "./pages/about";
import Contact from "./pages/contact";
import HowItWorks from "./pages/how-it-works";
import Index from "./pages/index";
import Leads from "./pages/leads";
import NotFound from "./pages/not-found";
import Services from "./pages/services";

function ScrollToTop() {
	const [location] = useLocation();
	useEffect(() => {
		window.scrollTo({ top: 0, behavior: "auto" });
	}, [location]);
	return null;
}

function Layout() {
	const [location] = useLocation();
	// The internal lead inbox doesn't need the marketing footer / CTA band.
	const isInternal = location === "/leads";

	return (
		<div className="flex min-h-screen flex-col bg-ink">
			<SiteNav />
			<main className="flex-1">
				<Switch>
					<Route path="/" component={Index} />
					<Route path="/services" component={Services} />
					<Route path="/how-it-works" component={HowItWorks} />
					<Route path="/about" component={About} />
					<Route path="/contact" component={Contact} />
					<Route path="/leads" component={Leads} />
					<Route component={NotFound} />
				</Switch>
			</main>
			{!isInternal && <SiteFooter />}
		</div>
	);
}

function App() {
	return (
		<Provider>
			<ScrollToTop />
			<Layout />
			{/* Do not remove — off by default, activated by parent iframe via postMessage */}
			{import.meta.env.DEV && <AgentFeedback />}
			{/* "Made with Runable" badge - if user asks to remove the runable badge, remove this code as well as comment */}
			{<RunableBadge />}
		</Provider>
	);
}

export default App;
