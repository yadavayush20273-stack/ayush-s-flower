const truck = document.getElementById("truck");
const parcel = document.getElementById("parcel");
const teddy = document.getElementById("teddy");
const statusText = document.getElementById("status");

setTimeout(() => {
  parcel.classList.remove("hidden");
  parcel.classList.add("drop");
  statusText.textContent = "Parcel delivered. Tap it for your surprise.";

  // Truck exits after drop so the teddy moment gets center stage.
  setTimeout(() => {
    truck.style.transition = "transform 1.3s ease-in, opacity 1.1s ease";
    truck.style.transform = "translateX(360px)";
    truck.style.opacity = "0";
  }, 800);
}, 4800);

parcel.addEventListener("click", () => {
  parcel.disabled = true;
  parcel.classList.add("opened");
  statusText.textContent = "Aww... your teddy is here with lots of love.";

  setTimeout(() => {
    parcel.classList.add("hidden");
    teddy.classList.remove("hidden");
  }, 420);
});
