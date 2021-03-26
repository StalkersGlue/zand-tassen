import { LitElement, html, customElement, css, property } from "lit-element";
import { HeartRateService } from "./services/HeartRateService";
import { PowerService } from "./services/PowerService";

@customElement("current-values")
export class CurrentValues extends LitElement {
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
  `;

  constructor() {
    super();
  }
  connectedCallback() {
    super.connectedCallback();
    this.unsubscribeHeartRate = HeartRateService.getInstance().subscribe(
      (heartRate) => (this.heartRate = heartRate)
    );
    this.unsubscribePower = PowerService.getInstance().subscribe(
      (power) => (this.power = power)
    );
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    if (this.unsubscribeHeartRate) {
      this.unsubscribeHeartRate();
    }
    if (this.unsubscribePower) {
      this.unsubscribePower();
    }
  }

  private unsubscribeHeartRate!: () => void;

  private unsubscribePower!: () => void;

  @property({ type: Number })
  private power = 0;

  @property({ type: Number })
  private cadence = 0;

  @property({ type: Number })
  private heartRate = 0;

  render() {
    return html`
<div style="color: white">Live</div>
      <div class="watts-container">
        <div class="watts">${decorateZeros(this.power)}</div>
        <div class="unit-container">
          <div style="font-size: 30px">&#9735</div>
          <div style="font-size: 30px">W</div>
        </div>
      </div>
      <div class="flex-container">
              <div class="flex-container">
          <div class="cadence">${decorateZeros(this.cadence)}</div>
          <div class="unit-container">
            <div>&#9740;</div>
            <div>RPM</div>
          </div>
        </div>
        <div class="flex-container">
          <div class="heart-rate">${decorateZeros(this.heartRate)}</div>
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
    "current-values": CurrentValues;
  }
}
