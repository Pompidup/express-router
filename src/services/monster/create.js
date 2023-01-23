import Monster from "../../models/monster"

const create = (body) => {
    const monster = new Monster(body)
    return monster.save()
}

export default create