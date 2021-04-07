showNotes();
let addBtn=document.getElementById("addBtn");
addBtn.addEventListener('click',function(e){
 let addBook=document.getElementById("addBook");
 let addAuthor=document.getElementById("addAuthor");
 let Type=document.getElementsByName("Type");
 let date = new Date();
 let form = time(date);
 if(Type[0].checked){
     Type.value="Fictional"
 }else if (Type[1].checked){
     Type.value="computer programming"
 }else if (Type[2].checked){
    Type.value="Inspirational"
 }
 let notes=localStorage.getItem("notes");
 if (notes == null) {
    notesObj = [];
} else {
    notesObj = JSON.parse(notes);
}
let myObj={
    bookname: addBook.value,
    authorname: addAuthor.value,
    Type:Type.value,
    Time:form,
    // date=samaye.value,
}
notesObj.push(myObj);
localStorage.setItem('notes',JSON.stringify(notesObj));
addBook.value="";
addAuthor.value="";
Type.value="";
showNotes();
});
function showNotes(){
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    let html="";
    notesObj.forEach(function(element,index) {
        html += `
        <tr>
        <td>${index + 1}</td>
        <td>${element.bookname}</td>
        <td>${element.authorname}</td>
        <td>${element.Type}</td>
        <td>${element.Time}</td>
        <td><button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary btn-sm">Delete Note</button>
        </td>
        </tr>
      `;
    });
    let tableEle=document.getElementById("tableid");
    if (notesObj.length != 0) {
        tableEle.innerHTML = html;
    } else{
        tableEle.innerHTML = `<h6>Table is empty ! fill library detail</h6>`;
    }
}
function time(date) {
    let d = date.getDate();
    let m = date.getMonth();
    m++;
    let y = date.getFullYear();

    return d + "/" + m + "/" + y;

}
function deleteNote(index){
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }

    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}


