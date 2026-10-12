import TimelineExperience from "@/pages/work_experiences/timeline_experience";
import { IconArrowDown, IconArrowLeft, IconBriefcase } from "@tabler/icons-react";

export default function WorkExperience(){
    return(
        <div className="flex flex-col gap-5">
            <header className="flex flex-col gap-4">
                <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                    <span className="h-px w-8 bg-primary" />
                    <span>Career Journey</span>
                </div>

                <div className="flex flex-col gap-3">
                    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                        Work <span className="text-primary">Experience</span>
                    </h2>

                    <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                        My professional journey in web development, custom
                        business systems, and IT support — turning technical
                        challenges into practical solutions.
                    </p>
                </div>

                {/* Small supporting detail */}
                <div className="flex items-center gap-2 pt-1 text-sm text-muted-foreground">
                    <IconBriefcase className="size-4 text-primary" />
                    <span>Professional background and key responsibilities</span>
                </div>
            </header>
            <div className="flex flex-col">
                <TimelineExperience/>
            </div>
            {/* Closing note */}
            <div className="flex items-center justify-center gap-2 text-center text-sm text-muted-foreground">
                <IconArrowLeft className="size-4 animate-bounce text-primary motion-reduce:animate-none" />
                <span>Explore my projects to see what I've built</span>
            </div>
        </div>
    )
}