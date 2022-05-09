import './style/style.scss'

const dataKeys = [
    [
        {keyCode: 'Backquote',  class: 'keyboard__key',    eng: ['`', '`', '~'],   rus: ['ё', 'ё', 'Ё']},
        {keyCode: 'Digit1',     class: 'keyboard__key',    eng: ['1', '1', '!'],   rus: ['1', '1', '!']},
        {keyCode: 'Digit2',     class: 'keyboard__key',    eng: ['2', '2', '@'],   rus: ['2', '2', '"']},
        {keyCode: 'Digit3',     class: 'keyboard__key',    eng: ['3', '3', '#'],   rus: ['3', '3', '№']},
        {keyCode: 'Digit4',     class: 'keyboard__key',    eng: ['4', '4', '$'],   rus: ['4', '4', ';']},
        {keyCode: 'Digit5',     class: 'keyboard__key',    eng: ['5', '5', '%'],   rus: ['5', '5', '%']},
        {keyCode: 'Digit6',     class: 'keyboard__key',    eng: ['6', '6', '^'],   rus: ['6', '6', '?']},
        {keyCode: 'Digit7',     class: 'keyboard__key',    eng: ['7', '7', '&'],   rus: ['7', '7', '?']},
        {keyCode: 'Digit8',     class: 'keyboard__key',    eng: ['8', '8', '*'],   rus: ['8', '8', '*']},
        {keyCode: 'Digit9',     class: 'keyboard__key',    eng: ['9', '9', '('],   rus: ['9', '9', '(']},
        {keyCode: 'Digit0',     class: 'keyboard__key',    eng: ['0', '0', ')'],   rus: ['0', '0', ')']},
        {keyCode: 'Minus',      class: 'keyboard__key',    eng: ['-', '-', '_'],   rus: ['-', '-', '_']},
        {keyCode: 'Equal',      class: 'keyboard__key',    eng: ['=', '=', '+'],   rus: ['=', '=', '+']},
        {keyCode: 'Backspace',  class: 'keyboard__key key_backspace',    eng: 'Backspace', rus: 'Backspace',},
    ],[
        {keyCode: 'Tab',           class: 'keyboard__key key_tab',    eng: 'Tab',   rus: 'Tab'},
        {keyCode: 'KeyQ',          class: 'keyboard__key',    eng: ['q', 'Q', 'Q'],   rus: ['й', 'Й', 'Й']},
        {keyCode: 'KeyW',          class: 'keyboard__key',    eng: ['w', 'W', 'W'],   rus: ['ц', 'Ц', 'Ц']},
        {keyCode: 'KeyE',          class: 'keyboard__key',    eng: ['e', 'E', 'E'],   rus: ['у', 'У', 'У']},
        {keyCode: 'KeyR',          class: 'keyboard__key',    eng: ['r', 'R', 'R'],   rus: ['к', 'К', 'К']},
        {keyCode: 'KeyT',          class: 'keyboard__key',    eng: ['t', 'T', 'T'],   rus: ['е', 'Е', 'Е']},
        {keyCode: 'KeyY',          class: 'keyboard__key',    eng: ['y', 'Y', 'Y'],   rus: ['н', 'Н', 'Н']},
        {keyCode: 'KeyU',          class: 'keyboard__key',    eng: ['u', 'U', 'U'],   rus: ['г', 'Г', 'Г']},
        {keyCode: 'KeyI',          class: 'keyboard__key',    eng: ['i', 'I', 'I'],   rus: ['ш', 'Ш', 'Ш']},
        {keyCode: 'KeyO',          class: 'keyboard__key',    eng: ['o', 'O', 'O'],   rus: ['щ', 'Щ', 'Щ']},
        {keyCode: 'KeyP',          class: 'keyboard__key',    eng: ['p', 'P', 'P'],   rus: ['з', 'З', 'З']},
        {keyCode: 'BracketLeft',   class: 'keyboard__key',    eng: ['[', '[', '{'],   rus: ['х', 'Х', 'Х']},
        {keyCode: 'BracketRight',  class: 'keyboard__key',    eng: [']', ']', '}'],   rus: ['ъ', 'Ъ', 'Ъ']},
        {keyCode: 'Backslash',     class: 'keyboard__key',    eng: ['\\', '\\', '|'],   rus: ['\\', '\\', '|']},
    ],
    [
        {keyCode: 'CapsLock',   class: 'keyboard__key key_caps-lock',    eng: 'CapsLock',   rus: 'CapsLock'},
        {keyCode: 'KeyA',       class: 'keyboard__key',    eng: ['a', 'A', 'A',],   rus: ['ф', 'Ф', 'Ф']},
        {keyCode: 'KeyS',       class: 'keyboard__key',    eng: ['s', 'S', 'S',],   rus: ['ы', 'Ы', 'Ы']},
        {keyCode: 'KeyD',       class: 'keyboard__key',    eng: ['d', 'D', 'D',],   rus: ['в', 'В', 'В']},
        {keyCode: 'KeyF',       class: 'keyboard__key',    eng: ['f', 'F', 'F',],   rus: ['а', 'А', 'А']},
        {keyCode: 'KeyG',       class: 'keyboard__key',    eng: ['g', 'G', 'G',],   rus: ['п', 'П', 'П']},
        {keyCode: 'KeyH',       class: 'keyboard__key',    eng: ['h', 'H', 'H',],   rus: ['р', 'Р', 'Р']},
        {keyCode: 'KeyJ',       class: 'keyboard__key',    eng: ['j', 'J', 'J',],   rus: ['о', 'О', 'О']},
        {keyCode: 'KeyK',       class: 'keyboard__key',    eng: ['k', 'K', 'K',],   rus: ['л', 'Л', 'Л']},
        {keyCode: 'KeyL',       class: 'keyboard__key',    eng: ['l', 'L', 'L',],   rus: ['д', 'Д', 'Д']},
        {keyCode: 'Semicolon',  class: 'keyboard__key',    eng: [';', ';', ':',],   rus: ['ж', 'Ж', 'Ж']},
        {keyCode: 'Quote',      class: 'keyboard__key',    eng: ["'", "'", '"',],   rus: ['э', 'Э', 'Э']},
        {keyCode: 'Enter',      class: 'keyboard__key key_enter',    eng: 'Enter',   rus: 'Enter'},
    ],
    [
        {keyCode: 'ShiftLeft',  class: 'keyboard__key key_shift-left',    eng: 'Shift',   rus: 'Shift'},
        {keyCode: 'KeyZ',       class: 'keyboard__key',    eng: ['z', 'Z', 'Z'],   rus: ['я', 'Я', 'Я',]},
        {keyCode: 'KeyX',       class: 'keyboard__key',    eng: ['x', 'X', 'X'],   rus: ['ч', 'Ч', 'Ч',]},
        {keyCode: 'KeyC',       class: 'keyboard__key',    eng: ['c', 'C', 'C'],   rus: ['с', 'С', 'С',]},
        {keyCode: 'KeyV',       class: 'keyboard__key',    eng: ['v', 'V', 'V'],   rus: ['м', 'М', 'М',]},
        {keyCode: 'KeyB',       class: 'keyboard__key',    eng: ['b', 'B', 'B'],   rus: ['и', 'И', 'И',]},
        {keyCode: 'KeyN',       class: 'keyboard__key',    eng: ['n', 'N', 'N'],   rus: ['т', 'Т', 'Т',]},
        {keyCode: 'KeyM',       class: 'keyboard__key',    eng: ['m', 'M', 'M'],   rus: ['ь', 'Ь', 'Ь',]},
        {keyCode: 'Comma',      class: 'keyboard__key',    eng: [',', ',', '<'],   rus: ['б', 'Б', 'Б',]},
        {keyCode: 'Period',     class: 'keyboard__key',    eng: ['.', '.', '>'],   rus: ['ю', 'Ю', 'Ю',]},
        {keyCode: 'Slash',      class: 'keyboard__key',    eng: ['/', '/', '?'],   rus: ['.', '.', ',',]},
        {keyCode: 'Delete',     class: 'keyboard__key',    eng: 'Del',             rus: 'Del'},
        {keyCode: 'ArrowUp',    class: 'keyboard__key',    eng: '↑',               rus: '↑'},
        {keyCode: 'ShiftRight', class: 'keyboard__key key_shift-right',    eng: 'Shift',  rus: 'Shift'},
    ],
    [
        {keyCode: 'fn',          class: 'keyboard__key',               eng: 'Fn',     rus: 'Fn'},
        {keyCode: 'ControlLeft', class: 'keyboard__key key_ctrl-left', eng: 'Ctrl',   rus: 'Ctrl'},
        {keyCode: 'MetaLeft',    class: 'keyboard__key',               eng: 'Win',    rus: 'Win'},
        {keyCode: 'AltLeft',     class: 'keyboard__key',               eng: 'Alt',    rus: 'Alt'},
        {keyCode: 'Space',       class: 'keyboard__key key_space',     eng: ' ',      rus: ' '},
        {keyCode: 'AltRight',    class: 'keyboard__key',               eng: 'Alt',    rus: 'Alt'},
        {keyCode: 'ControlRight',class: 'keyboard__key key_ctrl-right',eng: 'Ctrl',   rus: 'Ctrl'},
        {keyCode: 'ArrowLeft',   class: 'keyboard__key',               eng: '←',     rus: '←'},
        {keyCode: 'ArrowDown',   class: 'keyboard__key',               eng: '↓',      rus: '↓'},
        {keyCode: 'ArrowRight',  class: 'keyboard__key',               eng:  '→',    rus:  '→'},
    ],
];

