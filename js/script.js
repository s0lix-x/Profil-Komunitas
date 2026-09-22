const FORMSPREE_ENDPOINT = "https://formspree.io/f/xbgjgdrd";
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".connect__form");
  const button = form.querySelector("button");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
button.disabled = true;
button.textContent = "MENGIRIM...";

try {
  const response = await fetch(FORMSPREE_ENDPOINT, {
    method: "POST",
    body: new FormData(form),
    headers: {
      Accept: "application/json",
    },
  });

  if (response.ok) {
    alert("Pesan berhasil dikirim!");
    form.reset();
  } else {
    alert("Pesan gagal dikirim.");
  }
} 
button.disabled = false;
button.textContent = "KIRIM PESAN →";
  });
});