
import {
    Timeline,
    TimelineDate,
    TimelineHeader,
    TimelineIndicator,
    TimelineItem,
    TimelineSeparator,
    TimelineContent,
} from "@/components/reui/timeline";

import { WorkExperiencesData } from "@/data/work_experiences_data";
import { IconBuildings, IconBriefcase } from "@tabler/icons-react";

export default function TimelineExperience() {
    return (
        <Timeline
            defaultValue={WorkExperiencesData.length}
            className="w-full"
        >
            {WorkExperiencesData.map((experience, index) => (
                <TimelineItem
                    key={`${experience.company}-${index}`}
                    step={index + 1}
                    className="group-data-[orientation=vertical]/timeline:ms-10"
                >
                    <TimelineHeader>
                        <TimelineSeparator
                            className="group-data-[orientation=vertical]/timeline:-left-7
                            group-data-[orientation=vertical]/timeline:h-[calc(100%-1.5rem-0.25rem)]
                            group-data-[orientation=vertical]/timeline:translate-y-6.5"
                        />

                        {/* <TimelineDate className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                            {experience.date_started.toLocaleDateString(
                                "en-US",
                                {
                                    month: "short",
                                    year: "numeric",
                                }
                            )}
                            {" — "}
                            {experience.date_ended instanceof Date
                                ? experience.date_ended.toLocaleDateString(
                                      "en-US",
                                      {
                                          month: "short",
                                          year: "numeric",
                                      }
                                  )
                                : experience.date_ended}
                        </TimelineDate> */}

                        <TimelineIndicator
                            className="flex size-8 items-center justify-center rounded-full
                            border border-border bg-background text-muted-foreground
                            transition-all duration-300
                            group-data-completed/timeline-item:border-primary
                            group-data-completed/timeline-item:bg-primary
                            group-data-completed/timeline-item:text-primary-foreground
                            group-data-[orientation=vertical]/timeline:-left-8"
                        >
                            <IconBuildings className="size-4" />
                        </TimelineIndicator>
                    </TimelineHeader>

                    <TimelineContent>
                        <article
                            className="group/card mb-10 overflow-hidden rounded-xl
                            border border-border bg-card
                            transition-all duration-300 ease-out
                            hover:-translate-y-1
                            hover:border-primary/50
                            hover:shadow-lg hover:shadow-primary/5
                            motion-reduce:transform-none motion-reduce:transition-none"
                        >
                            {/* Company Information */}
                            <div className="flex items-start gap-4 p-5 sm:p-6">
                                <div
                                    className="flex size-14 shrink-0 items-center
                                    justify-center overflow-hidden rounded-xl
                                    border border-border bg-background
                                    transition-colors duration-300
                                    group-hover/card:border-primary/40
                                    group-hover/card:bg-primary/5"
                                >
                                    {experience.logo_path ? (
                                        <img
                                            src={experience.logo_path}
                                            alt={`${experience.company} logo`}
                                            className="size-full object-contain p-2
                                            transition-transform duration-300
                                            group-hover/card:scale-110
                                            motion-reduce:transform-none"
                                            loading="lazy"
                                        />
                                    ) : (
                                        <IconBuildings
                                            className="size-6 text-muted-foreground
                                            transition-colors duration-300
                                            group-hover/card:text-primary"
                                        />
                                    )}
                                </div>

                                <div className="min-w-0 flex-1">
                                    <h3
                                        className="text-base font-semibold leading-snug
                                        text-foreground
                                        transition-colors duration-300
                                        group-hover/card:text-primary
                                        sm:text-lg"
                                    >
                                        {experience.position}
                                    </h3>

                                    <p className="mt-1 text-sm font-medium text-muted-foreground">
                                        {experience.company}
                                    </p>

                                    <p className="mt-2 text-xs text-muted-foreground sm:text-sm">
                                        {experience.date_started.toLocaleDateString(
                                            "en-US",
                                            {
                                                month: "long",
                                                year: "numeric",
                                            }
                                        )}
                                        {" — "}
                                        {experience.date_ended instanceof Date
                                            ? experience.date_ended.toLocaleDateString(
                                                  "en-US",
                                                  {
                                                      month: "long",
                                                      year: "numeric",
                                                  }
                                              )
                                            : experience.date_ended}
                                    </p>
                                </div>
                            </div>

                            {/* Responsibilities */}
                            {experience.description.length > 0 && (
                                <div
                                    className="border-t border-border px-5 py-5
                                    transition-colors duration-300
                                    group-hover/card:border-primary/20
                                    sm:px-6"
                                >
                                    <div className="mb-4 flex items-center gap-2">
                                        <IconBriefcase
                                            className="size-4 text-muted-foreground
                                            transition-colors duration-300
                                            group-hover/card:text-primary"
                                        />

                                        <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                                            Key Responsibilities
                                        </h4>
                                    </div>

                                    <ul className="space-y-3">
                                        {experience.description.map(
                                            (item, descriptionIndex) => (
                                                <li
                                                    key={descriptionIndex}
                                                    className="flex items-start gap-3
                                                    text-sm leading-relaxed
                                                    text-muted-foreground"
                                                >
                                                    <span
                                                        className="mt-2 size-1.5 shrink-0
                                                        rounded-full bg-primary/50
                                                        transition-all duration-300
                                                        group-hover/card:scale-125
                                                        group-hover/card:bg-primary"
                                                    />

                                                    <span>{item}</span>
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </div>
                            )}
                        </article>
                    </TimelineContent>
                </TimelineItem>
            ))}
        </Timeline>
    );
}
