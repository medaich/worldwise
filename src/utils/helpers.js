import { Timestamp } from "firebase/firestore";

export const formatDate = (date, options = {}) => {
  let jsDate;

  if (date instanceof Timestamp) {
    // Convert Firestore Timestamp to JavaScript Date
    jsDate = date.toDate();
  } else if (date instanceof Date) {
    jsDate = date;
  } else if (typeof date === "string" || typeof date === "number") {
    jsDate = new Date(date);
  } else {
    return null;
  }

  const defaultOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  const formatOptions = {
    ...defaultOptions,
    ...options,
  };

  return new Intl.DateTimeFormat("en", formatOptions).format(jsDate);
};

export function convertToEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}
