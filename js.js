    const viragsdiv = document.getElementById('viragsdiv');
    const kosar = document.getElementById('kosar');
    const vegDiv = document.getElementById('vegdiv');
    const kosart = [];

    async function betoltViragok() {
      const valasz = await fetch('viragok.json');
      const virag = await valasz.json();
      mutatViragok(virag);
    }

    function mutatViragok(virag) {
  viragsDiv.innerHTML = "";

  virags.forEach(virag => {
    const kartya = document.createElement('div');
    kartya.className = 'kartya';

    const img = document.createElement('img');
    img.src = virag.img;
    img.alt = virag.name;

    const nev = document.createElement('h3');
    nev.textContent = virag.name;

    const ar = document.createElement('p');
    ar.textContent = `${virag.price} Ft`;

    const gomb = document.createElement('button');
    gomb.textContent = 'Kosárba';
    gomb.addEventListener('click', () => kosarbaTesz(virag));

    kartya.append(img, nev, ar, gomb);
    viragsdiv.appendChild(kartya);
  });
}


    function kosarbaTesz(virag) {
      kosar.push(virag);
      frissitKosar();
    }

    function frissitKosar() {
      kosar.innerHTML = "";
      let osszeg = 0;
      kosart.forEach(v => {
        const li = document.createElement('li');
        li.textContent = `${v.name} - ${v.price} Ft`;
        kosar.appendChild(li);
        osszeg += v.price;
      });
      vegDiv.textContent = `Összesen: ${osszeg} Ft`;
    }

    betoltViragok();
