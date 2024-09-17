import renderHomeNav from "./HomeNav.js";

export default function renderHomepage(data) {
  const main = document.querySelector("main");

  const descriptionHTML = `
            <section class="home">
            <div class="home-content">
                <h1 class="title">Welcome to Our Website!</h1>
                <div class="text-animate">
                    <h3>Chart your academic journey at Boston College</h3>
                    <span class="animate" style="--i:3;"></span>
                </div>
            </div>
        </section>`;

  // About us and our goal section
  const aboutUsHTML = `
        <section class="about-us">
            <h2 class="title">About Us</h2>
            <p>Our mission is to provide accessible, high-quality educational resources that empower students to plan and achieve their academic goals effectively.</p>
        </section>`;

  // 2x2 Grid section

  main.innerHTML = descriptionHTML + aboutUsHTML + renderHomeNav();
}
