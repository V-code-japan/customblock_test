// custom.ts
// Custom MakeCode extension file

//% block="trigger event"
//% weight=100 color=#ff4500 icon=""
namespace イベントトリガー {

    //% block="ブロック"
    const my_block: {[key: string]: number} = {
        'oak_planks': 0,
        'birch_planks': 1,
        'dark_oak_planks': 1
    };

    //% block="イベントをトリガーする %t %e"
    export function triggerEntityEvent(t: string, e: string): void {
        player.execute(`event entity @e[type=${t}] ${e}`);
    };

    //% block="ブロックをえらぶ %n"
    //% n.shadow="ghostBlock"
    //% n.fieldEditor="gridpicker"
    export function chooseBlock(n: number) {
        if(n === 0) {
            player.execute(`say §c正解！`);
        } else {
            player.execute(`say §b残念…`);
        }
    }
}