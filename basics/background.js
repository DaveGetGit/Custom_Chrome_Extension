console.log("Background script running...");

chrome.action.onClicked.addListener(buttonClicked);

function buttonClicked(tab) {
  let msg = {
    txt: "Hello Tab",
  };
  chrome.tabs.sendMessage(tab.id, msg);
}
