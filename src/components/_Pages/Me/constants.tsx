import { ReactNode } from "react";
import { ICard } from "../../Cards/cards.types";

export interface IToolIcon {
  name: string;
  icon: string;
  url: string;
}
interface ITools {
  [category: string]: {
    icon: string;
    stack: IToolIcon[];
  };
}
export const TOOLS: ITools = {
  "Main tools": {
    icon: "tool",
    stack: [
      {
        name: "Typescript (ES6+)",
        icon: "typescript",
        url: "https://www.typescriptlang.org/",
      },
      { name: "Git", icon: "git", url: "https://git-scm.com/" },
      {
        name: "CSS3",
        icon: "css",
        url: "https://www.w3schools.com/css/",
      },
      { name: "NodeJS", icon: "nodejs", url: "https://nodejs.org/en/" },
      { name: "MongoDB", icon: "mongo", url: "https://www.mongodb.com/" },
      { name: "MySQL", icon: "mysql", url: "https://www.mysql.com/" },
      {
        name: "GraphQL (Apollo)",
        icon: "graphql",
        url: "https://graphql.org/",
      },
      {
        name: "C#",
        icon: "c-sharp",
        url: "https://docs.microsoft.com/en-us/dotnet/csharp/",
      },
    ],
  },

  Mobile: {
    icon: "smartphone",
    stack: [
      { name: "React Native", icon: "react", url: "https://reactnative.dev/" },
      {
        name: "Native Base",
        icon: "nativeBase",
        url: "https://nativebase.io/",
      },
      { name: "Expo", icon: "expo", url: "https://expo.dev/" },
      { name: "Lottie", icon: "lottie", url: "https://lottiefiles.com/" },
    ],
  },

  Web: {
    icon: "web",
    stack: [
      { name: "ReactJS", icon: "react", url: "https://reactjs.org/" },
      { name: "NextJS", icon: "nextjs", url: "https://nextjs.org/" },
      { name: "Angular", icon: "angular", url: "https://angular.io/" },
      { name: "Vue", icon: "vue", url: "https://vuejs.org/" },
      { name: "Redux", icon: "redux", url: "https://redux.js.org/" },
      { name: "ThreeJS", icon: "threejs", url: "https://threejs.org/" },
      { name: "D3", icon: "d3", url: "https://d3js.org/" },
      { name: "Aframe", icon: "aframe", url: "https://aframe.io/" },
      { name: "NestJS", icon: "nestjs", url: "https://nestjs.com/" },
    ],
  },

  Cloud: {
    icon: "cloud",
    stack: [
      { name: "AWS", icon: "aws", url: "https://aws.amazon.com/fr/" },
      { name: "GCP", icon: "gcp", url: "https://cloud.google.com/" },
    ],
  },

  XR: {
    icon: "cube",
    stack: [
      { name: "Unity", icon: "unity", url: "https://unity.com/" },
      {
        name: "Oculus",
        icon: "oculus",
        url: "https://store.facebook.com/quest/",
      },
      {
        name: "Vuforia",
        icon: "vuforia",
        url: "https://developer.vuforia.com/",
      },
    ],
  },

  "Unit testing": {
    icon: "adjustments",
    stack: [
      { name: "Jest", icon: "jest", url: "https://jestjs.io/" },
      { name: "Mocha", icon: "mocha", url: "https://mochajs.org/" },
      { name: "Chai", icon: "chai", url: "https://www.chaijs.com/" },
    ],
  },

  "Project Management": {
    icon: "book-open",
    stack: [
      {
        name: "JIRA",
        icon: "jira",
        url: "https://www.atlassian.com/software/jira",
      },
      {
        name: "Azure",
        icon: "azure",
        url: "https://azure.microsoft.com/en-us/services/devops/boards/",
      },
    ],
  },
};

export interface IJob {
  title: string | ReactNode;
  description: string | ReactNode;
  cardImg: string;
  headerImg?: string;
  youtubeId?: string;
  link?: string;
}

