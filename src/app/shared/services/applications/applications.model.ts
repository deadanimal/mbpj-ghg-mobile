export class Application {
    public id: string
    public status: string
    public total_lamp: number
    public total_led: number
    public vehicle_car: number
    public vehicle_motorcycle: number
    public vehicle_bicycle: number
    public vehicle_other: number
    public electricity_bill_1_month: string
    public electricity_bill_1_usage: number
    public electricity_bill_1_doc: string
    public electricity_bill_2_month: string
    public electricity_bill_2_usage: number
    public electricity_bill_2_doc: string
    public electricity_bill_3_month: string
    public electricity_bill_3_usage: number
    public electricity_bill_3_doc: string
    public water_bill_1_month: string
    public water_bill_1_usage: number
    public water_bill_1_doc: string
    public water_bill_2_month : string
    public water_bill_2_usage: number
    public water_bill_2_doc: string
    public water_bill_3_month: string
    public water_bill_3_usage: number
    public water_bill_3_doc: string
    public created_date: string
    public modified_date: string
    public applicant: string
    public evaluator_nominated: string
    public applied_house: string

    constructor(
        id: string,
        status: string,
        total_lamp: number,
        total_led: number,
        vehicle_car: number,
        vehicle_motorcycle: number,
        vehicle_bicycle: number,
        vehicle_other: number,
        electricity_bill_1_month: string,
        electricity_bill_1_usage: number,
        electricity_bill_1_doc: string,
        electricity_bill_2_month: string,
        electricity_bill_2_usage: number,
        electricity_bill_2_doc: string,
        electricity_bill_3_month: string,
        electricity_bill_3_usage: number,
        electricity_bill_3_doc: string,
        water_bill_1_month: string,
        water_bill_1_usage: number,
        water_bill_1_doc: string,
        water_bill_2_month : string,
        water_bill_2_usage: number,
        water_bill_2_doc: string,
        water_bill_3_month: string,
        water_bill_3_usage: number,
        water_bill_3_doc: string,
        created_date: string,
        modified_date: string,
        applicant: string,
        evaluator_nominated: string,
        applied_house: string,
    ) {
        this.id = id
        this.status = status
        this.total_lamp = total_lamp
        this.total_led = total_led
        this.vehicle_car = vehicle_car
        this.vehicle_motorcycle = vehicle_motorcycle
        this.vehicle_bicycle = vehicle_bicycle
        this.vehicle_other = vehicle_other
        this.electricity_bill_1_month = electricity_bill_1_month
        this.electricity_bill_1_usage = electricity_bill_1_usage
        this.electricity_bill_1_doc = electricity_bill_1_doc
        this.electricity_bill_2_month = electricity_bill_2_month
        this.electricity_bill_2_usage = electricity_bill_2_usage
        this.electricity_bill_2_doc = electricity_bill_2_doc
        this.electricity_bill_3_month = electricity_bill_3_month
        this.electricity_bill_3_usage = electricity_bill_3_usage
        this.electricity_bill_3_doc = electricity_bill_3_doc
        this.water_bill_1_month = water_bill_1_month
        this.water_bill_1_usage = water_bill_1_usage
        this.water_bill_1_doc = water_bill_1_doc
        this.water_bill_2_month = water_bill_2_month
        this.water_bill_2_usage = water_bill_2_usage
        this.water_bill_2_doc = water_bill_2_doc
        this.water_bill_3_month = water_bill_3_month
        this.water_bill_3_usage = water_bill_3_usage
        this.water_bill_3_doc = water_bill_3_doc
        this.created_date = created_date
        this.modified_date = modified_date
        this.applicant = applicant
        this.evaluator_nominated = evaluator_nominated
        this.applied_house = applied_house
    }
}