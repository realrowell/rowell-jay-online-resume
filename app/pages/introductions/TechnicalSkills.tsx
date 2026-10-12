
import { TechnicalSkillsData } from "@/data/technical_skills_data";

export default function TechnicalSkills() {
    const categories = Array.from(
        new Set(TechnicalSkillsData.map((skill) => skill.category))
    );

    return (
        <section className="flex flex-col gap-8">
            {/* <div className="space-y-2">
                <h2 className="text-2xl font-bold text-primary">
                    Technical Skills
                </h2>
                <p className="text-sm text-gray-500">
                    Technologies and tools I use to build and maintain
                    web applications.
                </p>
            </div> */}

            <div className="flex flex-col gap-8">
                {categories.map((category) => {
                    // const skills = TechnicalSkillsData.filter(
                    //     (skill) => skill.category === category
                    // );
                    const skills = TechnicalSkillsData.filter(
                        (skill) => skill.category === category
                    );

                    const categoryLabel = skills.find((skill) => skill.label)?.label ?? category;

                    return (
                        <div key={categoryLabel} className="flex flex-col gap-4">
                            <div className="flex items-center gap-3">
                                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                                    {categoryLabel}
                                </h3>
                                <div className="h-px flex-1 bg-gray-200" />
                            </div>

                            <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7">
                                {skills.map((skill) => (
                                    <div
                                        key={skill.technology}
                                        title={skill.technology}
                                        className="group flex flex-col items-center gap-3 rounded-xl border border-gray-200 bg-white p-4 text-center transition-all duration-200 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md"
                                    >
                                        <div className="flex h-14 w-full items-center justify-center">
                                            <img
                                                src={skill.logo_path}
                                                alt={`${skill.technology} logo`}
                                                loading="lazy"
                                                className="max-h-12 max-w-full object-contain transition-transform duration-200 group-hover:scale-110"
                                            />
                                        </div>

                                        <p className="text-xs font-medium leading-tight text-gray-700 sm:text-sm">
                                            {skill.technology}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
