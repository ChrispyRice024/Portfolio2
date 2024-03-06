import react from "react";

export default function Home() {
  return (
    <div id='bio' className="bio">
      <img id='self' src='./assets/self_img.jpg'/>
      <h1 className="bio">Christopher Dirksen</h1>
      <p className="bio">
        My name is Christopher Dirksen and this is my online portfolio. I am
        proficient in HTML, CSS, JavaScript, Node.js, React, express,
        mongoDB/mongoose and mySQL. I am *mostly* self-taught, starting my education 
        at the Georgia Tech Coding Bootcamp. Since then i have made great strides in my abilities.
      </p>
    </div>
  );
}
