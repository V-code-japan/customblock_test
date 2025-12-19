// custom.ts
// Custom MakeCode extension file

//% block="craft with"
//% weight=100 color=#ff4500 icon=""
namespace ブロックをおく {

    //% block="craft with %n"
    export function craftWith(n: number): void {
        player.execute(`tag @a add number_${n}`);
    }
}