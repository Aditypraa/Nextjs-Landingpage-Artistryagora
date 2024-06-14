/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import Link from "next/link";
import NavLink from "../NavLink";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

export default function Navbar() {
  const router = useRouter();
  const [token, setToken] = useState("");
  const [username, setUsername] = useState({
    firstName: "",
    lastName: "",
  });

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("user"));
    setUsername({
      firstName: data?.firstName,
      lastName: data?.lastName,
    });
    setToken(Cookies.get("token"));
  }, []);

  const handleLogout = () => {
    Cookies.remove("token");
    setToken(""); // Perbarui state token setelah logout
    router.push("/");
  };

  return (
    <nav className="container navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid">
        <NavLink href={"/"} className="navbar-brand">
          <img
            src="/images/artistryagora.png"
            alt="artistry agora"
            width="150"
            height="100"
          />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div
            className={`navbar-nav ${
              router.pathname !== "/signin" ? "mx-auto" : "ms-auto"
            } my-3 my-lg-0`}
          >
            <NavLink href={"/"}>Home</NavLink>
            <NavLink href={"/events"}>Events</NavLink>
            <NavLink href={"/browse"}>About</NavLink>
            <NavLink href={"/browse"}>Contact</NavLink>
          </div>

          {router.pathname !== "/signin" && (
            <>
              {token ? (
                <div className="navbar-nav ms-auto">
                  <div className="nav-item dropdown d-flex flex-column flex-lg-row align-items-lg-center authenticated gap-3">
                    <span className="text-light d-none d-lg-block">
                      Hello, {`${username.firstName} ${username.lastName} `}
                    </span>

                    <a
                      className="nav-link dropdown-toggle mx-0 d-none d-lg-block"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img src="/images/default.png" alt="semina" width="60" />
                    </a>

                    <a
                      className="d-block d-lg-none dropdown-toggle text-light text-decoration-none"
                      data-bs-toggle="collapse"
                      href="#collapseExample"
                      role="button"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    >
                      <img src="/images/avatar.png" alt="semina" width="60" />
                    </a>

                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <Link href={"/dashboard"} className="dropdown-item">
                          Dashboard
                        </Link>
                      </li>
                      <li onClick={handleLogout}>
                        <a className="dropdown-item">Logout</a>
                      </li>
                    </ul>

                    <div className="collapse" id="collapseExample">
                      <ul className="list-group">
                        <li>
                          <Link className="list-group-item" href="#">
                            Dashboard
                          </Link>
                        </li>
                        <li onClick={handleLogout}>
                          <a className="list-group-item">Logout</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="d-grid">
                  <Link href={"/signin"} className="btn-navy">
                    Sign In
                  </Link>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
