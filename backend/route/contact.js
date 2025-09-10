document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", async (e) => {
    e.preventDefault(); // Mencegah reload halaman

    // Ambil data dari form
    const data = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value,
    };
    // Kirim data ke Formspree
    try {
      const res = await fetch("https://formspree.io/f/xrbajabe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      // Tanggapi hasilnya
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
