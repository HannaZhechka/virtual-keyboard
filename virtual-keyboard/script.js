const KEYS = [
  {
    code: "Backquote",
    engLowerCase: "`",
    engUpperCase: "`",
    rusLowerCase: "]",
    rusUpperCase: "]",
    keepShift: "~",
  },
  {
    code: "Digit1",
    engLowerCase: "1",
    engUpperCase: "1",
    rusLowerCase: "1",
    rusUpperCase: "1",
    keepShift: "!",
  },
  {
    code: "Digit2",
    engLowerCase: "2",
    engUpperCase: "2",
    rusLowerCase: "2",
    rusUpperCase: "2",
    keepShift: "@",
  },
  {
    code: "Digit3",
    engLowerCase: "3",
    engUpperCase: "3",
    rusLowerCase: "3",
    rusUpperCase: "3",
    keepShift: "£",
  },
  {
    code: "Digit4",
    engLowerCase: "4",
    engUpperCase: "4",
    rusLowerCase: "4",
    rusUpperCase: "4",
    keepShift: "$",
  },
  {
    code: "Digit5",
    engLowerCase: "5",
    engUpperCase: "5",
    rusLowerCase: "5",
    rusUpperCase: "5",
    keepShift: "%",
  },
  {
    code: "Digit6",
    engLowerCase: "6",
    engUpperCase: "6",
    rusLowerCase: "6",
    rusUpperCase: "6",
    keepShift: "^",
  },
  {
    code: "Digit7",
    engLowerCase: "7",
    engUpperCase: "7",
    rusLowerCase: "7",
    rusUpperCase: "7",
    keepShift: "&",
  },
  {
    code: "Digit8",
    engLowerCase: "8",
    engUpperCase: "8",
    rusLowerCase: "8",
    rusUpperCase: "8",
    keepShift: "*",
  },
  {
    code: "Digit9",
    engLowerCase: "9",
    engUpperCase: "9",
    rusLowerCase: "9",
    rusUpperCase: "9",
    keepShift: "(",
  },
  {
    code: "Digit0",
    engLowerCase: "0",
    engUpperCase: "0",
    rusLowerCase: "0",
    rusUpperCase: "0",
    keepShift: ")",
  },
  {
    code: "Minus",
    engLowerCase: "-",
    engUpperCase: "-",
    rusLowerCase: "-",
    rusUpperCase: "-",
    keepShift: "_",
  },
  {
    code: "Equal",
    engLowerCase: "=",
    engUpperCase: "=",
    rusLowerCase: "=",
    rusUpperCase: "=",
    keepShift: "+",
  },
  {
    code: "Backspace",
    engLowerCase: "delete",
    engUpperCase: "delete",
    rusLowerCase: "delete",
    rusUpperCase: "delete",
    width: 100,
  },
  {
    code: "Tab",
    engLowerCase: "tab",
    engUpperCase: "tab",
    rusLowerCase: "tab",
    rusUpperCase: "tab",
    width: 100,
  },
  {
    code: "KeyQ",
    engLowerCase: "q",
    engUpperCase: "Q",
    rusLowerCase: "й",
    rusUpperCase: "Й",
  },
  {
    code: "KeyW",
    engLowerCase: "w",
    engUpperCase: "W",
    rusLowerCase: "ц",
    rusUpperCase: "Ц",
  },
  {
    code: "KeyE",
    engLowerCase: "e",
    engUpperCase: "E",
    rusLowerCase: "у",
    rusUpperCase: "У",
  },
  {
    code: "KeyR",
    engLowerCase: "r",
    engUpperCase: "R",
    rusLowerCase: "к",
    rusUpperCase: "К",
  },
  {
    code: "KeyT",
    engLowerCase: "t",
    engUpperCase: "T",
    rusLowerCase: "е",
    rusUpperCase: "Е",
  },
  {
    code: "KeyY",
    engLowerCase: "y",
    engUpperCase: "Y",
    rusLowerCase: "н",
    rusUpperCase: "Н",
  },
  {
    code: "KeyU",
    engLowerCase: "u",
    engUpperCase: "U",
    rusLowerCase: "г",
    rusUpperCase: "Г",
  },
  {
    code: "KeyI",
    engLowerCase: "i",
    engUpperCase: "I",
    rusLowerCase: "ш",
    rusUpperCase: "Ш",
  },
  {
    code: "KeyO",
    engLowerCase: "o",
    engUpperCase: "O",
    rusLowerCase: "щ",
    rusUpperCase: "Щ",
  },
  {
    code: "KeyP",
    engLowerCase: "p",
    engUpperCase: "P",
    rusLowerCase: "з",
    rusUpperCase: "З",
  },
  {
    code: "BracketLeft",
    engLowerCase: "[",
    engUpperCase: "[",
    rusLowerCase: "х",
    rusUpperCase: "Х",
    keepShift: "{",
  },
  {
    code: "BracketRight",
    engLowerCase: "]",
    engUpperCase: "]",
    rusLowerCase: "ъ",
    rusUpperCase: "Ъ",
    keepShift: "}",
  },
  {
    code: "Backslash",
    engLowerCase: "\\",
    engUpperCase: "\\",
    rusLowerCase: "ё",
    rusUpperCase: "Ё",
    keepShift: "|",
  },
  {
    code: "CapsLock",
    engLowerCase: "caps lock",
    engUpperCase: "caps lock",
    rusLowerCase: "caps lock",
    rusUpperCase: "caps lock",
    width: 110,
  },
  {
    code: "KeyA",
    engLowerCase: "a",
    engUpperCase: "A",
    rusLowerCase: "ф",
    rusUpperCase: "Ф",
  },
  {
    code: "KeyS",
    engLowerCase: "s",
    engUpperCase: "S",
    rusLowerCase: "ы",
    rusUpperCase: "Ы",
  },
  {
    code: "KeyD",
    engLowerCase: "d",
    engUpperCase: "D",
    rusLowerCase: "в",
    rusUpperCase: "В",
  },
  {
    code: "KeyF",
    engLowerCase: "f",
    engUpperCase: "F",
    rusLowerCase: "а",
    rusUpperCase: "А",
  },
  {
    code: "KeyG",
    engLowerCase: "g",
    engUpperCase: "G",
    rusLowerCase: "п",
    rusUpperCase: "П",
  },
  {
    code: "KeyH",
    engLowerCase: "h",
    engUpperCase: "H",
    rusLowerCase: "р",
    rusUpperCase: "Р",
  },
  {
    code: "KeyJ",
    engLowerCase: "j",
    engUpperCase: "J",
    rusLowerCase: "о",
    rusUpperCase: "О",
  },
  {
    code: "KeyK",
    engLowerCase: "k",
    engUpperCase: "K",
    rusLowerCase: "л",
    rusUpperCase: "Л",
  },
  {
    code: "KeyL",
    engLowerCase: "l",
    engUpperCase: "L",
    rusLowerCase: "д",
    rusUpperCase: "Д",
  },
  {
    code: "Semicolon",
    engLowerCase: ";",
    engUpperCase: ";",
    rusLowerCase: "ж",
    rusUpperCase: "Ж",
    keepShift: ":",
  },
  {
    code: "Quote",
    engLowerCase: "'",
    engUpperCase: "'",
    rusLowerCase: "э",
    rusUpperCase: "Э",
    keepShift: '"',
  },
  {
    code: "Enter",
    engLowerCase: "return",
    engUpperCase: "return",
    rusLowerCase: "return",
    rusUpperCase: "return",
    width: 100,
  },
  {
    code: "ShiftLeft",
    engLowerCase: "shift",
    engUpperCase: "shift",
    rusLowerCase: "shift",
    rusUpperCase: "shift",
    width: 150,
  },
  {
    code: "KeyZ",
    engLowerCase: "z",
    engUpperCase: "Z",
    rusLowerCase: "я",
    rusUpperCase: "Я",
  },
  {
    code: "KeyX",
    engLowerCase: "x",
    engUpperCase: "X",
    rusLowerCase: "ч",
    rusUpperCase: "Ч",
  },
  {
    code: "KeyC",
    engLowerCase: "c",
    engUpperCase: "C",
    rusLowerCase: "с",
    rusUpperCase: "С",
  },
  {
    code: "KeyV",
    engLowerCase: "v",
    engUpperCase: "V",
    rusLowerCase: "м",
    rusUpperCase: "М",
  },
  {
    code: "KeyB",
    engLowerCase: "b",
    engUpperCase: "B",
    rusLowerCase: "и",
    rusUpperCase: "И",
  },
  {
    code: "KeyN",
    engLowerCase: "n",
    engUpperCase: "N",
    rusLowerCase: "т",
    rusUpperCase: "Т",
  },
  {
    code: "KeyM",
    engLowerCase: "m",
    engUpperCase: "M",
    rusLowerCase: "ь",
    rusUpperCase: "Ь",
  },
  {
    code: "Comma",
    engLowerCase: ",",
    engUpperCase: ",",
    rusLowerCase: "б",
    rusUpperCase: "Б",
    keepShift: "<",
  },
  {
    code: "Period",
    engLowerCase: ".",
    engUpperCase: ".",
    rusLowerCase: "ю",
    rusUpperCase: "Ю",
    keepShift: ">",
  },
  {
    code: "Slash",
    engLowerCase: "/",
    engUpperCase: "/",
    rusLowerCase: "/",
    rusUpperCase: "/",
    keepShift: "?",
  },
  {
    code: "ArrowUp",
    engLowerCase: "▲",
    engUpperCase: "▲",
    rusLowerCase: "▲",
    rusUpperCase: "▲",
  },
  {
    code: "ShiftRight",
    engLowerCase: "shift",
    engUpperCase: "shift",
    rusLowerCase: "shift",
    rusUpperCase: "shift",
    width: 60,
  },
  {
    code: "Fn",
    engLowerCase: "fn",
    engUpperCase: "fn",
    rusLowerCase: "fn",
    rusUpperCase: "fn",
  },
  {
    code: "ControlLeft",
    engLowerCase: "control",
    engUpperCase: "control",
    rusLowerCase: "control",
    rusUpperCase: "control",
    width: 60,
  },
  {
    code: "AltLeft",
    engLowerCase: "option",
    engUpperCase: "option",
    rusLowerCase: "option",
    rusUpperCase: "option",
    width: 50,
  },
  {
    code: "MetaLeft",
    engLowerCase: "command",
    engUpperCase: "command",
    rusLowerCase: "command",
    rusUpperCase: "command",
    width: 70,
  },
  {
    code: "Space",
    engLowerCase: "space",
    engUpperCase: "space",
    rusLowerCase: "space",
    rusUpperCase: "space",
    width: 285,
  },
  {
    code: "MetaRight",
    engLowerCase: "command",
    engUpperCase: "command",
    rusLowerCase: "command",
    rusUpperCase: "command",
    width: 75,
  },
  {
    code: "AltRight",
    engLowerCase: "option",
    engUpperCase: "option",
    rusLowerCase: "option",
    rusUpperCase: "option",
  },
  {
    code: "ArrowLeft",
    engLowerCase: "◄",
    engUpperCase: "◄",
    rusLowerCase: "◄",
    rusUpperCase: "◄",
  },
  {
    code: "ArrowDown",
    engLowerCase: "▼",
    engUpperCase: "▼",
    rusLowerCase: "▼",
    rusUpperCase: "▼",
  },
  {
    code: "ArrowRight",
    engLowerCase: "►",
    engUpperCase: "►",
    rusLowerCase: "►",
    rusUpperCase: "►",
  },
];

