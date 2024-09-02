import { HeroSection } from "@/app/components/sections/main/hero";
import { FeaturesSection } from "./components/sections/main/features";

export default function Home() {
  return (
    <>
      {/* =========== Hero Section Start =========== */}
      <HeroSection />
      {/* =========== Hero Section End =========== */}
      {/* =========== feature Section Start =========== */}
        <FeaturesSection />
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
    </>

  );
}
