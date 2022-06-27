

export class singleEvent {
    constructor(
        public eventObj: eventInfo,
        public sessionsList: Array<eventSession>,
    ) { }
};

export class eventInfo {
    constructor(
        public idStr: string,
        public titleStr: String,
        public subtitleStr: String,
        public imageStr: String,
    ) { }
}

export class eventSession {
    constructor(
        public dateStr: string,
        public availabilityNumber: Number,
        public buyTicketNumber: Number
    ) { }
};