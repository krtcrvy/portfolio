import { Button } from "@/components/ui/button";
import myPicture from "@/public/img/3f60e460-766b-4de3-8463-b1b31494a2b4.webp";
import Image from "next/image";
import Link from "next/link";

export default function SectionHero() {
  return (
    <section className="relative bg-stone-950 py-24 overflow-hidden">
      <div
        className="top-0 left-0 z-10 absolute bg-[rgba(249,115,22,0.5)] opacity-50 blur-[80px] rounded-full w-[800px] h-[800px] translate-x-[-50%] translate-y-[-50%]"
        aria-hidden="true"
      />

      <div
        className="top-0 right-0 absolute bg-[rgba(249,115,22,0.5)] opacity-50 blur-[80px] rounded-full w-[500px] h-[500px] translate-x-[20%] translate-y-[30%]"
        aria-hidden="true"
      />

      <div className="items-center gap-8 grid grid-cols-1 lg:grid-cols-2 container">
        <div>
          <Image
            src={myPicture}
            alt="A picture of Kurt Carvey Cadenas"
            className="brightness-75 shadow-[5px_5px_rgba(249,_115,_22,_0.4),_10px_10px_rgba(249,_115,_22,_0.3),_15px_15px_rgba(249,_115,_22,_0.2),_20px_20px_rgba(249,_115,_22,_0.1),_25px_25px_rgba(249,_115,_22,_0.05)] rounded-md w-[90%]"
          />
        </div>

        <div>
          <span className="inline-block mb-8 font-semibold text-primary uppercase tracking-wider">
            Hi, my name is
          </span>

          <h1 className="mb-4 font-bold text-6xl text-stone-50">
            Kurt Carvey Cadenas.
          </h1>

          <p className="mb-8 font-bold text-5xl text-stone-400">
            I build things for the web.
          </p>

          <p className="mb-12 text-stone-400 text-xl">
            I specialize in crafting and designing exceptional digital
            experiences. My mission is to create accessible and user-centric web
            applications that you and your audience will love.
          </p>

          <Button asChild size="lg">
            <Link href="#">Hanap ako work ih</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
