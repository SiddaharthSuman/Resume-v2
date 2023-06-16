let sections = {
  heading: "heading",
  objective: "objective",
  "academic-qualification": "academic-qualification",
  "academic-projects": "academic-projects",
  "work-experience": "work-experience",
  "technical-skills": "technical-skills",
  internships: "internships",
  "additional-courses": "additional-courses",
  achievements: "achievements",
  "leadership-roles": "leadership-roles",
  "community-involvement": "community-involvement",
};
const entries = Object.entries(sections);

entries.forEach(async ([key, value]) => {
  const element = document.getElementById(key);
  const html = await fetch(`sections/${value}.html`);
  if (html.status === 200) {
    const content = await html.text();
    element.insertAdjacentHTML("afterbegin", content);
  }
});
