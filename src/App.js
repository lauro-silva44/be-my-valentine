import "./App.css";
import AnswerButton from "./components/answer-button";
import Lottie from "react-lottie";
import animationData from "./lottties/Animation - 1707833645979.json";
import bears from "./lottties/Animation - 1707833504642.json";
import { useState } from "react";
function App() {
  const [question, setQuestion] = useState("wanna be my valentine?");
  const [wallpaper, setWallpaper] = useState(animationData);
  const [height, setHeight] = useState(200);
  const [isClicked, setClicked] = useState(false);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: wallpaper,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const questionList = [
    "bu teni kabeça ta doeu?",
    "abo kre morri?",
    'bu atxa pp ma nsa fika ku "no"?',
    "dja bu kansa de respira?",
    "abo sa brinka ku vida",
    "abo kre dexano mi ku Mowa?",
  ];
  const handleClick = () => {
    setQuestion(questionList[Math.floor(Math.random() * questionList.length)]);
    console.log(question);
  };
  const handleYesButton = () => {
    setWallpaper(bears);
    setQuestion("Feliz dia dos namorados Xory");
    setHeight("auto");
    setClicked(true);
  };

  return (
    <div className>
      <header className="Claudia Rosa">
        <body>
          <Lottie options={defaultOptions} height={height} width={500} />
          <span>{question}</span>
          {isClicked ? (
            <></>
          ) : (
            <section>
              <AnswerButton onClick={handleYesButton} />
              <AnswerButton
                label="no"
                emoji="😒"
                positive={false}
                onClick={handleClick}
              />
            </section>
          )}
        </body>
      </header>
    </div>
  );
}

export default App;
