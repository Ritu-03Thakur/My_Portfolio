import Card from "./Card";
import C from "./img/cLanguage_logo.jpeg";
import Java from "./img/java_logo.jpeg";
import Html from "./img/HTML_logo.jpeg";
import css from "./img/CSS_logo.jpeg";
import JavaScript from "./img/JavaScript_logo.jpeg";
import React from "./img/ReactJs_logo.jpeg";
import bootstrap from "./img/Bootstrap_logo.jpeg";
import git from "./img/Git_logo.jpeg";
function Skill() {
  return (
    <>
      <div className="skill">
        <div className="head">

        <h1 className="heading">SKILL</h1>
        </div>
        <p>
          Here are the main programming langauges <br />
          that I have experience with :{" "}
        </p>
     <div className="cardList">
        <Card title="React" img={React} />
        <Card title="C" img={C} />

        <Card title="Java" img={Java} />
        <Card title="HTML" img={Html} />

        <Card title="CSS" img={css} />
        <Card title="JavaScript" img={JavaScript} />
       
        <Card title="Bootstrap" img={bootstrap} />
        <Card title=" Git" img={git} />
        </div>
      </div>
    </>
  );
}
export default Skill;
