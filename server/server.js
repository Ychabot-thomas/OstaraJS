// WS

const WebSocket = require("ws");


const express = require('express');
const http = require('http');

const app = express();
const server = http.Server(app);
const wss = new WebSocket.Server({ server });

app.get("/", function (req, res) {
  res.sendFile(__dirname + '/index.html');
})

// // Sauvergarde de data
let codeDebut = 0;
let user = 0;
let namePlayer = "";

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

  ws.on("message", function (str) {
    on(str, "codeRandom", (data) => {
      codeDebut = data.codeUnity;
      console.log(data.codeUnity);
    });
    on(str, "codeClient", (data) => {
      if (codeDebut === data.code) {
        if (user <= 3) {
          user = user + 1;
          console.log(user);
          send("verifCode", { verif: "code Accepté", idClient: user });
          wss.clients.forEach(function each(client) {
            if (client != ws && client.readyState === WebSocket.OPEN) {
              client.send(JSON.stringify({ data: user, }));
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
      // console.log("juump : true")
      if (data.jump === true) {
        wss.clients.forEach(function each(client) {
          if (client != ws && client.readyState === WebSocket.OPEN) {
            client.send("jump");
          }
        });
      }
    });

    on(str, "partageRessource", (data) => {
      const { sendPlayer, pierre, graine, fruit, partageJoueur, } = data;

      if (sendPlayer === 1) {
        namePlayer = "sandr"
      }
      if (sendPlayer === 2) {
        namePlayer = "démeter"
      }
      if (sendPlayer === 3) {
        namePlayer = "iàn"
      }
      if (sendPlayer === 4) {
        namePlayer = "seren"
      }
      send("partageRessource", { sendPlayer: namePlayer, pierre, graine, fruit, partageJoueur: 1 })
    });



  });

  setInterval(() => {
    ws.send(JSON.stringify({ type: false }));
  }, 20000)
});

server.listen(process.env.PORT || 9000);