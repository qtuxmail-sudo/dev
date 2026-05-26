import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import About from "@/components/About";
import Shop from "@/components/Shop";
import Esports from "@/components/Esports";
import RaceCalendar from "@/components/RaceCalendar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <StatsBar />
      <About />
      <Shop />
      <Esports />
      <RaceCalendar />
      <Footer />
    </main>
  );
}
