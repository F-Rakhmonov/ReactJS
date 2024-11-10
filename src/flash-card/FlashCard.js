import React, { useState } from "react";
import "./flashcard.css";
const question = [
  {
    id: 1,
    question: "HTML nima?",
    answer: "Markerlash tili",
    text: ` Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae ipsum optio quam corrupti aliquam sed culpa sequi?
              Perspiciatis, tenetur voluptatem.`,
  },
  {
    id: 2,
    question: "CSS nima?",
    answer: "Style Shet tili",
    text: ` Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae ipsum optio quam corrupti aliquam sed culpa sequi?
              Perspiciatis, tenetur voluptatem.`,
  },
  {
    id: 3,
    question: "JavaScript nima?",
    answer: "Dasturlash tili",
    text: ` Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae ipsum optio quam corrupti aliquam sed culpa sequi?
              Perspiciatis, tenetur voluptatem.`,
  },
  {
    id: 5,
    question: "h1 nima?",
    answer: "Heading teg",
    text: ` Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae ipsum optio quam corrupti aliquam sed culpa sequi?
              Perspiciatis, tenetur voluptatem.`,
  },
  {
    id: 6,
    question: "HTML nima?",
    answer: "Markerlash tili",
    text: ` Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae ipsum optio quam corrupti aliquam sed culpa sequi?
              Perspiciatis, tenetur voluptatem.`,
  },
  {
    id: 7,
    question: "HTML nima?",
    answer: "Markerlash tili",
    text: ` Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae ipsum optio quam corrupti aliquam sed culpa sequi?
              Perspiciatis, tenetur voluptatem.`,
  },
  {
    id: 8,
    question: "HTML nima?",
    answer: "Markerlash tili",
    text: ` Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae ipsum optio quam corrupti aliquam sed culpa sequi?
              Perspiciatis, tenetur voluptatem.`,
  },
];

function FlashCard() {
  return (
    <div>
      <FlashItem question={question} />
    </div>
  );
}

const FlashItem = () => {
  const [questionId, setQuestionId] = useState(null);

  function handleClick(e) {
    setQuestionId(e !== questionId ? e : null);
  }

  return (
    <div className="grid">
      <div className="flashcards">
        {question.map((elem) => {
          return (
            <div
              className={elem.id === questionId ? "selected" : ""}
              onClick={() => handleClick(elem.id)}
            >
              <p>{elem.id === questionId ? elem.answer : elem.question}</p>
            </div>
          );
        })}
      </div>
      <div className="matn"></div>
    </div>
  );
};

export default FlashCard;
