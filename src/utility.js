import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
/* This code is needed to properly load the images in the Leaflet CSS */
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

function renderPage (componentsArray, callback) {
  const container = document.querySelector('.content');
  container.innerHTML = componentsArray.join('');
  const map = document.getElementById('map');
  if (map) initMap();
  callback();
}

function initMap() {
  // creds to https://github.com/btpschroeder/leaflet-webpack/tree/master
  const map = L.map('map');
  const defaultCenter = [50.492754, 30.560741];
  const defaultZoom = 14;
  const basemap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community'
  });
  const marker = L.marker(defaultCenter);

  map.setView(defaultCenter, defaultZoom);

  basemap.addTo(map);
  marker.addTo(map);
}


export { renderPage }