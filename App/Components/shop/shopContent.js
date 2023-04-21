import { Products } from "../../db/productos.js";
export class ShopContent extends HTMLElement{
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
      }
      connectedCallback() {
        this.shadowRoot.innerHTML = /* html */`
          <style rel="stylesheet">
              @import "./App/Components/shop/shopStyle.css";
          </style>
          <div class="products"></div>
          <div class="cartCompras">
         <img src="img/cart-regular-24.png" width="20px"></a>
          </div>
        `;
        this.mostrarTarjeta();
      }
      mostrarTarjeta(){
        Products.forEach(e => {
            let divTarjeta = this.shadowRoot.querySelector(".products");
            let content = document.createElement("div");
            content.className="carts"
            content.innerHTML=/*html*/`
              <p>${e.nombre}</p>
              <img src="${e.img}">
              <p>${this.formatoMoneda(e.precio)}</p>
            `;            

            divTarjeta.append(content);
            let verDatos = document.createElement("a");
            verDatos.id="btn"+e.id;
            verDatos.innerText="comprar";
            content.append(verDatos);
        });
    }
    formatoMoneda = (valor)=>{
      return valor.toLocaleString('en-US',{style:'currency', currency:'USD', minimumFractionDigits:2});
    }  
}  
customElements.define("shop-content", ShopContent);