
const btnSearch = document.querySelector(".btn-search");
const searchInput = document.querySelector("#search-txt");

const searchBook = () =>
{
   
     fetch(`https://www.googleapis.com/books/v1/volumes?q={${searchInput.value}}`)
    .then((response)=> response.json())
    .then((data)=>{
      
       const books = data.items;
       
       books.forEach(book => {
          
        console.log(book.volumeInfo.imageLinks.smallThumbnail);
           console.log(book.volumeInfo.title);
           console.log(book.volumeInfo.authors);
          console.log(book.volumeInfo.publishedDate);
         

        


       });

   }) 

   .catch((error)=> console.log(error))
}


btnSearch.addEventListener("click", searchBook);