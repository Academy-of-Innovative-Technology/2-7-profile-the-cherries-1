/* Use the profile below */

var profile = {
    bio: {
        first: "Peter",
        last: "Parker",
        title: "Friendly Neighborhood Spider Man",
        about: "He's spiderman, normal boy from queens turned hero from a spider bite. He saves the city often."
    }, 

    social: [
        { facebook: "@spiderman"},
        { X: "Spider-Man" },
        { youtube: "N/A" },
        { linkedIn: "N/A" }
    ],
    edu: {
        name: "Midtown High",
        major: "Science"
    },
    career: {
        company: "The Daily Bugle",
        title: "Freelance Photographer",
        role: "photographer"
    },

    skills: [
        { title: "web-shooting", level: 100 },
        { title: "Spidey Sense", level: 100 },
        { title: "Fighting Skills", level: 1000 }
    ]
};

const img = document.querySelector("#profile-img");
const nameEl = document.querySelector("#profile-name");
const titleEl = document.querySelector("#profile-title");
const contactEl = document.querySelector("#profile-contact");
const socialEl = document.querySelector("#social-links");
const aboutEl = document.querySelector("#about-text");
const skillsEl = document.querySelector("#skills-section");