// Sample job data
const jobData = [
    {
        title: "Frontend Developer",
        company: "Tech Innovations Inc.",
        location: "Remote",
        type: "Full-time",
        salary: "$85,000 - $110,000",
        match: 92,
        skills: ["JavaScript", "React", "HTML", "CSS", "TypeScript"],
        description: "We are looking for a skilled Frontend Developer to join our team. You will be responsible for building user interfaces and implementing visual elements that users see and interact with in web applications."
    },
    {
        title: "UX/UI Designer",
        company: "Creative Solutions LLC",
        location: "San Francisco, CA",
        type: "Full-time",
        salary: "$75,000 - $95,000",
        match: 87,
        skills: ["Figma", "UI Design", "User Research", "Wireframing", "Prototyping"],
        description: "Join our design team to create beautiful and functional user interfaces. You'll collaborate with product managers and engineers to deliver exceptional user experiences."
    },
    {
        title: "Data Scientist",
        company: "Data Insights Corp",
        location: "New York, NY",
        type: "Full-time",
        salary: "$100,000 - $130,000",
        match: 78,
        skills: ["Python", "Machine Learning", "SQL", "Data Visualization", "Statistics"],
        description: "We're seeking a Data Scientist to analyze complex data sets and build predictive models. You'll work with cross-functional teams to drive data-informed decisions."
    },
    {
        title: "Product Manager",
        company: "InnovateTech",
        location: "Austin, TX",
        type: "Full-time",
        salary: "$90,000 - $120,000",
        match: 85,
        skills: ["Product Strategy", "Agile", "User Stories", "Market Research", "Roadmapping"],
        description: "As a Product Manager, you will guide the development of our products from conception to launch. You'll work with engineering, design, and marketing teams to deliver value to our customers."
    },
    {
        title: "DevOps Engineer",
        company: "Cloud Systems Ltd",
        location: "Remote",
        type: "Full-time",
        salary: "$95,000 - $125,000",
        match: 80,
        skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform"],
        description: "We're looking for a DevOps Engineer to help us build and maintain our cloud infrastructure. You'll implement automation tools and ensure system reliability."
    }
];

// DOM elements
const skillInput = document.getElementById('skill-input');
const addSkillBtn = document.getElementById('add-skill');
const skillTags = document.getElementById('skill-tags');
const findJobsBtn = document.getElementById('find-jobs');
const jobResults = document.getElementById('job-results');
const noJobsMessage = document.getElementById('no-jobs-message');

// User skills array
let userSkills = [];

// Add skill function
addSkillBtn.addEventListener('click', () => {
    const skill = skillInput.value.trim();
    if (skill && !userSkills.includes(skill)) {
        userSkills.push(skill);
        updateSkillTags();
        skillInput.value = '';
    }
});

// Also add skill on Enter key
skillInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addSkillBtn.click();
    }
});

// Update skill tags display
function updateSkillTags() {
    skillTags.innerHTML = '';
    userSkills.forEach(skill => {
        const tag = document.createElement('div');
        tag.className = 'skill-tag';
        tag.innerHTML = `${skill} <span class="remove" data-skill="${skill}">&times;</span>`;
        skillTags.appendChild(tag);
    });
    
    // Add event listeners to remove buttons
    document.querySelectorAll('.skill-tag .remove').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const skillToRemove = e.target.getAttribute('data-skill');
            userSkills = userSkills.filter(skill => skill !== skillToRemove);
            updateSkillTags();
        });
    });
}

// Find matching jobs
findJobsBtn.addEventListener('click', () => {
    const experience = document.getElementById('experience').value;
    const education = document.getElementById('education').value;
    const industry = document.getElementById('industry').value;
    const location = document.getElementById('location').value;
    
    // In a real application, you would send this data to a server
    // For this demo, we'll simulate matching with our sample data
    
    // Calculate match score for each job based on skills
    const matchedJobs = jobData.map(job => {
        // Calculate skill match percentage
        const matchedSkills = job.skills.filter(skill => 
            userSkills.some(userSkill => 
                userSkill.toLowerCase().includes(skill.toLowerCase()) || 
                skill.toLowerCase().includes(userSkill.toLowerCase())
            ));
        
        const matchScore = Math.min(100, Math.floor((matchedSkills.length / job.skills.length) * 100));
        
        return {
            ...job,
            match: matchScore
        };
    }).filter(job => job.match >= 70) // Only show jobs with at least 70% match
        .sort((a, b) => b.match - a.match); // Sort by match score descending
    
    displayJobs(matchedJobs);
});

// Display matched jobs
function displayJobs(jobs) {
    if (jobs.length === 0) {
        noJobsMessage.textContent = 'No matching jobs found. Try adjusting your skills or preferences.';
        noJobsMessage.style.display = 'block';
        jobResults.innerHTML = '';
        return;
    }
    
    noJobsMessage.style.display = 'none';
    jobResults.innerHTML = '';
    
    jobs.forEach(job => {
        const jobCard = document.createElement('div');
        jobCard.className = 'job-card';
        
        jobCard.innerHTML = `
            <div class="job-card-header">
                <div>
                    <h3 class="job-title">${job.title}</h3>
                    <p class="company">${job.company}</p>
                </div>
                <div class="job-match">${job.match}% Match</div>
            </div>
            <div class="job-details">
                <div class="job-detail">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>${job.location}</span>
                </div>
                <div class="job-detail">
                    <i class="fas fa-briefcase"></i>
                    <span>${job.type}</span>
                </div>
                <div class="job-detail">
                    <i class="fas fa-dollar-sign"></i>
                    <span>${job.salary}</span>
                </div>
            </div>
            <p>${job.description}</p>
            <div class="job-skills">
                ${job.skills.map(skill => `<span class="job-skill">${skill}</span>`).join('')}
            </div>
            <div class="job-actions">
                <button class="apply-btn">Apply Now</button>
                <button class="save-btn">Save for Later</button>
            </div>
        `;
        
        jobResults.appendChild(jobCard);
    });
}