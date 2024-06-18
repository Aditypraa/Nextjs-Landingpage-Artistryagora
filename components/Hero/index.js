/* eslint-disable @next/next/no-img-element */
import React from "react";
import NavLink from "../NavLink";

export default function Hero() {
  return (
    <>
      <div className="hero">
        <div className="hero-headline">
          Perluas <span className="text-gradient-blue">Pengetahuan Anda</span>{" "}
          <br className="d-none d-lg-block" />
          dengan <span className="text-gradient-pink">Bergabung</span> di Acara
          Terhebat Kami
        </div>
        <p className="hero-paragraph">
          Kami menyediakan berbagai event pameran seni terbaik untuk membantu{" "}
          <br className="d-none d-lg-block" />
          anda dalam meningkatkan kreativitas di bidang seni.
        </p>
        <NavLink href={"/events"}>
          <button className="btn-green"> Check Events</button>
        </NavLink>
      </div>

      <div className="d-flex flex-row flex-nowrap justify-content-center align-items-center gap-5 header-image">
        <img src="/images/arts4.jpg" alt="imagearts" className="img-1" />
        <img src="/images/arts1.jpg" alt="imagearts" className="img-2" />
        <img src="/images/arts2.jpg" alt="imagearts" className="img-1" />
      </div>
    </>
  );
}
