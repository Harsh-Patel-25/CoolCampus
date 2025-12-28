function applyTheme(theme) {
  if (theme === "light") {
    document.body.classList.add("light-mode");
    localStorage.setItem("theme", "light");
    document.getElementById("themeIcon").src = "half-moon_547433.png";
    document.getElementById("themeTooltip").textContent = "Switch to dark mode";
  } else {
    document.body.classList.remove("light-mode");
    localStorage.setItem("theme", "dark");
    document.getElementById("themeIcon").src = "sunny_979585.png";
    document.getElementById("themeTooltip").textContent = "Switch to light mode";
  }
}

function toggleTheme() {
  const theme = document.body.classList.contains("light-mode")
    ? "dark"
    : "light";
  applyTheme(theme);
}

window.onload = () => {
  const savedTheme = localStorage.getItem("theme") || "dark";
  applyTheme(savedTheme);
};
