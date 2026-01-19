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

var profile = {
    bio: {
        first: "Miguel",
        last: "O'hara",
        title: "Spider-Man 2099",
        about: "He's the spiderman of the future, working as a geneticist at Alchemax, one day he is drugged and mutated to become a superhuman. He hides his identity from everyone while accidentally fighting crime."
    }, 

    social: [
        { facebook: "N/A"},
        { X: "N/A" },
        { youtube: "N/A" },
        { linkedIn: "N/A" }
    ],
    edu: {
        name: "Tyler Stone's school",
        major: "Science"
    },
    career: {
        company: "Alchemax",
        title: "Head Geneticist",
        role: "geneticist"
    },

    skills: [
        { title: "web-shooting", level: 50 },
        { title: "claws", level: 20 },
        { title: "Fighting Skills", level: 70 }
    ]
};

const img = document.querySelector("#profile-img");
const nameEl = document.querySelector("#profile-name");
const titleEl = document.querySelector("#profile-title");
const contactEl = document.querySelector("#profile-contact");
const socialEl = document.querySelector("#social-links");
const aboutEl = document.querySelector("#about-text");
const skillsEl = document.querySelector("#skills-section");

function loadProfile(profile) {
   
    nameEl.innerText = `${profile.bio.first} ${profile.bio.last}`;
    titleEl.innerText = profile.bio.title;


    aboutEl.innerText = profile.bio.about;


    contactEl.innerHTML = `
        <li><i class="fas fa-building me-2"></i>${profile.career.company}</li>
        <li><i class="fas fa-user-tie me-2"></i>${profile.career.title}</li>
        <li><i class="fas fa-graduation-cap me-2"></i>${profile.edu.name} - ${profile.edu.major}</li>
    `;


    socialEl.innerHTML = "";
    profile.social.forEach(s => {
        // Extract key and value dynamically
        const key = Object.keys(s)[0];
        const value = s[key];

      

        let iconClass = "";
        if(key.toLowerCase() === "facebook") iconClass = "fab fa-facebook-f";
        else if(key.toLowerCase() === "x") iconClass = "fab fa-twitter";
        else if(key.toLowerCase() === "youtube") iconClass = "fab fa-youtube";
        else if(key.toLowerCase() === "linkedin") iconClass = "fab fa-linkedin-in";
        else iconClass = "fas fa-user";

        socialEl.insertAdjacentHTML("beforeend", `
            <li>
                <a href="#" class="rounded-3" title="${value}">
                    <i class="${iconClass}"></i>
                </a>
            </li>
        `);
    });

    img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRerHSOQ3Gom42y77GBdDDdnX7Ps9bxpyXb9g&s"; 

    skillsEl.innerHTML = "";
    profile.skills.forEach(skill => {
        skillsEl.insertAdjacentHTML("beforeend", `
            <div class="mb-3 skill-bar">
                <div class="d-flex justify-content-between">
                    <strong>${skill.title}</strong>
                    <span>${skill.level}%</span>
                </div>
                <input type="range" min="0" max="100" value="0" class="form-range">
            </div>
        `);
    });

    animate(profile.skills);
    addHoverEffects();
}

function animate(skills) {
    const ranges = document.querySelectorAll(".form-range");
    ranges.forEach((range, index) => {
        let current = 0;
        let target = skills[index].level;
        if(target > 100) target = 100; // cap at 100

        const interval = setInterval(() => {
            current++;
            range.value = current;
            if(current >= target) clearInterval(interval);
        }, 10);
    });
}
loadProfile(profile);