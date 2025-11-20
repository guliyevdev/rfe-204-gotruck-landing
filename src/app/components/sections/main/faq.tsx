"use client";

import axios from '@/utils/axios';
import { useState, useEffect } from "react";

type FaqItem = {
    id: number;
    documentId?: string;
    question: string;
    answer: string;
};

export const FaqSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [faqData, setFaqData] = useState<FaqItem[]>([]);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    useEffect(() => {
        const loadFaqData = async () => {
            try {
                const { data } = await axios.get('/faqs');
                const faqs: FaqItem[] = Array.isArray(data?.data) ? data.data : [];

                setFaqData(faqs);
                setOpenIndex(faqs.length ? 0 : null);
            } catch (error) {
                console.error('Failed to load FAQ data:', error);
            }
        };

        loadFaqData();
    }, []);

    return (
        <section className="py-16 sm:py-24">
            <div className="container" data-aos="fade-up" data-aos-duration={2000}>
                <div className="text-center">
                    <span className="text-sm font-medium py-1 px-3 rounded-full text-primary bg-primary/10">
                        FAQs
                    </span>
                    <h1 className="text-3xl/tight font-medium mt-3 mb-4">
                        Tez-tez verilən suallar
                    </h1>
                    <p className="text-gray-500">
                       Müştərilərimizin ən çox verdiyi sualların cavabları
                    </p>
                </div>
                <div
                    data-fc-type="accordion"
                    className="mt-14 lg:w-3/4 lg:mx-auto 2xl:w-2/3"
                >
                    {faqData.map((faq, index) => (
                        <div key={faq.documentId ?? faq.id ?? index} className="border border-gray-300 rounded-lg mt-4">
                            <button
                                className="p-5 inline-flex items-center justify-between w-full font-semibold text-left transition"
                                data-fc-type="collapse"
                                onClick={() => handleToggle(index)}
                            >
                                {faq.question}
                                <span className="material-symbols-rounded text-xl block transition-all fc-collapse-open:rotate-180">
                                    <i className="fa-solid fa-angle-down" />
                                </span>
                            </button>
                            <div
                                className={`w-full overflow-hidden transition-[max-height] duration-300 ${openIndex === index ? 'max-h-96' : 'max-h-0'
                                    }`}
                            >
                                <p className="text-gray-700 dark:text-gray-300 pt-3 p-5">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-14">
                    <p className="inline-flex flex-wrap gap-1 bg-gray-100 text-sm rounded-lg py-2 px-5">
                        <a href="#" className="hover:text-primary transition-all">
                        Hələ də cavabsız suallarınız var?
                            {' '}
                            Bizə yazın
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
};
