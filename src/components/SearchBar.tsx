import React, { useState } from "react";
import {createApi} from 'unsplash-js';
import classes from './SearchBar.module.css'

const SearchBar = () => {

    const API_KEY : string = process.env.REACT_APP_API_KEY!;
    const [searchName, setSearchName] = useState("");
    const [error,setError] = useState(false)
    const [searchResult, setSearchResult] = useState([] as any)
    const unsplash = createApi({
        accessKey: API_KEY
    })

    const searchNameHandler = (e : any) => {
        setSearchName(e.target.value)
    }

    const formSubmitHandler = async (event : any) => {
        event.preventDefault();
        if(searchName == ""){
            setError(true)
            return
        }
        
        const response = await unsplash.search.getPhotos({
            query: searchName,
            page: 1,
            perPage: 20,
            color: 'green',
            orientation: 'portrait',
          });
          setError(false)
          setSearchResult(response.response?.results);
        
        }
    

    return (
            <>
                <form onSubmit={formSubmitHandler}>
                    <input type="text" className={classes.textField} name="query"  placeholder="Try any logical name" onChange={searchNameHandler} />
                    <input type="submit" className={classes.buttonField} value="Search" />
                </form>
                {error && <p className={classes.error}>Please enter a valid name !</p>}
                <div className={classes.imgtag}>
                {searchResult.map((pic : any ) =>
          <div key={pic.id}>
            <img
              alt={pic.alt_description}
              src={pic.urls.full}
              width="80%"
              height="80%"
            ></img>
          </div>)}

                </div>
            </>
        );
}

export default SearchBar;