import renderNavbar from "./Navbar.js";
import renderHomeNav from "./HomeNav.js";
import renderHomepage from "./Homepage.js";
import renderSamplePlans from "./SamplePlans.js";
import render4yearplanning,{renderMajor, collapseSections} from "./4yearplanning.js";
import renderForum from "./Forum.js";
import renderResources from "./Resources.js";

fetch("data.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const urlParams = new URLSearchParams(window.location.search);
    const page = urlParams.get("page") || "home";
    renderNavbar(data.homepage);
    renderHomepage(data);
    if (page !== "Home") {
      if (page === "FourYearPlan") {
        render4yearplanning(data.fouryearplanning);
        
        //Filter majors list by search input
        const search = document.querySelector('.search');
        search.addEventListener("input", e=>{
          const filtered = data.fouryearplanning.majors.filter(major => major.name.toLowerCase().includes(e.target.value.toLowerCase()));
          const list = document.querySelector(".majorslist");
          list.innerHTML = filtered.map((major,index) => renderMajor(major,index)).join("");
          collapseSections();
        });
        
      } else if (page === "SamplePlans") {
        renderSamplePlans(data.samplePlans);
      } else if (page === "Forum") {
        renderForum(data.Forum);
      } else if (page === "Resources") {
        renderResources(data.resources);
      }
    }
  });
