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

  // function sendCinematique() {
  //   send("debutCinematique", { quatre: true });
  //   wss.clients.forEach(function each(client) {
  //     if ((client != ws && client.readyState) === WebSocket.OPEN) {
  //       client.send("debutCinematique");
  //     }
  //   });
  // }
  console.log("joueur connecté");

  ws.on("message", function (str) {
    on(str, "codeRandom", (data) => {
      codeDebut = data.codeUnity;
      console.log(data.codeUnity);
    });

    on(str, "codeClient", (data) => {
      if (codeDebut === data.code) {
        if (user <= 3) {
          send("verifCode", { verif: "code Accepté" });
          user = user + 1;
          console.log(user);
          wss.clients.forEach(function each(client) {
            if (client != ws && client.readyState === WebSocket.OPEN) {
              client.send("player" + user);
            }
          });
        } else {
          send("verifCode", { verif: "code Accepté Mais" });
        }
      }
      if (codeDebut != data.code) {
        send("verifCode", { verif: "Code refusé" });
      }
    });

    on(str, "videoMobilePlay", (data) => {
      console.log(data.activeVideo);
      wss.clients.forEach(function each(client) {
        if (client != ws && client.readyState === WebSocket.OPEN) {
          function sendClient(eventName, data) {
            client.send(JSON.stringify({ eventName, ...data }));
          }
          sendClient("videoStart", { active: "playVideo" });
        }
      });
    });

    on(str, "videoMobileFini", (data) => {
      console.log(data.finVideo);
      wss.clients.forEach(function each(client) {
        if (client != ws && client.readyState === WebSocket.OPEN) {
          function sendClient(eventName, data) {
            client.send(JSON.stringify({ eventName, ...data }));
          }
          sendClient("videoEnd", { desactive: "endVideo" });
        }
      });
    });

    on(str, "move", (data) => {
      // console.log("X : " + data.x + " / Y : " + data.y);
      let x = data.x;
      let y = data.y;
      wss.clients.forEach(function each(client) {
        if (client != ws && client.readyState === WebSocket.OPEN) {
          client.send("X" + x + "Y" + y);
        }
      });
    });

    on(str, "jump", (data) => {
      if (data.jump === true) {
        wss.clients.forEach(function each(client) {
          if (client != ws && client.readyState === WebSocket.OPEN) {
            client.send("jump");
          }
        });
      }
    });
  });
});
