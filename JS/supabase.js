const liste = document.querySelector(".holdover");

const url = "https://yeqstpeyawzmmjmpyajy.supabase.co/rest/v1/holdoversigt?";

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
  const grouped = {};

  // Gruppér efter dag
  data.forEach((hold) => {
    if (!grouped[hold.day]) grouped[hold.day] = [];
    grouped[hold.day].push(hold);
  });

  Object.keys(grouped).forEach((day) => {
    grouped[day].sort((a, b) => a.start.localeCompare(b.start));

    const section = document.createElement("section");
    section.classList.add(day, "dag");

    if (day === "Mandag" || day === "Fredag") {
      section.classList.add("kun-desktop");
    }

    section.innerHTML = `<h3>${day}</h3>`;
    liste.appendChild(section);

    grouped[day].forEach((hold) => {
      const article = document.createElement("article");
      article.className = `hold niveau-${hold.niveau.toLowerCase().replace(/\s+/g, "-")}`;

      article.innerHTML = `
        <p>${hold.start} – ${hold.end}</p>
        <p><strong>${hold.holdnavn}</strong></p>
        <p class="niveau">${hold.niveau}</p>
        <p>${hold.undervisere}</p>

        <button class="read-more">Læs mere</button>

        <dialog>
          <h2>TANGO BEGYNDER - TORSDAG 19:00-20:30</h2>
          <p><strong>med Linus og Miamanda</p>
          <p>Adresse: Øster Farimagsgade 16B, 2100 København Ø, Danmark </p>
          <p class="starter">Vi starter fra bunden og arbejder med de absolut grundlæggende elementer som holdning, balance, kontakt med partneren, og meget mere.
           Undervisningen foregår i et roligt tempo, hvor der er god tid til at øve sig og stille spørgsmål. Du lærer at følge eller føre på en tryg og overskuelig måde, så du kan bevæge dig sikkert ud på dansegulvet.</p>
          <p class="niveauet">Niveauet er Begynder: Dette niveau er for dig, der aldrig har danset tango før, eller som ønsker at genopfriske det mest grundlæggende.  </p>
           <p>Betaling foregår månedligt med et beløb på 650 DKK. Drop In: 210 DKK</p>
          <p class="hvis">*Hvis man køber et månedsabonnement får man 10%
rabat på begivenheder (det inkluderer milongas, workshops, og Tango Noche).</p>
           
         
          <form method="dialog">
         <div class="logo">

               <button class="close-dialog">Køb Månedsbetaling</button>
               <button class="close-dialog"> Køb Drop In </button>
                
              
         
           </div>
        <a class="read" href="#">Læs købsbetingelserne her</a>

           <button class="close-luk">Luk</button> </form>
           
        
        </dialog>
      `;

      section.appendChild(article);
      setupArticle(article);
    });
  });
}

function setupArticle(article) {
  const openBtn = article.querySelector(".read-more");
  const dialog = article.querySelector("dialog");
  const closeBtn = article.querySelector(".close-dialog");

  openBtn.addEventListener("click", () => {
    dialog.showModal();
  });

  closeBtn.addEventListener("click", () => {
    dialog.close();
  });
}
