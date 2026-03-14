"use client";

import { useEffect } from "react";
import "vanilla-cookieconsent/dist/cookieconsent.css";

export default function CookieConsentBanner() {
  useEffect(() => {
    const initCC = async () => {
      const cc = await import("vanilla-cookieconsent");
      cc.run({
        guiOptions: {
          consentModal: {
            layout: "box inline",
            position: "bottom right",
          },
          preferencesModal: {
            layout: "box",
          },
        },
        categories: {
          necessary: {
            enabled: true,
            readOnly: true,
          },
          analytics: {
            autoClear: {
              cookies: [{ name: /^_ga/ }, { name: "_gid" }],
            },
          },
          marketing: {
            autoClear: {
              cookies: [{ name: /^_fb/ }],
            },
          },
        },
        language: {
          default: "hu",
          translations: {
            hu: {
              consentModal: {
                title: "Sütiket használunk 🍪",
                description:
                  "Weboldalunk sütiket használ a legjobb felhasználói élmény biztosításához, látogatottsági statisztikák készítéséhez és marketing célokra. A beállításokat bármikor módosíthatod.",
                acceptAllBtn: "Összes elfogadása",
                acceptNecessaryBtn: "Csak a szükségesek",
                showPreferencesBtn: "Beállítások kezelése",
              },
              preferencesModal: {
                title: "Süti beállítások",
                acceptAllBtn: "Összes elfogadása",
                acceptNecessaryBtn: "Csak a szükségesek",
                savePreferencesBtn: "Beállítások mentése",
                sections: [
                  {
                    title: "Süti használat",
                    description:
                      "Sütiket használunk a webhely működésének biztosításához, a felhasználói élmény javításához, valamint marketing és analitikai célokra.",
                  },
                  {
                    title: "Szükséges sütik",
                    description:
                      "Ezek a sütik elengedhetetlenek a weboldal alapvető működéséhez. Nélkülük az oldal nem tud megfelelően működni.",
                    linkedCategory: "necessary",
                  },
                  {
                    title: "Analitikai sütik",
                    description:
                      "Ezek a sütik segítenek megérteni, hogyan használják látogatóink a weboldalt. Google Analytics segítségével anonim statisztikákat készítünk.",
                    linkedCategory: "analytics",
                  },
                  {
                    title: "Marketing sütik",
                    description:
                      "Ezek a sütik lehetővé teszik, hogy releváns hirdetéseket jelenítsünk meg számodra más weboldalakon is (pl. Facebook).",
                    linkedCategory: "marketing",
                  },
                ],
              },
            },
          },
        },
      });
    };

    initCC();
  }, []);

  return null;
}
