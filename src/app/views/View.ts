export abstract class View<T> {
    protected _elemento: Element;

    constructor(seletor: string) {
        this._elemento = document.querySelector(seletor);
    }

    update(model: T) {
        let template = this.template(model);
        this._elemento.innerHTML = template;
    }

    abstract template(model: T): string;
}