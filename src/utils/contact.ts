export const WHATSAPP_URL = "https://wa.me/5491157628934";
export const CONTACT_EMAIL = "contacto@forgetech.dev";

/** Reports a contact intent (WhatsApp or email click) to the Meta Pixel. */
export const trackContact = () => {
  if (typeof window.fbq === "function") window.fbq("track", "Contact");
};
