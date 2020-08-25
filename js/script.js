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

function showPage(list, page){
   
   let startIndex = itemsPerPage * page;
   let endIndex = startIndex + itemsPerPage;
   let studentList = document.getElementsByClassName("student-list").value;
   studentList.innerHTML = '';

   for (let i = 0; i < list.length; i++){
      if(i >= startIndex && i < endIndex){
         const li = document.createElement('LI');
         const div = document.createElement('DIV');
         const img = document.createElement('IMG');
         const h3 = document.createElement('H3');
         const span = document.createElement('SPAN');
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
