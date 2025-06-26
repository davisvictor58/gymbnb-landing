import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import SampleListings from "@/components/SampleListings";
import SignupForm from "@/components/SignupForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <Hero />
      <HowItWorks />
      <SampleListings />
      <SignupForm />
      <Footer />
    </main>
  );
}