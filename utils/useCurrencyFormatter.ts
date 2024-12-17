type CountryName = "India" |
  "United States" |
  "United Kingdom" |
  "Canada" |
  "Australia" |
  "Germany" |
  "France" |
  "Japan" |
  "China" |
  "Brazil" |
  "Mexico" |
  "South Korea" |
  "Russia" |
  "Italy" |
  "Spain" |
  "Netherlands" |
  "Sweden" |
  "Switzerland" |
  "Singapore" |
  "Hong Kong" |
  "Saudi Arabia" |
  "Turkey" |
  "South Africa" |
  "United Arab Emirates" |
  "Argentina" |
  "Egypt" |
  "Thailand" |
  "Malaysia" |
  "Indonesia" |
  "Philippines" |
  "Vietnam" |
  "Pakistan" |
  "Nigeria" |
  "Bangladesh" |
  "Poland" |
  "Ukraine" |
  "Czech Republic" |
  "Chile" |
  "Peru" |
  "Colombia" |
  "Finland" |
  "Belgium" |
  "Israel" |
  "Portugal" |
  "Denmark" |
  "Norway" |
  "Austria" |
  "Ireland" |
  "New Zealand" |
  "Taiwan";

type CountryInfo = {
  locale: string;
  currency: string;
};

const countryInfoMap: Record<CountryName, CountryInfo> = {
  "India": { locale: "en-IN", currency: "INR" },
  "United States": { locale: "en-US", currency: "USD" },
  "United Kingdom": { locale: "en-GB", currency: "GBP" },
  "Canada": { locale: "en-CA", currency: "CAD" },
  "Australia": { locale: "en-AU", currency: "AUD" },
  "Germany": { locale: "de-DE", currency: "EUR" },
  "France": { locale: "fr-FR", currency: "EUR" },
  "Japan": { locale: "ja-JP", currency: "JPY" },
  "China": { locale: "zh-CN", currency: "CNY" },
  "Brazil": { locale: "pt-BR", currency: "BRL" },
  "Mexico": { locale: "es-MX", currency: "MXN" },
  "South Korea": { locale: "ko-KR", currency: "KRW" },
  "Russia": { locale: "ru-RU", currency: "RUB" },
  "Italy": { locale: "it-IT", currency: "EUR" },
  "Spain": { locale: "es-ES", currency: "EUR" },
  "Netherlands": { locale: "nl-NL", currency: "EUR" },
  "Sweden": { locale: "sv-SE", currency: "SEK" },
  "Switzerland": { locale: "de-CH", currency: "CHF" },
  "Singapore": { locale: "en-SG", currency: "SGD" },
  "Hong Kong": { locale: "zh-HK", currency: "HKD" },
  "Saudi Arabia": { locale: "ar-SA", currency: "SAR" },
  "Turkey": { locale: "tr-TR", currency: "TRY" },
  "South Africa": { locale: "en-ZA", currency: "ZAR" },
  "United Arab Emirates": { locale: "ar-AE", currency: "AED" },
  "Argentina": { locale: "es-AR", currency: "ARS" },
  "Egypt": { locale: "ar-EG", currency: "EGP" },
  "Thailand": { locale: "th-TH", currency: "THB" },
  "Malaysia": { locale: "ms-MY", currency: "MYR" },
  "Indonesia": { locale: "id-ID", currency: "IDR" },
  "Philippines": { locale: "en-PH", currency: "PHP" },
  "Vietnam": { locale: "vi-VN", currency: "VND" },
  "Pakistan": { locale: "en-PK", currency: "PKR" },
  "Nigeria": { locale: "en-NG", currency: "NGN" },
  "Bangladesh": { locale: "bn-BD", currency: "BDT" },
  "Poland": { locale: "pl-PL", currency: "PLN" },
  "Ukraine": { locale: "uk-UA", currency: "UAH" },
  "Czech Republic": { locale: "cs-CZ", currency: "CZK" },
  "Chile": { locale: "es-CL", currency: "CLP" },
  "Peru": { locale: "es-PE", currency: "PEN" },
  "Colombia": { locale: "es-CO", currency: "COP" },
  "Finland": { locale: "fi-FI", currency: "EUR" },
  "Belgium": { locale: "nl-BE", currency: "EUR" },
  "Israel": { locale: "he-IL", currency: "ILS" },
  "Portugal": { locale: "pt-PT", currency: "EUR" },
  "Denmark": { locale: "da-DK", currency: "DKK" },
  "Norway": { locale: "nb-NO", currency: "NOK" },
  "Austria": { locale: "de-AT", currency: "EUR" },
  "Ireland": { locale: "en-IE", currency: "EUR" },
  "New Zealand": { locale: "en-NZ", currency: "NZD" },
  "Taiwan": { locale: "zh-TW", currency: "TWD" },
};

export const useCurrencyFormatter = (
  value: number | `${number}`,
  country: CountryName,
  options: Intl.NumberFormatOptions = {}
): string => {
  const countryInfo = countryInfoMap[country];

  if (!countryInfo) {
    throw new Error(`Country "${country}" is not supported.`);
  }

  const { locale, currency } = countryInfo;
  const numericValue = typeof value === "string" ? parseFloat(value) : value;

  if (isNaN(numericValue)) {
    throw new Error(`Invalid value provided in currency converter: "${value}"`);
  }

  // Default settings
  const defaultOptions: Intl.NumberFormatOptions = {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  };

  // Merge default options with user-provided options
  const finalOptions = { ...defaultOptions, ...options };

  return new Intl.NumberFormat(locale, finalOptions).format(numericValue);
};
