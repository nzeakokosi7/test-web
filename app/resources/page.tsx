import ConnectWithUs from "@/components/pages/home/home-connect";
import ResourcesGuide from "@/components/pages/resources/resources-guide";
import ResourcesHero from "@/components/pages/resources/resources-hero";
import ResourcesLatestBlog from "@/components/pages/resources/resources-latest-blog";

export default function Resources() {
  return (
    <main>
      <ResourcesHero />
      <ResourcesLatestBlog />
      <ResourcesGuide />
      <ConnectWithUs bgColor="#ffffff" />
    </main>
  );
}
