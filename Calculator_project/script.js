//all the buttons
var allButtons = document.querySelectorAll('.btn')
var allButtonsArray = Array.from(allButtons)
//BUTTONS
//digits
var oneBtn = document.querySelector('.one')
var twoBtn = document.querySelector('.two')
var threeBtn = document.querySelector('.three')
var fourBtn = document.querySelector('.four')
var fiveBtn = document.querySelector('.five')
var sixBtn = document.querySelector('.six')
var sevenBtn = document.querySelector('.seven')
var eightBtn = document.querySelector('.eight')
var nineBtn = document.querySelector('.nine')
var zeroBtn = document.querySelector('.zero')
var pointBtn = document.querySelector('.point')
//arithmetic signs
var divisionBtn = document.querySelector('.division')
var multiBtn = document.querySelector('.multi')
var subtractionBtn = document.querySelector('.subtraction')
var additionBtn = document.querySelector('.addition')
var remainderBtn = document.querySelector('.remainder')
var wholeBtn = document.querySelector('.whole')
var modulBtn = document.querySelector('.modul')
var factorialBtn = document.querySelector('.factorial')
var rootBtn = document.querySelector('.root')
var degreeBtn = document.querySelector('.degree')
var equalBtn = document.querySelector('.equal')
//different counting systems
var toBinaryBtn = document.querySelector('.toBinary')
var toDecimalfromBinBtn = document.querySelector('.toDecimalFromBinary')
var toDecimalfromHexaBtn = document.querySelector('.toDecimalFromHexa')
var toHexaBtn = document.querySelector('.toHexa')
var toRomanBtn = document.querySelector('.toRoman')
var toArabicBtn = document.querySelector('.toArabic')
//special signs
var backspaceBtn = document.querySelector('.backspace')
var clearBtn = document.querySelector('.clear')
//input
var inputProcess = document.getElementById('process')
var inputResult = document.getElementById('result')
var action
var numArr = []
//for a switch between keyboards
var isArabicKeyboard = true
var isDecimalKeyboard = true
//for rules
var showRules = false

function input(sign) {
    inputProcess.value += sign
    
}

function onClickBtns(event) {

    switch (event.target) {
        //digits
        case oneBtn:
        case twoBtn:
        case threeBtn:
        case fourBtn:
        case fiveBtn:
        case sixBtn:
        case sevenBtn:
        case eightBtn:
        case nineBtn:
        case zeroBtn:
            input(event.target.value)
            break;
            
        case pointBtn:
            input(event.target.value)
            break; 

        //actions
        case divisionBtn:
        case multiBtn:
        case additionBtn:
        case subtractionBtn:
        case remainderBtn:
        case wholeBtn:
        case factorialBtn:
        case modulBtn:
        case degreeBtn:
        case rootBtn:
        case toBinaryBtn:
        case toDecimalfromBinBtn:
        case toDecimalfromHexaBtn:
        case toHexaBtn:
        case toRomanBtn:
        case toArabicBtn:
            input(event.target.value)
            action = event.target.value
            break;

        case equalBtn:
            result()
            break;

    }
}

//clear all
function clear() {
    inputProcess.value = ""
    inputResult.value = ""
}

//delete one sign from the end of input
function backspace() {
    inputProcess.value = inputProcess.value.slice(0, inputProcess.value.length-1)
}

function result() {
    //making two nums array
    numArr = inputProcess.value.split(action)
    //calculations
    switch (action) {
        case "+":
            inputResult.value = +numArr[0] + +numArr[1]
            break;

        case "-":
            inputResult.value = +numArr[0] - +numArr[1]
            break;

        case "x":
            inputResult.value = Math.round((+numArr[0] * +numArr[1]) * 10000) /10000
            break;

        case "/":
            inputResult.value = Math.round((+numArr[0] / +numArr[1]) * 10000) /10000
            break;
        
        case "%":
            inputResult.value = +numArr[0] % +numArr[1]
            break;

        case "mod":
            inputResult.value = Math.trunc(+numArr[0] / +numArr[1])
            break;

        case "!":
            if (numArr[1] === "") inputResult.value = factorialFoo(+numArr[0])
            else if (numArr[0] === "") inputResult.value = factorialFoo(+numArr[1])
            break;

        case "abs":
            if (numArr[1] === "") inputResult.value = Math.abs(+numArr[0])
            else if (numArr[0] === "") inputResult.value = Math.abs(+numArr[1])
            break;

        case "^":
            inputResult.value = degree(+numArr[0],+numArr[1])
            break;

        case "√":
            inputResult.value = root(+numArr[0],+numArr[1])
            break;
      
        case " to 10 from 2 ":
            if (numArr[1] === "") inputResult.value = binaryToDecimal(+numArr[0])
            else if (numArr[0] === "") inputResult.value = binaryToDecimal(+numArr[1])
            break;

        case " to 10 from 16 ":
            if (numArr[1] === "") inputResult.value = hexadecimalToDecimal(numArr[0])
            else if (numArr[0] === "") inputResult.value = hexadecimalToDecimal(numArr[1])
            break;

        case " to 16 ":
            if (numArr[1] === "") inputResult.value = decimalToHexadecimal(+numArr[0])
            else if (numArr[0] === "") inputResult.value = decimalToHexadecimal(+numArr[1])
            break;

        case " to 2 ":
            if (numArr[1] === "") inputResult.value = decimalToBinary(+numArr[0])
            else if (numArr[0] === "") inputResult.value = decimalToBinary(+numArr[1])
            break;

        case " → I ":
            if (numArr[1] === "") inputResult.value = arabicToRoman(+numArr[0])
            else if (numArr[0] === "") inputResult.value = arabicToRoman(+numArr[1])
            break;

        case " → 1 ":
            if (numArr[1] === "") inputResult.value = romanToArabic(numArr[0])
            else if (numArr[0] === "") inputResult.value = romanToArabic(numArr[1])
            break;

    }

}

