export const INTRO_SESSION_KEY = "prokopis-intro-seen-v1";
export const INTRO_DURATION_MS = 2400;
export const INTRO_EXIT_MS = 260;
export const INTRO_LIGHTWEIGHT_DURATION_MS = 1000;

export function shouldUseIntroScene(compactViewport: boolean, saveData: boolean, reducedMotion: boolean) {
  return !compactViewport && !saveData && !reducedMotion;
}

export function shouldShowIntro(seen: string | null, reducedMotion: boolean) {
  return seen !== "1" && !reducedMotion;
}