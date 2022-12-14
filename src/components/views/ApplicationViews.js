import { WishListHome } from "../wishListHome/WishListHome.js"
import { Outlet, Route, Routes } from "react-router-dom"
import { List } from "../list/List.js"
import { NewListItemForm } from "../list/NewListItemForm.js"
import { EditListItemForm } from "../list/EditListItemForm.js"
import { useEffect, useState } from "react"


export const ApplicationViews = () => {

    const [user, currentUser] = useState([])

    useEffect(
        () => {
            fetch(`http://localhost:8088/users`)
                .then(response => response.json())
                .then((user) => {
                    currentUser(user)
                })
  
        },
        [] 
    )


	return <>
	
        <Routes>

            <Route path="/" element={
                <>
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
                    <Outlet />
                </>
            }></Route>
            
            <Route path="wishListHome" element={ <WishListHome />  } />
            <Route path="list/:wishListId" element={ <List />  } />
            <Route path="list/:wishListId/add" element={ <NewListItemForm />  } />
            <Route path="list/:wishListId/:wishListItemId/edit" element={ <EditListItemForm />  } />

        </Routes>


	</>
}

