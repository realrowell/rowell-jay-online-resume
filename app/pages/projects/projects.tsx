
import { useState } from "react";
import type { KeyboardEvent } from "react";

import { ProjectData } from "@/data/project_data";
import type { Project } from "@/types/project";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

import { Badge } from "@/components/ui/badge";

import {
    IconBriefcase,
    IconCalendar,
    IconChevronLeft,
    IconChevronRight,
    IconCode,
    IconExternalLink,
    IconPhoto,
    IconX,
} from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";

export default function Projects() {
    const [selectedProject, setSelectedProject] =
        useState<Project | null>(null);

    const [activeImageIndex, setActiveImageIndex] = useState(0);

    const projects = [...ProjectData].sort(
        (a, b) => a.priority - b.priority,
    );

    const activeImages = selectedProject
        ? selectedProject.project_images?.length
            ? selectedProject.project_images
            : selectedProject.featured_image
              ? [selectedProject.featured_image]
              : []
        : [];

    const openProject = (project: Project) => {
        setSelectedProject(project);
        setActiveImageIndex(0);
    };

    const closeProject = () => {
        setSelectedProject(null);
        setActiveImageIndex(0);
    };

    const showPreviousImage = () => {
        setActiveImageIndex((current) =>
            current === 0 ? activeImages.length - 1 : current - 1,
        );
    };

    const showNextImage = () => {
        setActiveImageIndex((current) =>
            (current + 1) % activeImages.length,
        );
    };

    const handleCardKeyDown = (
        event: KeyboardEvent<HTMLDivElement>,
        project: Project,
    ) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            openProject(project);
        }
    };

    const formatDate = (date?: Date) => {
        if (!date) return null;

        const parsedDate = new Date(date);

        if (Number.isNaN(parsedDate.getTime())) return null;

        return parsedDate.toLocaleDateString("en-US", {
            year: "numeric",
            month: "short"
        });
    };

    return (
        <div>  
            {/* Projects grid */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {projects.map((project) => (
                    <Card
                        key={project.slug}
                        role="button"
                        tabIndex={0}
                        aria-label={`View project details: ${project.title}`}
                        onClick={() => openProject(project)}
                        onKeyDown={(event) =>
                            handleCardKeyDown(event, project)
                        }
                        className="group/card cursor-pointer gap-0 overflow-hidden border-border/70 bg-card py-0 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring motion-reduce:transform-none motion-reduce:transition-none"
                    >
                        {/* Featured image */}
                        <CardContent className="p-0">
                            <div className="relative flex aspect-16/10 items-center justify-center overflow-hidden bg-muted">
                                {project.featured_image ? (
                                    <img
                                        src={project.featured_image}
                                        alt={`${project.title} preview`}
                                        loading="lazy"
                                        className="size-full object-cover object-top transition-transform duration-500 ease-out group-hover/card:scale-105 motion-reduce:transform-none"
                                    />
                                ) : (
                                    <div className="flex flex-col items-center gap-2 text-muted-foreground">
                                        <IconCode className="size-10 opacity-50" />
                                        <span className="text-sm">
                                            Preview unavailable
                                        </span>
                                    </div>
                                )}

                                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-70" />

                                <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-3">
                                    <Badge
                                        variant="secondary"
                                        className="max-w-[80%] truncate border border-white/20 bg-background/90 text-foreground backdrop-blur-sm"
                                    >
                                        {project.status}
                                    </Badge>

                                    <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-white/20 bg-background/90 text-foreground opacity-0 shadow-lg transition-all duration-300 group-hover/card:opacity-100 group-focus-visible/card:opacity-100">
                                        <IconExternalLink className="size-4" />
                                    </span>
                                </div>

                                {(project.project_images?.length ?? 0) >
                                    1 && (
                                    <div className="absolute right-3 top-3 flex items-center gap-1.5 rounded-full border border-white/20 bg-black/60 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm">
                                        <IconPhoto className="size-3.5" />
                                        {project.project_images!.length}
                                    </div>
                                )}
                            </div>
                        </CardContent>

                        {/* Project information */}
                        <CardHeader className="gap-3 p-4 sm:p-5">
                            <CardTitle className="line-clamp-2 text-base leading-snug transition-colors duration-300 group-hover/card:text-primary sm:text-lg">
                                {project.title}
                            </CardTitle>

                            <CardDescription className="flex items-center gap-2 text-xs sm:text-sm">
                                <IconBriefcase className="size-4 shrink-0" />
                                <span className="line-clamp-1">
                                    {project.role}
                                </span>
                            </CardDescription>

                            <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                                {project.description ||
                                    "Explore the project details, features, and technologies used."}
                            </p>

                            {/* Technology tags */}
                            {(project.tags?.length ?? 0) > 0 && (
                                <div className="flex flex-wrap gap-1.5 pt-1">
                                    {project.tags!.slice(0, 4).map((tag) => (
                                        <Badge
                                            key={tag}
                                            variant="outline"
                                            className="font-normal text-xs"
                                        >
                                            {tag}
                                        </Badge>
                                    ))}

                                    {project.tags!.length > 4 && (
                                        <Badge
                                            variant="outline"
                                            className="font-normal text-xs text-muted-foreground"
                                        >
                                            +{project.tags!.length - 4}
                                        </Badge>
                                    )}
                                </div>
                            )}
                        </CardHeader>
                    </Card>
                ))}
            </div>

            {/* Empty state */}
            {projects.length === 0 && (
                <div className="rounded-xl border border-dashed p-10 text-center">
                    <IconCode className="mx-auto mb-3 size-8 text-muted-foreground" />

                    <p className="font-medium">
                        No projects available
                    </p>

                    <p className="mt-1 text-sm text-muted-foreground">
                        Projects will appear here once added.
                    </p>
                </div>
            )}
            
            <Dialog
                open={selectedProject !== null}
                onOpenChange={(open) => {
                    if (!open) closeProject();
                }}
            >
                <DialogContent
                    showCloseButton={false}
                    className="flex max-h-[80dvh] w-[calc(100%-1rem)] max-w-none flex-col gap-4 overflow-hidden p-3 sm:w-[calc(100%-2rem)] sm:max-w-4xl sm:p-5 lg:max-w-5xl lg:p-6"
                >
                    {selectedProject && (
                        <>
                            {/* Dialog heading */}
                            <DialogHeader className="shrink-0 pr-8">
                                <div className="mb-1 flex flex-wrap items-center gap-2">
                                    <Badge variant="secondary">
                                        {selectedProject.status}
                                    </Badge>

                                    <Badge variant="outline">
                                        {selectedProject.role}
                                    </Badge>
                                </div>

                                <DialogTitle className="text-lg leading-snug sm:text-2xl">
                                    {selectedProject.title}
                                </DialogTitle>
                            </DialogHeader>

                            {/* Close button */}
                            <DialogClose >
                                <button
                                    type="button"
                                    aria-label="Close project details"
                                    className="absolute right-3 top-3 z-20 flex size-9 items-center justify-center rounded-full border bg-background/90 text-muted-foreground shadow-sm transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:right-4 sm:top-4"
                                >
                                    <IconX className="size-4" />
                                </button>
                            </DialogClose>

                            {/* Modal content */}
                            <div className="flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto">
                                {/* Main image viewer */}
                                {activeImages.length > 0 ? (
                                    <div className="relative flex min-h-50 shrink-0 items-center justify-center overflow-hidden rounded-lg border bg-muted/40 sm:min-h-75">
                                        <img
                                            key={activeImages[activeImageIndex]}
                                            src={activeImages[activeImageIndex]}
                                            alt={`${selectedProject.title} screenshot ${activeImageIndex + 1}`}
                                            className="block max-h-[50dvh] w-full object-contain sm:max-h-[40dvh]"
                                        />

                                        {activeImages.length > 1 && (
                                            <>
                                                <button
                                                    type="button"
                                                    onClick={showPreviousImage}
                                                    aria-label="Previous project image"
                                                    className="hover:cursor-pointer absolute left-2 top-1/2 flex size-9 -translate-y-1/2 items-center justify-center rounded-full border border-border/50 bg-background/90 text-foreground shadow-md transition hover:bg-background sm:left-3 sm:size-10"
                                                >
                                                    <IconChevronLeft className="size-5" />
                                                </button>

                                                <button
                                                    type="button"
                                                    onClick={showNextImage}
                                                    aria-label="Next project image"
                                                    className="hover:cursor-pointer absolute right-2 top-1/2 flex size-9 -translate-y-1/2 items-center justify-center rounded-full border border-border/50 bg-background/90 text-foreground shadow-md transition hover:bg-background sm:right-3 sm:size-10"
                                                >
                                                    <IconChevronRight className="size-5" />
                                                </button>

                                                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-black/70 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                                                    {activeImageIndex + 1} /{" "}
                                                    {activeImages.length}
                                                </div>
                                            </>
                                        )}
                                    </div>
                                ) : (
                                    <div className="flex min-h-50 shrink-0 flex-col items-center justify-center gap-2 rounded-lg border border-dashed bg-muted/30 text-muted-foreground sm:min-h-75">
                                        <IconPhoto className="size-10 opacity-50" />
                                        <p className="text-sm">
                                            No project screenshots available.
                                        </p>
                                    </div>
                                )}

                                {/* Thumbnail gallery */}
                                {activeImages.length > 1 && (
                                    <div className="flex shrink-0 gap-2 overflow-x-auto pb-1">
                                        {activeImages.map((image, index) => (
                                            <button
                                                key={`${image}-${index}`}
                                                type="button"
                                                onClick={() =>
                                                    setActiveImageIndex(index)
                                                }
                                                aria-label={`View image ${index + 1}`}
                                                aria-pressed={
                                                    activeImageIndex === index
                                                }
                                                className={`relative size-16 shrink-0 overflow-hidden rounded-md border-2 transition sm:size-20 ${
                                                    activeImageIndex === index
                                                        ? "border-primary ring-2 ring-primary/20"
                                                        : "border-border opacity-70 hover:opacity-100"
                                                }`}
                                            >
                                                <img
                                                    src={image}
                                                    alt=""
                                                    loading="lazy"
                                                    className="size-full object-cover object-top"
                                                />
                                            </button>
                                        ))}
                                    </div>
                                )}

                                {/* Project metadata */} 
                                <DialogDescription className="text-sm leading-relaxed">
                                    <article>
                                        {selectedProject.description ||
                                            "Project overview, implementation details, and technology stack."}
                                    </article>
                                </DialogDescription>
                                <div className="grid shrink-0 grid-cols-1 gap-4 rounded-lg border bg-card p-4 sm:grid-cols-2">
                                    <div className="flex items-start gap-3">
                                        <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                            <IconBriefcase className="size-4" />
                                        </div>

                                        <div className="min-w-0">
                                            <p className="text-xs text-muted-foreground">
                                                My Role
                                            </p>

                                            <p className="mt-1 text-sm font-medium">
                                                {selectedProject.role}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                            <IconCalendar className="size-4" />
                                        </div>

                                        <div className="min-w-0">
                                            <p className="text-xs text-muted-foreground">
                                                Deployment Date
                                            </p>

                                            <p className="mt-1 text-sm font-medium">
                                                {formatDate(
                                                    selectedProject.date_deployed,
                                                ) ?? "Not specified"}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Technologies */}
                                <div className="shrink-0 space-y-2">
                                    <h3 className="text-sm font-semibold">
                                        Technologies Used
                                    </h3>

                                    {(selectedProject.tags?.length ?? 0) >
                                    0 ? (
                                        <div className="flex flex-wrap gap-2">
                                            {selectedProject.tags!.map(
                                                (tag) => (
                                                    <Badge
                                                        key={tag}
                                                        variant="outline"
                                                        className="px-2.5 py-1 font-normal"
                                                    >
                                                        {tag}
                                                    </Badge>
                                                ),
                                            )}
                                        </div>
                                    ) : (
                                        <p className="text-sm text-muted-foreground">
                                            No technologies specified.
                                        </p>
                                    )}
                                </div>
                            </div>

                            {/* Dialog footer */}
                            <div className="flex shrink-0 items-center justify-end gap-3 border-t pt-3">

                                <div className="flex shrink-0 items-center gap-2">
                                    {selectedProject.case_study_url && ( 
                                        <Link
                                            to={selectedProject.case_study_url} 
                                            className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm font-medium transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                        >
                                            <span className="hidden sm:inline">
                                                View Case Study
                                            </span>
                                            <span className="sm:hidden">
                                                Case Study
                                            </span>
                                            <IconExternalLink className="size-4" />
                                        </Link>
                                    )}

                                    <DialogClose > 
                                        <button
                                            type="button"
                                            className="hover:cursor-pointer inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                        >
                                            Close
                                        </button>
                                    </DialogClose>
                                </div>
                            </div>
                        </>
                    )}
                </DialogContent>
            </Dialog>
        </div>
    );
}
