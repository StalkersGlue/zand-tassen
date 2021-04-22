import { LitElement, html, customElement, css, property } from "lit-element";
import { StorageService } from "./services/StorageService";
// import { until } from "lit-html/directives/until.js";

@customElement("cycling-power-monitor")
export class CyclingPowerMonitor extends LitElement {
  static styles = css`
    :host {
      display: block;
      border-style: solid;
      padding: 12px;
      margin: 12px;
    }
  `;

  async connectedCallback() {
    super.connectedCallback();
    this.characteristic = await this._subscribeToCyclingPower();
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
  private currentWattage: number = 0;

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
      ? html`<div>
            Current watts: ${this.currentWattage}
          </div>
          <div>Average watts: ${this.averageHeartRate}</div>
          <div>Time window: ${this.timeSpanInSeconds} seconds</div>
          <div>Total events: ${this.totalEvents}</div>
          <div>Events per second: ${this.eventsPerSecond}</div>`
      : html`<div>Error loading heart rate</div>`;
  }

  async _subscribeToCyclingPower() {
    console.log(this.device);
    this.server = await this.device?.gatt?.connect();
    this.service = await this.server?.getPrimaryService(
      "00001818-0000-1000-8000-00805f9b34fb"
    );
    this.characteristic = await this.service?.getCharacteristic(
      "00002a63-0000-1000-8000-00805f9b34fb"
    );

    return this.characteristic?.startNotifications();
  }

  async _handleNotifications() {
    this.characteristic?.addEventListener("characteristicvaluechanged", (e) => {
      // @ts-ignore
      this.currentWattage = e.target.value.getUint8(2);
      StorageService.getInstance().updateState(
        StorageService.CYCLING_POWER_KEY,
        {
          measurement: this.currentWattage,
          timestamp: new Date().valueOf(),
        }
      );

      const statistics = StorageService.getInstance().getStatistics(
        StorageService.CYCLING_POWER_KEY
      );

      this.averageHeartRate = statistics.average;
      // this.timeSpanInSeconds = statistics.timeSpanInSeconds;
      this.totalEvents = statistics.total;
      // this.eventsPerSecond = statistics.eventsPerSecond;
    });
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "cycling-power-monitor": CyclingPowerMonitor;
  }
}
