import { useState, useEffect} from "react"
import { useGlobalContext } from "../context"


const Favorites = () => {


    const {favoriteBook, selectBook, CheckProperty, FavoriteBook} = useGlobalContext()

    
    console.log('favorite books: '+favoriteBook.length)

    return(
        <div className="favorites favorites-container">

            <div className="favorites_title">
            <h1>Favorite Books</h1>

            {(favoriteBook.length <= 0)?<p>you haven't favorited any books yet</p>:''}

            </div>

               
            <div className="favorites-content">

                {favoriteBook.map((book) => {
                    
                    console.log(book)

                    return (
                        <div className="favorite-book" >
                            <img src={CheckProperty(book.volumeInfo, 'imageLinks')?book.volumeInfo.imageLinks.thumbnail:''} 
                            onClick={()=>{selectBook(book.id)}} /> 
                            <h5 >{CheckProperty(book.volumeInfo, 'title')?book.volumeInfo.title:'title'}</h5>
                            <button id={book.id} className='remove-btn' onClick={ () => FavoriteBook(book.id) } > X </button>
                        </div>
                    )
                })}
            </div>

            
        </div>
    )
}

export default Favorites