//counting functions

function factorialFoo (num) {
    if (num === 1) return 1
    else if (num === 1) return 1

    return num * factorialFoo (num - 1)
}

function degree (num, deg) {
    if (deg === 0) return 1
    if (deg === 1) return num

    return num * degree(num, deg-1)
}

function root (root, num) {
    if (root == 2) return Math.sqrt(num)
    else if (root == 3) return Math.cbrt(num)
    else return Math.pow(num, 1/root)
}
//convertional functions

function binaryToDecimal(num) {

    let binNum = num, decNum = 0, lastDigit, pow = 0

    while ( binNum > 0 ) {
       lastDigit = binNum % 10; 
       decNum += lastDigit*2**pow;
       binNum = Math.floor(binNum/10);
       pow++
    }

   return decNum
}

function decimalToBinary(num) {
    let decNum = num, binNum = ''
    while (decNum > 0) {
        binNum = decNum%2 + binNum
        decNum = Math.floor(decNum/2)
    }
    return binNum

}

function decimalToHexadecimal (num) {
    var hexaDigits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E']
    var hexaNum = ''

    while (num > 0) {
        hexaNum = hexaDigits[num%16] + hexaNum;
        num = (num - (num % 16)) / 16;    
    }

    return hexaNum
}

function hexadecimalToDecimal (num) {
    
    let hexaNum = num.toUpperCase().split(''), decNum = 0, pow = 0

    for (var j = hexaNum.length-1; j >= 0; j--) {
        if (hexaNum[j] === "A") hexaNum[j] = 10;
        else if (hexaNum[j] === "B") hexaNum[j] = 11;
        else if (hexaNum[j] === "C") hexaNum[j] = 12;
        else if (hexaNum[j] === "D") hexaNum[j] = 13;
        else if (hexaNum[j] === "E") hexaNum[j] = 14;
        else if (hexaNum[j] === "F") hexaNum[j] = 15;
        decNum += hexaNum[j]*16**pow;
        pow++
    }
    
    return decNum
}

//up to 5000
const roman = {
    1: "I",
    5: "V",
    10: "X",
    50: "L",
    100: "C",
    500: "D",
    1000: "M",
    5000: "G",
    10000: "H"
}

function arabicToRoman (num) {

    const arabNum = num.toString().split('')
    
    //keeps information of is it units, decades, hundreds, thousands
    let order = 1
    let romNum = ''
    
    for (let i = arabNum.length-1; i >= 0; i--) {
        if (arabNum[i] > 0 && arabNum[i] < 4) romNum = outputSeveral(order, arabNum[i]) + romNum
        else if (arabNum[i] == "4") romNum = roman[order]+roman[order*5] + romNum
        else if (arabNum[i] < 9) romNum = roman[order*5]+outputSeveral(order, arabNum[i]-5) + romNum
        else if (arabNum[i] == "9") romNum = roman[order]+roman[order*10] + romNum
        order *= 10
    }
    return romNum
}

function outputSeveral(indRoman, amount) {
    let str = ""
    for (let k = 1; k <=amount; k++) str += roman[indRoman]
    return str
}

const arabic = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
    G: 5000,
    H: 10000
}

function romanToArabic (str) {

    let roman = str.replace(/CM/g,900+' ').replace(/M/g, 1000+' ').replace(/CD/,400+' ').replace(/D/g,500+' ').replace(/XC/g,90+' ').replace(/C/g,100+' ').replace(/XL/g,40+' ').replace(/L/g,50+' ').replace(/IX/g,9+' ').replace(/X/g,10+' ').replace(/IV/g,4+' ').replace(/V/g,5+' ').replace(/I/g,1+' ').split(' ')
    var arabicNum = 0

    for (var k = 0; k <= roman.length-2; k++) {
        arabicNum += +roman[k]
    }

    return arabicNum
}

