export function createCalculatorState(calculatorElement)
{
	let proto = {
		render()
		{
			calculatorElement.querySelector(".num").textContent = this.displayedNum;		
		}, 



	}


	let calculator = Object.assign(Object.create(proto), {displayedNum: ""});

	calculatorElement.querySelector(".insert-buttons").addEventListener("click", handleInsert.bind(calculator));

	return calculator;
	
}


function handleInsert(event)
{

	const insertDigit = (digit) => this.displayedNum += digit;
	
	insertDigit(event.target.textContent);		


	
}
