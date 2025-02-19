import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { setVerbs, setCurrentVerb } from "../../features/verbTrainerSlice";

export default function VerbTrainer() {
  const dispatch = useDispatch();
  const verbs = useSelector((state) => state.verbTrainer.verbs);
  const currentVerb = useSelector((state) => state.verbTrainer.currentVerb);

  const [inputValues, setInputValues] = useState({
    perfektForm: "",
    prateritumForm: "",
    translate: "",
  });
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    axios.get("/vite-myProject/public/verbs.json") // Загружаем JSON из public
      .then((response) => {
        dispatch(setVerbs(response.data));
        dispatch(setCurrentVerb());
      })
      .catch((error) => console.error("Ошибка загрузки глаголов", error));
  }, [dispatch]);
  
  

  const checkAnswer = () => {
    if (!currentVerb) return;
    const isCorrect =
      inputValues.perfektForm.toLowerCase() === currentVerb.perfektForm.toLowerCase() &&
      inputValues.prateritumForm.toLowerCase() === currentVerb.prateritumForm.toLowerCase() &&
      inputValues.translate.toLowerCase() === currentVerb.translate.toLowerCase();

    setFeedback(isCorrect ? "Верно!" : `Ошибка, правильный ответ: ${currentVerb.perfektForm}, ${currentVerb.prateritumForm}, ${currentVerb.translate}`);
  };

  return (
    <div className="flex flex-col items-center space-y-4 p-4">
      {currentVerb && (
        <div className="w-full max-w-md p-4 border rounded-lg shadow-lg bg-white">
          <div className="text-xl font-bold text-center mb-4">{currentVerb.infinitive}</div>
          
          <input
            type="text"
            placeholder="Präteritum"
            value={inputValues.prateritumForm}
            onChange={(e) => setInputValues({ ...inputValues, prateritumForm: e.target.value })}
            className="w-full p-2 border rounded mb-2"
          />
          <input
            type="text"
            placeholder="Perfekt"
            value={inputValues.perfektForm}
            onChange={(e) => setInputValues({ ...inputValues, perfektForm: e.target.value })}
            className="w-full p-2 border rounded mb-2"
          />
          <input
            type="text"
            placeholder="Übersetzung / russ"
            value={inputValues.translate}
            onChange={(e) => setInputValues({ ...inputValues, translate: e.target.value })}
            className="w-full p-2 border rounded mb-2"
          />
          <button onClick={checkAnswer} className="w-full bg-blue-500 text-white p-2 rounded mt-2">Проверить</button>
          <p className="mt-2 text-lg font-semibold text-center">{feedback}</p>
          <button onClick={() => dispatch(setCurrentVerb())} className="w-full bg-gray-500 text-white p-2 rounded mt-4">Следующий</button>
        </div>
      )}
    </div>
  );
}
