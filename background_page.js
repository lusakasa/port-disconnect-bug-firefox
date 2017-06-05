
const portMap = new Map();
let portNumber = 0;

chrome.runtime.onConnect.addListener((port) => {
  portMap.set(port, portNumber);
  port.onDisconnect.addListener(disconnectListener);
  console.log(`Port ${portNumber} connected.`);
  portNumber++;
});

function disconnectListener (port) {
  console.log(`Port ${portMap.get(port)} disconnected.`)
  portMap.delete(port);
}

