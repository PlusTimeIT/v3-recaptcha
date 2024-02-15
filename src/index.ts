import { ref, computed } from "vue";

export const useV3Recaptcha = (site_key: string | null) => {
  const global = window as any;
  const recaptchaIsLoaded = ref<boolean>(false);
  const hasRecaptcha = computed<boolean>(() => site_key !== undefined && site_key !== null && site_key !== "");
  const loadRecaptcha = (): void => {
    if (hasRecaptcha.value && global && !global.grecaptcha) {
      const recaptchaScript = document.createElement("script");
      document.head.appendChild(recaptchaScript);
      recaptchaScript.onload = () => {
        global.grecaptcha.ready(() => {
          recaptchaIsLoaded.value = true;
        });
      };
      recaptchaScript.setAttribute("src", `https://www.google.com/recaptcha/api.js?render=${site_key}`);
    }
  };

  const getToken = async (action: string): Promise<string | undefined> => {
    if (!hasRecaptcha.value || !global.grecaptcha) return Promise.resolve(undefined);
    return new Promise((resolve) => {
      global.grecaptcha.ready(
        () =>
          void (async () => {
            const token = await global.grecaptcha.execute(site_key, { action: action });
            resolve(token);
          })(),
      );
    });
  };

  return {
    loadRecaptcha,
    getToken,
    recaptchaIsLoaded,
    hasRecaptcha,
  };
};
