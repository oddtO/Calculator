
export function handleOperation(currentOperation) 
{

	this.triedDivisionByZero = false;

	if(currentOperation == "clear")
	{
		this.resetEnteredNum();
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
		this.resetEnteredNum();
	}

	if(this.storedOperation !== "")	
		operate();

	if(currentOperation != "equals")
		this.storedOperation = currentOperation;
	else
		this.storedOperation = "";

}

export function handleOperationByClick(event)
{
	if (event.target == event.currentTarget)
		return;


	let currentOperation = event.target.dataset.operation;

	this.handleOperation(currentOperation);	
	this.render();

	

}


