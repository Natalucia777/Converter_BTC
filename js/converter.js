function moneyConverter() {
	const inputPrice = document.getElementById("inputPrice").value;
	const valNum = document.getElementById("inputBitcoin").value;
	const result = valNum / inputPrice;

	document.getElementById("out").innerHTML = result;
}
