import { LitElement, html, customElement, css, property } from "lit-element";
import { until } from "lit-html/directives/until.js";
import { services } from "./gattLookup";

@customElement("bt-service")
export class BtService extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 12px;
      margin-bottom: 2px;
      border-style: solid;
      border-color: blue;
    }
  `;

  @property({ type: Object })
  private service: BluetoothRemoteGATTService | undefined;

  render() {
    return html`<div>Service: ${services.get(this.service?.uuid)}</div>
      <div>isPrimary?: ${this.service?.isPrimary}</div>
      ${until(this._renderCharacteristics(), html`<div>loading</div>`)} `;
  }

  private async _renderCharacteristics() {
    const characteristics = await this.service
      ?.getCharacteristics()
      .catch(() => undefined);

    return html`${characteristics?.map(
      (characteristic) =>
        html`<bt-characteristic
          .characteristic="${characteristic}"
        ></bt-characteristic>`
    )}`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "bt-service": BtService;
  }
}
