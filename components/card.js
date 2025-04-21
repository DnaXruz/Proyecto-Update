class Card extends HTMLElement {
    constructor() {
      super();
this.shadowDOM = this; // Usamos el DOM "normal" del componente
    }
  
    static get observedAttributes() {
      return ['text']; // Escucha cambios en el atributo 'text'
    }
  
    connectedCallback() {
      this.render();
    }
  
    attributeChangedCallback(name, oldValue, newValue) {
      if (name === 'text' && oldValue !== newValue) {
        this.updateText();
      }
    }
  
    updateText() {
      const $tag = this.shadowDOM.querySelector('.tag');
      if ($tag) {
        $tag.textContent = this.getAttribute('text') || '';
      }
    }
  
    render() {
      this.shadowDOM.innerHTML = `
        ${this.template()}
      `;
    }
  
    template() {
      const title = this.getAttribute('title') || '';
      const text = this.getAttribute('text') || '';
      const image = this.getAttribute('image') || '';
      return `
    <div class="relative flex w-85 flex-col rounded-xl bg-[#E5E5E5] bg-clip-border text-gray-700 shadow-md mt-8">

    <div class="p-6">
    <img src="${image}" class="relative bg-white h-70 overflow-hidden rounded-xl bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 aspect-square
    object-contain mb-4">

    <h5 class="mb-2 block font-bai text-3xl font-bold leading-snug tracking-normal text-blue-gray-900 antialiased">
     ${title} 
    </h5>
    <p class="text-gl block font-bai text-lg font-medium  leading-relaxed text-inherit antialiased">
    ${text}
    </p>
  </div>

  <div class="p-6 pt-0">
    <button data-ripple-light="true" type="button" class="select-none rounded-lg bg-[#3333F5] py-3 px-6 text-center align-middle font-bai text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:bg-cyan-500 hover:shadow-lg hover:shadow-cyan-500/50 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
      Visitar Sitio
    </button>
  </div>

</div>
      `;
    }
    disconnectedCallback() {
      // Aquí podrías limpiar listeners, timers, etc. si los hubiera
    }
  }
  
  customElements.define('custom-card', Card);
  