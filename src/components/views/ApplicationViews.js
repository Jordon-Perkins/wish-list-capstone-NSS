import { WishListHome } from "../wishListHome/WishListHome.js"
import { Outlet, Route, Routes } from "react-router-dom"
import { List } from "../list/List.js"
import { NewListItemForm } from "../list/NewListItemForm.js"
import { EditListItemForm } from "../list/EditListItemForm.js"
import { useEffect, useState } from "react"
import "./views.css"


export const ApplicationViews = () => {

   


	return <>
	
        <Routes>

            
            
            <Route path="/" element={ <WishListHome />  } />
            <Route path="list/:wishListId" element={ <List />  } />
            <Route path="list/:wishListId/add" element={ <NewListItemForm />  } />
            <Route path="list/:wishListId/:wishListItemId/edit" element={ <EditListItemForm />  } />

        </Routes>


	</>
}



<Route path="/" element={
                <>
                    <div className="main">
                    <h1>WishList</h1>
                    <div>Create your own WishList Today</div>
                    <h3>Welcome, 
                        {/* {
                            <>
                            user.map((userObj) => {
                                return (${userObj.name}
                                    );
                                    )
                               </> } */}
                            
                    </h3>
                    </div>
                    <Outlet />
                </>
            }></Route>