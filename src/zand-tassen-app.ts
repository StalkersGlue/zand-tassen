import {
  LitElement,
  html,
  customElement,
  css,
  internalProperty,
} from "lit-element";
import { services } from "./old/gattLookup";
import { HeartRateService } from "./services/HeartRateService";
import { PowerService } from "./services/PowerService";

@customElement("zand-tassen-app")
export class ZandTassenApp extends LitElement {
  static styles = css`
    :host {
      display: block;
      border-radius: 12px;
      font-family: Helvetica, Arial, sans-serif;
      font-weight: 1000;
      max-width: 600px;
      margin: 0 auto !important;
      float: none !important;
    }

    button {
      border-radius: 6px;
      border-color: transparent;
      font-family: Helvetica, Arial, sans-serif;
      font-weight: 1000;
      color: white;
      padding: 12px;
      outline: none;
    }

    .pair {
      background-color: black;
    }

    .pair:hover {
      background-color: darkgray;
    }

    .unpair {
      background-color: black;
    }

    .unpair:hover {
      background-color: darkgrey;
    }

    .card {
      border-radius: 6px;
      padding: 6px;
    }
  `;

  constructor() {
    super();
    //Todo: fix this somewhere else
    this.weight = 88;
    this.powerLimit = 300;
  }

  @internalProperty()
  weight: number;

  @internalProperty()
  powerLimit: number;

  render() {
    return html`
      <div class="card">
        <div>
          <button class="pair" @click=${this._addHeartRateDevice}>
            PAIR HEART RATE
          </button>

          <button class="pair" @click=${this._addCyclingPowerDevice}>
            PAIR CYCLING POWER
          </button>
        </div>
      </div>

      <current-values></current-values>

      <div class="card">
        <div>
          <input
            type="number"
            .value="${this.weight}"
            @input="${(e: any) => (this.weight = e.target.value)}"
          />
          Weight (Kg)
        </div>
        <div>
          <input
            type="number"
            .value="${this.powerLimit}"
            @input="${(e: any) => (this.powerLimit = e.target.value)}"
          />
          Power Threshold (W)
        </div>
        <div>
          <input type="number" disabled .value="${this._getWkgThreshold()}" />
          Power Threshold (W/Kg)
        </div>
      </div>

      <average-values
        timespan-in-minutes="5"
        power-limit="${this.powerLimit}"
      ></average-values>
      <average-values
        timespan-in-minutes="10"
        power-limit="${this.powerLimit}"
      ></average-values>
      <average-values
        timespan-in-minutes="20"
        power-limit="${this.powerLimit}"
      ></average-values>
    `;
  }

  private async _addHeartRateDevice() {
    const heartRateMonitor = await navigator.bluetooth.requestDevice({
      // acceptAllDevices: true,
      filters: [{ name: "HR-70EC2498" }],
      optionalServices: [...services.keys()],
    });

    await HeartRateService.getInstance().setDevice(heartRateMonitor);
  }

  private async _addCyclingPowerDevice() {
    const cyclingPowerMonitor = await navigator.bluetooth.requestDevice({
      // acceptAllDevices: true,
      filters: [{ name: "KICKR CORE 7994" }],
      optionalServices: [...services.keys()],
    });

    await PowerService.getInstance().setDevice(cyclingPowerMonitor);
  }

  private _getWkgThreshold() {
    const val = this.powerLimit / this.weight;
    return isFinite(val) ? val.toFixed(2) : 0;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "zand-tassen-app": ZandTassenApp;
  }
}
