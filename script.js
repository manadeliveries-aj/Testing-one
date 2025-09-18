// script.js
document.addEventListener("DOMContentLoaded", function () {
  console.log("JS Loaded ✅");

  const btn = document.getElementById("clickMe");
  if (btn) {
    btn.addEventListener("click", () => {
      alert("Hello AJ 🎉 — your split code works!");
    });
  }
});
