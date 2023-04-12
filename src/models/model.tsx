export interface GlobalContextType {
    listOfMCPs: MCPs[]
    listOfJanitor: Janitor[]
    listOfCollector: Collector[]
    listOfVehicle: Vehicle[]
}

export interface Coordinate {
    lat: number
    lng: number
}

//Major collecting point interface
export interface MCPs extends Coordinate {
    name: string
    capacity: number //Capacity of current MCP
}

export interface Vehicle {
    name: string
    owner: Collector
    status: string
}

export class Person {
    name: string
    birthday: string
    phone_number: string
    constructor (name: string, birthday: string, phone_number: string) {
        this.name = name
        this.birthday = birthday
        this.phone_number = phone_number
    }
}

export class Janitor extends Person {
    task ?: MCPs
}

export class Collector extends Person {
    vehicle_incharge ?: Vehicle
    task ?: MCPs
}

