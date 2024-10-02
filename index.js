let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('button');
let screenValue = '';
let history = [];

for (let item of buttons) {
    item.addEventListener('click', (e) => {
        let buttonText = e.target.innerText;

        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        } else if (buttonText == 'C') {
            screenValue = "";
            screen.value = screenValue;
        } else if (buttonText == '=') {
            try {
                let result = eval(screenValue);
                screen.value = result;
                history.push(`${screenValue} = ${result}`);
                screenValue = result; 
                updateHistory();
            } catch (error) {
                screen.value = "Error";
            }
        } else if (buttonText == 'Hex → Dec') {
            let hexValue = screen.value;
            let result = parseInt(hexValue, 16);
            screen.value = result;
            history.push(`${hexValue} (Hex) = ${result} (Dec)`);
            screenValue = result; 
            updateHistory();
        } else if (buttonText == 'Dec → Hex') {
            let decValue = screen.value;
            let result = parseInt(decValue, 10).toString(16).toUpperCase();
            screen.value = result;
            history.push(`${decValue} (Dec) = ${result} (Hex)`);
            screenValue = result; 
            updateHistory();
        } else if (buttonText == 'Bin → Dec') {
            let binValue = screen.value;
            let result = parseInt(binValue, 2);
            screen.value = result;
            history.push(`${binValue} (Bin) = ${result} (Dec)`);
            screenValue = result; 
            updateHistory();
        } else if (buttonText == 'Dec → Bin') {
            let decValue = screen.value;
            let result = parseInt(decValue, 10).toString(2);
            screen.value = result;
            history.push(`${decValue} (Dec) = ${result} (Bin)`);
            screenValue = result; 
            updateHistory();
        } else if (buttonText == 'sin') {
            let result = Math.sin(degToRad(screen.value));
            screen.value = result;
            history.push(`sin(${screen.value}°) = ${result}`);
            screenValue = result; 
            updateHistory();
        } else if (buttonText == 'cos') {
            let result = Math.cos(degToRad(screen.value));
            screen.value = result;
            history.push(`cos(${screen.value}°) = ${result}`);
            screenValue = result; 
            updateHistory();
        } else if (buttonText == 'tan') {
            let result = Math.tan(degToRad(screen.value));
            screen.value = result;
            history.push(`tan(${screen.value}°) = ${result}`);
            screenValue = result; 
            updateHistory();
        } else if (buttonText == 'sec') {
            let result = 1 / Math.cos(degToRad(screen.value));
            screen.value = result;
            history.push(`sec(${screen.value}°) = ${result}`);
            screenValue = result; 
            updateHistory();
        } else if (buttonText == 'cosec') {
            let result = 1 / Math.sin(degToRad(screen.value));
            screen.value = result;
            history.push(`cosec(${screen.value}°) = ${result}`);
            screenValue = result; 
            updateHistory();
        } else if (buttonText == 'cot') {
            let result = 1 / Math.tan(degToRad(screen.value));
            screen.value = result;
            history.push(`cot(${screen.value}°) = ${result}`);
            screenValue = result; 
            updateHistory();
        } else if (buttonText == '√') {
            let result = Math.sqrt(screen.value);
            screen.value = result;
            history.push(`√${screen.value} = ${result}`);
            screenValue = result; 
            updateHistory();
        } else if (buttonText == 'x²') {
            let result = Math.pow(screen.value, 2);
            screen.value = result;
            history.push(`${screen.value}² = ${result}`);
            screenValue = result; 
            updateHistory();
        } else if (buttonText == 'Clear History') {
            history = [];
            updateHistory();
        } else {
            screenValue += buttonText;
            screen.value = screenValue;
        }
    });
}

function degToRad(degrees) {
    return degrees * (Math.PI / 180);
}

function updateHistory() {
    let historyBox = document.getElementById('history');
    historyBox.innerHTML = '';
    for (let entry of history) {
        historyBox.innerHTML += `<p>${entry}</p>`;
    }
}