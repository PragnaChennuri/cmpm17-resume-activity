export interface Experience {
    __id: string;
    name: string;
    positionTitle: string;
    employmentType: string;
    organization: string;
    location: string;
    descriptions: string[];
    _startDate?: Date;
}