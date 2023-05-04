import react from "react";

export default function Home() {
  return (
    <div id='bio' className="bio">
      <img id='self' src='./assets/self_img.jpg'/>
      <h1 className="bio">Christopher Dirksen</h1>
      <p className="bio">
        My name is Christopher Dirksen and this is my online portfolio. I am
        proficient in HTML, CSS, JavaScript, Node.js, React, express,
        mongoDB/mongoose and mySQL. I recently completed a three month bootcamp
        at Georgia Tech.
      </p>
    </div>
  );
}
