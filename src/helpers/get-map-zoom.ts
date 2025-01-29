type Prams = {
  coordinates: { latitude: number; longitude: number }[];
};

export const getMapZoom = (prams: Prams) => {
  const latArr = prams.coordinates.map(c => c.latitude);
  const lonArr = prams.coordinates.map(c => c.longitude);
  const lat = { min: Math.min(...latArr), max: Math.max(...latArr) };
  const lon = { min: Math.min(...lonArr), max: Math.max(...lonArr) };
  const latitudeDelta = (lat.max - lat.min || 0.25) * 1.2;
  const longitudeDelta = (lon.max - lon.min || 0.25) * 1.2;
  const latitude = (lat.min + lat.max) / 2;
  const longitude = (lon.min + lon.max) / 2;
  return { latitude, longitude, latitudeDelta, longitudeDelta };
};
