const main_header = document.getElementById("header");
const bg_title = document.getElementById("title");
const bg_excerpt = document.getElementById("excerpt");
const author_img = document.getElementById("author_img");
const author_name = document.getElementById("name");
const author_date = document.getElementById("date");

const animate_bg = document.querySelectorAll(".animate-bg");
const animate_bg_text = document.querySelectorAll(".animate-bg-text");

const c_date = new Date().toDateString();

setTimeout(animateCard, 2500);

function animateCard() {
  main_header.innerHTML = `<img
    src="https://images.unsplash.com/photo-1648737963080-109bbf325c90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt="card_img"
  />`;

  bg_title.innerHTML = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi,
  iusto.`;

  bg_excerpt.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
  aspernatur.`;

  author_img.innerHTML = `<img src="https://randomuser.me/api/portraits/men/30.jpg" alt="author_img" />`;

  author_name.innerHTML = `John Doe`;

  author_date.innerHTML = c_date;

  animate_bg.forEach((bg) => bg.classList.remove("animate-bg"));

  animate_bg_text.forEach((bg_text) =>
    bg_text.classList.remove("animate-bg-text")
  );
}
