import React, {useState} from "react";

const NewItemForm = ({addItem}) =>{
    const INITIAL_STATE = {
        type: "",
        description: "",
        id: "",
        name: "",
        recipe: "",
        serve: ""
    }

    const [formData, setFormData] = useState(INITIAL_STATE);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((formData) => ({
          ...formData,
          [name]: value,
          id: name === "name" ? value : formData.id //the user will not make an id manually, this checks to see if name of the item is being updated and if it is, the id is updated with the name as id.
        }));
      };

    const handleSubmit = (e) =>{
        e.preventDefault();
        addItem(
            formData.type,
            formData.description,
            formData.id,
            formData.name,
            formData.recipe,
            formData.serve
          );
          setFormData(INITIAL_STATE);
    }


    return (
        <form style={{color: 'black'}} onSubmit={handleSubmit}>
            <label htmlFor="type">Item Type:</label>
            <select name="type" 
            value={formData.type} 
            onChange={handleChange}>
                <option disabled>Item Type</option>
                <option value="snack">Snack</option>
                <option value="drink">Drink</option>
            </select>

            <label htmlFor="description">Description:</label>
            <input type="text" 
            name="description"
            placeholder="Description" 
            value={formData.description} 
            onChange={handleChange} />

            <label htmlFor="name">Name:</label>
            <input type="text" 
            name="name"
            placeholder="Item Name" 
            value={formData.name} 
            onChange={handleChange} />

            <label htmlFor="recipe">Recipe:</label>
            <input type="text" 
            name="recipe"
            placeholder="Recipe" 
            value={formData.recipe} 
            onChange={handleChange} />

            <label htmlFor="serve">Serve:</label>
            <input type="text" 
            name="serve"
            placeholder="How to serve" 
            value={formData.serve} 
            onChange={handleChange} />
            <button type="submit">Add an Item!</button>
        </form>
    )
}
export default NewItemForm;