import * as Speaker from "speaker";
import * as tty from "tty";

const stdin = <tty.ReadStream>process.stdin;

var speaker = new Speaker();

stdin.setRawMode(true);
stdin.resume();
stdin.setEncoding("utf8");

stdin.on("data", (key: string) => {
    // handle C-c
    if (key === "\u0003") {
        process.exit();
    }
    //process.stdout.write( key );
    console.log(key);
});
