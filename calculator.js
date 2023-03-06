import * as calculatorMath from "./math.js"



export function createCalculator(calculatorElement)
{
	let proto = {
		render()
		{
			calculatorElement.querySelector(".stored-num").textContent = this.storedNum == 0 ? "" : this.storedNum + " " + this.storedOperation;

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


	let calculator = Object.assign(Object.create(proto), {displayedNum: "0", storedNum: 0, currentOperation: ""});


	calculatorElement.querySelector(".insert-buttons").addEventListener("click", handleInsert.bind(calculator));

	calculatorElement.querySelector(".operation-buttons").addEventListener("click", handleOperation.bind(calculator));
	return calculator;
	
}


function handleInsert(event)
{
	if (event.currentTarget == event.target)
		return;

	const insertDigit = (digit) => this.displayedNum += digit;
	const removeLastDigit = () => this.displayedNum = this.displayedNum.slice(0, -1);

	if (event.target.dataset.value == "<")
		removeLastDigit();
	else
		insertDigit(event.target.dataset.value);		

	this.render();
	

}



function handleOperation(event)
{
	if (event.target == event.currentTarget)
		return;


	let currentOperation = event.target.dataset.operation;

	

	const operate = () => {

		
		if(this.displayedNum == "0")
		{
			return;
		}
		if(!this.storedNum)
		{
			this.storedNum = parseFloat(this.displayedNum);
		}
		else
		{
			this.storedNum = this[this.storedOperation](this.storedNum, parseFloat(this.displayedNum));

		}
		this.displayedNum = "0";
	}

		
	operate();
	this.storedOperation = currentOperation;

	this.render();
	

	

}

