document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("currentYear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = `Last modified: ${document.lastModified}`;
});

const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];
const selectElement = document.getElementById("products");

products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.name;
    option.textContent = product.name;
    selectElement.appendChild(option);
});

document.addEventListener("DOMContentLoaded", () => {
    const stars = document.querySelectorAll(".stars label");
    const inputs = document.querySelectorAll(".stars input");
    const starsContainer = document.querySelector(".stars");

    function updateStars(selectedValue) {
        stars.forEach(star => {
            const starNum = Number(star.getAttribute("for").replace("star", ""));
            if (starNum <= selectedValue) {
                star.innerHTML = "&#9733;";
            } else {
                star.innerHTML = "&#9734;";
            }
        });
    }
    inputs.forEach(input => {
        input.addEventListener("change", () => {
            const selected = Number(input.value);
            updateStars(selected);

            if (document.querySelector('input[name="stars"]:checked')) {
                starsContainer.classList.add("valid");
            }
        });
    });
});