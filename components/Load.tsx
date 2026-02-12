"use client";

import { fetchAnime } from "@/app/action";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

type AnimeCardEl = JSX.Element;

export default function Load() {
  const { ref, inView } = useInView({ threshold: 0 });
  const [data, setData] = useState<AnimeCardEl[]>([]);
  const [page, setPage] = useState(2);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!inView || loading) return;

    setLoading(true);
    fetchAnime(page)
      .then((res) => {
        setData((prev) => [...prev, ...res]);
        setPage((prev) => prev + 1);
      })
      .finally(() => setLoading(false));
  }, [inView, page, loading]);

  return (
    <>
      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {data}
      </section>
      <section className="flex justify-center items-center w-full">
        <div ref={ref}>
          <Image src="./spinner.svg" alt="spinner" width={56} height={56} className="object-contain" />
        </div>
      </section>
    </>
  );
}
