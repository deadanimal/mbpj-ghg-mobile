export class EvaluationSchedule {
    public id: string
    public application: string
    public date: string
    public session: string
    public created_date: string
    public modified_date: string

    constructor(
        id: string,
        application: string,
        date: string,
        session: string,
        created_date: string,
        modified_date: string
    ) {
        this.id = id
        this.application = application
        this.date = date
        this.session = session
        this.created_date = created_date
        this.modified_date = modified_date
    }
}