import { WishListHome } from "../wishListHome/WishListHome.js"
import { Outlet, Route, Routes } from "react-router-dom"
import { List } from "../list/List.js"
import { NewListItemForm } from "../list/NewListItemForm.js"
import { EditListItemForm } from "../list/EditListItemForm.js"
// import { useEffect, useState } from "react"
import "./views.css"
import { AddNewList } from "../wishListHome/AddNewList"


export const ApplicationViews = () => {

   


	return <>
	
        <Routes>

        
            
            <Route path="/" element={ <WishListHome />  } />
            <Route path="list/:wishListId" element={ <List />  } />
            <Route path="list/:wishListId/add" element={ <NewListItemForm />  } />
            <Route path="list/:wishListId/:wishListItemId/edit" element={ <EditListItemForm />  } />
            <Route path="add" element={ <AddNewList /> } />

        </Routes>


	</>
}


