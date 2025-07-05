const yearSpan = document.getElementById("currentYear");
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;

document.getElementById("lastModified").textContent = `Last updated: ${document.lastModified}`;
