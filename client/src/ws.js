// URL Serveur
// const URL = "ws://ostaraserver.herokuapp.com/:9000";
const URL = "ws:/192.168.1.82:9000";

export const ws = new WebSocket(URL);

// Convertisseurn send/emit ws --> socket.io
export function send(eventName, data) {
  ws.send(JSON.stringify({ eventName, ...data }));
}

// Convertisseurn on("message")/on ws --> socket.io
export function on(event, eventName, action) {
  const data = JSON.parse(event);
  if (data.eventName === eventName) {
    action(data);
  }
}
