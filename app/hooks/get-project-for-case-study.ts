import type { CaseStudy } from "@/types/case_study";
import type { Project } from "@/types/project";

export function getProjectForCaseStudy(
    caseStudy: CaseStudy, 
    allProjects: Project[]
): Project | undefined {
    if (!caseStudy.project_slug) {
        return undefined; // No project associated
    }
    
    return allProjects.find(project => project.slug === caseStudy.project_slug);
}