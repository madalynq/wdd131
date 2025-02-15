document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');

if (mainnav && hambutton) {
    hambutton.addEventListener('click', () => {
        mainnav.classList.toggle('show');
        hambutton.classList.toggle('show');
    });
} else {
    console.warn('Navigation or menu button not found in the DOM.');
}


const ghosties = [
    {
      ghostName: "Banshee",
      classification: "Ghost",
    },
    {
	  ghostName: "Black Shuck",
	  classification: "Creature",
    }, 
    {
	  ghostName: "Drekavac",
	  classification: "Ghost",
    },
    {
	  ghostName: "Jorogumo",
	  classification: "Creature",
    },
    {
	  ghostName: "Karakoncolos",
      classification: "Creature",
    },
    {
      ghostName: "Leshy",
      classification: "Ghost",
    },
    {
	  ghostName: "Onryō",
	  classification: "Ghost",
    }, 
    {
	  ghostName: "Painted Skin",
	  classification: "Creature",
    },
    {
	  ghostName: "Skinwalker",
	  classification: "Creature",
    },
    {
	  ghostName: "Tikbalang",
	  classification: "Creature",
    },
    {
	  ghostName: "Vetala",
	  classification: "Ghost",
    },
    {
	  ghostName: "Wendigo",
	  classification: "Creature",
    },
];

document.addEventListener("DOMContentLoaded", function () {
    const selectEntity = document.getElementById('entity');

    if (!selectEntity) {
        console.error("Dropdown element with ID 'entity' not found.");
        return;
    }

    if (!Array.isArray(ghosties) || ghosties.length === 0) {
        console.error("Ghosties array is not defined or empty.");
        return;
    }

    ghosties.forEach(item => {
        const option = document.createElement('option');
        option.value = item.ghostName; // Use ghostName as the value
        option.textContent = item.ghostName; // Display ghost name
        selectEntity.appendChild(option);
    });

    console.log("Dropdown populated successfully.");
});

const reasons = [
    {
        reason: "Feedback",
    },
    {
        reason: "Questions",
    },
    {
        reason: "Experience",
    },
    
];

document.addEventListener("DOMContentLoaded", function () {
    const selectReason = document.getElementById('reason');
    
        if(selectReason) {
            reasons.forEach(item => {
                const option = document.createElement('option');
                option.value = item.reason;
                option.textContent = item.reason;
                selectReason.appendChild(option);
            })
        }
    });