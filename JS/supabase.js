//https://qeoxxkgbtrpnlhjhgkqx.supabase.co
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InllcXN0cGV5YXd6bW1qbXB5YWp5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU0MjU3NDUsImV4cCI6MjA4MTAwMTc0NX0.BjkdOimfoSgoBzsbHIJyPI7lkDCz7GZYZFuK_iAFvDc
const params = new URLSearchParams(window.location.search);
const category = params.get("category");
const header = (document.querySelector("h2").textContent = category);

const productListeContainer = document.querySelector("main");
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InllcXN0cGV5YXd6bW1qbXB5YWp5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU0MjU3NDUsImV4cCI6MjA4MTAwMTc0NX0.BjkdOimfoSgoBzsbHIJyPI7lkDCz7GZYZFuK_iAFvDc;

const url = "https://yeqstpeyawzmmjmpyajy.supabase.co/rest/v1/holdoversigt?";

const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InllcXN0cGV5YXd6bW1qbXB5YWp5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU0MjU3NDUsImV4cCI6MjA4MTAwMTc0NX0.BjkdOimfoSgoBzsbHIJyPI7lkDCz7GZYZFuK_iAFvDc;";
const options = {
  headers: {
    apikey: key,
  },
};

// Funktion til at hente produkter
function fetchCategories(categories, specificCategory = null) {
  if (specificCategory) {
    return fetch(`https://yeqstpeyawzmmjmpyajy.supabase.co/rest/v1/holdoversigt/${specificCategory}`)
      .then((res) => res.json())
      .then((data) => data.products)
      .catch((err) => {
        console.error("Fetch error (specificCategory):", err);
        return [];
      });
  } else {
    return Promise.all(
      categories.map((cat) =>
        fetch(`https://yeqstpeyawzmmjmpyajy.supabase.co/rest/v1/holdoversigt/${cat}`)
          .then((res) => res.json())
          .then((data) => data.products)
          .catch((err) => {
            console.error("Fetch error (category):", cat, err);
            return [];
          })
      )
    ).then((results) => results.flat());
  }
}

const data = await fetch(url, options).then((res) => res.json());
// Funktion til at lave HTML for sektion
function createSection(title, products) {
  const sectionEl = document.createElement("section");
  sectionEl.innerHTML = `<h3 class="kun-desktop mandag"><strong>Mandag</strong></h3>
        <section class="tirsdag">
          <h3><strong>Tirsdag</strong></h3>
          <section class="tirsdag-1">
            <p><strong> 17:00-18:30</strong></p>
            <p><strong>COLOR TANGO</strong></p>
            <p><strong>LET ØVET/ ØVET</strong></p>
            <p><strong>Skiftende Undervisere</strong></p>
            <button>
              <a href="#"><i class="mere"></i>Læs mere</a>
            </button>
          </section>`;
}
