import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Behandelingen from "./pages/Behandelingen";
import Arrangementen from "./pages/Arrangementen";
import OverMij from "./pages/OverMij";
import Contact from "./pages/Contact";
import Workshops from "./pages/Workshops";
import PersonalTraining from "./pages/PersonalTraining";


function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/behandelingen"} component={Behandelingen} />
      <Route path={"/arrangementen"} component={Arrangementen} />
      <Route path={"/over-mij"} component={OverMij} />
      <Route path={"/contact"} component={Contact} />
      <Route path={"/workshops"} component={Workshops} />
      <Route path={"/personal-training"} component={PersonalTraining} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
