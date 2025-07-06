export const myProjects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "Facilitates purchases from international websites like Amazon and eBay, allowing customers to shop from these sites and have products delivered domestically.",
    subDescription: [
      "Built a scalable application with ASP.NET Core MVC, integrating global platforms like Amazon for domestic delivery.",
      "Implemented secure authentication and database management using ASP.NET Core Identity and Entity Framework Core.",
      "Designed a responsive frontend with Tailwind CSS, enhancing user experience.",
      "Added payment systems, localization, and product filtering for functionality improvements.",
    ],
    href: "",
    logo: "",
    image: import.meta.env.BASE_URL + "assets/projects/accessories.jpg",
    tags: [
      {
        id: 1,
        name: "C#",
        path: import.meta.env.BASE_URL + "assets/logos/csharp.svg",
      },
      {
        id: 2,
        name: ".Net",
        path: import.meta.env.BASE_URL + "assets/logos/dotnet.svg",
      },
      {
        id: 3,
        name: "Ef Core",
        path: import.meta.env.BASE_URL + "assets/logos/efcore.png",
      },  
      {
        id: 4,
        name: "TailwindCSS",
        path: import.meta.env.BASE_URL + "assets/logos/tailwindcss.svg",
      },
    ],
  },
  {
    id: 2,
    title: "Authentication & Authorization System",
    description:
      "A secure authentication and authorization system using Auth0 for seamless user management.",
    subDescription: [
      "Integrated Auth0 for authentication, supporting OAuth, JWT, and multi-factor authentication.",
      "Implemented role-based access control (RBAC) for fine-grained user permissions.",
      "Developed a React-based frontend with Tailwind CSS for a sleek user experience.",
      "Connected to a secure SQLite database for user data storage.",
    ],
    href: "",
    logo: "",
    image: import.meta.env.BASE_URL + "assets/projects/auth-system.jpg",
    tags: [
      {
        id: 1,
        name: "Auth0",
        path: import.meta.env.BASE_URL + "assets/logos/auth0.svg",
      },
      {
        id: 2,
        name: "React",
        path: import.meta.env.BASE_URL + "assets/logos/react.svg",
      },
      {
        id: 3,
        name: "SQLite",
        path: import.meta.env.BASE_URL + "assets/logos/sqlite.svg",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: import.meta.env.BASE_URL + "assets/logos/tailwindcss.svg",
      },
    ],
  },
  {
    id: 3,
    title: "Blazor Web App",
    description:
      "A modern, interactive web application built with Blazor WebAssembly and .NET Core.",
    subDescription: [
      "Developed a fully interactive Single Page Application (SPA) using Blazor WebAssembly.",
      "Implemented API interactions using .NET Core for a robust backend.",
      "Designed responsive UI components with Tailwind CSS for an enhanced UX.",
      "Integrated SQLite for efficient client-side database storage.",
    ],
    href: "",
    logo: "",
    image: import.meta.env.BASE_URL + "assets/projects/blazor-app.jpg",
    tags: [
      {
        id: 1,
        name: "Blazor",
        path: import.meta.env.BASE_URL + "assets/logos/blazor.svg",
      },
      {
        id: 2,
        name: ".NET Core",
        path: import.meta.env.BASE_URL + "assets/logos/dotnetcore.svg",
      },
      {
        id: 3,
        name: "SQLite",
        path: import.meta.env.BASE_URL + "assets/logos/sqlite.svg",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: import.meta.env.BASE_URL + "assets/logos/tailwindcss.svg",
      },
    ],
  },
  {
    id: 4,
    title: "C++ Game Engine",
    description:
      "A lightweight C++ game engine designed for 2D and 3D game development.",
    subDescription: [
      "Built a powerful rendering engine using OpenGL and C++.",
      "Developed a physics engine with collision detection and particle effects.",
      "Implemented a scripting system for easy game customization.",
      "Optimized performance with multi-threading and efficient memory management.",
    ],
    href: "",
    logo: "",
    image: import.meta.env.BASE_URL + "assets/projects/game-engine.jpg",
    tags: [
      {
        id: 1,
        name: "C++",
        path: import.meta.env.BASE_URL + "assets/logos/cplusplus.svg",
      },
      {
        id: 2,
        name: "C#",
        path: import.meta.env.BASE_URL + "assets/logos/csharp.svg",
      },
      {
        id: 3,
        name: "Git",
        path: import.meta.env.BASE_URL + "assets/logos/git.svg",
      },
      {
        id: 4,
        name: "Microsoft",
        path: import.meta.env.BASE_URL + "assets/logos/microsoft.svg",
      },
    ],
  },
  {
    id: 5,
    title: "WordPress Custom Theme",
    description:
      "A fully customizable WordPress theme optimized for performance and SEO.",
    subDescription: [
      "Developed a responsive WordPress theme using HTML5, CSS3, and JavaScript.",
      "Integrated Tailwind CSS for modern styling and UI enhancements.",
      "Optimized SEO and page speed using Vite.js for fast builds.",
      "Implemented custom widgets and plugin compatibility for extended functionality.",
    ],
    href: "",
    logo: "",
    image: import.meta.env.BASE_URL + "assets/projects/wordpress-theme.jpg",
    tags: [
      {
        id: 1,
        name: "WordPress",
        path: import.meta.env.BASE_URL + "assets/logos/wordpress.svg",
      },
      {
        id: 2,
        name: "HTML5",
        path: import.meta.env.BASE_URL + "assets/logos/html5.svg",
      },
      {
        id: 3,
        name: "CSS3",
        path: import.meta.env.BASE_URL + "assets/logos/css3.svg",
      },
      {
        id: 4,
        name: "Vite.js",
        path: import.meta.env.BASE_URL + "assets/logos/vitejs.svg",
      },
    ],
  },
  {
    id: 6,
    title: "Online Learning Platform",
    description:
      "A web application that allows users to enroll in courses, watch video lectures, and take quizzes.",
    subDescription: [
      "Built using Blazor WebAssembly for a seamless SPA experience.",
      "Implemented video streaming with Azure Media Services.",
      "Added a quiz system with dynamic question generation and real-time grading.",
      "Integrated Stripe API for secure payment processing.",
    ],
    href: "",
    logo: "",
    image: import.meta.env.BASE_URL + "assets/projects/elearning.jpg",
    tags: [
      {
        id: 1,
        name: "Blazor",
        path: import.meta.env.BASE_URL + "assets/logos/blazor.svg",
      },
      {
        id: 2,
        name: "Azure",
        path: import.meta.env.BASE_URL + "assets/logos/azure.svg",
      },
      {
        id: 3,
        name: "Stripe",
        path: import.meta.env.BASE_URL + "assets/logos/stripe.svg",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: import.meta.env.BASE_URL + "assets/logos/tailwindcss.svg",
      },
    ],
  },
];

