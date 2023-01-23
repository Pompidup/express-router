import Monster from "../../models/monster"

const create = (body: Record<string, unknown>) => {
    const monster = new Monster(body)
    return monster.save()
}

export default create