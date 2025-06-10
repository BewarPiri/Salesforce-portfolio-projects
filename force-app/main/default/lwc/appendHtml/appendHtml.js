import { LightningElement, api } from 'lwc';

export default class AppendHtml extends LightningElement {
    _result
    loaded


@api
    get result () {
        return this._result;
    }
    set result(data) {
        this._result = data; 
        if(this.loaded) {
            this.attachHtml();
        }

    }

    renderedCallback() {
        if (this._result && !this.loaded) {
            // Ensure the result is set before attaching HTML
            this.attachHtml();
        }{
        this.attachHtml();
        }
    }

    attachHtml() {
        const container = this.template.querySelector('.htmlcontainer');
        if (container) {
            container.innerHTML = this.result;
            this.loaded = true;
        }
    }
}