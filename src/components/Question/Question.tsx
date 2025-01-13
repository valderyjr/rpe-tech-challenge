"use client";

import { useEffect, useRef, useState } from "react";
import { ButtonIcon } from "../ButtonIcon/ButtonIcon";
import { getQuestionId } from "@/utils/get-question-id";
import { LuChevronDown, LuChevronUp } from "react-icons/lu";

type QuestionProps = {
  question: string;
  description: string;
  id: string;
};

export function Question({ question, description, id }: QuestionProps) {
  const descriptionRef = useRef<HTMLParagraphElement>(null);

  const [isExpanded, setIsExpanded] = useState(false);
  const [height, setHeight] = useState(0);

  const tagId = getQuestionId(id);

  const handleToggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      if (isExpanded && descriptionRef.current) {
        setHeight(descriptionRef.current.scrollHeight);
      }
    });

    if (descriptionRef.current) {
      resizeObserver.observe(descriptionRef.current);
    }

    return () => resizeObserver.disconnect();
  }, [isExpanded]);

  return (
    <>
      <div className="flex items-center justify-between">
        <h2
          className="text-lg lg:text-2xl font-semibold text-primary"
          id={tagId}
        >
          {question}
        </h2>
        <ButtonIcon
          onClick={handleToggleExpand}
          variant="secondary"
          ariaLabel={isExpanded ? "Recolher descrição" : "Expandir descrição"}
        >
          {isExpanded ? <LuChevronUp size={24} /> : <LuChevronDown size={24} />}
        </ButtonIcon>
      </div>
      <div
        className="overflow-hidden transition-[height] duration-300"
        style={{ height: isExpanded ? `${height}px` : "0px" }}
      >
        <p ref={descriptionRef} className="text-sm text-foreground/75">
          {description}
        </p>
      </div>
    </>
  );
}
