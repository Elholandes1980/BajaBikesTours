
document.addEventListener("DOMContentLoaded", function () {
  fetch("https://raw.githubusercontent.com/Elholandes1980/BajaBikesTours/main/city_links.json")
    .then(res => res.json())
    .then(data => {
      const url = window.location.href.toLowerCase();
      const city = Object.keys(data).find(c => url.includes(c));
      if (!city) return;

      const block = document.getElementById("bajabikes-widget");
      if (!block) return;

      const info = data[city];

      block.innerHTML = `
        <div style="border:1px solid #ccc;padding:16px;border-radius:8px;max-width:400px;margin: 24px auto;">
          <h3 style="font-size:18px;margin-bottom:12px;">Ontdek ${city.charAt(0).toUpperCase() + city.slice(1)}</h3>
          <a href="${info.booking_link}" target="_blank" style="display:block;margin-bottom:8px;background:#f90;color:#fff;padding:10px;text-align:center;text-decoration:none;border-radius:4px;">Boek je fietstour</a>
          <a href="${info.gyg_link}" target="_blank" style="display:block;background:#007BFF;color:#fff;padding:10px;text-align:center;text-decoration:none;border-radius:4px;">Koop je attractiepas</a>
        </div>
      `;
    })
    .catch(err => {
      console.error("Fout bij laden widget:", err);
    });
});
