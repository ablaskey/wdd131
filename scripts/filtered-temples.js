
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("currentYear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = `Last modified: ${document.lastModified}`;
});

const menuButton = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuButton.addEventListener("click", () => {
    navMenu.classList.toggle("show");

    const isOpen = navMenu.classList.contains("show");
    menuButton.textContent = isOpen ? "❌" : "☰";
});

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Gila Valley Arizona",
        location: "Central, Arizona, United States",
        dedicated: "2010, May, 23",
        area: 18561,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/the-gila-valley-arizona/400x250/gila-valley-temple-759378-wallpaper.jpg"
    },
    {
        templeName: "Gilbert Arizona",
        location: "Gilbert, Arizona, United States",
        dedicated: "2014, March, 2",
        area: 85326,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/gilbert-arizona/400x250/gilbert-arizona-mormon-temple-1172202-wallpaper.jpg"
    },
    {
        templeName: "London England",
        location: "London, England",
        dedicated: "1958, September, 7",
        area: 42652,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/london-england/400x250/london-england-temple-lds-650241-wallpaper.jpg"
    },
    // Add more temple objects here...
];

function templeCard(card) {
    return `<figure class="temple-card" >
    <figcaption>
        <h2>${card.templeName}</h2>
        <p><strong>Location:</strong> ${card.location}</p>
        <p><strong>Dedicated:</strong> ${card.dedicated}</p>
        <p><strong>Area:</strong> ${card.area} sq ft</p>
    </figcaption>
    <img src="${card.imageUrl}" alt="${card.templeName} Temple" loading="lazy">
</figure>`
}

const title = document.querySelector(`#title`);
const header = document.querySelector(`header`);


function renderAllCard(sections) {
    const html = sections.map(templeCard);
    document.querySelector("#main").innerHTML = html.join("");
}

function renderOldCard(sections) {
    const filterTemples = sections.filter(card => parseInt(card.dedicated.slice(0, 4)) < 1900);
    const html = filterTemples.map(templeCard);
    document.querySelector("#main").innerHTML = html.join("");
}

function renderNewCard(sections) {
    const filterTemples = sections.filter(card => parseInt(card.dedicated.slice(0, 4)) > 2000);
    const html = filterTemples.map(templeCard);
    document.querySelector("#main").innerHTML = html.join("");
}

function renderLargeCard(sections) {
    const filterTemples = sections.filter(card => card.area > 90000);
    const html = filterTemples.map(templeCard);
    document.querySelector("#main").innerHTML = html.join("");
}

function renderSmallCard(sections) {
    const filterTemples = sections.filter(card => card.area < 10000);
    const html = filterTemples.map(templeCard);
    document.querySelector("#main").innerHTML = html.join("");
}

renderAllCard(temples)

document.querySelector(`#old`).addEventListener(`click`, function (event) {
    renderOldCard(temples)
})

document.querySelector(`#new`).addEventListener(`click`, function (event) {
    renderNewCard(temples)
})

document.querySelector(`#large`).addEventListener(`click`, function (event) {
    renderLargeCard(temples)
})

document.querySelector(`#small`).addEventListener(`click`, function (event) {
    renderSmallCard(temples)
})