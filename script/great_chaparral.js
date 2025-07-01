import { createMarker } from "./marker.js";

const markers = [
  { x: 455, y: 356, marked: false },
  { x: 294, y: 453, marked: false },
  { x: 271, y: 316, marked: false },
  { x: 418, y: 280, marked: false },
  { x: 377, y: 529, marked: false },
  { x: 425, y: 169, marked: false },
  { x: 412, y: 359, marked: false },
  { x: 328, y: 351, marked: false },
];

function loadGreatMarkers() {
  const map = document.getElementById("map-container");
  map.style.backgroundImage = "url('../assets/great_chaparral.jpg')";
  markers.forEach((marker) => {
    // console.log(`Marcador adicionado em: x=${marker.x}, y=${marker.y}`);
    map.appendChild(createMarker(marker.x, marker.y));
  });
}

export { loadGreatMarkers };
