function scrollToCheck() {
  document.getElementById('chaos-check').scrollIntoView({ behavior: 'smooth' });
}

function calculateScore() {
  let emails = parseInt(document.getElementById('emails').value) || 0;
  let tools = parseInt(document.getElementById('tools').value) || 0;
  let score = Math.max(0, 100 - emails / 50 - tools * 10);
  let recommendation = score > 70 ? "Alles in Ordnung!" : "Wir empfehlen das Alles-aufgeräumt-Paket!";
  document.getElementById('result').innerText = "Dein Chaos-Score: " + Math.round(score) + "%\n" + recommendation;
}
