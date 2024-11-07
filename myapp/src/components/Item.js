import './Item.css';

function Item (props){
 const  Name=props.name
  
    return(<div>
        <p className="nirma">{Name}</p>
        {props.children}
    </div>
    );

}
export default Item;