export const JOBS: IJob[] = [
  {
    title: "Groowcity",
    description: (
      <>
        Co-founder of a web application that let the companies measure their
        teams' skills via periodic tests call appreciations and daily questions
        that also help train the team members in multiple areas.
        <br />
        <br />
        With this, a detailed profile of each member is made so a custom career
        path can be set, and, in case the collaborator decides to leave, a
        tailor made test is made according to their skills so a new candidate
        can be tested accordingly.
      </>
    ),
    cardImg: "/png/groowcity.png",
    headerImg: "/png/groowcityHeader.png",
    link: "https://www.groowcity.com/",
  },
  {
    title: "Vesti",
    description: (
      <>
        Co-founder of a webpage and hybrid mobile application (Android and iOS)
        for discotheques and event companies for selling tickets through agents
        for events and organizing all sales, revenue, and personnel through
        their backoffice.
      </>
    ),
    cardImg: "/png/vesti.png",
    headerImg: "/png/vestiHeader.png",
    link: "https://vesti.cl/",
  },
  {
    title: "CleverCoins",
    description: (
      <>
        Lead the team for designing the process of gamification of everyday
        tasks done within the company. It consists in an internal economy in
        which the users (company's collaborators) earn coins by doing or
        attending workshops, writing blog posts, help another teammate and get
        kudos for it, etc. Everything is customable in the backoffce of the
        software. <br />
        <br /> It also shows a public rank of how much coins everyone's earned
        so there's friendly competition between all collaborators.
      </>
    ),
    cardImg: "/png/clevercoins.png",
    youtubeId: "5rqHtmnh6A0",
    link: "https://coins.cleveritgroup.com/home",
  },
  {
    title: "Fodture",
    description: (
      <>
        Co-founder of a digital solution that won a government entrepreneurship
        contest. <br />
        <br />
        It was made for restaurants to virtualize their menu and sell online,
        with a live-ordering feature that allowed the users in the restaurants
        to order their food from the web-app and it would send it to the kitchen
        without any further assistance, and, if the table had multiple users, it
        would automatically split the bill and let the users pay online or by
        cash or card.
      </>
    ),
    cardImg: "/png/fodture.png",
    headerImg: "/png/fodtureHeader.png",
    link: "https://fodture.com/",
  },
  {
    title: "Hydeout",
    description: (
      <>
        Participated creating a 3D platform for the users to create new avatar
        to use inside live 3D concerts
      </>
    ),
    cardImg: "/png/hydeout.png",
    headerImg: "/png/hydeoutHeader.png",
    link: "https://www.hydeoutworld.com/",
  },
];

export const HOBBIES: ICard[] = [
  {
    title: "Football",
    description:
      "I am a Real Madrid fan since I can remember. One of my most important accomplished life goals is to have visited the Santiago Bernabeu stadium. With a couple of cold ones we could talk football all day long.",
    imgSrc: "/webp/realmadrid.webp",
  },
  {
    title: "Movies",
    description:
      "Everything Tarantino and Di Caprio. Not much of a cinephile but I could spend hours talking how I don't really like super-hero movies, but a couple of my favorites are Watchmen and V for Vendetta.",
    imgSrc: "/webp/movie.webp",
  },
  {
    title: "Music",
    description: (
      <>
        <b>TOOL</b>, Slipknot and Bad Bunny are my favorite artists. <br /> I
        can make a good-enough vibrato on the violin and play La la land's City
        of stars on the piano, but I'm playing the drums or the guitar if we
        jam.
      </>
    ),
    imgSrc: "/webp/music.webp",
  },
  {
    title: "Calisthenics",
    description: (
      <>
        I'm definitely no{" "}
        <a href="https://chrisheria.com/" target="_blank" className="underline">
          Chris Heria
        </a>{" "}
        but, if I'm not playing football, I love getting my sweat on without
        much equipment. What kind of excercises do you like? My favorite is the
        handstand 🤸🏻‍♂️
      </>
    ),
    imgSrc: "/webp/handstand (1).webp",
  },
  {
    title: "Games",
    description:
      "I wouldn't call myself a gamer, but I do need my dose of DotA from time to time and I'll buy you a beer if you can beat me in Super Smash Ultimate.",
    imgSrc: "/webp/dota.webp",
  },
];
