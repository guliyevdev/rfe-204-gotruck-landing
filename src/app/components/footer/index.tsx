import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-gray-100 py-5">
      <div className="container">
        <div className="text-center">
          <div>
            <h2 className="md:text-3xl text-xl font-semibold my-5">
            Mobil tətbiq ilə daha rahat sifariş edin
            </h2>
            <p className="text-slate-500">
            GoTruck mobil tətbiqi ilə yük daşınması daha da sadədir!
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 my-10">
              <a href="#">
                <img src="assets/images/buttons/google.png" className="w-48" />
              </a>
              <a href="#">
                <img src="assets/images/buttons/store.png" className="w-48" />
              </a>
            </div>
          </div>
          <div>
            <ul className="flex flex-wrap items-center justify-center gap-5">
              <li className="after:content-['-'] after:text-slate-500 after:font-extrabold">
                <a href="#" className="hover:text-primary me-4">
                  About
                </a>
              </li>
              <li className="after:content-['-'] after:text-slate-500 after:font-extrabold">
                <a href="#" className="hover:text-primary me-4">
                  Privacy
                </a>
              </li>
              <li className="after:content-['-'] after:text-slate-500 after:font-extrabold">
                <a href="#" className="hover:text-primary me-4">
                  Terms
                </a>
              </li>
              <li className="after:content-['-'] after:text-slate-500 after:font-extrabold">
                <a href="#" className="hover:text-primary me-4">
                  Developers
                </a>
              </li>
              <li className="after:content-['-'] after:text-slate-500 after:font-extrabold">
                <a href="#" className="hover:text-primary me-4">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Careers
                  <span className="px-2 py-1 text-xs rounded-full text-primary bg-primary/10">
                    We're hiring
                  </span>
                </a>
              </li>
            </ul>
            <p className="my-5">© Gotruck. All rights reserved. Crafted by</p>
              <a href="index.html" className='text-2xl flex font-semibold justify-center'>
            <img src="assets/images/logo.png" className="h-8 logo-dark mx-2" alt="Logo Dark" />
              <span>GoTruck</span>
            </a>
          </div>
        </div>
      </div>

    </footer>
  )
}