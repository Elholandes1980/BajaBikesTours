
document.addEventListener("DOMContentLoaded", function () {
  fetch("https://raw.githubusercontent.com/Elholandes1980/BajaBikesTours/main/city_links_full.json")
    .then(res => res.json())
    .then(data => {
      const url = window.location.href.toLowerCase();
      const city = Object.keys(data).find(c => url.includes(c));
      if (!city) return;

      const block = document.getElementById("bajabikes-widget");
      if (!block) return;

      const info = data[city];

      block.innerHTML = `
        <div style="max-width:600px;margin:24px auto;text-align:center;">
          <p style="color:#666;font-size:16px;margin-bottom:16px;">
            Boek op tijd voor je trip naar <strong>${city.charAt(0).toUpperCase() + city.slice(1)}</strong>
          </p>
          <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;">
            <a href="${info.tour_link}" target="_blank" style="background:#33AB3D;color:#fff;padding:12px 20px;border-radius:5px;text-decoration:none;min-width:160px;">Boek fietstour</a>
            <a href="${info.gyg_link}" target="_blank" style="background:#2E59A2;color:#fff;padding:12px 20px;border-radius:5px;text-decoration:none;min-width:160px;">Koop attractiepas</a>
          </div>
        </div>
      `;
    })
    .catch(err => {
      console.error("Fout bij laden widget:", err);
    });
});

