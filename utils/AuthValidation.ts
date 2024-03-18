function validateEmail(email: string): boolean {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  return emailPattern.test(email);
}

function validateSymbol(email: string): boolean {
  const symbolPattern = /[@^$%&|<>#]/;

  return symbolPattern.test(email);
}

function calculateAge(dateOfBirth: string): number {
  const dateOfBirthObj = new Date(dateOfBirth);
  const currentDate = new Date();
  
  let age = currentDate.getFullYear() - dateOfBirthObj.getFullYear();
  const currentMonth = currentDate.getMonth();
  const birthMonth = dateOfBirthObj.getMonth();
  
  // Check if the birth month is later than the current month
  // or if it's the same month but the birth day is later than the current day
  if (birthMonth > currentMonth || (birthMonth === currentMonth && dateOfBirthObj.getDate() > currentDate.getDate())) {
    age--;
  }
  
  return age;
}

export {
  validateEmail,
  validateSymbol,
  calculateAge
}