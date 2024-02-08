export interface Contacto {
  id: number; //opcional, lo crea el back
  name: string;
  description?: string;
  firstName: string;
  telephoneNumber?: number;
  celularNumber?: number;
  user: any;
  userId: number;
  isBlocked: boolean;
  call: any[];
}

export interface ContactJsonPlaceholder {
  id?: number;
  name?: string;
  celularNumber?: number;
  telephoneNumber?: number;
  description?: string;
  isBlocked: boolean;
  call: any[];
  callInfo?: CallInfo;
}

class CallInfo {
  countCall?: number;
  timeCall?: Date;
}
