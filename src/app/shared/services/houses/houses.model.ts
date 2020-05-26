export class House {
    public id: string
    public location: string
    public address: string
    public postcode: string
    public area: string
    public building_type: string
    public assessment_tax_account: string
    public assessment_tax_doc: string
    public staying_duration_since: string
    public occupants: number
    public active: boolean
    public created_date: string
    public modified_date: string
    
    constructor(
        id: string,
        location: string,
        address: string,
        postcode: string,
        area: string,
        building_type: string,
        assessment_tax_account: string,
        assessment_tax_doc: string,
        staying_duration_since: string,
        occupants: number,
        active: boolean,
        created_date: string,
        modified_date: string
    ) {
        this.id = id
        this.location = location
        this.address = address
        this.postcode = postcode
        this.area = area
        this.building_type = building_type
        this.assessment_tax_account = assessment_tax_account
        this.assessment_tax_doc = assessment_tax_doc
        this.staying_duration_since = staying_duration_since
        this.occupants = occupants
        this.active = active
        this.created_date = created_date
        this.modified_date = modified_date
    }
}