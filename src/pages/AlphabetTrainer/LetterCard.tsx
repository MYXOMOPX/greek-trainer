import type {CSSProperties, FC} from "react";
import {Badge, Button, Card} from "react-bootstrap";

const LetterBoxStyle: CSSProperties = {
    display: "flex",
    justifyContent: "center",
    padding: 15,
    fontSize: 30,
    border: "2px solid var(--bs-card-border-color)"
}

interface LetterCardProps {
    letter: string;
    guesses: Array<string>;
    correctAnswerIndex: number;
    onClickRight: () => void;
    onClickWrong: () => void;
    badge?: string;
    answered?: boolean;
    correct?: boolean;
    onNextClick: () => void;
}

export const LetterCard: FC<LetterCardProps> = (props) => {
    const {letter, guesses, correctAnswerIndex, onClickRight, onClickWrong, badge, answered, correct, onNextClick} = props;

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Как называется буква <Badge bg="secondary">{badge}</Badge></Card.Title>
            </Card.Body>
            <div style={LetterBoxStyle}>
                <span>{letter}</span>
            </div>
            <Card.Body>
                <div style={{display: "flex", flexDirection: "column", gap: 20}}>
                    {guesses.map((variant, index) => {
                        const correctButton = index === correctAnswerIndex;
                        const answerFn = answered ? undefined : correctButton ? onClickRight : onClickWrong;
                        console.log("X", index, correctAnswerIndex, correctButton)
                        return (
                            <Button
                                disabled={answered}
                                variant={!answered ? "primary" : correctButton ? "success" : "danger"}
                                onClick={answerFn}
                            >
                                {variant}
                            </Button>
                        )
                    })}
                </div>
            </Card.Body>
            {answered && (
                <Card.Body>
                    <Button style={{width: "100%"}} variant="dark" onClick={onNextClick}>Далее</Button>
                </Card.Body>
            )}
        </Card>
    )
}