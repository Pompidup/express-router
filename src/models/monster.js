class Monster {
    constructor(body) {
        this.name = body.name
        this.email = body.email
        this.role = body.role
        this.race = body.race
    }

    // validating body.name
    isValidName() {
        return this.name && this.name.length >= 3 && this.name.length <= 255
    }

    // validating body.email with regex
    isValidEmail() {
        return this.email && this.email.match(/.+@.+\..+/)
    }

    // validating body.role with enum
    isValidRole() {
        return this.role && ['admin', 'user'].includes(this.role)
    }

    // validating body.race with enum
    isValidRace() {
        return this.race && ['orc', 'human', 'elf'].includes(this.race)
    }

    // validating all fields
    isValid() {
        return this.isValidName() && this.isValidEmail() && this.isValidRole() && this.isValidRace()
    }

    // saving to database if all fields are valid else throw error
    save() {
        if (this.isValid()) {
            return this
        } else {
            throw new Error('Invalid monster')
        }
    }
}

export default Monster