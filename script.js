const daftarPrompt = [
  {
    nama: "Hook Iklan Ultra Persuasif",
    kategori: "Copywriting",
    icon: "✍️",
    badgeClass: "badge-copywriting",
    deskripsi: "Hasilkan hook iklan yang bikin orang berhenti scroll — cocok untuk Meta Ads, TikTok, dan Instagram.",
    manfaat: [
      "Formula hook terbukti konversi tinggi",
      "Cocok untuk produk apapun",
      "Output langsung siap pakai"
    ],
    harga: "Rp 49.000",
    wa: "https://wa.me/628123456789?text=Halo,%20saya%20mau%20beli%20prompt%20Hook%20Iklan%20Ultra%20Persuasif"
  },
  {
    nama: "Caption Instagram Viral",
    kategori: "Social Media",
    icon: "📱",
    badgeClass: "badge-social",
    deskripsi: "Caption yang bikin followers komentar, share, dan save — lengkap dengan CTA yang natural.",
    manfaat: [
      "Gaya bahasa menyesuaikan niche",
      "Sudah termasuk hashtag strategy",
      "Bisa dipakai berulang"
    ],
    harga: "Rp 35.000",
    wa: "https://wa.me/628123456789?text=Halo,%20saya%20mau%20beli%20prompt%20Caption%20Instagram%20Viral"
  },
  {
    nama: "Email Marketing Pembuka Deal",
    kategori: "Email",
    icon: "📧",
    badgeClass: "badge-email",
    deskripsi: "Prompt untuk nulis cold email yang dibaca sampai habis dan menghasilkan reply dari calon klien.",
    manfaat: [
      "Subject line yang tinggi open rate",
      "Struktur AIDA yang terbukti",
      "Tone profesional tapi personal"
    ],
    harga: "Rp 59.000",
    wa: "https://wa.me/628123456789?text=Halo,%20saya%20mau%20beli%20prompt%20Email%20Marketing%20Pembuka%20Deal"
  }
];

const grid = document.getElementById("grid-prompt");

daftarPrompt.forEach((prompt, index) => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <div class="card-icon">${prompt.icon}</div>
    <span class="badge ${prompt.badgeClass}">${prompt.kategori}</span>
    <h3>${prompt.nama}</h3>
    <p>${prompt.deskripsi}</p>
    <div class="card-footer">
      <span class="harga">${prompt.harga}</span>
      <span class="card-cta">Lihat detail →</span>
    </div>
  `;
  card.onclick = () => bukaModal(index);
  grid.appendChild(card);
});

function bukaModal(index) {
  const p = daftarPrompt[index];

  const badge = document.getElementById("modal-kategori");
  badge.textContent = p.kategori;
  badge.className = `badge ${p.badgeClass}`;

  document.getElementById("modal-nama").textContent = p.nama;
  document.getElementById("modal-deskripsi").textContent = p.deskripsi;
  document.getElementById("modal-harga").textContent = p.harga;

  const ul = document.getElementById("modal-manfaat");
  ul.innerHTML = p.manfaat.map(m => `<li>${m}</li>`).join("");

  document.getElementById("tombol-beli").href = p.wa;
  document.getElementById("modal").classList.add("aktif");
}

function tutupModal(e) {
  if (!e || e.target.id === "modal") {
    document.getElementById("modal").classList.remove("aktif");
  }
}
