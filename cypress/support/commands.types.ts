export{};
declare global {
        namespace Cypress{
            export interface Chainable{
                loginToEA<E extends Node = HTMLElement>(): void;

            }
        }
}