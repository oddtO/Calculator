import * as calculatorMath from "./math.js"
import {handleInsertByClick, insert} from "./handleInsert.js"
import {handleOperationByClick, handleOperation} from "./handleOperation.js"
import {handleKeyPress} from "./handleKeyPress.js"

export function createCalculator(calculatorElement)
{
	let proto = {
		render()
		{
			let storedNumElem = calculatorElement.querySelector(".stored-num");
			if(this.triedDivisionByZero)
			{
				storedNumElem.textContent = "Division by zero is impossible";
			}
			else
			{
				storedNumElem.textContent = this.storedNum == 0 ? "" : Math.round(this.storedNum * 100) / 100 
				+ " " + this.storedOperation;
			}

			let numElem = calculatorElement.querySelector(".num");
				
			
			let trimmedValue = this.displayedNum.replace(/^0+/, "");
			if(trimmedValue.length == 0)
				trimmedValue = "0";

			numElem.textContent = trimmedValue;
		}, 
		resetEnteredNum()
		{
			this.displayedNum = "0";
			this.hasEnteredDot = false;
		},
		clear()
		{

			this.resetEnteredNum();
			this.storedNum = 0;
			this.render();
		},

		add: calculatorMath.add,
		subtract: calculatorMath.subtract,
		multiply: calculatorMath.multiply,
		divide: calculatorMath.divide,

		insert,
		handleOperation
		

	}


	let calculator = Object.assign(Object.create(proto), {displayedNum: "0", storedNum: 0, storedOperation: null, triedDivisionByZero: false, hasEnteredDot: false});


	calculatorElement.querySelector(".insert-buttons").addEventListener("click", handleInsertByClick.bind(calculator));

	calculatorElement.querySelector(".operation-buttons").addEventListener("click",handleOperationByClick.bind(calculator));

	window.addEventListener("keypress", handleKeyPress.bind(calculator));

	return calculator;
	
}






