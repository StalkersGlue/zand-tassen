import {
  LitElement,
  html,
  customElement,
  css,
  property,
  internalProperty,
} from "lit-element";

import { StorageService } from "./services/StorageService";

@customElement("average-values")
export class AverageValues extends LitElement {
  static styles = css`
    :host {
      display: block;
      background-color: #0093d1;
      border-radius: 12px;
      font-family: Helvetica, Arial, sans-serif;
      font-weight: 1000;
      padding: 12px;
      margin: 6px;
    }

    .watts-container {
      display: flex;
      color: white;
      justify-content: flex-end;
      background-color: var(--bg);
    }

    .flex-container {
      display: flex;
      justify-content: flex-end;
    }

    .unit-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .watts {
      font-size: 100px;
      padding: 6px;
    }

    .heart-rate {
      color: black;
      font-size: 50px;
      padding: 6px;
      flex: 1;
    }

    .cadence {
      color: black;
      font-size: 50px;
      padding: 6px;
      flex: 1;
    }

    .warning {
      background-color: red;
    }
  `;

  @property({ type: Number, attribute: "timespan-in-minutes" })
  public timespanInMinutes: number = 0;

  @property({ type: Number, attribute: "power-limit" })
  public powerLimit: number = 0;

  @internalProperty()
  private averageHeartRate: number = 0;

  @internalProperty()
  private averagePower: number = 0;

  @internalProperty()
  private averageCadence: number = 0;

  connectedCallback() {
    super.connectedCallback();

    StorageService.getInstance().subscribe(
      this.timespanInMinutes,
      StorageService.HEART_RATE_KEY,
      (statistics) => {
        this.averageHeartRate = statistics.average;
      }
    );
    StorageService.getInstance().subscribe(
      this.timespanInMinutes,
      StorageService.CYCLING_POWER_KEY,
      (statistics) => {
        this.averagePower = statistics.average;
        this.style.setProperty(
          "--bg",
          this.averagePower > this.powerLimit ? "red" : "#0093d1"
        );
      }
    );
  }

  disconnectedCallback() {
    super.disconnectedCallback();
  }

  render() {
    return html`
      <div style="color: white">${this.timespanInMinutes} minute average</div>
      <div class="watts-container">
        <div class="watts">${decorateZeros(this.averagePower)}</div>
        <div class="unit-container">
          <div style="font-size: 30px">&#9735</div>
          <div style="font-size: 30px">W</div>
        </div>
      </div>
      <div class="flex-container">
              <div class="flex-container">
          <div class="cadence">${decorateZeros(this.averageCadence)}</div>
          <div class="unit-container">
            <div>&#9740;</div>
            <div>RPM</div>
          </div>
        </div>
        <div class="flex-container">
          <div class="heart-rate">${decorateZeros(this.averageHeartRate)}</div>
          <div class="unit-container">
            <div>&#10084;</div>
            <div>BPM</div>
          </div>
        </div>

      </div>
    `;
  }
}

function decorateZeros(n: number): string {
  return n === 0 ? "--" : n.toString();
}

declare global {
  interface HTMLElementTagNameMap {
    "average-values": AverageValues;
  }
}
