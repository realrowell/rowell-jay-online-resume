
import { useState } from "react";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogClose,
} from "@/components/ui/dialog";

import { TrainingData } from "@/data/training_data";

import {
    IconCertificate,
    IconExternalLink,
    IconX,
    IconChevronLeft,
    IconChevronRight,
} from "@tabler/icons-react";

export default function TrainingCertificates() {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const selectedTraining =
        selectedIndex !== null ? TrainingData[selectedIndex] : null;

    const showPrevious = () => {
        setSelectedIndex((current) =>
            current === null
                ? null
                : (current - 1 + TrainingData.length) % TrainingData.length
        );
    };

    const showNext = () => {
        setSelectedIndex((current) =>
            current === null
                ? null
                : (current + 1) % TrainingData.length
        );
    };

    return (
        <section
            id="certificates"
            className="relative w-full "
        >
            {/* Certificate Grid */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {TrainingData.map((training, index) => (
                    <Card
                        key={`${training.title}-${index}`}
                        className="group/card cursor-pointer gap-0 overflow-hidden border-border/70 bg-card py-0 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 motion-reduce:transform-none motion-reduce:transition-none"
                        role="button"
                        tabIndex={0}
                        aria-label={`View certificate: ${training.title}`}
                        onClick={() => setSelectedIndex(index)}
                        onKeyDown={(event) => {
                            if (
                                event.key === "Enter" ||
                                event.key === " "
                            ) {
                                event.preventDefault();
                                setSelectedIndex(index);
                            }
                        }}
                    >
                        {/* Certificate Preview */}
                        <CardContent className="relative overflow-hidden p-0">
                            <div className="relative aspect-4/3 overflow-hidden bg-muted">
                                <img
                                    src={training.cert_path}
                                    alt={`Certificate for ${training.title}`}
                                    loading="lazy"
                                    className="size-full object-cover object-top transition-transform duration-500 ease-out group-hover/card:scale-105 motion-reduce:transform-none"
                                />

                                {/* Hover Overlay */}
                                <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover/card:bg-black/25">
                                    <div className="flex size-12 scale-90 items-center justify-center rounded-full bg-background/95 text-foreground opacity-0 shadow-lg transition-all duration-300 group-hover/card:scale-100 group-hover/card:opacity-100">
                                        <IconExternalLink className="size-5" />
                                    </div>
                                </div>
                            </div>
                        </CardContent>

                        {/* Certificate Details */}
                        <CardHeader className="gap-2 p-4 sm:p-5">
                            <CardTitle className="line-clamp-2 text-base leading-snug transition-colors duration-300 group-hover/card:text-primary">
                                {training.title}
                            </CardTitle>

                            <CardDescription className="">
                                <div className="flex flex-col gap-1 line-clamp-2 text-sm leading-relaxed">
                                    <p>{training.conductor}</p>
                                    <p>
                                        {training.date_ended ? (
                                            training.date_started.toLocaleDateString(
                                            "en-US",
                                                {
                                                    month: "short",
                                                    day: 'numeric',
                                                    year: "numeric",
                                                }
                                            ) +" - "+
                                            training.date_ended.toLocaleDateString(
                                            "en-US",
                                                {
                                                    month: "short",
                                                    day: 'numeric',
                                                    year: "numeric",
                                                }
                                            )
                                        ) : (
                                            training.date_started.toLocaleDateString(
                                            "en-US",
                                                {
                                                    month: "short",
                                                    day: 'numeric',
                                                    year: "numeric",
                                                }
                                            )
                                        )} 
                                    </p>
                                    {
                                        training.hours && (
                                            <p>
                                                {training.hours} hours
                                            </p>
                                        )
                                    }
                                </div>
                            </CardDescription>

                            {/* <p className="pt-1 text-xs text-muted-foreground">
                                Click to view certificate
                            </p> */}
                        </CardHeader>
                    </Card>
                ))}
            </div>

            {/* Empty State */}
            {TrainingData.length === 0 && (
                <div className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-border p-10 text-center">
                    <IconCertificate className="size-10 text-muted-foreground" />

                    <h3 className="font-semibold text-foreground">
                        No certificates available yet
                    </h3>

                    <p className="max-w-sm text-sm text-muted-foreground">
                        Training certificates will appear here as they
                        are added to the portfolio.
                    </p>
                </div>
            )}

            {/* Certificate Lightbox */}
            <Dialog 
                open={selectedIndex !== null}
                onOpenChange={(open) => {
                    if (!open) setSelectedIndex(null);
                }}
            >
                <DialogContent
                    showCloseButton={false}
                    className="
                        flex flex-col gap-4
                        w-[calc(100vw-1rem)] sm:w-[calc(100vw-2rem)]
                        max-w-none sm:max-w-5xl lg:max-w-6xl
                        max-h-[95dvh]
                        overflow-hidden
                        border-border bg-background
                        p-3 sm:p-5 lg:p-6
                    "
                >
                    {selectedTraining && (
                        <>
                            {/* Lightbox Header */}
                            <DialogHeader className="shrink-0 pr-8">
                                <DialogTitle className="text-left text-base font-semibold sm:text-lg">
                                    {selectedTraining.title}
                                </DialogTitle>

                                <DialogDescription className="text-left">
                                    {selectedTraining.conductor}
                                    {" · "}
                                    Certificate {selectedIndex! + 1} of{" "}
                                    {TrainingData.length}
                                </DialogDescription>
                            </DialogHeader>

                            {/* Close Button */}
                            <DialogClose>
                                <button
                                    type="button"
                                    aria-label="Close certificate viewer"
                                    className="absolute right-4 top-4 z-20 rounded-md p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                >
                                    <IconX className="size-5" />
                                </button>
                            </DialogClose>

                            {/* Image Viewer */}
                            <div className="relative flex min-h-0 flex-1 items-center justify-center overflow-hidden rounded-lg bg-black/3 dark:bg-white/3">
                                <img
                                    key={selectedTraining.cert_path}
                                    src={selectedTraining.cert_path}
                                    alt={`Full-size certificate: ${selectedTraining.title}`}
                                    className="
                                        block
                                        max-h-[calc(95dvh-11rem)]
                                        max-w-full
                                        object-contain
                                    "
                                />

                                {/* Previous Certificate */}
                                {TrainingData.length > 1 && (
                                    <button
                                        type="button"
                                        onClick={showPrevious}
                                        aria-label="View previous certificate"
                                        className="absolute left-2 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/90 text-foreground shadow-md backdrop-blur transition-all hover:scale-105 hover:bg-background sm:left-4 sm:size-12"
                                    >
                                        <IconChevronLeft className="size-6" />
                                    </button>
                                )}

                                {/* Next Certificate */}
                                {TrainingData.length > 1 && (
                                    <button
                                        type="button"
                                        onClick={showNext}
                                        aria-label="View next certificate"
                                        className="absolute right-2 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/90 text-foreground shadow-md backdrop-blur transition-all hover:scale-105 hover:bg-background sm:right-4 sm:size-12"
                                    >
                                        <IconChevronRight className="size-6" />
                                    </button>
                                )}
                            </div>

                            {/* Lightbox Footer */}
                            <div className="flex shrink-0 items-center justify-between gap-3">
                                <p className="text-xs text-muted-foreground sm:text-sm">
                                    {selectedIndex! + 1} / {TrainingData.length}
                                </p>

                                <DialogClose>
                                    <button
                                        type="button"
                                        className="rounded-lg border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                    >
                                        Close
                                    </button>
                                </DialogClose>
                            </div>
                        </>
                    )}
                </DialogContent>
            </Dialog>
        </section>
    );
}
