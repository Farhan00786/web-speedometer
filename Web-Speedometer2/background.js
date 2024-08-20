chrome.runtime.onInstalled.addListener(() => {
    console.log("Extension installed");
    chrome.alarms.create("speedometerAlarm", { periodInMinutes: 1 });
  });
  
  chrome.alarms.onAlarm.addListener((alarm) => {
    console.log("Alarm triggered", alarm);
    if (alarm.name === "speedometerAlarm") {
      getNetworkSpeed().then(speed => {
        console.log("Network speed:", speed);
        chrome.storage.local.set({ speed });
      });
    }
  });
  