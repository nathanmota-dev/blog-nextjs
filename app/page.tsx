import HeroSection from "./pages/hero-section";
import Navbar from "./components/navbar";
import LatestPosts from "./pages/latest-posts";

export default function Home() {
  return (
    <div className="relative bg-[url('/blue.jpg')] bg-cover bg-center min-h-screen">
      <Navbar />
      <HeroSection />
      <LatestPosts />
    </div>
  );
}
