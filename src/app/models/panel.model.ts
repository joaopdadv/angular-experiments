export class Panel{
    constructor(
        public id:number,
        public labelId: string,
        public labelExpanded: boolean,
        public labelSvg: string,
        public labelText: string,
        public contentId: string,
        public contentHidden: boolean,
        public contentText: string,
        public contentImg: string,
        public contentImgAlt: string,
    ){

    }
}