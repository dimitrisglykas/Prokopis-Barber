import { Component, lazy, Suspense, useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { INTRO_DURATION_MS, INTRO_EXIT_MS, INTRO_SESSION_KEY, shouldShowIntro } from "./intro-policy";

const IntroScene = lazy(() => import("./IntroScene"));

class SceneFallback extends Component<{ children: ReactNode }, { failed: boolean }> {
  override state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  override render() {
    return this.state.failed ? null : this.props.children;
  }
}

export function IntroSplash() {
  const [visible, setVisible] = useState(false);
  const [leaving, setLeaving] = useState(false);
  const [ready, setReady] = useState(false);
  const [gold, setGold] = useState("");
  const exitTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const dismiss = useCallback(() => {
    if (exitTimer.current) return;
    setLeaving(true);
    exitTimer.current = setTimeout(() => setVisible(false), INTRO_EXIT_MS);
  }, []);
  const onReady = useCallback(() => setReady(true), []);

  useEffect(() => {
    let seen: string | null = null;
    try {
      seen = sessionStorage.getItem(INTRO_SESSION_KEY);
      sessionStorage.setItem(INTRO_SESSION_KEY, "1");
    } catch {
      // Storage restrictions must never prevent access to the website.
    }
    if (!shouldShowIntro(seen, matchMedia("(prefers-reduced-motion: reduce)").matches)) return;
    setGold(getComputedStyle(document.documentElement).getPropertyValue("--intro-metal").trim());
    setVisible(true);
    const timeout = setTimeout(dismiss, INTRO_DURATION_MS);
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") dismiss();
    };
    window.addEventListener("keydown", handleKey);
    return () => {
      clearTimeout(timeout);
      if (exitTimer.current) clearTimeout(exitTimer.current);
      window.removeEventListener("keydown", handleKey);
    };
  }, [dismiss]);

  if (!visible) return null;
  return (
    <div
      className="intro-splash fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-background"
      data-leaving={leaving}
      data-scene-ready={ready || undefined}
      role="dialog"
      aria-label="Prokopis Barber Shop"
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <SceneFallback>
          <Suspense fallback={null}>
            {gold && <IntroScene gold={gold} onReady={onReady} />}
          </Suspense>
        </SceneFallback>
      </div>
      <div className="intro-signature relative flex flex-col items-center px-5 text-center pointer-events-none">
        <img src="/logo.png" width={192} height={192} alt="Προκόπης Ντερτιλής Barber Shop Logo" className="intro-logo size-40 object-contain sm:size-48" onError={dismiss} />
        <p className="mt-7 font-display text-3xl text-primary sm:text-4xl">PROKOPIS BARBER SHOP</p>
        <p className="mt-2 text-xs text-muted-foreground">Κόρινθος · Est. 1926</p>
        <span className="intro-rule mt-6 h-px w-24 bg-primary" />
      </div>
      <Button variant="ghost" onClick={dismiss} className="absolute bottom-8 left-6 gap-2 text-muted-foreground hover:bg-secondary hover:text-foreground sm:bottom-10 sm:left-10">
        Παράλειψη <ArrowRight />
      </Button>
    </div>
  );
}