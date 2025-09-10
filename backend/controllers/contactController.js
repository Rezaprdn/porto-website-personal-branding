document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value,
    };

    try {
      const res = await fetch("https://formspree.io/f/xrbajabe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        alert("✅ Pesan berhasil dikirim!");
        form.reset();
      } else {
        const err = await res.json();
        alert("❌ Gagal kirim: " + (err.error || "Unknown error"));
      }
    } catch (err) {
      console.error(err);
      alert("⚠️ Error koneksi ke server");
    }
  });
});
