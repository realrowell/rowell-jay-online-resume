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
 
import { Button } from "@/components/ui/button";

export default function CaseStudies() {
    // Display only projects that have a case study URL.
    const caseStudies = ProjectData.filter(
    (project): project is Project & { case_study_url: string } =>
        Boolean(project.case_study_url)
    ).sort((a, b) => a.priority - b.priority);

    return (
        <section className=""> 

            {/* Case Study Cards */}
            {caseStudies.length > 0 ? (
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
                    {caseStudies.map((project: Project) => {
                    // Skip projects without a valid case study URL.
                    if (
                        typeof project.case_study_url !== "string" ||
                        project.case_study_url.length === 0
                    ) {
                        return null;
                    }

                    return (
                        <Card
                            key={project.slug}
                            className="group flex h-full flex-col overflow-hidden border-border/70 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
                        >
                            {/* Featured Image */}
                            <div className="aspect-video overflow-hidden bg-muted">
                                {project.featured_image ? (
                                    <img
                                        src={project.featured_image}
                                        alt={`${project.title} preview`}
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
                                {project.title}
                                </CardTitle>

                                <CardDescription className="line-clamp-3 leading-relaxed">
                                {project.description}
                                </CardDescription>
                            </CardHeader>

                            <CardContent className="mt-auto space-y-5">
                                {/* Technologies */} 

                                {/* View Case Study */}
                                <Link to={project.case_study_url} className="hover:cursor-pointer"> 
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