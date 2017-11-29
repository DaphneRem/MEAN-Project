export class Article {
    constructor(
        public _id: string,
        public title: string,
        public subTitle: string,
        public body : string,
        public author: string,
        public links: string,
        public urlImage : string,
        public postDate : Date,
        public editDate? : Date
    ){}

    static CreateDefault(): Article {
        return new Article('', '', '', '', 'Daphné', '', '', new Date(), new Date());
    }
}
