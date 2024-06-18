/* eslint-disable @next/next/no-img-element */
import React from "react";
import CardTitle from "../CardTitle";
import Link from "next/link";
import { formatDate } from "../../utils/formatDate";

export default function CardEvent({ data, title, subTitle }) {
  return (
    <section className="grow-today">
      <div className="container">
        <CardTitle title={title} subTitle={subTitle} />
        <div className="mt-5 row gap">
          {data.map((data, index) => (
            <div className="col-lg-3 col-md-6 col-12" key={index}>
              <div className="card-grow h-100">
                <span className="badge-pricing">
                  {data.tickets.map((ticket) => (
                    <div key={ticket._id}>
                      <div>
                        {ticket.statusTicketCategories ? ticket.type : ""}
                      </div>
                      {ticket.statusTicketCategories
                        ? ticket.price === 0
                          ? "free"
                          : `Rp. ${ticket.price}`
                        : ""}
                    </div>
                  ))}
                </span>
                <img
                  src={`${process.env.NEXT_PUBLIC_API}/${data.image.name}`}
                  alt="Artitry Agora"
                />
                <div className="card-content">
                  <div className="card-title">{data.title}</div>
                  <div className="card-subtitle">{data.category.name}</div>
                  <div className="description">
                    {data.venueName}, {formatDate(data.date)}
                  </div>
                  <Link
                    href={`/detail/${data._id}`}
                    className="stretched-link"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
