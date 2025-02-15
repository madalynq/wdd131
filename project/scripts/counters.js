function reviewCount () {
    let reviews = localStorage.getItem("reviewCounter") || 0;
    reviews = parseInt(reviews) + 1;
    localStorage.setItem("reviewCounter", reviews);

    let count = document.getElementById("counter");
    if (count) {
        count.textContent = reviews;
    }
};

if (window.location.pathname.includes("review.html")) {
    reviewCount();
};

function messageCount () {
    let reviews = localStorage.getItem("messageCounter") || 0;
    messages = parseInt(messages) + 1;
    localStorage.setItem("messageCounter", messages);

    let counts = document.getElementById("counters");
    if (counts) {
        counts.textContent = messages;
    }
};

if (window.location.pathname.includes("message.html")) {
    reviewCount();
};