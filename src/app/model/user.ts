export class User {
    constructor(
        public _id: string,
        public name : String,
        public age: Number,
        public location : string,
        public blog: string,
        public postDate : Date,
        public editDate : Date
    ){}

    static CreateDefault(): User {
        return new User('', '', 0, '', '', new Date(), null);
    }
}
