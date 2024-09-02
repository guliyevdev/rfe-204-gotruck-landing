import React from 'react';

export const Header: React.FC = () => {
    return (
        <>
        <header
        id="navbar"
        className="@@link-color fixed top-0 inset-x-0 flex items-center z-40 w-full bg-white transition-all py-5"
      >
        <div className="container">
          <nav className="flex items-center">
            {/* Navbar Brand Logo */}
            <a href="index.html">
              <img
                src="assets/images/logo-dark.png"
                className="h-8 logo-dark"
                alt="Logo Dark"
              />
              <img
                src="assets/images/logo-light.png"
                className="h-8 logo-light"
                alt="Logo Light"
              />
            </a>
            {/* Nevigation Menu */}
            <div className="hidden lg:block ms-auto">
              <ul className="navbar-nav flex gap-x-3 items-center justify-center">
                {/* Home Page Link */}
                <li className="nav-item">
                  <a className="nav-link" href="index.html">
                    Əsas səhifə
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link after:bg-amber-500/30 after:h-6 after:w-full after:inset-x-0 after:bottom-0 after:absolute after:-z-1" href="index.html">
                    Sifariş et
                  </a>
                </li>
                {/* Blog Page Link */}
                <li className="nav-item">
                  <a className="nav-link" href="contact.html">
                    Bloq
                  </a>
                </li>
              </ul>
            </div>
            {/* Download Button */}
            <div className="hidden lg:flex items-center ms-3">
              <a
                href="https://1.envato.market/prompt-tailwind"
                target="_blank"
                className="bg-primary text-white px-4 py-2 rounded inline-flex items-center text-sm"
              >
                Yüklə
              </a>
            </div>
            {/* Moblie Menu Toggle Button (Offcanvas Button) */}
            <div className="lg:hidden flex items-center ms-auto px-2.5">
              <button
                type="button"
                data-fc-target="mobileMenu"
                data-fc-type="offcanvas"
              >
                <i className="fa-solid fa-bars text-2xl text-gray-500" />
              </button>
            </div>
          </nav>
        </div>
      </header>
      {/* =========== Navbar End =========== */}
      {/* =========== Mobile Menu Start (Offcanvas) =========== */}
      <div
        id="mobileMenu"
        className="fc-offcanvas-open:translate-x-0 translate-x-full fixed top-0 end-0 transition-all duration-200 transform h-full w-full max-w-md z-50 bg-white border-s hidden"
      >
        <div className="flex flex-col h-full divide-y-2 divide-gray-200">
          {/* Mobile Menu Topbar Logo (Header) */}
          <div className="p-6 flex items-center justify-between">
            <a href="index.html">
              <img src="assets/images/logo-dark.png" className="h-8" alt="Logo" />
            </a>
            <button data-fc-dismiss="" className="flex items-center px-2">
              <i className="fa-solid fa-xmark text-xl" />
            </button>
          </div>
          {/* Mobile Menu Link List */}
          <div className="p-6 overflow-scroll h-full">
            <ul className="navbar-nav flex flex-col gap-2" data-fc-type="accordion">
              {/* Home Page Link */}
              <li className="nav-item">
                <a href="index.html" className="nav-link">
                  Home
                </a>
              </li>
              {/* Landing Page */}
              <li className="nav-item">
                <a
                  href="javascript:void(0)"
                  data-fc-type="collapse"
                  className="nav-link"
                >
                  Landing{" "}
                  <i className="fa-solid fa-angle-down ms-auto align-middle transition-all fc-collapse-open:rotate-180" />
                </a>
                <ul className="hidden overflow-hidden transition-[height] duration-300 space-y-2">
                  <li className="nav-item mt-2">
                    <a className="nav-link" href="home-app.html">
                      App
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="home-saas.html">
                      Saas Modern
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="home-saas2.html">
                      Saas Classic
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="home-startup.html">
                      Startup
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="home-software.html">
                      Software
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="home-agency.html">
                      Agency
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="home-coworking.html">
                      Coworking
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="home-crypto.html">
                      Crypto
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="home-marketing.html">
                      Marketing
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="home-portfolio.html">
                      Portfolio
                    </a>
                  </li>
                </ul>
              </li>
              {/* Inner Page */}
              <li className="nav-item">
                <a
                  href="javascript:void(0)"
                  data-fc-type="collapse"
                  className="nav-link"
                >
                  Pages{" "}
                  <i className="fa-solid fa-angle-down ms-auto align-middle transition-all fc-collapse-open:rotate-180" />
                </a>
                <ul className="hidden overflow-hidden transition-[height] duration-300 space-y-2">
                  <li className="nav-item mt-2">
                    <a className="nav-link" href="company.html">
                      Company
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="career.html">
                      Career
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="pricing.html">
                      Pricing
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="help.html">
                      Help
                    </a>
                  </li>
                </ul>
              </li>
              {/* Blog Page */}
              <li className="nav-item">
                <a
                  href="javascript:void(0)"
                  data-fc-type="collapse"
                  className="nav-link"
                >
                  Blog Page{" "}
                  <i className="fa-solid fa-angle-down ms-auto align-middle transition-all fc-collapse-open:rotate-180" />
                </a>
                <ul className="hidden overflow-hidden transition-[height] duration-300 space-y-2">
                  <li className="nav-item mt-2">
                    <a className="nav-link" href="blog.html">
                      Blog
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="blog-post.html">
                      Blog Post
                    </a>
                  </li>
                </ul>
              </li>
              {/* Portfolio Page */}
              <li className="nav-item">
                <a
                  href="javascript:void(0)"
                  data-fc-type="collapse"
                  className="nav-link"
                >
                  Portfolio{" "}
                  <i className="fa-solid fa-angle-down ms-auto align-middle transition-all fc-collapse-open:rotate-180" />
                </a>
                <ul className="hidden overflow-hidden transition-[height] duration-300 space-y-2">
                  <li className="nav-item mt-2">
                    <a className="nav-link" href="portfolio-grid.html">
                      Portfolio Grid
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="portfolio-masonry.html">
                      Portfolio Masonry
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="portfolio-item.html">
                      Portfolio Item
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="account-confirm.html">
                      Confirm Account
                    </a>
                  </li>
                </ul>
              </li>
              {/* Auth Page */}
              <li className="nav-item">
                <a
                  href="javascript:void(0)"
                  data-fc-type="collapse"
                  className="nav-link"
                >
                  Account{" "}
                  <i className="fa-solid fa-angle-down ms-auto align-middle transition-all fc-collapse-open:rotate-180" />
                </a>
                <ul className="hidden overflow-hidden transition-[height] duration-300 space-y-2">
                  <li className="nav-item mt-2">
                    <a className="nav-link" href="account-login.html">
                      Login
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="account-signup.html">
                      Sign Up
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="account-forget-password.html">
                      Forget Password
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="account-confirm.html">
                      Confirm Account
                    </a>
                  </li>
                </ul>
              </li>
              {/* Contact Page Link */}
              <li className="nav-item">
                <a className="nav-link" href="contact.html">
                  Contact us
                </a>
              </li>
            </ul>
          </div>
          {/* Mobile Menu Download Button (Footer) */}
          <div className="p-6 flex items-center justify-center">
            <a
              href="https://1.envato.market/prompt-tailwind"
              target="_blank"
              className="bg-primary w-full text-white p-3 rounded flex items-center justify-center text-sm"
            >
              Download
            </a>
          </div>
        </div>
      </div>
      </>
    );
};