
export function getDarkModeEnabled() {
  return JSON.parse(localStorage.getItem("DARKMODE") ?? "false");
}
export function setTheme() {
  if (!getDarkModeEnabled()) {
    document.body.classList.add("dark");
    localStorage.setItem("DARKMODE", "true");
  } else {
    document.body.classList.remove("dark");
    localStorage.removeItem("DARKMODE");
  }
}