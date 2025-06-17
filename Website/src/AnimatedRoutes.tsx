// src/AnimatedRoutes.tsx
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion, easeInOut } from "framer-motion"; // ⬅️ impor easing valid
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

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const pageTransition = {
  duration: 0.4,
  ease: easeInOut, // ⬅️ gunakan easing function yang valid
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              key="index"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              transition={pageTransition}
              className="min-h-screen"
            >
              <Index />
            </motion.div>
          }
        />
        <Route
          path="/about"
          element={
            <motion.div
              key="about"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              transition={pageTransition}
              className="min-h-screen"
            >
              <About />
            </motion.div>
          }
        />
        <Route
          path="/new-arrival"
          element={
            <motion.div
              key="new-arrival"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              transition={pageTransition}
              className="min-h-screen"
            >
              <NewArrival />
            </motion.div>
          }
        />
        <Route
          path="/best-sellers"
          element={
            <motion.div
              key="best-sellers"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              transition={pageTransition}
              className="min-h-screen"
            >
              <BestSellersPage />
            </motion.div>
          }
        />
        <Route
          path="/makeup"
          element={
            <motion.div
              key="makeup"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              transition={pageTransition}
              className="min-h-screen"
            >
              <Makeup />
            </motion.div>
          }
        />
        <Route
          path="/nail-polish"
          element={
            <motion.div
              key="nail-polish"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              transition={pageTransition}
              className="min-h-screen"
            >
              <NailPolish />
            </motion.div>
          }
        />
        <Route
          path="/faq"
          element={
            <motion.div
              key="faq"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              transition={pageTransition}
              className="min-h-screen"
            >
              <FAQ />
            </motion.div>
          }
        />
        <Route
          path="/products/cushion"
          element={
            <motion.div
              key="cushion"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              transition={pageTransition}
              className="min-h-screen"
            >
              <Cushion />
            </motion.div>
          }
        />
        <Route
          path="/products/:slug"
          element={
            <motion.div
              key="product-detail"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              transition={pageTransition}
              className="min-h-screen"
            >
              <ProductDetail />
            </motion.div>
          }
        />
        <Route
          path="*"
          element={
            <motion.div
              key="not-found"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              transition={pageTransition}
              className="min-h-screen"
            >
              <NotFound />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
