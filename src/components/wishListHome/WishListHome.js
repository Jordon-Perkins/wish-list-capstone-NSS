import { useState } from "react"
import { WishLists } from "./WishLists"
import { ListSearch } from "./ListSearch"
import { List } from "../list/List"


export const WishListHome = () => {
    const [searchTerms, setSearchTerms] = useState("")

    return <>
            <h2> Find the Wish List you are searching for! </h2>
            <ListSearch setterFunction={setSearchTerms} />
            <WishLists searchTermState={searchTerms} /> 
            
        </>
}



//this is the main page for the wish list

//this component with have a exported function called WishLists

//set up a localWishUser for localStorgage

//have a useState for users and wishLists

// fetch call for the list names and the userID http://localhost:8088/wishList?_expand=user

// will return all the <lists> in the database with wishList.listName and user.name

// Products.js from KanydKorner





