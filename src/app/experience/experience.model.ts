import { Timestamp } from "rxjs";

export interface Experience {
    __id: string;
    name: number;
    _startDate?: Date;
    positionTitle: string;
    employmentType: string;
    organization: Timestamp;
    location: string;
    descriptions: string[];
}