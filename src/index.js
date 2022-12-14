document.getElementById("box").addEventListener("click", () => {
  console.log("click");
  document.getElementById("box-body").classList.add("open");
  document.getElementById("box-body").style.animation = "unset";
});
