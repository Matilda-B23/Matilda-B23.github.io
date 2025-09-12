const skills = document.querySelectorAll(".skill");
const infoBox = document.getElementById("skill-info");
skills.forEach((skill) => {
  skill.addEventListener("click", () => {
    const description = skill.getAttribute("data-desc");
    infoBox.textContent = description || "No description yet.";
  });
});
