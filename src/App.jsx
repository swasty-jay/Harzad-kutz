import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppLayout from "./Pages/AppLayout";
import Home from "./Pages/Home";
import Booking from "./Pages/Booking";
import Services from "./Components/Services";
import Gallry from "./Components/Gallary";
import NotFoundPage from "./Pages/NotFound";
import AboutSection from "./Pages/About";
import ScrollToTop from "./Components/ScrollToTop";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />

          {/* Add more routes here like Services, Gallery, etc. */}
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallry />} />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
