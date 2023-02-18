import Router from './routes';
import ThemeProvider from './theme';
import ScrollToTop from './components/scroll-to-top';
import { StyledChart } from './components/chart';
import { AuthProvider } from './auth';

// ----------------------------------------------------------------------

export default function App() {
  return (
    <ThemeProvider>
        <StyledChart />
        <Router />
      </ThemeProvider>
  );
}
