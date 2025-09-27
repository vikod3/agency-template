import { usePageMeta } from '@/hooks/use-page-meta';
import MinimalHeroSection from "@/components/minimal-hero-section";
import SchemaMarkup from "@/components/seo/SchemaMarkup";

const Minimal = () => {
  usePageMeta({
    title: "Agency Template - Premium Web Design & Development",
    description: "Professional agency template for web design and development services. Modern, responsive template perfect for creative agencies, studios, and freelancers.",
    keywords: "agency template, web design, development services, creative agency, portfolio template, business website, responsive design, modern template",
    canonical: "https://webfluin.com/minimal",
    ogImage: "https://webfluin.com/lovable-uploads/ae0159e8-2fca-4946-87a4-a6a4677506b0.png"
  });

  return (
    <div className="min-h-screen">
      <SchemaMarkup type="organization" />
      <SchemaMarkup type="website" />
      <main>
        <MinimalHeroSection />
      </main>
    </div>
  );
};

export default Minimal;