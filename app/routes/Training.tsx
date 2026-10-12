import { TrainingData } from "@/data/training_data";
import TrainingCertificates from "@/pages/trainings/training_certificates"; 
import { IconCertificate } from "@tabler/icons-react";

export default function Training(){
    return(
        <div className="flex flex-col gap-5">
            <header className="flex flex-col gap-4">
                <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                    <span className="h-px w-8 bg-primary" />
                    <span>Continuous Learning</span>
                </div>

                <div className="flex flex-col gap-3">
                    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                        Trainings and <span className="text-primary">Certificates</span>
                    </h2>

                    <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                        My professional journey in web development, custom
                        business systems, and IT support — turning technical
                        challenges into practical solutions.
                    </p>
                </div>

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <IconCertificate className="size-4 text-primary" />
                    <span>
                        {TrainingData.length}{" "}
                        {TrainingData.length === 1
                            ? "credential"
                            : "credentials"}
                    </span>
                </div>
            </header>
            <div className="flex flex-col">
                <TrainingCertificates/>
            </div> 
        </div>
    )
}