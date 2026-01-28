export interface Experience {
    __id: string;
    name: string;
    _startDate?: Date;
    _endDate?: Date;
    positionTitle: string;
    employmentType: string;
    organization: string;
    location?: string;
    descriptions: string[];
}