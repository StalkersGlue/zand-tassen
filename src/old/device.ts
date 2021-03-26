import {
  LitElement,
  html,
  customElement,
  css,
  property,
  internalProperty,
} from "lit-element";
import { until } from "lit-html/directives/until.js";

@customElement("bt-device")
export class BtDevice extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 12px;
      margin-bottom: 4px;
      border-style: solid;
      border-color: red;
    }
  `;

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
    this._connect();
  }

  @property({ type: Object })
  private device: BluetoothDevice | undefined;

  @internalProperty()
  private server: BluetoothRemoteGATTServer | undefined;

  render() {
    const { name, id } = this.device || {};
    return html`
      <div>Device name: ${name}</div>
      <div>Device id:${id}</div>
      <div>Connected? ${this.server?.connected === true}</div>
      ${this.server?.connected === true
        ? html`
            <button @click=${this._disconnect}>Disconnect</button>
            ${until(this._renderServices(), html`<div>loading</div>`)}
          `
        : html`<button @click=${this._connect}>Connect</button>`}
    `;
  }

  private _connect = async () => {
    this.server = await this.device?.gatt?.connect();
  };

  private _disconnect = () => {
    this.server?.disconnect();
    this.server = undefined;
  };

  private async _renderServices() {
    const services = await this.server?.getPrimaryServices();
    return html`${services?.map(
      (service) => html`<bt-service .service="${service}"></bt-service>`
    )}`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "bt-device": BtDevice;
  }
}
