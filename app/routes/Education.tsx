import TimelineEducation from "@/pages/educations/timeline_education";
import { IconBook2, IconSchool } from "@tabler/icons-react";

export default function Education(){
    return(
        <div className="flex flex-col gap-5">
            <header className="flex flex-col gap-4">
                <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                    <span className="h-px w-8 bg-primary" />
                    <span>Academic Background</span>
                </div>

                <div className="flex flex-col gap-3">
                    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                        My <span className="text-primary">Education</span>
                    </h2>

                    <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                        My academic foundation in information technology,
                        software development, and practical computing skills.
                    </p>
                </div> 
            </header>

            <div className="flex flex-col">
                <TimelineEducation/>
            </div>

            {/* Closing Note */}
            <div className="flex items-center justify-center gap-2 text-center text-sm text-muted-foreground">
                <IconBook2 className="size-4 text-primary" />
                <span>Building on my academic foundation through hands-on projects and continuous learning.</span>
            </div>
        </div>
    )
}