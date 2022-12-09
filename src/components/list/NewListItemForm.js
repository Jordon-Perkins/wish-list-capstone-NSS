// productForm.js kandyKorner

//Customerform/employeefrom honeyRaes

//save new item button will send you back list.js

//you can only edit your own list

import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'

export const NewListItemForm = ({ seasonsFromDecStation, setItems }) => {
  const [categories, setCategories] = useState([]);
  const [userChoices, setUserChoices] = useState({
    wishListId: 0,
    purchased: false,
    itemName: "",
    link: "",
    picture: "",
    description: "",
    price: "",
    dateAdded: ""

  });

  // useEffect(() => {
  //   fetch(`http://localhost:8088/categories`)
  //     .then((response) => response.json())
  //     .then((theConvertedJSONDataThatsNowJavascriptForTheCategories) => {
  //       setCategories(theConvertedJSONDataThatsNowJavascriptForTheCategories);
  //     });
  // }, []);

  //! This handleInputChange function is reuseable code. Use it to your advantage.
  const handleInputChange = (event) => {
    const copyOfUserChoices = { ...userChoices };
    copyOfUserChoices[event.target.id] = event.target.value;
    setUserChoices(copyOfUserChoices);
  };

  const handleIntegerInputChange = (event) => {
    const copyOfUserChoices = { ...userChoices };
    copyOfUserChoices[event.target.id] = parseInt(event.target.value);
    setUserChoices(copyOfUserChoices);
  };

  const handleSaveNewItem = (event) => {
    event.preventDefault();
    if (
      userChoices.itemName &&
      userChoices.picture &&
      userChoices.wishListId &&
      userChoices.purchased &&
      userChoices.link &&
      userChoices.picture &&
      userChoices.description &&
      userChoices.price &&
      userChoices.dateAdded 
    ) {
      fetch("http://localhost:8088/wishListItems", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userChoices),
      })
        .then((res) => res.json())
        .then(() => {
          fetch("http://localhost:8088/wishListItems")
            .then((res) => res.json())
            .then((itemsData) => {
              setItems(itemsData);
              setUserChoices({
                wishListId: 0,
                purchased: false,
                itemName: "",
                link: "",
                picture: "",
                description: "",
                price: "",
                dateAdded: ""
              });
            });
        })
        .then(() => {
          navigate("/List")
     });
    } else {
      alert("Please complete form");
    }
  };

  return (
    <>
      <form>
        <h2 className="decoration-form-title">
          Add WishList Item
        </h2>
        <fieldset>
          <div className="form-group">
            <input
              required
              id="name"
              type="text"
              className="form-control"
              placeholder="What is your Item named?"
              value={userChoices.name}
              onChange={handleInputChange}
            />
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <input
              required
              id="description"
              type="text"
              className="form-control"
              placeholder="What is it?"
              value={userChoices.description}
              onChange={handleInputChange}
            />
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <input
              required
              id="link"
              type="text"
              className="form-control"
              placeholder="Where can this be bought?"
              value={userChoices.link}
              onChange={handleInputChange}
            />
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <input
              required
              id="picture"
              type="text"
              className="form-control"
              placeholder="Picture Please"
              value={userChoices.picture}
              onChange={handleInputChange}
            />
          </div>
        </fieldset>
        <fieldset>
                <div className="form-group">
                    <input type="number"
                        className="form-control"
                        value={userChoices.price}
                        onChange={
                            (evt) => {
                                const copy = {...userChoices}
                                copy.rate = parseFloat(evt.target.value, 2) 
                                setUserChoices(copy)
                            }
                        } />
                </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            {wishListItems.map((wishListItem) => {
              return (
                <div key={wishListItem.id} className="radio">
                  <label>
                    <input
                      id="purchased"
                      type="radio"
                      value={wishListItem.id}
                      checked={userChoices.purchased === wishListItem.id}
                      onChange={handleIntegerInputChange}
                    />
                    {wishListItem.purchased}
                  </label>
                </div>
              );
            })}
          </div>
        </fieldset>

        <button className="btn" onClick={handleSaveNewItem }>
          Add Decoration
        </button>
        
      </form>
    </>
  );
};