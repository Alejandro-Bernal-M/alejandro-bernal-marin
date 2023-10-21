import spaceImage from './project_images/spacex.jpg';
import portfolioKen from './project_images/ken.jpg';
import myCurrency from './project_images/myCurrency.jpg';
import mathImage from './project_images/math.jpg';
// import todoImage from './project_images/to-do-list-mobile.jpg';
import myExpenses from './project_images/my-expenses.jpg';
import roadTrip from './project_images/roadtripWheels.png'
import ecoBalance from './project_images/EcoBalance.png'
import Directorio from './project_images/Directorio.png'
import TaskManager from './project_images/TaskManager.png'

const arrayOfProjects = [
    {
        name: "EcoBalance",
        description: "EcoBalance is a web application made with Next.js, using NextAuth for user authentication and MongoDB as a database, this app allows you to register your home services invoices and keep track of your consumption by establishing alerts.",
        tools: ['MongoDB', 'NextAuth.js', 'Next JS', "Redux"],
        image: ecoBalance,
        gitLink: 'https://github.com/Alejandro-Bernal-M/ecobalance',
        liveLink: 'https://drive.google.com/file/d/15OIjvHC2GuCgw9ZIZVTT6Z4hLj3M0I1H/view?usp=share_link',
    },
    {
        name: "Group Directory",
        description: "Group Directory is a web application where you can register as a regular user or group director, as a regular user you can create your profile including a profile photo, fill in your information, and send the request to a group, as group director you can choose a plan, pay for it using PayPal, create your customized groups, choosing a banner and color, check for requests and manage members. The regular users and group directors can check the group directory to look at all the people that are in the group, check the profession, job place, job, and responsibilities, and filter by these qualities.",
        tools: ['Rails', 'PostgreSQL', 'Devise', 'Cloudinary'],
        image: Directorio,
        gitLink: 'https://github.com/Alejandro-Bernal-M/Directorio',
        liveLink: 'https://drive.google.com/file/d/1moHxmG0dzAgSGwNvyKk6KbO4AiFITFE5/view',
    },
    {
        name: "Task Manager",
        description: "Task-manager Task-manager is a web application where you can create a user, create groups, and subgroups, invite other users to your subgroups, create tasks for your subgroups, and assign the task to other users.",
        tools: ['Rails', 'PostgreSQL', 'Next JS', 'JWT'],
        image: TaskManager,
        gitLink: 'https://github.com/Alejandro-Bernal-M/task-manager-front',
        liveLink: 'https://drive.google.com/file/d/19J0cQQHUXHIvXAquVEFM32f6kA-URRFd/view?usp=share_link',
    },
    {
        name: "RoadTrip Wheels",
        description: "The Roadtrip Wheels is a web application, there, you can register, add and delete cars, make a reservation on a car, and check your reservations.",
        tools: ['Rails', 'PostgreSQL', 'Next JS'],
        image: roadTrip,
        gitLink: 'https://github.com/shayan1234554321/RoadTrip-Wheels',
        liveLink: 'https://drive.google.com/file/d/1LSAFNPE0Op-rVWycgWf0R3GH_S783bba/view?usp=sharing',
    },
    {
        name: "My expenses",
        description: "My expenses is a web application where you can create an user and track your expenses divided by category.",
        tools: ['Ruby', 'Rails', 'PostgreSQL', 'CSS'],
        image: myExpenses,
        gitLink: 'https://github.com/Alejandro-Bernal-M/my-expenses',
        liveLink: 'https://drive.google.com/file/d/14Fuql5Ik1BFm0BVYabqlMuGIk1dwac3n/view?usp=sharing',
    },
    {
        name: "Space X travelers",
        description: "Space X travelers is a project where we used the data from the Space X API and we implemented the functionality for booking rockets and join to missions. Made with React and Redux.",
        tools: ['React', 'Redux', 'SPA', 'CSS'],
        image: spaceImage,
        gitLink: 'https://github.com/Alejandro-Bernal-M/Space-X-travelers',
        liveLink: 'https://space-x-travelers.onrender.com/',
    },
    {
        name: "Portfolio for dancers",
        description: "This is a portfolio made for a couple of Colombian dancers who live in Spain. The porfolio is made with Next js, it is responsive.",
        tools: ['Next js', 'SPA'],
        image: portfolioKen,
        gitLink: 'https://github.com/Alejandro-Bernal-M/portafolio-ken-y-juli',
        liveLink: 'https://portafolio-ken-y-juli.vercel.app/',
    },
    {
        name: 'My currency',
        description: "My currency it's a web application where you can check the comparison between a certain amount of USD and other currencies. You can also check every currency and see the comparison of that one with the others, you can also filter directly for a specific currency.",
        tools: ['React', 'Redux', 'SPA'],
        image: myCurrency,
        gitLink: 'https://github.com/Alejandro-Bernal-M/my-currency',
        liveLink: 'https://my-currency.onrender.com/',
    },
    // {
    //     name: "Math magicians",
    //     description: "A wep app, build as SPA with react router where you can use the calculator and see quotes from an API, made with React.",
    //     tools: ['React', 'SPA', 'CSS'],
    //     image: mathImage,
    //     gitLink: 'https://github.com/Alejandro-Bernal-M/Math.Magicians',
    //     liveLink: 'https://math-magicians-havp.onrender.com/',
    // }
    // {
    //     name: "To Do's list",
    //     description: "To Do's list is a web page where you can add tasks that you need to do, edit the task, check the task when is done, clear all the tasks that are completed and drag the task to change the order. ",
    //     tools: ['HTML5', 'CSS', 'JavaScript'],
    //     image: todoImage,
    //     gitLink: 'https://github.com/Alejandro-Bernal-M/To-do-list',
    //     liveLink: 'https://alejandro-bernal-m.github.io/To-do-list/',
    // }
  ];  
  export default arrayOfProjects;
