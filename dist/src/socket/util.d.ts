export class MessageParser {
    constructor(callback: any);
    buffer: string;
    callback: any;
    recursiveParser: (n: any, buffer: any, callback: any) => any;
    run(chunk: any): void;
}
