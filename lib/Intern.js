class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email)
        this.school = school
    }

    getName() {
        return this.school
    }
    getRole () {
        return "Intern"
    }
}