import { useState } from "react"
import { WishList } from "./WishList"
import { ListSearch } from "./ListSearch"


export const WishListHome = () => {
    const [searchTerms, setSearchTerms] = useState("")

    return <>
            <ListSearch setterFunction={setSearchTerms} />
            <WishList searchTermState={searchTerms} /> 
        </>
}



//this is the main page for the wish list

//this component with have a exported function called WishLists

//set up a localWishUser for localStorgage

//have a useState for users and wishLists

// fetch call for the list names and the userID http://localhost:8088/wishList?_expand=user

// will return all the <lists> in the database with wishList.listName and user.name

// Products.js from KanydKorner





