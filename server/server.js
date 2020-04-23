// WS

const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 9000 });

// // Sauvergarde de data
let codeDebut = 0;
let user = 0;

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
      codeDebut = data.codeUnity;
    });

    on(str, "codeClient", (data) => {
      if (codeDebut === data.code) {
        if (user <= 3) {
          send("verifCode", { verif: "code Accepté" });
          user = user + 1;
          console.log(user);
        } else {
          send("verifCode", { verif: "code Accepté Mais" });
        }
      }
      if (codeDebut != data.code) {
        send("verifCode", { verif: "Code refusé" });
      }
    });

    on(str, "moveX", (data) => {
      console.log("X : " + data.x);
      wss.clients.forEach(function each(client) {
        if (client.readyState === WebSocket.OPEN) {
          client.send("true");
        }
      });
    });

    on(str, "moveY", (data) => {
      console.log("Y : " + data.y);
      wss.clients.forEach(function each(client) {
        if (client.readyState === WebSocket.OPEN) {
          client.send("true");
        }
      });
    });

    // on(str, "jump", (data) => {
    //   console.log("jump : " + data.jump);
    //   wss.clients.forEach(function each(client) {
    //     if (client.readyState === WebSocket.OPEN) {
    //       client.send("true");
    //     }
    //   });
    // });

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