function keyboardSwitch (event) {

    switch (event.target.value) {
        case "usual":
            oneBtn.innerHTML = '1' 
            oneBtn.value = '1'         
            twoBtn.innerHTML = '2'
            twoBtn.value = '2'
            threeBtn.innerHTML = '3'
            threeBtn.value = '3'
            fourBtn.innerHTML = '4'
            fourBtn.value = '4'
            fiveBtn.innerHTML = '5'
            fiveBtn.value = '5'
            sixBtn.innerHTML = '6'
            sixBtn.value = '6'
            sevenBtn.innerHTML = '7'
            sevenBtn.value = '7'
            eightBtn.innerHTML = '8'
            eightBtn.value = '8'
            nineBtn.innerHTML = '9'
            nineBtn.value = '9'
            zeroBtn.innerHTML = '0'
            zeroBtn.value = '0'
            pointBtn.disabled = false
            divisionBtn.disabled = false
            multiBtn.disabled = false
            additionBtn.disabled = false
            subtractionBtn.disabled = false
            remainderBtn.disabled = false
            wholeBtn.disabled = false
            factorialBtn.disabled = false
            modulBtn.disabled = false
            rootBtn.disabled = false
            degreeBtn.disabled = false
            toBinaryBtn.disabled = false
            toDecimalfromBinBtn.disabled = false
            toDecimalfromHexaBtn.disabled = false
            toHexaBtn.disabled = false
            toRomanBtn.disabled = false
            toArabicBtn.disabled = false
            break;    
        

        case "hexa":
            oneBtn.innerHTML = 'A' 
            oneBtn.value = 'A'
            twoBtn.innerHTML = 'B'
            twoBtn.value = 'B'
            threeBtn.innerHTML = 'C'
            threeBtn.value = 'C'
            fourBtn.innerHTML = 'D'
            fourBtn.value = 'D'
            fiveBtn.innerHTML = 'E'
            fiveBtn.value = 'E'
            sixBtn.innerHTML = 'F'
            sixBtn.value = 'F'
            sevenBtn.innerHTML = ''
            sevenBtn.value = ''
            eightBtn.innerHTML = ''
            eightBtn.value = ''
            nineBtn.innerHTML = ''
            nineBtn.value = ''
            zeroBtn.innerHTML = ''
            zeroBtn.value = ''
            pointBtn.disabled = true
            divisionBtn.disabled = true
            multiBtn.disabled = true
            additionBtn.disabled = true
            subtractionBtn.disabled = true
            remainderBtn.disabled = true
            wholeBtn.disabled = true
            factorialBtn.disabled = true
            modulBtn.disabled = true
            rootBtn.disabled = true
            degreeBtn.disabled = true
            toBinaryBtn.disabled = true
            toDecimalfromBinBtn.disabled = true
            toDecimalfromHexaBtn.disabled = false
            toHexaBtn.disabled = true
            toRomanBtn.disabled = true
            toArabicBtn.disabled = true
            break;

        case "roman":
            oneBtn.innerHTML = 'I' 
            oneBtn.value = 'I'
            twoBtn.innerHTML = 'V'
            twoBtn.value = 'V'
            threeBtn.innerHTML = 'X'
            threeBtn.value = 'X'
            fourBtn.innerHTML = 'L'
            fourBtn.value = 'L'
            fiveBtn.innerHTML = 'C'
            fiveBtn.value = 'C'
            sixBtn.innerHTML = 'D'
            sixBtn.value = 'D'
            sevenBtn.innerHTML = 'M'
            sevenBtn.value = 'M'
            eightBtn.innerHTML = 'G'
            eightBtn.value = 'G'
            nineBtn.innerHTML = 'H'
            nineBtn.value = 'H'
            zeroBtn.innerHTML = ''
            zeroBtn.value = ''
            pointBtn.disabled = true
            divisionBtn.disabled = true
            multiBtn.disabled = true
            additionBtn.disabled = true
            subtractionBtn.disabled = true
            remainderBtn.disabled = true
            wholeBtn.disabled = true
            factorialBtn.disabled = true
            modulBtn.disabled = true
            rootBtn.disabled = true
            degreeBtn.disabled = true
            toBinaryBtn.disabled = true
            toDecimalfromBinBtn.disabled = true
            toDecimalfromHexaBtn.disabled = true
            toHexaBtn.disabled = true
            toRomanBtn.disabled = true 
            toArabicBtn.disabled = false
            break;

    }

}

function showUsageRules () {
    if (showRules === false) {
        document.querySelector('.rules').style.visibility = "visible";
        showRules = true
    }
    
    else {
        document.querySelector('.rules').style.visibility = "hidden";
        showRules = false
    }
}

//listeners
document.querySelector('.calcBody').addEventListener('click', onClickBtns)
clearBtn.addEventListener('click', clear)
backspaceBtn.addEventListener('click', backspace)
document.querySelector('.how').addEventListener('click', showUsageRules)
document.querySelector('.radioBtns').addEventListener('click', keyboardSwitch)
