import { ref as p, computed as l } from "vue";
const u = (a) => {
  const e = window;
  console.log("global", e);
  const o = p(!1), t = l(() => a != null && a !== "");
  return {
    loadRecaptcha: () => {
      if (t.value && e && !e.grecaptcha) {
        const c = document.createElement("script");
        document.head.appendChild(c), c.onload = () => {
          e.grecaptcha.ready(() => {
            o.value = !0;
          });
        }, c.setAttribute("src", `https://www.google.com/recaptcha/api.js?render=${a}`);
      }
    },
    getToken: async (c) => !t.value || !e.grecaptcha ? Promise.resolve(void 0) : new Promise((r) => {
      e.grecaptcha.ready(
        () => void (async () => {
          const n = await e.grecaptcha.execute(a, { action: c });
          r(n);
        })()
      );
    }),
    recaptchaIsLoaded: o,
    hasRecaptcha: t
  };
};
export {
  u as useV3Recaptcha
};
