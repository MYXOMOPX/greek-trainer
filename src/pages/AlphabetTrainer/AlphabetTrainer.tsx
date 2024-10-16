import {FC, useState} from "react";
import {LetterCard} from "./LetterCard";
import {alphabet} from "../../data/alphabet";
import {getRandomElements, getRandomTo} from "../../data/util";
import {Button} from "react-bootstrap";

const OPTIONS_COUNT = 4;

type GuessMode = "UPPER" | "LOWER" | "BOTH";

export const AlphabetTrainer: FC = () => {

    const [mode, setMode] = useState<GuessMode>("UPPER")
    const [tryCount, setTryCount] = useState(0);
    const [successTryCount, setSuccessTryCount] = useState(0);

    const [letters, setLetters] = useState(getRandomElements(alphabet, OPTIONS_COUNT));
    const [guessedIndex, setGuessedIndex] = useState(getRandomTo(OPTIONS_COUNT));

    const [answered, setAnswered] = useState(false);
    const [correct, setCorrect] = useState(false);
    const [letter, setLetter] = useState(letters[guessedIndex].upperCase);

    const answeredCorrect = () => {
        setAnswered(true);
        setCorrect(true);
        setTryCount(v => v+1);
        setSuccessTryCount(v => v+1);
    }
    const answerWrong = () => {
        setAnswered(true);
        setCorrect(false);
        setTryCount(v => v+1);
    }

    const onNextClick = () => {
        setAnswered(false);
        setCorrect(false);
        const elements = getRandomElements(alphabet, OPTIONS_COUNT);
        const index = getRandomTo(OPTIONS_COUNT);
        setLetters(elements);
        setGuessedIndex(index);
        const newLetter = (() => {
            if (mode === "UPPER") return elements[index].upperCase;
            if (mode === "LOWER") return getRandomElements(elements[index].lowerCase, 1)[0];
            return getRandomElements([...elements[index].lowerCase, elements[index].upperCase], 1)[0]
        })
        setLetter(newLetter);
    }

    return (
        <div>
            <div style={{display: "flex", justifyContent: "center", marginTop: 20}}>
                <LetterCard
                    letter={letter}
                    correctAnswerIndex={guessedIndex}
                    guesses={letters.map(it => it.ruName)}
                    onClickRight={answeredCorrect}
                    onClickWrong={answerWrong}
                    answered={answered}
                    correct={correct}
                    badge={tryCount !== 0 && `${successTryCount}/${tryCount}`}
                    onNextClick={onNextClick}
                />

            </div>

            <div style={{display: "flex", flexDirection: "column", alignItems: "center", marginTop: 20, gap: 10}}>
                Mode
                <Button onClick={() => setMode("UPPER")}>Только верхний регистр</Button>
                <Button onClick={() => setMode("LOWER")}>Только нижний регистр</Button>
                <Button onClick={() => setMode("BOTH")}>Оба ргеистра</Button>
            </div>
        </div>
    )
}