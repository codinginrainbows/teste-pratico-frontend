export function formatPhone(phone: string): string {
  const digits = phone.replace(/\D/g, "");

  if (digits.length >= 11) {
    const country = digits.slice(0, 2);
    const ddd = digits.slice(2, 4);
    const numberBody = digits.slice(4);

    let formattedNumber = "";

    if (numberBody.length === 9) {
      formattedNumber = numberBody.replace(/(\d{5})(\d{4})/, "$1-$2");
    } else if (numberBody.length === 8) {
      formattedNumber = numberBody.replace(/(\d{4})(\d{4})/, "$1-$2");
    } else {
      formattedNumber = numberBody;
    }

    return `+${country} (${ddd}) ${formattedNumber}`;
  }

  return phone;
}
