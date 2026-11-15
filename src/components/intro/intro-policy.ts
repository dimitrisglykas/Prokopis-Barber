export const INTRO_SESSION_KEY = "prokopis-intro-seen-v1";
export const INTRO_DURATION_MS = 2400;
export const INTRO_EXIT_MS = 260;

export function shouldShowIntro(seen: string | null, reducedMotion: boolean) {
  return seen !== "1" && !reducedMotion;
}