(function () {
  // if ("serviceWorker" in navigator) {
  //   window.addEventListener("load", () => {
  //     navigator.serviceWorker
  //       .register("/service-worker.js")
  //       .then((registration) => {
  //         console.log("SW registered: ", registration);
  //       })
  //       .catch((registrationError) => {
  //         console.log("SW registration failed: ", registrationError);
  //       });
  //   });
  // }
  let root = document.getElementById("root");
  let p = document.createElement("p");
  p.innerText = "tesst hhh";
  root.appendChild(p);
  console.log("Listen to beibei~~");
})();
