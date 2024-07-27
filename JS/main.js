var siteNameIbput = document.getElementById("siteName");

var siteURLIbput = document.getElementById("siteURL");

var allBookMarks = [];

if (localStorage.getItem("bookMarks") != null){
    allBookMarks = JSON.parse(localStorage.getItem("bookMarks"));
    displayData()

}

function addBookmark() {
 var bookmark = {
    siteName: siteNameIbput.value,
    siteURL : siteURLIbput.value
 };

 allBookMarks.push (bookmark);
 console.log(allBookMarks);
}
function displayData(arr) {
    var cartona ="";
    for(var i = 0; i < allBookMarks.length; i++){
        cartona += `
      <tr>
      <td>${i}</td>
      <td>${allBookMarks[i].name}</td>
      <td> <button class= "btn btn-outline-success btn-sm"Visit</button></td>
      <td> <button class= "btn btn-outline-danger btn-sm"Delete</button></td>
      
      
      </tr>
        
        `
    }
    document.getElementById("tableBody").innerHTML = cartona;
    }

    