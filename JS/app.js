

 const error = document.getElementById('error-field')
 const total = document.getElementById('total-field')


document.getElementById('search-btn').addEventListener('click', function(){
  
    const searchInput= document.getElementById('search-input');

    const searchText =searchInput.value;
    
    console.log(searchText);

// error fixing
    if (searchText === "") {
        error.innerText = "Search Something for result.";
        searchResult.innerHTML = '';
        total.innerHTML = '';
       
        return;
      }

    //   clear
      error.innerText='';
  
      searchInput.value= '';
      searchResult.innerHTML = '';
    //   calling API

    const url=`https://openlibrary.org/search.json?q=${searchText}`;

    fetch(url)
    .then(res=> res.json())
    .then(data=>{       
// error fixing
        if( data.numFound<=0  ){
            error.innerText = "No Result Found";
            total.innerText='';

        }
        else{displayBooks(data.docs)
            total.innerText= `${data.numFound} Result Found in total`}
       
    });
   
 
})

const displayBooks = books => {

    const searchResult= document.getElementById("searchResult");
    books.forEach(book=>{
        
        const div = document.createElement('div');
        div.innerHTML=`  <div class="card h-100">
        <img src=" https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top img-fluid ">
          <div class="card-body">
          <h4 class="card-title"> ${book.title}  </h4>
          <h5 class="card-text text-success">By ${book.author_name}    </h5>
          <p class="card-text">First Published :     ${book.first_publish_year}   </p>
          <p class="card-text">Published by:     ${book.publisher}   </p>
          
        </div> `;
      
        searchResult.appendChild(div)

    })
    
    
}






