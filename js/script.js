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
const itemsPerPage = 9;
const studentData = data;

function showPage(pageNumber, studentData){

   let startIndex = (page * itemsPerPage) - itemsPerPage;
   let endIndex = page * itemsPerPage;

   const studentList = document.getElementsByClassName("student-list");
   studentList.innerHTML = '';

   //trying to append the data from data.js 
   for (let i = 0; i < studentList.length; i++){
      if(i >= startIndex && i < endIndex){
         let studentProfile = '';
         //format the student profile li
         studentProfile += `<li class="student-item cf">` +
            `<div class="avatar" src="${studentData.picture}">` +
            `<h3>${studentData.name}</h3>` +
            `<span class="email">${studentData.email}</span>` +
            `</div>` +
            `<div class="joined-details">` +
               `<span class="date">${studentData.registered}</span>` +
            `</div>` +
            `</li>`

            //ive tried this with studentList as well 
            const h = document.getElementsByClassName("student-list")[i];
            h.insertAdjacentHTML("afterend", studentProfile);
      }
   }
   
};
showPage(page, studentData);




/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/
function addPagination(){
   
};


// Call functions
