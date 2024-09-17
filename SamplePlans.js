export default function SamplePlans(sample) {
  const main = document.querySelector("main");

  main.innerHTML = `
        <section class="sample-plans">
            <h3>Sample Academic Plans</h3>
            ${sample
              .map(
                (plan, index) => `
                <div class="plan">
                    <button type="button" class="collapsible" data-index="${index}">
                            ${plan.details
                              .map(
                                (detail) => `
                            <p>${
                              detail.major
                                ? "Major: " + detail.major + ". "
                                : ""
                            }${
                                  detail.minor
                                    ? "Minor: " + detail.minor + ". "
                                    : ""
                                }${
                                  detail.track
                                    ? "Track: " + detail.track + ". "
                                    : ""
                                }
                    </button>
                    <div class="plan-content hidden" id="content-${index}">
                            <a href="${
                              detail.link
                            }" target="_blank">View plan in new tab</a></p>
                            <iframe src="${
                              detail.link
                            }" width="100%" height="600" frameborder="0" allowfullscreen></iframe>
                        `
                              )
                              .join("")}
                    </div>
                </div>
            `
              )
              .join("")}
        </section>`;

  activateCollapsibles();
}
//iframe + width and height + literally show the google spreadsheet on our website.

function activateCollapsibles() {
  const buttons = document.querySelectorAll(".collapsible");
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const index = this.getAttribute("data-index");
      const content = document.getElementById(`content-${index}`);
      content.classList.toggle("hidden");
    });
  });
}
