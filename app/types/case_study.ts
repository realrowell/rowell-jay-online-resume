export interface CaseStudy{
    slug: string
    project_slug?: string
    title: string
    description?: string
    url: string
    featured_image?: string
    images?: string[]
    priority?: 1 | 2 | 3
}