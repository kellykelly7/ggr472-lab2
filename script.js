mapboxgl.accessToken = 'pk.eyJ1Ijoia2VsbHlrZWxseTciLCJhIjoiY202aWNjdDE5MDcwbTJrcHppYWw5ZjJzcCJ9.pry2p-gu8qXteiF0TWa4dw'; // Add default public map token from your Mapbox account

const map = new mapboxgl.Map({
    container: 'campus-buildings', // map container ID
    style: 'mapbox://styles/kellykelly7/cm72971jc006x01s33axk653l', // style URL
    center: [-79.3908, 43.6593], // starting position [lng, lat]
    zoom: 14.5, // starting zoom level
});