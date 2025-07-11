export interface Character {
    id: string
    name: string
}

export interface Script {
    id: string
    name: string
    answersCount: bigint
    branchesCount: bigint
    character: Character
    description: string
    getsItem: boolean
    itemName: string
    itemCondition: string
    getsInfo: boolean
    infoName: string
    infoCondition: string
    additional: string
}

export interface Scene {
    id: string
    name: string
    description: string
    scripts: Script[]
    characters: Character[]
}

export interface Game {
    id: string
    name: string
    scenes: Scene[]
    characters: Character[]
}
