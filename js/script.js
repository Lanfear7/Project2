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

function showPage(list, page){
   let itemsPerPage = 9;
   let startIndex = (page * itemsPerPage) - itemsPerPage;
   let endIndex = page * itemsPerPage;

   let ul = document.querySelector('.student-list');
   ul.innerHTML = '';

   //creat loop that will loop over each obj in the list 
   for(var i = 0; i < list.length; i++) {
      var obj = list[i];
      if (i >= startIndex && i < endIndex){
         let studentProfile = '';
         //format the student profile li
         studentProfile += `<li class="student-item cf">` +
            `<div class="student-details">` +
            `<img class="avatar" src="${obj.picture.thumbnail}">` +
            `<h3>${obj.name.first} ${obj.name.last}</h3>` +
            `<span class="email">${obj.email}</span>` +
            `</div>` +
            `<div class="joined-details">` +
               `<span class="date">Joined: ${obj.registered.date}</span>` +
            `</div>` +
            `</li>`

             //insert the students
             const h = document.getElementsByClassName("student-list")[0];
             h.insertAdjacentHTML("beforeend", studentProfile)
      }
   }
};
showPage(data, 3);

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/



// Call functions
