import { ref as p, computed as l } from "vue";
const u = (a) => {
  const e = window;
  console.log("global", e);
  const t = p(!1), o = l(() => a != null && a !== "");
  return {
    loadRecaptcha: () => {
      if (o.value && e && !e.grecaptcha) {
        const c = document.createElement("script");
        document.head.appendChild(c), c.onload = () => {
          e.grecaptcha.ready(() => {
            t.value = !0;
          });
        }, c.setAttribute("src", `https://www.google.com/recaptcha/api.js?render=${a}`);
      } else
        e.grecaptcha && (t.value = !0);
    },
    getToken: async (c) => !o.value || !e.grecaptcha ? Promise.resolve(void 0) : new Promise((r) => {
      e.grecaptcha.ready(
        () => void (async () => {
          const n = await e.grecaptcha.execute(a, { action: c });
          r(n);
        })()
      );
    }),
    recaptchaIsLoaded: t,
    hasRecaptcha: o
  };
};
export {
  u as useV3Recaptcha
};
