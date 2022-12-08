// Locations.js kandyKorner

//new item form button will send you to Listitemform.js

//will have terunary to show which lists are shown


import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

// import "./.css"




export const List = () => {

    const [items, setItems] = useState([])
    const { wishListId } = useParams()


    useEffect(
        () => {
            fetch(`http://localhost:8088/wishListItems?wishListId=${wishListId}`)
                .then(response => response.json())
                .then((itemsArray) => {
                    setItems(itemsArray)
                })

        },
        [] 
    )



return (
    <>
    <div className="items-container">
      {items.map((itemObj) => {
        return (
          <div className="item-card" key={itemObj.id}>

            <img
            style={{cursor: "pointer"}}
              src={itemObj.picture}
              alt={itemObj.name}
              className="item-img"
            />
            <div className="item-name">{itemObj.itemName}</div>
            <p>{itemObj.description}/${itemObj.price}</p>
            <Link className="objLink" to="">{itemObj.link}</Link>
            <input type="radio" name="purchased" value="${itemObj.id}" /> ${itemObj.purchased}
       
          </div>
        );
      })}
    </div>
    </>
  );
};

