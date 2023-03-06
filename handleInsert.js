export function handleInsert(event)
{
	if (event.currentTarget == event.target)
		return;

	const insertDigit = (digit) => {


		if(digit != "." || !this.hasEnteredDot)	
			this.displayedNum += digit;

		if(digit == ".")
			this.hasEnteredDot = true;

	}
	const removeLastDigit = () => {
		if(this.displayedNum.endsWith("."))
			this.hasEnteredDot = false;
		
		this.displayedNum = this.displayedNum.slice(0, -1); if(this.displayedNum == 0) this.displayedNum = "0";
	}

	let curInsertVal = event.target.dataset.value;

	if (curInsertVal == "<")
		removeLastDigit();
	else
	{
			insertDigit(curInsertVal);		

	}

	this.render();
	

}

