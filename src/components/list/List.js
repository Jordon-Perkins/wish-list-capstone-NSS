// Locations.js kandyKorner

//new item form button will send you to Listitemform.js

//will have terunary to show which lists are shown


import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

import "./List.css"


export const List = () => {

    const [items, setItems] = useState([])
    const { wishListId } = useParams()
    const localWishUser = localStorage.getItem("wish_user")
    const wishUserObject = JSON.parse(localWishUser)
    const [purchase, setPurchased] = useState({})
    const [wishList, setList] = useState({})

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
      wishUserObject.id === wishList.userId
      ? 
        <>
          <button onClick={ () => {}}>Edit an Item</button>
          <button onClick={ () => {}}>Delete an Item</button>
          <button onClick={ () => {}}>Add A New Item</button>
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
                </div>
              );
            })
          }
        </div>
      </>
      : 
      <>
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