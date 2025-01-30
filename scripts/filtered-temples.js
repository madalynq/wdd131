document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

// Store the selected elements that we are going to use. This is not required but a good practice with larger programs where the variable will be referenced more than once.
const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
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
        templeName: "San Diego Caifornia",
        location: "San Diego, California, United States",
        dedicated: "1993, April, 3",
        area: 72000,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/san-diego-california/400x250/san-diego-temple-765109-wallpaper.jpg"
    },
    {
        templeName: "Laie Hawaii",
        location: "Laie, Hawaii, United States",
        dedicated: "1915, June, 1",
        area: 42100,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/laie-hawaii/400x250/laie-temple-775369-wallpaper.jpg"
    },
    {
        templeName: "Nuku'alofa Tonga",
        location: "Nuku'alofa, Tonga",
        dedicated: "1983, August, 9",
        area: 21184,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/nukualofa-tonga/400x250/nukualofa-tonga-temple-lds-445038-wallpaper.jpg"
    },
    {
        templeName: "Fukuoka Japan",
        location: "Fukuoka, Japan",
        dedicated: "2000, June, 11",
        area: 10700,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/fukuoka-japan/400x250/fukuoka-japan-temple-lds-306863-wallpaper.jpg"
    },
    {
        templeName: "Rexburg Idaho",
        location: "Rexburg, Idaho, United States",
        dedicated: "2008, Febuary, 10",
        area: 57504,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rexburg-idaho/400x250/rexburg-temple-lds-759405-wallpaper.jpg"
    },
    {
        templeName: "Fort Lauderdale FLorida",
        location: "Fort Lauderdale, FLorida, United States",
        dedicated: "2014, May, 4",
        area: 30500,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/fort-lauderdale-florida/2018/400x250/09-Fort-Lauderdale-Temple-2032337.jpg"
    },
];

const templeContainer = document.querySelector('.temple-cards');

temples.map(temple => {
  
  const card = document.createElement('div');
  card.classList.add('temple-card');

  const img = document.createElement('img');
  img.src = temple.imageUrl;
  img.alt = `${temple.templeName} Temple`;
  img.loading = "lazy";

  const name = document.createElement('h3');
  name.textContent = temple.templeName;

  const location = document.createElement('p');
  location.textContent = `Location: ${temple.location}`;

  const dedication = document.createElement('p');
  dedication.textContent = `Dedicated: ${temple.dedicated}`;

  const area = document.createElement('p');
  area.textContent = `Area: ${temple.area} sq ft`;

  card.appendChild(img);
  card.appendChild(name);
  card.appendChild(location);
  card.appendChild(dedication);
  card.appendChild(area);

  templeContainer.appendChild(card);
});