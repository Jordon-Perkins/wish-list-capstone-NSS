// export const EditListItemForm = () => {

//     return (
//         <>
//           <form>
//             <h2 className="decoration-form-title">
//               Add WishList Item
//             </h2>
//             <fieldset>
//               <div className="form-group">
//                 <input
//                   required
//                   id="name"
//                   type="text"
//                   className="form-control"
//                   placeholder="What is your Item named?"
//                   value={userChoices.name}
//                   onChange={handleInputChange}
//                 />
//               </div>
//             </fieldset>
//             <fieldset>
//               <div className="form-group">
//                 <input
//                   required
//                   id="description"
//                   type="text"
//                   className="form-control"
//                   placeholder="What is it?"
//                   value={userChoices.description}
//                   onChange={handleInputChange}
//                 />
//               </div>
//             </fieldset>
//             <fieldset>
//               <div className="form-group">
//                 <input
//                   required
//                   id="link"
//                   type="text"
//                   className="form-control"
//                   placeholder="Where can this be bought?"
//                   value={userChoices.link}
//                   onChange={handleInputChange}
//                 />
//               </div>
//             </fieldset>
//             <fieldset>
//               <div className="form-group">
//                 <input
//                   required
//                   id="picture"
//                   type="text"
//                   className="form-control"
//                   placeholder="Picture Please"
//                   value={userChoices.picture}
//                   onChange={handleInputChange}
//                 />
//               </div>
//             </fieldset>
//             <fieldset>
//                     <div className="form-group">
//                         <input type="number"
//                             className="form-control"
//                             value={userChoices.price}
//                             onChange={
//                                 (evt) => {
//                                     const copy = {...userChoices}
//                                     copy.rate = parseFloat(evt.target.value, 2) 
//                                     setUserChoices(copy)
//                                 }
//                             } />
//                     </div>
//             </fieldset>
//             <fieldset>
//               <div className="form-group">
//                 {wishListItems.map((wishListItem) => {
//                   return (
//                     <div key={wishListItem.id} className="radio">
//                       <label>
//                         <input
//                           id="purchased"
//                           type="radio"
//                           value={wishListItem.id}
//                           checked={userChoices.purchased === wishListItem.id}
//                           onChange={handleIntegerInputChange}
//                         />
//                         {wishListItem.purchased}
//                       </label>
//                     </div>
//                   );
//                 })}
//               </div>
//             </fieldset>
    
//             <button className="btn" onClick={handleSaveNewItem }>
//               Add Decoration
//             </button>
            
//           </form>
//         </>
//       );
// }