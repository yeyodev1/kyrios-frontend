export function validateName(name: string): boolean {
  const namePattern = /^.{2,}$/;

  return namePattern.test(name);
}

export function validateEmail(email: string): boolean{
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; 

  return emailPattern.test(email);
}
