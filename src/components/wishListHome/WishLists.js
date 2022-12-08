// this component will hold the exported function ListOfWishes that will render the lists is link

// the function will map each list that will be able to be filtered with the userId on the list object

//productList.js kandyKorner

//terinary state based on userId to allow you to change the way the list will look



import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { WishList } from "./WishList"

export const WishLists = ({searchTermState}) => {

    const navigate = useNavigate( )

    const localWishUser = localStorage.getItem("wish_user")
    const wishUserObject = JSON.parse(localWishUser)

    
    const [filteredLists, setFiltered] = useState([])
    // const[ userOwns, updateOwns] = useState(true)
    // const [user, setUsers] = useState([])
    // const [wishLists, setWishLists] = useState([])

    // useEffect(
    //     () => {
    //         fetch(`http://localhost:8088/users?isStaff=true `)
    //             .then(response => response.json())
    //             .then((employeeArray) => {
    //                 setEmployees(employeeArray)
    //             })
    //     },
    //     []
    // )


    useEffect(() => {
        fetch(`http://localhost:8088/wishList?_expand=user`)
            .then(response => response.json())
            .then((listArray) => {
                setFiltered(listArray)
                // setUsers(listArray)
            })
        
    },
    [] 
    )


    useEffect(
        () => {
            if(searchTermState === "") {
                fetch(`http://localhost:8088/wishList?_expand=user`)
            .then(response => response.json())
            .then((listArray) => {
                setFiltered(listArray)
                // setUsers(listArray)
            })
            }
            else {
                const searchedLists = filteredLists.filter( wishList => {
                    return wishList?.user?.name.toLowerCase().includes(searchTermState.toLowerCase())
                })
                setFiltered(searchedLists)
            }
        },
        [searchTermState]
        )



        

    
    

    return <>  
    <article className="wishList">
    {
        filteredLists.map(wishList => <WishList 
            key={`wishList--${wishList.id}`}
            wishListObject={wishList} 
            wishUserObject={wishUserObject}/>
        )
    }          
    </article>
    
    </>
}