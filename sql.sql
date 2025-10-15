CREATE TABLE termekek (
    id INTEGER PRIMARY KEY,
    tipus TEXT NOT NULL,
    nev TEXT NOT NULL,
    szin TEXT NOT NULL,
    ar INTEGER NOT NULL,
    keszleten INTEGER NOT NULL,
    kep TEXT NOT NULL
);

INSERT INTO termekek (id, tipus, nev, szin, ar, keszleten, kep) VALUES
(1,'Virág', 'Lótusz', 'Fehér', 2200, 8, 'https://citygreen.hu/wp-content/uploads/2018/09/indiai-l%C3%B3tusz.jpg'),
(2,'Virág', 'Margareta', 'Fehér', 750, 22, 'https://citygreen.hu/wp-content/uploads/2018/08/margar%C3%A9ta.jpg'),
(3,'Virág', 'Krizantém', 'Sárga', 1400, 12, 'https://citygreen.hu/wp-content/uploads/2018/11/krizant%C3%A9m-2-960x638.jpg'),
(4,'Virág', 'Hortenzia', 'Kék', 1600, 14, 'https://citygreen.hu/wp-content/uploads/2017/06/hortenzia-1.jpg'),
(5,'Virág', 'Százszorszép', 'Fehér-sárga', 650, 28, 'https://citygreen.hu/wp-content/uploads/2016/07/ausztr%C3%A1l-sz%C3%A1zszorsz%C3%A9p-800x400.jpg'),
(6,'Virág', 'Citromfű', 'Zöld', 550, 35, 'https://citygreen.hu/wp-content/uploads/2017/05/citromf%C5%B1-1-960x640.jpg'),
(7,'Csokor', 'Szív csokor', 'Piros', 7000, 3, 'https://dobozosrozsa.hu/img/44105/254547/254547.jpg');
