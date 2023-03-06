
export function handleOperation(event)
{
	if (event.target == event.currentTarget)
		return;

	this.triedDivisionByZero = false;
	let currentOperation = event.target.dataset.operation;

	if(currentOperation == "clear")
	{
		this.displayedNum = "0";
		this.storedNum = 0;
		this.render();
		return;
	}

	const operate = () => {

		
		if(!this.storedNum)
		{
			this.storedNum = parseFloat(this.displayedNum);
		}
		else
		{
			try
			{
				this.storedNum = this[this.storedOperation](this.storedNum, parseFloat(this.displayedNum));
			}
			catch (err)
			{
				this.triedDivisionByZero = true;
				this.storedNum = 0;
			}
				

		}
		this.displayedNum = "0";
	}

	if(this.storedOperation !== "")	
		operate();

	if(currentOperation != "equals")
		this.storedOperation = currentOperation;
	else
		this.storedOperation = "";

	this.render();
	

	

}
