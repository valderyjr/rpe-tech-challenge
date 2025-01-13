import Image from "next/image";
import { GrDeploy } from "react-icons/gr";
import { RiBearSmileLine } from "react-icons/ri";
import { SiJest, SiReactquery, SiShadcnui } from "react-icons/si";
import {
  TbBrandNextjs,
  TbBrandTailwind,
  TbBrandTypescript,
} from "react-icons/tb";

const technologies = [
  {
    title: "NextJS",
    icon: <TbBrandNextjs size={24} />,
    description:
      "Pela sua facilidade de uso e performance, o NextJS é a escolha ideal para aplicações web modernas. Além disso, utiliza ReactJS como base, o que facilita a migração de aplicações existentes.",
  },
  {
    title: "Typescript",
    icon: <TbBrandTypescript size={24} />,
    description:
      "O Typescript é uma linguagem de programação que adiciona tipagem estática ao JavaScript, o que ajuda a evitar erros comuns e facilita a manutenção de código em projetos grandes e complexos.",
  },
  {
    title: "Tailwind CSS",
    icon: <TbBrandTailwind size={24} />,
    description:
      "O Tailwind CSS é um framework de CSS que utiliza classes utilitárias para estilizar elementos, o que facilita a criação de interfaces consistentes e responsivas.",
  },
  {
    title: "Shadcn UI",
    icon: <SiShadcnui size={24} />,
    description:
      "O Shadcn UI é uma biblioteca de componentes React que facilita a criação de interfaces bonitas e acessíveis, seguindo as melhores práticas de design e usabilidade. Além disso, já possui integração com o Tailwind CSS por padrão.",
  },
  {
    title: "Zustand",
    icon: <RiBearSmileLine size={24} />,
    description:
      "O Zustand é uma pequena biblioteca de gerenciamento de estado para React baseado nos príncipios do Flux, utilizando hooks para criar stores de forma simples e eficiente.",
  },
  {
    title: "React Query",
    icon: <SiReactquery size={24} />,
    description:
      "O React Query é uma biblioteca de gerenciamento de dados para React que facilita a busca, cache e atualização de dados de APIs de forma eficiente e desacoplada dos componentes.",
  },
  {
    title: "Jest com React Testing Library",
    icon: <SiJest size={24} />,
    description:
      "O Jest é um framework de testes para JavaScript que facilita a criação de testes unitários e de integração. Já o React Testing Library é uma biblioteca de testes para React que facilita a escrita de testes de componentes. Dessa forma, somos capazes de realizer testes unitários e de integração de forma eficiente.",
  },
  {
    title: "Estrutura de CI/CD",
    icon: <GrDeploy size={24} />,
    description:
      "Para garantir a qualidade do código e a eficiência do processo de desenvolvimento, é importante ter uma estrutura de CI/CD bem definida. Isso inclui a configuração de pipelines de build, testes e deploy automatizados, integração com ferramentas de análise de código e monitoramento de métricas de desempenho.",
  },
];

