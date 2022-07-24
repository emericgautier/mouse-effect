// Créer 3 ronds de tailles différentes (dont un qui remplacera la souris)

// Ajouter un événement sur la fenetre (window) puis animer la position de ces ronds (top, left injecter "e")

// S'assurer que les liens sont clickables

// Donner un style de transparence aux 2 plus gros ronds (mix-blend-mode)

const mouses = document.querySelectorAll(".mouse");

console.log(mouses);

window.addEventListener("mousemove", (e) => {
  //   console.log(e.x);
  mouses.forEach((mouse) => {
    mouse.style.left = e.x + "px";
    mouse.style.top = e.y + "px";
  });
});

// console.log(cursor);
// console.log(mouse1);
// console.log(mouse2);

// window.addEventListener("mousemove", (e) => {
//   cursor.style.left = e.x + "px";
//   cursor.style.top = e.y + "px";
//   mouse1.style.left = e.x + "px";
//   mouse1.style.top = e.y + "px";
//   mouse2.style.left = e.x + "px";
//   mouse2.style.top = e.y + "px";
// });
