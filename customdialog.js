	var dialog = document.getElementById('dialog');
	var doneBtns = document.getElementsByClassName("done");
	var res = document.getElementById("result");
	var dialogContent = document.getElementById('dialogSub');


	function alertFunction(){
		dialogContent.innerHTML = "<p> <label> Alert Pressed! </label> </p>" 
							+ "<menu> <button class='done'> Ok </button> </menu>";
		dialog.showModal();
		for (var i = 0; i < doneBtns.length; i++) {
			doneBtns[i].addEventListener("click", function () {
				res.innerHTML = "";
			});
		}
	}


	function timeC() {
		res.innerHTML = "Confirm Result : " + dialog.returnValue;
    }

	function confirmResult() {
		setTimeout(timeC);
	}

	function confirmFunction() {
		res.innerHTML = "";
		dialogContent.innerHTML = "<p> <label> Do you confirm this? </label> </p>" + 
					"<menu> <button value='false' class='done'> Cancel </button>" + 
					"<button value='true' class='done'> Ok </button></menu>";
		dialog.showModal();
		for (var i = 0; i < doneBtns.length; i++) {
			doneBtns[i].addEventListener("click", confirmResult);
		}

    }

	function promptResult() {
		var textInputVal;
		var returnVal;

		setTimeout(function () {
			textInputVal = document.getElementById("in").value;
			
			returnVal = dialog.returnValue;
			if(returnVal === 'cancel' || document.getElementById('in').value === ''){
				textInputVal = "Prompt result: User didn't enter anything"
				res.innerHTML = textInputVal;
			}
			else{
				textInputVal = DOMPurify.sanitize(textInputVal);
				res.innerHTML = "Prompt Result : " + textInputVal;
			}

			
		})
	}

	function promptFunction() {
		res.innerHTML = "";
		dialogContent.innerHTML = "<form><label>What is your name? </label>" + 
				"<input type='text' id='in'><br></input>" + 
				"<button value='cancel' class='done'>Cancel</button>" + 
				"<button value='ok' class='done'>Ok</button></form>";

		dialog.showModal()
		for (var i = 0; i < doneBtns.length; i++) {
			doneBtns[i].addEventListener("click", promptResult);
		}
    }
