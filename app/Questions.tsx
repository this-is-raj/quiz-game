"use client";
import React, { FormEvent, useCallback, useState } from "react";
import { Question } from "./constants";

type Props = {
  questions: Question[];
};

const getColor = (quesiton: Question, value: string) => {
  let res;
  if (quesiton.type == "multiple") res = quesiton.correctAns.includes(value);
  else res = quesiton.correctAns == value;

  return res ? "text-custom-green" : "text-custom-red";
};

const Questions = ({ questions }: Props) => {
  const [response, setResponse] = useState<{
    [key: string]: string | string[];
  }>({});
  const [isCorrect, setIsCorrect] = useState<boolean[]>([]);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const formData = Array.from(
        new FormData(e.target as HTMLFormElement).entries()
      );
      const values: { [key: string]: string | string[] } = {};

      formData.forEach(([key, val]) => {
        if (!values[key]) {
          values[key] = val as string;
          return;
        }
        if (!Array.isArray(values[key])) values[key] = [values[key] as string];
        (values[key] as string[]).push(val as string);
      });

      const isCorrectAns = questions.map((q, i) => {
        const key = `quesiton-${i}`;
        let val = values[key];
        if (!val?.length) return false;

        if (q.type === "multiple") {
          if (!Array.isArray(val)) values[key] = [val as string];
          return (
            (values[key] as string[]).sort().join(",") ==
            (q.correctAns as string[]).sort().join(",")
          );
        }
        return val == q.correctAns;
      });

      setResponse(values);
      setIsCorrect(isCorrectAns);
      setIsSubmitted(true);
    },
    [questions]
  );

  return (
    <div className="container w-full max-w-[768px] mb-10">
      <form onSubmit={handleSubmit} method="post">
        {questions.map((question, i) => (
          <div key={question.question} className="mb-5">
            <p
              className={`font-bold border-black p-[5px_15px] rounded-md mb-5 ${
                isSubmitted
                  ? isCorrect[i]
                    ? "bg-custom-green"
                    : "bg-custom-red"
                  : "bg-gray-800"
              }`}
            >
              {i + 1}. {question.question}
            </p>
            <div className="flex flex-col pl-4">
              {question.options.map((opt) => (
                <label
                  key={opt}
                  className={isSubmitted ? getColor(question, opt) : ""}
                >
                  <input
                    name={`quesiton-${i}`}
                    type={question.type === "multiple" ? "checkbox" : "radio"}
                    value={opt}
                    className="mr-2"
                  />
                  {opt}
                </label>
              ))}
            </div>
          </div>
        ))}
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Questions;
