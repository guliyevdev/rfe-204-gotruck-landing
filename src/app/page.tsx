import Header from "@/app/components/header";
import { Footer } from "./components/footer";

export default function Home() {
  return (
    <>
  <Header />
    {/* =========== Hero Section Start =========== */}
    <section className="bg-gradient-to-t from-slate-500/10 relative">
      <section className="relative pt-44 pb-36">
        <div className="container">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="text-center sm:text-start">
                <h1 className="text-3xl/tight sm:text-4xl/tight lg:text-5xl/tight font-semibold mb-7">
                  The best way to
                  <span className="relative z-0 after:bg-green-500/50 after:-z-10 after:absolute md:after:h-6 after:h-4 after:w-full after:bottom-0 after:end-0">
                    showcase
                  </span>{" "}
                  your saas
                </h1>
                <p className="sm:text-lg text-gray-500">
                  Make your saas application stand out with high-quality landing
                  page designed and developed by professional
                </p>
                <div className="flex gap-3 mt-16">
                  <input
                    type="email"
                    className="inline-block text-sm border border-slate-300 focus:ring-0 rounded shadow-lg sm:shadow-none bg-white w-full py-3 "
                    id="Email"
                    aria-describedby="emailHelp"
                    placeholder="Your Email"
                  />
                  <button
                    htmlFor="Email"
                    className="bg-primary text-white rounded-lg text-sm font-semibold flex-none hover:shadow-lg hover:shadow-primary/30 focus:shadow-none focus:outline focus:outline-primary/40 px-3"
                  >
                    Sign Up
                  </button>
                </div>
                <div className="flex flex-wrap items-center gap-5 mt-5">
                  <div className="flex items-center gap-2">
                    <svg
                      className="stroke-green-500 stroke-2 w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <p className="text-sm text-gray-700">Free 14-day Demo</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      className="stroke-green-500 stroke-2 w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <p className="text-sm text-gray-700">No credit card needed</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="hidden sm:block">
                  <div className="before:w-24 before:h-24 before:absolute before:-bottom-8 before:-start-8 before:bg-[url('../images/pattern/dot2.svg')]" />
                  <div className="after:w-24 after:h-24 after:absolute after:-top-10 after:end-10 2xl:after:end-0 after:rotate-45 after:bg-[url('../images/pattern/dot5.svg')]" />
                </div>
                <div
                  id="swiper_one"
                  className="swiper border-[6px] border-white bg-white 2xl:w-[140%]"
                  data-aos="fade-left"
                  data-aos-duration={1000}
                >
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <a
                          href="#"
                          className="sm:h-14 h-10 sm:w-14 w-10 rounded-full bg-green-500 flex items-center justify-center"
                        >
                          <svg
                            className="h-5 w-5 fill-white"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M16.1628 6.83709C19.3876 9.02928 21 10.1254 21 12.0001C21 13.8748 19.3876 14.9709 16.1628 17.1631C15.2726 17.7682 14.3897 18.338 13.5783 18.8128C12.8665 19.2293 12.0604 19.6602 11.2258 20.0831C8.00859 21.7134 6.39999 22.5286 4.95724 21.6261C3.5145 20.7236 3.38338 18.8342 3.12114 15.0555C3.04698 13.9868 3 12.9392 3 12.0001C3 11.0609 3.04698 10.0133 3.12114 8.9447C3.38338 5.16597 3.5145 3.2766 4.95725 2.37408C6.39999 1.47155 8.00859 2.28672 11.2258 3.91706C12.0604 4.34 12.8665 4.77085 13.5783 5.18738C14.3897 5.66216 15.2726 6.23193 16.1628 6.83709Z" />
                          </svg>
                        </a>
                      </div>
                      <img
                        src="@/assets/images/hero/saas1.png"
                        alt="saas1"
                        className="w-full h-full rounded-md"
                      />
                    </div>
                    <div className="swiper-slide">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <a
                          href="#"
                          className="sm:h-14 h-10 sm:w-14 w-10 rounded-full bg-green-500 flex items-center justify-center"
                        >
                          <svg
                            className="h-5 w-5 fill-white"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M16.1628 6.83709C19.3876 9.02928 21 10.1254 21 12.0001C21 13.8748 19.3876 14.9709 16.1628 17.1631C15.2726 17.7682 14.3897 18.338 13.5783 18.8128C12.8665 19.2293 12.0604 19.6602 11.2258 20.0831C8.00859 21.7134 6.39999 22.5286 4.95724 21.6261C3.5145 20.7236 3.38338 18.8342 3.12114 15.0555C3.04698 13.9868 3 12.9392 3 12.0001C3 11.0609 3.04698 10.0133 3.12114 8.9447C3.38338 5.16597 3.5145 3.2766 4.95725 2.37408C6.39999 1.47155 8.00859 2.28672 11.2258 3.91706C12.0604 4.34 12.8665 4.77085 13.5783 5.18738C14.3897 5.66216 15.2726 6.23193 16.1628 6.83709Z" />
                          </svg>
                        </a>
                      </div>
                      <img
                        src="assets/images/hero/saas2.png"
                        alt="saas2"
                        className="w-full h-full rounded-md"
                      />
                    </div>
                    <div className="swiper-slide">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <a
                          href="#"
                          className="sm:h-14 h-10 sm:w-14 w-10 rounded-full bg-green-500 flex items-center justify-center"
                        >
                          <svg
                            className="h-5 w-5 fill-white"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M16.1628 6.83709C19.3876 9.02928 21 10.1254 21 12.0001C21 13.8748 19.3876 14.9709 16.1628 17.1631C15.2726 17.7682 14.3897 18.338 13.5783 18.8128C12.8665 19.2293 12.0604 19.6602 11.2258 20.0831C8.00859 21.7134 6.39999 22.5286 4.95724 21.6261C3.5145 20.7236 3.38338 18.8342 3.12114 15.0555C3.04698 13.9868 3 12.9392 3 12.0001C3 11.0609 3.04698 10.0133 3.12114 8.9447C3.38338 5.16597 3.5145 3.2766 4.95725 2.37408C6.39999 1.47155 8.00859 2.28672 11.2258 3.91706C12.0604 4.34 12.8665 4.77085 13.5783 5.18738C14.3897 5.66216 15.2726 6.23193 16.1628 6.83709Z" />
                          </svg>
                        </a>
                      </div>
                      <img
                        src="assets/images/hero/saas3.png"
                        alt="saas3"
                        className="w-full h-full rounded-md"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="absolute bottom-0 inset-x-0 hidden sm:block">
        <img
          src="assets/images/shapes/white-wave.svg"
          alt="white-wave-svg"
          className="w-full -scale-x-100 -scale-y-100"
        />
      </div>
    </section>
    {/* =========== Hero Section End =========== */}
    {/* =========== feature Section Start =========== */}
    <section className="overflow-hidden">
      <div className="xl:py-24 py-16">
        <div className="container">
          <div className="text-center">
            <span className="text-sm font-medium py-1 px-3 rounded-full text-primary bg-primary/10">
              Features
            </span>
            <h1 className="text-3xl/tight font-medium mt-3 mb-4">
              Better Management. Better Performance
            </h1>
            <p className="text-gray-500">
              Start working with <span className="text-primary">Prompt</span> to
              manage your workforce better
            </p>
          </div>
          <div className="xl:pt-16 xl:pb-28 py-16">
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 items-center">
              <div className="relative">
                <div className="hidden sm:block">
                  <div className="after:w-20 after:h-20 after:absolute after:-top-8 after:-start-8 2xl:after:end-0 after:bg-[url('../images/pattern/dot5.svg')]" />
                  <div className="before:w-20 before:h-20 before:absolute before:-bottom-8 before:-end-8 before:bg-[url('../images/pattern/dot2.svg')]" />
                </div>
                <img
                  src="assets/images/hero/saas1.png"
                  alt="saas1"
                  data-aos="fade-right"
                  data-aos-duration={400}
                />
              </div>
              <div className="lg:ms-24">
                <div
                  data-fc-type="accordion"
                  data-aos="fade-up"
                  data-aos-duration={500}
                >
                  {/* 1 */}
                  <button
                    className="pt-2 inline-flex items-center gap-x-4 w-full font-medium text-left text-gray-800 transition-all hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400"
                    data-fc-type="collapse"
                  >
                    <div className="bg-blue-500/10 rounded-lg flex items-center justify-center h-12 w-12">
                      <svg
                        className="h-6 w-6 text-blue-500"
                        viewBox="0 0 24 24"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                      >
                        <g
                          stroke="none"
                          strokeWidth={1}
                          fill="none"
                          fillRule="evenodd"
                        >
                          <polygon id="Shape" points="0 0 24 0 24 24 0 24" />
                          <path
                            d="M18,14 C16.3431458,14 15,12.6568542 15,11 C15,9.34314575 16.3431458,8 18,8 C19.6568542,8 21,9.34314575 21,11 C21,12.6568542 19.6568542,14 18,14 Z M9,11 C6.790861,11 5,9.209139 5,7 C5,4.790861 6.790861,3 9,3 C11.209139,3 13,4.790861 13,7 C13,9.209139 11.209139,11 9,11 Z"
                            id="Combined-Shape"
                            fill="currentColor"
                            opacity="0.3"
                          />
                          <path
                            d="M17.6011961,15.0006174 C21.0077043,15.0378534 23.7891749,16.7601418 23.9984937,20.4 C24.0069246,20.5466056 23.9984937,21 23.4559499,21 L19.6,21 C19.6,18.7490654 18.8562935,16.6718327 17.6011961,15.0006174 Z M0.00065168429,20.1992055 C0.388258525,15.4265159 4.26191235,13 8.98334134,13 C13.7712164,13 17.7048837,15.2931929 17.9979143,20.2 C18.0095879,20.3954741 17.9979143,21 17.2466999,21 C13.541124,21 8.03472472,21 0.727502227,21 C0.476712155,21 -0.0204617505,20.45918 0.00065168429,20.1992055 Z"
                            id="Combined-Shape"
                            fill="currentColor"
                          />
                        </g>
                      </svg>
                    </div>
                    <h1 className="font-medium mb-4 mt-2">
                      Improve Employee Experience
                    </h1>
                  </button>
                  <div className="w-full overflow-hidden duration-300 ps-16">
                    <p className="text-gray-700 dark:text-gray-300">
                      Before we dive into why companies must invest in employee
                      experience (EX), it’s important to understand what this
                      concept entails.
                    </p>
                    <div className="mt-7 flex items-center">
                      <a href="#" className="text-primary">
                        Learn more <i className="fa-solid fa-arrow-right ms-2" />
                      </a>
                    </div>
                  </div>
                  <div className="border-b my-6" />
                  {/* 2 */}
                  <button
                    className="pt-2 inline-flex items-center gap-x-4 w-full font-medium text-left text-gray-800 transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400"
                    data-fc-type="collapse"
                  >
                    <div className="bg-green-500/10 rounded-lg flex items-center justify-center h-12 w-12">
                      <svg
                        className="h-6 w-6 text-green-500"
                        viewBox="0 0 24 24"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                      >
                        <g
                          stroke="none"
                          strokeWidth={1}
                          fill="none"
                          fillRule="evenodd"
                        >
                          <polygon id="Shape" points="0 0 24 0 24 24 0 24" />
                          <path
                            d="M18,8 L16,8 C15.4477153,8 15,7.55228475 15,7 C15,6.44771525 15.4477153,6 16,6 L18,6 L18,4 C18,3.44771525 18.4477153,3 19,3 C19.5522847,3 20,3.44771525 20,4 L20,6 L22,6 C22.5522847,6 23,6.44771525 23,7 C23,7.55228475 22.5522847,8 22,8 L20,8 L20,10 C20,10.5522847 19.5522847,11 19,11 C18.4477153,11 18,10.5522847 18,10 L18,8 Z M9,11 C6.790861,11 5,9.209139 5,7 C5,4.790861 6.790861,3 9,3 C11.209139,3 13,4.790861 13,7 C13,9.209139 11.209139,11 9,11 Z"
                            id="Combined-Shape"
                            fill="currentColor"
                            opacity="0.3"
                          />
                          <path
                            d="M0.00065168429,20.1992055 C0.388258525,15.4265159 4.26191235,13 8.98334134,13 C13.7712164,13 17.7048837,15.2931929 17.9979143,20.2 C18.0095879,20.3954741 17.9979143,21 17.2466999,21 C13.541124,21 8.03472472,21 0.727502227,21 C0.476712155,21 -0.0204617505,20.45918 0.00065168429,20.1992055 Z"
                            id="Mask-Copy"
                            fill="currentColor"
                          />
                        </g>
                      </svg>
                    </div>
                    <h1 className="font-medium mb-4 mt-2">
                      Hiring &amp; Onboarding
                    </h1>
                  </button>
                  <div className="hidden w-full overflow-hidden duration-300 ps-16">
                    <p className="text-gray-700 dark:text-gray-300">
                      Post your job, interview candidates and make offers, all on
                      Prompt. Start hiring today.
                    </p>
                    <div className="mt-7 flex items-center">
                      <a href="#" className="text-primary">
                        Learn more <i className="fa-solid fa-arrow-right ms-2" />
                      </a>
                    </div>
                  </div>
                  <div className="border-b my-6" />
                  {/* 3 */}
                  <button
                    className="pt-2 inline-flex items-center gap-x-4 w-full font-medium text-left text-gray-800 transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400"
                    data-fc-type="collapse"
                  >
                    <div className="bg-orange-500/10 rounded-lg flex items-center justify-center h-12 w-12">
                      <svg
                        className="h-6 w-6 text-orange-500"
                        viewBox="0 0 24 24"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                      >
                        <g
                          stroke="none"
                          strokeWidth={1}
                          fill="none"
                          fillRule="evenodd"
                        >
                          <rect id="bound" x={0} y={0} width={24} height={24} />
                          <rect
                            id="Rectangle-62-Copy"
                            fill="currentColor"
                            opacity="0.3"
                            x={7}
                            y={4}
                            width={3}
                            height={13}
                            rx="1.5"
                          />
                          <rect
                            id="Rectangle-62-Copy-2"
                            fill="currentColor"
                            opacity="0.3"
                            x={12}
                            y={9}
                            width={3}
                            height={8}
                            rx="1.5"
                          />
                          <path
                            d="M5,19 L20,19 C20.5522847,19 21,19.4477153 21,20 C21,20.5522847 20.5522847,21 20,21 L4,21 C3.44771525,21 3,20.5522847 3,20 L3,4 C3,3.44771525 3.44771525,3 4,3 C4.55228475,3 5,3.44771525 5,4 L5,19 Z"
                            id="Path-95"
                            fill="currentColor"
                          />
                          <rect
                            id="Rectangle-62-Copy-4"
                            fill="currentColor"
                            opacity="0.3"
                            x={17}
                            y={11}
                            width={3}
                            height={6}
                            rx="1.5"
                          />
                        </g>
                      </svg>
                    </div>
                    <h1 className="font-medium mb-4 mt-2">
                      People Data &amp; Analytics
                    </h1>
                  </button>
                  <div className="hidden w-full overflow-hidden duration-300 ps-16">
                    <p className="text-gray-700 dark:text-gray-300">
                      Finding committed employees is one of public and private
                      organizations’ top priorities.
                    </p>
                    <div className="mt-7 flex items-center">
                      <a href="#" className="text-primary">
                        Learn more <i className="fa-solid fa-arrow-right ms-2" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="grid lg:grid-cols-2 grid-cols-1n gap-6 items-center">
              <div
                className="order-2 lg:order-1 2xl:w-9/12"
                data-aos="fade-up"
                data-aos-duration={500}
              >
                <div className="h-12 w-12 bg-primary/10 flex items-center justify-center rounded-lg">
                  <svg
                    className="h-7 w-7 text-primary"
                    viewBox="0 0 24 24"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <g
                      stroke="none"
                      strokeWidth={1}
                      fill="none"
                      fillRule="evenodd"
                    >
                      <rect id="bound" x={0} y={0} width={24} height={24} />
                      <path
                        d="M10.8226874,8.36941377 L12.7324324,9.82298668 C13.4112512,8.93113547 14.4592942,8.4 15.6,8.4 C17.5882251,8.4 19.2,10.0117749 19.2,12 C19.2,13.9882251 17.5882251,15.6 15.6,15.6 C14.5814697,15.6 13.6363389,15.1780547 12.9574041,14.4447676 L11.1963369,16.075302 C12.2923051,17.2590082 13.8596186,18 15.6,18 C18.9137085,18 21.6,15.3137085 21.6,12 C21.6,8.6862915 18.9137085,6 15.6,6 C13.6507856,6 11.9186648,6.9294879 10.8226874,8.36941377 Z"
                        id="Combined-Shape"
                        fill="currentColor"
                        opacity="0.3"
                      />
                      <path
                        d="M8.4,18 C5.0862915,18 2.4,15.3137085 2.4,12 C2.4,8.6862915 5.0862915,6 8.4,6 C11.7137085,6 14.4,8.6862915 14.4,12 C14.4,15.3137085 11.7137085,18 8.4,18 Z"
                        id="Oval-14-Copy"
                        fill="currentColor"
                      />
                    </g>
                  </svg>
                </div>
                <h1 className="text-3xl/tight font-medium mt-6 mb-4">
                  Smart Payroll. Paying your people couldn't be easier
                </h1>
                <p className="text-gray-500">
                  You can modify your pages with drag-dropping , can import demos
                  with just ” One Click” and can modify theme setting easy-to-use
                  options panel.
                </p>
                <div className="flex items-center mt-12">
                  <a href="#" className="text-primary">
                    Learn more <i className="fa-solid fa-arrow-right ms-2" />{" "}
                  </a>
                </div>
              </div>
              <div className="relative order-1 lg:order-2">
                <div className="hidden sm:block">
                  <div className="after:w-20 after:h-20 after:absolute after:-top-8 after:-end-8 2xl:after:-end-8 after:bg-[url('../images/pattern/dot2.svg')]" />
                  <div className="before:w-20 before:h-20 before:absolute before:-bottom-8 before:-start-8 before:bg-[url('../images/pattern/dot5.svg')]" />
                </div>
                <img
                  src="assets/images/hero/saas2.png"
                  alt="saas2"
                  data-aos="fade-left"
                  data-aos-duration={400}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="xl:py-24 py-16">
        <div className="container" data-aos="fade-up" data-aos-duration={600}>
          <div className="text-center">
            <h1 className="text-2xl font-medium">
              Any many more powerful features
            </h1>
          </div>
          <div className="py-16">
            <div className="grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5">
              <div className="order-1">
                <div className="flex flex-col gap-5">
                  <p className="flex items-center gap-3">
                    {" "}
                    <i className="fa-solid fa-check text-green-500 text-xl" />{" "}
                    Hire and Retain Top Talent
                  </p>
                  <p className="flex items-center gap-3">
                    {" "}
                    <i className="fa-solid fa-check text-green-500 text-xl" />{" "}
                    Team Management
                  </p>
                </div>
              </div>
              <div className="order-3 xl:order-2">
                <div className="flex flex-col gap-5">
                  <p className="flex items-center gap-3">
                    {" "}
                    <i className="fa-solid fa-check text-green-500 text-xl" />{" "}
                    Stay Compliant
                  </p>
                  <p className="flex items-center gap-3">
                    {" "}
                    <i className="fa-solid fa-check text-green-500 text-xl" />{" "}
                    Improve Productivity
                  </p>
                  <p className="flex items-center gap-3">
                    {" "}
                    <i className="fa-solid fa-check text-green-500 text-xl" />{" "}
                    Improve Experience
                  </p>
                </div>
              </div>
              <div className="order-4 xl:order-3">
                <div className="flex flex-col gap-5">
                  <p className="flex items-center gap-3">
                    {" "}
                    <i className="fa-solid fa-check text-green-500 text-xl" />{" "}
                    Self-service Time Tracking
                  </p>
                  <p className="flex items-center gap-3">
                    {" "}
                    <i className="fa-solid fa-check text-green-500 text-xl" />{" "}
                    Performance Management
                  </p>
                  <p className="flex items-center gap-3">
                    {" "}
                    <i className="fa-solid fa-check text-green-500 text-xl" />{" "}
                    Expert HR
                  </p>
                </div>
              </div>
              <div className="order-2 xl:order-4">
                <div className="flex flex-col gap-5">
                  <p className="flex items-center gap-3">
                    {" "}
                    <i className="fa-solid fa-check text-green-500 text-xl" /> New
                    Hire Checklist
                  </p>
                  <p className="flex items-center gap-3">
                    {" "}
                    <i className="fa-solid fa-check text-green-500 text-xl" /> Tax
                    Calculator
                  </p>
                </div>
              </div>
            </div>
          </div>
          <button className="flex items-center justify-center mx-auto">
            <a
              href="#"
              className="bg-primary text-white rounded-lg text-sm font-semibold flex-none hover:shadow-lg  hover:shadow-primary/30 focus:shadow-none focus:outline focus:outline-primary/40 px-6 py-3"
            >
              Sign Up Now <i className="fa-solid fa-arrow-right ms-2" />{" "}
            </a>
          </button>
        </div>
      </div>
    </section>
    {/* =========== feature Section end =========== */}
    {/* =========== clients Section Start =========== */}
    <section className="bg-gradient-to-r from-gray-100/70 to-gray-100 relative xl:py-24 py-16">
      <div className="absolute top-0 inset-x-0 hidden sm:block">
        <img
          src="assets/images/shapes/white-wave.svg"
          alt="svg"
          className="w-full -scale-x-100"
        />
      </div>
      <div className="py-5">
        <div className="container" data-aos="fade-up" data-aos-duration={300}>
          <div className="text-center">
            <span className="text-sm font-medium py-1 px-3 rounded-full text-primary bg-primary/10">
              Clients
            </span>
            <h1 className="text-3xl/tight font-medium mt-3 mb-4">
              The smart people management you need
            </h1>
            <p className="text-gray-500">
              21,000+ organizations trust{" "}
              <span className="text-primary">Prompt</span> to drive perfomance
              &amp; engagement
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center lg:gap-24 gap-10 mt-14">
            <div>
              <img src="assets/images/brands/amazon.svg" className="h-8" />
            </div>
            <div>
              <img src="assets/images/brands/google.svg" className="h-8" />
            </div>
            <div>
              <img src="assets/images/brands/paypal.svg" className="h-8" />
            </div>
            <div>
              <img src="assets/images/brands/spotify.svg" className="h-8" />
            </div>
            <div>
              <img src="assets/images/brands/shopify.svg" className="h-8" />
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* =========== clients Section end =========== */}
    {/* =========== testimonial Section Start =========== */}
    <section className="py-16 sm:py-24 overflow-x-hidden">
      <div className="container" data-aos="fade-up" data-aos-duration={600}>
        <div className="grid xl:grid-cols-4 grid-cols-3 gap-6">
          <div className="col-span-3 lg:col-span-1">
            <span className="text-sm font-medium py-1 px-3 rounded-full text-primary bg-primary/10">
              Feedback
            </span>
            <h1 className="text-3xl/tight font-medium mt-3 mb-4">
              What people say
            </h1>
            <p className="text-gray-500">
              Few valuables words from our customers
            </p>
            <div className="flex gap-4 mt-10">
              <div className="button-prev text-xl transition-all duration-300 hover:text-primary">
                <i className="fa-solid fa-arrow-left" />
              </div>
              <div className="button-next text-xl transition-all duration-300 hover:text-primary">
                <i className="fa-solid fa-arrow-right" />
              </div>
            </div>
          </div>
          <div className="col-span-3 lg:col-span-2 xl:col-span-3">
            <div className="relative">
              <div className="hidden sm:block">
                <div className="before:w-24 before:h-24 before:absolute before:-top-8 before:-end-8 before:bg-[url('../images/pattern/dot5.svg')]" />
                <div className="after:w-24 after:h-24 after:absolute after:-bottom-8 after:-start-8 after:bg-[url('../images/pattern/dot2.svg')]" />
              </div>
              <div id="swiper_one" className="swiper relative">
                <div className="swiper-wrapper z-10">
                  {/* 1 */}
                  <div className="swiper-slide p-10 border rounded-xl bg-white shadow">
                    <i className="fa-solid fa-quote-left text-gray-500 text-5xl" />
                    <p className="my-4">
                      It is one of the very convenient to use project manager
                      ever! I have tried many project management apps for my daily
                      tasks, but this one is far better than others. Simply loved
                      it!
                    </p>
                    <div className="border-b border-gray-200 w-full my-7" />
                    <div className="flex items-center gap-2">
                      <img
                        src="assets/images/avatars/img-1.jpg"
                        alt="avatar"
                        className="h-10 w-10 rounded-full"
                      />
                      <div>
                        <h1 className="text-sm mb-1">Cersei Lannister</h1>
                        <p className="text-gray-500 text-xs">
                          Senior Project Manager
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* 2 */}
                  <div className="swiper-slide p-10 border rounded-xl bg-white shadow">
                    <i className="fa-solid fa-quote-left text-gray-500 text-5xl" />
                    <p className="my-4">
                      It is one of the very convenient to use project manager
                      ever! I have tried many project management apps for my daily
                      tasks, but this one is far better than others. Simply loved
                      it!
                    </p>
                    <div className="border-b border-gray-200 w-full my-7" />
                    <div className="flex items-center gap-2">
                      <img
                        src="assets/images/avatars/img-2.jpg"
                        alt="avatar"
                        className="h-10 w-10 rounded-full"
                      />
                      <div>
                        <h1 className="text-sm mb-1">Cersei Lannister</h1>
                        <p className="text-gray-500 text-xs">
                          Senior Project Manager
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* 3 */}
                  <div className="swiper-slide p-10 border rounded-xl bg-white shadow">
                    <i className="fa-solid fa-quote-left text-gray-500 text-5xl" />
                    <p className="my-4">
                      It is one of the very convenient to use project manager
                      ever! I have tried many project management apps for my daily
                      tasks, but this one is far better than others. Simply loved
                      it!
                    </p>
                    <div className="border-b border-gray-200 w-full my-7" />
                    <div className="flex items-center gap-2">
                      <img
                        src="assets/images/avatars/img-3.jpg"
                        alt="avatar"
                        className="h-10 w-10 rounded-full"
                      />
                      <div>
                        <h1 className="text-sm mb-1">Cersei Lannister</h1>
                        <p className="text-gray-500 text-xs">
                          Senior Project Manager
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* =========== testimonial Section end =========== */}
    {/* =========== pricing Section Start =========== */}
    <section className="bg-gradient-to-r from-gray-100/70 to-gray-100 relative py-16 sm:py-24">
      <div className="absolute top-0 inset-x-0 hidden sm:block">
        <img
          src="assets/images/shapes/white-wave.svg"
          alt="svg"
          className="w-full -scale-x-100"
        />
      </div>
      <div className="py-5">
        <div className="container relative">
          <div className="text-center">
            <h1 className="text-3xl/tight font-medium mb-4">Pricing</h1>
            <p className="text-gray-500">
              Pricing that <span className="text-primary">works </span> for
              everyone
            </p>
          </div>
          <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7 mt-14">
            {/* 1 */}
            <div data-aos="fade-up" data-aos-duration={500}>
              <div className="transition-all duration-300 pointer-events-auto hover:shadow-[0_0_1.5rem_0_rgba(0,0,0,.12)] hover:-translate-y-1">
                <div className="border border-gray-300 bg-white rounded w-full h-full text-center p-5">
                  <span className="text-lg text-primary">Starter</span>
                  <h1 className="text-3xl/tight font-semibold mt-3">
                    <sup className="text-gray-500 text-sm font-normal">$</sup> 49{" "}
                    <sub className="text-gray-500 text-sm font-normal">
                      /month
                    </sub>
                  </h1>
                  <div className="border-b border-gray-200 w-full my-7" />
                  <div>
                    <div className="flex flex-col gap-4">
                      <p className="flex items-center text-gray-600 gap-4">
                        <i className="fa-solid fa-check text-green-500 text-lg" />
                        Up to 600 minutes usage time
                      </p>
                      <p className="flex items-center text-gray-600 gap-4">
                        <i className="fa-solid fa-check text-green-500 text-lg" />
                        Use for personal only
                      </p>
                      <p className="flex items-center text-gray-600 gap-4">
                        <i className="fa-solid fa-check text-green-500 text-lg" />
                        Add up to 10 attendees
                      </p>
                      <p className="flex items-center text-gray-600 gap-4">
                        <i className="fa-solid fa-check text-green-500 text-lg" />
                        Technical support via email
                      </p>
                    </div>
                    <div className="flex mt-[120px]">
                      <a
                        href="#"
                        className="bg-primary/10 text-primary/90 w-full py-3 rounded-lg border border-transparent hover:border hover:border-primary/20 transition-all duration-300"
                      >
                        Purchase Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* 2 */}
            <div data-aos="fade-up" data-aos-duration={700}>
              <div className="transition-all duration-300 pointer-events-auto hover:shadow-[0_0_1.5rem_0_rgba(0,0,0,.12)] hover:-translate-y-1">
                <div className="border border-gray-300 bg-white rounded w-full h-full text-center p-5">
                  <span className="text-lg text-primary">Professional</span>
                  <h1 className="text-3xl/tight font-semibold mt-3">
                    <sup className="text-gray-500 text-sm font-normal">$</sup> 99{" "}
                    <sub className="text-gray-500 text-sm font-normal">
                      /month
                    </sub>
                  </h1>
                  <div className="border-b border-gray-200 w-full my-7" />
                  <div>
                    <div className="flex flex-col gap-4">
                      <p className="flex items-center text-gray-600 gap-4">
                        <i className="fa-solid fa-check text-green-500 text-lg" />
                        Up to 6000 minutes usage time
                      </p>
                      <p className="flex items-center text-gray-600 gap-4">
                        <i className="fa-solid fa-check text-green-500 text-lg" />
                        Use for personal or a commercial
                      </p>
                      <p className="flex items-center text-gray-600 gap-4">
                        <i className="fa-solid fa-check text-green-500 text-lg" />
                        Add up to 100 attendees
                      </p>
                      <p className="flex items-center text-gray-600 gap-4">
                        <i className="fa-solid fa-check text-green-500 text-lg" />
                        Up to 5 teams
                      </p>
                      <p className="flex items-center text-gray-600 gap-4">
                        <i className="fa-solid fa-check text-green-500 text-lg" />
                        Technical support via email
                      </p>
                    </div>
                    <div className="flex mt-20">
                      <a
                        href="#"
                        className="bg-primary text-white w-full py-3 rounded-lg border border-transparent hover:shadow-lg hover:shadow-primary/30 focus:shadow-none focus:outline focus:outline-primary/40 hover:border hover:border-primary transition-all duration-300"
                      >
                        Purchase Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* 3 */}
            <div data-aos="fade-up" data-aos-duration={900}>
              <div className="transition-all duration-300 pointer-events-auto hover:shadow-[0_0_1.5rem_0_rgba(0,0,0,.12)] hover:-translate-y-1">
                <div className="border border-gray-300 bg-white rounded w-full h-full text-center p-5">
                  <span className="text-lg text-primary">Enterprise</span>
                  <h1 className="text-3xl/tight font-semibold mt-3">
                    <sup className="text-gray-500 text-sm font-normal">$</sup> 599{" "}
                    <sub className="text-gray-500 text-sm font-normal">
                      /month
                    </sub>
                  </h1>
                  <div className="border-b border-gray-200 w-full my-7" />
                  <div>
                    <div className="flex flex-col gap-4">
                      <p className="flex items-center text-gray-600 gap-4">
                        <i className="fa-solid fa-check text-green-500 text-lg" />
                        Unlimited usage time
                      </p>
                      <p className="flex items-center text-gray-600 gap-4">
                        <i className="fa-solid fa-check text-green-500 text-lg" />
                        Use for personal or a commercial
                      </p>
                      <p className="flex items-center text-gray-600 gap-4">
                        <i className="fa-solid fa-check text-green-500 text-lg" />
                        Add Unlimited attendees
                      </p>
                      <p className="flex items-center text-gray-600 gap-4">
                        <i className="fa-solid fa-check text-green-500 text-lg" />
                        24x7 Technical support via phone
                      </p>
                      <p className="flex items-center text-gray-600 gap-4">
                        <i className="fa-solid fa-check text-green-500 text-lg" />
                        Technical support via email
                      </p>
                    </div>
                    <div className="flex mt-20">
                      <a
                        href="#"
                        className="bg-primary/10 text-primary/90 w-full py-3 rounded-lg border border-transparent hover:border hover:border-primary/20 transition-all duration-300"
                      >
                        Purchase Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 inset-x-0 hidden sm:block">
        <img
          src="assets/images/shapes/white-wave.svg"
          alt="svg"
          className="w-full scale-x-100 -scale-y-100"
        />
      </div>
    </section>
    {/* =========== pricing Section end =========== */}
    {/* =========== faq Section start =========== */}
    <section className="py-16 sm:py-24">
      <div className="container" data-aos="fade-up" data-aos-duration={2000}>
        <div className="text-center">
          <span className="text-sm font-medium py-1 px-3 rounded-full text-primary bg-primary/10">
            FAQs
          </span>
          <h1 className="text-3xl/tight font-medium mt-3 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-500">
            Here are some of the basic types of questions for our customers
          </p>
        </div>
        <div
          data-fc-type="accordion"
          className="mt-14 lg:w-3/4 lg:mx-auto 2xl:w-2/3"
        >
          {/* 1 */}
          <div className="border border-gray-300 rounded-lg">
            <button
              className="inline-flex p-5 items-center justify-between w-full font-semibold text-left transition"
              data-fc-type="collapse"
            >
              Can I use this template for my client?
              <span className="material-symbols-rounded text-xl block transition-all fc-collapse-open:rotate-180">
                <i className="fa-solid fa-angle-down" />
              </span>
            </button>
            <div className="w-full overflow-hidden transition-[height] duration-300">
              <p className="text-gray-700 dark:text-gray-300 pt-3 p-5">
                Yup, the marketplace license allows you to use this theme in any
                end products. For more information on licenses, please refere
                license terms on marketplace.
              </p>
            </div>
          </div>
          {/* 2 */}
          <div className="border border-gray-300 rounded-lg mt-4">
            <button
              className="p-5 inline-flex items-center justify-between w-full font-semibold text-left transition"
              data-fc-type="collapse"
            >
              Can this theme work with WordPress?
              <span className="material-symbols-rounded text-xl block transition-all fc-collapse-open:rotate-180">
                <i className="fa-solid fa-angle-down" />
              </span>
            </button>
            <div className="hidden w-full overflow-hidden transition-[height] duration-300">
              <p className="text-gray-700 dark:text-gray-300 pt-3 p-5">
                No. This is a HTML template. It won't directly with WordPress,
                though you can convert this into WordPress compatible theme.
              </p>
            </div>
          </div>
          {/* 3 */}
          <div className="border border-gray-300 rounded-lg mt-4">
            <button
              className="p-5 inline-flex items-center justify-between w-full font-semibold text-left transition"
              data-fc-type="collapse"
            >
              How do I get help with the theme?
              <span className="material-symbols-rounded text-xl block transition-all fc-collapse-open:rotate-180">
                <i className="fa-solid fa-angle-down" />
              </span>
            </button>
            <div className="hidden w-full overflow-hidden transition-[height] duration-300">
              <p className="text-gray-700 dark:text-gray-300 pt-3 p-5">
                Use our dedicated support email (support@coderthemes.com) to send
                your issues or feedback. We are here to help anytime.
              </p>
            </div>
          </div>
          {/* 4 */}
          <div className="border border-gray-300 rounded-lg mt-4">
            <button
              className="p-5 inline-flex items-center justify-between w-full font-semibold text-left transition"
              data-fc-type="collapse"
            >
              Will you regularly give updates of Prompt ?
              <span className="material-symbols-rounded text-xl block transition-all fc-collapse-open:rotate-180">
                <i className="fa-solid fa-angle-down" />
              </span>
            </button>
            <div className="hidden w-full overflow-hidden transition-[height] duration-300">
              <p className="text-gray-700 dark:text-gray-300 pt-3 p-5">
                Yes, We will update the Prompt regularly. All the future updates
                would be available without any cost.
              </p>
            </div>
          </div>
        </div>
        <div className="text-center mt-14">
          <p className="inline-flex flex-wrap gap-1 bg-gray-100 text-sm rounded-lg py-2 px-5">
            Still have unanswered questions?
            <a href="#" className="hover:text-primary transition-all">
              {" "}
              Contact Us
            </a>
          </p>
        </div>
      </div>
    </section>
    {/* =========== faq Section end =========== */}
    {/* =========== footer Section start =========== */}
    <Footer/>
    {/* =========== footer Section end =========== */}
  </>
  

  );
}
