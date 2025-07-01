import { createMarker } from "./marker.js";

const markers = [
  { x: 236, y: 379, marked: false },
  { x: 431, y: 192, marked: false },
  { x: 377, y: 418, marked: false },
  { x: 261, y: 428, marked: false },
];

function loadLumberMarkers() {
  const map = document.getElementById("map-container");
  map.style.backgroundImage = "url('../assets/lumber-yard.jpg')";
  markers.forEach((marker) => {
    // console.log(`Marcador adicionado em: x=${marker.x}, y=${marker.y}`);
    map.appendChild(createMarker(marker.x, marker.y));
  });
}

export { loadLumberMarkers };
