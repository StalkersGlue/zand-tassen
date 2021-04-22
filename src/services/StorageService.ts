import { HeartRateService } from "./HeartRateService";
import { PowerService } from "./PowerService";

export class StorageService {
  private static instance: StorageService;

  private constructor() {}

  private subscribers: {
    timeOffset: number;
    key: string;
    cb: (statistics: Statistics) => void;
  }[] = [];

  public static HEART_RATE_KEY = "BPM";
  public static CYCLING_POWER_KEY = "W";

  public static getInstance(): StorageService {
    if (!StorageService.instance) {
      StorageService.instance = new StorageService();
      this.initializeStorage();
    }
    return StorageService.instance;
  }

  public subscribe(
    timeOffset: number,
    key: string,
    cb: (statistics: Statistics) => void
  ): () => void {
    this.subscribers = [...this.subscribers, { timeOffset, key, cb }];
    this._notifySubscribers();
    return () => {
      this.subscribers = this.subscribers.filter((c) => c.cb !== cb);
    };
  }

  public updateState(key: string, newMeasurement: Measurement): void {
    const measurements = this.getAll(key);
    measurements.push(newMeasurement);
    localStorage.setItem(key, JSON.stringify(measurements));
    this._notifySubscribers();
  }

  public getStatistics(
    key: string,
    timeOffsetInMinutes: number = 30
  ): Statistics {
    const measurements = this.getAll(key);
    const minutes: number = 30000 * timeOffsetInMinutes;
    const twentyMinutesPast = Date.now().valueOf() - minutes;
    const filtered = measurements.filter(
      ({timestamp}) => timestamp > twentyMinutesPast
    );
    let sum = 0;
    filtered.map(({measurement}) => (sum += measurement));
    // const start = Math.round(filtered[0].timestamp / 30000);
    // const end = Math.round(filtered[filtered.length - 1].timestamp / 30000);
    // const timeSpanInSeconds =
    //   (filtered[filtered.length - 1].timestamp - filtered[0].timestamp) / 1000;
    return {
      average: filtered.length > 0 ? Math.round(sum / filtered.length) : 0,
      // timeSpanInSeconds: Math.round(timeSpanInSeconds),
      total: filtered.length,
      // eventsPerSecond:
      //   Math.round((((end - start) * 60) / filtered.length) * 100) / 100,
    };
  }

  private getAll(key: string): Measurement[] {
    const raw = localStorage.getItem(key);
    if (raw) {
      return JSON.parse(raw);
    }
    throw Error("Local storage error");
  }

  private static initializeStorage() {
    [StorageService.HEART_RATE_KEY, StorageService.CYCLING_POWER_KEY].forEach(
      (key) => {
        const items = localStorage.getItem(key);
        if (!items) {
          localStorage.setItem(key, JSON.stringify([]));
        }
      }
    );

    HeartRateService.getInstance().subscribe((heartRate) => {
      StorageService.getInstance().updateState(StorageService.HEART_RATE_KEY, {
        measurement: heartRate,
        timestamp: Date.now(),
      });
    });

    PowerService.getInstance().subscribe((power) => {
      StorageService.getInstance().updateState(
        StorageService.CYCLING_POWER_KEY,
        {
          measurement: power,
          timestamp: Date.now(),
        }
      );
    });
  }

  private _notifySubscribers() {
    this.subscribers.map((subscriber) =>
      subscriber.cb(this.getStatistics(subscriber.key, subscriber.timeOffset))
    );
  }
}
