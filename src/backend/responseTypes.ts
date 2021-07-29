export interface Symptom {
  sid: number;
  name: string;
  desc?: string;
  qn: string;
}

export interface Disease {
  disId: number;
  chemicalName: string;
  scientificName: string;
  ipmMeasures: string;
  chemicalAdvice: string;
  organiceAdvice: string;
  otherSymptoms: Symptom[];
}

export interface Crop {
  cid: number;
  name: string;
  image: string;
}

export type CropResponse = Crop[];

export type AlgoResponse = {
  diseaseFound: boolean;
  symptoms?: Symptom;
  disease?: Disease;
};

export type SymptomResponse = Symptom;
