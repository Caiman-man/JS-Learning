let id = 2;
let addPhotoPath = "";
let editPhotoPath = "";
let arr = [];

function ShowAddModal() {
    var avatar = document.getElementById('addPhoto');
    avatar.src = "./Images/avatar.png";
    document.getElementById('addEmployeeModal').style.display = 'block'
}

function ShowEditModal() {
    var check = document.getElementsByName("options[]");
    for (var i = 0; i < check.length; i++) {
        if (check[i].checked == true) {
            document.getElementById('editEmployeeModal').style.display = 'block'
            var photo = document.getElementsByName("photo");
            for (var j = 0; j < photo.length; j++) {
                if (i == j) {
                    document.getElementById('editPhoto').src = photo[i].src;
                    document.getElementById('editName').value = tableBody.rows.item(i).cells.item(2).innerHTML;
                    document.getElementById('editPhone').value = tableBody.rows.item(i).cells.item(3).innerHTML;
                    document.getElementById('editAddress').value = tableBody.rows.item(i).cells.item(4).innerHTML;
                    document.getElementById('editSalary').value = tableBody.rows.item(i).cells.item(5).innerHTML;
                }
            }
        }
    }
}

function ShowDeleteModal() {
    var check = document.getElementsByName("options[]");
    for (var i = 0; i < check.length; i++) {
        if (check[i].checked == true) {
            document.getElementById('deleteEmployeeModal').style.display = 'block'
        }
    }
}

function CloseModal() {
    document.getElementById('addEmployeeModal').style.display = 'none'
    document.getElementById('editEmployeeModal').style.display = 'none'
    document.getElementById('deleteEmployeeModal').style.display = 'none'
    document.getElementById('photoModal').style.display = 'none'
}

function ShowPhotoModal(id) {
    var img = document.getElementById(id);
    document.getElementById("photoModal").style.display = "block";
    document.getElementById("imgmodal").src = img.src;
    document.getElementById("caption").innerHTML = img.alt;
}

function ClosePhotoModal() {
    document.getElementById("photoModal").style.display = "none";
}

function ChosePhoto() {
    var input = document.createElement('input');
    input.type = 'file';
    input.accept = ".jpg,.jpeg,.png";
    input.onchange = e => {
        addPhotoPath = URL.createObjectURL(e.target.files[0]);
        editPhotoPath = URL.createObjectURL(e.target.files[0]);
        var avatar = document.getElementById('addPhoto');
        avatar.src = addPhotoPath;
        var avatar2 = document.getElementById('editPhoto');
        avatar2.src = editPhotoPath;
    }
    input.click();
}

function AddEmployee() {
    let newRow = document.createElement('tr');
    let newCol0 = document.createElement('td');
    let newCol1 = document.createElement('td');
    let newCol2 = document.createElement('td');
    let newCol3 = document.createElement('td');
    let newCol4 = document.createElement('td');
    let newCol5 = document.createElement('td');
    let newCol6 = document.createElement('td');
    id++;
    arr.push(id);

    //add checkbox
    var newCheckbox = document.createElement('span');
    newCheckbox.className = "custom-checkbox";
    var input = document.createElement('input');
    input.type = "checkbox";
    input.name = "options[]";
    input.value = "1";
    var label = document.createElement('label');
    label.htmlFor = "checkbox" + id;
    newCheckbox.appendChild(input);
    newCheckbox.appendChild(label);
    newCol0.appendChild(newCheckbox);

    //add values
    var img = document.createElement('img');
    img.src = addPhotoPath;
    img.className = "photo";
    img.setAttribute("name", "photo");
    img.alt = document.getElementById('addName').value;
    var newId = "photo" + id;
    img.setAttribute("id", newId);
    img.addEventListener("click", () => ShowPhotoModal(newId), false);
    newCol1.appendChild(img);
    newCol2.innerHTML = document.getElementById('addName').value;
    newCol3.innerHTML = document.getElementById('addPhone').value;
    newCol4.innerHTML = document.getElementById('addAdress').value;
    newCol5.innerHTML = document.getElementById('addSalary').value;

    //add options
    var edit = document.createElement('a');
    edit.className = "edit";
    edit.addEventListener("click", () => ShowEditModal(), false);
    var i1 = document.createElement('i');
    i1.className = "material-icons";
    i1.title = "Edit";
    i1.innerHTML = "&#xE254;";
    edit.appendChild(i1);
    newCol6.appendChild(edit);

    var del = document.createElement('a');
    del.className = "delete";
    del.addEventListener("click", () => ShowDeleteModal(), false);
    var i2 = document.createElement('i');
    i2.className = "material-icons";
    i2.title = "Delete";
    i2.innerHTML = "&#xE872;";
    i2.style.marginLeft = "8px";
    del.appendChild(i2);
    newCol6.appendChild(del);

    newRow.appendChild(newCol0);
    newRow.appendChild(newCol1);
    newRow.appendChild(newCol2);
    newRow.appendChild(newCol3);
    newRow.appendChild(newCol4);
    newRow.appendChild(newCol5);
    newRow.appendChild(newCol6);
    tableBody.appendChild(newRow);
}

function SaveEmployee() {
    var check = document.getElementsByName("options[]");
    for (var i = 0; i < check.length; i++) {
        if (check[i].checked == true) {

            var photo = document.getElementsByName("photo");
            for (var j = 0; j < photo.length; j++) {
                if (i == j) {
                    photo[j].src = document.getElementById("editPhoto").src;
                    photo[j].alt = document.getElementById('editName').value;
                }
            }

            tableBody.rows.item(i).cells.item(2).innerHTML = document.getElementById('editName').value;
            tableBody.rows.item(i).cells.item(3).innerHTML = document.getElementById('editPhone').value;
            tableBody.rows.item(i).cells.item(4).innerHTML = document.getElementById('editAddress').value;
            tableBody.rows.item(i).cells.item(5).innerHTML = document.getElementById('editSalary').value;
        }
    }
}

function DeleteEmployee() {
    var check = document.getElementsByName("options[]");
    for (var i = 0; i < check.length; i++) {
        if (check[i].checked == true) {
            tableBody.deleteRow(i);
            i--;
            id--;
        }
    }
}

function SelectAll() {
    var selectAll = document.getElementById("selectAll");
    if (selectAll.checked == true) {
        var check = document.getElementsByName("options[]");
        for (var i = 0; i < check.length; i++) {
            check[i].checked = true
        }
    }
    else {
        var check = document.getElementsByName("options[]");
        for (var i = 0; i < check.length; i++) {
            check[i].checked = false
        }
    }
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        CloseModal();
    }
})