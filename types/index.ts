export enum OpenAIModel {
  DAVINCI_TURBO = "llama3-8b-8192"
}

export interface Message {
  role: Role;
  content: string;
}

export type Role = "assistant" | "user";
