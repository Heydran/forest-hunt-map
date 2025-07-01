import { loadGreatMarkers } from "./great_chaparral.js";
import { loadAlamoMarkers } from "./alamo_sea.js";
import { loadLumberMarkers } from "./lumber-yard.js";
import { loadPowerMarkers } from "./power-station.js";

// loadGreatMarkers();
// loadAlamoMarkers();
// loadLumberMarkers();
// loadPowerMarkers();

const menuItens = [
  { label: "Chaparral", function: loadGreatMarkers },
  { label: "Alamo", function: loadAlamoMarkers },
  { label: "Lumber Yard", function: loadLumberMarkers },
  { label: "Power Station", function: loadPowerMarkers },
];

function clearMap() {
  const map = document.getElementById("map-container");
  map.innerHTML = "";
}

function drawSideMenu() {
  const menu = document.getElementById("menu-container");
  menuItens.forEach((item) => {
    const button = document.createElement("button");
    button.className = "menu-button";
    button.textContent = item.label;
    button.addEventListener("click", () => {
      clearMap();
      item.function();
    });
    menu.appendChild(button);
  });
}

export { drawSideMenu };
