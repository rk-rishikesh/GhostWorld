import Web3 from "web3";
import { Biconomy } from "@biconomy/mexa";
import { Web3Auth } from "@web3auth/web3auth";
import { CHAIN_NAMESPACES, CustomChainConfig } from "@web3auth/base";
import { ADAPTER_EVENTS } from "@web3auth/base";
import { LOGIN_MODAL_EVENTS } from "@web3auth/ui";
import { CONNECTED_EVENT_DATA } from "@web3auth/base";

let biconomy;

var account;
const contractAddress = "0x8F5A5713f0F50101b57833CCAc2727AEf9cb4101";
const abi = [{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"_tokenIds","outputs":[{"internalType":"uint256","name":"_value","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_tokenURI","type":"string"}],"name":"createNFT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getUnlockTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}];


// Web3Auth Integration

const polygonMumbaiConfig = {
  chainNamespace: CHAIN_NAMESPACES.EIP155,
  rpcTarget: "https://rpc-mumbai.maticvigil.com",
  blockExplorer: "https://mumbai-explorer.matic.today",
  chainId: "0x13881",
  displayName: "Polygon Mumbai Testnet",
  ticker: "matic",
  tickerName: "matic",
};

const web3auth = new Web3Auth({
  chainConfig: polygonMumbaiConfig,
  clientId: "BIsrnDw8kUxA_juuIONxL2am4zVAcNCVdzo-CzBYJ1qt9gevYDWYtSmZNT2d9eu0KaPZboFBZTloF_LkQSOZJsU" // get your clientId from https://developer.web3auth.io
});


function subscribeAuthEvents(Web3Auth) {
Web3Auth.on(ADAPTER_EVENTS.CONNECTED, (CONNECTED_EVENT_DATA) => {
  console.log("Yeah!, you are successfully logged in", CONNECTED_EVENT_DATA);
});

Web3Auth.on(ADAPTER_EVENTS.CONNECTING, () => {
  console.log("connecting");
});

Web3Auth.on(ADAPTER_EVENTS.DISCONNECTED, () => {
  console.log("disconnected");
});

Web3Auth.on(ADAPTER_EVENTS.ERRORED, (error) => {
  console.log("some error or user have cancelled login request", error);
});

Web3Auth.on(LOGIN_MODAL_EVENTS.MODAL_VISIBILITY, (isVisible) => {
  console.log("modal visibility", isVisible);
});
}

const initializeModal = async () => {
  subscribeAuthEvents(web3auth);
  await web3auth.initModal();
  biconomy = new Biconomy(window.web3.currentProvider, {
    apiKey: "X0nASxmit.1294d210-d057-4fbb-979c-094caa9a5b22",
  });
};


const loadBlockchainData = async () => {
  biconomy.onEvent(biconomy.READY, async () => {
    const provider = await web3auth.connect();
    homeScreen.classList.remove("visible");
    mintScreen.classList.add("visible");
  });
};

const initBlockchain = async () => {
  await initializeModal();
  await loadBlockchainData();

};

const mintNFT = async () => {
  const userInfo = await web3auth.getUserInfo();
  console.log(userInfo);
  console.log(biconomy);
  const web3 = new Web3(biconomy);
  console.log();

  account = web3.eth.accounts.create().address;
  const balance = await web3.eth.getBalance(account);
  console.log(account)
  console.log(balance)

  console.log(account);
  // const nft = new web3.eth.Contract(abi, contractAddress);
  // nft.methods
  //   .createNFT("https://gateway.pinata.cloud/ipfs/QmPQrHYvmhuZMXhbHSqTAJqkFQ4jxwZETAYgKmuzi9MrQK/1.json")
  //   .send({ from: account })
  //   .on("transactionHash", (hash) => {
  //     console.log(hash);

  //     mintScreen.classList.remove("visible");
  //     loginScreen.classList.add("visible");
  //   });
  mintScreen.classList.remove("visible");
  loginScreen.classList.add("visible");
};


// ***************************************************** //

/* HOME SCREEN*/
const homeScreen = document.getElementById("screen-one");
homeScreen.classList.add("visible");

const loginScreen = document.getElementById("login");

const mintScreen = document.getElementById("mint");
const mint = mintScreen.querySelector(".btn-mint_1");

const login = homeScreen.querySelector(".btn-login");

const start = loginScreen.querySelector(".btn-start");
const gameScreen = document.getElementById("screen-two");

gameScreen.classList.remove("visible");


login.addEventListener("click", initBlockchain);

const startGame = () => {
  loginScreen.classList.remove("visible");
  gameScreen.classList.add("visible");
};

start.addEventListener("click", startGame);


mint.addEventListener("click", mintNFT);

// Game Instructions

var character = document.querySelector(".character");
var map = document.querySelector(".map");

//start in the middle of the map
var x = 90;
var y = 34;
var held_directions = []; //State of which arrow keys we are holding down
var speed = 1; //How fast the character moves in pixels per frame

const placeCharacter = () => {
  var pixelSize = parseInt(
    getComputedStyle(document.documentElement).getPropertyValue("--pixel-size")
  );

  const held_direction = held_directions[0];
  if (held_direction) {
    if (held_direction === directions.right) {
      x += speed;
    }
    if (held_direction === directions.left) {
      x -= speed;
    }
    if (held_direction === directions.down) {
      y += speed;
    }
    if (held_direction === directions.up) {
      y -= speed;
    }
    character.setAttribute("facing", held_direction);
  }
  character.setAttribute("walking", held_direction ? "true" : "false");

  //Limits (gives the illusion of walls)
  var leftLimit = -2;
  var rightLimit = 16 * 11 + 8;
  var topLimit = -8 + 32;
  var bottomLimit = 16 * 7;
  if (x < leftLimit) {
    x = leftLimit;
  }
  if (x > rightLimit) {
    x = rightLimit;
  }
  if (y < topLimit) {
    y = topLimit;
  }
  if (y > bottomLimit) {
    y = bottomLimit;
  }

  var camera_left = pixelSize * 66;
  var camera_top = pixelSize * 42;

  map.style.transform = `translate3d( ${-x * pixelSize + camera_left}px, ${
    -y * pixelSize + camera_top
  }px, 0 )`;
  character.style.transform = `translate3d( ${x * pixelSize}px, ${
    y * pixelSize
  }px, 0 )`;
};

//Set up the game loop
const step = () => {
  placeCharacter();
  window.requestAnimationFrame(() => {
    step();
  });
};
step(); //kick off the first step!

/* Direction key state */
const directions = {
  up: "up",
  down: "down",
  left: "left",
  right: "right",
};
const keys = {
  38: directions.up,
  37: directions.left,
  39: directions.right,
  40: directions.down,
};
document.addEventListener("keydown", (e) => {
  var dir = keys[e.which];
  if (dir && held_directions.indexOf(dir) === -1) {
    held_directions.unshift(dir);
  }
});

document.addEventListener("keyup", (e) => {
  var dir = keys[e.which];
  var index = held_directions.indexOf(dir);
  if (index > -1) {
    held_directions.splice(index, 1);
  }
});

/* BONUS! Dpad functionality for mouse and touch */
var isPressed = false;
const removePressedAll = () => {
  document.querySelectorAll(".dpad-button").forEach((d) => {
    d.classList.remove("pressed");
  });
};
document.body.addEventListener("mousedown", () => {
  console.log("mouse is down");
  isPressed = true;
});
document.body.addEventListener("mouseup", () => {
  console.log("mouse is up");
  isPressed = false;
  held_directions = [];
  removePressedAll();
});
const handleDpadPress = (direction, click) => {
  if (click) {
    isPressed = true;
  }
  held_directions = isPressed ? [direction] : [];

  if (isPressed) {
    removePressedAll();
    document.querySelector(".dpad-" + direction).classList.add("pressed");
  }
};
//Bind a ton of events for the dpad
document
  .querySelector(".dpad-left")
  .addEventListener("touchstart", (e) =>
    handleDpadPress(directions.left, true)
  );
document
  .querySelector(".dpad-up")
  .addEventListener("touchstart", (e) => handleDpadPress(directions.up, true));
document
  .querySelector(".dpad-right")
  .addEventListener("touchstart", (e) =>
    handleDpadPress(directions.right, true)
  );
document
  .querySelector(".dpad-down")
  .addEventListener("touchstart", (e) =>
    handleDpadPress(directions.down, true)
  );

document
  .querySelector(".dpad-left")
  .addEventListener("mousedown", (e) => handleDpadPress(directions.left, true));
document
  .querySelector(".dpad-up")
  .addEventListener("mousedown", (e) => handleDpadPress(directions.up, true));
document
  .querySelector(".dpad-right")
  .addEventListener("mousedown", (e) =>
    handleDpadPress(directions.right, true)
  );
document
  .querySelector(".dpad-down")
  .addEventListener("mousedown", (e) => handleDpadPress(directions.down, true));

document
  .querySelector(".dpad-left")
  .addEventListener("mouseover", (e) => handleDpadPress(directions.left));
document
  .querySelector(".dpad-up")
  .addEventListener("mouseover", (e) => handleDpadPress(directions.up));
document
  .querySelector(".dpad-right")
  .addEventListener("mouseover", (e) => handleDpadPress(directions.right));
document
  .querySelector(".dpad-down")
  .addEventListener("mouseover", (e) => handleDpadPress(directions.down));
