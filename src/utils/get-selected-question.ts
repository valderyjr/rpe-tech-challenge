import { questions } from "@/data/questions";

export function getSelectedQuestion(questionParam: string | null) {
  return (
    questions.find((item) => item.id === questionParam)?.id ?? questions[0].id
  );
}
