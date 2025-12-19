// custom.ts
// Custom MakeCode extension file

//% block="craft with %n"
export function craftWith(n: number): void {
    player.execute(`scoreboard players set .output${n} global 1`);
}
