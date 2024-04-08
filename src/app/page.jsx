import Features from "@/components/Features";
import Hero from "@/components/Hero";
import NewsAndUpdates from "@/components/NewsAndUpdates";
import Newsletter from "@/components/Newsletter";
import Properties from "@/components/Properties";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Properties />
      <NewsAndUpdates />
      <Newsletter />
    </main>
  );
}
