// custom.ts
// Custom MakeCode extension file

//% block="craft with %n"
//% weight=100 color=#ff4500 icon=""
namespace ブロックをおく {
    export function craftWith(n: number): void {
        player.execute(`scoreboard players set .output${n} global 1`);
    }
}