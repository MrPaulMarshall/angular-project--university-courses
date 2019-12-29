export interface ICourse {
    name: string;
    teacher: string;
    semester: number;
    form: string;
    ECTS: number;
    maxStudents: number;
    imgURL: string;
    description: string;
    currentRating: number;
    howManyRates: number;
    signedUsers: Array<string>;
    whoRated: Array<string>;
}
