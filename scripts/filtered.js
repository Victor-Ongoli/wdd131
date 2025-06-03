const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');
const templeContainer = document.getElementById('templeContainer');
const navLinks = document.querySelectorAll('nav a');
const currentYear = new Date().getFullYear();
const lastModified = document.lastModified;

document.querySelector("#current-year").textContent = `© ${currentYear}`;
document.querySelector("#last-modified").textContent = `Last updated: ${lastModified}`;

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
        templeName: "Nairobi Kenya",
        location: "Nairobi, Kenya",
        dedicated: "2025, May, 18",
        area: "19870",
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/nairobi-kenya-temple/nairobi-kenya-temple-60488-main.jpg"
    },
    {
        templeName: "Massachusetts",
        location: "Massachusetts, USA",
        dedicated: "2000, October, 1",
        area: 69600,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/boston-massachusetts-temple/boston-massachusetts-temple-9913-main.jpg"
    },
    {
        templeName: "Colombia",
        location: "Distrito Capital, Colombia",
        dedicated: "1999, April, 24-26",
        area: "53500",
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/bogota-colombia-temple/bogota-colombia-temple-7733-main.jpg"
    }
  ];

hambutton.addEventListener('click', () => {
  mainnav.classList.toggle('show');
  hambutton.classList.toggle('show');
});

function createTempleCard(temple) {
  const card = document.createElement('div');
  card.className = 'temple-card';
  card.innerHTML = `
      <h2>${temple.templeName}</h2>
      <p><strong>Location:</strong> ${temple.location}</p>
      <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
      <p><strong>Size:</strong> ${temple.area} sq ft</p>
      <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy" crossorigin="anonymous">
  `;
  return card;
}


function displayTemples(filter) {
  templeContainer.innerHTML = '';

  const filteredTemples = temples.filter(temple => {
    const year = parseInt(temple.dedicated.split(',')[0]);
    const area = parseInt(temple.area);

    return (filter === 'old' && year < 1900) ||
      (filter === 'new' && year > 2000) ||
      (filter === 'large' && area > 90000) ||
      (filter === 'small' && area < 10000) ||
      filter === 'all';
  });

  filteredTemples.forEach(temple => templeContainer.appendChild(createTempleCard(temple)));
}

navLinks.forEach(link => link.addEventListener('click', (e) => {
  e.preventDefault();
  displayTemples(e.target.dataset.filter || 'all');
}));

temples.forEach(temple => templeContainer.appendChild(createTempleCard(temple)));