
import Link from "next/link";

type ImageFormat = {
    url: string;
};

type ArticleCover = {
    url?: string;
    formats?: {
        large?: ImageFormat;
        medium?: ImageFormat;
        small?: ImageFormat;
        thumbnail?: ImageFormat;
    };
};

type Article = {
    id: number;
    title: string;
    description: string;
    slug: string;
    createdAt: string;
    content?: unknown;
    cover?: ArticleCover | null;
};

type ArticleResponse = {
    data?: Article[];
};

const API_BASE_URL =
    process.env.NEXT_PUBLIC_BASE_URL ||
    "http://34.51.231.49:1337/api";

const ARTICLES_API_URL = `${API_BASE_URL.replace(/\/$/, "")}/articles/?populate=*`;
const DEFAULT_COVER_IMAGE = "assets/images/hero/coworking1.webp";

const resolveCoverImage = (cover?: ArticleCover | null) => {
    if (!cover) {
        return DEFAULT_COVER_IMAGE;
    }

    const imageUrl =
        cover.formats?.medium?.url ||
        cover.formats?.small?.url ||
        cover.formats?.thumbnail?.url ||
        cover.url;

    if (!imageUrl) {
        return DEFAULT_COVER_IMAGE;
    }

    try {
        return new URL(imageUrl, API_BASE_URL).href;
    } catch {
        return DEFAULT_COVER_IMAGE;
    }
};

async function fetchArticles(): Promise<Article[]> {
    try {
        const res = await fetch(ARTICLES_API_URL, {
            next: { revalidate: 60 },
        });

        if (!res.ok) {
            throw new Error("Failed to fetch articles");
        }

        const payload = (await res.json()) as ArticleResponse;
        return Array.isArray(payload.data) ? payload.data : [];
    } catch (error) {
        console.error(error);
        return [];
    }
}

const formatDate = (date: string) => {
    try {
        return new Intl.DateTimeFormat("az-Latn-AZ", {
            day: "2-digit",
            month: "long",
            year: "numeric",
        }).format(new Date(date));
    } catch {
        return "";
    }
};

export const BlogSection = async () => {
    const articles = await fetchArticles();

    return (
        <section className="py-20">
            <div className="container">
                <div className="text-center">
                    <span className="text-sm font-medium py-1 px-3 rounded-full text-primary bg-primary/10">
                        Blog
                    </span>
                    <h1 className="text-3xl font-medium my-3">
                        Sektora aid maraqlı postlarımız
                    </h1>
                </div>
                <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-12 gap-6">
                    {articles.length > 0 ? (
                        articles.map((article, index) => (
                            <div
                                key={article.id}
                                className="shadow-md rounded-md"
                                data-aos="fade-up"
                                data-aos-duration={500 + index * 200}
                            >
                                <div className="relative">
                                    <div className="absolute end-4 top-3">
                                        <span className="px-3 py-1 text-sm font-medium text-white rounded-md bg-black">
                                            Logistics
                                        </span>
                                    </div>
                                    <img
                                        src={resolveCoverImage(article.cover)}
                                        alt={article.title}
                                    />
                                    <div className="absolute -bottom-5">
                                        <svg
                                            className="w-full h-14 text-white"
                                            viewBox="0 0 528 40"
                                            version="1.1"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g
                                                id="shape"
                                                transform="matrix(-1.138336E-07 -1 1 -1.138336E-07 0 39.92764)"
                                            >
                                                <path
                                                    d="M0 0L40.5467 0C40.5467 0 -31.8215 230.87 38.7134 528.217C39.8794 533.133 31.7549 527.502 31.0925 528.75C28.7914 533.084 26.1543 528.191 24.4327 529.178C59.2372 539.206 14.0091 521.981 12.9329 530.001L1.02722 528.284L0 0Z"
                                                    transform="translate(7.629395E-06 6.103516E-05)"
                                                    fill="currentColor"
                                                    stroke="none"
                                                />
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <p className="text-sm">
                                        {formatDate(article.createdAt)}
                                    </p>
                                    <h4 className="text-lg hover:text-blue-700 font-semibold my-2">
                                        <Link href={`/blog/${article.slug}`}>
                                            {article.title}
                                        </Link>
                                    </h4>
                                    <p className="text-slate-400 my-2">
                                        {article.description}
                                        <Link
                                            href={`/blog/${article.slug}`}
                                            className="text-slate-800 hover:text-blue-700 ms-1 inline-block"
                                        >
                                            Read More
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-span-full text-center text-slate-500">
                            Hal-hazırda heç bir bloq yazısı mövcud deyil.
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};
