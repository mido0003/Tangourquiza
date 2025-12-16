const liste = document.querySelector(".holdover");

const url = "https://yeqstpeyawzmmjmpyajy.supabase.co/rest/v1/holdoversigt?";
// const url = "https://yeqstpeyawzmmjmpyajy.supabase.co;";

const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InllcXN0cGV5YXd6bW1qbXB5YWp5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU0MjU3NDUsImV4cCI6MjA4MTAwMTc0NX0.BjkdOimfoSgoBzsbHIJyPI7lkDCz7GZYZFuK_iAFvDc";

const options = {
  headers: {
    apikey: key,
  },
};

fetch(url, options)
  .then((res) => res.json())
  .then((data) => show(data));

function show(data) {
  const days = {};

  const grouped = {};
  data.forEach((hold) => {
    if (!grouped[hold.day]) grouped[hold.day] = [];
    grouped[hold.day].push(hold);
  });

  Object.keys(grouped).forEach((day) => {
    grouped[day].sort((a, b) => {
      return a.start.localeCompare(b.start);
    });

    const section = document.createElement("section");
    section.classList.add(day);
    section.classList.add("dag");
    if (day === "Mandag" || day === "Fredag") section.classList.add("kun-desktop");

    section.innerHTML = `<h3>${day}</h3>`;
    liste.appendChild(section);

    grouped[day].forEach((hold) => {
      section.innerHTML += `
        <article class="hold niveau-${hold.niveau.toLowerCase().replace(/\s+/g, "-")}">
          <p>${hold.start} – ${hold.end}</p>
          <p><strong>${hold.holdnavn}</strong></p>
          <p class="niveau">${hold.niveau}</p>
          <p>${hold.undervisere}</p>
          <button><a href="#">Læs mere</a></button>
        </article>
      `;
    });
  });
}
