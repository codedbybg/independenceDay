const sky = document.getElementById("sky");
const fireworksContainer = document.getElementById("fireworks-container");
const music = document.querySelector("audio");
const sun = document.querySelector(".sun");
const moon = document.querySelector(".moon");
const flag = document.querySelector(".flag");
const pole = document.querySelector(".pol");
const button = document.querySelector("#button");
const container = document.querySelector(".container");
const heading = document.querySelector(".heading");

sun.classList.remove("sun");
moon.classList.remove("moon");
flag.classList.remove("flag");
pole.classList.remove("pol");
heading.classList.remove("heading");

button.addEventListener("click", () => {
  const dateValue = document.querySelector("#input").value;
  const date = new Date(dateValue);
  const today = new Date();
  const userYear = date.getFullYear();
  const currYear = today.getFullYear();

  checkDateValue(dateValue, date, userYear, currYear);
});

function checkDateValue(dateValue, date, userYear, currYear) {
  if (dateValue) {
    const day = date.getDate();
    const month = date.getMonth(); // 0 = Jan, 6 = July

    if (day === 15 && month === 7 && userYear === currYear) {
      music.muted = false;
      music.play();
      

      addClass();

      // Display message in a heading or separate div
      heading.innerHTML = `Happy ${userYear - 1947+1}th Independence Day!`;
      heading.style.display = "block";

      container.style.opacity = 0;

      // Transition to night after 6 seconds
      setTimeout(() => {
        sky.classList.add("night");
        launchFireworks();
        sun.style.opacity = 0;
        moon.style.opacity = 1;
      }, 1000*6);
      setTimeout(()=>{
      music.muted = true;
      location.reload();
      
      },1000*54);
    } else {
      window.alert("Please enter the valid date of this year (15-08-YYYY)!");
    }
  } else {
    window.alert("No date selected!");
  }
}

function addClass() {
  sun.classList.add("sun");
  moon.classList.add("moon");
  flag.classList.add("flag");
  pole.classList.add("pol");
  heading.classList.add("heading");
}

function launchFireworks() {
  for (let i = 0; i < 20; i++) {
    const fw = document.createElement("div");
    fw.className = "firework";
    fw.style.top = Math.random() * window.innerHeight + "px";
    fw.style.left = Math.random() * window.innerWidth + "px";
    fireworksContainer.appendChild(fw);
  }
}
