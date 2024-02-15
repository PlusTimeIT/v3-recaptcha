export declare const useV3Recaptcha: (site_key: string | null) => {
    loadRecaptcha: () => void;
    getToken: (action: string) => Promise<string | undefined>;
    recaptchaIsLoaded: import("vue").Ref<boolean>;
    hasRecaptcha: import("vue").ComputedRef<boolean>;
};
//# sourceMappingURL=index.d.ts.map