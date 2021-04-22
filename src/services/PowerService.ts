export class PowerService {
  private static instance: PowerService;

  private subscribers: ((W: number) => void)[] = [];

  private constructor() {}

  public static getInstance(): PowerService {
    if (!PowerService.instance) {
      PowerService.instance = new PowerService();
    }

    return PowerService.instance;
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
      "00001818-0000-1000-8000-00805f9b34fb"
    );
    const characteristic = await service?.getCharacteristic(
      "00002a63-0000-1000-8000-00805f9b34fb"
    );

    characteristic?.startNotifications();
    characteristic?.addEventListener("characteristicvaluechanged", (e) => {
      // @ts-ignore
      const dataview: DataView = e.target.value;
      const watts = new Int16Array(dataview.buffer)[1];
      console.log(watts);
      // @ts-ignore`
      this.subscribers.forEach((c) => c(watts));
    });
  }
}
