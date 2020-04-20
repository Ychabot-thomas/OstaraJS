// WS

const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 9000 });

// // Sauvergarde de data
let codeDebut = 0;

// // Convertisseur ws --> socket.io
function on(str, eventName, action) {
  const data = JSON.parse(str);
  if (data.eventName === eventName) {
    action(data);
  }
}

wss.on("connection", function connection(ws) {
  // Convertisseur ws --> socket.io
  function send(eventName, data) {
    ws.send(JSON.stringify({ eventName, ...data }));
  }
  console.log("joueur connecté");
  // ws.send("hello");

  ws.on("message", function (str) {
    on(str, "codeRandom", (data) => {
      console.log(data.codeUnity);
      codeDebut = data.codeUnity;
      console.log(codeDebut);
      // send("codeRandom", { code: data.codeUnity });
      // wss.clients.forEach(function each(client) {
      //   if (client !== ws && client.readyState === WebSocket.OPEN) {
      //     client.send(codeDebut);
      //   }
      // });
    });

    on(str, "codeClient", (data) => {
      console.log(data.code);
      if (codeDebut === data.code) {
        send("verifCode", { verif: "oui" });
      } else {
        send("verifCode", { verif: "non" });
      }
    });

    //     // send("testMessage", { messageSend: "Bonjour React" });
    //     // , {
    //     //   messageReact: "Bonjour Client",
    //     //   messageUnity: "Bonjour Unity",
    //     // }
    //     // console.log("Client connecté");
    //     // console.log(JSON.parse(str));
    //     // console.log(toto);
    //     // ws.send("Hello Client");
    //     // const data = JSON.parse(str);
    //     // const { eventName } = data;
    //     // if (eventName === "code") {
    //     //   codeDebut = data.code;
    //     // }
    //     // if (eventName === "numberShow") {
    //     //   // const isPlayerA = data.isPlayerA;
    //     //   // const isPlayerB = data.isPlayerB;
    //     //   // if (isPlayerB) {
    //     //   //   console.log("Joueur 1 :", graine);
    //     //   // }
    //     //   // if (isPlayerA) {
    //     //   //   console.log("Joueur 2 :", graine);
    //     //   // }
    //     //   numberShow(data);
    //     // }
    //     // --------------------------------
    //     // on(str, "code", (data) => {
    //     //   console.log("code", data);
    //     // });
    //     // send("test", { unity: "OK" });
    //     // str --> donnnée reçu / "" --> eventName / fonction executé si évément OK
    //     // on(str, "numberShow", numberShow);
  });
});
