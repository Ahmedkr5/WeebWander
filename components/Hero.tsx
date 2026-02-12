import Image from "next/image";

export default function Hero() {
  return (
<section className="relative w-full bg-hero bg-center bg-cover bg-no-repeat">
  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/10" />

  <div className="relative w-full px-6 sm:px-10 lg:px-16 2xl:px-24 py-16 lg:py-24">
    <div className="grid items-center gap-10 lg:grid-cols-2"> 
          <div className="max-w-xl">
            <h1 className="text-5xl sm:text-6xl font-bold leading-[1.1] text-white">
              Navigate The <span className="indigo-gradient">World of Anime</span>{" "}
              When Unsure What To Watch!
            </h1>
            <p className="mt-6 text-white/80">
              Explore top picks, filter fast, and keep scrolling until something clicks.
            </p>
          </div>

<div className="relative w-full h-[45vh] sm:h-[55vh] lg:h-[65vh] 2xl:h-[75vh]">
  <Image
    src="/anime.png"
    alt="anime"
    fill
    sizes="(max-width: 1024px) 90vw, (max-width: 1536px) 50vw, 45vw"
    className="object-contain object-center"
    priority
  />
</div>
        </div>
      </div>
    </section>
  );
}