let defaultLang = JSON.parse(localStorage.getItem("lang"));
let property;
if (defaultLang) {
  property = defaultLang;
} else {
  property = {
    isRus: false,
    isUpperCase: false,
  };
}

let emptyButtons = [
  "ControlLeft",
  "AltLeft",
  "AltRight",
  "MetaLeft",
  "MetaRight",
];
const MAIN = document.querySelector("#body");
MAIN.innerHTML = `<h1>Виртуальная клавиатура</h1>
<textarea id="textarea"></textarea>
<div class="keyboard" style="display: flex;" id="keyboard"></div>
<p class="description">Клавиатура создана в операционной системе MacOS</p>
<p class="language">Для переключения языка комбинация: shift + option (shift + alt для Windows)</p>`;

const BODY = document.querySelector("#keyboard");
const textarea = document.querySelector("#textarea");

KEYS.forEach((key) => {
  BODY.innerHTML += `<div id=${key.code} style="width: ${
    key.width ? key.width : 50
  }px" class="button">${key.engLowerCase}</div>`;
});

const KEYBOARD_KEYS = [...document.querySelectorAll(".button")];
changeKeyboard();

BODY.addEventListener("click", function (event) {
  const KNOPKA = KEYS.find((el) => el.code === event.target.id);

  if (!event.target.id === BODY) {
    return;
  }

  if (emptyButtons.find((el) => el === event.target.id)) {
    return;
  }

  if (event.target.id === "Backspace") {
    textarea.value = textarea.value.slice(0, -1);
    return;
  }

  if (event.target.id === "Tab") {
    textarea.value += "    ";
    return;
  }

  if (event.target.id === "Enter") {
    textarea.value += "\n";
    return;
  }

  if (event.target.id === "Space") {
    textarea.value += " ";
    return;
  }
  if (event.target.id === "ShiftRight" || event.target.id === "ShiftLeft") {
    return;
  }

  if (event.target.id === "Fn") {
    property.isRus = !property.isRus;
    localStorage.setItem("lang", JSON.stringify(property));
    changeKeyboard();
    return;
  }

  if (event.target.id === "ArrowLeft") {
    textarea.value += "◄";
    return;
  }

  if (event.target.id === "ArrowRight") {
    textarea.value += "►";
    return;
  }

  if (event.target.id === "ArrowUp") {
    textarea.value += "▲";
    return;
  }

  if (event.target.id === "ArrowDown") {
    textarea.value += "▼";
    return;
  }

  if (event.target.id === "CapsLock") {
    event.target.classList.toggle("highlight");
    property.isUpperCase = !property.isUpperCase;
    localStorage.setItem("lang", JSON.stringify(property));
    changeKeyboard();
    return;
  }

  if (property.isRus) {
    if (property.isUpperCase) {
      textarea.value += KNOPKA.rusUpperCase;
    } else {
      textarea.value += KNOPKA.rusLowerCase;
    }
  } else {
    if (property.isUpperCase) {
      textarea.value += KNOPKA.engUpperCase;
    } else {
      textarea.value += KNOPKA.engLowerCase;
    }
  }
});

