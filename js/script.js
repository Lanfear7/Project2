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


//global so both functions can use 
let itemsPerPage = 10;



function showPage(list, page){
   
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
         studentProfile += `<li class="student-item cf"> 
            <div class="student-details"> 
            <img class="avatar" src="${obj.picture.thumbnail}"> 
            <h3>${obj.name.first} ${obj.name.last}</h3> 
            <span class="email">${obj.email}</span> 
            </div> 
            <div class="joined-details"> 
              <span class="date">Joined: ${obj.registered.date}</span> 
            </div> 
            </li>`

             //insert the students
             const insertStudets = document.getElementsByClassName("student-list")[0];
             insertStudets.insertAdjacentHTML('beforeend', studentProfile)
      }
   }
};


/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/
function addPagination(list){
   let numOfPages = Math.ceil(list.length/ itemsPerPage);

   //select the pagination list 
   let ul = document.querySelector('.link-list');
   ul.innerHTML = '';

   //for loop to add pagination buttons
   for (let i =  1; i <= numOfPages; i++){
      let paginationButton = '';
      paginationButton += `<li> 
      <button type="button">${i} 
      </li>`
      
      //insert into DOM
      ul.insertAdjacentHTML('beforeend', paginationButton);

      let firstButton = document.querySelector('button');
      firstButton.className = "active";

      ul.addEventListener('click', (e) =>{
         if(e.target.tagName === 'BUTTON'){
            let first = document.querySelector('.active');

            //add the active class to clicked button
            e.target.className = 'active';
            first.className = '';

            showPage(list, e.target.textContent)
         }
      })
   };

};


// Call functions
showPage(data, 1)
addPagination(data)


