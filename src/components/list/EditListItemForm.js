import { useEffect, useState  } from "react"
import { useNavigate, useParams } from "react-router-dom"

export const EditListItemForm = () => {


    const [item, assignItem] = useState({
        purchased: false,
        itemName: "",
        link: "",
        picture: "",
        description: "",
        price: ""
    })
    const { wishListItemId, wishListId } = useParams()
    const navigate = useNavigate()

    useEffect(
        () => {
            fetch(` http://localhost:8088/wishListItems/${wishListItemId}`)
                .then(response => response.json())
                .then((data) => {
                    assignItem(data)
                })

        },
        [] 
    )

    const handleInputChange = (event) => {
        const copyOfAssignItem = { ...item };
        copyOfAssignItem[event.target.id] = event.target.value;
        assignItem(copyOfAssignItem);
      };

    const handleSaveButtonClick = (event) => {
        event.preventDefault()

        // TODO: Write the fetch for the PUT request to replace the object being edited
        return fetch(`http://localhost:8088/wishListItems/${item.id}`, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(item)
            })
                .then(response => response.json())
                .then(() => {
                    navigate(`/list/${wishListId}`)
                })
    }

    return (
        <>
          <form className="newItemForm">
            <h2 className="wish-form-title">
              Add a new WishList Item
            </h2>
            <fieldset>
              <div className="form-group">
                <label htmlFor="name">Your Existing Item:</label>
                <input
                  required
                  id="itemName"
                  type="text"
                  className="form-control"
                  value={item.itemName}
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
                  value={item.description}
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
                  value={item.link}
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
                  value={item.picture}
                  onChange={handleInputChange}
                />
              </div>
            </fieldset>
            <fieldset>
                    <div className="form-group">
                        <label htmlFor="price">Price for Item:</label>
                        <input type="number"
                            className="form-control"
                            value={item.price}
                            onChange={
                                (evt) => {
                                    const copy = {...item}
                                    copy.price = parseFloat(evt.target.value, 2) 
                                    assignItem(copy)
                                }
                            } />
                    </div>
            </fieldset>
            
    
            <button className="btn" onClick={ handleSaveButtonClick }>
              Add this Item back to my Wish List
            </button>
            
          </form>
        </>
      );
    };



    // <input value={stateVariable.property}></input>

    // defaultValue={existingVillage ? `${existingVillage.villageName}` : undefined}