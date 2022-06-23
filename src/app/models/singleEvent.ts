

export class singleEvents {
    constructor(
        public idStr: string,
        public titleStr: String,
        public subtitleStr: String,
        public imageStr: String,
        public sessionsList: Array<event_session>,
    ) { }
};

class event_session {
    constructor(
        public date: string,
        public availability: String,
    ) { }
};