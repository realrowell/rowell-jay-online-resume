import type { TechnicalSkillCategories } from "./enums/technical_skill_categories";

export interface TechnicalSkill{
    category: TechnicalSkillCategories
    label?: string
    technology: string
    logo_path: string
}