export type User = {
  name?: string,
  lastname?: string,
  email: string,
  birthdate: string | Date,
  _id?: string,  
  token?: string,
  testAccessLevel?: string
}