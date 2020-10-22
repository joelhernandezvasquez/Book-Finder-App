
const btnSearch = document.querySelector(".btn-search");
const searchResultContainer = document.querySelector(".inner-result");
const searchInput = document.querySelector("#search-txt");
const loader = document.querySelector(".loader");


function init()
{
  loader.classList.add("active"); 
}

const searchBook = () =>
{
  init();

 searchResultContainer.innerHTML = " ";
   

     setTimeout(()=>{
      
      fetch(`https://www.googleapis.com/books/v1/volumes?q={${searchInput.value}}`)
      .then((response)=> response.json())
      .then((data)=>{
        
         const books = data.items;
         
         books.forEach(book => {
            
            const bookCard = document.createElement("div");
            bookCard.classList.add("book-card");
  
            bookCard.innerHTML = `<div class="book-img">
                                    <img src="${book.volumeInfo.imageLinks.smallThumbnail}"/>
                                  </div> 
                                   <div class="book-details">
                                     <h1> ${book.volumeInfo.title}</h1>
                                     <p> BY ${book.volumeInfo.authors} </p>
                                     <p> Published ${book.volumeInfo.publishedDate} </p>
                                   </div>`
            searchResultContainer.appendChild(bookCard);
                                  
         });
  
     }) 
    
     .catch((error)=> console.log(error))
     loader.classList.remove("active"); 
    

    },2000) 
  
  
}


btnSearch.addEventListener("click", searchBook);