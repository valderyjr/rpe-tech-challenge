"use client";

import { useRef } from "react";
import { Question } from "./Question";
import { cn } from "@/utils/cn";

type QuestionWithAnswerProps = {
  question: string;
  description: string;
  isSelected?: boolean;
  id: string;
};

export function QuestionWithAnswer({
  question,
  description,
  isSelected,
  id,
}: QuestionWithAnswerProps) {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div
      ref={ref}
      className={cn(
        "p-4 rounded-lg transition-all duration-300 shadow-sm",
        isSelected
          ? "border-l-4 border-primary shadow-primary bg-primary/5"
          : "shadow-secondary"
      )}
    >
      <Question question={question} description={description} id={id} />
      <div className="mt-4">
        {/* <h3 className="text-xl font-semibold mb-2 text-primary">Resposta:</h3> */}
      </div>
    </div>
  );
}
