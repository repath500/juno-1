export enum OpenAIModel {
  DAVINCI_TURBO = "gemma-7b-it"
}

export interface Message {
  role: Role;
  content: string;
}

export type Role = "assistant" | "user";
