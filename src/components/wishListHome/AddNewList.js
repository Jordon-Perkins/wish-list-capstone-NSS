import { useState } from "react";
import { useNavigate ,useParams } from "react-router-dom"
import "./WishList.css"
 
 export const AddNewList = () => {

    const localWishUser = localStorage.getItem("wish_user")
    const wishUserObject = JSON.parse(localWishUser)
    const [userChoices, setUserChoices] = useState({
        listName: ""
        
    
      });
    
      const navigate = useNavigate()

 
      const handleInputChange = (event) => {
        const copyOfUserChoices = { ...userChoices };
        copyOfUserChoices[event.target.id] = event.target.value;
        setUserChoices(copyOfUserChoices);
      };


    const handleSaveNewList = (event) => {
        event.preventDefault();
         
        const apiList = {
          listName: userChoices.listName,
          userId: wishUserObject.id
        };
                
        fetch("http://localhost:8088/wishLists", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(apiList),
        })
          .then((res) => res.json())
          .then(() => {
            navigate('/')
          });
        
      };

    return (
        <>
          <form className="newListForm">
            <h2 className="list-form-title">
              Create A New WishList
            </h2>
            <fieldset>
              <div className="form-group">
                <label htmlFor="listName">New WishList:</label>
                <input
                  required
                  id="listName"
                  type="text"
                  className="form-control"
                  placeholder="What WishList are you going to create?"
                  value={userChoices.listName}
                  onChange={handleInputChange}
                />
              </div>
            </fieldset>
            <button type="button" className="btn btn-secondary" onClick={handleSaveNewList }>
              Add your new WishList
            </button>
            
          </form>
        </>
      );

 };