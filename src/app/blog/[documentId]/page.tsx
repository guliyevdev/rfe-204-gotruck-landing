import Link from "next/link";
import { notFound } from "next/navigation";

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

type RichTextChild = {
    text?: string;
};

type RichTextNode = {
    type?: string;
    children?: RichTextChild[];
};

type Article = {
    id: number;
    documentId: string;
    title: string;
    description: string;
    slug: string;
    createdAt: string;
    content?: RichTextNode[] | null;
    cover?: ArticleCover | null;
};

type ArticleResponse = {
    data?: Article | null;
};

const API_BASE_URL =
    process.env.NEXT_PUBLIC_BASE_URL || "http://34.51.231.49:1337/api";

const ARTICLES_API_URL = `${API_BASE_URL.replace(/\/$/, "")}/articles`;
const DEFAULT_COVER_IMAGE = "/assets/images/hero/coworking1.webp";

const resolveCoverImage = (cover?: ArticleCover | null) => {
    if (!cover) {
        return DEFAULT_COVER_IMAGE;
    }

    const imageUrl =
        cover.formats?.large?.url ||
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

const renderContent = (content?: RichTextNode[] | null) => {
    if (!Array.isArray(content)) {
        return null;
    }

    return content.map((node, index) => (
        <p
            key={`${node.type}-${index}`}
            className="text-slate-600 leading-relaxed mb-4"
        >
            {node.children?.map((child, childIndex) => (
                <span key={childIndex}>{child.text}</span>
            ))}
        </p>
    ));
};

async function fetchArticle(documentId: string): Promise<Article | null> {
    try {
        const res = await fetch(
            `${ARTICLES_API_URL}/${encodeURIComponent(
                documentId,
            )}?populate=*`,
            {
                next: { revalidate: 60 },
            },
        );

        if (!res.ok) {
            return null;
        }

        const payload = (await res.json()) as ArticleResponse;
        return payload.data ?? null;
    } catch (error) {
        console.error(error);
        return null;
    }
}

type BlogDetailPageProps = {
    params: {
        documentId: string;
    };
};

const BlogDetailPage = async ({ params }: BlogDetailPageProps) => {
    const article = await fetchArticle(params.documentId);

    if (!article) {
        notFound();
    }

    return (
        <section className="py-16">
            <div className="container max-w-4xl mx-auto px-4">
                <br/>
                <Link
                    href="/blog"
                    className="text-sm font-medium text-primary hover:underline"
                >
                    ← Bloga qayıt
                </Link>

                <div className="mt-6">
                    <p className="text-slate-500 text-sm">
                        {formatDate(article.createdAt)}
                    </p>
                    <h1 className="text-3xl md:text-4xl font-semibold mt-2">
                        {article.title}
                    </h1>
                    <p className="text-slate-600 mt-4">
                        {article.description}
                    </p>
                </div>

                <div className="mt-8">
                    <img
                        src={resolveCoverImage(article.cover)}
                        alt={article.title}
                        className="w-full rounded-md shadow-md object-cover max-h-[460px]"
                    />
                </div>

                <article className="mt-10 space-y-4 text-slate-700 leading-relaxed">
                    {renderContent(article.content) ?? (
                        <p className="text-slate-600">
                            Bu məqalə üçün əlavə məzmun tezliklə əlavə olunacaq.
                        </p>
                    )}
                </article>
            </div>
        </section>
    );
};

export default BlogDetailPage;
