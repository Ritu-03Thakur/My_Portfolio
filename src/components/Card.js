   import "./Card.css" ; 

function Card(props){
 
    return(
        <>
        <div className="rainbow">
        <div className="card " >
        <img className="card-top" src= {props.img} alt = "icon" height="100" width="100" />
          <h5 className="card-title">{props.title}</h5>
      </div>
        </div>
        </>
    );
}
export default Card ; 
