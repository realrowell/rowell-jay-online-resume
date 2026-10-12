
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import {
    IconMail,
    IconPhone,
    IconBrandLinkedin,
    IconBrandGithub,
    IconExternalLink,
} from "@tabler/icons-react";

const contactItems = [
    {
        label: "Email",
        value: "realrowell@gmail.com",
        href: "mailto:realrowell@gmail.com",
        icon: IconMail,
        external: false,
    },
    {
        label: "Contact Number",
        value: "(+63) 966 924 4653",
        href: "tel:+639669244653",
        icon: IconPhone,
        external: false,
    },
    {
        label: "LinkedIn",
        value: "Find me on LinkedIn",
        href: "https://www.linkedin.com/in/rowell-jay-real-9a6293213/",
        icon: IconBrandLinkedin,
        external: true,
    },
    {
        label: "GitHub",
        value: "Check out my projects",
        href: "https://github.com/realrowell",
        icon: IconBrandGithub,
        external: true,
    },
];

export default function ContactInfoCard() {
    return (
        <Card className="gap-5 py-5">
            <CardHeader className="px-5 sm:px-6">
                <CardTitle className="text-xl font-bold text-primary">
                    Contact Info
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                    Feel free to reach out or connect with me.
                </p>
            </CardHeader>

            <CardContent className="px-5 sm:px-6">
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {contactItems.map((item) => {
                        const Icon = item.icon;

                        return (
                            <a
                                key={item.label}
                                href={item.href}
                                target={item.external ? "_blank" : undefined}
                                rel={
                                    item.external
                                        ? "noopener noreferrer"
                                        : undefined
                                }
                                className="group flex min-w-0 items-center gap-3 rounded-xl border border-border bg-card p-3 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                            >
                                <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors duration-200 group-hover:bg-primary group-hover:text-primary-foreground">
                                    <Icon size={21} stroke={1.8} />
                                </div>

                                <div className="min-w-0 flex-1 space-y-1">
                                    <p className="text-xs font-medium text-muted-foreground">
                                        {item.label}
                                    </p>

                                    <p className="wrap-break-word text-sm font-medium text-foreground transition-colors group-hover:text-primary">
                                        {item.value}
                                    </p>
                                </div>

                                {item.external && (
                                    <IconExternalLink
                                        size={16}
                                        stroke={1.8}
                                        className="shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100"
                                    />
                                )}
                            </a>
                        );
                    })}
                </div>
            </CardContent>
        </Card>
    );
}
