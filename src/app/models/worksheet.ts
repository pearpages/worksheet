export class Worksheet {

    constructor(
        public status: string,
        public insuredName: string,
        public insuredid: string,
        public dateReceived: Date,
        public rnb: boolean,
        public companyName: string,
        public companyid: string        
    ) {}
}

