export enum OpenAIModel {
  DAVINCI_TURBO = "llama2-70b-4096"
}

export interface Message {
  role: Role;
  content: string;
}

export type Role = "assistant" | "user";
