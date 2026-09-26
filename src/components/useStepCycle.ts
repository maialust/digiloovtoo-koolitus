import { useEffect, useState } from "react";

/**
 * Elemendid (etapid, kaardid) süttivad kordamööda. Kui kasutaja viib hiire või fookuse
 * kaardile, jääb see element esile. Kui liikumine on välja lülitatud, automaatset
 * vahetumist ei toimu.
 */
export function useStepCycle(
  count: number,
  sectionRef: React.RefObject<HTMLElement | null>,
  intervalMs = 2200,
) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [inView, setInView] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.25 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [sectionRef]);

  useEffect(() => {
    if (reduced || paused || !inView) return;
    const id = window.setInterval(() => setActive((v) => (v + 1) % count), 2200);
    return () => window.clearInterval(id);
  }, [reduced, paused, inView, count, intervalMs]);

  return { active, setActive, setPaused };
}
