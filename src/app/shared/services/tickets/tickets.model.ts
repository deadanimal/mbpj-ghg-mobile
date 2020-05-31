export class Ticket {
    public id: string
    public name: string
    public active: boolean
    public solved: boolean
    public ticket_type: string
    public sender: string
    public receiver: string

    constructor(
        id: string,
        name: string,
        active: boolean,
        solved: boolean,
        ticket_type: string,
        sender: string,
        receiver: string
    ) {
        this.id = id
        this.name = name
        this.active = active
        this.solved = solved
        this.ticket_type = ticket_type
        this.sender = sender
        this.receiver = receiver
    }
}