const fs = require('fs')

const makeFile = ({name, title, subTitle, excerpt, mod, type}, index) => {
    const data = fs.readFileSync(`${__dirname}/post-template.md`, 'utf8');
    const contents = data.replace('xyzjk123', mod).replace('x title', title).replace('x subTitle', subTitle).replace('x excerpt', excerpt).replace('x type', type).replace('x order', index)

    const CURR_DIR = process.cwd()

    const writePath = `${CURR_DIR}/api/${name}.md`
    fs.writeFileSync(writePath, contents, 'utf8')
}


const test = [{
    name: 'how-the-internet-works',
    title: 'How The Internet Works',
    subTitle: 'Understanding the Fundamentals of Internet Functionality',
    excerpt: 'Gain a foundational understanding of how the internet operates and the key components involved.',
    mod: 'mod0',
    type: 'lesson'
  }]

const lessons = [
    // Module 0 - PRE-WORK
    {
      name: 'how-the-internet-works',
      title: 'How The Internet Works',
      subTitle: 'Understanding the Fundamentals of Internet Functionality',
      excerpt: 'Gain a foundational understanding of how the internet operates and the key components involved.',
      mod: 'mod0',
      type: 'lesson'
    },
    {
      name: 'basics-of-algebra-logic-and-pseudocode',
      title: 'Basics of Algebra, Logic and Psuedocode',
      subTitle: 'Core Concepts in Algebra, Logic, and Psuedocode',
      excerpt: 'Learn the essential concepts of algebra, logical reasoning, and how to write pseudocode.',
      mod: 'mod0',
      type: 'lesson'
    },
    {
      name: 'pair-programming-and-productive-failure',
      title: 'Pair Programming and Productive Failure',
      subTitle: 'Collaborative Coding and Learning from Mistakes',
      excerpt: 'Discover the benefits of pair programming and how to leverage failures for productive learning.',
      mod: 'mod0',
      type: 'lesson'
    },
    {
      name: 'html-css-js-how-they-work-together',
      title: 'HTML, CSS & JS: How They Work Together',
      subTitle: 'Integration of HTML, CSS, and JavaScript',
      excerpt: 'Understand the synergy between HTML, CSS, and JavaScript in web development.',
      mod: 'mod0',
      type: 'lesson'
    },
    {
      name: 'frontend-vs-backend',
      title: 'Frontend vs Backend',
      subTitle: 'Differentiating Frontend and Backend Development',
      excerpt: 'Explore the distinctions between frontend and backend development roles and technologies.',
      mod: 'mod0',
      type: 'lesson'
    },
    {
      name: 'software-engineer-levels-adjacent-careers',
      title: 'Software Engineer Levels & Adjacent Careers where Coding Knowledge is Helpful',
      subTitle: 'Career Paths and Progression in Software Engineering',
      excerpt: 'Learn about the different levels of software engineering and other careers that benefit from coding skills.',
      mod: 'mod0',
      type: 'lesson'
    },
    {
      name: 'pre-work-assignment',
      title: 'PRE-WORK Assignment',
      subTitle: 'Pre-Work Coding Assignment',
      excerpt: 'Complete the pre-work assignment to demonstrate your understanding of basic coding concepts.',
      mod: 'mod0',
      type: 'assignment'
    },
    
    // Module 1 - HTML, CSS, Wireframing & PSD/Figma to HTML
    {
      name: 'html-css-overview',
      title: 'HTML & CSS Overview',
      subTitle: 'Introduction to HTML and CSS',
      excerpt: 'An overview of the fundamental concepts of HTML and CSS for building web pages.',
      mod: 'mod1',
      type: 'lesson'
    },
    {
      name: 'css-box-model',
      title: 'CSS Box Model',
      subTitle: 'Understanding the CSS Box Model',
      excerpt: 'Learn about the CSS box model and how to use it to style web elements.',
      mod: 'mod1',
      type: 'lesson'
    },
    {
      name: 'css-iso-ice',
      title: 'CSS - ISO & ICE',
      subTitle: 'Advanced CSS Techniques',
      excerpt: 'Explore advanced CSS techniques including ISO and ICE for improved styling.',
      mod: 'mod1',
      type: 'lesson'
    },
    {
      name: 'css-combinators',
      title: 'CSS - Combinators',
      subTitle: 'Using CSS Combinators',
      excerpt: 'Understand how to use CSS combinators to select and style web elements.',
      mod: 'mod1',
      type: 'lesson'
    },
    {
      name: 'css-flexbox',
      title: 'CSS - Flexbox',
      subTitle: 'Mastering CSS Flexbox',
      excerpt: 'Learn to create flexible and responsive web layouts using CSS Flexbox.',
      mod: 'mod1',
      type: 'lesson'
    },
    {
      name: 'css-grid',
      title: 'CSS - Grid',
      subTitle: 'Creating Layouts with CSS Grid',
      excerpt: 'Understand how to use CSS Grid to design complex web layouts.',
      mod: 'mod1',
      type: 'lesson'
    },
    {
      name: 'centering-divs',
      title: 'Centering Divs',
      subTitle: 'Techniques for Centering Divs',
      excerpt: 'Learn various techniques for centering divs in CSS.',
      mod: 'mod1',
      type: 'lesson'
    },
    {
      name: 'holy-grail-layout',
      title: 'Holy Grail Layout',
      subTitle: 'Implementing the Holy Grail Layout',
      excerpt: 'Understand and implement the classic Holy Grail web layout using CSS.',
      mod: 'mod1',
      type: 'lesson'
    },
    {
      name: 'css-cards',
      title: 'CSS Cards',
      subTitle: 'Designing CSS Cards',
      excerpt: 'Learn to create and style card components using CSS.',
      mod: 'mod1',
      type: 'lesson'
    },
    {
      name: 'wireframing',
      title: 'Wireframing',
      subTitle: 'Creating Web Page Wireframes',
      excerpt: 'Understand the process of wireframing web pages for better design and development.',
      mod: 'mod1',
      type: 'lesson'
    },
    {
      name: 'image-to-design',
      title: 'Image to Design - Figma & PSD',
      subTitle: 'Converting Images to Design using Figma and PSD',
      excerpt: 'Learn how to convert images to web designs using Figma and Photoshop.',
      mod: 'mod1',
      type: 'lesson'
    },
    {
      name: 'sdlc',
      title: 'SDLC',
      subTitle: 'Software Development Life Cycle',
      excerpt: 'Understand the stages of the Software Development Life Cycle (SDLC).',
      mod: 'mod1',
      type: 'lesson'
    },
    {
      name: 'html-css-master-class',
      title: 'HTML & CSS Master Class',
      subTitle: 'Advanced HTML and CSS Techniques',
      excerpt: 'Master advanced HTML and CSS techniques to create professional web pages.',
      mod: 'mod1',
      type: 'lesson'
    },
    {
      name: 'holygrail-with-flex',
      title: 'Holygrail with Flex',
      subTitle: 'Holy Grail Layout with Flexbox',
      excerpt: 'Implement the Holy Grail layout using CSS Flexbox for flexible and responsive design.',
      mod: 'mod1',
      type: 'assignment'
    },
    {
      name: 'holygrail-with-grid',
      title: 'Holygrail with Grid',
      subTitle: 'Holy Grail Layout with Grid',
      excerpt: 'Use CSS Grid to create the Holy Grail layout for complex web designs.',
      mod: 'mod1',
      type: 'assignment'
    },
    {
      name: 'card-layout',
      title: 'Card Layout',
      subTitle: 'Creating a Card Layout',
      excerpt: 'Design and implement a card layout using CSS.',
      mod: 'mod1',
      type: 'assignment'
    },
    {
      name: 'css-styling-challenge',
      title: 'CSS Styling Challenge',
      subTitle: 'Advanced CSS Styling Techniques',
      excerpt: 'Challenge your CSS skills with advanced styling tasks.',
      mod: 'mod1',
      type: 'assignment'
    },
    {
      name: 'module-1-final-project',
      title: 'Module 1 Final Project',
      subTitle: 'Clone a Website',
      excerpt: 'Clone a website to demonstrate your understanding of HTML and CSS.',
      mod: 'mod1',
      type: 'project'
    },
  
    // Module 2 - Basic JavaScript, OOP & DOM Manipulation, Git, Github & Version Control
    {
      name: 'intro-to-javascript',
      title: 'Intro to JavaScript, Variables and Control Flow',
      subTitle: 'Basics of JavaScript Programming',
      excerpt: 'Learn the basics of JavaScript programming, including variables and control flow.',
      mod: 'mod2',
      type: 'lesson'
    },
    {
      name: 'learning-how-to-learn',
      title: 'Learning How to Learn & Psuedocodeing',
      subTitle: 'Effective Learning Strategies and Pseudocoding',
      excerpt: 'Discover strategies for effective learning and the importance of pseudocoding in problem-solving.',
      mod: 'mod2',
      type: 'lesson'
    },
    {
      name: 'functions-and-execution-context',
      title: 'Functions & Execution Context',
      subTitle: 'Understanding JavaScript Functions and Execution Context',
      excerpt: 'Deep dive into JavaScript functions and how they are executed within different contexts.',
      mod: 'mod2',
      type: 'lesson'
    },
    {
      name: 'javascript-call-stack',
      title: 'The JavaScript Call Stack',
      subTitle: 'Exploring the JavaScript Call Stack',
      excerpt: 'Understand the call stack in JavaScript and its role in function execution and error handling.',
      mod: 'mod2',
      type: 'lesson'
    },
    {
      name: 'arrays-and-objects',
      title: 'Arrays & Objects',
      subTitle: 'Working with Arrays and Objects in JavaScript',
      excerpt: 'Learn how to manipulate arrays and objects in JavaScript for efficient data handling.',
      mod: 'mod2',
      type: 'lesson'
    },
    {
      name: 'callback-and-higher-order-functions',
      title: 'Callback & Higher Order Functions',
      subTitle: 'Understanding Callbacks and Higher Order Functions',
      excerpt: 'Explore the concepts of callbacks and higher order functions in JavaScript for advanced programming techniques.',
      mod: 'mod2',
      type: 'lesson'
    },
    {
      name: 'object-oriented-programming',
      title: 'Object Oriented Programming',
      subTitle: 'Introduction to Object Oriented Programming',
      excerpt: 'Learn the principles of object oriented programming and how to apply them in JavaScript.',
      mod: 'mod2',
      type: 'lesson'
    },
    {
      name: 'closure-scope-execution-context',
      title: 'Closure, Scope & Execution Context',
      subTitle: 'Deep Dive into Closures, Scope, and Execution Context',
      excerpt: 'Understand the concepts of closure, scope, and execution context in JavaScript for advanced coding.',
      mod: 'mod2',
      type: 'lesson'
    },
    {
      name: 'recursion',
      title: 'Recursion',
      subTitle: 'Mastering Recursion in JavaScript',
      excerpt: 'Learn how to implement and use recursion in JavaScript to solve complex problems.',
      mod: 'mod2',
      type: 'lesson'
    },
    {
      name: 'git-and-github',
      title: 'Git & Github',
      subTitle: 'Version Control with Git and GitHub',
      excerpt: 'Understand version control concepts and how to use Git and GitHub for managing code repositories.',
      mod: 'mod2',
      type: 'lesson'
    },
    {
      name: 'dom-manipulation',
      title: 'DOM Manipulation',
      subTitle: 'Manipulating the Document Object Model',
      excerpt: 'Learn how to manipulate the DOM using JavaScript to create dynamic web pages.',
      mod: 'mod2',
      type: 'lesson'
    },
    {
      name: 'dom-events',
      title: 'DOM Events',
      subTitle: 'Handling Events in the DOM',
      excerpt: 'Understand how to handle and respond to events in the DOM using JavaScript.',
      mod: 'mod2',
      type: 'lesson'
    },
    {
      name: 'functions-loops-lab',
      title: 'Functions & Loops Lab',
      subTitle: 'Practicing Functions and Loops in JavaScript',
      excerpt: 'Complete exercises to practice and reinforce your understanding of functions and loops in JavaScript.',
      mod: 'mod2',
      type: 'assignment'
    },
    {
      name: 'array-lab',
      title: 'Array Lab',
      subTitle: 'Hands-on Practice with Arrays',
      excerpt: 'Work through exercises to improve your skills in manipulating arrays in JavaScript.',
      mod: 'mod2',
      type: 'assignment'
    },
    {
      name: 'oop-lab',
      title: 'OOP Lab',
      subTitle: 'Object Oriented Programming Practice',
      excerpt: 'Apply your knowledge of object oriented programming through hands-on exercises.',
      mod: 'mod2',
      type: 'assignment'
    },
    {
      name: 'dom-practice-lab',
      title: 'DOM Practice Lab',
      subTitle: 'Practical Exercises for DOM Manipulation',
      excerpt: 'Practice manipulating the DOM with JavaScript through a series of guided exercises.',
      mod: 'mod2',
      type: 'assignment'
    },
    {
      name: 'version-control-git-lab',
      title: 'Version Control with Git Lab',
      subTitle: 'Mastering Git for Version Control',
      excerpt: 'Complete a lab to solidify your understanding of version control using Git.',
      mod: 'mod2',
      type: 'assignment'
    },
    {
      name: 'module-2-final-project',
      title: 'Module 2 Final Project',
      subTitle: 'Develop a Browser-based Game',
      excerpt: 'Create a browser-based game to demonstrate your understanding of JavaScript and interactive web elements.',
      mod: 'mod2',
      type: 'project'
    },
  
    // Module 3 - Async JavaScript & Frontend Frameworks like React
    {
      name: 'promises',
      title: 'Promises',
      subTitle: 'Introduction to JavaScript Promises',
      excerpt: 'Learn how to work with promises in JavaScript to handle asynchronous operations.',
      mod: 'mod3',
      type: 'lesson'
    },
    {
      name: 'fetch-api-async-await',
      title: 'The Fetch API & Async Await',
      subTitle: 'Using Fetch API and Async/Await in JavaScript',
      excerpt: 'Understand how to use the Fetch API and async/await for making asynchronous HTTP requests in JavaScript.',
      mod: 'mod3',
      type: 'lesson'
    },
    {
      name: 'single-page-applications',
      title: 'Single Page Applications with Async Programming',
      subTitle: 'Building SPAs with Asynchronous JavaScript',
      excerpt: 'Learn how to create single-page applications using asynchronous JavaScript techniques.',
      mod: 'mod3',
      type: 'lesson'
    },
    {
      name: 'react-jsx-introductions',
      title: 'React & JSX Introductions',
      subTitle: 'Getting Started with React and JSX',
      excerpt: 'Get introduced to React and JSX for building user interfaces in a declarative manner.',
      mod: 'mod3',
      type: 'lesson'
    },
    {
      name: 'describing-ui-react',
      title: 'Describing UI in React',
      subTitle: 'Building User Interfaces with React',
      excerpt: 'Learn how to describe and build user interfaces using React components and JSX.',
      mod: 'mod3',
      type: 'lesson'
    },
    {
      name: 'adding-interactivity-forms',
      title: 'Adding Interactivity in React & Using Forms',
      subTitle: 'Creating Interactive React Applications',
      excerpt: 'Discover how to add interactivity to React applications and manage forms effectively.',
      mod: 'mod3',
      type: 'lesson'
    },
    {
      name: 'managing-state-react',
      title: 'Managing State in React',
      subTitle: 'State Management in React Applications',
      excerpt: 'Learn how to manage state in React applications using hooks and state management libraries.',
      mod: 'mod3',
      type: 'lesson'
    },
    {
      name: 'escape-hatches-react',
      title: 'Escape Hatches in React',
      subTitle: 'Advanced React Techniques',
      excerpt: 'Explore advanced techniques in React, including escape hatches for performance optimization.',
      mod: 'mod3',
      type: 'lesson'
    },
    {
      name: 'react-router-basic-setup',
      title: 'React Router Basic Setup',
      subTitle: 'Routing in React Applications',
      excerpt: 'Learn how to set up basic routing in React applications using React Router.',
      mod: 'mod3',
      type: 'lesson'
    },
    {
      name: 'react-router-history-stack',
      title: 'React Router: History Stack',
      subTitle: 'Understanding the History Stack in React Router',
      excerpt: 'Dive into the history stack in React Router and how it affects navigation in your application.',
      mod: 'mod3',
      type: 'lesson'
    },
    {
      name: 'react-router-url-routes',
      title: 'React Router: Matching URL to Routes Explained',
      subTitle: 'URL Matching in React Router',
      excerpt: 'Understand how React Router matches URLs to routes and how to configure them.',
      mod: 'mod3',
      type: 'lesson'
    },
    {
      name: 'react-router-nested-ui',
      title: 'React Router: Rendering a Nested UI with Route Matches',
      subTitle: 'Nested Routes in React Router',
      excerpt: 'Learn how to render nested UIs in React Router by configuring nested routes.',
      mod: 'mod3',
      type: 'lesson'
    },
    {
      name: 'api-driven-development-rest',
      title: 'API Driven Development with REST APIs',
      subTitle: 'Building Applications with REST APIs',
      excerpt: 'Learn how to develop applications driven by REST APIs, integrating them into your projects.',
      mod: 'mod3',
      type: 'lesson'
    },
    {
      name: 'api-driven-development-ai',
      title: 'API Driven Development with Generative AI APIs',
      subTitle: 'Leveraging AI APIs in Application Development',
      excerpt: 'Explore how to integrate generative AI APIs into your applications for enhanced functionality.',
      mod: 'mod3',
      type: 'lesson'
    },
    {
      name: 'flux-architecture',
      title: 'Flux Architecture Explained',
      subTitle: 'Understanding Flux for React Applications',
      excerpt: 'Learn about the Flux architecture and how it is used to manage data flow in React applications.',
      mod: 'mod3',
      type: 'lesson'
    },
    {
      name: 'redux-basics',
      title: 'Redux Basics',
      subTitle: 'State Management with Redux',
      excerpt: 'Understand the basics of Redux for state management in complex React applications.',
      mod: 'mod3',
      type: 'lesson'
    },
    {
      name: 'mobx-basics',
      title: 'MobX Basics',
      subTitle: 'State Management with MobX',
      excerpt: 'Learn how to use MobX for state management in React applications.',
      mod: 'mod3',
      type: 'lesson'
    },
    {
      name: 'next-js-basics',
      title: 'Next Js Basics',
      subTitle: 'Introduction to Next.js',
      excerpt: 'Get started with Next.js for building server-rendered React applications.',
      mod: 'mod3',
      type: 'lesson'
    },
    {
      name: 'next-js-styling',
      title: 'Next Js Styling',
      subTitle: 'Styling Techniques in Next.js',
      excerpt: 'Learn about different styling techniques in Next.js to enhance your applications.',
      mod: 'mod3',
      type: 'lesson'
    },
    {
      name: 'next-js-optimizations',
      title: 'Next Js Optimizations',
      subTitle: 'Performance Optimization in Next.js',
      excerpt: 'Explore performance optimization techniques in Next.js to make your applications faster.',
      mod: 'mod3',
      type: 'lesson'
    },
    {
      name: 'next-js-routing',
      title: 'Next Js Routing',
      subTitle: 'Routing in Next.js Applications',
      excerpt: 'Learn how to set up and manage routing in Next.js applications.',
      mod: 'mod3',
      type: 'lesson'
    },
    {
      name: 'next-js-data-fetching',
      title: 'Next Js Data Fetching',
      subTitle: 'Fetching Data in Next.js',
      excerpt: 'Understand how to fetch and manage data in Next.js applications.',
      mod: 'mod3',
      type: 'lesson'
    },
    {
      name: 'next-js-search-pagination',
      title: 'Next Js Search & Pagination',
      subTitle: 'Implementing Search and Pagination in Next.js',
      excerpt: 'Learn how to implement search and pagination functionalities in Next.js applications.',
      mod: 'mod3',
      type: 'lesson'
    },
    {
      name: 'next-js-mutating-data',
      title: 'Next Js Mutating Data & Error Handling',
      subTitle: 'Handling Data Mutations and Errors in Next.js',
      excerpt: 'Explore techniques for mutating data and handling errors in Next.js applications.',
      mod: 'mod3',
      type: 'lesson'
    },
    {
      name: 'next-js-form-validation',
      title: 'Next Js Form Validation & Accessibility',
      subTitle: 'Ensuring Form Validation and Accessibility in Next.js',
      excerpt: 'Learn how to implement form validation and ensure accessibility in Next.js applications.',
      mod: 'mod3',
      type: 'lesson'
    },
    {
      name: 'async-javascript-project',
      title: 'Asynchronous JavaScript Project',
      subTitle: 'Implementing Promises and Async/Await',
      excerpt: 'Create a JavaScript project that calls an external API using promises and async/await.',
      mod: 'mod3',
      type: 'assignment'
    },
    {
      name: 'react-basic-app',
      title: 'React Basic App',
      subTitle: 'Building a Basic React Application',
      excerpt: 'Develop a simple React application to understand the core concepts of React.',
      mod: 'mod3',
      type: 'assignment'
    },
    {
      name: 'react-router-basic-app',
      title: 'React Router Basic App',
      subTitle: 'Creating a React App with Basic Routing',
      excerpt: 'Build a React application with basic routing functionalities using React Router.',
      mod: 'mod3',
      type: 'assignment'
    },
    {
      name: 'react-app-external-api',
      title: 'React App with External API',
      subTitle: 'Integrating an External API into a React App',
      excerpt: 'Develop a React application that integrates data from an external API.',
      mod: 'mod3',
      type: 'assignment'
    },
    {
      name: 'react-app-state-management',
      title: 'React App with State Management Library',
      subTitle: 'Managing State in a React App',
      excerpt: 'Build a React application using a state management library like Redux or MobX.',
      mod: 'mod3',
      type: 'assignment'
    },
    {
      name: 'next-js-basic-app',
      title: 'Next Js Basic App',
      subTitle: 'Building a Basic Application with Next.js',
      excerpt: 'Create a simple application using Next.js to learn the basics of this framework.',
      mod: 'mod3',
      type: 'assignment'
    },
    {
      name: 'module-3-final-project',
      title: 'Module 3 Final Project',
      subTitle: 'Build an API-powered Single Page Application',
      excerpt: 'Develop a single-page application that interfaces with real-world data using React and APIs.',
      mod: 'mod3',
      type: 'project'
    },
  
    // Module 4 - Advanced JavaScript, Algorithms & Data Structures, Lambda, Unit Testing, Documentation
    {
      name: 'mdn-w3schools-tc39',
      title: 'MDN, W3Schools, TC39 and the ECMA Language Spec',
      subTitle: 'Learning Resources for JavaScript Developers',
      excerpt: 'Explore key resources and standards that guide JavaScript development.',
      mod: 'mod4',
      type: 'lesson'
    },
    {
      name: 'big-o-notation',
      title: 'Big O Notation and Algorithm & Data Structures Basics',
      subTitle: 'Understanding Big O Notation and Basics of Algorithms',
      excerpt: 'Learn the fundamentals of Big O notation and the basics of algorithms and data structures.',
      mod: 'mod4',
      type: 'lesson'
    },
    {
      name: 'jest-unit-testing',
      title: 'Jest and Unit Testing Functions',
      subTitle: 'Introduction to Unit Testing with Jest',
      excerpt: 'Discover how to write unit tests for JavaScript functions using the Jest framework.',
      mod: 'mod4',
      type: 'lesson'
    },
    {
      name: 'frequency-counters',
      title: 'Frequency Counters',
      subTitle: 'Implementing Frequency Counters in JavaScript',
      excerpt: 'Learn how to use frequency counters to solve algorithmic problems efficiently.',
      mod: 'mod4',
      type: 'lesson'
    },
    {
      name: 'sliding-window',
      title: 'Sliding Window',
      subTitle: 'Optimizing Algorithms with the Sliding Window Technique',
      excerpt: 'Understand the sliding window technique and how to apply it to optimize algorithms.',
      mod: 'mod4',
      type: 'lesson'
    },
    {
      name: 'multiple-pointers',
      title: 'Multiple Pointers',
      subTitle: 'Solving Problems with Multiple Pointers',
      excerpt: 'Explore the multiple pointers technique to solve complex algorithmic problems.',
      mod: 'mod4',
      type: 'lesson'
    },
    {
      name: 'sorting-lists',
      title: 'Sorting Lists',
      subTitle: 'Understanding Sorting Algorithms',
      excerpt: 'Learn about different sorting algorithms and how to implement them in JavaScript.',
      mod: 'mod4',
      type: 'lesson'
    },
    {
      name: 'divide-and-conquer',
      title: 'Divide and Conquer',
      subTitle: 'Algorithm Optimization with Divide and Conquer',
      excerpt: 'Discover the divide and conquer strategy for optimizing algorithms.',
      mod: 'mod4',
      type: 'lesson'
    },
    {
      name: 'binary-search',
      title: 'Binary Search',
      subTitle: 'Implementing Binary Search in JavaScript',
      excerpt: 'Understand how to implement the binary search algorithm for efficient searching.',
      mod: 'mod4',
      type: 'lesson'
    },
    {
      name: 'merge-sort',
      title: 'Merge Sort',
      subTitle: 'Understanding Merge Sort Algorithm',
      excerpt: 'Learn how to implement the merge sort algorithm for efficient sorting.',
      mod: 'mod4',
      type: 'lesson'
    },
    {
      name: 'quick-sort',
      title: 'Quick Sort',
      subTitle: 'Understanding Quick Sort Algorithm',
      excerpt: 'Discover the quick sort algorithm and how to implement it in JavaScript.',
      mod: 'mod4',
      type: 'lesson'
    },
    {
      name: 'radix-sort',
      title: 'Radix Sort',
      subTitle: 'Implementing Radix Sort Algorithm',
      excerpt: 'Learn how to implement the radix sort algorithm for specialized sorting tasks.',
      mod: 'mod4',
      type: 'lesson'
    },
    {
      name: 'dynamic-programming',
      title: 'Dynamic Programming',
      subTitle: 'Solving Problems with Dynamic Programming',
      excerpt: 'Understand the principles of dynamic programming and how to apply them to solve complex problems.',
      mod: 'mod4',
      type: 'lesson'
    },
    {
      name: 'linked-lists',
      title: 'Linked Lists',
      subTitle: 'Understanding and Implementing Linked Lists',
      excerpt: 'Learn about linked lists and how to implement them in JavaScript.',
      mod: 'mod4',
      type: 'lesson'
    },
    {
      name: 'stacks-queues',
      title: 'Stacks & Queues',
      subTitle: 'Working with Stacks and Queues',
      excerpt: 'Explore the concepts of stacks and queues and how to implement them in JavaScript.',
      mod: 'mod4',
      type: 'lesson'
    },
    {
      name: 'trees',
      title: 'Trees',
      subTitle: 'Understanding Tree Data Structures',
      excerpt: 'Learn about tree data structures and how to implement them in JavaScript.',
      mod: 'mod4',
      type: 'lesson'
    },
    {
      name: 'binary-search-trees',
      title: 'Binary Search Trees',
      subTitle: 'Implementing Binary Search Trees',
      excerpt: 'Understand the principles of binary search trees and how to implement them.',
      mod: 'mod4',
      type: 'lesson'
    },
    {
      name: 'heaps',
      title: 'Heaps',
      subTitle: 'Understanding and Implementing Heaps',
      excerpt: 'Learn about heap data structures and how to implement them in JavaScript.',
      mod: 'mod4',
      type: 'lesson'
    },
    {
      name: 'graphs',
      title: 'Graphs',
      subTitle: 'Understanding Graph Data Structures',
      excerpt: 'Explore graph data structures and how to implement them in JavaScript.',
      mod: 'mod4',
      type: 'lesson'
    },
    {
      name: 'dijkstra-algorithm',
      title: 'Dijkstra’s Algorithm',
      subTitle: 'Implementing Dijkstra’s Algorithm',
      excerpt: 'Learn how to implement Dijkstra’s algorithm for finding the shortest path in a graph.',
      mod: 'mod4',
      type: 'lesson'
    },
    {
      name: 'k-nearest-neighbor',
      title: 'K Nearest Neighbor',
      subTitle: 'Understanding K Nearest Neighbor Algorithm',
      excerpt: 'Discover the K nearest neighbor algorithm and how to implement it in JavaScript.',
      mod: 'mod4',
      type: 'lesson'
    },
    {
      name: 'algorithm-optimization',
      title: 'Algorithm Optimization',
      subTitle: 'Optimizing Sorting Algorithms',
      excerpt: 'Implement and optimize sorting algorithms in JavaScript and discuss their Big O notations.',
      mod: 'mod4',
      type: 'assignment'
    },
    {
      name: 'data-structures-implementation',
      title: 'Data Structures Implementation',
      subTitle: 'Implementing a Trie Data Structure',
      excerpt: 'Learn how to implement a Trie data structure in JavaScript.',
      mod: 'mod4',
      type: 'assignment'
    },
    {
      name: 'module-4-final-project',
      title: 'Module 4 Final Project',
      subTitle: 'Construct a Data Structure Library',
      excerpt: 'Construct a data structure library to demonstrate advanced JavaScript concepts and best practices.',
      mod: 'mod4',
      type: 'project'
    },
  
    // Module 5 - Node, Express, MongoDB, Digital Ocean, CRUD, REST, MVC & API Building
    {
      name: 'node-js-basics',
      title: 'Node JS Basics',
      subTitle: 'Introduction to Node.js',
      excerpt: 'Learn the basics of Node.js and how to set up a Node.js environment.',
      mod: 'mod5',
      type: 'lesson'
    },
    {
      name: 'express-basics',
      title: 'Express Basics',
      subTitle: 'Getting Started with Express.js',
      excerpt: 'Understand the basics of Express.js and how to create a server using this framework.',
      mod: 'mod5',
      type: 'lesson'
    },
    {
      name: 'server-side-rendering',
      title: 'Server Side Rendering with JSX',
      subTitle: 'Implementing Server Side Rendering',
      excerpt: 'Learn how to implement server side rendering using JSX in Node.js applications.',
      mod: 'mod5',
      type: 'lesson'
    },
    {
      name: 'mongodb-basics',
      title: 'MongoDB Basics',
      subTitle: 'Introduction to MongoDB',
      excerpt: 'Get started with MongoDB and learn how to perform basic database operations.',
      mod: 'mod5',
      type: 'lesson'
    },
    {
      name: 'mongoose',
      title: 'Mongoose',
      subTitle: 'Using Mongoose with MongoDB',
      excerpt: 'Discover how to use Mongoose for object data modeling in MongoDB.',
      mod: 'mod5',
      type: 'lesson'
    },
    {
      name: 'crud-rest-mvc',
      title: 'CRUD, REST & MVC',
      subTitle: 'Building RESTful APIs with MVC Architecture',
      excerpt: 'Learn how to build RESTful APIs using CRUD operations and MVC architecture.',
      mod: 'mod5',
      type: 'lesson'
    },
    {
      name: 'api-building',
      title: 'API Building',
      subTitle: 'Building APIs with Node.js and Express',
      excerpt: 'Understand how to build APIs using Node.js and Express to handle various requests.',
      mod: 'mod5',
      type: 'lesson'
    },
    {
      name: 'jest-supertest',
      title: 'JEST & Supertest',
      subTitle: 'Testing APIs with JEST and Supertest',
      excerpt: 'Learn how to test APIs using JEST and Supertest frameworks.',
      mod: 'mod5',
      type: 'lesson'
    },
    {
      name: 'digital-ocean',
      title: 'Digital Ocean',
      subTitle: 'Deploying Applications with Digital Ocean',
      excerpt: 'Discover how to deploy Node.js applications using Digital Ocean.',
      mod: 'mod5',
      type: 'lesson'
    },
    {
      name: 'dns-domains',
      title: 'DNS & Domains',
      subTitle: 'Understanding DNS and Domain Management',
      excerpt: 'Learn about DNS and how to manage domains for your applications.',
      mod: 'mod5',
      type: 'lesson'
    },
    {
      name: 'ssh-keys',
      title: 'SSH Keys',
      subTitle: 'Using SSH Keys for Secure Access',
      excerpt: 'Understand how to generate and use SSH keys for secure access to servers.',
      mod: 'mod5',
      type: 'lesson'
    },
    {
      name: 'neovim-ranger',
      title: 'Neovim & Ranger',
      subTitle: 'Efficient Development with Neovim and Ranger',
      excerpt: 'Learn how to use Neovim and Ranger for efficient development in a terminal environment.',
      mod: 'mod5',
      type: 'lesson'
    },
    {
      name: 'pm2',
      title: 'PM2',
      subTitle: 'Process Management with PM2',
      excerpt: 'Discover how to use PM2 for managing Node.js processes in production.',
      mod: 'mod5',
      type: 'lesson'
    },
    {
      name: 'nginx',
      title: 'NGINX',
      subTitle: 'Setting Up NGINX for Web Servers',
      excerpt: 'Learn how to set up and configure NGINX as a web server for your applications.',
      mod: 'mod5',
      type: 'lesson'
    },
    {
      name: 'ufw',
      title: 'UFW',
      subTitle: 'Firewall Management with UFW',
      excerpt: 'Understand how to use UFW for managing firewall rules on your server.',
      mod: 'mod5',
      type: 'lesson'
    },
    {
      name: 'hosting-multiple-apps',
      title: 'Hosting Multiple Applications',
      subTitle: 'Managing Multiple Applications on a Single Server',
      excerpt: 'Learn how to host and manage multiple applications on a single server using NGINX and PM2.',
      mod: 'mod5',
      type: 'lesson'
    },
    {
      name: 'node-api-development',
      title: 'Node.js API Development',
      subTitle: 'Building a RESTful API with Node.js and Express',
      excerpt: 'Build a RESTful API using Node.js and Express, complete with CRUD operations.',
      mod: 'mod5',
      type: 'assignment'
    },
    {
      name: 'database-integration-mongodb',
      title: 'Database Integration with MongoDB',
      subTitle: 'Connecting a Node.js API to MongoDB',
      excerpt: 'Connect a Node.js API to MongoDB and perform database operations.',
      mod: 'mod5',
      type: 'assignment'
    },
    {
      name: 'full-coverage-testing',
      title: 'Full Coverage Testing and Deployment',
      subTitle: 'Testing and Deploying an API',
      excerpt: 'Test and deploy a Node.js API with full coverage using JEST, Supertest, and Digital Ocean.',
      mod: 'mod5',
      type: 'assignment'
    },
    {
      name: 'module-5-final-project',
      title: 'Module 5 Final Project',
      subTitle: 'Build and Document a REST API',
      excerpt: 'Build and document a REST API that performs CRUD operations, demonstrating your back-end development skills.',
      mod: 'mod5',
      type: 'project'
    },
  
    // Module 6 - Full Stack Applications from Development to Deployment with Authentication
    {
      name: 'mern-stack',
      title: 'The MERN Stack',
      subTitle: 'Introduction to the MERN Stack',
      excerpt: 'Learn the basics of the MERN stack, including MongoDB, Express, React, and Node.js.',
      mod: 'mod6',
      type: 'lesson'
    },
    {
      name: 'gulp-webpack-babel-vite',
      title: 'Gulp, Webpack & Babel & Vite',
      subTitle: 'Using Build Tools in JavaScript',
      excerpt: 'Understand how to use build tools like Gulp, Webpack, Babel, and Vite for JavaScript applications.',
      mod: 'mod6',
      type: 'lesson'
    },
    {
      name: 'scss-basics',
      title: 'SCSS Basics',
      subTitle: 'Introduction to SCSS',
      excerpt: 'Learn the basics of SCSS and how to use it to style your web applications.',
      mod: 'mod6',
      type: 'lesson'
    },
    {
      name: 'scss-modules',
      title: 'SCSS Modules',
      subTitle: 'Modular CSS with SCSS',
      excerpt: 'Discover how to use SCSS modules for better organization and maintainability of your styles.',
      mod: 'mod6',
      type: 'lesson'
    },
    {
      name: 'jwt-authentication',
      title: 'JWT Authentication',
      subTitle: 'Implementing JWT Authentication',
      excerpt: 'Learn how to implement JWT authentication in your full stack applications for secure user authentication.',
      mod: 'mod6',
      type: 'lesson'
    },
    {
      name: 'full-crud-auth-todolist',
      title: 'Full CRUD with Auth - Todolist',
      subTitle: 'Building a Todolist with Authentication',
      excerpt: 'Create a full CRUD todolist application with user authentication.',
      mod: 'mod6',
      type: 'lesson'
    },
    {
      name: 'full-crud-auth-notes-app',
      title: 'Full Crud with Auth - Notes App',
      subTitle: 'Building a Notes App with Authentication',
      excerpt: 'Develop a full CRUD notes application with user authentication.',
      mod: 'mod6',
      type: 'lesson'
    },
    {
      name: 'full-crud-auth-ecomm-app',
      title: 'Full Crud with Auth - Ecomm App with Stripe',
      subTitle: 'Building an E-commerce App with Authentication',
      excerpt: 'Create a full CRUD e-commerce application with user authentication and Stripe integration.',
      mod: 'mod6',
      type: 'lesson'
    },
    {
      name: 'full-crud-auth-chat-gpt',
      title: 'Full Crud with Auth - Chat GPT Clone with OpenAI',
      subTitle: 'Building a Chat GPT Clone with Authentication',
      excerpt: 'Develop a full CRUD Chat GPT clone with user authentication and OpenAI integration.',
      mod: 'mod6',
      type: 'lesson'
    },
    {
      name: 'mern-best-practices',
      title: 'MERN Best Practices',
      subTitle: 'Best Practices for MERN Stack Development',
      excerpt: 'Explore the best practices for developing applications using the MERN stack.',
      mod: 'mod6',
      type: 'lesson'
    },
    {
      name: 'full-stack-next-js',
      title: 'Full Stack Next JS',
      subTitle: 'Building Full Stack Applications with Next.js',
      excerpt: 'Learn how to build full stack applications using Next.js for server-side rendering and static site generation.',
      mod: 'mod6',
      type: 'lesson'
    },
    {
      name: 'full-stack-application',
      title: 'Full-Stack Application',
      subTitle: 'Developing a Full-Stack Application with MERN',
      excerpt: 'Develop a full-stack application using the MERN stack, incorporating CRUD operations and authentication.',
      mod: 'mod6',
      type: 'assignment'
    },
    {
      name: 'module-6-final-project',
      title: 'Module 6 Final Project',
      subTitle: 'Develop a Fully Functional Social Network',
      excerpt: 'Develop a fully functional social network with user authentication and real-time data handling.',
      mod: 'mod6',
      type: 'project'
    },
  
    // Module 7 - System Design Fundamentals
    {
      name: 'client-server-model',
      title: 'Client-Server Model Revisited',
      subTitle: 'Understanding the Client-Server Model',
      excerpt: 'Revisit the client-server model and understand its components and interactions.',
      mod: 'mod7',
      type: 'lesson'
    },
    {
      name: 'osi-model',
      title: 'OSI Model',
      subTitle: 'Understanding the OSI Model',
      excerpt: 'Learn about the OSI model and its importance in networking.',
      mod: 'mod7',
      type: 'lesson'
    },
    {
      name: 'http-tcp-ip',
      title: 'HTTP/s, TCP, IP',
      subTitle: 'Networking Protocols Explained',
      excerpt: 'Understand the key networking protocols: HTTP, HTTPS, TCP, and IP.',
      mod: 'mod7',
      type: 'lesson'
    },
    {
      name: 'operating-systems',
      title: 'Operating Systems',
      subTitle: 'Basics of Operating Systems',
      excerpt: 'Learn about the fundamentals of operating systems and their role in computing.',
      mod: 'mod7',
      type: 'lesson'
    },
    {
      name: 'processes-threads',
      title: 'Processes And Threads',
      subTitle: 'Understanding Processes and Threads',
      excerpt: 'Explore the concepts of processes and threads and how they work in an operating system.',
      mod: 'mod7',
      type: 'lesson'
    },
    {
      name: 'locks-concurrency',
      title: 'Locks And Concurrency Issues',
      subTitle: 'Managing Locks and Concurrency',
      excerpt: 'Understand how to manage locks and concurrency issues in software development.',
      mod: 'mod7',
      type: 'lesson'
    },
    {
      name: 'scheduling-context-switching',
      title: 'Scheduling And Context Switching',
      subTitle: 'CPU Scheduling and Context Switching',
      excerpt: 'Learn about CPU scheduling and the process of context switching in operating systems.',
      mod: 'mod7',
      type: 'lesson'
    },
    {
      name: 'unix-linux-systems',
      title: 'Unix/Linux Systems',
      subTitle: 'Introduction to Unix and Linux',
      excerpt: 'Get introduced to Unix and Linux systems and their fundamental concepts.',
      mod: 'mod7',
      type: 'lesson'
    },
    {
      name: 'virtualization',
      title: 'Virtualization',
      subTitle: 'Understanding Virtualization',
      excerpt: 'Explore the concept of virtualization and how it is used in modern computing.',
      mod: 'mod7',
      type: 'lesson'
    },
    {
      name: 'virtual-machines',
      title: 'Virtual Machines',
      subTitle: 'Using Virtual Machines',
      excerpt: 'Learn about virtual machines and their applications in computing.',
      mod: 'mod7',
      type: 'lesson'
    },
    {
      name: 'containers',
      title: 'Containers',
      subTitle: 'Introduction to Containers',
      excerpt: 'Understand the concept of containers and how they are used in software development.',
      mod: 'mod7',
      type: 'lesson'
    },
    {
      name: 'docker-kubernetes',
      title: 'Docker And Kubernetes',
      subTitle: 'Container Orchestration with Docker and Kubernetes',
      excerpt: 'Learn how to use Docker and Kubernetes for container orchestration and management.',
      mod: 'mod7',
      type: 'lesson'
    },
    {
      name: 'microservices',
      title: 'Microservices',
      subTitle: 'Understanding Microservices Architecture',
      excerpt: 'Explore the microservices architecture and its benefits for building scalable applications.',
      mod: 'mod7',
      type: 'lesson'
    },
    {
      name: 'databases-storage',
      title: 'Databases, Storage, Disk and Memory',
      subTitle: 'Managing Databases and Storage',
      excerpt: 'Learn about managing databases, storage, disk, and memory in software development.',
      mod: 'mod7',
      type: 'lesson'
    },
    {
      name: 'latency-throughput',
      title: 'Latency & Throughput',
      subTitle: 'Optimizing Latency and Throughput',
      excerpt: 'Understand the concepts of latency and throughput and how to optimize them.',
      mod: 'mod7',
      type: 'lesson'
    },
    {
      name: 'availability',
      title: 'Availability',
      subTitle: 'Ensuring System Availability',
      excerpt: 'Learn about strategies for ensuring high availability in systems.',
      mod: 'mod7',
      type: 'lesson'
    },
    {
      name: 'caching',
      title: 'Caching',
      subTitle: 'Using Caching for Performance Improvement',
      excerpt: 'Explore caching techniques to improve the performance of your applications.',
      mod: 'mod7',
      type: 'lesson'
    },
    {
      name: 'proxies',
      title: 'Proxies',
      subTitle: 'Understanding Proxies in Networking',
      excerpt: 'Learn about proxies and their role in networking and security.',
      mod: 'mod7',
      type: 'lesson'
    },
    {
      name: 'load-balancers',
      title: 'Load Balancers',
      subTitle: 'Distributing Traffic with Load Balancers',
      excerpt: 'Understand how load balancers distribute traffic to ensure optimal performance.',
      mod: 'mod7',
      type: 'lesson'
    },
    {
      name: 'the-cloud-explained',
      title: 'The Cloud explained',
      subTitle: 'Introduction to Cloud Computing',
      excerpt: 'Get introduced to cloud computing and its key concepts.',
      mod: 'mod7',
      type: 'lesson'
    },
    {
      name: 'migration-provider-solutions',
      title: 'Migration And Provider Solutions',
      subTitle: 'Cloud Migration Strategies',
      excerpt: 'Learn about cloud migration strategies and provider solutions for seamless transitions.',
      mod: 'mod7',
      type: 'lesson'
    },
    {
      name: 'cloud-architecture',
      title: 'Cloud Architecture',
      subTitle: 'Designing Cloud Architecture',
      excerpt: 'Explore the principles of designing scalable and efficient cloud architecture.',
      mod: 'mod7',
      type: 'lesson'
    },
    {
      name: 'cloud-storage',
      title: 'Cloud Storage',
      subTitle: 'Managing Data with Cloud Storage',
      excerpt: 'Understand how to manage data using cloud storage solutions.',
      mod: 'mod7',
      type: 'lesson'
    },
    {
      name: 'cloud-compute-serverless',
      title: 'Cloud Compute And Serverless',
      subTitle: 'Serverless Computing and Cloud Compute',
      excerpt: 'Learn about serverless computing and cloud compute services for scalable applications.',
      mod: 'mod7',
      type: 'lesson'
    },
    {
      name: 'cloud-networking',
      title: 'Cloud Networking',
      subTitle: 'Networking in the Cloud',
      excerpt: 'Understand the concepts of cloud networking and how to implement them.',
      mod: 'mod7',
      type: 'lesson'
    },
    {
      name: 'cloud-security-iam',
      title: 'Cloud Security And IAM',
      subTitle: 'Securing the Cloud with IAM',
      excerpt: 'Learn about cloud security and identity and access management (IAM) best practices.',
      mod: 'mod7',
      type: 'lesson'
    },
    {
      name: 'sql',
      title: 'SQL',
      subTitle: 'Introduction to SQL',
      excerpt: 'Learn the basics of SQL and how to use it for managing databases.',
      mod: 'mod7',
      type: 'lesson'
    },
    {
      name: 'osi-model-explanation',
      title: 'OSI Model Explanation',
      subTitle: 'Creating an OSI Model Infographic',
      excerpt: 'Create an infographic or a presentation explaining the OSI model layers and their functions.',
      mod: 'mod7',
      type: 'assignment'
    },
    {
      name: 'docker-basics',
      title: 'Docker Basics',
      subTitle: 'Containerizing Applications with Docker',
      excerpt: 'Containerize a simple web application using Docker and write the Dockerfile.',
      mod: 'mod7',
      type: 'assignment'
    },
    {
      name: 'system-design-mockup',
      title: 'System Design Mockup',
      subTitle: 'Creating a System Design Mockup',
      excerpt: 'Create a mockup for a system design based on given requirements and specifications.',
      mod: 'mod7',
      type: 'assignment'
    },
    {
      name: 'module-7-final-project',
      title: 'Module 7 Final Project',
      subTitle: 'Design a Scalable System Architecture',
      excerpt: 'Diagram and design a scalable system architecture for a given application scenario and present it.',
      mod: 'mod7',
      type: 'project'
    },
  
    // Module 8 - Learning New Programming Languages Quickly & Adapting to New Technologies
    {
      name: 'intro-to-languages',
      title: 'Introduction to Language Python, GoLang, PHP & RUBY',
      subTitle: 'Getting Started with New Programming Languages',
      excerpt: 'Get introduced to new programming languages like Python, GoLang, PHP, and Ruby.',
      mod: 'mod8',
      type: 'lesson'
    },
    {
      name: 'oop-other-languages',
      title: 'OOP In Other Languages',
      subTitle: 'Object Oriented Programming in Different Languages',
      excerpt: 'Learn how object oriented programming is implemented in various programming languages.',
      mod: 'mod8',
      type: 'lesson'
    },
    {
      name: 'routing-web-frameworks',
      title: 'Overview of Routing in Web Framework',
      subTitle: 'Understanding Routing in Web Frameworks',
      excerpt: 'Explore how routing is handled in different web frameworks.',
      mod: 'mod8',
      type: 'lesson'
    },
    {
      name: 'models-database-web-frameworks',
      title: 'Overview of Models/Database in Web Framework',
      subTitle: 'Managing Databases in Web Frameworks',
      excerpt: 'Learn how models and databases are managed in different web frameworks.',
      mod: 'mod8',
      type: 'lesson'
    },
    {
      name: 'building-api-web-frameworks',
      title: 'Building API in Web Framework',
      subTitle: 'Creating APIs with Web Frameworks',
      excerpt: 'Understand how to build APIs using various web frameworks.',
      mod: 'mod8',
      type: 'lesson'
    },
    {
      name: 'build-linked-list',
      title: 'Build A Linked List',
      subTitle: 'Implementing a Linked List',
      excerpt: 'Learn how to implement a linked list data structure in different programming languages.',
      mod: 'mod8',
      type: 'lesson'
    },
    {
      name: 'build-stack-linked-list',
      title: 'Build A Stack with a Linked List',
      subTitle: 'Implementing a Stack using a Linked List',
      excerpt: 'Understand how to build a stack data structure using a linked list.',
      mod: 'mod8',
      type: 'lesson'
    },
    {
      name: 'build-queue-linked-list',
      title: 'Build A Queue with a Linked List',
      subTitle: 'Implementing a Queue using a Linked List',
      excerpt: 'Explore how to implement a queue data structure using a linked list.',
      mod: 'mod8',
      type: 'lesson'
    },
    {
      name: 'build-binary-search-tree',
      title: 'Build A Binary Search Tree',
      subTitle: 'Implementing a Binary Search Tree',
      excerpt: 'Learn how to implement a binary search tree data structure.',
      mod: 'mod8',
      type: 'lesson'
    },
    {
      name: 'breadth-first-search',
      title: 'Breadth First Search',
      subTitle: 'Understanding Breadth First Search Algorithm',
      excerpt: 'Explore the breadth first search algorithm and how to implement it.',
      mod: 'mod8',
      type: 'lesson'
    },
    {
      name: 'dfs-pre-order',
      title: 'Depth First Search Pre-Order',
      subTitle: 'Implementing Depth First Search (Pre-Order)',
      excerpt: 'Learn how to implement the pre-order traversal of depth first search algorithm.',
      mod: 'mod8',
      type: 'lesson'
    },
    {
      name: 'dfs-in-order',
      title: 'Depth First Search In-Order',
      subTitle: 'Implementing Depth First Search (In-Order)',
      excerpt: 'Understand how to implement the in-order traversal of depth first search algorithm.',
      mod: 'mod8',
      type: 'lesson'
    },
    {
      name: 'dfs-post-order',
      title: 'Depth First Search Post-Order',
      subTitle: 'Implementing Depth First Search (Post-Order)',
      excerpt: 'Explore how to implement the post-order traversal of depth first search algorithm.',
      mod: 'mod8',
      type: 'lesson'
    },
    {
      name: 'data-structures-implementation-alt-lang',
      title: 'Data Structures Implementation',
      subTitle: 'Implementing Data Structures in a Chosen Language',
      excerpt: 'Implement a linked list and a binary search tree in a chosen programming language.',
      mod: 'mod8',
      type: 'assignment'
    },
    {
      name: 'api-implementation',
      title: 'API Implementation',
      subTitle: 'Building an API with a New Tech Stack',
      excerpt: 'Build an API using a new tech stack to demonstrate adaptability.',
      mod: 'mod8',
      type: 'assignment'
    },
    {
      name: 'module-8-final-project',
      title: 'Module 8 Final Project',
      subTitle: 'Implement a To-Do List Application',
      excerpt: 'Implement a to-do list application using an alternative tech stack to demonstrate adaptability.',
      mod: 'mod8',
      type: 'project'
    },
  
    // Module 9 - Generative AI, CI/CD, Automation Tools
    {
      name: 'intro-to-generative-ai',
      title: 'Introduction to Generative AI',
      subTitle: 'Understanding Generative AI',
      excerpt: 'Get introduced to generative AI and its core concepts.',
      mod: 'mod9',
      type: 'lesson'
    },
    {
      name: 'core-technologies-generative-ai',
      title: 'Core Technologies Behind Generative AI',
      subTitle: 'Exploring Core Technologies of Generative AI',
      excerpt: 'Learn about the core technologies that power generative AI systems.',
      mod: 'mod9',
      type: 'lesson'
    },
    {
      name: 'applications-generative-ai',
      title: 'Applications of Generative AI',
      subTitle: 'Exploring Generative AI Applications',
      excerpt: 'Discover various applications of generative AI in different industries.',
      mod: 'mod9',
      type: 'lesson'
    },
    {
      name: 'intro-to-cicd',
      title: 'Introduction to CI/CD',
      subTitle: 'Getting Started with CI/CD',
      excerpt: 'Learn the basics of continuous integration and continuous delivery (CI/CD).',
      mod: 'mod9',
      type: 'lesson'
    },
    {
      name: 'setting-up-cicd-pipeline',
      title: 'Setting Up a CI/CD Pipeline',
      subTitle: 'Implementing a CI/CD Pipeline',
      excerpt: 'Understand how to set up a CI/CD pipeline for automated deployment.',
      mod: 'mod9',
      type: 'lesson'
    },
    {
      name: 'best-practices-cicd',
      title: 'Best Practices for CI/CD',
      subTitle: 'CI/CD Best Practices',
      excerpt: 'Explore the best practices for implementing and managing CI/CD pipelines.',
      mod: 'mod9',
      type: 'lesson'
    },
    {
      name: 'intro-to-automation-tools',
      title: 'Introduction to Automation Tools',
      subTitle: 'Getting Started with Automation Tools',
      excerpt: 'Learn about various automation tools and how they are used in development.',
      mod: 'mod9',
      type: 'lesson'
    },
    {
      name: 'popular-automation-tools',
      title: 'Popular Automation Tools in the Industry',
      subTitle: 'Exploring Popular Automation Tools',
      excerpt: 'Discover popular automation tools used in the industry and their applications.',
      mod: 'mod9',
      type: 'lesson'
    },
    {
      name: 'generative-ai-cicd',
      title: 'Integrating Generative AI with CI/CD',
      subTitle: 'Using Generative AI in CI/CD Pipelines',
      excerpt: 'Learn how to integrate generative AI into CI/CD pipelines for enhanced automation.',
      mod: 'mod9',
      type: 'lesson'
    },
    {
      name: 'advanced-automation-strategies',
      title: 'Advanced Automation Strategies',
      subTitle: 'Implementing Advanced Automation',
      excerpt: 'Explore advanced automation strategies for improving development workflows.',
      mod: 'mod9',
      type: 'lesson'
    },
    {
      name: 'future-ai-automation',
      title: 'The Future of AI and Automation in Development',
      subTitle: 'Exploring the Future of AI and Automation',
      excerpt: 'Understand the future trends and impact of AI and automation in software development.',
      mod: 'mod9',
      type: 'lesson'
    },
    {
      name: 'building-integrated-cicd-pipeline',
      title: 'Building an Integrated CI/CD Pipeline',
      subTitle: 'Creating an Integrated CI/CD Pipeline',
      excerpt: 'Learn how to build an integrated CI/CD pipeline for automated deployments.',
      mod: 'mod9',
      type: 'lesson'
    },
    {
      name: 'make-zapier',
      title: 'Make & Zapier',
      subTitle: 'Automating Tasks with Make and Zapier',
      excerpt: 'Discover how to use Make and Zapier for automating tasks and workflows.',
      mod: 'mod9',
      type: 'lesson'
    },
    {
      name: 'openai-api-tools',
      title: 'OpenAI API Tools with Make & Zapier',
      subTitle: 'Integrating OpenAI APIs with Make and Zapier',
      excerpt: 'Learn how to integrate OpenAI APIs with Make and Zapier for automation.',
      mod: 'mod9',
      type: 'lesson'
    },
    {
      name: 'implement-cicd-pipeline',
      title: 'Implement CI/CD Pipeline',
      subTitle: 'Setting Up a CI/CD Pipeline',
      excerpt: 'Set up a CI/CD pipeline using Jenkins or GitHub Actions for a small project.',
      mod: 'mod9',
      type: 'assignment'
    },
    {
      name: 'module-9-final-project',
      title: 'Module 9 Final Project',
      subTitle: 'Create an Automated Content Generator',
      excerpt: 'Create an automated content generator for social media platforms like Instagram.',
      mod: 'mod9',
      type: 'project'
    },
  
    // Module 10 - Career Growth & Development
    {
      name: 'career-options',
      title: 'Freelancing, Contracting, Working at a Tech Start-Up, Working at a Tech Scale Up, Working at Big Tech Company, Working for a Non-Tech Company doing Software Engineering',
      subTitle: 'Exploring Career Options in Tech',
      excerpt: 'Explore various career options in tech, including freelancing, contracting, and working at different types of companies.',
      mod: 'mod10',
      type: 'lesson'
    },
    {
      name: 'mastering-tech-interview',
      title: 'Mastering the Tech Interview',
      subTitle: 'Preparing for Tech Interviews',
      excerpt: 'Learn how to prepare for and excel in technical interviews.',
      mod: 'mod10',
      type: 'lesson'
    },
    {
      name: 'building-professional-portfolio',
      title: 'Building a Professional Portfolio',
      subTitle: 'Creating a Professional Portfolio',
      excerpt: 'Discover how to create a professional portfolio to showcase your skills and projects.',
      mod: 'mod10',
      type: 'lesson'
    },
    {
      name: 'effective-resume',
      title: 'Crafting an Effective Resume',
      subTitle: 'Writing a Strong Resume',
      excerpt: 'Learn the key elements of crafting an effective resume for tech jobs.',
      mod: 'mod10',
      type: 'lesson'
    },
    {
      name: 'optimizing-linkedin-profile',
      title: 'Optimizing Your LinkedIn Profile',
      subTitle: 'Enhancing Your LinkedIn Profile',
      excerpt: 'Understand how to optimize your LinkedIn profile to attract potential employers and networking opportunities.',
      mod: 'mod10',
      type: 'lesson'
    },
    {
      name: 'building-personal-website',
      title: 'Building a Personal Website',
      subTitle: 'Creating a Personal Website',
      excerpt: 'Learn how to build a personal website to showcase your work and skills.',
      mod: 'mod10',
      type: 'lesson'
    },
    {
      name: 'open-source-contributions',
      title: 'Contributing to Open Source Projects',
      subTitle: 'Getting Started with Open Source',
      excerpt: 'Explore how to contribute to open source projects and the benefits of doing so.',
      mod: 'mod10',
      type: 'lesson'
    },
    {
      name: 'networking-career-advancement',
      title: 'Networking for Career Advancement',
      subTitle: 'Building a Professional Network',
      excerpt: 'Learn the importance of networking and strategies to build a professional network for career advancement.',
      mod: 'mod10',
      type: 'lesson'
    },
    {
      name: 'interview-skills',
      title: 'Interview Skills for Tech Jobs',
      subTitle: 'Developing Interview Skills',
      excerpt: 'Improve your interview skills and learn how to effectively communicate your abilities during tech job interviews.',
      mod: 'mod10',
      type: 'lesson'
    },
    {
      name: 'managing-online-presence',
      title: 'Managing Your Online Presence',
      subTitle: 'Maintaining a Professional Online Presence',
      excerpt: 'Understand how to manage and maintain a professional online presence to enhance your career prospects.',
      mod: 'mod10',
      type: 'lesson'
    },
    {
      name: 'navigating-job-offers',
      title: 'Navigating Job Offers and Negotiations',
      subTitle: 'Handling Job Offers and Negotiations',
      excerpt: 'Learn how to navigate job offers and negotiate effectively to get the best terms.',
      mod: 'mod10',
      type: 'lesson'
    },
    {
      name: 'venture-capital',
      title: 'Venture Capital: Who, What, When, Where, Why, and How',
      subTitle: 'Understanding Venture Capital',
      excerpt: 'Explore the world of venture capital and understand the key concepts and processes involved.',
      mod: 'mod10',
      type: 'lesson'
    },
    {
      name: 'personal-portfolio-website',
      title: 'Build a Personal Portfolio Website',
      subTitle: 'Creating a Personal Portfolio Website',
      excerpt: 'Design and develop a personal portfolio website that includes a resume and a blog.',
      mod: 'mod10',
      type: 'assignment'
    },
    {
      name: 'open-source-contribution',
      title: 'Open Source Contribution',
      subTitle: 'Contributing to Open Source Projects',
      excerpt: 'Contribute to an open source project and document the process and challenges.',
      mod: 'mod10',
      type: 'assignment'
    },
    {
      name: 'technical-blog-post',
      title: 'Technical Blog Post',
      subTitle: 'Writing a Technical Blog Post',
      excerpt: 'Write a blog post explaining a complex technical topic in simple terms.',
      mod: 'mod10',
      type: 'assignment'
    },
    {
      name: 'software-engineering-ethics',
      title: 'Software Engineering Ethics Discussion',
      subTitle: 'Discussing Ethical Considerations in Software Engineering',
      excerpt: 'Write an essay discussing ethical considerations in software engineering.',
      mod: 'mod10',
      type: 'assignment'
    },
    {
      name: 'career-plan-development',
      title: 'Career Plan Development',
      subTitle: 'Developing a 5-Year Career Plan',
      excerpt: 'Develop a detailed 5-year career plan including goals, skills to learn, and job target areas.',
      mod: 'mod10',
      type: 'assignment'
    },
    {
      name: 'module-10-final-project',
      title: 'Module 10 Final Project',
      subTitle: 'Craft a Professional Portfolio',
      excerpt: 'Craft a professional portfolio including a resume, LinkedIn profile, personal website, and contributions to open source projects.',
      mod: 'mod10',
      type: 'project'
    },
  
    // Graduation / Certification / Capstone
    {
      name: 'graduation-capstone-project',
      title: 'Graduation Capstone Project',
      subTitle: 'Develop a Micro-SaaS Application',
      excerpt: 'Develop a micro-SaaS application using OpenAI or a similar service, integrated with payment processing via Vonza or Stripe.',
      mod: 'capstone',
      type: 'project'
    },
    {
      name: 'graduation-requirements',
      title: 'Graduation Requirements',
      subTitle: 'Completing the Graduation Requirements',
      excerpt: 'Successfully pass a portfolio review, coding challenge, live coding sessions, system design evaluation, and a behavioral interview.',
      mod: 'capstone',
      type: 'assignment'
    }
  ];
  
 lessons.forEach(makeFile)
 const cheatsheets = [
    // Module 0 - PRE-WORK
    {
      name: 'internet-basics-cheatsheet',
      title: 'Internet Basics Cheatsheet',
      subTitle: 'Key Concepts of How the Internet Works',
      excerpt: 'Quick reference for understanding how the internet functions, including key terms and technologies.',
      mod: 'mod0',
      type: 'cheatsheet'
    },
    {
      name: 'algebra-logic-pseudocode-cheatsheet',
      title: 'Algebra, Logic & Pseudocode Cheatsheet',
      subTitle: 'Fundamental Concepts in Algebra, Logic, and Pseudocode',
      excerpt: 'Reference guide for algebraic expressions, logical operators, and writing pseudocode.',
      mod: 'mod0',
      type: 'cheatsheet'
    },
  
    // Module 1 - HTML, CSS, Wireframing & PSD/Figma to HTML
    {
      name: 'html-css-cheatsheet',
      title: 'HTML & CSS Cheatsheet',
      subTitle: 'Common HTML Tags and CSS Properties',
      excerpt: 'Quick reference for the most commonly used HTML tags and CSS properties.',
      mod: 'mod1',
      type: 'cheatsheet'
    },
    {
      name: 'css-box-model-cheatsheet',
      title: 'CSS Box Model Cheatsheet',
      subTitle: 'Understanding the CSS Box Model',
      excerpt: 'Reference guide for the CSS box model, including padding, borders, and margins.',
      mod: 'mod1',
      type: 'cheatsheet'
    },
    {
      name: 'flexbox-cheatsheet',
      title: 'Flexbox Cheatsheet',
      subTitle: 'CSS Flexbox Properties and Examples',
      excerpt: 'Quick reference for CSS Flexbox properties and layout examples.',
      mod: 'mod1',
      type: 'cheatsheet'
    },
    {
      name: 'grid-layout-cheatsheet',
      title: 'CSS Grid Layout Cheatsheet',
      subTitle: 'CSS Grid Properties and Examples',
      excerpt: 'Quick reference for CSS Grid properties and layout examples.',
      mod: 'mod1',
      type: 'cheatsheet'
    },
  
    // Module 2 - Basic JavaScript, OOP & DOM Manipulation, Git, Github & Version Control
    {
      name: 'javascript-basics-cheatsheet',
      title: 'JavaScript Basics Cheatsheet',
      subTitle: 'Essential JavaScript Syntax and Functions',
      excerpt: 'Quick reference for basic JavaScript syntax, variables, and functions.',
      mod: 'mod2',
      type: 'cheatsheet'
    },
    {
      name: 'dom-manipulation-cheatsheet',
      title: 'DOM Manipulation Cheatsheet',
      subTitle: 'Common DOM Methods and Properties',
      excerpt: 'Reference guide for manipulating the DOM using JavaScript.',
      mod: 'mod2',
      type: 'cheatsheet'
    },
    {
      name: 'git-github-cheatsheet',
      title: 'Git & GitHub Cheatsheet',
      subTitle: 'Common Git Commands and GitHub Workflows',
      excerpt: 'Quick reference for essential Git commands and GitHub workflows.',
      mod: 'mod2',
      type: 'cheatsheet'
    },
    {
      name: 'oop-cheatsheet',
      title: 'OOP Cheatsheet',
      subTitle: 'Object Oriented Programming Concepts',
      excerpt: 'Reference guide for object oriented programming principles and syntax in JavaScript.',
      mod: 'mod2',
      type: 'cheatsheet'
    },
  
    // Module 3 - Async JavaScript & Frontend Frameworks like React
    {
      name: 'async-js-cheatsheet',
      title: 'Asynchronous JavaScript Cheatsheet',
      subTitle: 'Promises, Async/Await, and Callbacks',
      excerpt: 'Quick reference for asynchronous programming in JavaScript, including promises and async/await.',
      mod: 'mod3',
      type: 'cheatsheet'
    },
    {
      name: 'react-basics-cheatsheet',
      title: 'React Basics Cheatsheet',
      subTitle: 'Core React Concepts and Syntax',
      excerpt: 'Reference guide for core React concepts, including components, JSX, and state.',
      mod: 'mod3',
      type: 'cheatsheet'
    },
    {
      name: 'react-router-cheatsheet',
      title: 'React Router Cheatsheet',
      subTitle: 'Routing in React Applications',
      excerpt: 'Quick reference for using React Router for navigation in React applications.',
      mod: 'mod3',
      type: 'cheatsheet'
    },
    {
      name: 'redux-cheatsheet',
      title: 'Redux Cheatsheet',
      subTitle: 'State Management with Redux',
      excerpt: 'Reference guide for managing state in React applications using Redux.',
      mod: 'mod3',
      type: 'cheatsheet'
    },
  
    // Module 4 - Advanced JavaScript, Algorithms & Data Structures, Lambda, Unit Testing, Documentation
    {
      name: 'advanced-js-cheatsheet',
      title: 'Advanced JavaScript Cheatsheet',
      subTitle: 'Closures, Scope, and Execution Context',
      excerpt: 'Quick reference for advanced JavaScript concepts such as closures and execution context.',
      mod: 'mod4',
      type: 'cheatsheet'
    },
    {
      name: 'algorithm-cheatsheet',
      title: 'Algorithm Cheatsheet',
      subTitle: 'Common Algorithms and Their Big O Notations',
      excerpt: 'Reference guide for common algorithms and their time complexities.',
      mod: 'mod4',
      type: 'cheatsheet'
    },
    {
      name: 'data-structures-cheatsheet',
      title: 'Data Structures Cheatsheet',
      subTitle: 'Common Data Structures and Operations',
      excerpt: 'Quick reference for common data structures like arrays, linked lists, and trees.',
      mod: 'mod4',
      type: 'cheatsheet'
    },
    {
      name: 'unit-testing-cheatsheet',
      title: 'Unit Testing Cheatsheet',
      subTitle: 'Writing Unit Tests with Jest',
      excerpt: 'Reference guide for writing unit tests using the Jest framework.',
      mod: 'mod4',
      type: 'cheatsheet'
    },
  
    // Module 5 - Node, Express, MongoDB, Digital Ocean, CRUD, REST, MVC & API Building
    {
      name: 'node-express-cheatsheet',
      title: 'Node.js & Express Cheatsheet',
      subTitle: 'Core Node.js and Express.js Syntax and Functions',
      excerpt: 'Quick reference for building applications using Node.js and Express.js.',
      mod: 'mod5',
      type: 'cheatsheet'
    },
    {
      name: 'mongodb-cheatsheet',
      title: 'MongoDB Cheatsheet',
      subTitle: 'Common MongoDB Commands and Queries',
      excerpt: 'Reference guide for using MongoDB, including common commands and queries.',
      mod: 'mod5',
      type: 'cheatsheet'
    },
    {
      name: 'rest-api-cheatsheet',
      title: 'REST API Cheatsheet',
      subTitle: 'Designing and Building RESTful APIs',
      excerpt: 'Quick reference for designing and building RESTful APIs using Node.js and Express.',
      mod: 'mod5',
      type: 'cheatsheet'
    },
    {
      name: 'deployment-cheatsheet',
      title: 'Deployment Cheatsheet',
      subTitle: 'Deploying Applications with Digital Ocean',
      excerpt: 'Reference guide for deploying applications on Digital Ocean.',
      mod: 'mod5',
      type: 'cheatsheet'
    },
  
    // Module 6 - Full Stack Applications from Development to Deployment with Authentication
    {
      name: 'mern-stack-cheatsheet',
      title: 'MERN Stack Cheatsheet',
      subTitle: 'Building Full Stack Applications with MERN',
      excerpt: 'Quick reference for developing full stack applications using MongoDB, Express, React, and Node.js.',
      mod: 'mod6',
      type: 'cheatsheet'
    },
    {
      name: 'jwt-authentication-cheatsheet',
      title: 'JWT Authentication Cheatsheet',
      subTitle: 'Implementing JWT Authentication',
      excerpt: 'Reference guide for implementing JSON Web Token (JWT) authentication in applications.',
      mod: 'mod6',
      type: 'cheatsheet'
    },
    {
      name: 'nextjs-cheatsheet',
      title: 'Next.js Cheatsheet',
      subTitle: 'Core Next.js Concepts and Functions',
      excerpt: 'Quick reference for building server-side rendered applications using Next.js.',
      mod: 'mod6',
      type: 'cheatsheet'
    },
  
    // Module 7 - System Design Fundamentals
    {
      name: 'system-design-cheatsheet',
      title: 'System Design Cheatsheet',
      subTitle: 'Key Concepts in System Design',
      excerpt: 'Reference guide for understanding key concepts and best practices in system design.',
      mod: 'mod7',
      type: 'cheatsheet'
    },
    {
      name: 'networking-cheatsheet',
      title: 'Networking Cheatsheet',
      subTitle: 'Common Networking Protocols and Models',
      excerpt: 'Quick reference for networking protocols like HTTP, TCP/IP, and the OSI model.',
      mod: 'mod7',
      type: 'cheatsheet'
    },
    {
      name: 'cloud-computing-cheatsheet',
      title: 'Cloud Computing Cheatsheet',
      subTitle: 'Fundamentals of Cloud Computing',
      excerpt: 'Reference guide for cloud computing concepts, including cloud architecture and services.',
      mod: 'mod7',
      type: 'cheatsheet'
    },
  
    // Module 8 - Learning New Programming Languages Quickly & Adapting to New Technologies
    {
      name: 'python-basics-cheatsheet',
      title: 'Python Basics Cheatsheet',
      subTitle: 'Essential Python Syntax and Functions',
      excerpt: 'Quick reference for basic Python syntax and functions.',
      mod: 'mod8',
      type: 'cheatsheet'
    },
    {
      name: 'golang-basics-cheatsheet',
      title: 'GoLang Basics Cheatsheet',
      subTitle: 'Essential GoLang Syntax and Functions',
      excerpt: 'Quick reference for basic GoLang syntax and functions.',
      mod: 'mod8',
      type: 'cheatsheet'
    },
    {
      name: 'php-basics-cheatsheet',
      title: 'PHP Basics Cheatsheet',
      subTitle: 'Essential PHP Syntax and Functions',
      excerpt: 'Quick reference for basic PHP syntax and functions.',
      mod: 'mod8',
      type: 'cheatsheet'
    },
    {
      name: 'ruby-basics-cheatsheet',
      title: 'Ruby Basics Cheatsheet',
      subTitle: 'Essential Ruby Syntax and Functions',
      excerpt: 'Quick reference for basic Ruby syntax and functions.',
      mod: 'mod8',
      type: 'cheatsheet'
    },
  
    // Module 9 - Generative AI, CI/CD, Automation Tools
    {
      name: 'generative-ai-cheatsheet',
      title: 'Generative AI Cheatsheet',
      subTitle: 'Core Concepts in Generative AI',
      excerpt: 'Quick reference for understanding generative AI and its applications.',
      mod: 'mod9',
      type: 'cheatsheet'
    },
    {
      name: 'cicd-cheatsheet',
      title: 'CI/CD Cheatsheet',
      subTitle: 'Continuous Integration and Delivery',
      excerpt: 'Reference guide for setting up and managing CI/CD pipelines.',
      mod: 'mod9',
      type: 'cheatsheet'
    },
    {
      name: 'automation-tools-cheatsheet',
      title: 'Automation Tools Cheatsheet',
      subTitle: 'Popular Automation Tools and Their Uses',
      excerpt: 'Quick reference for popular automation tools and their applications.',
      mod: 'mod9',
      type: 'cheatsheet'
    },
  
    // Module 10 - Career Growth & Development
    {
      name: 'tech-interview-cheatsheet',
      title: 'Tech Interview Cheatsheet',
      subTitle: 'Preparing for Technical Interviews',
      excerpt: 'Quick reference for preparing and excelling in technical interviews.',
      mod: 'mod10',
      type: 'cheatsheet'
    },
    {
      name: 'resume-cheatsheet',
      title: 'Resume Cheatsheet',
      subTitle: 'Crafting an Effective Tech Resume',
      excerpt: 'Reference guide for writing a strong resume for tech jobs.',
      mod: 'mod10',
      type: 'cheatsheet'
    },
    {
      name: 'linkedin-cheatsheet',
      title: 'LinkedIn Optimization Cheatsheet',
      subTitle: 'Enhancing Your LinkedIn Profile',
      excerpt: 'Quick reference for optimizing your LinkedIn profile for better visibility and networking.',
      mod: 'mod10',
      type: 'cheatsheet'
    }
  ];
  
cheatsheets.forEach(makeFile)   