import { useGlobalContext } from "../context"

const Modal = () => {
    const {selectedBook, closeModal, CheckProperty} = useGlobalContext()
    console.log('------------')
    console.log({selectedBook})
    console.log('------------')
    return <aside className="modal-overlay">
        <div className="modal-container">
        <button className="close-btn" onClick={closeModal}> X</button> 
        <div className="modal-content">
            <img className="modal-img" src={CheckProperty(selectedBook.volumeInfo,'imageLinks')?selectedBook.volumeInfo.imageLinks.thumbnail:''} alt="Book image" />
            <h1>{CheckProperty(selectedBook.volumeInfo,'title')?selectedBook.volumeInfo.title:''}</h1> 
            <h5>{CheckProperty(selectedBook.volumeInfo, 'authors')?selectedBook.volumeInfo.authors:'author not provided'}</h5>
            
            
            <p>Category: <span> {CheckProperty(selectedBook.volumeInfo,'categories')?selectedBook.volumeInfo.categories:'no info!'}</span> </p>
            <p>{CheckProperty(selectedBook.volumeInfo,'description')?selectedBook.volumeInfo.description:'no description provided!'}</p>
            <span> Source: </span> <a href={CheckProperty(selectedBook.volumeInfo,'infoLink')?selectedBook.volumeInfo.infoLink:'no link provided!'}> selectedBook.volumeInfo.infoLink {}</a>
            
        </div>  
        </div>
    </aside>
}

export default Modal