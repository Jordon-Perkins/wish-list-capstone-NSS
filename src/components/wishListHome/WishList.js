import { Link } from "react-router-dom"


export const WishList = ({wishListObject, wishUserObject}) => {
    return <>
        
        {
            
            wishUserObject?.id === wishListObject?.userId
            ? 
            <>
            <li key={`wishList--${wishListObject?.id}`}>{wishListObject?.listName} ~ Owned by {wishListObject?.user?.name}</li>
            <Link className="whichList" to={`/list/${wishListObject?.id}`}>Show me my List</Link>
            </>
            :
            <>
            <li key={`wishList--${wishListObject?.id}`}>{wishListObject?.listName} ~ Owned by {wishListObject?.user?.name}</li>
            <Link className="whichList" to={`/list/${wishListObject?.id}`}>Let's find some Gifts</Link>
            </>
        }
    </>
        
        
}



// <Link to={`/character/${ownedCharacter.id}`}></Link>


/* <section className="employee">
<div>
    <Link to={`/employees/${id}`}>Name: {fullName}</Link>
</div>
<div>Email: {email}</div>
</section> */


    // useEffect(
    //     () => {
    //         if (wishUserObject?.userId === users?.id) {
    //             const ListElements = filteredLists.filter(wishList => {
    //             return <>
    //             <li key={`wishList--${wishList?.id}`}>{wishList?.listName} ~ Owned by {wishList?.user?.name}</li>
    //             <Link className="whichList" to="/List">Show me my List</Link>
    //             </>})
    //             setFiltered(ListElements )
    //         }
    //         else{
    //             const ListElements = filteredLists.filter(wishList => {
    //                 return <>
    //                 <li key={`wishList--${wishList?.id}`}>{wishList?.listName} ~ Owned by {wishList?.user?.name}</li>
    //                 <Link className="whichList" to="/List">Let's find some Gifts</Link>
    //                 </>})
    //                 setFiltered(ListElements )
    //         }
    //     },
    //      [userOwns]
    // )
