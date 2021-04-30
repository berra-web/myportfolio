import { FaReact, DiJavascript, IoLogoNodejs, RiAngularjsFill, SiRedux, FaSass, ImHtmlFive, FaCss3, FaNpm, ImDatabase, SiTypescript, SiWebpack } from "react-icons/all";

export const skills =([
    {
      id: 1,
      icon: <FaReact className="React" />,
      header: "React",
      text: "React is a declarative, efficient, and flexible JavaScript library for building user interfaces",
      variant: 'settings'
    },
    {
      id: 2,
      icon: <SiRedux className="Redux" />,
      header: "Redux",
      text: "Redux is a predictable state container designed to help you write JavaScript apps that behave consistently across client, server, and native environments and are easy to test",
      variant : 'ssl'
    },
    {
      id: 3,
      icon: <DiJavascript className="Javascript" />,
      header: "Javascript",
      text: "JavaScript is the Programming Language for the Web. JavaScript can update and change both HTML and CSS",
      variant : 'speedup'
    },
    {
      id: 4,
      icon: <IoLogoNodejs className="LogoNodejs" />,
      header: "Nodejs",
      text: "Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.",
      variant : 'privacy'
    },
    {
      id: 5,
      icon: <SiWebpack className="Webpack" />,
      header: "Webpack",
      text: "webpack is a static module bundler for modern JavaScript applications. It internally builds a dependency graph which maps every module your project needs and generates one or more bundles.",
      variant: 'pack' 
    },
    {
      id: 6,
      icon: <SiTypescript className="Typescript" />,
      header: "Typescript",
      text: "TypeScript is an open-source language which builds on JavaScript, one of the world’s most used tools, by adding static type definitions.",
      variant: 'Type'
    },
    {
      id: 7,
      icon: <RiAngularjsFill className="AngularjsFill" />,
      header: "Angularjs",
      text: "AngularJS is a client side JavaScript MVC framework to develop a dynamic web application. AngularJS was originally started as a project in Google but now, it is open source framework.",
      variant: 'Ang'
    },
    {
      id: 8,
      icon: <ImHtmlFive className="HtmlFive" />,
      header: "Html",
      text: "HTML is an acronym which stands for Hyper Text Markup Language which is used for creating web pages and web applications.",
      variant: 'Five'
    },
    {
      id: 9,
      icon: <FaSass className="Sass" />,
      header: "Sass",
      text: "Sass is a preprocessor that lets you involve things like variables, nesting, mixins, inheritance and etc. for your CSS. It is a superset of css so any css code is also valid.",
      variant: 'sss' 
    },
    {
      id: 10,
      icon: <FaCss3 className="Css3" />,
      header: "Css3",
      text: "CSS is the language for describing the presentation of Web pages, including colors, layout, and fonts. It allows one to adapt the presentation to different types of devices, such as large screens, small screens, or printers.",
      variant: 'css'
    },
    {
      id: 11,
      icon: <FaNpm className="Npm" />,
      header: "Npm",
      text: "npm is the world's largest Software Registry (Library). The registry contains over 800,000 code packages. Open-source developers use npm to share software.Many organizations also use npm to manage private development.",
      variant: 'pm'
    },
    {
      id: 12,
      icon: <ImDatabase className="Database" />,
      header: "Database",
      text: "A database is an organized collection of data, so that it can be easily accessed and managed. You can organize data into tables, rows, columns, and index it to make it easier to find relevant information. ",
      variant: 'base'
    }

  ])