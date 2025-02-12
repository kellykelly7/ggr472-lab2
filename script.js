mapboxgl.accessToken = 'pk.eyJ1Ijoia2VsbHlrZWxseTciLCJhIjoiY202aWNjdDE5MDcwbTJrcHppYWw5ZjJzcCJ9.pry2p-gu8qXteiF0TWa4dw'; // Add default public map token from your Mapbox account

const map = new mapboxgl.Map({
    container: 'campus-buildings', // map container ID
    style: 'mapbox://styles/kellykelly7/cm72971jc006x01s33axk653l', // style URL
    center: [-79.39473435218616, 43.66319033700751], // starting position [lng, lat]
    zoom: 14.5, // starting zoom level
});

map.on('load', () => {
    map.addSource('campus-buildings', {
        type: 'geojson',
        data: 'https://raw.githubusercontent.com/kellykelly7/ggr472-lab2/refs/heads/main/campusbuildings.geojson' // Your URL to your buildings.geojson file
        })
        map.addLayer({
            'id': 'campus-buildings',
            'type': 'fill',
            'source': 'campus-buildings', 
            'layout': {},
            'paint': {
                'fill-color': '#0080ff', 
                'fill-opacity': 0.8
            }
        });
        map.addLayer({
            'id': 'outline',
            'type': 'line',
            'source': 'campus-buildings',
            'layout': {},
            'paint': {
                'line-color': '#000',
                'line-width': 1
            }
    });
    map.addSource('campus-path', {
        type: 'geojson',
        data: 'https://raw.githubusercontent.com/kellykelly7/ggr472-lab2/refs/heads/main/campuspath.geojson'
        })
        map.addLayer({
            'id': 'campus-path',
            'type': 'line',
            'source': 'campus-path',
            'layout': {
                'line-join': 'round',
                'line-cap': 'square'
            },
            'paint': {
                'line-color': '#00ffff',
                'line-width': 3
            }
    });
});


// establishing constant variables for all my buttons from the html page with IDs
const btn = document.getElementById("sidsmith_commons");
const bttn = document.getElementById("places_to_eat");
const acorn = document.getElementById("acorn");
const quercus = document.getElementById("quercus");
const artsci_cal = document.getElementById("artsci_calendar");
const ttb = document.getElementById("timetable_builder");
const utl = document.getElementById("utlibraries");

// adding a reaction to clicking on the buttons added to the html webpage
acorn.addEventListener("click", () => {
    window.open("https://acorn.utoronto.ca/", "_blank");
});

quercus.addEventListener("click", () => {
    window.open("https://q.utoronto.ca/", "_blank");
});

artsci_cal.addEventListener("click", () => {
    window.open("https://artsci.calendar.utoronto.ca/", "_blank");
});

ttb.addEventListener("click", () => {
    window.open("https://ttb.utoronto.ca/", "_blank");
});

utl.addEventListener("click", () => {
    window.open("https://onesearch.library.utoronto.ca/", "_blank");
});