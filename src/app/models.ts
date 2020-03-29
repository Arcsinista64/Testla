export interface Automovil {
    _id: number;
    modelos: number[];
    marca: string;
    submarca: string;
    descripcion: string;
    // claveVehicular: number;
}

export interface Country {
    name: string;
    flag: string;
    area: number;
    population: number;
}