import Card from "./Card";
import { skill } from "../data/data";

function Skill() {
  return (
    <>
      <div className="skill" id="skills">
        <div className="head">
        <h1 className="heading">SKILL</h1>
        </div>
        <p className="skill-desc">
          Here are the main programming langauges <br />
          that I have experience with :{" "}
        </p>
     <div className="cardList">
      {
        skill.map((s)=>{
          return   <Card key={s.id} img = {s.img}/>
        })
      }
       
        
        </div>
      </div>
    </>
  );
}
export default Skill;
