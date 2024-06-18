import Image from "next/image";
function CardAbout() {
  const data = [
    {
      icon: "/icons/palette.svg",
      heading: "Eksplorasi Karya Seni Terbaik",
      desc: "Nikmati karya seni terbaik dari berbagai seniman di seluruh dunia dalam berbagai media, seperti lukisan, patung, fotografi, dan banyak lagi.",
      bgColor: "bg-info",
    },
    {
      icon: "/icons/people.svg",
      heading: "Bergabung dalam Komunitas Seni",
      desc: "Bergabunglah dengan komunitas pecinta seni yang luas dan bagikan inspirasi, saran, dan berbagi pengetahuan tentang seni.",
      bgColor: "bg-warning",
    },
    {
      icon: "/icons/easel.svg",
      heading: "Pameran Virtual dan Nyata",
      desc: "Jelajahi pameran seni virtual yang menakjubkan atau kunjungi pameran nyata di berbagai lokasi untuk pengalaman seni yang lebih mendalam.",
      bgColor: "bg-success",
    },
    {
      icon: "/icons/cart.svg",
      heading: "Beli dan Jual Karya Seni",
      desc: "Temukan dan beli karya seni dari seniman favorit Anda atau jual karya seni Anda sendiri kepada para kolektor di seluruh dunia.",
      bgColor: "bg-danger",
    },
    {
      icon: "/icons/calender.svg",
      heading: "Events dan Pameran Seni",
      desc: "Ikuti Events dan Pameran seni yang diselenggarakan untuk memperluas wawasan dan keterampilan Anda di bidang seni.",
      bgColor: "bg-secondary",
    },
    {
      icon: "/icons/book.svg",
      heading: "Sumber Belajar dan Inspirasi",
      desc: "Akses sumber belajar dan inspirasi yang kaya, termasuk panduan, artikel, dan tutorial tentang seni dari para ahli.",
      bgColor: "bg-primary",
    },
  ];
  return (
    <section id="benefits-section" className="bg-primary-gradient py-5">
      <div className="container py-5">
        <h2 className="text-center mb-3 text-black">
          Apa yang Akan Anda Dapatkan di Artistry Agora?
        </h2>
        <div className="mx-auto text-center mb-5 text-black">
          Artistry Agora adalah platform seni yang menyediakan wadah bagi para
          seniman untuk menampilkan karya mereka dan berbagi inspirasi dengan
          komunitas pecinta seni dari seluruh dunia.
        </div>
        <div className="row text-center">
          {data.map((item, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4 mb-4">
              <div className={`p-3 p-lg-4 ${item.bgColor} text-white rounded`}>
                <div className="mb-3">
                  <div className="mb-2" style={{ fontSize: "2rem" }}>
                    {typeof item.icon === "string" ? (
                      <Image
                        src={item.icon}
                        alt={item.heading}
                        width={100}
                        height={100}
                      />
                    ) : (
                      item.icon
                    )}
                  </div>
                  <h3 className="h5">{item.heading}</h3>
                </div>
                <div>{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CardAbout;
