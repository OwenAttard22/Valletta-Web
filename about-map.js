document.addEventListener("DOMContentLoaded", () => {
    const map = L.map("about-map").setView([35.8997, 14.5146], 12);

    // openstreetmap tiles
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // locations , valletta and home
    const locations = [
        { name: "Valletta", coords: [35.8997, 14.5146] },
        { name: "Hometown", coords: [35.873056, 14.441944] },
    ];
    
    locations.forEach(spot => {
        L.marker(spot.coords).addTo(map)
            .bindPopup(`<b>${spot.name}</b>`);
    });
});


