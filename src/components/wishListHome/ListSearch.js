// ProductSearch.js from KandyKorner
import "./WishList.css"

export const ListSearch = ({ setterFunction }) => {
    return (
        <div className="searchBar">
            <input 
                onChange={
                    (changeEvent) => {
                        setterFunction(changeEvent.target.value)
                    }
                }
                type="text" placeholder="Which Wish List?" />
        </div>
    )
}