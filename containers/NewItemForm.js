import * as React from "react";

const onKeyPress = (event) => {
  const keyCode = event.keyCode || event.which;
  const keyValue = String.fromCharCode(keyCode);
  if (/\+|-/.test(keyValue))
    event.preventDefault();
}

const handleSubmit = (e) =>{

  const currentItems = localStorage.getItem('currentItems')
  console.log(currentItems)
  
  
  if(!currentItems.includes(e.target.formItemName.value)){
    fetch('/api/add-item',{
      method:'POST',
      headers:{
          'Accept':'application/json',
          'Content-Type':'application/json'
      },
      body:JSON.stringify({
        name: e.target.formItemName.value, 
        expiresAfterSeconds: e.target.formExpiresAfterSeconds.value
      })}).then(res=>res.json()).then(result=>console.log(result),err=>console.log("Failed"))
  }else{
    alert("ITEM ALREADY EXIST IN THE FRIDGE")
  }
  
}

const NewItemForm = () => (
  <form onSubmit={(e)=>handleSubmit(e)}>
    <div className="form-row">
      <div className="form-group col-md-8">
        <label htmlFor="formItemName">Item name</label>
        <input
          type="text"
          className="form-control"
          id="formItemName"
          aria-describedby="itemNameHelp"
          placeholder="yummy food"
          required
        />
        <small id="itemNameHelp" className="form-text text-muted">
          We don't want more than one piece of the same food in our fridge.
        </small>
      </div>
    </div>
    <div className="form-row">
      <div className="form-group col-sm-3">
        <label htmlFor="formExpiresAfterSeconds">Expires after</label>
        <div className="input-group">
          <input
            type="number"
            min="0"
            className="form-control"
            id="formExpiresAfterSeconds"
            aria-label="Expires in"
            aria-describedby="basic-addon2"
            required
          />
          <div className="input-group-append">
            <span className="input-group-text" id="basic-addon2">
              seconds
            </span>
          </div>
        </div>
      </div>
    </div>
    <button type="submit" className="btn btn-primary">
      Submit
    </button>
  </form>
);

export default NewItemForm;
