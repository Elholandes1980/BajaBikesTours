
document.addEventListener("DOMContentLoaded", function () {
  fetch("https://raw.githubusercontent.com/Elholandes1980/BajaBikesTours/main/city_links_fixed.json")
    .then(res => res.json())
    .then(data => {
      const url = window.location.href.toLowerCase();
      const block = document.getElementById("bajabikes-widget");
      if (!block) return;

      // Verbeterde slug-based match
      const city = Object.keys(data).find(slug => {
        const pattern = new RegExp("(^|[-_/])" + slug + "($|[-_/])", "i");
        return pattern.test(url);
      });

      if (!city) {
        //block.innerHTML = '<p style="color:#666;text-align:center;">Geen stad herkend in de URL.</p>';
        return;
      }

      const info = data[city];
      const displayCity = city.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase());

      block.innerHTML = `
        <div style="max-width:600px;margin:24px auto;text-align:center;">
          <p style="color:#666;font-size:16px;margin-bottom:16px;">
            Boek op tijd voor je trip naar <strong>${displayCity}</strong>
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
      const block = document.getElementById("bajabikes-widget");
      if (block) {
        block.innerHTML = '<p style="color:#666;text-align:center;">Er ging iets mis bij het laden van de widget.</p>';
      }
    });
});
