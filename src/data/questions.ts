import { getQuestionHref } from "@/utils/get-question-href";

export const questions = [
  {
    id: "arquitetura-front-end",
    question: "Arquitetura de Front-end",
    description:
      "Você precisa definir a arquitetura de uma nova aplicação web que será utilizada por milhões de usuários do varejo. Descreva a stack de tecnologias que você escolheria (frameworks, bibliotecas, ferramentas) e justifique suas escolhas. Como você garantiria que a arquitetura seja flexível e escalável para futuras expansões?",
  },
  {
    id: "escalabilidade-e-desempenho",
    question: "Escalabilidade e Desempenho",
    description:
      "Você é o principal responsável por uma aplicação que está apresentando problemas de desempenho e concorrência à medida que a base de usuários cresce. Liste as etapas que você seguiria para identificar e resolver os problemas. Que ferramentas e técnicas você utilizaria para monitorar e otimizar a escalabilidade da aplicação?",
  },
  {
    id: "manutencao-evolucao-projetos",
    question: "Manutenção e Evolução de Projetos",
    description:
      "Você foi designado para melhorar uma aplicação existente que possui um código legado com alta dívida técnica. Qual seria seu plano de ação para refatorar o código e reduzir a dívida técnica? Detalhe os passos que você seguiria para garantir a qualidade e continuidade da aplicação durante esse processo.",
  },
  {
    id: "integracao-api",
    question: "Integração com Back-end e APIs",
    description:
      "Dada a necessidade de integrar um front-end com várias APIs de diferentes serviços, descreva como você estruturaria o código para facilitar a manutenção e a escalabilidade. Inclua como você lidaria com autenticação e autorização, tratamento de erros, logging e comunicação eficiente entre o front-end e as APIs.",
  },
  {
    id: "desgin-ux",
    question: "Design e UX",
    description:
      "Sua equipe está encarregada de implementar um novo Design System que será usado através de diferentes projetos. Descreva como você abordaria a implementação desse Design System no código front-end, garantindo consistência e facilidade de uso. Quais práticas você adotaria para garantir que o Design System seja flexível o suficiente para suportar futuras evoluções e como você promoveria sua adoção entre os desenvolvedores?",
  },
  {
    id: "testes-qualidade-codigo",
    question: "Testes e Qualidade de Código",
    description:
      "Você está trabalhando em um projeto onde a qualidade do código é uma prioridade. Descreva como você estruturaria uma pipeline CI/CD para garantir que todo código-fonte produzido seja testado e que sejam introduzidos bugs. Que tipos de testes (unitários, integração, end-to-end) você configuraria, e como garantiria sua eficiência?",
  },
  {
    id: "novas-tecnologias",
    question: "Adoção de Novas Tecnologias",
    description:
      "Sua equipe está considerando adotar um novo framework que promete melhorar a produtividade. Crie um plano para avaliar a viabilidade dessa tecnologia no contexto de um projeto existente. Quais critérios você utilizaria para tomar a decisão e como implementaria uma prova de conceito?",
  },
  {
    id: "colaboracao-mentoria",
    question: "Colaboração e Mentoria",
    description:
      "Você lidera uma equipe de desenvolvedores front-end com diferentes níveis de experiência. Como você organizaria a equipe para garantir que todos os membros estejam alinhados e contribuam de forma efetiva para o projeto? Descreva as práticas que adotaria para promover a colaboração e a troca de conhecimento.",
  },
];

export const formattedQuestions = questions.map((question) => ({
  ...question,
  href: getQuestionHref(question.id),
}));
