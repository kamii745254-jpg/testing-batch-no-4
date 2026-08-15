"use client";

import { useState } from "react";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import LoginModal from "@/components/LoginModal";

export default function Home() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      {/* Navbar */}
      <Navbar onLoginClick={() => setOpenModal(true)} />

      {/* Landing Page */}
      <Hero />

      <Features />

      <HowItWorks />

      <CTA />

      {/* Footer */}
      <Footer />

      {/* Login Modal */}
      <LoginModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
      />
    </>
  );
}