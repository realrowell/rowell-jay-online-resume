import CaseStudies from "@/pages/case_studies/case_studies"; 

export default function CaseStudy(){
    return(
        <div className="flex flex-col gap-5">
            <header className="flex flex-col gap-4">
                <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                    <span className="h-px w-8 bg-primary" />
                    <span>Behind the Solutions</span>
                </div>

                <div className="flex flex-col gap-3">
                    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                        Project <span className="text-primary">Case Studies</span>
                    </h2>

                    <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                        An in-depth look at real-world challenges, development decisions, and technical solutions — highlighting the process of transforming business requirements into functional, reliable systems.
                    </p>
                </div> 
            </header>

            <div className="flex flex-col"> 
                <CaseStudies/>
            </div> 
        </div>
    )
}