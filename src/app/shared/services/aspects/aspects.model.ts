export class Aspect {
    public id: string
    public name: string
    public aspect_type: string
    public description: string
    public incentive: string
    public created_date: string
    public modified_date: string

    constructor(
        id: string,
        name: string,
        aspect_type: string,
        description: string,
        incentive: string,
        created_date: string,
        modified_date: string
    ) {
        this.id = id
        this.name = name
        this.aspect_type = aspect_type
        this.description = description
        this.incentive = incentive
        this.created_date = created_date
        this.modified_date = modified_date
    }
}