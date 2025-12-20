// custom.ts
// Custom MakeCode extension file

//% block="trigger event"
//% weight=100 color=#ff4500 icon=""
namespace イベントトリガー {

    //% block="イベントをトリガーする %イベント名"
    export function triggerEntityEvent(t: string, e: string): void {
        player.execute(`event entity @e[type=${t}] ${e}`);
    }
}