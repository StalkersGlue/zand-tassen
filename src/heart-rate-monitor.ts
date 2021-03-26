import { LitElement, html, customElement, css, property } from "lit-element";
import { StorageService } from "./services/StorageService";
@customElement("heart-rate-monitor")
export class HeartRateMonitor extends LitElement {
  static styles = css`
    :host {
      display: block;
      background-color: #0093d1;
      border-radius: 12px;
      font-family: Helvetica, Arial, sans-serif;
      padding: 12px;
      margin: 12px;
    }

    .heart-rate {
      color: black;
      font-size: 100px;
      font-family: Helvetica, Arial, sans-serif;
      font-weight: bold;
    }
    .bpm {
      font-size: 50px;
      font-weight: bold;
    }
  `;

  async connectedCallback() {
    super.connectedCallback();
    this.characteristic = await this._subscribeToHeartRate();
    await this._handleNotifications();
  }

  @property({ type: Object })
  public device: BluetoothDevice | undefined;

  @property({ type: Object })
  private server: BluetoothRemoteGATTServer | undefined;

  @property({ type: Object })
  private service: BluetoothRemoteGATTService | undefined;

  @property({ type: Object })
  private characteristic: BluetoothRemoteGATTCharacteristic | undefined;

  @property({ type: Number })
  private currentHeartRate: number = 0;

  @property({ type: Number })
  private averageHeartRate: number = 0;

  @property({ type: Number })
  private timeSpanInSeconds: number = 0;

  @property({ type: Number })
  private totalEvents: number = 0;

  @property({ type: Number })
  private eventsPerSecond: number = 0;

  render() {
    return this.device
      ? html`<div class="heart-rate">
            ${this.currentHeartRate}
          </div>
          <div class="bpm">&hearts; BPM</div>
          <div>Average HR: ${this.averageHeartRate}</div>
          <div>Time window: ${this.timeSpanInSeconds} minutes</div>
          <div>Total events: ${this.totalEvents}</div>
          <div>Events per second: ${this.eventsPerSecond}</div>`
      : html`<div>Error loading heart rate</div>`;
  }

  async _subscribeToHeartRate() {
    console.log(this.device);
    this.server = await this.device?.gatt?.connect();
    this.service = await this.server?.getPrimaryService(
      "0000180d-0000-1000-8000-00805f9b34fb"
    );
    this.characteristic = await this.service?.getCharacteristic(
      "00002a37-0000-1000-8000-00805f9b34fb"
    );

    return this.characteristic?.startNotifications();
  }

  async _handleNotifications() {
    this.characteristic?.addEventListener("characteristicvaluechanged", (e) => {
      // @ts-ignore
      this.currentHeartRate = e.target.value.getUint8(1);
      StorageService.getInstance().updateState(StorageService.HEART_RATE_KEY, {
        measurement: this.currentHeartRate,
        timestamp: new Date().valueOf(),
      });

      const statistics = StorageService.getInstance().getStatistics(
        StorageService.HEART_RATE_KEY
      );

      this.averageHeartRate = statistics.average;
      this.timeSpanInSeconds = Math.floor(statistics.timeSpanInSeconds / 60);
      this.totalEvents = statistics.total;
      this.eventsPerSecond = statistics.eventsPerSecond;
    });
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "heart-rate-monitor": HeartRateMonitor;
  }
}