let lang = localStorage.getItem('lang');
let checkedCapsLockActive = false;

createApp();

const keyboardLines = document.querySelectorAll('.keyboard__line');
const keyCapsLock = document.querySelector('.key_caps-lock');
const keyShiftLeft = document.querySelector('.key_shift-left');
const keyShiftRight = document.querySelector('.key_shift-right');
const textarea = document.querySelector('.textarea');

function createTextareaElem() {
    const texAreaContainerElem = document.createElement('section');
    texAreaContainerElem.classList.add('print-screen');
    const textAreaElem = document.createElement('textarea');
    textAreaElem.classList.add('textarea');
    texAreaContainerElem.append(textAreaElem);
    textAreaElem.cols = 30;
    textAreaElem.rows = 10;
    return texAreaContainerElem;
}

function createDomKey(lang, status) {
    let keyboardLines = [];
    dataKeys.forEach(line => {
        const keyboardLine = document.createElement('div');
        keyboardLine.classList.add('keyboard__line');
        line.forEach(key => {
            const keyboardButton = document.createElement('button');
            keyboardButton.className = `${key.class}`;
            if (status === 'lower') keyboardButton.textContent = Array.isArray(key[lang]) ? key[lang][0] : key[lang];
            if (status === 'upper') keyboardButton.textContent = Array.isArray(key[lang]) ? key[lang][1] : key[lang];
            if (status === 'shiftUpper') keyboardButton.textContent = Array.isArray(key[lang]) ? key[lang][2] : key[lang];

            keyboardLine.append(keyboardButton);
        });
        keyboardLines.push(keyboardLine);
    });

    return keyboardLines;
}

