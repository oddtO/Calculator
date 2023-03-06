export function createCalculator(calculatorElement)
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
	if (event.currentTarget == event.target)
		return;

	const insertDigit = (digit) => this.displayedNum += digit;
	const removeLastDigit = () => this.displayedNum = this.displayedNum.slice(0, -1);

	if (event.target.textContent == "<")
		removeLastDigit();
	else
		insertDigit(event.target.textContent);		
	this.render();
	

}
