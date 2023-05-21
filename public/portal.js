// fetch('/all-entries', {
//    headers: {
//       'Accept': 'application/json'
//    }
// })
//    .then(response => response.text())
//    .then(text => console.log(text))
const buttons = document.getElementsByTagName("button");
const arr = new Array("1000");
var lastOpen = 0;

fetch('/all-entries', {
    headers: {
       'Accept': 'application/json'
    }
 }) .then(function (response) {
    return response.json();
 }) .then(function(obj) {
   let i = 0;
    obj.forEach(res => {
        i++;
        let card = document.createElement("button");
        card.className = "card_entries";
        card.setAttribute("id", i);

        let title = document.createElement("div");
        title.className = "title_entry";
        let titleText = document.createTextNode(res.title);
        title.appendChild(titleText);
        card.appendChild(title);

        let date = document.createElement("div");
        date.className = "date_entry"

        let wholeDate = res.date;
        let year = wholeDate.substring(0, 4);
        let month = wholeDate.substring(5, 7);
        let day = wholeDate.substring(8, 10);
        let dateText = document.createTextNode(month + "\\" + day + "\\" + year);
        date.appendChild(dateText);
        card.appendChild(date);

        let container = document.querySelector("#entries");
        container.appendChild(card);

        arr[i] = res.content;
      //   let shadowBox = document.createElement("div");
      //   shadowBox.className = "box hide"
      //   shadowBox.setAttribute("id", "box"+i);
      //   let content = document.createElement("div");
      //   let contentText = document.createTextNode(res.content);
      //   content.className = "content hide"
      //   content.appendChild(contentText);
      //   content.setAttribute("id", "text"+i);
        
      //   let overlay = document.getElementsByTagName("overlay");
      //   overlay.appendChild(content);
      //   overlay.appendChild(shadowBox);

        
        
      //   let container2 = document.getElementsByClassName("main");
      //   container2.appendChild(shadowBox);
    });
    let btns = document.querySelectorAll('button');

    for (i of btns) {
      i.addEventListener('click', function() {
        var paragraph = document.getElementById("text");
        paragraph.textContent = arr[this.id];
        lastOpen = this.id;
        let overlay = document.getElementById("content");
        overlay.className = "overlay show";

        let box = document.getElementById("shadow");
        box.className = "box show";
      });
    }
    
    console.log(obj);
 }) .catch(function (error) {
    console.error(error);
 });


 function erase() {
   let overlay = document.getElementById("content");
   overlay.className = "overlay hide";

   let box = document.getElementById("shadow");
   box.className = "box hide";
 }