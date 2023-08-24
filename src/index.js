import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

export default function App() {
  return (
    <div className="card" width="40%">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList skill="Java" />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="images/jason.jpg" alt="" />;
}

function Intro() {
  return (
    <div>
      <h1>Jason Nix</h1>
      <p>
        Software development professional with experience as a Senior
        Engineering and Senior Engineering Manager. Delivers complex solutions
        to market and provides knowledgeable support for enterprise software
        customers. Effectively provides end-to-end application life-cycle
        management with deep knowledge of database systems. Detail-oriented
        professional who enjoys problem-solving in collaborative environments,
        but can also work alone or in smaller groups to achieve the desired
        results.
      </p>
    </div>
  );
}

function SkillList(props) {
  return (
    <div className="skill-list">
      <Skill skill="React" emoji="💪" color="blue" />
      <Skill skill="Java" emoji="👍" color="green" />
      <Skill skill="C#" emoji="💪" color="yellow" />
      <Skill skill="Azure" emoji="💪" color="purple" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

// React version 18
const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
