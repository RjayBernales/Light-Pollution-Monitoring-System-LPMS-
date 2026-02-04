// long,lat sa campus
const CAMPUS_CENTER = [8.359999, 124.868103];

// Define bounds sa campus paras campus ditso
const CAMPUS_BOUNDS = L.latLngBounds(
  [8.355000, 124.860000],
  [8.365000, 124.876000]  
);

//Leaflet ni for map initialization
const map = L.map("map").setView([8.49, 124.82], 11);

L.tileLayer(
  "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
  {
    attribution: "&copy; OpenStreetMap contributors",
    maxZoom: 19
  }
).addTo(map);