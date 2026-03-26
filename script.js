function calculateScore() {
  let emails = parseInt(document.getElementById('emails').value) || 0;
  let tools = parseInt(document.getElementById('tools').value) || 0;
  let docs = parseInt(document.getElementById('docs').value);
  let automation = parseInt(document.getElementById('automation').value);

  let score = 100;

  score -= emails / 50;
  score -= tools * 5;
  score -= docs;
  score -= automation;

  score = Math.max(0, Math.round(score));

  let text = "";
  let recommendation = "";

  if (score > 70) {
    text = "Du bist gut organisiert 👍";
    recommendation = "Mit kleinen Optimierungen und gezielten KI-Automationen kannst du noch effizienter werden.";
  } else if (score > 40) {
    text = "Da ist noch einiges an Chaos 👀";
    recommendation = "Mit klaren Strukturen und ersten Automationen kannst du dir sofort Zeit sparen.";
  } else {
    text = "Dein Business steckt im Chaos 🔥";
    recommendation = "Du verlierst aktuell massiv Zeit. Timenizer hilft dir, Struktur reinzubringen und Prozesse inklusive KI-Automationen aufzubauen.";
  }

  document.getElementById("score-text").innerText = "Dein Chaos-Score: " + score + "%";
  document.getElementById("recommendation").innerText = recommendation;

  document.getElementById("result-box").classList.remove("hidden");
}
