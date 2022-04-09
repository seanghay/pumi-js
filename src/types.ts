export interface LocalizedName {
  km: string;
  latin: string;
}

export interface AdministrativeUnit extends LocalizedName {
  en: string;
}

export interface AdministrativeDivision {
  id: string;
  name: LocalizedName;
  unit: AdministrativeUnit;
}
