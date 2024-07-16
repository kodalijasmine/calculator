const inputField = document.querySelector("#calculator");
const NumOpFunc = document.querySelectorAll("button");
let current = '';

NumOpFunc.forEach((vals) => {
    vals.onclick = () => {
        const value = vals.textContent;
        
        if (value === '=') {
            try {
                current = eval(current);
                inputField.value = current;
            } catch (error) {
                current = 'Error';
                inputField.value = current;
                setTimeout(() => (inputField.value = ''), 2000);
            }
        } else if (value === 'AC') {
            current = '';
            inputField.value = current;
        } else if (value === 'CC') {
            current = current.slice(0, -1);
            inputField.value = current;
        } else if (value === 'x^2') {
            current = eval(current * current);
            inputField.value = current;
        } else if (value === 'x^3') {
            current = eval(current * current * current);
            inputField.value = current;
        } else if (value === 'x^4') {
            current = eval(current * current * current * current);
            inputField.value = current;
        } else if (value === '|x|') {
            current = Math.abs(eval(current));
            inputField.value = current;
        } else if (value === 'log') {
            current = Math.log10(eval(current));
            inputField.value = current;
        } else if (value === 'ln') {
            current = Math.log(eval(current));
            inputField.value = current;
        } else if (value === 'cos') {
            current = Math.cos(eval(current) * Math.PI / 180);
            inputField.value = current;
        } else if (value === 'sin') {
            current = Math.sin(eval(current) * Math.PI / 180);
            inputField.value = current;
        } else if (value === 'tan') {
            let radians = current * Math.PI/180;
            current = Math.tan(radians);
            inputField.value = current;
        } else if (value === 'π') {
            let pie = Math.PI;
            current = eval(current * pie);
            inputField.value = current;
        } else if (value === '√') {
            current = Math.sqrt(eval(current));
            inputField.value = current;
        } else if (value === 'e') {
            current = Math.exp(eval(current));
            inputField.value = current;
        } else {
            current += value;
            inputField.value = current;
        }
    };
});
