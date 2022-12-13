// Locations.js kandyKorner

//new item form button will send you to Listitemform.js

//will have terunary to show which lists are shown


import { useEffect, useState } from "react"
import { useNavigate ,useParams } from "react-router-dom"


import "./List.css"


export const List = () => {

    const [items, setItems] = useState([])
    const { wishListId } = useParams()
    const localWishUser = localStorage.getItem("wish_user")
    const wishUserObject = JSON.parse(localWishUser)
    const [purchase, setPurchased] = useState({})
    const [wishList, setList] = useState({})
    const navigate = useNavigate()

  const resetItems = () => {
    fetch(`http://localhost:8088/wishListItems?wishListId=${wishListId}`)
                .then(response => response.json())
                .then((itemsArray) => {
                    setItems(itemsArray)
                })
  }

    useEffect(
        resetItems,
        [] 
    )

    useEffect(
      () => {
          fetch(`http://localhost:8088/wishLists/${wishListId}?`)
              .then(response => response.json())
              .then((wishList) => {
                  setList(wishList)
              })

      },
      [] 
  )

  const deleteButton = (id) => {
    if (wishUserObject.id) {
        return <button onClick={() => {
            fetch(`http://localhost:8088/wishListItems/${id}`, {
                method: "DELETE",
            })
            .then(resetItems)
        }} className="wish_delete">Delete</button>
    }
    else {
        return " "
    }
}

    useEffect(
      () => {
//find that WLObj that is assocciated with the radio click
//  purchaed.id is coming from the radio button onChange
        const result = items.find(element => {
          return element.id === purchase.id;
        });

        const copy = {...result}
        copy.purchased = purchase.purchased 
        
      fetch(`http://localhost:8088/wishListItems/${purchase.id}`, {
          method: "PUT",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(copy)
      })
          .then(response => response.json())
      },
      [purchase]
  )

  return <>
    {
     
    }
    {
      wishUserObject.id === wishList.userId
      ? 
        <>
          <h2>Welcome to one of your Wish Lists!</h2>
          <button onClick={ () => { navigate(`add`)}}>Add A New Item</button>
          <div className="items-container">
          {
            items.map((itemObj) => {
              return (
                <div className="item-card" key={itemObj.id}>
                  <img
                    style={{cursor: "pointer"}}
                      src={itemObj.picture}
                      alt={itemObj.name}
                      className="item-img"
                    />
                  <p className="item-name">{itemObj.itemName}</p>
                  <p>{itemObj.description}~${itemObj.price}</p>
                  <a className="objLink" href={itemObj.link} target="_blank">{itemObj.link}</a>
                  { deleteButton(itemObj.id) }
                  <button onClick={ () => { navigate(`${ itemObj.id }/edit`)}}>Edit an Item</button>
                </div>
              );
            })
          }
        </div>
      </>
      : 
      <>
        <h2>What are we looking to gift today?</h2>
        <div className="items-container">
        {
          items.map((itemObj) => {
            return (
              <div className="item-card" key={itemObj.id}>
                <img
                  style={{cursor: "pointer"}}
                    src={itemObj.picture}
                    alt={itemObj.name}
                    className="item-img"/>
                    
                <p className="item-name">{itemObj.itemName}</p>
                <p>{itemObj.description}~${itemObj.price}</p>
                <a className="objLink" href={itemObj.link} target="_blank">{itemObj.link}</a>
                Purchased? {itemObj.purchased} 
                <input type="checkbox" 
                  name="purchased" 
                  value={`${itemObj.id}`} 
                  checked={itemObj.purchased}
                  onChange={ (event) => {
                    setPurchased({id: parseInt(event.target.value), purchased: event.target.checked })
                }}
                  
                />
              </div>
            );
          })
        }
        </div>
      </>
    }
  </>
}


// Boolean(event.target.value)

// parseInt(event.target.value)