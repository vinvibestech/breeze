
import Footer from "../components/pages/Footer";
import Navbar from "../components/pages/Navbar";
import TagLine from "../components/pages/TagLine";
import DiscoverFlavours from "../components/ui/DiscoverFlavours";
import FeaturedProducts from "../components/ui/FeaturedProducts";
import Hero from "../components/ui/Hero";
import HorizontalScrollStory from "../components/ui/HorizontalScrollStory";
import PremiumRefreshment from "../components/ui/PremiumRefreshment";
import Story from "../components/ui/Story";


export default function Home() {

  return (
    <>
      <Hero />
      <Story />
      <FeaturedProducts />
      <PremiumRefreshment />
      <HorizontalScrollStory />
      <DiscoverFlavours />
      <TagLine />
      <Footer />
    </>
  );
}
