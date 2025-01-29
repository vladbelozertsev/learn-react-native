type Prams = {
  $upper?: boolean;
  $lower?: boolean;
  $capit?: boolean;
};

export const getTransform = (prams: Prams) => {
  const capit = prams.$capit && 'capitalize';
  const upper = prams.$upper && 'uppercase';
  const lower = prams.$lower && 'lowercase';
  return capit || upper || lower || undefined;
};
