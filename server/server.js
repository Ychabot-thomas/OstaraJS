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
let nbPlayerPlante = 0;
let nbPlayerDansePluie = 0;
let nbPlayerRecolte = 0;
// let afficheConnexion = false;

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
      // console.log("X : " + data.x + " / Y : " + data.y + " / Joueur : " + data.joueur);
      let x = data.x;
      let y = data.y;
      wss.clients.forEach(function each(client) {
        if (client != ws && client.readyState === WebSocket.OPEN) {
          // console.log("DODO3");
          client.send(JSON.stringify({ data: "X" + x + "Y" + y }));
        }
      });
    });

    on(str, "jump", (data) => {
      if (data.jump === true) {
        send("returnFalseJump", { jump: false })
        wss.clients.forEach(function each(client) {
          if (client != ws && client.readyState === WebSocket.OPEN) {
            // console.log("jump")
            client.send(JSON.stringify({ data: "jump" }));
          }
        });
      }
    });

    on(str, "monnaieUnity", (data) => {
      // console.log("DODO");
      const { sendPlayer, pierre, graine, fruit } = data;
      wss.clients.forEach(function each(client) {
        // console.log("DODO2");
        if (client != ws && client.readyState === WebSocket.OPEN) {
          // console.log("DODO3");
          client.send(JSON.stringify({ type: "RESSOURCES", sendPlayer, pierre, graine, fruit }));
        }
      });
    })

    on(str, "partageRessource", (data) => {
      const { sendPlayer, pierre, graine, fruit, partageJoueur, } = data;
      console.log(partageJoueur);
      let recuPlayer = partageJoueur;
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
      wss.clients.forEach(function each(client) {
        if (client != ws && client.readyState === WebSocket.OPEN) {
          function sendClient(eventName, data) {
            client.send(JSON.stringify({ eventName, ...data }));
          }
          sendClient("partageRessource", { sendPlayer: namePlayer, pierre, graine, fruit, partageJoueur: recuPlayer });
          // clien.send(JSON.stringify({ id: 1, pierres: 1, graines: 1, fruits: 1 }));
        }
      });
      // wss.clients.forEach(function each(client) {
      //   if (client != ws && client.readyState === WebSocket.OPEN) {
      //     client.send(JSON.stringify({ type: "RESSOURCES", sendPlayer: namePlayer, pierre, graine, fruit, partageJoueur: recuPlayer }));
      //   }
      // });
    });

    on(str, "collectCristaux", (data) => {
      console.log(data);
      const { idPlayer, addCristal } = data;
      wss.clients.forEach(function each(client) {
        if (client != ws && client.readyState === WebSocket.OPEN) {
          function sendClient(eventName, data) {
            console.log("collect pierre OK")
            client.send(JSON.stringify({ eventName, ...data }));
          }
          sendClient("addPierre", { idPlayer, addCristal: 1 });
        }
      });
    });

    on(str, "collectGraine", (data) => {
      const { idPlayer, addGraine } = data;
      wss.clients.forEach(function each(client) {
        if (client != ws && client.readyState === WebSocket.OPEN) {
          function sendClient(eventName, data) {
            console.log("collect graine OK");
            client.send(JSON.stringify({ eventName, ...data }));
          }
          sendClient("addGraine", { idPlayer, addGraine: 1 });
        }
      });
    });

    on(str, "afficheContainerPlanter", (data) => {
      console.log(data);
      wss.clients.forEach(function each(client) {
        if (client != ws && client.readyState === WebSocket.OPEN) {
          function sendClient(eventName, data) {
            client.send(JSON.stringify({ eventName, ...data }));
          }
          sendClient("ContainerPlanter", { afficherPlanter: true });
        }
      });
    })

    on(str, "plante", (data) => {
      console.log(data);
      nbPlayerPlante = nbPlayerPlante + 1;
      if (nbPlayerPlante === 4) {
        wss.clients.forEach(function each(client) {
          if (client != ws && client.readyState === WebSocket.OPEN) {
            console.log("plante OK");
            client.send(JSON.stringify({ data: "plante" }));
          }
        });
      }
    })

    on(str, "pluie", (data) => {
      console.log(data);
      nbPlayerDansePluie = nbPlayerDansePluie + 1;
      if (nbPlayerDansePluie === 1) {
        wss.clients.forEach(function each(client) {
          if (client != ws && client.readyState === WebSocket.OPEN) {
            console.log("pluie OK");
            client.send(JSON.stringify({ data: "pluie" }));
          }
        });
      }
    })

    on(str, "recolte", (data) => {
      console.log(data);
      nbPlayerRecolte = nbPlayerRecolte + 1;
      if (nbPlayerRecolte === 4) {
        wss.clients.forEach(function each(client) {
          if (client != ws && client.readyState === WebSocket.OPEN) {
            console.log("recolte OK");
            client.send(JSON.stringify({ data: "recolte" }));
          }
        }
        )
      };
    });

    on(str, "firstPassage", (data) => {
      wss.clients.forEach(function each(client) {
        if (client != ws && client.readyState === WebSocket.OPEN) {
          function sendClient(eventName, data) {
            client.send(JSON.stringify({ eventName, ...data }));
          }
          sendClient("choicePasseur", { afficheConcertation: true });
        }
      });
    })

    on(str, "choiceObstacle", (data) => {
      wss.clients.forEach(function each(client) {
        if (client != ws && client.readyState === WebSocket.OPEN) {
          client.send(JSON.stringify({ data: data.choice }));
          console.log(data.choice);
        }
      });
    })

    on(str, "secondPassage", (data) => {
      console.log(data.eventContainer);
      wss.clients.forEach(function each(client) {
        if (client != ws && client.readyState === WebSocket.OPEN) {
          function sendClient(eventName, data) {
            client.send(JSON.stringify({ eventName, ...data }));
          }
          sendClient("containerConcertation", { afficheConcertation: false });
        }
      });
    })

    on(str, "directionDesert", (data) => {
      console.log(data.changementComponent);
      const { changementComponent } = data;
      wss.clients.forEach(function each(client) {
        if (client != ws && client.readyState === WebSocket.OPEN) {
          function sendClient(eventName, data) {
            client.send(JSON.stringify({ eventName, ...data }));
          }
          sendClient("containerObstacleAttente", { changementManette: true, changeChoiceObstacle: changementComponent });
        }
      })
    })
  });



  // setInterval(() => {
  //   ws.send(JSON.stringify({ type: false }));
  // }, 20000)
});

server.listen(process.env.PORT || 9000);