export class Assessment {
    public id: string
    public remarks: string
    public supporting_doc: string
    public created_date: string
    public modified_date: string
    public application: string
    public assessment_aspect: string

    constructor(
        id: string,
        remarks: string,
        supporting_doc: string,
        created_date: string,
        modified_date: string,
        application: string,
        assessment_aspect: string
    ) {
        this.id = id
        this.remarks = remarks
        this.supporting_doc = supporting_doc
        this.created_date = created_date
        this.modified_date = modified_date
        this.application = application
        this.assessment_aspect = assessment_aspect
    }
}