function changeKeyboard() {
  if (property.isRus) {
    if (property.isUpperCase) {
      KEYBOARD_KEYS.forEach((key, index) => {
        key.innerHTML = KEYS[index].rusUpperCase;
      });
    } else {
      KEYBOARD_KEYS.forEach((key, index) => {
        key.innerHTML = KEYS[index].rusLowerCase;
      });
    }
  } else {
    if (property.isUpperCase) {
      KEYBOARD_KEYS.forEach((key, index) => {
        key.innerHTML = KEYS[index].engUpperCase;
      });
    } else {
      KEYBOARD_KEYS.forEach((key, index) => {
        key.innerHTML = KEYS[index].engLowerCase;
      });
    }
  }
}

BODY.addEventListener("mousedown", function (event) {
  event.target.classList.toggle("highlight");

  if (event.target.id === "ShiftRight" || event.target.id === "ShiftLeft") {
    property.isUpperCase = !property.isUpperCase;
    changeKeyboard();
    KEYBOARD_KEYS.forEach((key, index) => {
      key.innerHTML = KEYS[index].keepShift
        ? KEYS[index].keepShift
        : key.innerHTML;
    });
    return;
  }
});

BODY.addEventListener("mouseup", function (event) {
  event.target.classList.toggle("highlight");

  if (event.target.id === "ShiftRight" || event.target.id === "ShiftLeft") {
    property.isUpperCase = !property.isUpperCase;
    changeKeyboard();
    return;
  }
});

