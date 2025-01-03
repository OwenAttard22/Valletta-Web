document.addEventListener("DOMContentLoaded", () => {
    const map = L.map("map").setView([35.8997, 14.5146], 15);

    // openstreetmap tiles
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // hotspots
    const hotspots = [
        { name: "St John's Co-Cathedral", coords: [35.8999, 14.5126] },
        { name: "Lascaris War Rooms", coords: [35.8976, 14.5142] },
        { name: "Upper Barrakka Gardens", coords: [35.8972, 14.5145] },
        { name: "Saluting Battery", coords: [35.8973, 14.5144] },
        { name: "Fort St. Elmo", coords: [35.9022, 14.5165] },
        { name: "Valletta Waterfront", coords: [35.8922, 14.5098] },
        { name: "Grandmaster's Palace", coords: [35.8995, 14.5133] },
        { name: "Teatru Manoel", coords: [35.8995, 14.5118] },
        { name: "Triton Fountain", coords: [35.8952, 14.5105] },
        { name: "Hastings Gardens", coords: [35.8958, 14.5103] }
    ];
    
    hotspots.forEach(spot => {
        L.marker(spot.coords).addTo(map)
            .bindPopup(`<b>${spot.name}</b>`);
    });
});


