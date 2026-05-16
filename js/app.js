// CHANGE: Vanilla JS navigation, theme persistence, and email hydration.
const root = document.documentElement;
const themeToggle = document.querySelector(".theme-toggle");
const themeLabel = document.querySelector(".theme-label");
const navToggle = document.querySelector(".nav-toggle");
const navPanel = document.querySelector(".nav-panel");
const emailTarget = document.querySelector(".email-id");

const storedTheme = localStorage.getItem("portfolio-theme");
const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
const initialTheme = storedTheme || (prefersLight ? "light" : "dark");

function applyTheme(theme) {
  root.dataset.theme = theme;
  localStorage.setItem("portfolio-theme", theme);

  if (themeToggle && themeLabel) {
    const isLight = theme === "light";
    themeToggle.setAttribute("aria-pressed", String(isLight));
    themeLabel.textContent = isLight ? "Light" : "Dark";
  }
}

applyTheme(initialTheme);

themeToggle?.addEventListener("click", () => {
  applyTheme(root.dataset.theme === "light" ? "dark" : "light");
});

navToggle?.addEventListener("click", () => {
  const isOpen = navPanel?.classList.toggle("is-open") || false;
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

navPanel?.addEventListener("click", (event) => {
  const target = event.target;
  if (target instanceof HTMLAnchorElement) {
    navPanel.classList.remove("is-open");
    navToggle?.setAttribute("aria-expanded", "false");
  }
});

if (emailTarget) {
  const username = "abhinav2506293";
  const hostname = "gmail.com";
  emailTarget.textContent = `${username}@${hostname}`;
}
