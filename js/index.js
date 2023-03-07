import {createCalculator} from './calculator.js'

function operate(operator, num1, num2)
{
	return operator(num1, num2);
}

let calculator = createCalculator(document.querySelector(".calculator"));
