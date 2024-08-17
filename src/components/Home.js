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
      <p>
        I have spent the last few months dedicating every day to becomming a better programmer/coder.
        i have been spending most of that time working on the Dungeions&Dragons Companion App. While
        it is still a work in progress, i think it is an accurate depiction of not only my skills as a 
        programmer, but also what i have learned in the past few months.
      </p>
    </div>
  );
}
