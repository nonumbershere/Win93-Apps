
$window({
  title: "System Editor",
  html: "<button id= 'popup_disabler' onclick='alertsEnabled = !alertsEnabled'>[" + "OFF" + "] Disable Alert Popup</button> <button onclick='procsclose()'>Close All Processess</button><br>"
})
function procsclose() {
  for (var i = 0; i < $window.instances.length; ++i) {
    if ($window.instances[i] == null) {
      console.log("Null window");
    } else {
      if ($window.instances[i].cfg.title == "System Editor") {
        console.log("Found window");
      } else {
        console.log("Window found");
        $window.instances[i].close()
      }
    }
  }
}
var ev = {
  alerts: "OFF",
  hydra: "OFF",
  alerts_: document.getElementById("popup_disabler"),
  hydra_: document.getElementById("hydra_protect")
}
var alertsEnabled = true;
var backup1 = $alert;
var hydraProtection = false;
var backup2 = $confirm;
var backup3 = $prompt;
setTimeout(()=>{
setInterval(() => {
  if (hydraProtection) { 
    for (var i = 0; i < $window.instances.length; ++i) {
    if ($window.instances[i] == null) {
      console.log("Null window");
    } else {
      if ($window.instances[i].cfg.title == "Hydra.exe") {
        console.log("Found window");
        alertsEnabled = false;
        $window.instances[i].close()
      } else {
        console.log("Window found");
      }
    }
  }
  }
  if (alertsEnabled) {
    $alert = backup1;
    $confirm = backup2;
    $prompt = backup3;

    ev.alerts = "OFF";
    ev.alerts_.innerText = `[${ev.alerts}] Disable Alert Popup`
  } else {
    $alert = function() {}
    ev.alerts = "ON";
    ev.alerts_.innerText = `[${ev.alerts}] Disable Alert Popup`
  }
});
},100);
