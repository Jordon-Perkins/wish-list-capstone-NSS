import { WishListHome } from "../wishListHome/WishListHome.js"
import { Outlet, Route, Routes } from "react-router-dom"
import { List } from "../list/List.js"
import { NewListItemForm } from "../list/NewListItemForm.js"
import { EditListItemForm } from "../list/EditListItemForm.js"

export const ApplicationViews = () => {
	return <>
	
        <Routes>

            <Route path="/" element={
                <>
                    <h1>WishList</h1>
                    <div>Create your own WishList Today</div>

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

