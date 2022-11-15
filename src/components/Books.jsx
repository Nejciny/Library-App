import {useGlobalContext} from '../context'
import {BsHandThumbsUp} from 'react-icons/bs'
import { useState } from 'react'



const Books = () => {
const {Books, loading,CheckProperty, selectBook, FavoriteBook} = useGlobalContext()





    
if (loading){
    return (
        <section>
            <h4>Loading...</h4>
        </section>
    )
}

if (Books.length < 1){
    return <section className='section'>
        <h4>No books found with this input </h4>
    </section>
}




// function CheckProperty(item, property){

//     if (item.hasOwnProperty(property)){
//         return (
//             true
//         )
//     }
//     else {
//         console.log('item doesnt have '+property+' property!')
//         return(false)
//     }
// }

    return <section className='section-center'>
        {Books.map((book)=>{



            const {id: BookID} = book

            return <article className='single_book'>

                {<img src={CheckProperty(book.volumeInfo, 'imageLinks')?book.volumeInfo.imageLinks.thumbnail:''} 
                onClick={()=>{selectBook(book.id)}} /> }
                

                <footer>
                    <div className="info">
                        <h5 >{CheckProperty(book.volumeInfo, 'title')?book.volumeInfo.title:'title'}</h5>
                        <p>{CheckProperty(book.volumeInfo, 'authors')?book.volumeInfo.authors:'author'}</p>
                    </div>
                    <button id={book.id} className={'like-btn like-btn_'+book.id} onClick={ () => FavoriteBook(book.id) } > < BsHandThumbsUp /> </button>
                </footer>

                
            </article>

        })}
    </section>
}

export default Books