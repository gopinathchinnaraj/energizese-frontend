import Header from "@/components/layout/header/Header";
import Hero from "@/components/home/hero/Hero";

export default function Home() {
  return (
    <div id="main-container" className="relative w-full min-h-screen">
      <Header />
      <Hero />
    </div>
  );
}

