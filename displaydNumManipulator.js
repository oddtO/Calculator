export function createCalculatorState(calculatorElement)
{
	let proto = {
		render()
		{
			calculatorElement.querySelector(".num").textContent = this.displayedNum;		
		}, 

		insertDigit(digit)
		{
			this.displayedNum += digit;
		}


	}

	return Object.assign(Object.create(proto), {displayedNum: ""});
}
