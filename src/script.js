const allCardContainer = document.getElementById("all-card-container");
const interviewContainer = document.getElementById("interview-card-container");
const rejectedContainer = document.getElementById("rejected-card-container");
const jobsCountLabel = document.getElementById("8-jobs-count");

let activeTab = "all";

document.getElementById("all-btn").addEventListener("click", function () {
  activeTab = "all";
  const rejectedBtn = document.getElementById("rejected-btn");
  rejectedBtn.style.backgroundColor = "#ffffff";
  rejectedBtn.style.color = "#000000";

  const interviewBtn = document.getElementById("interview-btn");
  interviewBtn.style.backgroundColor = "#ffffff";
  interviewBtn.style.color = "#000000";

  const allbtn = document.getElementById("all-btn");
  allbtn.style.backgroundColor = "#3b82f6FF";
  allbtn.style.color = "#ffffff";

  document.getElementById("card-section").classList.remove("hidden");
  document.getElementById("interview-section").classList.add("hidden");
  document.getElementById("rejected-section").classList.add("hidden");

  updateBoardState();
});

document.getElementById("interview-btn").addEventListener("click", function () {
  activeTab = "interview";
  document.getElementById("card-section").classList.add("hidden");
  document.getElementById("interview-section").classList.remove("hidden");
  document.getElementById("rejected-section").classList.add("hidden");

  const interviewBtn = document.getElementById("interview-btn");
  interviewBtn.style.backgroundColor = "#10b981FF";
  interviewBtn.style.color = "#ffffff";

  const allBtn = document.getElementById("all-btn");
  allBtn.style.backgroundColor = "#ffffff";
  allBtn.style.color = "#000000";

  const rejectedBtn = document.getElementById("rejected-btn");
  rejectedBtn.style.backgroundColor = "#ffffff";
  rejectedBtn.style.color = "#000000";

  updateBoardState();
});

document.getElementById("rejected-btn").addEventListener("click", function () {
  activeTab = "rejected";
  document.getElementById("card-section").classList.add("hidden");
  document.getElementById("rejected-section").classList.remove("hidden");
  document.getElementById("interview-section").classList.add("hidden");

  const rejectedBtn = document.getElementById("rejected-btn");
  rejectedBtn.style.backgroundColor = "#ef4444FF";
  rejectedBtn.style.color = "#ffffff";

  const allBtn = document.getElementById("all-btn");
  allBtn.style.backgroundColor = "#ffffff";
  allBtn.style.color = "#000000";

  const interviewBtn = document.getElementById("interview-btn");
  interviewBtn.style.backgroundColor = "#ffffff";
  interviewBtn.style.color = "#000000";

  updateBoardState();
});

const totalCount = document.getElementById("total-count");
const interviewCount = document.getElementById("interview-count");
const rejectedCount = document.getElementById("rejected-count");

function updateBoardState() {
  const allHasCards = allCardContainer.children.length > 0;
  const totalCards =
    allCardContainer.children.length +
    interviewContainer.children.length +
    rejectedContainer.children.length;

  totalCount.innerText = totalCards;
  interviewCount.innerText = interviewContainer.children.length;
  rejectedCount.innerText = rejectedContainer.children.length;

  document
    .getElementById("interview-empty")
    .classList.toggle("hidden", interviewContainer.children.length > 0);
  document
    .getElementById("rejected-empty")
    .classList.toggle("hidden", rejectedContainer.children.length > 0);

  document.getElementById("all-empty").classList.toggle("hidden", allHasCards);
  document.getElementById("all-empty").classList.toggle("flex", !allHasCards);

  if (jobsCountLabel) {
    let text = allCardContainer.children.length + " jobs";

    if (activeTab === "interview") {
      const interviewCards = interviewContainer.children.length;

      if (interviewCards === 0) {
        text = "0 jobs";
      } else {
        text = interviewCards + " out of " + totalCards + " jobs";
      }
    }

    if (activeTab === "rejected") {
      const rejectedCards = rejectedContainer.children.length;

      if (rejectedCards === 0) {
        text = "0 jobs";
      } else {
        text = rejectedCards + " out of " + totalCards + " jobs";
      }
    }

    jobsCountLabel.innerText = text;
  }
}

document
  .getElementById("all-section")
  .addEventListener("click", function (event) {
    const clickedElement = event.target;
    const card = clickedElement.closest(".job-card");

    if (!card) {
      return;
    }

    if (clickedElement.classList.contains("interview-btn-card")) {
      interviewContainer.appendChild(card);

      updateBoardState();

      const appliedBtn = card.querySelector(".applied-btn");
      if (appliedBtn) {
        appliedBtn.style.backgroundColor = "#10b981FF";
        appliedBtn.style.color = "#ffffff";
        appliedBtn.innerText = "Interview";
      }
    }
    if (clickedElement.classList.contains("rejected-btn-card")) {
      rejectedContainer.appendChild(card);
      updateBoardState();

      const appliedBtn = card.querySelector(".applied-btn");
      if (appliedBtn) {
        appliedBtn.style.backgroundColor = "#ef4444FF";
        appliedBtn.style.color = "#ffffff";
        appliedBtn.innerText = "Rejected";
      }
    }
    if (clickedElement.classList.contains("delete-btn")) {
      card.remove();
      updateBoardState();
    }
  });

updateBoardState();

// console.log(showNoJobsbanner);
