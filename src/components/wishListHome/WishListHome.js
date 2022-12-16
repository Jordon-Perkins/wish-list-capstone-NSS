import { useState, useEffect } from "react"
import { WishLists } from "./WishLists"
import { ListSearch } from "./ListSearch"
import { List } from "../list/List"
import "./WishList.css"




export const WishListHome = () => {
    const [searchTerms, setSearchTerms] = useState("")
    const localWishUser = localStorage.getItem("wish_user")
    const wishUserObject = JSON.parse(localWishUser)
    const [user, setUser] = useState({})

    useEffect(
        () => {
            fetch(`http://localhost:8088/users/${wishUserObject.id}`)
                .then(response => response.json())
                .then((user) => {
                    setUser(user)
                })
        },
        [] 
    )


    return <>
            <div className="main">
                    <h1>WishList</h1>
                    <div>Create your own WishList Today</div>
                    <h3>Welcome, {user.name}
                                  
                                
                    </h3>
                    </div>


            <div className="list">
            <h2 className="find"> Find the Wish List you are searching for! </h2>
            <ListSearch setterFunction={setSearchTerms} />
            <WishLists searchTermState={searchTerms} /> 
            </div>
            
        </>
}



//this is the main page for the wish list

//this component with have a exported function called WishLists

//set up a localWishUser for localStorgage

//have a useState for users and wishLists

// fetch call for the list names and the userID http://localhost:8088/wishList?_expand=user

// will return all the <lists> in the database with wishList.listName and user.name

// Products.js from KanydKorner





