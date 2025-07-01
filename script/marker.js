function createMarker(x, y) {
  const marker = document.createElement("div");
  marker.className = "box-marker";
  marker.style.left = `${x}px`;
  marker.style.top = `${y}px`;
  return marker;
}

const map = document.getElementById("map-container");

export { createMarker, map };
