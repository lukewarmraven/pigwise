import Navbar from "@/components/Navbar";
import Home from "@/components/sections/Home";
import Solutions from "@/components/sections/Solutions";
import Why from "@/components/sections/Why";
import Pricing from "@/components/sections/Pricing";
import AboutUs from "@/components/sections/AboutUs";
import BookDemo from "@/components/sections/BookDemo";

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <Home />
        <Solutions />
        <Why />
        <Pricing />
        <AboutUs />
        <BookDemo />
      </main>
    </>
  );
}
