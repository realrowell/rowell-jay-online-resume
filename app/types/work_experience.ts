export interface WorkExperience{
    logo_path?: string
    position: string
    company: string
    date_started: Date
    date_ended?: Date | string
    description: string[]
}