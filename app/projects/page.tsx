import type { Metadata } from "next";
import Header from "@/components/layout/header/Header";
import Projects from "@/components/home/projects/Projects";

export const metadata: Metadata = {
  title: "Projects | Energizese",
  description:
    "Explore our ongoing and completed projects at Energizese.",
  icons: {
    icon: "/uploads/3af253d99bd04058.png",
    apple: "/uploads/3af253d99bd04058.png",
  },
};

export default function ProjectsPage() {
  return (
    <div id="main-container" className="relative w-full min-h-screen">
      <Header />
      <Projects />
    </div>
  );
}
