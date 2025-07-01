import { map } from "./marker.js";
import { createMarker } from "./marker.js";
import { drawSideMenu } from "./side-menu.js";
map.addEventListener("click", (e) => {
  const rect = map.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  map.appendChild(createMarker(x, y));
  console.log(`Marcador adicionado em: x=${x}, y=${y}`);
});

drawSideMenu();
