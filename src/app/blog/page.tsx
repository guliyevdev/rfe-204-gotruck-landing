import { BlogSection } from "@/app/components/sections/main/blogs";

const BlogPage = () => {
    return (
        <>
            <section className="py-16 bg-slate-50">
                <div className="container text-center">
                    <p className="text-sm font-semibold text-primary uppercase tracking-[0.3em]">
                        Blog
                    </p>
                    <h1 className="text-4xl font-semibold text-slate-900 mt-4">
                        Maraqlandığınız mövzular
                    </h1>
                    <p className="text-slate-500 max-w-2xl mx-auto mt-4">
                        Gotruck bloqundakı son yazıları izləyərək logistika
                        dünyasındakı yeniliklərdən xəbərdar olun.
                    </p>
                </div>
            </section>
            <BlogSection />
        </>
    );
};

export default BlogPage;
