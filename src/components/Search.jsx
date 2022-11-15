import { useState} from "react"
import { useGlobalContext } from "../context"


const Search = () => {

    const [text, setText] = useState('')

    const {setSearchTerm} = useGlobalContext()

    const handleChange = (e)=>{
        setText(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()

        if(text){
            setSearchTerm(text)
            setText('')
        }
    }



    return(
        <header className="search-container">
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder=" Name / Author / Publisher" className="form-input" value={text} onChange={handleChange}  />
                <button type="submit" className="btn">Search </button>
            </form>
        </header>
    )
}

export default Search