export default function BookList() {
   let pageTitle = "Books I read this year";
   let book1 = "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1631983063i/50027.jpg";
   let book2 = "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1389680240i/66678.jpg";
   let book3 = "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1322861953i/66695.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="Homeland by R.A. Salvatore" />
         <img src={book2} alt="Exile by R.A. Salvatore"/>
         <img src={book3} alt="Sojourn by R.A. Salvatore" />
      </div>      
   );
}