export function FrontEndArchitecture() {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-lg font-semibold">Tecnologias</h3>
      <ul className="space-y-4">
        {technologies.map((technology) => (
          <li key={technology.title} className="flex flex-col gap-1">
            <div className="flex items-center text-secondary gap-2">
              {technology.icon}
              <h4 className="text-lg font-semibold text-primary">
                {technology.title}
              </h4>
            </div>
            <p className="text-sm text-foreground">{technology.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

const steps = [
  {
    title: "Diagnóstico inicial e monitoramento",
    description:
      "Analisar logs e métricas de desempenho para identificar gargalos e pontos de falha na aplicação. Em aplicações react, a maior parte dos problemas de desempenho está relacionada ao renderização de componentes e ao gerenciamento de estado. Dessa forma, podemos utilizar ferramentas como React DevTools e Chrome DevTools para identificar componentes que estão sendo renderizados desnecessariamente ou que estão causando re-renderizações desnecessárias. Fora isso, é possível utilizar ferramentas como o New Relic e o Datadog para monitorar métricas de desempenho em tempo real.",
  },
  {
    title: "Implementar melhorias",
    description:
      "Após identificar os problemas de desempenho, é necessário implementar melhorias para otimizar a aplicação. Isso pode incluir a otimização de componentes, a implementação de lazy loading ou code splitting, a utilização de memoização de componentes e a implementação de cache de dados. Além disso, é importante garantir que a aplicação esteja utilizando as melhores práticas de otimização de desempenho, como a utilização de imagens otimizadas, a minimização de requisições de rede e a utilização de técnicas de pré-renderização.",
  },
  {
    title: "Monitoramento contínuo",
    description:
      "Após implementar as melhorias, é importante monitorar continuamente o desempenho da aplicação para garantir que as otimizações estão surtindo efeito e que novos problemas não estão surgindo. Para isso, é importante utilizar ferramentas de monitoramento de desempenho e de análise de logs para identificar problemas em tempo real e tomar ações corretivas rapidamente.",
  },
];

export function PerformanceAndScalability() {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-lg font-semibold">Etapas</h3>
      <ol className="space-y-4">
        {steps.map((step, index) => (
          <li key={step.title} className="flex flex-col gap-1">
            <h4 className="text-lg font-semibold text-primary">
              {index + 1}. {step.title}
            </h4>
            <p className="text-sm text-foreground">{step.description}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

const maintenanceSteps = [
  {
    title: "Análise do código legado",
    description:
      "Análise do código da aplicação em busca de identificar os principais problemas e pontos de melhoria",
  },
  {
    title: "Criação de testes automatizados",
    description:
      "Criação de testes automatizados de forma que seja possível garantir que as alterações realizadas não causem regressões a aplicação",
  },
  {
    title: "Refatoração do código",
    description:
      "Refatoração do código legado de forma a reduzir a dívida técnica e melhorar a qualidade do código",
  },
  {
    title: "Implementação de boas práticas",
    description:
      "Implementação de boas práticas de desenvolvimento de software, como documentação, padronização de código e revisão de código",
  },
];

export function MaintenanceAndEvolution() {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-lg font-semibold">Etapas de evolução</h3>
      <ol className="space-y-4">
        {maintenanceSteps.map((step, index) => (
          <li key={step.title} className="flex flex-col gap-1">
            <h4 className="text-lg font-semibold text-primary">
              {index + 1}. {step.title}
            </h4>
            <p className="text-sm text-foreground">{step.description}</p>
          </li>
        ))}
      </ol>
      <h3 className="text-lg font-semibold mt-2">
        Diagrama de evolução de código legado
      </h3>
      <Image
        src="/evolution-diagram.png"
        alt="Diagrama de evolução de código legado"
        width={530}
        height={1026}
        className="mx-auto"
      />
    </div>
  );
}

const codeStructures = [
  {
    title: "View Layer",
    description:
      "Camada responsável pela exibição dos dados e interação com o usuário. Nessa camada, são criados os componentes visuais da aplicação, que são responsáveis por renderizar a interface gráfica e interagir com o usuário.",
  },
  {
    title: "HTTP Client",
    description:
      "Cliente HTTP para realizar requisições para o back-end. Dessa forma, é possível encapsular a lógica de comunicação com o back-end em um único lugar, garantindo o processo de autenticação e autorização, tratamento de erros e comunicação eficiente.",
  },
  {
    title: "Services Layer",
    description:
      "Camada responsável pela lógica de negócio da aplicação. Nessa camada, são criados os serviços que encapsulam a lógica de negócio da aplicação, garantindo a separação de responsabilidades e a reutilização de código. Essa camada é a responsável por utilizar o HTTP Client para realizar requisições para o back-end e tratar os dados recebidos.",
  },
  {
    title: "Tratamento de erros",
    description:
      "Para garantir a confiabilidade da aplicação, é importante implementar um mecanismo de tratamento de erros eficiente. Dessa forma, é possível capturar e tratar erros de forma centralizada, garantindo que o usuário receba uma mensagem de erro amigável e que o erro seja registrado para análise posterior. Para a exibição das mensagens de erro, podemos utilizar códigos de erros no back-end e mensagens de erro customizadas no front-end.",
  },
];

export function IntegrationWithBackend() {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-lg font-semibold">Estrutura de Código</h3>
      <ul className="space-y-4">
        {codeStructures.map((technology) => (
          <li key={technology.title} className="flex flex-col">
            <h4 className="font-semibold text-primary">{technology.title}</h4>
            <p className="text-sm text-foreground">{technology.description}</p>
          </li>
        ))}
      </ul>
      <h3 className="text-lg font-semibold mt-2">Autenticação e Autorização</h3>
      <p className="text-sm">
        Para autenticação e autorização, podemos utilizar tokens JWT (JSON Web
        Token), com access tokens e refresh tokens. Dessa forma, é possível
        garantir a segurança da aplicação e a integridade dos dados transmitidos
        entre o front-end e o back-end.
      </p>
      <p className="text-sm">
        A utilização de layouts NextJS permite a criação de
        &quot;agrupamentos&quot; de páginas que deevm ser protegidas por
        autenticação. Dessa forma, é possível garantir que apenas usuários
        autenticados tenham acesso a determinadas rotas da aplicação.
      </p>
      <h3 className="text-lg font-semibold mt-2">Estrutura de layouts</h3>
      <Image
        src="/folder-structure.png"
        alt="Estrutura de layouts"
        width={638}
        height={348}
      />
    </div>
  );
}

const designSteps = [
  {
    title: "Definição de princípios básicos",
    description:
      "Definição de princípios básicos de design, como tipografia, cores, espaçamento e alinhamento, que serão utilizados em todos os projetos que utilizam o Design System. Com esses tokens definidos, é possível garantir a consistência visual e a facilidade de uso do Design System.",
  },
  {
    title: "Criação de componentes bases",
    description:
      "Criação de componentes bases, como botões, inputs, cards e modais, que serão utilizados em todos os projetos que utilizam o Design System. Esses componentes devem ser flexíveis e customizáveis, de forma a se adaptarem às necessidades de cada projeto.",
  },
  {
    title: "Documentação com Storybook",
    description:
      "Documentação dos componentes do Design System utilizando o Storybook, uma ferramenta que permite a visualização e interação com os componentes de forma isolada. Dessa forma, é possível garantir que os componentes sejam utilizados corretamente e que as variações possíveis sejam documentadas. Também é possível realizar testes visuais e de acessibilidade utilizando o Storybook.",
  },
  {
    title: "Deploy do Storybook",
    description:
      "Deploy do Storybook para um ambiente de produção, de forma que os desenvolvedores e designers possam acessar a documentação dos componentes de forma fácil e rápida. Além disso, é possível utilizar o Storybook como uma ferramenta de comunicação entre as equipes de design e desenvolvimento, garantindo que todos estejam alinhados em relação ao Design System.",
  },
  {
    title: "Publicação e versionamento",
    description:
      "Publicação do Design System como uma biblioteca de componentes que pode ser utilizada em diferentes projetos. Além disso, é importante manter um sistema de versionamento para garantir que as mudanças realizadas no Design System sejam controladas e documentadas.",
  },
];

const tailwindConfigExample = {
  content: ["./*.{html,js}"],
  theme: {
    fontFamily: {
      inter: "Inter, sans-serif",
      space: "Space Grotesk, sans-serif",
    },
    fontSize: {
      "title-h1": ["48px", { lineHeight: "64px" }],
      "title-h2": ["40px", { lineHeight: "52px" }],
      "title-h3": ["32px", { lineHeight: "42px" }],
      "title-h4": ["24px", { lineHeight: "32px" }],
      "title-h5": ["20px", { lineHeight: "28px" }],
      "title-h6": ["16px", { lineHeight: "20px" }],
      "body-lg": ["18px", { lineHeight: "28px" }],
      "body-md": ["16px", { lineHeight: "24px" }],
      "body-sm": ["14px", { lineHeight: "20px" }],
      "body-xs": ["12px", { lineHeight: "16px" }],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#000000",
      primary: {
        50: "#F3F3FC",
        100: "#DEDFF7",
        200: "#C9CCF3",
        300: "#ACB0EC",
        400: "#7279DF",
        500: "#4750D5",
        600: "#2C35BF",
        700: "#222995",
        800: "#191E6C",
        900: "#0F1242",
      },
      accent: {
        50: "#FBF4FB",
        100: "#F5E0F3",
        200: "#EFCDEC",
        300: "#E5B3E1",
        400: "#D47DCC",
        500: "#C757BD",
        600: "#B03BA6",
        700: "#892E82",
        800: "#64215E",
        900: "#3D143A",
      },
      gray: {
        50: "#F5F5FA",
        100: "#E4E5F1",
        200: "#CFD0E2",
        300: "#B3B5CC",
        400: "#9496B8",
        500: "#6C6F93",
        600: "#47496B",
        700: "#32344B",
        800: "#1D1E30",
        900: "#0A0B12",
      },
      success: {
        50: "#F3FCF7",
        100: "#DEF7EA",
        200: "#C9F3DD",
        300: "#ACECCA",
        400: "#72DFA5",
        500: "#2BBB6E",
        600: "#219156",
        700: "#18683D",
        800: "#0E3E25",
        900: "#082114",
      },
      warning: {
        50: "#FDF8F2",
        100: "#FAECDB",
        200: "#F7E0C5",
        300: "#F2CFA6",
        400: "#E9AD67",
        500: "#DF8620",
        600: "#B26B1A",
        700: "#865013",
        800: "#59360D",
        900: "#472B0A",
      },
      danger: {
        50: "#FCF3F3",
        100: "#F7DEDF",
        200: "#F3C9CA",
        300: "#ECACAE",
        400: "#DF7275",
        500: "#D5474C",
        600: "#BF2C31",
        700: "#952226",
        800: "#6C191C",
        900: "#420F11",
      },
    },
    extend: {},
  },
  plugins: [],
};

export function DesignAndUx() {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-lg font-semibold">
        Desenvolvimento de um Design System
      </h3>
      <ol className="space-y-4">
        {designSteps.map((step, index) => (
          <li key={step.title} className="flex flex-col gap-1">
            <h4 className="text-lg font-semibold text-primary">
              {index + 1}. {step.title}
            </h4>
            <p className="text-sm text-foreground">{step.description}</p>
          </li>
        ))}
      </ol>
      <h3 className="text-lg font-semibold mt-2">
        Exemplo de configuração Tailwind CSS
      </h3>
      <p className="text-sm text-foreground/80">
        É possível utilizar o TailwindCSS para a definição dos seus tokens de
        design, como cores, tipografia e espaçamento. Abaixo, um exemplo de
        configuração do TailwindCSS:
      </p>
      <pre className="bg-zinc-800 text-white p-4 rounded-lg text-sm max-h-52 overflow-y-scroll">
        {JSON.stringify(tailwindConfigExample, null, 2)}
      </pre>
    </div>
  );
}

const pipelineSteps = [
  {
    title: "Formatação e estilo de código",
    description:
      "Utilização de ferramentas como Prettier e ESLint para garantir a formatação e o estilo de código consistente em todo o projeto. Dessa forma, é possível garantir que o código seja legível e fácil de manter.",
  },
  {
    title: "Testes automatizados",
    description:
      "É importante uma etapa para executar os testes automatizados na pipeline de CI/CD. Dessa forma, é possível garantir que o código produzido seja testado de forma automatizada e que bugs sejam identificados antes de serem introduzidos em produção.",
  },
  {
    title: "Build",
    description:
      "Etapa de build do projeto, onde o código é compilado e empacotado para ser distribuído em produção. Nessa etapa, é possível realizar otimizações de desempenho, como minificação de arquivos e tree shaking.",
  },
  {
    title: "Deploy",
    description:
      "Etapa de deploy do projeto em um ambiente de produção. Nessa etapa, é possível automatizar o processo de deploy e garantir que as atualizações sejam distribuídas de forma eficiente e segura.",
  },
];

const extraCodeQualitySteps = [
  "Code reviews eficientes e obrigatórios para todos os PRs",
  "Criação de Pull Requests Preview. Dessa forma, é possível visualizar (e testar) as alterações antes de serem integradas ao código principal",
  "Ambientes de deploy separados para homologação e produção",
  "Pela complexidade e custo de manutenção, acredito ser necessário a execução dos testes end-to-end apenas na pipeline de produção",
  "Implementação de cobertura mínima de testes para garantir a qualidade do código",
];

export function CodeQualityAndTesting() {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-lg font-semibold">Pipeline CI/CD</h3>
      <ol className="space-y-4">
        {pipelineSteps.map((step, index) => (
          <li key={step.title} className="flex flex-col gap-1">
            <h4 className="text-lg font-semibold text-primary">
              {index + 1}. {step.title}
            </h4>
            <p className="text-sm text-foreground">{step.description}</p>
          </li>
        ))}
      </ol>
      <h3 className="text-lg font-semibold mt-2">Ambientes de deploy</h3>
      <ul className="list-disc pl-4">
        {extraCodeQualitySteps.map((step) => (
          <li key={step} className="text-sm text-foreground">
            {step}
          </li>
        ))}
      </ul>
    </div>
  );
}

const newTechnologiesSteps = [
  {
    title: "Compatibilidade",
    description:
      "A nova tecnologia é compatível com as tecnologias existentes no projeto?",
  },
  {
    title: "Curva de aprendizado",
    description:
      "A equipe possui o conhecimento necessário para utilizar a nova tecnologia?",
  },
  {
    title: "Produtividade",
    description:
      "A nova tecnologia aumenta a produtividade da equipe e reduz o tempo de desenvolvimento?",
  },
  {
    title: "Manutenibilidade",
    description:
      "A nova tecnologia facilita a manutenção do código e a resolução de bugs?",
  },
  {
    title: "Comunidade",
    description:
      "A nova tecnologia possui uma comunidade ativa e suporte de qualidade?",
  },
];

const pocSteps = [
  {
    title: "Definição do escopo",
    description:
      "Definir o escopo da prova de conceito, incluindo os objetivos a serem alcançados e os critérios de sucesso.",
  },
  {
    title: "Implementação",
    description:
      "Implementar a prova de conceito de acordo com o escopo definido, utilizando a nova tecnologia em um cenário real.",
  },
  {
    title: "Avaliação",
    description:
      "Avaliar os resultados da prova de conceito em relação aos objetivos e critérios de sucesso definidos.",
  },
  {
    title: "Decisão",
    description:
      "Com base na avaliação da prova de conceito, tomar a decisão de adotar ou não a nova tecnologia no projeto.",
  },
];

export function NewTechnologies() {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-lg font-semibold">Avaliação de Novas Tecnologias</h3>
      <ul className="space-y-4">
        {newTechnologiesSteps.map((step) => (
          <li key={step.title} className="flex flex-col">
            <h4 className="font-semibold text-primary">{step.title}</h4>
            <p className="text-sm text-foreground">{step.description}</p>
          </li>
        ))}
      </ul>
      <h3 className="text-lg font-semibold mt-2">
        Etapas da Prova de Conceito
      </h3>
      <ol className="space-y-4">
        {pocSteps.map((step, index) => (
          <li key={step.title} className="flex flex-col gap-1">
            <h4 className="text-lg font-semibold text-primary">
              {index + 1}. {step.title}
            </h4>
            <p className="text-sm text-foreground">{step.description}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

const collaborationSteps = [
  {
    title: "Prática de Code Reviews",
    description:
      "Code reviews são uma prática fundamental para garantir a qualidade do código produzido e promover a troca de conhecimento entre os membros da equipe. Dessa forma, é possível identificar possíveis problemas e melhorias no código antes que sejam integrados ao código principal. Sendo assim, é importante que todos os PRs sejam revisados por outros membros da equipe, garantindo que o código produzido seja de alta qualidade.",
  },
  {
    title: "Pair Programming",
    description:
      "Pair programming é uma prática em que dois desenvolvedores trabalham juntos em um mesmo código, compartilhando conhecimento e experiência. Essa prática é especialmente útil para desenvolvedores menos experientes, que podem aprender com desenvolvedores mais experientes, acelerando o seu aprendizado e desenvolvimento profissional.",
  },
  {
    title: "Reuniões semanais de alinhamento",
    description:
      "A criação de reuniões semanais exclusivas entre os desenvolvedores da equipe permite a troca de conhecimento e experiências, além de promover a integração entre os membros da equipe.",
  },
  {
    title: "Desenvolvimento de PDI's (Plano de Desenvolvimento Individual)",
    description:
      "O PDI é um documento que descreve os objetivos de desenvolvimento profissional de cada membro da equipe, identificando as competências a serem desenvolvidas e as ações necessárias para alcançar esses objetivos. Dessa forma, é possível garantir que todos os membros da equipe estejam alinhados em relação às suas metas e expectativas de desenvolvimento profissional.",
  },
];

export function CollaborationAndMentoring() {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-lg font-semibold">
        Práticas de integração na equipe
      </h3>
      <ul className="space-y-4">
        {collaborationSteps.map((step) => (
          <li key={step.title} className="flex flex-col">
            <h4 className="font-semibold text-primary">{step.title}</h4>
            <p className="text-sm text-foreground">{step.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
