// productForm.js kandyKorner

//Customerform/employeefrom honeyRaes

//save new item button will send you back list.js

//you can only edit your own list

import { useState } from "react";
import { useNavigate ,useParams } from "react-router-dom"

export const NewListItemForm = () => {
  
  // const [ items, setItems ] = useState([])
  const { wishListId } = useParams()
  const [userChoices, setUserChoices] = useState({
    purchased: false,
    itemName: "",
    link: "",
    picture: "",
    description: "",
    price: ""

  });

  const navigate = useNavigate()

  // useEffect(() => {
  //   fetch(`http://localhost:8088/wishListItems`)
  //     .then((response) => response.json())
  //     .then((itemsArray) => {
  //       setItems(itemsArray);
  //     });
  // }, []);

  //! This handleInputChange function is reuseable code. Use it to your advantage.
  const handleInputChange = (event) => {
    const copyOfUserChoices = { ...userChoices };
    copyOfUserChoices[event.target.id] = event.target.value;
    setUserChoices(copyOfUserChoices);
  };

  // const handleIntegerInputChange = (event) => {
  //   const copyOfUserChoices = { ...userChoices };
  //   copyOfUserChoices[event.target.id] = parseInt(event.target.value);
  //   setUserChoices(copyOfUserChoices);
  // };

  const handleSaveNewItem = (event) => {
    event.preventDefault();
     {
              const apiChoices = {
                wishListId: wishListId,
                purchased: userChoices.purchased,
                itemName: userChoices.itemName,
                link: userChoices.link,
                picture: userChoices.picture,
                description: userChoices.description,
                price: userChoices.price,
                dateAdded: userChoices.dateAdded
              };
            
        fetch("http://localhost:8088/wishListItems?_expand=wishList", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(apiChoices),
      })
        .then((res) => res.json())
        .then(() => {
          navigate(`/list/${wishListId}`)
     });
    } 
  };

  return (
    <>
      <form className="newItemForm">
        <h2 className="wish-form-title">
          Add a new WishList Item
        </h2>
        <fieldset>
          <div className="form-group">
            <label htmlFor="name">New Item:</label>
            <input
              required
              id="itemName"
              type="text"
              className="form-control"
              placeholder="What is your Item named?"
              value={userChoices.itemName}
              onChange={handleInputChange}
            />
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="description">Description of Item:</label>
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
            <label htmlFor="link">URL link for Item:</label>
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
          <label htmlFor="picture">Picture of Item:</label>
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
                    <label htmlFor="price">Price for Item:</label>
                    <input type="number"
                        className="form-control"
                        value={userChoices.price}
                        onChange={
                            (evt) => {
                                const copy = {...userChoices}
                                copy.price = parseFloat(evt.target.value, 2) 
                                setUserChoices(copy)
                            }
                        } />
                </div>
        </fieldset>
        

        <button className="btn" onClick={handleSaveNewItem }>
          Add your new Wish List item
        </button>
        
      </form>
    </>
  );
};