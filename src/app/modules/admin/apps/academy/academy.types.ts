import { Project } from "./project.interface";

export interface Category {
    id?: string;
    title?: string;
    slug?: string;
}

export interface Course {
    id?: string;
    title?: string;
    slug?: string;
    description?: string;
    category?: string;
    project: Project
    duration?: number;
    steps?: {
        order?: number;
        title?: string;
        subtitle?: string;
        content?: string;
    }[];
    totalSteps?: number;
    updatedAt?: number;
    featured?: boolean;
    progress?: {
        currentStep?: number;
        completed?: number;
    };
}
