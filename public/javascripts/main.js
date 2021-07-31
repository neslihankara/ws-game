const player1 = document.querySelector('.player1')
const player2 = document.querySelector('.player2')

function normalizePositionValue(value) {
  return value ? Number(value.replace("px", "")) : 0;
}

const actionMap = {
    ArrowRight() {
     let currentValue = normalizePositionValue(player1.style.left)

      player1.style.left = `${currentValue + 5}px`;
    },
    ArrowLeft() {
      let currentValue = normalizePositionValue(player1.style.left);

      player1.style.left = `${currentValue - 5}px`;
    },
    ArrowUp() {
      let currentValue = normalizePositionValue(player1.style.top);

      player1.style.top = `${currentValue - 5}px`;
    },
    ArrowDown() {
      let currentValue = normalizePositionValue(player1.style.top);

      player1.style.top = `${currentValue + 5}px`;
    }
};

function onKeyDown(e) {
    console.log(e.key)
    if (e.key in actionMap) {
        actionMap[e.key]()
    }
}

document.addEventListener("keydown", onKeyDown);
