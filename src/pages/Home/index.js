import React from 'react'

import LectureCard from '../../components/LectureCard';

import styles from './course-content-display.module.scss';


export default function Home ({ data, location }) {

   const lessons = [
    {
        key: 'Mod 1',
        slug: '/mod1',
        title: 'Module 1 - HTML, CSS, Wireframing & PSD/Figma to HTML',
        topics: 'Learn the basics of front-end development including HTML and CSS. Gain skills in wireframing and converting PSD designs to HTML.'
      },
      {
        key: 'Mod 2',
        slug: '/mod2',
        title: 'Module 2 - Basic JavaScript, OOP & DOM Manipulation, Git, Github & Version Control',
        topics: 'Skills Developed: Master JavaScript fundamentals, grasp object-oriented programming, and manage code with Git and GitHub.'
      },
      {
        key: 'Mod 3',
        slug: '/mod3',
        title: 'Module 3 - Async JavaScript & Frontend Frameworks like React',
        topics: 'Skills Developed: Dive into asynchronous JavaScript and the powerful React framework to create dynamic single-page applications.'
      },
      {
        key: 'Mod 4',
        slug: '/mod4',
        title: 'Module 4 - Advanced JavaScript, Algorithms & Data Structures, Lambda, Unit Testing, Documentation',
        topics: 'Skills Developed: Enhance your JavaScript expertise with advanced algorithms, data structures, lambda expressions, unit testing, and documentation.'
      },
      {
        key: 'Mod 5',
        slug: '/mod5',
        title: 'Module 5 - Node, Express, MongoDB, Digital Ocean, CRUD, REST, MVC & API Building',
        topics: 'Skills Developed: Learn back-end development using Node.js and Express, manage databases with MongoDB, and deploy applications using Digital Ocean.'
      },
      {
        key: 'Mod 6',
        slug: '/mod6',
        title: 'Module 6 - Full Stack Applications from Development to Deployment with Authentication',
        topics: 'Skills Developed: Become proficient in full stack development, integrating front-end and back-end technologies with user authentication.'
      },
      {
        key: 'Mod 7',
        slug: '/mod7',
        title: 'Module 7 - System Design Fundamentals',
        topics: 'Skills Developed: Understand the fundamentals of system design, focusing on scalability, efficiency, and reliability.'
      },
      {
        key: 'Mod 8',
        slug: '/mod8',
        title: 'Module 8 - Learning New Programming Languages Quickly & Adapting to New Technologies',
        topics: 'Skills Developed: Equip yourself with strategies to learn new programming languages and adapt to technological changes rapidly.'
      },
      {
        key: 'Mod 9',
        slug: '/mod9',
        title: 'Module 9 - Generative AI, CI/CD, Automation Tools',
        topics: 'Skills Developed: Explore the cutting-edge fields of generative AI and automation, and implement continuous integration and continuous delivery (CI/CD) processes.'
      },
      {
        key: 'Mod 10',
        slug: '/mod10',
        title: 'Module 10 - Career Growth & Development',
        topics: 'Skills Developed: Prepare for the tech job market with insights into finding a job, freelancing, starting a business, and contracting.'
      }
   ].map((node, id) => (
     <LectureCard
       key={node.key}
       slug={node.slug}
       title={node.title}
       topics={node.topics}
     />
   ))




    return (
        <div>
            <h1>Code Come Up Accelerator</h1>
            <center>
              <div>
                <a href="#">
                  Course Schedule and Important Links
                </a>
              </div>
            </center>
            <main className={styles.main}>
            <LectureCard
                slug={'/prework'}
                title={'Core Concept Review'}
                topics={'The Web, HTML, CSS, JS and Software Engineer Levels & Adjacent Careers where Coding Knowledge is Helpful '}
            />
            <LectureCard
                slug={'/cheatsheets'}
                title={'Cheatsheet'}
                topics={'Cheatsheet for all units'}
            />
            <LectureCard
                slug={'/hw'}
                title={'Homework Links'}
                topics={'Homework for all units'}
              />
              <LectureCard
                slug={'/projects'}
                title={'Project Links'}
                topics={'Core Projects and Advanced Projects'}
              />
              {lessons}
            </main>
        </div>
    );
}


