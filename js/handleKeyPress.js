const INSERT = {name: "insert"};
const HANDLE_OPERATION = {name:"handleOperation"};

const KEY_MAP = new Map([
	["0", {func: INSERT, params: 0}],
	[".", {func: INSERT, params: "."}],
	["Backspace", {func: INSERT, params: "<"}],
	["1", {func: INSERT, params: 1}],
	["2", {func: INSERT, params: 2}],
	["3", {func: INSERT, params: 3}],
	["4", {func: INSERT, params: 4}],
	["5", {func: INSERT, params: 5}],
	["6", {func: INSERT, params: 6}],
	["7", {func: INSERT, params: 7}],
	["8", {func: INSERT, params: 8}],
	["9", {func: INSERT, params: 9}],
	["c", {func: HANDLE_OPERATION, params: "C"}],
	["+", {func: HANDLE_OPERATION, params: "add"}],
	["-", {func: HANDLE_OPERATION, params: "subtract"}],
	["*", {func: HANDLE_OPERATION, params: "multiply"}],
	["\/", {func: HANDLE_OPERATION, params: "divide"}],
	["=", {func: HANDLE_OPERATION, params: "="}],
	["Enter", {func: HANDLE_OPERATION, params: "="}]
]);


export function handleKeyPress(event)
{
	let handler = KEY_MAP.get(event.key);

	if(handler)
	{
		this[handler.func.name](handler.params);
		this.setInsertedKeyIdentifier(handler.params);
	}
	this.render();

}
