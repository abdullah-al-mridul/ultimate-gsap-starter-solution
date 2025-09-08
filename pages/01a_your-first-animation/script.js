import gsap from "gsap";

// card
const card = document.querySelector(".card");

// animation
gsap.to(card, {
  scale: 1.2,
  opacity: 0.5,
  rotate: "+=360",
  duration: 1,
  repeat: -1,
  yoyo: true,
  ease: "elastic.out(1, 0.3)",
});
