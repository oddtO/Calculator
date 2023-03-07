
export function insert(symbol)
{

	const insertSymbol = (digit) => {


		if(digit != "." || !this.hasEnteredDot)	
			this.displayedNum += digit;

		if(digit == ".")
			this.hasEnteredDot = true;

	}
	const removeLastSymbol = () => {
		if(this.displayedNum.endsWith("."))
			this.hasEnteredDot = false;
		
		this.displayedNum = this.displayedNum.slice(0, -1); if(this.displayedNum == 0) this.displayedNum = "0";
	}



	if (symbol == "<")
		removeLastSymbol();
	else
	{
			insertSymbol(symbol);		

	}


}

export function handleInsertByClick(event)
{
	if (event.currentTarget == event.target)
		return;

	this.insert(event.target.dataset.value);
	
	this.render();

}


