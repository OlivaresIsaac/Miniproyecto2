export class User {

    constructor(id, displayName, email){
        this.id = id
        this.displayName = displayName
        this.email = email
    }

    toObject() {
        return {
            id: this.id,
            displayName: this.displayName,
            email: this.email,
        }
    }
}