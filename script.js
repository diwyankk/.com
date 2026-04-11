// ===== LOADER HIDE =====
// page load hone ke baad loader hata dega
window.onload = () => {
    document.getElementById("loader").style.display = "none";
};

// ===== AUTO THEME SWITCH =====
// har 7 sec me light ↔ dark change hoga
let isDark = false;

setInterval(() => {
    document.body.classList.toggle("dark");
    document.body.classList.toggle("light");
    isDark = !isDark;
}, 7000);

// start me light mode set
document.body.classList.add("light");

// ===== BGMI COPY FUNCTION =====
// click karne pe ID copy ho jayegi
function copyBGMI(){
    navigator.clipboard.writeText("5882897278");
    alert("BGMI ID copied!");
}
