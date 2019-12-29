import { ICourse } from './ICourse';

export class Course implements ICourse {

    constructor(public name: string, public teacher: string, public semester: number, public form: string, public ECTS: number,
                public maxStudents: number, public imgURL: string, public description: string, public currentRating: number,
                public howManyRates: number, public signedUsers: Array<string>, public whoRated: Array<string>) {
        /*
        this.name = name;
        this.teacher = teacher;
        this.semester = semester;
        this.form = form;
        this.ECTS = ECTS;
        this.maxStudents = maxStudents;
        this.imgURL = imgURL;
        this.description = description;
        this.currentRating = currentRating;
        this.howManyRates = howManyRates;
        */
    }
}
