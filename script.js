const themeBtn =
document.getElementById("themeBtn");

const savedTheme =
localStorage.getItem("theme");

if(savedTheme){
  document.documentElement.setAttribute(
    "data-theme",
    savedTheme
  );
}

themeBtn.addEventListener("click", () => {

  const current =
    document.documentElement.getAttribute(
      "data-theme"
    );

  const next =
    current === "dark"
      ? "light"
      : "dark";

  document.documentElement.setAttribute(
    "data-theme",
    next
  );

  localStorage.setItem(
    "theme",
    next
  );
});

document
.getElementById("requestForm")
.addEventListener("submit", (e) => {

  e.preventDefault();

  alert(
    "Supply request submitted successfully."
  );

});