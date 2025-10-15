CREATE TABLE termekek (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    tipus TEXT NOT NULL,
    nev TEXT NOT NULL,
    szin TEXT NOT NULL,
    ar INTEGER NOT NULL,
    keszleten INTEGER NOT NULL,
    kep TEXT NOT NULL
);

INSERT INTO termekek (tipus, nev, szin, ar, keszleten, kep) VALUES
('Virág', 'Rózsa', 'Piros', 1500, 20, 'https://www.pngmart.com/files/1/Red-Rose-PNG-Transparent-Image.png'),
('Virág', 'Tulipán', 'Sárga', 900, 35, 'https://www.pngmart.com/files/1/Tulip-PNG-Image.png'),
('Virág', 'Liliom', 'Fehér', 1200, 15, 'https://www.pngmart.com/files/15/Red-Calla-Lily-PNG-Clipart.png'),
('Virág', 'Gerbera', 'Narancssárga', 800, 40, 'https://www.cascadefloralwholesale.com/wp-content/uploads/2018/03/GERBMOR.jpg'),
('Virág', 'Orchidea', 'Lila', 2000, 12, 'https://th.bing.com/th/id/OIP.vmhsd0LtmjubYr6UQq0T0wHaE7?w=266&h=180&c=7&r=0&o=7&cb=12&pid=1.7&rm=3'),
('Virág', 'Dália', 'Rózsaszín', 1100, 18, 'https://th.bing.com/th/id/OIP.pZdP52kbFkurhfS1K2jGjAHaEo?w=282&h=180&c=7&r=0&o=7&cb=12&pid=1.7&rm=3'),
('Virág', 'Szegfű', 'Piros', 700, 25, 'https://citygreen.hu/wp-content/uploads/2018/07/szegf%C5%B1-1.jpg'),
('Virág', 'Jácint', 'Kék', 1300, 10, 'https://citygreen.hu/wp-content/uploads/2016/07/j%C3%A1cintok-1-960x640.jpg'),
('Virág', 'Nárcisz', 'Sárga', 900, 20, 'https://citygreen.hu/wp-content/uploads/2016/07/Narcissus-Flower-Record.jpg'),
('Virág', 'Bazsarózsa', 'Rózsaszín', 1800, 15, 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/PaeoniaSuffruticosa7.jpg/1200px-PaeoniaSuffruticosa7.jpg'),
('Virág', 'Árvácska', 'Lila-sárga', 500, 40, 'https://citygreen.hu/wp-content/uploads/2017/09/%C3%A1rv%C3%A1cska-2-960x692.jpg'),
('Virág', 'Lótusz', 'Fehér', 2200, 8, 'https://citygreen.hu/wp-content/uploads/2018/09/indiai-l%C3%B3tusz.jpg'),
('Virág', 'Margareta', 'Fehér', 750, 22, 'https://citygreen.hu/wp-content/uploads/2018/08/margar%C3%A9ta.jpg'),
('Virág', 'Krizantém', 'Sárga', 1400, 12, 'https://citygreen.hu/wp-content/uploads/2018/11/krizant%C3%A9m-2-960x638.jpg'),
('Virág', 'Hortenzia', 'Kék', 1600, 14, 'https://citygreen.hu/wp-content/uploads/2017/06/hortenzia-1.jpg'),
('Virág', 'Százszorszép', 'Fehér-sárga', 650, 28, 'https://citygreen.hu/wp-content/uploads/2016/07/ausztr%C3%A1l-sz%C3%A1zszorsz%C3%A9p-800x400.jpg'),
('Virág', 'Citromfű', 'Zöld', 550, 35, 'https://citygreen.hu/wp-content/uploads/2017/05/citromf%C5%B1-1-960x640.jpg'),
('Csokor', 'Szív csokor', 'Piros', 7000, 3, 'https://dobozosrozsa.hu/img/44105/254547/254547.jpg');
