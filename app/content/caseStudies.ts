const caseStudyFiles = import.meta.glob<string>(
    "./case-studies/*.md",
    {
        query: "?raw",
        import: "default",
        eager: true,
    }
);

export function getCaseStudy(slug: string): string | null {
    const filePath = `./case-studies/${slug}.md`;

    return caseStudyFiles[filePath] ?? null;
}