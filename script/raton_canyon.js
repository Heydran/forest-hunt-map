import { createMarker } from "./marker.js";

const markers = [{ x: 544, y: 245, marked: false }];

function loadRatonMarkers() {
  const map = document.getElementById("map-container");
  map.style.backgroundImage = "url('./assets/raton-canyon.jpg')";
  markers.forEach((marker) => {
    // console.log(`Marcador adicionado em: x=${marker.x}, y=${marker.y}`);
    map.appendChild(createMarker(marker.x, marker.y));
  });
}

export { loadRatonMarkers };
