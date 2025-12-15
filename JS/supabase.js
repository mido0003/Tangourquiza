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
  console.log(data);
  data.forEach((hold) => {
    const markup = `
          <article>
            <p><strong></strong><span>${hold.start}</span><span>${hold.end}</span></p>
            <p><strong>${hold.holdnavn}</strong></p>
            <p><strong>${hold.niveau}</strong></p>
            <p><strong>${hold.undervisere}</strong></p>
            <button>
              <a href="#"><i class="mere"></i>Læs mere</a>
            </button>
          </article>`;
    document.querySelector(`.${hold.day}`).innerHTML += markup;
  });
}
