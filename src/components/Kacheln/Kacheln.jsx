import { useState } from "react";

import styled from "styled-components";

const Styles = styled.div`
  .container {
  width: 450px;
  height: 450px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
}

.element {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border: 1px solid #a2cef5;

}

.odd {
  background-color: #0077cc;
}

.even {
  background-color: #f0f0f0;
}

.min-el {
  width: 30%;
  height: 30%;
  border: 1px solid #6c757d;
  background-color: #e0e0e0;
}
`;

const Kacheln = () => {
  const [currentStyle, setCurrentStyle] = useState(false);

  const handlerClick = () => {
    setCurrentStyle((prev) => !prev);
  };

  return (
    <Styles>
    <div className="container">
      {Array.from({ length: 9 }, (_, index) => {
        return (
          <div
            key={index}
            className={`element ${
              currentStyle
                ? index % 2 === 0
                  ? "odd"
                  : "even"
                : index % 2 === 0
                ? "even"
                : "odd"
            }`}
            onClick={handlerClick}
          >
            {(index % 2 !== 0 && currentStyle) ||
            (index % 2 === 0 && !currentStyle) ? (
              <div className="min-el"></div>
            ) : null}
          </div>
        );
      })}
    </div></Styles>
  );
};

export default Kacheln;
   