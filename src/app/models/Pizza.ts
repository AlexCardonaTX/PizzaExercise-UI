import { PizzaTopping } from "./PizzaTopping";

export class Pizza {
    public pizzaId: string|undefined;
    public pizzaName: string|undefined;
    public pizzaIngredients: PizzaTopping[]|undefined;

    constructor(init?: Partial<Pizza>) {
      (<any>Object).assign(this, init);
    }
}
