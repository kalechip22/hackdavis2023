// fetch('/all-entries', {
//    headers: {
//       'Accept': 'application/json'
//    }
// })
//    .then(response => response.text())
//    .then(text => console.log(text))
const buttons = document.getElementsByTagName("button");


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

        let shadowBox = document.createElement("div");
        shadowBox.className = "box hide"
        shadowBox.setAttribute("id", "box"+i);
        let content = document.createElement("div");
        let contentText = document.createTextNode(res.content);
        content.className = "content hide"
        content.appendChild(contentText);
        content.setAttribute("id", "text"+i);
        card.appendChild(content);
        card.appendChild(shadowBox);

        let container = document.querySelector("#entries");
        container.appendChild(card);
        
      //   let container2 = document.getElementsByClassName("main");
      //   container2.appendChild(shadowBox);
    });
    let btns = document.querySelectorAll('button');

    for (i of btns) {
      i.addEventListener('click', function() {
        let find = "#text"+this.id
        console.log(find);

        let overlay = document.querySelector(find);
        overlay.className = "content show";

        let find2 = "#box"+this.id

        let overlay2 = document.querySelector(find2);
        overlay2.className = "box show";
      });
    }
    
    console.log(obj);
 }) .catch(function (error) {
    console.error(error);
 });


//  const wrapper = document.getElementById('entries');

//  wrapper.addEventListener('click', (event) => {
//     const isButton = event.target.nodeName === 'BUTTON';
//     if (!isButton) {
//     return;
//     }
//     console.log(event.target.id);
//     let overlay = document.querySelector("text"+event.target.id);
//     overlay.className = "content show";






 
//     console.dir();
//  })



