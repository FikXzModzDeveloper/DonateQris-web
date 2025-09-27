const qrisUrls = "https://files.catbox.moe/b32b73.jpg";
const apiBase = "https://api.fikmydomainsz.xyz/tools/qrtodinamis?urlQris=";
const infoApi = "https://api.fikmydomainsz.xyz/tools/infoqris?url=";

document.getElementById('donateForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const nominal = document.getElementById('nominal').value;
  const qrisResult = document.getElementById('qrisResult');
  const qrisImage = document.getElementById('qrisImage');
  const merchantName = document.getElementById('merchantName');
  const amount = document.getElementById('amount');

  qrisImage.src = `${apiBase}${encodeURIComponent(qrisUrls)}&jumlah=${nominal}`;

  try {
    const infoRes = await fetch(`${infoApi}${encodeURIComponent(qrisUrls)}`);
    const info = await infoRes.json();
    merchantName.textContent = info.result.merchantName;
  } catch {
    merchantName.textContent = 'FikXzMods';
  }

  amount.textContent = parseInt(nominal).toLocaleString('id-ID');
  qrisResult.style.display = 'block';
});

function playSound() {
  document.getElementById('bgSound').play();
}
