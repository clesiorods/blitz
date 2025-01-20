export interface IModules {
    id: number,
    description: string,
    group: string,
    icon: string,
    path: string,
}



export interface IUsuario {
    id: number,
    nome: string,	
    email: string,
    is_admin: number,
    url_foto: string,
}



export interface IFilial {
    id: number;
    cnpj: string;
    nome_fantasia: string;
    razao_social: string;
}
