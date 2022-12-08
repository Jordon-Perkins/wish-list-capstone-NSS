import { WishListHome } from "../wishListHome/WishListHome.js"
import { Outlet, Route, Routes } from "react-router-dom"
import { List } from "../list/List.js"

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

        </Routes>


	</>
}