function createKeyboardElem(lang, status) {
    const keyboardElem = document.createElement('section');
    keyboardElem.classList.add('keyboard');
    const keyboardKeys = document.createElement('div');

    keyboardElem.append(...createDomKey(lang, status));

    return keyboardElem;
}

function createApp() {
    const containerElem = document.createElement('div');
    containerElem.classList.add('container');
    const titleElem = document.createElement('h1');
    titleElem.textContent = 'Virtual Keyboard (Windows)';
    const mainElem = document.createElement('main');
    mainElem.append(createTextareaElem(), createKeyboardElem(lang, 'lower'));
    const descriptionElem = document.createElement('div');
    descriptionElem.textContent = 'Change language (Ctrl + Alt)';
    containerElem.append(titleElem, mainElem, descriptionElem);
    document.body.append(containerElem);
}

function updateKeys(lang, status) {
    for (let i = 0; i < keyboardLines.length; i++) {
        let col = keyboardLines[i];
        for (let j = 0; j < keyboardLines[i].children.length; j++) {
            if (status === 'lower') col.children[j].textContent =
                Array.isArray(dataKeys[i][j][lang]) ? dataKeys[i][j][lang][0] : dataKeys[i][j][lang];
            if (status === 'upper') col.children[j].textContent  =
                Array.isArray(dataKeys[i][j][lang]) ? dataKeys[i][j][lang][1] : dataKeys[i][j][lang];
            if (status === 'shiftUpper') col.children[j].textContent  =
                Array.isArray(dataKeys[i][j][lang]) ? dataKeys[i][j][lang][2] : dataKeys[i][j][lang];
        }
    }
}

