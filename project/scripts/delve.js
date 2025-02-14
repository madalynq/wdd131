document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

// Store the selected elements that we are going to use. This is not required but a good practice with larger programs where the variable will be referenced more than once.
const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

const filterNav = document.querySelector('.filter-nav');
const filterButton = document.querySelector('#filter');

// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});

filterButton.addEventListener('click', () => {
	filterNav.classList.toggle('show');
	filterButton.classList.toggle('show');
});


function toggleCard(card) {
	card.classList.toggle('expanded');
}

const ghosties = [
    {
      ghostName: "Leshy",
      classification: "Ghost",
      description: "Shape-shifter, trickster, guardian of the forest and it's creatures. Only hostile if it, or anything in it's territory, is threatened.",
	  videoUrl: "https://www.tiktok.com/@delveintothenetherworld/video/7336043464938753323?is_from_webapp=1&sender_device=pc&web_id=7470646839566665262",
      imageUrl:
      "images/leshy.webp"
    },
    {
	  ghostName: "Banshee",
      classification: "Ghost",
      description: "Omen, most often of death. Not usually the cause of death as it typically isn't hostile. Known as the crying, wailing, and weeping ghost.",
	  videoUrl: "https://www.tiktok.com/@delveintothenetherworld/video/7336418286843727146?is_from_webapp=1&sender_device=pc&web_id=7470646839566665262",
      imageUrl:
      "images/banshee.webp"
    },
    {
	  ghostName: "Karakoncolos",
      classification: "Creature",
      description: "Goblin-like, devious trickster that likes to prey on people. Usually just wants to play, but gets frustrated if you cannot match it's wit. Can potentially cause harm or death.",
	  videoUrl: "https://www.tiktok.com/@delveintothenetherworld/video/7336786390711012650?is_from_webapp=1&sender_device=pc&web_id=7470646839566665262",
      imageUrl:
      "images/karakoncolos.webp"
    },
    {
	  ghostName: "Tikbalang",
	  classification: "Creature",
	  description: "Trickster, likes to spin people in circles in the forest. Wear clothes inside out to break it's spell. Can be dangerous, but can also be a guardian spirit if you can prove your bravery.",
	  videoUrl: "https://www.tiktok.com/@delveintothenetherworld/video/7334557773771918635?is_from_webapp=1&sender_device=pc&web_id=7470646839566665262",
	  imageUrl:
	  "images/tikbalang.webp"
    },
    {
	  ghostName: "Vetala",
	  classification: "Ghost",
	  description: "Intelligent spirits, can possess bodies and manipulate your mind. Can be either an advisor, or a trickster- be wary.",
	  videoUrl: "https://www.tiktok.com/@delveintothenetherworld/video/7332725574240128298?is_from_webapp=1&sender_device=pc&web_id=7470646839566665262",
	  imageUrl:
	  "images/vetala.webp"
    },
    {
	  ghostName: "Wendigo",
	  classification: "Creature",
	  description: "Extremely dangerous. Created when a starving person resorts to cannibalism, they become creatures with hightened senses, long, strong limbs and an insatiable hunger for flesh.",
	  videoUrl: "https://www.tiktok.com/@delveintothenetherworld/video/7332331606603992363?is_from_webapp=1&sender_device=pc&web_id=7470646839566665262",
	  imageUrl:
	  "images/wendigo.webp"
    },
    {
	  ghostName: "Onryō",
	  classification: "Ghost",
	  description: "Dangerous, vengeful spirit that was born from intense rage or sorrow. Looking for revenge on those who wronged them, it can cause misfortune and even death- their curses can extend to places, other familiy members, and even bloodlines.",
	  videoUrl: "https://www.tiktok.com/@delveintothenetherworld/video/7331590380141497646?is_from_webapp=1&sender_device=pc&web_id=7470646839566665262",
	  imageUrl:
	  "images/onryo1.webp"
    },
    {
	  ghostName: "Black Shuck",
	  classification: "Creature",
	  description: "Ridiculously large black dog. In very rare instances, it can be a guardian spirit; however most sightings bring misfortune and often death.",
	  videoUrl: "https://www.tiktok.com/@delveintothenetherworld/video/7337893268262292782?is_from_webapp=1&sender_device=pc&web_id=7470646839566665262",
	  imageUrl:
	  "images/black-shuck.webp"
    },
    {
	  ghostName: "Drekavac",
	  classification: "Ghost",
	  description: "Violent ghosts, often said to be the spirit of a child who died under tragic circumstances, or died before being baptised. Has various forms, including a small, dog-like beast, or a deformed child-like figure.",
	  videoUrl: "https://www.tiktok.com/@delveintothenetherworld/video/7333261494940978474?is_from_webapp=1&sender_device=pc&web_id=7470646839566665262",
	  imageUrl:
	  "images/drekavac1.webp"
    },
    {
	  ghostName: "Jorogumo",
	  classification: "Creature",
	  description: "Devious, conniving, dangerous shape-shifter. It can shift between a giant spider and a beautiful young woman, it attemts to seduce and lure people to her layer where she traps and consumes them. ",
	  videoUrl: "https://www.tiktok.com/@delveintothenetherworld/video/7345663386576784683?is_from_webapp=1&sender_device=pc&web_id=7470646839566665262",
	  imageUrl:
	  "images/jorogumo.webp"
    },
    {
	  ghostName: "Skinwalker",
	  classification: "Creature",
	  description: "Extremely dangerous. Witch/ socerer gone rogue, a powerful shape-shifter capable of taking on many forms and attempting to blend into society. Known to stalk, harm, and kill their victims.",
	  videoUrl: "https://www.tiktok.com/@delveintothenetherworld/video/7343451140241034539?is_from_webapp=1&sender_device=pc&web_id=7470646839566665262",
	  imageUrl:
	  "images/skinwalker.webp"
    },
    {
	  ghostName: "Painted Skin",
	  classification: "Creature",
	  description: "Extremely dangerous, powerful sorceress, demon and/ or vampire. Can appear as a beautiful woman, as she wears or creates human skin to hide her true form. Seduces and traps her prey to feed on them.",
	  videoUrl: "https://www.tiktok.com/@delveintothenetherworld/video/7331964833916521771?is_from_webapp=1&sender_device=pc&web_id=7470646839566665262",
	  imageUrl:
	  "images/painted-skin.webp"
    },
];

