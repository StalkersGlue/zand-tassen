import { LitElement, html, customElement, css, property } from "lit-element";
import { characteristics } from "./gattLookup";
import { until } from "lit-html/directives/until.js";
import { handleNotification } from "./characteristicNotificationHandler";

@customElement("bt-characteristic")
export class BtCharacteristic extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 12px;
      margin-bottom: 2px;
      border-style: solid;
      border-color: green;
    }
  `;

  constructor() {
    super();
    this.notificationValue = 0;
  }

  // @ts-ignore
  @property({ type: Object })
  private characteristic: BluetoothRemoteGATTCharacteristic | undefined;

  @property({ type: Number })
  private notificationValue: number;

  render() {
    return this.characteristic
      ? html`Characteristic:
          <div>${characteristics.get(this.characteristic.uuid)}</div>
          <div>broadcast: ${this.characteristic.properties.broadcast}</div>
          <div>read: ${this.characteristic.properties.read}</div>
          ${this.characteristic.properties.read
            ? html`<button @click=${this._read}>Read value</button>`
            : html`<button disabled>Not possible</button>`}
          <div>
            writeWithoutResponse:
            ${this.characteristic.properties.writeWithoutResponse}
          </div>
          <div>write: ${this.characteristic.properties.write}</div>
          <div>notify: ${this.characteristic.properties.notify}</div>
          ${this.characteristic.properties.notify
            ? html`<button @click=${this._startNotifications}>
                  Start Notifications
                </button>
                <button @click="${this._stopNotifications}">
                  Stop Notifications
                </button>`
            : html`<button disabled>Not possible</button>`}
          <div>Result: ${this.notificationValue}</div>

          <div>indicate: ${this.characteristic.properties.indicate}</div>
          <div>
            authenticatedSignedWrites:
            ${this.characteristic.properties.authenticatedSignedWrites}
          </div>
          <div>
            reliableWrite: ${this.characteristic.properties.reliableWrite}
          </div>
          <div>
            writableAuxiliaries:
            ${this.characteristic.properties.writableAuxiliaries}
          </div>
          ${until(this._renderDescriptors(), html`<div>loading</div>`)} `
      : `error loading characteristic`;
  }

  async _renderDescriptors() {
    const remoteDescriptors = await this.characteristic
      ?.getDescriptors()
      .catch(() => undefined);
    return html`${remoteDescriptors?.map(
      (descriptor) =>
        html`<bt-descriptor .descriptor="${descriptor}"></bt-descriptor>`
    )}`;
  }

  async _startNotifications() {
    console.log(this);
    this.characteristic = await this.characteristic?.startNotifications();
    this.characteristic?.addEventListener(
      "characteristicvaluechanged",
      this._handleNotification
    );
  }

  async _stopNotifications() {
    this.characteristic = await this.characteristic?.stopNotifications();
    this.characteristic?.removeEventListener(
      "characteristicvaluechanged",
      this._handleNotification
    );
  }

  async _read() {
    const data = await this.characteristic?.readValue();
    console.log(new TextDecoder().decode(data));
  }

  _handleNotification(event: any) {
    this.notificationValue = handleNotification(event);
    console.log(this.notificationValue);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "bt-characteristic": BtCharacteristic;
  }
}
