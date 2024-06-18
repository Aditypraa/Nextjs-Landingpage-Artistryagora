/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function Footer() {
  return (
    <footer className="footer bg-navy">
      <div className="container">
        <a href="index.html">
          <img
            src="/images/artistryagora.png"
            alt="artistry agora"
            width="150"
            height="100"
          />
        </a>
        <div className="mt-3 d-flex flex-row flex-wrap footer-content align-items-baseline">
          <p className="paragraph">
            Artistry Agora adalah sebuah Kumpulan Karya Seni{" "}
            <br className="d-md-block d-none" /> yang menampilkan keahlian dan
            karya seni <br className="d-md-block d-none" /> dari berbagai
            seniman di suatu tempat
          </p>
          <div className="d-flex flex-column footer-links">
            <div className="title-links mb-3">Fitur</div>
            <a href="#">Pameran Virtual</a>
            <a href="#">Opsi Pembayaran</a>
            <a href="#">Toko Artistry Agora</a>
            <a href="#">Tiket Acara</a>
          </div>
          <div className="d-flex flex-column footer-links">
            <div className="title-links mb-3">Perusahaan</div>
            <a href="#">Karir</a>
            <a href="#">API</a>
            <a href="#">Berita</a>
            <a href="#">Peta Situs</a>
          </div>
          <div className="d-flex flex-column footer-links">
            <div className="title-links mb-3">Sumber Belajar</div>
            <a href="#">Panduan</a>
            <a href="#">Inspirasi</a>
            <a href="#">Komunitas</a>
            <a href="#">Alat Bantu</a>
          </div>
        </div>
        <div className="d-flex justify-content-center paragraph all-rights">
          All Rights Reserved. Artistry Agora 2024.
        </div>
      </div>
    </footer>
  );
}
