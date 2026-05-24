export type Notion =
  | "L'art"
  | "Le bonheur"
  | "La conscience"
  | "Le devoir"
  | "L'État"
  | "L'inconscient"
  | "La justice"
  | "Le langage"
  | "La liberté"
  | "La nature"
  | "La raison"
  | "La religion"
  | "La science"
  | "La technique"
  | "Le temps"
  | "Le travail"
  | "La vérité";

export type ExamType = "Annale" | "Potentiel";

export interface SubjectIdeas {
  problematica: string;
  authors: string[];
  plan: {
    these: string;
    antithese: string;
    synthese: string;
  };
}

export interface Subject {
  id: string;
  year?: number;
  location?: string;
  title: string;
  notions: Notion[];
  type: ExamType;
  ideas?: SubjectIdeas;
}
