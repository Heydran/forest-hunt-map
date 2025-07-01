import { createMarker } from "./marker.js";

const markers = [
  { x: 415, y: 398, marked: false },
  { x: 420, y: 433, marked: false },
  { x: 280, y: 427, marked: false },
  { x: 319, y: 407, marked: false },
  { x: 514, y: 210, marked: false },
];

function loadAlamoMarkers() {
  const map = document.getElementById("map-container");
  map.style.backgroundImage = "url('./assets/alamo-sea.jpg')";
  markers.forEach((marker) => {
    // console.log(`Marcador adicionado em: x=${marker.x}, y=${marker.y}`);
    map.appendChild(createMarker(marker.x, marker.y));
  });
}

export { loadAlamoMarkers };