export const mySocials = [
  {
    name: "WhatsApp",
    href: "https://wa.me/+358442384535",
    icon: import.meta.env.BASE_URL + "assets/socials/whatsApp.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/amy-platt-2213a0358/",
    icon: import.meta.env.BASE_URL + "assets/socials/linkedIn.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/itsamyp/",
    icon: import.meta.env.BASE_URL + "assets/socials/instagram.svg",
  },
];

export const experiences = [
  {
    title: "Software Development Student",
    job: "Helsinki Business College",
    date: "2023–Present",
    contents: [
      "Pursuing a degree in programming with a focus on web development, JavaScript, and back-end technologies.",
      "Developing real-world projects and strengthening foundational skills in software engineering and modern tech stacks.",
      "Actively planning to pursue a master’s degree in engineering, specializing in programming, automation, or applied AI.",
    ],
  },
  {
    title: "Front-End Developer",
    job: "Freelance / Personal Projects",
    date: "2024–Present",
    contents: [
      "Designed and developed interactive web apps with React, Tailwind, Vite, and modern UI libraries — including a full portfolio and a customizable pancake builder experience.",
      "Built responsive, multi-page layouts with dynamic themes (dark/light mode) and smooth UX using CSS animations and JavaScript toggles.",
      "Integrated form validation, modals, and mobile-friendly navigation for a professional and polished user experience.",
      "Continuously iterating on design, layout, and functionality to reflect evolving skills and personal aesthetic.",
    ],
  },
  {
    title: "Self-Taught Developer",
    job: "Self-Employed",
    date: "2022–Present",
    contents: [
      "Created a personal portfolio using Three.js, React, Vite, and WebAPI to showcase technical expertise.",
      "Continuously enhancing technical skills and expanding expertise in modern web development and back-end technologies.",
      "Taught myself HTML, CSS, JavaScript, and React through applied practice, personal research, and project-based learning.",
      "Balanced creative freedom with technical discipline, focusing on both performance and visual clarity.",
      "Built a strong foundation in Git, component design, responsive layouts, and scalable code structure — with an eye toward future work in AI and automation."
    ],
  },
];
export const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://robohash.org/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://robohash.org/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://robohash.org/john",
  },
  {
    name: "Alice",
    username: "@alice",
    body: "This is hands down the best thing I've experienced. Highly recommend!",
    img: "https://robohash.org/alice",
  },
  {
    name: "Bob",
    username: "@bob",
    body: "Incredible work! The attention to detail is phenomenal.",
    img: "https://robohash.org/bob",
  },
  {
    name: "Charlie",
    username: "@charlie",
    body: "This exceeded all my expectations. Absolutely stunning!",
    img: "https://robohash.org/charlie",
  },
  {
    name: "Dave",
    username: "@dave",
    body: "Simply breathtaking. The best decision I've made in a while.",
    img: "https://robohash.org/dave",
  },
  {
    name: "Eve",
    username: "@eve",
    body: "So glad I found this. It has changed the game for me.",
    img: "https://robohash.org/eve",
  },
];