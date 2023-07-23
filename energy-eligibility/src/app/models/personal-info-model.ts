export enum CivilityEnum {
    Misses = 'Madame',
    Mister = 'Monsieur',
    Other = 'Autre'
}

export type PersonalInfo = {

    civility: CivilityEnum;
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
}

const defaultPersonalInfo: PersonalInfo = {
    civility: CivilityEnum.Other,
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
};

export default defaultPersonalInfo;