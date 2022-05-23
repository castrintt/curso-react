import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {

    const navigate = useNavigate()
    const [query, setQuery] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()

        navigate(`/search?q=${query}`)
    }

    return (
        <div>
            <form
                onSubmit={handleSubmit}
            >
                <label>
                    <span>
                        Digite sua pesquisa
                    </span>
                    <input
                        type="search"
                        name="pesquisa"
                        onChange={(e) => {
                            return setQuery(e.target.value)
                        }}
                    />
                </label>
                <input type="submit" value="Pesquisar" />
            </form>
        </div>
    )
}

export default Search