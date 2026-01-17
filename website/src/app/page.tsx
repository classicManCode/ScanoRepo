import { Hero } from "@/components/home/Hero";
import { Features } from "@/components/home/Features";

export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      <Hero />
      <Features />
    </div>
  );
}
