export const FB_PIXEL_ID = "1674223914188469";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    _fbq?: unknown;
  }
}

/**
 * Trigger custom or standard Meta Pixel events safely
 */
export const trackPixelEvent = (
  eventName: "PageView" | "Lead" | "Contact" | string,
  params?: Record<string, unknown>
): void => {
  if (typeof window === "undefined") return;

  if (typeof window.fbq === "function") {
    try {
      if (params) {
        window.fbq("track", eventName, params);
      } else {
        window.fbq("track", eventName);
      }
    } catch (err) {
      console.warn("Meta Pixel tracking error:", err);
    }
  }
};
