export enum OpenAIModel {
  DAVINCI_TURBO = "Gemma-7b-it"
}

export interface Message {
  role: Role;
  content: string;
}

export type Role = "assistant" | "user";
