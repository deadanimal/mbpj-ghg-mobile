export class User {
    public id: string
    public username: string
    public full_name: string
    public email: string
    public nric_old: string
    public nric_new: string
    public nric_doc: string
    public mobile: string
    public phone: string
    public occupation: string
    public user_type: string
    public gender: string

    constructor(
        id: string,
        username: string,
        full_name: string,
        email: string,
        nric_old: string,
        nric_new: string,
        nric_doc: string,
        mobile: string,
        phone: string,
        occupation: string,
        user_type: string,
        gender: string
    ) {
        this.id = id
        this.username = username
        this.full_name = full_name
        this.email = email
        this.nric_old = nric_old
        this.nric_new = nric_new
        this.nric_doc = nric_doc
        this.mobile = mobile
        this.phone = phone
        this.occupation = occupation
        this.user_type = user_type
        this.gender = gender
    }
}