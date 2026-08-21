import Header from "@/components/layout/header/Header";
import Hero from "@/components/home/hero/Hero";
import HomeClient from "@/components/home/home-client/HomeClient";
import HomeContact from "@/components/home/home-contact/HomeContact";
import WelcomeWhoAreWe from "@/components/home/welcome/WelcomeWhoAreWe";


export default function Home() {
  return (
    <div id="main-container" className="relative w-full min-h-screen">
      <Header />
      <Hero />
      {/* <HomeClient /> */}
      <HomeContact />
      <WelcomeWhoAreWe />
    </div>
  );
}



