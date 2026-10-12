import { type RouteConfig, index, route, layout } from "@react-router/dev/routes";

export default [
    layout("layouts/AppLayout.tsx", [
        index("routes/Introduction.tsx"),
        route("experience", "routes/WorkExperience.tsx"),
        route("education", "routes/Education.tsx"),
        route("trainings", "routes/Training.tsx"),
        route("projects", "routes/Project.tsx"),
    ]),
] satisfies RouteConfig;
