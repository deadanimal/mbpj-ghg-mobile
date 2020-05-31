export class Rebate {
    public id: string
    public amount_approved: number
    public created_date: string
    public modified_date: string
    public application: string

    constructor(
        id: string,
        amount_approved: number,
        created_date: string,
        modified_date: string,
        application: string
    ) {
        this.id = id
        this.amount_approved = amount_approved
        this.created_date = created_date
        this.modified_date = modified_date
        this.application = application
    }
}