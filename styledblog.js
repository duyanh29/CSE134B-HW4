// delete button of enttries
var dialogDelete = document.getElementById('dialogDelete');
var deleteBtns = document.getElementsByClassName('delete');
var deletedTR;
var deleteContent;
function deleteFunction() {
	deletedTR = this.parentNode.parentNode.parentNode;
	deleteContent = this.parentNode.parentNode;
	dialogDelete.showModal();
}

for (var i = 0; i < deleteBtns.length; i++) {
	deleteBtns[i].addEventListener('click', deleteFunction);
}

var editTR;
var contentEdit;
var editClicked = false;
//  edit buttons of enttries
var dialog = document.getElementById('dialog');
var editBtns = document.getElementsByClassName('edit');
function editFunction() {
	editClicked = true;
	editTR = this.parentNode.parentNode.parentNode;
	contentEdit = this.parentNode.parentNode;
	dialog.showModal();
}

for (var i = 0; i < editBtns.length; i++) {
	editBtns[i].addEventListener('click', editFunction);
}	

	// add Buttton
	var addBtn = document.getElementById('add');
	addBtn.addEventListener('click', function () {
		editClicked = false;
		dialog.showModal();
	});

	//  save Button
	var saveBtn = document.getElementById('save');
	var entryCount = document.getElementById("count");
	var node;
	var noEntry = false;
	var list = document.getElementById('list');
	function saveFunction() {
		var name = document.getElementById("name").value;
		var date = document.getElementById("date").value;
		var summary = document.getElementById("summary").value;

		node = document.createElement("TR");

		name = DOMPurify.sanitize(name);
		date = DOMPurify.sanitize(date);
		summary = DOMPurify.sanitize(summary);

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
			for (var i = 0; i < deleteBtns.length; i++) {
				deleteBtns[i].addEventListener('click', function () {
					deletedTR = this.parentNode.parentNode.parentNode;
					deleteContent = this.parentNode.parentNode;
					dialogDelete.showModal();
				});
			}


			 editBtns = document.getElementsByClassName('edit');
			for (var i = 0; i < editBtns.length; i++) {
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
	var deleteOk = document.getElementById("deleteOk");
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















	

	


	



