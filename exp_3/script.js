const gallery = document.getElementById("gallery");

const images = [
  { src: "https://picsum.photos/id/1011/600/400", title: "Nature" },
  { src: "https://picsum.photos/id/1015/600/400", title: "Mountains" },
  { src: "https://picsum.photos/id/1025/600/400", title: "Wildlife" },
  { src: "https://picsum.photos/id/1035/600/400", title: "Ocean" },
  { src: "https://picsum.photos/id/1045/600/400", title: "Forest" },
  { src: "https://picsum.photos/id/1055/600/400", title: "Desert" }
];

images.forEach(item => {
  const div = document.createElement("div");
  div.className = "gallery-item";

  const img = document.createElement("img");
  img.src = item.src;
  img.alt = item.title;

  const overlay = document.createElement("div");
  overlay.className = "overlay";
  overlay.textContent = item.title;

  div.appendChild(img);
  div.appendChild(overlay);
  gallery.appendChild(div);
});
