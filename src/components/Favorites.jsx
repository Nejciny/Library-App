import { useState, useEffect} from "react"
import { useGlobalContext } from "../context"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Favorites = () => {


    const {favoriteBook, selectBook, CheckProperty, FavoriteBook} = useGlobalContext()

    // console.log('favorite books: '+favoriteBook.length)

    
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1000,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    };
    

    return(
        <div className="favorites favorites-container">

            <div className="favorites_title">
            <h1>Favorite Books</h1>

            {(favoriteBook.length <= 0)?<p>you haven't favorited any books yet</p>:''}

            </div>

               
            <div className="favorites-content">

                <Slider {...settings}>

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
                </Slider>
            </div>

            
        </div>
    )
}

export default Favorites

