export function handleNotification(event: any): number {
  const data: DataView = event.target.value;

  switch (event.target?.uuid) {
    case `00002a37-0000-1000-8000-00805f9b34fb`:
      return handleHeartRateMeasurement(data);
    case `00002a63-0000-1000-8000-00805f9b34fb`:
      return handleCyclingPower(data);
    default:
      return 1;
  }
}

function handleHeartRateMeasurement(value: DataView): number {
  return value.getUint8(1);
}

function handleCyclingPower(value: DataView): number {
  return value.getUint8(2);
}
