import { Button } from "@blueprintjs/core";
import { useState } from "react";
import GameView from "./components/Game/GameView";
import TerminMainView from "./components/Termin/TerminMainView";
import Weather from "./components/Weather/Weather";
import Kacheln from "./components/Kacheln/Kacheln";
import Todolist from "./components/Todolist/Todolist";
import GameSnake from "./components/GameSnake/GameSnake";
import VerbTrainer from "./components/VerbTrainer/VerbTrainer";
// import MyStore from "./components/MyStore/MyStore";



const projects = [
  { name: "Weather", component: <Weather /> },
  { name: "Termin", component: <TerminMainView /> },
  { name: "GameView", component: <GameView /> },
  { name: "Kacheln", component: <Kacheln /> },
  { name: "TodoList", component: <Todolist /> },
  { name: "GameSnake", component: <GameSnake /> },
  { name: "VerbTrainer", component: <VerbTrainer /> },
 // { name: "MyStore", component: <MyStore /> },
];

function App() {
  const [selectedProject, setSelectedProject] = useState({});

  return (
    <div className="projectWrapper">
      <div className="projectBtns">
        {projects.map((project) => {
          return (
            <Button
              key={project.name}
              className="projectBtn"
              text={project.name}
              onClick={() => {
                setSelectedProject(project);
              }}
              intent={selectedProject.name === project.name ? "primary" : "none"}
            />
          );
        })}
      </div>

      <div className="projectWrapperContainer">{selectedProject.component}</div>
    </div>
  );
}

export default App;

