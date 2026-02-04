// long,lat sa campus
const CAMPUS_CENTER = [8.359999, 124.868103];

// Define bounds sa campus paras campus ditso
const CAMPUS_BOUNDS = L.latLngBounds(
  [8.355000, 124.860000],
  [8.365000, 124.876000]  
);

//Leaflet ni for map initialization v2 (naanay panning )
const map = L.map("map", {
  center: CAMPUS_CENTER,
  zoom: 17,
  minZoom: 16,
  maxZoom: 19,
  maxBounds: CAMPUS_BOUNDS,
  maxBoundsViscosity: 1.0 
});
// CartoDB Voyager basemap test if klaro
L.tileLayer(
  "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
  {
    attribution: "&copy; OpenStreetMap contributors &copy; CARTO",
    maxZoom: 19
  }
).addTo(map);

// Para ma mark ang border around campus since walay way para campus lang makita
L.rectangle(CAMPUS_BOUNDS, {
  color: "#0d6efd",
  weight: 2,
  fillOpacity: 0.05
}).addTo(map).bindPopup("Northern Bukidnon State College");
