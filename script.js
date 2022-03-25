var ethers = require("ethers");

const erc721Interface = new ethers.utils.Interface([
  "function safeTransferFrom(address _from, address _to, uint256 _tokenId)",
]);

/* HOME SCREEN*/
const homeScreen = document.getElementById("screen-one");
homeScreen.classList.add("visible");
const loginScreen = document.getElementById("login");

const mintScreen = document.getElementById("mint");
const mint = mintScreen.querySelector(".btn-mint");

const login = homeScreen.querySelector(".btn-login");

const start = loginScreen.querySelector(".btn-start");
const gameScreen = document.getElementById("screen-two");

gameScreen.classList.remove("visible");

var user = null;

const loginUser = async () => {
  const wallet = new sequence.Wallet("mumbai");
  wallet.openWallet();
  const connectDetails = await wallet.connect();

  console.log("=> connected?", connectDetails.connected);
  const walletAddress = await wallet.getAddress();

  console.log(walletAddress);
  user = walletAddress;
  if (connectDetails.connected) {
    homeScreen.classList.remove("visible");
    mintScreen.classList.add("visible");
  }

  //   homeScreen.classList.remove("visible");
  //   loginScreen.classList.add("visible");
};

login.addEventListener("click", loginUser);

const startGame = () => {
  loginScreen.classList.remove("visible");
  gameScreen.classList.add("visible");
};

start.addEventListener("click", startGame);

const mintNFT = async () => {
  const wallet = new sequence.Wallet("mumbai");
  const connectDetails = await wallet.connect();

  console.log("=> connected?", connectDetails.connected);
  var signature;
  
  if (connectDetails.connected) {
    const erc721Interface = new ethers.utils.Interface([
      "function createNFT(string memory _tokenURI)",
    ]);

    const data = erc721Interface.encodeFunctionData("createNFT", [
      "https://gateway.lighthouse.storage/ipfs/QmfQwoktmrWFiTaxr52visdCViQhoH8n3TL81D84kSFksc",
    ]);

    const transaction = {
      to: "0x80a6359bA5FF1e9ec1368cBA356a676C65f46497",
      data,
    };

    const signer = wallet.getSigner()
    signature = await signer.sendTransaction(transaction, 80001);
    console.log(signature)
  }
  if(signature){
    mintScreen.classList.remove("visible");
    loginScreen.classList.add("visible");
  }
};

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

