class KeyfilteredInput extends HTMLInputElement{

    constructor(){
        super();
    }


    connectedCallback(){
        this.filterChars = this.getAttribute('validCharacters');
        this.addEventListener('input', e => this.filterInput(e)); 
    }

    disconnectedCallback(){
        this.removeEventListener('input', e => this.filterInput(e));
    }

    filterInput(e){
        if( ! (this.filterChars.includes( this.value.slice(-1) ) ) ){
            this.value = this.value.slice(0,-1);
            console.log(this.value);
        }
    }
}

customElements.define('keyfiltered-input', KeyfilteredInput, {extends: 'input'});