document.addEventListener("keydown", function (event) {
  const BUTTON = KEYS.find((el) => el.code === event.code);

  event.preventDefault();
  const key = KEYBOARD_KEYS.find((el) => el.id === event.code);
  key.classList.toggle("highlight");

  if (event.code === "CapsLock") {
    property.isUpperCase = !property.isUpperCase;
    localStorage.setItem("lang", JSON.stringify(property));
    changeKeyboard();
  }
  if (event.code === "ShiftRight" || event.code === "ShiftLeft") {
    property.isUpperCase = !property.isUpperCase;

    if (event.altKey) {
      property.isRus = !property.isRus;
      localStorage.setItem("lang", JSON.stringify(property));
    }
    changeKeyboard();
    return;
  }

  if (event.code === "Tab") {
    textarea.value += "    ";
    event.preventDefault();
    return;
  }

  if (event.code === "ArrowLeft") {
    textarea.value += "◄";
    return;
  }

  if (event.code === "ArrowRight") {
    textarea.value += "►";
    return;
  }

  if (event.code === "ArrowUp") {
    textarea.value += "▲";
    return;
  }

  if (event.code === "ArrowDown") {
    textarea.value += "▼";
    return;
  }

  if (event.code === "CapsLock") {
    return;
  }

  if (event.code === "Backspace") {
    textarea.value = textarea.value.slice(0, -1);
    return;
  }

  if (event.code === "Enter") {
    textarea.value += "\n";
    return;
  }

  if (event.code === "Space") {
    textarea.value += " ";
    return;
  }

  if (emptyButtons.find((el) => el === event.code)) {
    return;
  }

  if (property.isRus) {
    if (property.isUpperCase) {
      textarea.value += BUTTON.rusUpperCase;
    } else {
      textarea.value += BUTTON.rusLowerCase;
    }
  } else {
    if (property.isUpperCase) {
      textarea.value += BUTTON.engUpperCase;
    } else {
      textarea.value += BUTTON.engLowerCase;
    }
  }
});

document.addEventListener("keyup", function (event) {
  event.preventDefault();
  const key = KEYBOARD_KEYS.find((el) => el.id === event.code);
  key.classList.toggle("highlight");
  if (event.code === "CapsLock") {
    property.isUpperCase = !property.isUpperCase;
    localStorage.setItem("lang", JSON.stringify(property));
    changeKeyboard();
  }
  if (event.code === "ShiftRight" || event.code === "ShiftLeft") {
    property.isUpperCase = !property.isUpperCase;
    changeKeyboard();
  }

  if (event.code === "Tab") {
    return;
  }

  if (event.code === "ArrowLeft") {
    return;
  }

  if (event.code === "ArrowRight") {
    return;
  }

  if (event.code === "ArrowUp") {
    return;
  }

  if (event.code === "ArrowDown") {
    return;
  }
});
