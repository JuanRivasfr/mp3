import { LitElement, html, css} from "lit";
class Myelement extends LitElement{
  constructor(){
    super();
  }
  static styles = css`
    .middleup__cont__img{
      width: 80%;
      background-color: red;
    }
  `
  render(){
    return html`
    <div class="middleup__cont__img">
      <img src="example.png">
    </div>
    `;
  }
}

customElements.define("my-element", Myelement)