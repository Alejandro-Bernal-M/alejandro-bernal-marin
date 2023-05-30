import spaceImage from './project_images/spacex.jpg';
import todoImage from './project_images/to-do-list-mobile.jpg';
import mathImage from './project_images/math.jpg';
import myCurrency from './project_images/myCurrency.jpg';
import yourCar from './project_images/yourCar.jpg';
import conference from './project_images/conference.jpg';
import school from './project_images/school.jpg';

const arrayOfProjects = [
    {
        id: 1,
        name: "Space X travelers",
        description: "Space X travelers is a project where we used the data from the Space X API and we implemented the functionality for booking rockets and join to missions. Made with React and Redux.",
        tools: ['React', 'Redux', 'SPA', 'CSS'],
        image: spaceImage,
        gitLink: 'https://github.com/Alejandro-Bernal-M/Space-X-travelers',
        liveLink: 'https://space-x-travelers.onrender.com/',
    },
    {
        id: 2,
        name: "Math magicians",
        description: "A wep app, build as SPA with react router where you can use the calculator and see quotes from an API, made with React.",
        tools: ['React', 'SPA', 'CSS'],
        image: mathImage,
        gitLink: 'https://github.com/Alejandro-Bernal-M/Math.Magicians',
        liveLink: 'https://math-magicians-havp.onrender.com/',
    },
    {
        id: 3,
        name: 'My currency',
        description: "My currency it's a web application where you can check the comparison between a certain amount of USD and other currencies. You can also check every currency and see the comparison of that one with the others, you can also filter directly for a specific currency",
        tools: ['React', 'Redux', 'SPA'],
        image: myCurrency,
        gitLink: 'https://github.com/Alejandro-Bernal-M/my-currency',
        liveLink: 'https://my-currency.onrender.com/',
    },
    {
        id: 4,
        name: "To Do's list",
        description: "To Do's list is a web page where you can add tasks that you need to do, edit the task, check the task when is done, clear all the tasks that are completed and drag the task to change the order. ",
        tools: ['HTML5', 'CSS', 'JavaScript'],
        image: todoImage,
        gitLink: 'https://github.com/Alejandro-Bernal-M/To-do-list',
        liveLink: 'https://alejandro-bernal-m.github.io/To-do-list/',
    },
    {
        id: 5,
        name: "Your new car",
        description: "It's a webpage Where you can interact giving likes and comments using an API and see the data retrieved from another API and see the information of the cars. Made with Webpack. ",
        tools: ['Webpack', 'CSS'],
        image: yourCar,
        gitLink: 'https://github.com/Alejandro-Bernal-M/API-based-project',
        liveLink: 'https://alejandro-bernal-m.github.io/API-based-project/',
    },
    {
        id: 6,
        name: "Conference page",
        description: "It's a project where I did a conference page based on guidelines provides by microverse for the final project of the first module. I implemented the home and about pages with desktop and mobile version using HTML and CSS and with functionality using JavaScript.",
        tools: ['HTML5', 'CSS', 'JavaScript'],
        image: conference,
        gitLink: 'https://github.com/Alejandro-Bernal-M/Conference-page',
        liveLink: 'https://alejandro-bernal-m.github.io/Conference-page/',
    },
    {
        id: 7,
        name: "School Library",
        description: "school Library OOP is a project made with ruby where you have a tool to record what books are in the library and who borrows them. The app allow you to: Add new students or teachers. Add new books. Save records of who borrowed a given book and when. And all of this in a beautiful and well-organized way!",
        tools: ['RUBY', 'OOP'],
        image: school,
        gitLink: 'https://github.com/Alejandro-Bernal-M/school_library',
        liveLink: 'https://github.com/Alejandro-Bernal-M/school_library',
    },
  ];  
  export default arrayOfProjects;
