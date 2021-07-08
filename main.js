const dynamicColorHeader = document.querySelector('.app-dynamiccolor h2');

setInterval(function() {
  const rotation = parseInt(getComputedStyle(dynamicColorHeader).getPropertyValue("--rotation"));
  dynamicColorHeader.style.setProperty("--rotation", `${rotation + 2}deg`);
}, 300);
