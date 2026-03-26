const API_KEY = "Z25C0O3UC714TZXS";
const priceFormatter = (symbol) => (precision) => (price) =>
  `${symbol}${price.toFixed(precision)}`;

const usdFormatter = priceFormatter("$")(2);
