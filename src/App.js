import React from 'react';
import './App.css';
import HistoryCard from './components/HistoryCard.js';

function App() {
  let riwayat = 
  [
      {
          image : 'https://1.bp.blogspot.com/-8XAeFEiUyDg/XpHqUynyrEI/AAAAAAAAZ8E/suBDokWGzHoTlmjN6lImBE71mo6Nbzf7QCLcBGAsYHQ/s1600/Dalgona%2BCoffee.png',
          pesanan : 'Dalgona Coffe, Padjajaran',
          status : 'Makanan selesai diantar, Waktu pesen lagi kangen mantan yaa',
          tanggal : 'Tanggal Pemesanan : 1 januari 2020'
      },
      {
          image : 'https://upload.wikimedia.org/wikipedia/commons/2/24/Ayam_geprek.png',
          pesanan : 'Ayam Geprek Bapak Kumis, Citeureup',
          status : 'Makanan selesai diantar, Gimana? mantap kan ayam nya?',
          tanggal : 'Tanggal Pemesanan : 29 februari 2020'
      },
      {
          image : 'https://craftlog.com/m/i/5217391=s1280=h960',
          pesanan : 'Martabak Telor Kita, Leuwiliang',
          status : 'Makanan selesai diantar, Ciee lagi pesen buat bebep ya',
          tanggal : 'Tanggal Pemesanan : 6 Maret 2020'
      },
      {
          image : 'https://asset-a.grid.id/crop/0x0:0x0/x/photo/2020/02/29/1363610926.jpg',
          pesanan : 'Ketoprak Ma Ida, Cibinong',
          status : 'Makanan selesai diantar, Pokonya The Best deh yang satu ini',
          tanggal : 'Tanggal Pemesanan : 20 april 2020'
      },
      {
          image : 'https://img-global.cpcdn.com/recipes/ee8b461ac5d1c297/400x400cq70/photo.jpg',
          pesanan : 'Jajanan Burger, Galuga',
          status : 'Makanan sedang diantar, sabar yaa',
          tanggal : 'Tanggal Pemesanan : 10 mei 2020'
      },

  ];

  return (
    <div className="menu-history">
      <h1>{'pesen lagi dong biar makin kenyang dan dapat cashback'.toUpperCase()}</h1>
      <HistoryCard riwayat={riwayat}/>
    </div>
  )
}

export default App;
