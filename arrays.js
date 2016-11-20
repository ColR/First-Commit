/* alert("Hello");
function printReverse(strg) {
	//for(i=strg.length - 1; i>-1; --i ) {
		//console.log(strg[i]);
	//}
	strg.reverse();
	console.log(strg);
}

printReverse(["a", "b", "c", "d"])
*/
function isUniform(myArray) {
	var first = myArray[0];
	for (i=myArray.length; i != 0; i--) {
		if (first !== myArray[i]) {
			console.log("False");
		} else {
			console.log("true");
		}
	}
}

isUniform([1, 1, 1, 0])