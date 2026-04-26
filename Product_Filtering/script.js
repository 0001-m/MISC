let images = [
    { src: "https://picsum.photos/200?1", category: "nature" },
    { src: "https://picsum.photos/200?2", category: "animals" },
    { src: "https://picsum.photos/200?3", category: "tech" },
    { src: "https://picsum.photos/200?4", category: "nature" },
    { src: "https://picsum.photos/200?5", category: "animals" }
];

let gallery = document.getElementById("gallery");

// show all initially
displayImages(images);

function displayImages(data) {
    gallery.innerHTML = "";

    for (let i = 0; i < data.length; i++) {
        gallery.innerHTML += `
            <div class="card">
                <img src="${data[i].src}">
            </div>
        `;
    }
}

function filterImages(category) {
    if (category === "all") {
        displayImages(images);
        return;
    }

    let filtered = [];

    for (let i = 0; i < images.length; i++) {
        if (images[i].category === category) {
            filtered.push(images[i]);
        }
    }

    displayImages(filtered);
}