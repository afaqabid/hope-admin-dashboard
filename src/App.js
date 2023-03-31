import Router from "./routes";
import ThemeProvider from "./theme";
import ScrollToTop from "./components/scroll-to-top";
import { AuthProvider } from "./auth";

// ----------------------------------------------------------------------

export default function App() {
  return (
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  );
}
