export default function renderResources(resources) {
  const main = document.querySelector("main");

  main.innerHTML = `
    <section class="resources">
      <h3>Resources</h3>
      ${resources
        .map(
          (resource, index) => `
        <div class="option">
          <button type="button" class="collapsible" data-index="${index}">
            ${resource.name}
          </button>
          <div class="resource-content hidden" id="content-${index}">
            <p>${resource.expand.description}</p>
            <p class=resource-link><a href="${resource.expand.link}" target="_blank"><button type="button" class="btn btn-link">${resource.expand.clickme}</button></a></p>
            <a href=${resource.expand.link} target="_blank">
            <img src="${resource.expand.previewimage}" alt="Preview image" width="50%"/>
            </a>
          </div>
        </div>
      `
        )
        .join("")}
    </section>`;

  collapseSections();
}

function collapseSections() {
  const buttons = document.querySelectorAll(".collapsible");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const index = this.getAttribute("data-index");
      const content = document.getElementById(`content-${index}`);
      content.classList.toggle("hidden");
    });
  });
}
