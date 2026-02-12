import { Prop } from "@/types";
import Image from "next/image";
import { MotionDiv } from "./MotionDiv";

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

function AnimeCard({ anime, index }: Prop) {
  const episodes = anime.episodes || anime.episodes_aired || "—";
  const kind = anime.kind || "TV";
  const score = anime.score ?? "—";

  return (
    <MotionDiv
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{ delay: index * 0.08, ease: "easeInOut", duration: 0.45 }}
      viewport={{ amount: 0.2, once: true }}
      className="group relative w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-lg shadow-black/20 transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07]"
    >
      {/* Poster */}
      <div className="relative w-full aspect-[3/4]">
        <Image
          src={`https://shikimori.one${anime.image.original}`}
          alt={anime.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05]"
          priority={index < 4}
        />

        {/* Top badges */}
        <div className="absolute left-3 top-3 flex items-center gap-2">
          <span className="rounded-full bg-black/50 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur">
            {kind.toUpperCase()}
          </span>
          <span className="rounded-full bg-black/50 px-2.5 py-1 text-xs font-semibold text-amber-300 backdrop-blur">
            ★ {score}
          </span>
        </div>

        {/* Bottom overlay */}
        <div className="absolute inset-x-0 bottom-0 p-4">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <div className="relative">
            <h2 className="text-lg font-semibold text-white line-clamp-1">
              {anime.name}
            </h2>
            <div className="mt-2 flex items-center justify-between text-sm text-white/80">
              <span className="flex items-center gap-2">
                <Image src="/episodes.svg" alt="episodes" width={18} height={18} />
                {episodes}
              </span>
<span className="text-white/60">{anime.status?.toUpperCase?.() ?? ""}</span>
            </div>
          </div>
        </div>
      </div>
    </MotionDiv>
  );
}

export default AnimeCard;
