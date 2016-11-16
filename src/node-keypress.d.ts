// Type definitions for keypress 0.2.1
// Project: https://github.com/TooTallNate/keypress
// Definitions by: Yusuke Watanabe <https://github.com/nabeix>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

interface KeyPressStatic {
    (stream: NodeJS.ReadableStream): void;
    disableMouse: (stream: NodeJS.WritableStream) => void;
    enableMouse: (stream: NodeJS.WritableStream) => void;
}

declare module "keypress" {
    var keypress: KeyPressStatic;
    export = keypress;
}
