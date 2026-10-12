export interface Project{
    slug: string
    title: string
    role: string
    status: string
    description: string
    date_deployed?: Date
    featured_image?: string
    project_images?: string[]
    case_study_url?: string
    tags?: string[]
    priority: 1 | 2 | 3
}