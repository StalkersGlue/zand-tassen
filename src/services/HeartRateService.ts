export class HeartRateService {
  private static instance: HeartRateService;

  private subscribers: ((BPM: number) => void)[] = [];

  private constructor() {}

  public static getInstance(): HeartRateService {
    if (!HeartRateService.instance) {
      HeartRateService.instance = new HeartRateService();
    }

    return HeartRateService.instance;
  }

  public subscribe(cb: (heartRate: number) => void): () => void {
    this.subscribers = [...this.subscribers, cb];
    return () => {
      this.subscribers = this.subscribers.filter((c) => c !== cb);
    };
  }

  public async setDevice(device: BluetoothDevice): Promise<void> {
    const server = await device.gatt?.connect();
    const service = await server?.getPrimaryService(
      "0000180d-0000-1000-8000-00805f9b34fb"
    );
    const characteristic = await service?.getCharacteristic(
      "00002a37-0000-1000-8000-00805f9b34fb"
    );

    characteristic?.startNotifications();
    characteristic?.addEventListener("characteristicvaluechanged", (e) => {
      // @ts-ignore
      const heartRate = e.target.value.getUint8(1);
      this.subscribers.map((cb) => cb(heartRate));
    });
  }
}
