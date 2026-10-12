import TechnicalSkills from "@/pages/introductions/TechnicalSkills";
import { type Route } from "../+types/root";
import ContactInfoCard from "@/components/ContactInfoCard";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { IconCode, IconSparkles, IconUser } from "@tabler/icons-react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Online Resume" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Introduction(){
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
            {/* Main Content */}
                <div className="flex min-w-0 flex-col gap-10 lg:col-span-2">

                    {/* Hero Introduction */}
                    <header className="flex flex-col gap-5">
                        <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                            <span className="h-px w-8 bg-primary" />
                            <span>Personal Portfolio</span>
                        </div>

                        <div className="flex flex-col gap-3">
                            <h1 className="text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                                Hi, I'm{" "}
                                <span className="text-primary">
                                    Rowell Jay Real
                                </span>
                            </h1>

                            <h2 className="flex items-center gap-2 text-lg font-medium text-muted-foreground sm:text-xl">
                                <IconCode className="size-5 shrink-0 text-primary" />
                                Full-stack Web Developer
                            </h2>
                        </div>

                        <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
                            Building practical web applications and business
                            information systems through thoughtful design,
                            reliable development, and continuous learning.
                        </p>
                    </header>

                    {/* Contact Information */}
                    <div className="flex flex-col">
                        <ContactInfoCard/>
                    </div>

                    {/* Professional Summary */}
                    <section className="flex flex-col gap-5">
                        <div className="flex items-center gap-3">
                            <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/5">
                                <IconUser className="size-5 text-primary" />
                            </div>

                            <div className="flex flex-col gap-1">
                                <h3 className="text-xl font-bold text-foreground sm:text-2xl">
                                    Professional Summary
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    Background, experience, and expertise
                                </p>
                            </div>
                        </div>

                        <div className="rounded-2xl border border-border/70 bg-background/70 p-5 sm:p-6">
                            <p className="text-sm leading-7 text-muted-foreground sm:text-base">
                                IT professional and Full-Stack Web Developer
                                with a Bachelor of Science in Information
                                Technology and hands-on experience in web
                                application development, IT technical support,
                                networking, and system administration.
                                Proficient in PHP, Laravel, JavaScript,
                                TypeScript, Vue.js, React, MySQL, and
                                WordPress, with experience developing and
                                maintaining business information systems from
                                requirements gathering and database design to
                                testing, deployment, and maintenance.
                                Previously worked as an IT Associate,
                                providing onsite and remote technical
                                assistance while also handling web
                                development, graphic design, and event
                                technical direction. Adaptable, analytical,
                                and committed to building reliable solutions
                                and continuously improving technical skills.
                            </p>
                        </div>
                    </section>

                    {/* Technical Skills */}
                    <section className="flex flex-col gap-5">
                        <div className="flex items-center gap-3">
                            <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/5">
                                <IconSparkles className="size-5 text-primary" />
                            </div>

                            <div className="flex flex-col gap-1">
                                <h3 className="text-xl font-bold text-foreground sm:text-2xl">
                                    Technical Skills
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    Technologies and tools I work with
                                </p>
                            </div>
                        </div>

                        <div className="rounded-2xl border border-border/70 bg-background/70 p-4 sm:p-6">
                            <TechnicalSkills />
                        </div>
                    </section>
                </div>

                {/* Profile Sidebar */}
                <aside className="relative mx-auto w-full max-w-sm lg:sticky lg:top-8 lg:mx-0 lg:max-w-none">
                    <div className="group relative">
                        {/* Decorative background */}
                        <div className="absolute -inset-3 rounded-3xl bg-primary/5 opacity-70 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

                        <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-2 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5">
                            <AspectRatio
                                ratio={3 / 4}
                                className="overflow-hidden rounded-xl bg-muted"
                            >
                                <img
                                    src="/images/feature_profile.webp"
                                    alt="Portrait of Rowell Jay Real"
                                    className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transform-none"
                                    loading="eager"
                                />
                            </AspectRatio>

                            {/* Profile Caption */}
                            <div className="flex flex-col gap-2 p-4 sm:p-5">
                                <p className="text-lg font-bold text-foreground">
                                    Rowell Jay Real
                                </p>

                                <p className="text-sm text-muted-foreground">
                                    Full-stack Web Developer
                                </p>

                                <div className="mt-1 flex items-center gap-2 border-t border-border pt-3">
                                    <span className="size-2 rounded-full bg-primary" />
                                    <span className="text-xs font-medium text-muted-foreground">
                                        Web Development · IT Solutions
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </aside>
        </div>
    )
}