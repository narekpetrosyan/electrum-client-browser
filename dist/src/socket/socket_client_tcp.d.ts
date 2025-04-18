export = SocketClient;
declare class SocketClient {
    constructor(self: any, host: any, port: any, protocol: any, options: any);
    host: any;
    port: any;
    client: any;
    connect(): Promise<any>;
    close(): Promise<void>;
    send(data: any): void;
}
