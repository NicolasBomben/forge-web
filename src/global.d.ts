/** Meta (Facebook) Pixel command queue injected by the fbevents.js snippet. */
interface FacebookPixel {
  (...args: unknown[]): void;
  callMethod?: (...args: unknown[]) => void;
  queue: unknown[];
  push: FacebookPixel;
  loaded: boolean;
  version: string;
}

interface Window {
  fbq?: FacebookPixel;
  _fbq?: FacebookPixel;
}
