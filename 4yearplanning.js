export default function FourYearPlanning(data) {
  
  //Sort majors
  const majors = data.majors.slice().sort((a, b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
  
  //Render page
  const main = document.querySelector("main");
  
  main.innerHTML = `
  <div class="grid-container">
    <div class="header">
        <h1> Four Year Plan</h1>
        <button id="useExistingPlan">Use existing plan</button>
        <!--
        <h2> Four Year Plan</h2>
        <p id="description" style="text-align: left;color:black;"><button>Use existing plan</button></p>
        -->
    </div>
    <div class="leftside">
      <h3>Major/Minor/Core Information</h3>
      <div class="search">
          <input type="search" name='majors' placeholder="Search majors...">
      </div>
      <div class="majorslist">
      ${majors
        .map(
          (major, index) => renderMajor(major, index)
        )
        .join("")}
      </div>
    </div>
    <div class="rightside">
        <iframe id="Plan Sheet" 
        src="https://docs.google.com/spreadsheets/d/1nJHoeZj6VwCIvnUE85JmEaj7v1Q7Fw5RbMqKk2M1JI0/edit?usp=sharing" 
        width="100%" height="600" frameborder="0" allowfullscreen>
        </iframe>
        <button id="shareWithAdvisor">Share with an advisor</button>
    </div>
  </div>`;

  collapseSections();

  document.getElementById("useExistingPlan").addEventListener("click", getUsersPlan);
  document.getElementById("shareWithAdvisor").addEventListener("click", shareWithAdvisor);
}

export function collapseSections() {
  const buttons = document.querySelectorAll(".collapsible");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const index = this.getAttribute("data-index");
      const content = document.getElementById(`content-${index}`);
      content.classList.toggle("hidden");
    });
  });
}

let sheet = localStorage.getItem("userSheet") || "https://docs.google.com/spreadsheets/d/1nJHoeZj6VwCIvnUE85JmEaj7v1Q7Fw5RbMqKk2M1JI0/edit?usp=sharing";

function getUsersPlan(){
  sheet = prompt("Enter link: ");
  document.getElementById("Plan Sheet").src = sheet;
  localStorage.setItem("userSheet", sheet);
}

function shareWithAdvisor(){
  let target_URL = "https://docs.google.com/forms/d/e/1FAIpQLSefNj2hvxLvh6Ln3DzEUYqUwKnZRWDXMi9nURZzYurHmZ2lKg/viewform?usp=pp_url&entry.1676907438=";

  sheet = localStorage.getItem("userSheet");
  
  if (sheet === "https://docs.google.com/spreadsheets/d/1nJHoeZj6VwCIvnUE85JmEaj7v1Q7Fw5RbMqKk2M1JI0/edit?usp=sharing" || sheet === null){
    sheet = prompt("Enter your four-year plan sharing link here: ");
  }
  if (sheet!=null){
    target_URL += sheet;
    window.open(target_URL, "_blank");
  }
}

export function renderMajor(major,index){
  return `<div class="option">
          <button type="button" class="collapsible" data-index="${index}">
            ${major.name}
          </button>
          <div class="major-content hidden" id="content-${index}">
            <h4>${major.name}</h4>
            <p>School: ${major.expand.school}</p>
            <p class="major-link">Requirements page:  <a href="${major.expand.reqslink}" target="_blank"><button type="button" class="btn btn-link">external link</button></a></p>
            <p>Requirements (copy-paste these into your plan):</p>
            <ul>
            ${major.expand.requirements.map(p => 
              p.prerequisites.length===0?
              `<li> ${p.title}</li>`
              :
              `<li> ${p.title} (prq: ${p.prerequisites.map(pq => `${pq}`).join(", ")})</li>`
            ).join("<br/>")}
            </ul>
          </div>
        </div>`
}
