type MaskConfig = {
    maskChar: string;
    visibleStart?: number;
    visibleEnd: number;
};

type EmailConfig = MaskConfig & {
    maskBefore: boolean;
    maskAfter: boolean;
};

type MobileConfig = MaskConfig & {
    visibleStart: number;
};

type CardConfig = MaskConfig & {
    visibleEnd: number;
};

type Config = EmailConfig | MobileConfig | CardConfig;

export const useMaskedData = (
    value: string,
    type: "email" | "mobile" | "card",
    config: Config = { maskChar: "*", visibleEnd: 4 }
): string => {
    if (!value || typeof value !== "string") return "";

    // Default configurations for each type
    const defaultEmailConfig: EmailConfig = {
        maskChar: "*",
        maskBefore: true,
        maskAfter: false,
        visibleStart: 2,
        visibleEnd: 2,
    };

    const defaultMobileConfig: MobileConfig = {
        maskChar: "*",
        visibleStart: 0,
        visibleEnd: 2,
    };

    const defaultCardConfig: CardConfig = {
        maskChar: "*",
        visibleEnd: 4,
        visibleStart: 0,
    };

    // Merge user config with default config based on the type
    let finalConfig: Config;

    switch (type) {
        case "email":
            finalConfig = { ...defaultEmailConfig, ...config };
            const emailConfig = finalConfig as EmailConfig;

            const [localPart, domain] = value.split("@");
            if (!domain) return value; // Return original value if no valid email format

            let maskedLocal = localPart;
            let maskedDomain = domain;

            // Apply masking rules for the local part (before @)
            if (emailConfig.maskBefore) {
                const startVisible = emailConfig.visibleStart ?? 0;
                if (startVisible < localPart.length) {
                    maskedLocal = `${localPart.slice(0, startVisible)}${emailConfig.maskChar.repeat(
                        localPart.length - startVisible
                    )}`;
                }
            }

            // Apply masking rules for the domain part (after @)
            if (emailConfig.maskAfter) {
                const domainVisible = emailConfig.visibleEnd ?? 0;
                if (domainVisible < domain.length) {
                    maskedDomain = `${domain.slice(0, domainVisible)}${emailConfig.maskChar.repeat(
                        domain.length - domainVisible
                    )}`;
                }
            }

            return `${maskedLocal}@${maskedDomain}`;

        case "mobile":
            finalConfig = { ...defaultMobileConfig, ...config };
            const mobileConfig = finalConfig as MobileConfig;

            // Ensure the visibleStart + visibleEnd does not exceed the value length
            if (mobileConfig.visibleStart + mobileConfig.visibleEnd >= value.length) {
                return value; // Return original value if the sum of visibleStart and visibleEnd exceeds the length
            }

            return `${value.slice(0, mobileConfig.visibleStart)}${mobileConfig.maskChar.repeat(
                value.length - mobileConfig.visibleStart - mobileConfig.visibleEnd
            )}${mobileConfig.visibleEnd !== 0 ? value.slice(-mobileConfig.visibleEnd) : ""}`;

        case "card":
            finalConfig = { ...defaultCardConfig, ...config };
            const cardConfig = finalConfig as CardConfig;

            // Ensure the visibleEnd is within the card number length
            if ((cardConfig.visibleStart ? cardConfig.visibleStart : 0) + cardConfig.visibleEnd >= value.length) {
                return value; // Return original value if visibleEnd exceeds the length
            }

            return `${value.slice(0, cardConfig.visibleStart)}${cardConfig.maskChar.repeat(
                value.length - (cardConfig.visibleStart?cardConfig.visibleStart:0) - cardConfig.visibleEnd
            )}${cardConfig.visibleEnd !== 0 ? value.slice(-cardConfig.visibleEnd) : ""}`;

        default:
            return value;
    }
};
