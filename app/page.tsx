import ConnectWithUs from "@/components/pages/home/home-connect";
import HomeHero from "@/components/pages/home/home-hero";
import HomeProducts from "@/components/pages/home/home-products";

export default function Home() {
  return (
    <main>
      <HomeHero />
      <HomeProducts />
      <ConnectWithUs />
    </main>
  );
}
