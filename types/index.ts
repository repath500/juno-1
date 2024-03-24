export enum OpenAIModel {
  DAVINCI_TURBO = "mixtral-8x7b-32768"
}

export interface Message {
  role: Role;
  content: string;
}

export type Role = "assistant" | "user";
