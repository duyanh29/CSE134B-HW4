// delete button of enttries
let dialogDelete = document.getElementById('dialogDelete');
let deleteBtns = document.getElementsByClassName('delete');
let deletedTR;
let deleteContent;
function deleteFunction() {
	deletedTR = this.parentNode.parentNode.parentNode;
	deleteContent = this.parentNode.parentNode;
	dialogDelete.showModal();
}

for (let i = 0; i < deleteBtns.length; i++) {
	deleteBtns[i].addEventListener('click', deleteFunction);
}

let editTR;
let contentEdit;
let editClicked = false;
//  edit buttons of enttries
let dialog = document.getElementById('dialog');
let editBtns = document.getElementsByClassName('edit');
function editFunction() {
	editClicked = true;
	editTR = this.parentNode.parentNode.parentNode;
	contentEdit = this.parentNode.parentNode;
	dialog.showModal();
}

for (let i = 0; i < editBtns.length; i++) {
	editBtns[i].addEventListener('click', editFunction);
}	

	// add Buttton
	let addBtn = document.getElementById('add');
	addBtn.addEventListener('click', function () {
		editClicked = false;
		dialog.showModal();
	});
	const nameArr = [];
	const dateArr = [];
	const summaryArr = [];
	//  save Button
	let saveBtn = document.getElementById('save');
	let entryCount = document.getElementById("count");
	let node;
	let noEntry = false;
	let list = document.getElementById('list');
	function saveFunction() {
		node = document.createElement("TR");

		let name = document.getElementById("name").value;
		let date = document.getElementById("date").value;
		let summary = document.getElementById("summary").value;


		name = DOMPurify.sanitize(name);
		nameArr.push(name);

		date = DOMPurify.sanitize(date);
		dateArr.push(date);

		summary = DOMPurify.sanitize(summary);
		summaryArr.push(summary);

		localStorage.setItem("name", nameArr);
		localStorage.setItem("date", dateArr);

		localStorage.setItem("summary", summaryArr);
		document.getElementById("name").value = "";
		document.getElementById("date").value = "";
		document.getElementById("summary").value = "";

		node.innerHTML = '<tr><td>' + name + '</td><td style="text-align: center">' + date + '</td>' + 
		'<td style="text-align: center; width: 300px">' + summary + '</td>' + 
		'<td style="text-align: center"><image src="pencil.png" style="height:20px; vertical-align: middle;" class="edit"></image></td>' + 
		'<td style="text-align: center"><image src="trash.png" style="height:20px; vertical-align: middle;" class="delete"></image></td></tr>';
		
		if (name != "" && summary != "" && date != "") {
			if (editClicked) {
				contentEdit.innerHTML = node.innerHTML;
			}
			else{
				list.appendChild(node);
			}
			
			if (noEntry) {
				noEntry = false;
				editClicked = false;
				entryCount.innerHTML = "";
			}

			 deleteBtns = document.getElementsByClassName('delete');
			for (let i = 0; i < deleteBtns.length; i++) {
				deleteBtns[i].addEventListener('click', function () {
					deletedTR = this.parentNode.parentNode.parentNode;
					deleteContent = this.parentNode.parentNode;
					dialogDelete.showModal();
				});
			}


			editBtns = document.getElementsByClassName('edit');
			for (let i = 0; i < editBtns.length; i++) {
				editBtns[i].addEventListener('click', function () {
					editClicked = true;
					editTR = this.parentNode.parentNode.parentNode;
					contentEdit = this.parentNode.parentNode;
					dialog.showModal();
				});
			}


		}
    }
	saveBtn.addEventListener('click', saveFunction);

	//  confirm delete in dialog
	let deleteOk = document.getElementById("deleteOk");
	function deleteOkFunction() {
		deletedTR.removeChild(deleteContent);
		if (document.getElementsByTagName("TR").length == 1) {
			noEntry = true;

			entryCount.innerHTML = 'No Movies Currently Listed'
			entryCount.style.color = 'darkred';
		}
		else{
			entryCount.innerHTML = "";
		}

    }
	deleteOk.addEventListener('click', deleteOkFunction);















	

	


	



