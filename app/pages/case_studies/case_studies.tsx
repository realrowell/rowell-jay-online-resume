import { Link } from "react-router";
import { IconArrowUpRight, IconBook2 } from "@tabler/icons-react";

import { ProjectData } from "@/data/project_data";
import type { Project } from "@/types/project";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"; 
import { CaseStudyData } from "@/data/case_study_data";
import type { CaseStudy } from "@/types/case_study";

export default function CaseStudies() { 

    const caseStudies = [...CaseStudyData].sort(
        (a, b) => (a.priority ?? 3) - (b.priority ?? 3)
    );

    return (
        <section className=""> 

            {/* Case Study Cards */}
            {caseStudies.length > 0 ? (
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
                    {caseStudies.map((study: CaseStudy) => { 

                        return (
                            <Card
                                key={study.slug}
                                className="group flex h-full flex-col overflow-hidden border-border/70 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
                            >
                                {/* Featured Image */}
                                <div className="aspect-video overflow-hidden bg-muted">
                                    {study.featured_image ? (
                                        <img
                                            src={study.featured_image}
                                            alt={`${study.title} preview`}
                                            loading="lazy"
                                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    ) : (
                                    <div className="flex h-full items-center justify-center text-muted-foreground">
                                        <IconBook2 size={40} stroke={1.5} />
                                    </div>
                                    )}
                                </div>

                                <CardHeader className="space-y-3"> 

                                    <CardTitle className="line-clamp-2 text-xl leading-snug transition-colors group-hover:text-primary">
                                    {study.title}
                                    </CardTitle>

                                    <CardDescription className="line-clamp-3 leading-relaxed">
                                    {study.description}
                                    </CardDescription>
                                </CardHeader>

                                <CardContent className="mt-auto space-y-5">
                                    {/* Technologies */} 

                                    {/* View Case Study */}
                                    <Link to={study.url} className="hover:cursor-pointer"> 
                                        <button
                                            type="button"
                                            className="w-full hover:cursor-pointer inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                        >
                                            Read Case Study
                                            <IconArrowUpRight size={18} className="ml-2" />
                                        </button>
                                    </Link>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
                ) : (
                <Card className="border-dashed">
                    <CardContent className="flex flex-col items-center justify-center gap-3 py-16 text-center">
                        <div className="rounded-full bg-muted p-4">
                        <IconBook2
                            size={32}
                            className="text-muted-foreground"
                        />
                        </div>

                        <h2 className="text-lg font-semibold">
                        No Case Studies Yet
                        </h2>

                        <p className="max-w-md text-sm text-muted-foreground">
                        Case studies will appear here once project documentation
                        becomes available.
                        </p>
  
                        <button
                            type="button"
                            className="hover:cursor-pointer inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        >
                            <Link to="/projects">Browse Projects</Link>
                        </button>
                    </CardContent>
                </Card>
            )}
        </section>
    );
}