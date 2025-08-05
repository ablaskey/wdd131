
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("currentYear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = `Last modified: ${document.lastModified}`;


const menuButton = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuButton.addEventListener("click", () => {
    navMenu.classList.toggle("open");

    const isOpen = navMenu.classList.contains("open");
    menuButton.textContent = isOpen ? "❌" : "☰";
});

    const recipes = [
        {
            title: "Bread Bowls",
            url: "breadbowls.html",
            date: "2024-12-15",
            image: "images/bread-bowls-large.webp"
        },
        {
            title: "Chicken Gnocchi Soup",
            url: "chickengnocchisoup.html",
            date: "2018-05-12",
            image: "images/chicken-gnocchi-soup-large.webp"
        },

        {
            title: "Cheddar Bacon Chicken",
            url: "cheddarbaconchicken.html",
            date: "2015-07-17",
            image: "images/cheddar-bacon-chicken-large.webp"
        },

        {
            title: "Orange Chicken",
            url: "orangechicken.html",
            date: "2019-08-03",
            image: "images/orange-chicken-large.webp"
        },

        {
            title: "Pumpkin Chili",
            url: "pumpkinchili.html",
            date: "2016-10-28",
            image: "images/pumpkin-chili-large.webp"
        },

        {
            title: "Sweet Pork",
            url: "sweetpork.html",
            date: "2014-10-09",
            image: "images/sweet-pork-large.webp"
        }
    ];

    const container = document.getElementById("recipeContainer");
    const filter = document.getElementById("sortFilter");

    function renderRecipes(data) {
        if (!container) return;
        container.innerHTML = "";
        data.forEach(recipe => {
            const baseName = recipe.image.replace("-large.webp", "");
            const card = document.createElement("div");
            card.className = "recipe-card";
            card.innerHTML = `
            <img src="${recipe.image}" srcset="${baseName}-small.webp 300w, ${recipe.image} 600w" sizes="(max-width: 600px) 100vw, 300px" alt="${recipe.title}" width="300" height="200" loading="lazy">
            <h3><a href="${recipe.url}" target="_blank">${recipe.title}</a></h3>
            <p>Date: ${new Date(recipe.date).toLocaleDateString()}</p>
            `;
            container.appendChild(card);
        });
    }

    function sortRecipes(method) {
        let sorted = [...recipes];
        if (method == "alpha") {
            sorted.sort((a, b) => a.title.localeCompare(b.title));
        } else if (method == "new") {
            sorted.sort((a, b) => new Date(b.date) - new Date(a.date));
        } else if (method == "old") {
            sorted.sort((a, b) => new Date(a.date) - new Date(b.date));
        }
        renderRecipes(sorted);
    }

    if (filter) {

        filter.addEventListener("change", () => {
            sortRecipes(filter.value);
        });
    }

    sortRecipes("alpha");

    const form = document.getElementById("contactForm");
    if (!form) return;

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const recipeName = document.getElementById("recipe-name");
    const recipeText = document.getElementById("recipe");

    if (name) {
        name.value = localStorage.getItem("formName") || "";
        name.addEventListener("input", () => {
            localStorage.setItem("formName", name.value);
        });
    }

    if (email) {
        email.value = localStorage.getItem("formEmail") || "";
        email.addEventListener("input", () => {
            localStorage.setItem("formEmail", email.value);
        });
    }

    if (recipeName) {
        recipeName.value = localStorage.getItem("formRecipeName") || "";
        recipeName.addEventListener("input", () => {
            localStorage.setItem("formRecipeName", recipeName.value);
        });
    }

    if (recipeText) {
        recipeText.value = localStorage.getItem("formRecipe") || "";
        recipeText.addEventListener("input", () => {
            localStorage.setItem("formRecipe", recipeText.value);
        });
    }

    form.addEventListener("submit", () => {
        if (name) localStorage.removeItem("formName");
        if (email) localStorage.removeItem("formEmail");
        if (recipeName) localStorage.removeItem("formRecipeName");
        if (recipeText) localStorage.removeItem("formRecipe");
    });
});
