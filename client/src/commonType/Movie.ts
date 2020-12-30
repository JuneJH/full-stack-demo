export interface Movie {
    id?: number | string;
    name: string;
    types: string[];
    areas: string[];
    timeLong: number;
    isHot: boolean;
    isComing: boolean;
    isClassic: boolean;
    description?: string;
    poster?: string;
}

export interface MovieEdit {
    id?: number;
    name?: string;
    types?: string[];
    areas?: string[];
    timeLong?: number;
    isHot?: boolean;
    isComing?: boolean;
    isClassic?: boolean;
    description?: string;
    poster?: string;
}