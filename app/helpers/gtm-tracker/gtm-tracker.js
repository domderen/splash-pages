/**
 * Adds new event to google tags manager.
 */
export function pushDataLayer(event) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(event);
}

export function trackEvent(event) {
  pushDataLayer({ event });
}
