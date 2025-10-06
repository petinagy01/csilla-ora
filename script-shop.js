const viragsdiv = document.getElementById('viragsdiv');
const kosarElem = document.getElementById('kosar');
const vegDiv = document.getElementById('vegdiv');
const clearBtn = document.getElementById('clearBtn');
const openOrderBtn = document.getElementById('openOrderBtn');
const orderModal = document.getElementById('orderModal');
const orderForm = document.getElementById('orderForm');
const ordersList = document.getElementById('ordersList');

let viragokCache = [];
let kosar = JSON.parse(localStorage.getItem('vb_kosar') || '[]');
let rendelesek = JSON.parse(localStorage.getItem('vb_rendelesek') || '[]');

async function betoltViragok() {
  try {
    const valasz = await fetch('viragok.json');
    const viragok = await valasz.json();
    // biztosítjuk azonos struktúrát és id-t
    viragok.forEach((v, i) => { if (!v.id) v.id = i+1; });
    viragokCache = viragok;
    mutatViragok(viragokCache);
    frissitKosar(); // kosár megjelenítése localStorage alapján
    renderRendelesek();
  } catch (err) {
    viragsdiv.innerHTML = "<p>Hiba a virágok betöltésekor.</p>";
    console.error(err);
  }
}

function mutatViragok(viragok) {
  viragsdiv.innerHTML = "";

  viragok.forEach(virag => {
    const kartya = document.createElement('div');
    kartya.className = 'kartya';

    const img = document.createElement('img');
    img.src = virag.kep || virag.img;
    img.alt = virag.nev || virag.name;

    const nev = document.createElement('h3');
    nev.textContent = virag.nev;

    const ar = document.createElement('p');
    ar.textContent = `${virag.ar} Ft`;

    const stock = document.createElement('p');
    stock.style.color = '#666';
    stock.style.fontSize = '0.9rem';
    stock.textContent = `Készleten: ${virag.készleten}`;

    const gomb = document.createElement('button');
    gomb.textContent = 'Kosárba';
    gomb.addEventListener('click', () => kosarbaTesz(virag.id));

    kartya.append(img, nev, ar, stock, gomb);
    viragsdiv.appendChild(kartya);
  });
}

function kosarbaTesz(id) {
  const item = viragokCache.find(v => v.id === id);
  if (!item) return alert('Hiba: termék nem található.');

  const kosarIndex = kosar.findIndex(k => k.id === id);
  if (kosarIndex === -1) {
    if ((item.készleten || item.stock || 0) <= 0) return alert('Nincs készleten.');
    kosar.push({ id: item.id, nev: item.nev, ar: item.ar, qty: 1 });
  } else {
    // ellenőrizzük, hogy a kosár mennyisége nem lépi-e túl a készletet
    const jelenlegiMenny = kosar[kosarIndex].qty;
    const maxKeszlet = item.készleten || item.stock || 0;
    if (jelenlegiMenny + 1 > maxKeszlet) return alert('Nem áll rendelkezésre több darab.');
    kosar[kosarIndex].qty += 1;
  }

  localStorage.setItem('vb_kosar', JSON.stringify(kosar));
  frissitKosar();
}

function frissitKosar() {
  kosarElem.innerHTML = "";
  let osszeg = 0;

  if (kosar.length === 0) {
    kosarElem.innerHTML = "<li>Üres</li>";
    vegDiv.innerHTML = "<strong>Összesen</strong>: 0 Ft";
    return;
  }

  kosar.forEach(v => {
    const li = document.createElement('li');

    const left = document.createElement('div');
    left.style.flex = '1';
    left.textContent = `${v.nev}`;

    const right = document.createElement('div');
    right.style.display = 'flex';
    right.style.gap = '8px';
    right.style.alignItems = 'center';

    const minus = document.createElement('button');
    minus.className = 'qty-btn'; minus.textContent = '-';
    minus.addEventListener('click', () => updateQty(v.id, v.qty - 1));

    const qty = document.createElement('span');
    qty.textContent = ` ${v.qty} `;

    const plus = document.createElement('button');
    plus.className = 'qty-btn'; plus.textContent = '+';
    plus.addEventListener('click', () => updateQty(v.id, v.qty + 1));

    const price = document.createElement('span');
    price.style.minWidth = '80px';
    price.style.textAlign = 'right';
    price.textContent = `${v.ar * v.qty} Ft`;

    const del = document.createElement('button');
    del.className = 'qty-btn'; del.textContent = 'Töröl';
    del.addEventListener('click', () => removeFromCart(v.id));

    right.append(minus, qty, plus, price, del);
    li.append(left, right);
    kosarElem.appendChild(li);

    osszeg += v.ar * v.qty;
  });

  vegDiv.innerHTML = `<strong>Összesen</strong>: ${osszeg} Ft`;
}

function updateQty(id, newQty) {
  const idx = kosar.findIndex(k => k.id === id);
  if (idx === -1) return;
  const item = viragokCache.find(v => v.id === id);
  const max = item ? (item.készleten || item.stock || 0) : 99;
  if (newQty <= 0) {
    removeFromCart(id);
    return;
  }
  if (newQty > max) return alert('Több darabot próbálsz hozzáadni, mint ami készleten van.');
  kosar[idx].qty = newQty;
  localStorage.setItem('vb_kosar', JSON.stringify(kosar));
  frissitKosar();
}

function removeFromCart(id) {
  kosar = kosar.filter(k => k.id !== id);
  localStorage.setItem('vb_kosar', JSON.stringify(kosar));
  frissitKosar();
}

clearBtn.addEventListener('click', () => {
  if (!confirm('Biztosan ürítsd a kosarat?')) return;
  kosar = [];
  localStorage.removeItem('vb_kosar');
  frissitKosar();
});

openOrderBtn.addEventListener('click', () => {
  if (kosar.length === 0) return alert('A kosár üres, adj hozzá termékeket.');
  orderModal.classList.add('open');
});

document.getElementById('cancelOrder').addEventListener('click', () => {
  orderModal.classList.remove('open');
});

orderForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('buyerName').value.trim();
  const phone = document.getElementById('buyerPhone').value.trim();
  const address = document.getElementById('buyerAddress').value.trim();
  const note = document.getElementById('buyerNote').value.trim();

  if (!name || !phone || !address) return alert('Töltsd ki a kötelező mezőket.');

  const total = kosar.reduce((s, it) => s + it.ar * it.qty, 0);
  const order = {
    id: 'R' + Date.now(),
    name, phone, address, note,
    items: kosar,
    total,
    date: new Date().toISOString()
  };

  rendelesek.unshift(order);
  localStorage.setItem('vb_rendelesek', JSON.stringify(rendelesek));

  // ürítjük a kosarat
  kosar = [];
  localStorage.removeItem('vb_kosar');
  frissitKosar();
  renderRendelesek();
  orderModal.classList.remove('open');

  alert(`Köszönjük a rendelést! Rendelés azonosító: ${order.id}`);
});

function renderRendelesek() {
  ordersList.innerHTML = "";
  if (rendelesek.length === 0) {
    ordersList.innerHTML = "<li>Nincs korábbi rendelés</li>";
    return;
  }
  rendelesek.forEach(r => {
    const li = document.createElement('li');
    li.textContent = `${r.date.split('T')[0]} • ${r.id} • ${r.total} Ft`;
    li.title = `${r.name} • ${r.address} • tételek: ${r.items.length}`;
    ordersList.appendChild(li);
  });
}

betoltViragok();