createCard(ghosties);

function createCard(filteredGhosties) {
    filteredGhosties.forEach(ghostie => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let classification = document.createElement("p");
        let description = document.createElement("p");
		let tiktok = document.createElement("a");
        let img = document.createElement("img");
		let cardContent = document.createElement("div");

		name.textContent = ghostie.ghostName;
        classification.innerHTML = `<span class="label">Classification:</span> ${ghostie.classification}`;
        description.innerHTML = `<span class="label">Description:</span> ${ghostie.description}`;
		tiktok.href = ghostie.videoUrl;
		tiktok.textContent = `...More Info`;
		tiktok.target = "_blank";
        img.setAttribute("src", ghostie.imageUrl);
        img.setAttribute("alt", `${ghostie.ghostName}`);
        img.setAttribute("loading", "lazy");
        img.setAttribute("width", "400");
        img.setAttribute("height", "250");

		card.setAttribute("onclick", "toggleCard(this)");
		card.classList.add("card");

		cardContent.classList.add("card-content");

		cardContent.appendChild(classification);
		cardContent.appendChild(description);
		cardContent.appendChild(tiktok);
        
        card.appendChild(img);
		card.appendChild(name);
        card.appendChild(cardContent);
      
        

        document.querySelector(".ghost-card").appendChild(card);
    });
};

const allLink = document.querySelector("#all")
const ghostLink = document.querySelector("#ghosts");
const creatureLink = document.querySelector("#creatures");

ghostLink.addEventListener("click", () => {
    document.querySelector(".ghost-card").innerHTML = "";
    createCard(ghosties.filter(ghostie => ghostie.classification == ("Ghost")));
    document.querySelector("h2").innerHTML = "Ghosts";
});

allLink.addEventListener("click", () => {
    document.querySelector(".ghost-card").innerHTML = "";
    createCard(ghosties);
    document.querySelector("h2").innerHTML = "The Archives";
});

creatureLink.addEventListener("click", () => {
    document.querySelector(".ghost-card").innerHTML = "";
    createCard(ghosties.filter(ghostie => ghostie.classification == ("Creature")));
    document.querySelector("h2").innerHTML = "Creatures";
});