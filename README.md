This demonstrates how chrome and firefox differ in the weay they dispatch chrome.runtime.port.onDisconnect.

* Chrome dispatches port.onDisconnect on EVERY page navigation

![chrome console](./chrome.png)

* Firefox dispatches port.onDisconnect only when you close the tab.

![firefox console](./firefox.png)
