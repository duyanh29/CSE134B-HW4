	// delete button of entries
	var dialogDelete = document.getElementById('dialogDelete');
	var deleteContent;
	var deleteBtns = document.getElementsByClassName('delete');
	function deleteFunction() {
		deleteContent = this.parentNode;
		dialogDelete.showModal();
    }
	for (var i = 0; i < deleteBtns.length; i++) {
		deleteBtns[i].addEventListener('click', deleteFunction);
	}
	
	var contentEdit;
	var editClicked = false;
	// edit  buttons of entries
	var dialog = document.getElementById('dialog');
	var editBtns = document.getElementsByClassName('edit');
	function editFunction() {
		editClicked = true;
		contentEdit = this.parentNode;
		dialog.showModal();
    }
	for (var i = 0; i < editBtns.length; i++) {
		editBtns[i].addEventListener('click', editFunction);
	}

	// add button
	var addBtn = document.getElementById('add');
	addBtn.addEventListener('click', function () {
		editClicked = false;
		dialog.showModal();
	});
	const nameArr = [];
	const dateArr = [];
	const summaryArr = [];

	// save button
	var saveBtn = document.getElementById('save');
	var entryCount = document.getElementById('count');
	var list = document.getElementById('list');
	var node;
	var noEntry = false;

	function saveFunction() {
		var name = document.getElementById("name").value;
		var date = document.getElementById("date").value;
		var summary = document.getElementById("summary").value;
		node = document.createElement("LI");


		name = DOMPurify.sanitize(name);
		nameArr.push(name);

		date = DOMPurify.sanitize(date);
		dateArr.push(date);

		summary = DOMPurify.sanitize(summary);
		summaryArr.push(summary);

		localStorage.setItem("name", nameArr);
		localStorage.setItem("date", dateArr);

		localStorage.setItem("summary", summaryArr);

		node.innerHTML = name + " (" + date + ") - Summary: " + summary + 
		' <button class = "edit"> Edit </button><button class="delete">Delete</button>';
		
		if (name != "" && summary != "" && date != "") {
			if (noEntry) {
				noEntry = false;
				editClicked = false;
				entryCount.innerHTML = "";
			}
			if (editClicked) {
				contentEdit.innerHTML = node.innerHTML;
			}
			else{
				list.appendChild(node);

			}

			editBtns = document.getElementsByClassName('edit');
			for (var i = 0; i < editBtns.length; i++) {
				editBtns[i].addEventListener('click', function () {
					editClicked = true;
					contentEdit = this.parentNode;
					dialog.showModal();
				});
			}
			deleteBtns = document.getElementsByClassName('delete');

			for (var i = 0; i < deleteBtns.length; i++) {
				deleteBtns[i].addEventListener('click', function () {
					deleteContent = this.parentNode;
					dialogDelete.showModal();
				});
			}
		}
    }
	saveBtn.addEventListener('click', saveFunction);
	
	// confirm  delete in dialog
	var deleteOk = document.getElementById("deleteOk");
	function deleteOkFunction() {
		list.removeChild(deleteContent);
		if (document.getElementsByTagName("LI").length == 0) {
			noEntry = true;
			entryCount.innerHTML = 'There is no  entry </br>'
		}
		else{
			entryCount.innerHTTML = "";
		}
    }

	deleteOk.addEventListener('click', deleteOkFunction);