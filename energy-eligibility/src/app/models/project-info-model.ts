
export enum OwnershipEnum {
    Owner = 'Propriétaire',
    Tenant = 'Locataire'
}

export type ProjectInfo = {
    ownership: OwnershipEnum;
    numberOfPeople: number;
    householdIncome: number;
    area: number;
    costOfProject: number;
}

const defaultProjectInfo: ProjectInfo = {
    ownership: OwnershipEnum.Tenant,
    numberOfPeople: 0,
    householdIncome: 0,
    area: 0,
    costOfProject: 0,
};

export default defaultProjectInfo;