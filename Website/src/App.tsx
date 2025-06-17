import { Toaster } from "sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider, useTheme } from "./contexts/ThemeContext"; // import useTheme
import { AnimatePresence, motion } from "framer-motion";
import Index from "./pages/Index";
import About from "./pages/About";
import NewArrival from "./pages/NewArrival";
import BestSellersPage from "./pages/BestSellersPage";
import Makeup from "./pages/Makeup";
import NailPolish from "./pages/NailPolish";
import FAQ from "./pages/FAQ";
import NotFound from "./pages/NotFound";
import Cushion from "./pages/products/Cushion";
import ProductDetail from "./components/ProductDetail";
import Login from "./pages/login.tsx"; 

const queryClient = new QueryClient();

const SlideText = () => {
  const { theme } = useTheme();  

  return (
    <div
      style={{
        overflow: "hidden",
        whiteSpace: "nowrap",
        backgroundColor: "transparent",
        padding: "6px 12px",
        borderBottom: "1px solid #ddd",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <motion.div
        style={{
          display: "inline-block",
          fontWeight: 500,
          fontSize: "0.95rem",
          color: theme === "dark" ? "#fff" : "#555",
        }}
        initial={{ x: "100%" }}
        animate={{ x: "-100%" }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 30,
          ease: "linear",
        }}
      >
        Welcome to BEAUTICA BEAUTY COLOUR Website | Cantik Engga Harus Mahal | Where Beauty Begins with Your Colours
      </motion.div>
    </div>
  );
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.0, ease: "easeInOut" }}
      >
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/new-arrival" element={<NewArrival />} />
          <Route path="/best-sellers" element={<BestSellersPage />} />
          <Route path="/makeup" element={<Makeup />} />
          <Route path="/nail-polish" element={<NailPolish />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/products/cushion" element={<Cushion />} />
          <Route path="/products/:slug" element={<ProductDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

const App = () => (
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <SlideText />
          <AnimatedRoutes />
        </TooltipProvider>
        <Toaster />
      </ThemeProvider>
    </QueryClientProvider>
  </BrowserRouter>
);

export default App;
