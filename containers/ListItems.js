import * as React from "react";
import differenceInSeconds from "date-fns/differenceInSeconds";

async function fetchItems(setItems) {
  const response = await fetch(`/api/get-items`);
  const jsonResponse = await response.json(); // parses JSON response into native JavaScript objects
  const items = jsonResponse.items;
  const currentItems = items.map((item)=>{
    return item.name
  })
  localStorage.setItem('currentItems', currentItems);
  setItems(items);
 
}
const CountDownTimer = (props) =>{

  const now = new Date();
  const [counter, setCounter] = React.useState(Math.max(differenceInSeconds(new Date(props.expiredate), now),0));

  React.useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);

  if(counter>=5){
    return (
      <div className="col-4 text-right">
                  expires in{" "}
        <span className="badge badge-secondary">
          {counter}{" "}s
        </span>
      </div>
    )
  }else if(counter==0){
    return (
      <div className="col-4 text-right">
        <span className="badge badge-secondary">
          expired
        </span>
      </div>
    )
  }
  else{
    return (
      <div className="col-4 text-right">
                  expires in{" "}
        <span className="badge badge-secondary pulse">
          {counter}{" "}s
        </span>
      </div>
    )
  }
  
}

const ListItems = () => {
  const [items, setItems] = React.useState([]);
  const now = new Date();
  
  React.useEffect(() => {
    
    fetchItems(setItems);
  }, []);

  return (
    <div
      style={{
        maxWidth: "600px",
      }}
    >
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item" key={item.id}>
            <div className="container-sm">
              <div className="row">
                <div className="col-2">
                  <span title={`ID: ${item.id}`}>
                    #{item.id.slice(0, 3)}
                    {"\u2026"}
                  </span>
                </div>
                <div className="col-6">{item.name}</div>
                
                  <CountDownTimer expiredate={item.expiresIn}></CountDownTimer>
                
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListItems;
