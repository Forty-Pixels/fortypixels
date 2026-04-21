/**
 * Opens the Calendly popup widget for scheduling calls.
 * Make sure the Calendly widget script is loaded in layout.tsx
 */
export const openCalendly = () => {
  if (typeof window !== 'undefined' && (window as any).Calendly) {
    (window as any).Calendly.initPopupWidget({
      url: 'https://calendly.com/imaadhifthikar123'
    });
    return false;
  }
};
