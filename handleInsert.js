export function handleInsert(event)
{
	if (event.currentTarget == event.target)
		return;

	const insertDigit = (digit) => this.displayedNum += digit;
	const removeLastDigit = () => { this.displayedNum = this.displayedNum.slice(0, -1); if(this.displayedNum == 0) this.displayedNum = "0"};

	if (event.target.dataset.value == "<")
		removeLastDigit();
	else
		insertDigit(event.target.dataset.value);		

	this.render();
	

}

