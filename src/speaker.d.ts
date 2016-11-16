// Type definitions for speaker X.X.X
// Project: https://github.com/TooTallNate/node-speaker
// Definitions by: Yusuke Watanabe <https://github.com/nabeix>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module "speaker" {
    import * as stream from "stream";
    interface SpeakerOpts {
        channels?: number;
        bitDepth?: number;
        sampleRate?: number;
        signed?: boolean;
        float?: boolean;
        samplesPerFrame?: boolean;
    }
    // TODO: stream.Writable is ok?
    interface Speaker extends stream.Writable {
    }
    interface SpeakerStatic {
        new(opts?: SpeakerOpts): Speaker;
    }
    var speaker: SpeakerStatic;
    export = speaker;
}
