// VARIABLES

const header = document.getElementById("header");
const title = document.getElementById("title");
const paragraph = document.getElementById("paragraph");
const profileImg = document.getElementById("profile__img");
const nameElement = document.getElementById("name");
const dateElement = document.getElementById("date");

const animatedBackgrounds = document.querySelectorAll(".animated__background");
const animatedBackgroundTexts = document.querySelectorAll(
  ".animated__background--text"
);

// MAIN FUNCTION TO GET DATA ON PAGE

const getData = () => {
  header.innerHTML = `
    <img src="./background.jpg" alt="background" />
    `;
  title.innerHTML = `
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
    `;
  paragraph.innerHTML = `
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi       est
          beatae saepe esse soluta ex! Consequatur corrupti asperiores neque
          maiores?
        `;
  profileImg.innerHTML = `
            <img src="./portrait.jpg" alt="portrait" />
        `;
  nameElement.innerHTML = `
        Angelina Jolie
        `;
  dateElement.innerHTML = `
        Jan 01, 2023
        `;

  animatedBackgrounds.forEach((background) =>
    background.classList.remove("animated__background")
  );
  animatedBackgroundTexts.forEach((background) =>
    background.classList.remove("animated__background--text")
  );
};

// LOADING ANIMATION BEFORE INFO LANDS ON A PAGE

setTimeout(getData, 2500);
