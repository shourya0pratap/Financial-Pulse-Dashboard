// Themes
const themeButton = document.getElementById("theme-btn");
const themes = ["light", "dark"];
const emojis = ["☀️", "🌙"];
let currentTheme = localStorage.getItem("userTheme") || "light";

// Function curry to update UI
const updateUI = (property) => (element) => (value) => {
  element[property] = value;
};

// Specialized functions
const setButtonEmoji = updateUI("textContent")(themeButton);
const setButtonTheme = updateUI("className")(themeButton);
const setBodyTheme = updateUI("className")(document.body);

function setTheme(newInd) {
  const newTheme = themes[newInd];
  const newEmoji = emojis[newInd];

  setBodyTheme(`${newTheme}-theme`);
  setButtonTheme(`${newTheme}-theme`);
  setButtonEmoji(newEmoji);

  localStorage.setItem("userTheme", `${newTheme}`);
  currentTheme = newTheme;
}

// Set theme
const savedIndex = themes.indexOf(currentTheme);
setTheme(savedIndex);

themeButton.addEventListener("click", () => {
  let currentInd = themes.indexOf(currentTheme);
  setTheme((currentInd + 1) % 2);
});

const API_KEY = "Z25C0O3UC714TZXS";
const priceFormatter = (symbol) => (precision) => (price) =>
  `${symbol}${price.toFixed(precision)}`;

const usdFormatter = priceFormatter("$")(2);
