/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/


/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/



/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
const page = 1;
const itemsPerPage = 10;
const studentData = data;

function showPage(list, page){

   let startIndex = (page * itemsPerPage) - itemsPerPage;
   let endIndex = page * itemsPerPage;

   const studentList = document.getElementsByClassName("student-list");
   studentList.innerHTML = '';

   //trying to append the data from data.js 
   for (let i = 0; i < list.length; i++){
      if(i >= startIndex && i < endIndex){
         let studentProfile = '';
         //format the student profile li
         studentProfile += `<li class="student-item cf">` +
            `<div class="student-details">` +
            `<img class="avatar" src="${data[i].picture.thumbnail}">` +
            `<h3>${data[i].name.first} ${data[i].name.last}</h3>` +
            `<span class="email">${data[i].email}</span>` +
            `</div>` +
            `<div class="joined-details">` +
               `<span class="date">Joined: ${data[i].registered.date}</span>` +
            `</div>` +
            `</li>`

            //insert the students
            const h = document.getElementsByClassName("student-list")[0];
            h.insertAdjacentHTML("beforeend", studentProfile);
      }
   }
   
};





/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/
function addPagination(list){
   let pageNumber = Math.ceil(list.length/ itemsPerPage);
   const paginationHolder = document.getElementsByClassName("link-list");
   paginationHolder.innerHTML = '';

   for (let i = 1; i <= pageNumber; i++){
      let paginationButton = '';
      paginationButton += `<li>` +
         `<button type="button"> 1 <button>` +
         `</li>`
      const j = document.getElementsByClassName("link-list");
      j.insertAdjacentHTML("beforeend", paginationButton);
      let fisrtButton = document.querySelector('button');
      fisrtButton.className = "active";
   }

   paginationHolder.addEventListener('click', (e) =>{
      if(e.target.tagName === "BUTTON"){
         let firstButton = document.querySelector('button');
         firstButton.className = '';
         e.target.className = 'active';
         showPage(data);
      }
   })
};



// Call functions
showPage(data, 1);
addPagination(data)