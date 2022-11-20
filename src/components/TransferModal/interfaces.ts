export interface IFormData{
    value: string
}

export interface IUser {
    id: string
    username: string
    password: string
}

export interface IModalProps {
    user: IUser
}
