import type { Metadata } from "next";
import Header from "@/components/layout/header/Header";
import Media from "@/components/media/Media";

export const metadata: Metadata = {
  title: "Media | Energizese",
  description:
    "Stay updated with the latest from Energizese, a specialized mechanical services firm delivering excellence across Industrial, Commercial, and Residential projects.",
  icons: {
    icon: "/uploads/3af253d99bd04058.png",
    apple: "/uploads/3af253d99bd04058.png",
  },
};

export default function MediaPage() {
  return (
    <div id="main-container" className="relative w-full min-h-screen">
      <Header />
      <Media />
    </div>
  );
}
