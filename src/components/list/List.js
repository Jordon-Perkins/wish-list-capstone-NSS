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
        }} className="wish_delete" class="btn btn-warning">Delete</button>
    }
    else {
        return " "
    }
}

const makePurchase = (purchase) => {
  const result = items.find(element => {
    return element.id === purchase.id;
  });

  const copy = { ...result }
  copy.purchased = purchase.purchased

  fetch(`http://localhost:8088/wishListItems/${purchase.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(copy)
  })
    .then(response => response.json())
    .then(resetItems)
}


  return <>
    {
     
    }
    {
      wishUserObject.id === wishList.userId
      ? 
        <>
        <div className="welcome">
          <h2 >Welcome to one of your Wish Lists!</h2>
          <button className="new-item" class="btn btn-secondary" onClick={ () => { navigate(`add`)}}>Add A New Item</button>
        </div>
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
                    <div className="itemDetails">
                  <p className="item-name">{itemObj.itemName}</p>
                  <p className="item-name">{itemObj.description}~${itemObj.price}</p>
                  <a className="objLink" href={itemObj.link} target="_blank">Where to Find me!</a>
                  { deleteButton(itemObj.id) }
                  <button class="btn btn-outline-light" onClick={ () => { navigate(`${ itemObj.id }/edit`)}}>Edit an Item</button>
                  </div>
                </div>
              );
            })
          }
        </div>
      </>
      : 
      <>
        <h2 className="welcome">What are we looking to gift today?</h2>
        <div className="items-container container">
        {
          items.map((itemObj) => {
            return (
              <div className="item-card" key={itemObj.id}>
                <img
                  style={{cursor: "pointer"}}
                    src={itemObj.picture}
                    alt={itemObj.name}
                    className="item-img"/>
                    
                <div className="itemDetails"> 
                <p className="item-name">{itemObj.itemName}</p>
                <p>{itemObj.description}~${itemObj.price}</p>
                <a className="objLink" href={itemObj.link} target="_blank">Where to Find me!</a>
                Purchased? {itemObj.purchased} 
                <input type="checkbox" 
                  name="purchased" 
                  value={`${itemObj.id}`} 
                  checked={itemObj.purchased}
                  onChange={ (event) => {
                    makePurchase({id: parseInt(event.target.value), purchased: event.target.checked })
                }}
                
                  
                />
                </div>
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