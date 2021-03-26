import { LitElement, html, customElement, css, property } from "lit-element";
import { descriptors } from "./gattLookup";
import { until } from "lit-html/directives/until.js";

@customElement("bt-descriptor")
export class BtDescriptor extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 12px;
      margin-bottom: 2px;
      border-style: solid;
      border-color: pink;
    }
  `;

  @property({ type: Object })
  private descriptor: BluetoothRemoteGATTDescriptor | undefined;

  render() {
    return this.descriptor
      ? html`<div>Descriptor: ${descriptors.get(this.descriptor.uuid)}</div>
          <div>
            ${until(
              this.descriptor.readValue().then(JSON.stringify),
              html`<div>loading</div>`
            )}
          </div> `
      : `error loading descriptor`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "bt-descriptor": BtDescriptor;
  }
}