function changedCapsLock() {
    checkedCapsLockActive = !checkedCapsLockActive;
    checkedCapsLockActive ? keyCapsLock.classList.add('active') : keyCapsLock.classList.remove('active');
    if (checkedCapsLockActive) {
        lang === 'eng' ? updateKeys('eng', 'upper') : updateKeys('rus', 'upper');
    } else {
        lang === 'eng' ? updateKeys('eng', 'lower') : updateKeys('rus', 'lower');
    }
}

function changedlanguage() {
    lang === 'eng' ? lang = 'ru' : lang = 'eng';

    if (keyCapsLock.classList.contains('active')) {
        lang === 'eng' ? updateKeys('eng', 'upper') : updateKeys('rus', 'upper');
    } else {
        lang === 'eng' ? updateKeys('eng', 'lower') : updateKeys('rus', 'lower');
    }
    // lang === 'eng' ? lang = 'ru' : lang = 'eng';
    window.localStorage.setItem('lang', lang);
}


function changedShiftDown() {
    if (lang === 'eng') {
        updateKeys('eng', 'shiftUpper');
    } else {
        updateKeys('rus', 'shiftUpper');
    }
}

function changedShiftUp() {
    if (lang === 'eng') {
        updateKeys('eng', 'lower');
    } else {
        updateKeys('rus', 'lower');
    }
    if (keyCapsLock.classList.contains('active')) {
        if (lang === 'eng') {
            updateKeys('eng', 'upper');
        } else {
            updateKeys('rus', 'upper');
        }
    }
}

function keyboardPressDown(e) {
    e.preventDefault();
    textarea.focus();

    for (let i = 0; i < dataKeys.length; i++) {
        for (let j = 0; j < dataKeys[i].length; j++) {
            let key = dataKeys[i][j].keyCode;
            if (key === e.code) {
                if (key === 'CapsLock') {
                    changedCapsLock();
                } else if (key === 'ShiftLeft' || key === 'ShiftRight') {
                    changedShiftDown();
                    keyboardLines[i].children[j].classList.add('active');
                } else {
                    keyboardLines[i].children[j].classList.add('active');
                }
            }
        }
    }
    if (e.altKey && e.ctrlKey) {
        changedlanguage();
    }

    let code = e.code;

    if (code === 'Tab') {
        textarea.value += '   ';
    } else if (code === 'Enter') {
        textarea.value += '\n';
    } else if (code === 'Space') {
        textarea.value += ' ';
    } else if (code === 'ArrowUp') {
        textarea.value += '↑';
    } else if (code === 'ArrowDown') {
        textarea.value += '↓';
    } else if (code === 'ArrowLeft') {
        textarea.value += '←';
    } else if (code === 'ArrowRight') {
        textarea.value += '→';
    } else if (code === 'Backspace') {
        clickedBackspaceBtn();
    } else if (code === 'Delete') {
        clickedDelBtn();
    } else if (
        code === 'AltLeft' ||
        code === 'AltRight' ||
        code === 'ControlLeft'||
        code === 'ControlRight'||
        code === 'CapsLock'||
        code === 'ShiftLeft' ||
        code === 'ShiftRight' ||
        code === 'Meta'
    ) {
        textarea.value += '';
    } else {
        for (let i = 0; i < dataKeys.length; i++) {
            for (let j = 0; j < dataKeys[i].length; j++) {
                let key = dataKeys[i][j].keyCode;
                if (key === code) {
                    textarea.value += keyboardLines[i].children[j].textContent;
                }
            }
        }
    }
}

