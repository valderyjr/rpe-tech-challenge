"use client";

import { QuestionWithAnswer } from "@/components/Question/QuestionWithAnswer";
import { questionsWithAnswers } from "@/data/questions";
import { getQuestionHref } from "@/utils/get-question-href";
import { getQuestionId } from "@/utils/get-question-id";
import { getSelectedQuestion } from "@/utils/get-selected-question";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export function HomePageUI() {
  const router = useRouter();

  const searchParams = useSearchParams();
  const questionParam = searchParams.get("q");

  const selectedQuestionId = getSelectedQuestion(questionParam);

  //   useEffect to scroll to the selected question when user access the page
  useEffect(() => {
    // If there is no questionParam, return
    if (!questionParam) {
      return;
    }
    const tagId = getQuestionId(selectedQuestionId);
    const questionHref = getQuestionHref(selectedQuestionId);

    const questionTitle = document.getElementById(tagId);

    if (questionTitle) {
      window.scrollTo({
        top: questionTitle.offsetTop - 16,
        behavior: "smooth",
      });

      router.replace(questionHref, { scroll: false });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ul className="space-y-8">
      {questionsWithAnswers.map((question) => (
        <li key={`question-${question.id}`}>
          <QuestionWithAnswer
            description={question.description}
            isSelected={selectedQuestionId === question.id}
            question={question.question}
            id={question.id}
          >
            {question.answer}
          </QuestionWithAnswer>
        </li>
      ))}
    </ul>
  );
}
