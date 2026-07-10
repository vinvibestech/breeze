
import Footer from "../components/pages/Footer";
import Navbar from "../components/pages/Navbar";
import DiscoverFlavours from "../components/ui/DiscoverFlavours";
import FeaturedProducts from "../components/ui/FeaturedProducts";
import Hero from "../components/ui/Hero";
import HorizontalScrollStory, { StorySlide } from "../components/ui/HorizontalScrollStory";
import PremiumRefreshment from "../components/ui/PremiumRefreshment";
import Story from "../components/ui/Story";

const storySlides: StorySlide[] = [
  {
    id: "origin",
    title: "THE LAST STAND OF THE VINTAGE POP.",
    description:
      "While the world transitioned to disposable cans and twisting plastic caps, one icon held its ground. It is the definitive tactile ritual of carbonation—a heavy glass relic that turns the simple act of opening a drink into an echoing statement of heritage, craftsmanship, and pure, unfiltered chill.",
    image: "/images/story/01-origin.jpg",
  },
  {
    id: "seal",
    title: "THE GENIUS OF 1872.",
    description:
      "The soul of Goli Soda lies in its mechanics, invented and patented by English engineer Hiram Codd in 1872. Seeking a way to seal fizzy drinks without using corks, he designed a revolutionary globe-stoppered system that changed beverage bottling forever.",
    image: "/images/story/02-seal.jpg",
  },
  {
    id: "cold",
    title: "SCIENCE ENCLOSED IN GLASS.",
    description:
      "A Goli Soda bottle or Codd-neck bottle is a marvel of physics. Filled upside down under extreme gas pressure, a glass marble is forced upward against a tight rubber washer, naturally locking in the sharp carbonation without any artificial caps.",
    image: "/images/story/03-cold.jpg",
  },
  {
    id: "pineapple",
    title: "THE BOTTLE THAT CONQUERED THE OCEANS.",
    description:
      "Launched in 1872, the Codd-neck design instantly went global, dominating the soft-drink and brewing industries from Europe to Australasia. While industrial steel caps eventually replaced them in the West, the design found an eternal home in the East. Japan adopted it entirely, transforming this Victorian marvel into Ramune—their iconic national marble soda.",
    image: "/images/story/04-pineapple.jpg",
  },
  {
    id: "sound",
    title: "THE REFRESHMENT OF THE PEOPLE.",
    description:
      "From children breaking the bottles just to collect the shiny marbles to exhausted workers seeking a sharp midday chill from street-side carts, Goli Soda belongs to everyone. It has become an enduring cultural icon of social gatherings and simpler times. ",
    image: "/images/story/05-sound.jpg",
  },
  {
    id: "today",
    title: "THE GLOBAL RESURGENCE.",
    description:
      "After nearly disappearing under the shadow of multinational giants, Goli Soda is making a premium comeback. Reimagined with gourmet, natural flavors and exported globally to the US, UK, and Gulf markets, India’s authentic street-side treasure is officially capturing the global stage.",
    image: "/images/story/06-today.jpg",
  },
];

export default function Home() {

  return (
    <>
    
      <Hero />
      <Story />
      <FeaturedProducts />
      <PremiumRefreshment />
      <HorizontalScrollStory slides={storySlides} />
      <DiscoverFlavours />
       <Footer/>
    </>
  );
}
