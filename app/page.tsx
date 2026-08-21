import Header from "@/components/layout/header/Header";
import Hero from "@/components/home/hero/Hero";
import HomeClient from "@/components/home/home-client/HomeClient";
import HomeContact from "@/components/home/home-contact/HomeContact";

export default function Home() {
  return (
    <div id="main-container" className="relative w-full min-h-screen">
      <Header />
      <Hero />
      {/* <HomeClient /> */}
      <HomeContact />
    </div>
  );
}



