"use client";

import { useState } from "react";

export const FaqSection = () => {

    const [openIndex, setOpenIndex] = useState<number | null>(1);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
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
        onClick={() => handleToggle(1)}
    >
        Can I use this template for my client?
        <span className="material-symbols-rounded text-xl block transition-all fc-collapse-open:rotate-180">
            <i className="fa-solid fa-angle-down" />
        </span>
    </button>
    <div
        className={`w-full overflow-hidden transition-[max-height] duration-300 ${openIndex === 1 ? 'max-h-96' : 'max-h-0'
            }`}
    >
        <p className="text-gray-700 dark:text-gray-300 pt-3 p-5">
            Yup, the marketplace license allows you to use this theme in any
            end products. For more information on licenses, please refer to
            the license terms on the marketplace.
        </p>
    </div>
</div>
<div className="border border-gray-300 rounded-lg mt-4">
    <button
        className="p-5 inline-flex items-center justify-between w-full font-semibold text-left transition"
        data-fc-type="collapse"
        onClick={() => handleToggle(2)}
    >
        Can this theme work with WordPress?
        <span className="material-symbols-rounded text-xl block transition-all fc-collapse-open:rotate-180">
            <i className="fa-solid fa-angle-down" />
        </span>
    </button>
    <div
        className={`w-full overflow-hidden transition-[max-height] duration-300 ${openIndex === 2 ? 'max-h-96' : 'max-h-0'
            }`}
    >
        <p className="text-gray-700 dark:text-gray-300 pt-3 p-5">
            No. This is an HTML template. It won't work directly with
            WordPress, though you can convert this into a WordPress
            compatible theme.
        </p>
    </div>
</div>
<div className="border border-gray-300 rounded-lg mt-4">
    <button
        className="p-5 inline-flex items-center justify-between w-full font-semibold text-left transition"
        data-fc-type="collapse"
        onClick={() => handleToggle(3)}
    >
        How do I get help with the theme?
        <span className="material-symbols-rounded text-xl block transition-all fc-collapse-open:rotate-180">
            <i className="fa-solid fa-angle-down" />
        </span>
    </button>
    <div
        className={`w-full overflow-hidden transition-[max-height] duration-300 ${openIndex === 3 ? 'max-h-96' : 'max-h-0'
            }`}
    >
        <p className="text-gray-700 dark:text-gray-300 pt-3 p-5">
            Use our dedicated support email (support@coderthemes.com) to send
            your issues or feedback. We are here to help anytime.
        </p>
    </div>
</div>
<div className="border border-gray-300 rounded-lg mt-4">
    <button
        className="p-5 inline-flex items-center justify-between w-full font-semibold text-left transition"
        data-fc-type="collapse"
        onClick={() => handleToggle(4)}
    >
        Will you regularly give updates of Prompt?
        <span className="material-symbols-rounded text-xl block transition-all fc-collapse-open:rotate-180">
            <i className="fa-solid fa-angle-down" />
        </span>
    </button>
    <div
        className={`w-full overflow-hidden transition-[max-height] duration-300 ${openIndex === 4 ? 'max-h-96' : 'max-h-0'
            }`}
    >
        <p className="text-gray-700 dark:text-gray-300 pt-3 p-5">
            Yes, we will update the Prompt regularly. All the future updates
            would be available without any cost.
        </p>
    </div>
</div>
                </div>
                <div className="text-center mt-14">
                    <p className="inline-flex flex-wrap gap-1 bg-gray-100 text-sm rounded-lg py-2 px-5">
                        Still have unanswered questions?
                        <a href="#" className="hover:text-primary transition-all">
                            {' '}
                            Contact Us
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
}