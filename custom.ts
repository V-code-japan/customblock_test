
/**
* このファイルを使って、独自の関数やブロックを定義してください。
* 詳しくはこちらを参照してください：https://minecraft.makecode.com/blocks/custom
*/

// enum MyEnum {
//     //% block="one"
//     One,
//     //% block="two"
//     Two
// }

/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon=""
// namespace custom {
//     /**
//      * TODO: describe your function here
//      * @param n describe parameter here, eg: 5
//      * @param s describe parameter here, eg: "Hello"
//      * @param e describe parameter here
//      */
//     //% block
//     export function foo(n: number, s: string, e: MyEnum): void {
//         // Add code here
//     }

//     /**
//      * TODO: describe your function here
//      * @param value describe value here, eg: 5
//      */
//     //% block
//     export function fib(value: number): number {
//         return value <= 1 ? value : fib(value -1) + fib(value - 2);
//     }
// }

// custom.ts
// Custom MakeCode extension file

class CraftPattern {
    patternText: String
    public constructor(patternText: String) {
        this.patternText = patternText;
    }
}

//% weight=200 color="#0096FF" icon="\uf126" block="Hour of AI"
namespace haiInputs {

    /**
     * This function takes
     */
    //% block="craft with %n"
    //% n.shadow="ghostBlock"
    //% color="#0096FF"
    export function craftWith(n: number): void {
        player.execute(`scoreboard players set .output${n} global 1`);
    }

}

//% weight=200 color="#0096FF" icon="\uf126" block="Hour of AI Python"
namespace ai {

    const items: { [key: string]: string } = {
        'oak_planks': '1',
        'cobblestone': '3',
        'oak_log': '1',
        'birch_log': '2',
        'acacia_log': '3',
        'coal_ore': '4',
        'iron_ore': '5',
        'wool': '6',
        'grass': '0',
        'lava': '0',
        'soul_sand': '0',
        'coal': '21',
        'iron_ingot': '22',
        'stick': '2',
        'wood_pickaxe': '1',
        'wood_axe': '2',
        'wood_shovel': '3',
        'wood': '1'
    }

    const crafting_recipes: { [key: string]: string } = {
        'BBBB': '4',       // crafting bench
        'OOOOBOOBO': '5',  // stick or torch
        'BBBOBOOBO': '6',  // pickaxe
        'BBOOBOOBO': '7',  // axe
        'OBOOBOOBO': '8',  // shovel
        'BBOBBOBBO': '9',  // door
        'BBBBOBBBB': '10', // furnace
        'OOOBBBBBB': '11', // bed
        'OOOOBOOOB': '12', // shears
        'OOOB': '13'       // plank
    }

    /**
     * 3x3 Crafting Grid.
     */
    //% blockId=craftPattern block="3x3"
    //% imageLiteralColumns=3
    //% imageLiteralRows=3
    //% gridLiteral=1
    export function craftingPattern(pattern: string) {
        return new CraftPattern(pattern);
    }

}

