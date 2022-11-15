import React, {useState, useContext, useEffect} from 'react'
import axios from 'axios'


const AppContext = React.createContext()


const AppProvider = ({children}) => {

    const[loading, setLoading] = useState(false)
    
    const [Books, setBooks] = useState([])

    const [searchTerm, setSearchTerm] = useState('sanderson')

    const [showModal,setShowModal] = useState(false)
    const [selectedBook, setSelectedBook] = useState(null)

    const [favoriteBook, setFavoriteBook] = useState([])


    const BooksURL = 'https://www.googleapis.com/books/v1/volumes?q='+searchTerm+'&key=AIzaSyDkyaAVjF6WuZBFAmiYLmePbtXfZnymaWc'

        const fetchBooks = async(url)=> {
            setLoading(true)
            try{
                const {data} = await axios(url)
                // console.log(data.items)

                if(data.items){
                    setBooks(data.items)
                }
                else(
                    setBooks([])
                )


            }catch(error){
                console.log(error.response)
            }
            setLoading(false)
        }

        function CheckProperty(item, property){

            if (item.hasOwnProperty(property)){
                return (
                    true
                )
            }
            else {
                console.log('item doesnt have '+property+' property!')
                return(false)
            }
        }

        function FavoriteBook(bookID){



            let book;
            book = Books.find((book)=> book.id == bookID)

            if (favoriteBook.some(item => item.id == bookID)){
                console.log('already favorited')

                setFavoriteBook((current)=> current.filter((book) => book.id !== bookID))
                document.querySelector('.like-btn_'+bookID).classList.remove('active')
            }
            else {
                setFavoriteBook(oldArray=>[...oldArray, book ])
                document.querySelector('.like-btn_'+bookID).classList.add('active')


            }

            

            

            

        }

        const selectBook = (bookID) => {
            let book;
            book = Books.find((book)=> book.id == bookID)

            setSelectedBook(book)
            setShowModal(true);
        }

        const closeModal = () => {
            setShowModal(false)
        }


    useEffect(()=>{       
        fetchBooks(BooksURL)
    },[searchTerm])





    return <AppContext.Provider value={{loading, Books, setSearchTerm, CheckProperty, 
    showModal, selectBook, selectedBook, closeModal, favoriteBook, setFavoriteBook, FavoriteBook}}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return (useContext(AppContext))
}

export {AppContext, AppProvider}