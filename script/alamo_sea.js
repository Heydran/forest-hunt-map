import { createMarker } from "./marker.js";

const markers = [];

function loadAlamoMarkers() {
  const map = document.getElementById("map-container");
  map.style.backgroundImage = "url('../assets/alamo-sea.jpg')";
  markers.forEach((marker) => {
    // console.log(`Marcador adicionado em: x=${marker.x}, y=${marker.y}`);
    map.appendChild(createMarker(marker.x, marker.y));
  });
}

export { loadAlamoMarkers };
