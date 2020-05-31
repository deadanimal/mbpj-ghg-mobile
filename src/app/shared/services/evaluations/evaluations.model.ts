export class Evaluation {
    public id: string
    public application_assessment: string
    public equipment: string
    public system: string
    public efficiency: string
    public remarks: string
    public created_date: string
    public modified_date: string

    constructor(
        id: string,
        application_assessment: string,
        equipment: string,
        system: string,
        efficiency: string,
        remarks: string,
        created_date: string,
        modified_date: string
    ) {
        this.id = id
        this.application_assessment = application_assessment
        this.equipment = equipment
        this.system = system
        this.efficiency = efficiency
        this.remarks = remarks
        this.created_date = created_date
        this.modified_date = modified_date
    }
}