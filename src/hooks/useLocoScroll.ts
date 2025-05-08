import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

type UseLocoScrollProps = {
  containerRef: React.RefObject<HTMLDivElement | null>; // ✅ Accepts null
};

export const useLocoScroll = ({ containerRef }: UseLocoScrollProps) => {
  const scrollRef = useRef<LocomotiveScroll | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const isDesktop = window.innerWidth >= 1024;

    scrollRef.current = new LocomotiveScroll({
      el: containerRef.current,
      smooth: true,
      direction: isDesktop ? "horizontal" : "vertical",
      gestureDirection: isDesktop ? "horizontal" : "vertical",
      smartphone: {
        breakpoint: 767,
        smooth: false,
        direction: "vertical",
        gestureDirection: "vertical",
      } as any,
      tablet: {
        breakpoint: 1023,
        smooth: false,
        direction: "vertical",
        gestureDirection: "vertical",
      } as any,
    });

    return () => {
      scrollRef.current?.destroy();
    };
  }, [containerRef]);

  return scrollRef;
};
