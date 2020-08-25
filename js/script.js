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

function showPage(pageNumber, studentsPerPage){

   const list = document.getElementById('student-list');
   
   let startIndex = (page * itemsPerPage) - itemsPerPage;
   let endIndex = page * itemsPerPage;
   let studentList = document.getElementsByClassName("student-list");
   studentList.innerHTML = '';

   for (let i = 0; i < list.length; i++){
      if(i >= startIndex && i < endIndex){
         let li = document.createElement('LI');
         let div = document.createElement('DIV');
         let img = document.createElement('IMG');
         let h3 = document.createElement('H3');
         let span= document.createElement('SPAN');

         list.appendChild(li);
         li.className = 'student-item';
         li.appendChild(div);
         div.className = 'student-details';
         div.appendChild(img)
         img.className = 'avatar';
         div.appendChild(h3);
         div.appendChild(span);
         span.className = 'email';
         li.appendChild(div);
         div.className = 'joined-details';
         div.appendChild(span);
         span.className = 'date';
         
      }
   }
};



/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/
function addPagination(){
   
};


// Call functions
