import CaseStudyDetail from "@/pages/case_studies/case_study_details"; 
import type { Route } from "../+types/root";
import type { Project } from "@/types/project";
import { ProjectData } from "@/data/project_data";
import { CaseStudyData } from "@/data/case_study_data";
import type { CaseStudy } from "@/types/case_study";

const SITE_NAME = "Rowell Jay Real | Portfolio";
const SITE_URL = "https://rowell-jay-online-resume.netlify.app";

export function meta({ params }: Route.MetaArgs) {
    const study: CaseStudy | undefined = CaseStudyData.find(
        (item) => item.slug === params.slug,
    );

    if (!study) {
        return [
        { title: `Case Study Not Found | ${SITE_NAME}` },
        {
            name: "description",
            content: "The requested project case study could not be found.",
        },
        { name: "robots", content: "noindex, follow" },
        ];
    }

    const title = `${study.title} | ${SITE_NAME}`;

    const description =
        study.description ||
        `Explore the ${study.title} case study, including its development process, technologies, and implementation.`;

    // Use an absolute image URL for social sharing.
    const image = study.featured_image
        ? `${SITE_URL}${study.featured_image.startsWith("/") ? "" : "/"}${study.featured_image}`
        : `${SITE_URL}/images/profile_image.webp`;

    const url = `${SITE_URL}/case-studies/${study.slug}`;

    return [
        // Basic SEO
        { title },
        { name: "description", content: description },
        { name: "author", content: "Rowell Jay Real" },
        { name: "robots", content: "index, follow" },

        // Canonical URL
        { tagName: "link", rel: "canonical", href: url },

        // Open Graph: Facebook, LinkedIn, Messenger
        { property: "og:type", content: "article" },
        { property: "og:site_name", content: SITE_NAME },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:url", content: url },
        { property: "og:image", content: image },
        { property: "og:image:alt", content: study.title }, 
    ];
}

export default function CaseStudyDetailPage(){
    return (
        <div className="flex flex-col gap-5">  
            <div className="flex flex-col"> 
                <CaseStudyDetail/>
            </div> 
        </div>
    );
}