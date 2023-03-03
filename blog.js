	// delete button of entries
	let dialogDelete = document.getElementById('dialogDelete');
	let deleteContent;
	let deleteBtns = document.getElementsByClassName('delete');
	function deleteFunction() {
		deleteContent = this.parentNode;
		dialogDelete.showModal();
    }
	for (let i = 0; i < deleteBtns.length; i++) {
		deleteBtns[i].addEventListener('click', deleteFunction);
	}
	
	let contentEdit;
	let editClicked = false;
	// edit  buttons of entries
	let dialog = document.getElementById('dialog');
	let editBtns = document.getElementsByClassName('edit');
	function editFunction() {
		editClicked = true;
		contentEdit = this.parentNode;
		dialog.showModal();
    }
	for (let i = 0; i < editBtns.length; i++) {
		editBtns[i].addEventListener('click', editFunction);
	}

	// add button
	let addBtn = document.getElementById('add');
	addBtn.addEventListener('click', function () {
		editClicked = false;
		dialog.showModal();
	});
	const nameArr = [];
	const dateArr = [];
	const summaryArr = [];

	// save button
	let saveBtn = document.getElementById('save');
	let entryCount = document.getElementById('count');
	let list = document.getElementById('list');
	let node;
	let noEntry = false;

	function saveFunction() {
		let name = document.getElementById("name").value;
		let date = document.getElementById("date").value;
		let summary = document.getElementById("summary").value;
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
			for (let i = 0; i < editBtns.length; i++) {
				editBtns[i].addEventListener('click', function () {
					editClicked = true;
					contentEdit = this.parentNode;
					dialog.showModal();
				});
			}
			deleteBtns = document.getElementsByClassName('delete');

			for (let i = 0; i < deleteBtns.length; i++) {
				deleteBtns[i].addEventListener('click', function () {
					deleteContent = this.parentNode;
					dialogDelete.showModal();
				});
			}
		}
    }
	saveBtn.addEventListener('click', saveFunction);
	
	// confirm  delete in dialog
	let deleteOk = document.getElementById("deleteOk");
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