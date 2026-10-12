import {
    Timeline,
    TimelineDate,
    TimelineHeader,
    TimelineIndicator,
    TimelineItem,
    TimelineSeparator,
    TimelineContent,
} from "@/components/reui/timeline";
import { EducationData } from "@/data/education_data";
import { IconSchool } from "@tabler/icons-react";

export default function TimelineEducation(){
    return(
        <Timeline
            defaultValue={EducationData.length}
            className="w-full"
        >
            {EducationData.map((education, index) => (
                <TimelineItem
                    key={`${education.degree}-${index}`}
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
                            <IconSchool className="size-4" />
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
                                    {education.logo_path ? (
                                        <img
                                            src={education.logo_path}
                                            alt={`${education.school} logo`}
                                            className="size-full object-contain p-2
                                            transition-transform duration-300
                                            group-hover/card:scale-110
                                            motion-reduce:transform-none"
                                            loading="lazy"
                                        />
                                    ) : (
                                        <IconSchool
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
                                        {education.degree}
                                    </h3>

                                    <p className="mt-1 text-sm font-medium text-muted-foreground">
                                        {education.school}
                                    </p>

                                    <p className="mt-2 text-xs text-muted-foreground sm:text-sm">
                                        {education.year_started}
                                        {" — "}
                                        {education.year_ended}
                                    </p>
                                </div>
                            </div> 
                        </article>
                    </TimelineContent>
                </TimelineItem>
            ))}
        </Timeline>
    )
}