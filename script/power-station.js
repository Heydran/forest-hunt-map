import { createMarker } from "./marker.js";

const markers = [
  { x: 474, y: 242, marked: false },
  { x: 338, y: 499, marked: false },
  { x: 365, y: 386, marked: false },
  { x: 494, y: 315, marked: false },
  { x: 288, y: 285, marked: false },
  { x: 253, y: 400, marked: false },
];

function loadPowerMarkers() {
  const map = document.getElementById("map-container");
  map.style.backgroundImage = "url('./assets/power-station.jpg')";
  markers.forEach((marker) => {
    // console.log(`Marcador adicionado em: x=${marker.x}, y=${marker.y}`);
    map.appendChild(createMarker(marker.x, marker.y));
  });
}

export { loadPowerMarkers };
