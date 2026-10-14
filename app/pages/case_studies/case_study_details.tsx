
import { Link, useParams } from "react-router";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { ProjectData } from "@/data/project_data";
import type { Project } from "@/types/project";
import { getCaseStudy } from "@/content/caseStudies";
import { useMonthDateFormat } from "@/hooks/use-month-date-format";

import {
    Card,
    CardContent,
    CardHeader, 
} from "@/components/ui/card"; 

import {
    IconArrowLeft,
    IconArrowUpRight, 
    IconCode,
    IconFileText, 
} from "@tabler/icons-react";
import type { CaseStudy } from "@/types/case_study";
import { CaseStudyData } from "@/data/case_study_data";

export default function CaseStudyDetail() {
    const { slug } = useParams();

    // const project: Project | undefined = ProjectData.find(
    //     (item) => item.slug === slug,
    // );

    const study: CaseStudy | undefined = CaseStudyData.find(
        (item) => item.slug === slug,
    );

    if (!study) {
        return (
            <Card className="border-border/70">
                <CardContent className="flex flex-col items-center p-10 text-center">
                    <IconCode className="mb-4 size-10 text-muted-foreground" />

                    <h1 className="text-2xl font-bold">
                        Project Not Found
                    </h1>

                    <p className="mt-2 text-sm text-muted-foreground">
                        The requested project does not exist
                        or may have been removed.
                    </p>

                    <Link
                        to="/case-studies"
                        className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                    >
                        <IconArrowLeft className="size-4" />
                        Back to Projects
                    </Link>
                </CardContent>
            </Card>
        );
    }

    const markdown = getCaseStudy(study.slug);

    if (markdown === null) {
        return (
            <main className="">
                <Link
                    to="/case-studies"
                    className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                    <IconArrowLeft className="size-4" />
                    Back to Projects
                </Link>

                <Card className="border-border/70">
                    <CardContent className="flex flex-col items-center p-10 text-center">
                        <IconFileText className="mb-4 size-10 text-muted-foreground" />

                        <h1 className="text-2xl font-bold">
                            Case Study Coming Soon
                        </h1>

                        <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
                            The detailed case study for{" "}
                            {study.title} has not been published yet.
                        </p>
                    </CardContent>
                </Card>
            </main>
        );
    }  

    return (
        <main className="">
            {/* Navigation */}
            <Link
                to="/case-studies"
                className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
                <IconArrowLeft className="size-4" />
                Back to Case Studies
            </Link>  

            {/* Markdown case study */}
            <Card className="mb-10 gap-0 overflow-hidden border-border/70 py-0">  
                <CardContent className="px-5 py-7 sm:px-8 sm:py-10">
                    <article
                        className="
                            case-study-content
                            prose prose-base max-w-none
                            prose-headings:scroll-mt-24
                            prose-headings:font-bold
                            prose-headings:tracking-tight
                            prose-headings:text-foreground
                            prose-h1:text-3xl
                            prose-h2:mt-10
                            prose-h2:border-b
                            prose-h2:border-border/70
                            prose-h2:pb-3
                            prose-h2:text-2xl
                            prose-h3:mt-8
                            prose-h3:text-xl
                            prose-p:leading-8
                            prose-p:text-muted-foreground
                            prose-li:leading-7
                            prose-li:marker:text-primary
                            prose-strong:text-foreground
                            prose-a:font-medium
                            prose-a:text-primary
                            prose-a:underline-offset-4
                            prose-blockquote:border-l-primary
                            prose-blockquote:text-muted-foreground
                            prose-hr:border-border
                            prose-img:mx-auto
                            prose-img:rounded-xl
                            prose-img:border
                            prose-img:border-border/70
                            prose-img:shadow-sm
                            prose-table:text-sm
                            prose-th:bg-muted/50
                            prose-th:text-foreground
                            prose-td:text-muted-foreground
                            dark:prose-invert
                            dark:prose-headings:text-foreground
                            dark:prose-strong:text-foreground
                            dark:prose-a:text-primary
                        "
                    >
                        
                        <h1>{ study.title }</h1>
                        <ReactMarkdown
                            remarkPlugins={[remarkGfm]}
                            components={{
                                a: ({ href, children, ...props }) => {
                                    const isExternal =
                                        href?.startsWith("https://") ||
                                        href?.startsWith("http://");

                                    return (
                                        <a
                                            href={href}
                                            {...props}
                                            {...(isExternal
                                                ? {
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                }
                                                : {})}
                                        >
                                            {children}
                                        </a>
                                    );
                                },
                            }}
                        >
                            {markdown}
                        </ReactMarkdown>
                    </article>
                    
                    {/* Featured project image */}
                    <h3 className="text-2xl mt-10 mb-5 font-bold">
                        Project Screenshots
                    </h3>
                    {study.images && study.images.length > 0 ? (
                        /* Wrap the entire map loop in the grid container */
                        <div className="grid grid-cols-2 gap-3 w-full"> 
                            {study.images.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt={`${study.title} preview`}
                                    /* Standardized Tailwind classes below */
                                    className="max-h-100 w-full object-contain object-center"
                                />
                            ))}
                        </div>
                    ) : (
                        <p className="text-gray-500 italic">No Screen Shots Available</p>
                    )}

                </CardContent>
            </Card> 

            {/* Footer navigation */}
            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-border/70 pt-6">
                <Link
                    to="/case-studies"
                    className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                    <IconArrowLeft className="size-4" />
                    All Case Studies
                </Link>

                <Link
                    to="/projects"
                    className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-muted"
                >
                    Explore Projects
                    <IconArrowUpRight className="size-4" />
                </Link>
            </div>
        </main>
    );
}
