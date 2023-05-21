// fetch('/all-entries', {
//    headers: {
//       'Accept': 'application/json'
//    }
// })
//    .then(response => response.text())
//    .then(text => console.log(text))

fetch('/all-entries', {
    headers: {
       'Accept': 'application/json'
    }
 }) .then(function (response) {
    console.log("here");
    return response.json();
 }) .then(function(obj) {
   let i = 0;
    obj.forEach(res => {
        i++;
        let card = document.createElement("button");
        card.className = "card_entries";
        card.setAttribute("id", "button"+i);

        let title = document.createElement("div");
        title.className = "title_entry";
        let titleText = document.createTextNode(res.title);
        title.appendChild(titleText);
        card.appendChild(title);

        let date = document.createElement("div");
        date.className = "date_entry"

        let content = document.createElement("div");
        let contentText = document.createTextNode(res.content);
        

        let wholeDate = res.date;
        console.log(wholeDate);
        let year = wholeDate.substring(0, 4);
        let month = wholeDate.substring(5, 7);
        let day = wholeDate.substring(8, 10);
        let dateText = document.createTextNode(month + "\\" + day + "\\" + year);
        date.appendChild(dateText);
        card.appendChild(date);;

        // let date = document.createTextNode('date:' + res.date);
        // card.appendChild(date);

        let container = document.querySelector("#entries");
        container.appendChild(card);
    });
    console.log(obj);
 }) .catch(function (error) {
    console.error(error);
 });
