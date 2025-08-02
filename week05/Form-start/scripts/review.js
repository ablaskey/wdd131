document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("currentYear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = `Last modified: ${document.lastModified}`;
});

document.addEventListener("DOMContentLoaded", () => {
    let count = Number(localStorage.getItem("reviewCount")) || 0;
    count++;
    localStorage.setItem("reviewCount", count);
    const countDisplay = document.getElementById("reviewCount");
    if (countDisplay) {
        countDisplay.textContent = count;
    }
});