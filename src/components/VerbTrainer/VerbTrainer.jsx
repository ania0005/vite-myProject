import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { setVerbs, setCurrentVerb } from "../../features/verbTrainerSlice";
import { Button, Input, InputBase, InputLabel, TextField} from "@mui/material";
import styled from "styled-components";
import { INPUT } from "@blueprintjs/core/lib/esm/common/classes";
import { InputGroup } from "@blueprintjs/core";

const Styles = styled.div`
  .main {
    width: 100%;
    max-width: 400px;
    margin: 80px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #fff;
    padding: 30px;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  .title {
    margin-bottom: 30px;
    font-size: 32px;
    font-weight: bold;
    color: #3f51b5;
    
    text-align: center;
  }

  .input {
    width: 100%;
    font-size: 18px;
    color: #333;
    background: #f4f4f4;
    border: none;
    border-radius: 8px;
    padding: 12px;
    margin-bottom: 12px;
    transition: all 0.3s ease;
  }

  .input:focus {
    background: #fff;
    box-shadow: 0 0 8px rgba(63, 81, 181, 0.4);
    outline: none;
  }

  .btn {
    width: 100%;
    font-size: 18px;
    font-weight: bold;
    color: #fff;
    background: linear-gradient(135deg, #3f51b5, #1a237e);
    border: none;
    border-radius: 8px;
    padding: 12px;
    margin-bottom: 12px;  
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .btn:hover {
    background: linear-gradient(135deg, #303f9f, #0d47a1);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  .feedback {
    margin-top: 15px;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    color: #d32f2f;
  }
`;


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
    axios
      .get("./verbs.json") // Загружаем JSON из public
      .then((response) => {
        dispatch(setVerbs(response.data));
        dispatch(setCurrentVerb());
      })
      .catch((error) => console.error("Ошибка загрузки глаголов", error));
  }, [dispatch]);

  const checkAnswer = () => {
    if (!currentVerb) return;
    const isCorrect =
      inputValues.perfektForm.toLowerCase() ===
        currentVerb.perfektForm.toLowerCase() &&
      inputValues.prateritumForm.toLowerCase() ===
        currentVerb.prateritumForm.toLowerCase() &&
      inputValues.translate.toLowerCase() ===
        currentVerb.translate.toLowerCase();

    setFeedback(
      isCorrect
        ? "Верно!"
        : `Ошибка, правильный ответ: ${currentVerb.perfektForm}, ${currentVerb.prateritumForm}, ${currentVerb.translate}`
    );
  };

  return (
    <Styles>
      <div className="container">
        {currentVerb && (
          <div className="main">
            <div className="title">{currentVerb.infinitive}</div>
            
            <InputBase
              type="text"
              placeholder="Präteritum"
              value={inputValues.prateritumForm}
              onChange={(e) =>
                setInputValues({
                  ...inputValues,
                  prateritumForm: e.target.value,
                })
              }
              className="input"
            />
            <InputBase
              type="text"
              placeholder="Perfekt"
              value={inputValues.perfektForm}
              onChange={(e) =>
                setInputValues({ ...inputValues, perfektForm: e.target.value })
              }
              className="input"
            />
            <InputBase
              type="text"
              style={{ marginBottom: "30px" }}
              placeholder="Übersetzung / russ"
              value={inputValues.translate}
              onChange={(e) =>
                setInputValues({ ...inputValues, translate: e.target.value })
              }
              className="input"
            />
            <Button onClick={checkAnswer} className="btn">
              Проверить
            </Button>
            
            <Button
              onClick={() => {
                dispatch(setCurrentVerb());
                setFeedback("");
                setInputValues({
                  perfektForm: "",
                  prateritumForm: "",
                  translate: "",
                });
              }}
              className="btn"
            >
              Следующий
            </Button>
            <p className="mt-2 text-lg font-semibold text-center">{feedback}</p>
          </div>
        )}
      </div>
    </Styles>
  );
}
