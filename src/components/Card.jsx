

function Card({img}){
 
    return(
        <>
        <div className="skill-card">  
        <img className="skill-img" src={img} alt = "icon" height="80" width="80" />
        </div>
        </>
    );
}
export default Card ; 
