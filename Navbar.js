export default function renderNavbar() {
  const nav = document.querySelector("nav");
  nav.innerHTML = `<nav class="navigation-bar">
    <img class="image" src="https://cdn.glitch.global/f0d12085-1ba6-4cb9-a5e5-4a6e1bf88f1b/Oen.png?v=1713846526977" alt="logo">
    <button id="menu-toggle">Menu</button>
    <ul>
      <li>
        <a href="?page=Home">
          <button type="button" class="btn btn-link">
            <p class="link">Home</p>
          </button>
        </a>
      </li>
      <li>
        <a href="?page=FourYearPlan">
          <button type="button" class="btn btn-link">
            <p class="link">Four Year Plan</p>
          </button>
        </a>
      </li>
      <li>
        <a href="?page=SamplePlans">
          <button type="button" class="btn btn-link">
            <p class="link">Sample Plans</p>
          </button>
        </a>
      </li>
      <li>
        <a href="?page=Forum">
          <button type="button" class="btn btn-link">
            <p class="link">Forum</p>
          </button>
        </a>
      </li>
      <li>
        <a href="?page=Resources">
          <button type="button" class="btn btn-link">
            <p class="link">Resources</p>
          </button>
        </a>
      </li>
    </ul>
  </nav>`;

  const menuToggle = document.getElementById("menu-toggle");
  const navbar = document.querySelector(".navigation-bar");

  menuToggle.addEventListener("click", function () {
    navbar.classList.toggle("collapsible");
  });
}

/*
  
  <nav class="navigation-bar">
        <ul>
          <li><a href="?page=Home">Home</a></li>
          <li><a href="?page=FourYearPlan">Four Year Plan</a></li>
          <li><a href="?page=SamplePlans">Sample Plans</a></li>
          <li><a href="?page=Forum">Forum</a></li>
          <li><a href="?page=Resources">Resources</a></li>
        </ul>
      </nav>
  */
