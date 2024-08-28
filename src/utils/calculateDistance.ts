export default function calculateDistance (originCityId: number, destinationCityId: number) {
  const distance: number = Math.abs(originCityId-destinationCityId);
  return distance;
}