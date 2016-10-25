https://developer.mozilla.org/en-US/docs/Web/Web_Components/Custom_Elements

class PaneElement extends HTMLElement {

    constructor() {
        super();
        
    }

    attachedCallback() {

    }
}

(document as any).registerElement('v-pane', PaneElement);