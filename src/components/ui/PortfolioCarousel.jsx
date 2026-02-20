import { useCallback, useEffect, useMemo, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import PortfolioCard from "./PortfolioCard";
import {
  ArrowCircleLeftIcon,
  ArrowCircleRightIcon,
} from "@phosphor-icons/react";

export default function PortfolioCarousel({ items = [] }) {
  const safeItems = useMemo(() => (Array.isArray(items) ? items : []), [items]);
  if (!safeItems.length) return null;

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    dragFree: false,
    loop: false,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((i) => emblaApi?.scrollTo(i), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="mt-10">
      <div ref={emblaRef} className="overflow-hidden">
        <div className="-ml-4 flex">
          {safeItems.map((item) => (
            <div
              key={item.id}
              className="flex-[0_0_85%] pl-4 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
            >
              <PortfolioCard src={item.src} alt={item.alt} />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-6">
        {/* PREV */}
        <button
          type="button"
          onClick={scrollPrev}
          disabled={!canPrev}
          className="group relative flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-md transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg active:scale-90 disabled:cursor-not-allowed disabled:opacity-30"
        >
          <ArrowCircleLeftIcon
            className="rosa transition-transform duration-300 group-hover:-translate-x-1"
            size={42}
          />
        </button>

        {/* NEXT */}
        <button
          type="button"
          onClick={scrollNext}
          disabled={!canNext}
          className="group relative flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-md transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg active:scale-90 disabled:cursor-not-allowed disabled:opacity-30"
        >
          <div className="bg-rosa/20 pointer-events-none absolute inset-0 rounded-full opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />

          <ArrowCircleRightIcon
            className="rosa transition-transform duration-300 group-hover:translate-x-1"
            size={42}
          />
        </button>
      </div>
    </div>
  );
}
