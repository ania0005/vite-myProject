import { Routes, Route, NavLink } from "react-router-dom";
import { Button } from "@blueprintjs/core";
import GameView from "./components/Game/GameView";
import TerminMainView from "./components/Termin/TerminMainView";
import Weather from "./components/Weather/Weather";
import Kacheln from "./components/Kacheln/Kacheln";
import Todolist from "./components/Todolist/Todolist";
import GameSnake from "./components/GameSnake/GameSnake";
import VerbTrainer from "./components/VerbTrainer/VerbTrainer";
// import MyStore from "./components/MyStore/MyStore";

const projectRoutes = [
  { name: "Weather", path: "/weather", element: <Weather /> },
  { name: "Termin", path: "/termin", element: <TerminMainView /> },
  { name: "GameView", path: "/gameview", element: <GameView /> },
  { name: "Kacheln", path: "/kacheln", element: <Kacheln /> },
  { name: "TodoList", path: "/todolist", element: <Todolist /> },
  { name: "GameSnake", path: "/gamesnake", element: <GameSnake /> },
  { name: "VerbTrainer", path: "/verbtrainer", element: <VerbTrainer /> },
  // { name: "MyStore", path: "/mystore", element: <MyStore /> },
];

function App() {
  return (
    <div className="projectWrapper">
      <div className="projectBtns">
        {projectRoutes.map(({ name, path }) => (
          <NavLink key={name} to={path} style={{ margin: "0 5px", textDecoration: "none" }}>
            {({ isActive }) => (
              <Button
                text={name}
                intent={isActive ? "primary" : "none"}
                className="projectBtn"
              />
            )}
          </NavLink>
        ))}
      </div>

      <div className="projectWrapperContainer">
        <Routes>
          {projectRoutes.map(({ name, path, element }) => (
            <Route key={name} path={path} element={element} />
          ))}
        </Routes>
      </div>
    </div>
  );
}

export default App;


