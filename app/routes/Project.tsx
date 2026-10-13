import Projects from "@/pages/projects/projects"; 

export default function Education(){
    return(
        <div className="flex flex-col gap-5">
            <header className="flex flex-col gap-4">
                <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                    <span className="h-px w-8 bg-primary" />
                    <span>Project Portfolio</span>
                </div>

                <div className="flex flex-col gap-3">
                    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                        My  <span className="text-primary">Projects</span>
                    </h2>

                    <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                        A collection of web applications, business systems,
                        and infrastructure projects I have developed and
                        maintained.
                    </p>
                </div> 
            </header>

            <div className="flex flex-col">
                <Projects/>
            </div> 
        </div>
    )
}