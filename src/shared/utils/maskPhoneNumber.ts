function maskPhoneNumber (phone: string | null) {
  if (!phone || phone.length < 6) return phone || '';
  const firstPart = phone.slice(0, 1);
  const lastPart = phone.slice(-3);
  const maskedPart = '*'.repeat(phone.length - 6);
  return `${firstPart}${maskedPart}${lastPart}`;
};

export default maskPhoneNumber;