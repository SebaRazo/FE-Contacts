export interface Contacto {
  id?: number; //opcional, lo crea el back
  name: string;
  description?: string;
  //firstName: string;
  //email: string;
  //lastName: string;
  telephoneNumber?: number;
  celularNumber?: number;
  //nombre_usuario?: string;
  //password?: string;
}

export interface ContactJsonPlaceholder {
  id?: number;
  name: string;
  celularNumber?: number;
  telephoneNumber?: number;
  description?: string;
}
