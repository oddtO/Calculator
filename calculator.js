import * as calculatorMath from "./math.js"
import {handleInsert} from "./handleInsert.js"
import {handleOperation} from "./handleOperation.js"


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


		add: calculatorMath.add,
		subtract: calculatorMath.subtract,
		multiply: calculatorMath.multiply,
		divide: calculatorMath.divide,
		

		

	}


	let calculator = Object.assign(Object.create(proto), {displayedNum: "0", storedNum: 0, storedOperation: null, triedDivisionByZero: false});


	calculatorElement.querySelector(".insert-buttons").addEventListener("click", handleInsert.bind(calculator));

	calculatorElement.querySelector(".operation-buttons").addEventListener("click", handleOperation.bind(calculator));
	return calculator;
	
}