function keyboardPressUp(e) {
    for (let i = 0; i < dataKeys.length; i++) {
        for (let j = 0; j < dataKeys[i].length; j++) {
            let key = dataKeys[i][j].keyCode;
            if (key === e.code) {
                if (key === 'ShiftLeft' || key === 'ShiftRight') {
                    changedShiftUp();
                    keyboardLines[i].children[j].classList.remove('active');
                } else {
                    keyboardLines[i].children[j].classList.remove('active');
                }
            }
        }
    }
}

function keyboardClickButton(e) {
    textarea.focus();

    if (e.target.classList.contains('keyboard__key')) {
        const key = e.target.closest('.keyboard__key').textContent;

        switch (key) {
            case 'Tab':
                textarea.value += '   ';
                break;
            case 'Enter':
                textarea.value += '\n';
                break;
            case '':
                textarea.value += ' ';
                break;
            case '↑':
                textarea.value += '↑';
                break;
            case '↓':
                textarea.value += '↓';
                break;
            case '←':
                textarea.value += '←';
                break;
            case '→':
                textarea.value += '→';
                break;
            case 'Backspace':
                clickedBackspaceBtn();
                break;
            case 'Del':
                clickedDelBtn();
                break;
            case 'Ctrl':
            case 'Win':
            case 'Alt':
            case 'Fn':
            case 'Shift':
            case 'CapsLock':
                textarea.value += '';
                break;
            default:
                textarea.value += key;
                break;
        }
    }
}

function clickedDelBtn() {
    let posStart = textarea.selectionStart;
    let posEnd = textarea.selectionEnd;

    if (posStart === posEnd) {
        textarea.value = textarea.value.substring(0, posStart) + textarea.value.substring(posEnd).slice(1);
        textarea.setSelectionRange(posStart, posStart);
    } else {
        textarea.value = textarea.value.substring(0, posStart) + textarea.value.substring(posEnd);
        textarea.setSelectionRange(posStart, posStart);
    }
}

function clickedBackspaceBtn() {
    let posStart = textarea.selectionStart;
    let posEnd = textarea.selectionEnd;
    const beforePos = textarea.value.substring(0, posStart);
    const afterPos = textarea.value.substring(posEnd);

    if (posStart === posEnd) {
        textarea.value = beforePos.slice(0, -1) + afterPos;
        posStart = posStart === 0 ? 0 : posStart - 1;
        textarea.setSelectionRange(posStart, posStart);
    } else {
        textarea.value = beforePos + afterPos;
        textarea.setSelectionRange(posStart, posStart);
    }
}


function getLocalStorage() {
    lang = localStorage.getItem('lang');
    changedlanguage();
}

keyCapsLock.addEventListener('click', changedCapsLock);
keyShiftLeft.addEventListener('mousedown', changedShiftDown);
keyShiftRight.addEventListener('mousedown', changedShiftDown);
keyShiftLeft.addEventListener('mouseup', changedShiftUp);
keyShiftRight.addEventListener('mouseup', changedShiftUp);
document.addEventListener('keydown', keyboardPressDown);
document.addEventListener('keyup', keyboardPressUp);
document.addEventListener('click', keyboardClickButton);
window.addEventListener('load', getLocalStorage);
