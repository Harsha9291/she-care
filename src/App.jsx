
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import WhyChooseUs from "./components/WhyChooseUs";
import Stats from "./components/Stats";
import PeriodTracker from "./components/PeriodTracker";
import Survey from "./components/Survey";
import Testimonials from "./components/Testimonials";
import Products from "./components/Products";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import HerbalFlavours from "./components/HerbalFlavours";
import BottomBenefits from "./components/BottomBenefits";
import Learn from "./components/Learn";
import FlavoursPage from "./components/FlavoursPage";
import UserProfile from "./pages/UserProfile";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import HomeProductsPreview from "./components/homePreviewProducts";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollProgress />
      <Navbar />

      <Routes>
        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <>
              <Hero />

              {/* Existing Herbal Landing Flavours */}
              {/* <HerbalFlavours /> */}
 
              {/* <Survey /> */}
<HomeProductsPreview />
              {/* <BottomBenefits/> */}

              {/* <WhyChooseUs /> */}
              {/* <Stats /> */}
              {/* <PeriodTracker /> */}

              {/* <Testimonials /> */}
              {/* <Products /> */}

              {/* <FAQ /> */}
            </>
          }
        />
  <Route
          path="/Survey"
          element={<Survey />}
        />
        {/* PRODUCTS PAGE */}
        <Route
          path="/products"
          element={<Products />}
        />

        {/* SEPARATE FLAVOURS PAGE */}
        <Route
          path="/flavours"
          element={<FlavoursPage />}
        />

        {/* WHY PADKINGO PAGE */}
        <Route
          path="/why-padkingoo"
          element={<WhyChooseUs />}
        />

        {/* LEARN PAGE */}
        <Route
          path="/learn"
          element={<Learn />}
        />

        {/* PROFILE PAGE */}
        <Route
          path="/profile"
          element={<UserProfile />}
        />

        {/* LOGIN PAGE */}
        <Route
          path="/login"
          element={<Login />}
        />

        {/* CART PAGE */}
        <Route
          path="/cart"
          element={<Cart />}
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
