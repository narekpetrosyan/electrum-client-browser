export = SocketClient;
declare class SocketClient {
    constructor(host: any, port: any, protocol: any, options: any);
    id: number;
    host: any;
    port: any;
    protocol: any;
    options: any;
    status: number;
    callback_message_queue: {};
    events: any;
    mp: util.MessageParser;
    client: WebSocketClient;
    connect(): Promise<any>;
    close(cb?: undefined): void;
    response(msg: any): void;
    onMessage(body: any, n: any): void;
    onConnect(): void;
    onClose(event: any): void;
    onRecv(chunk: any): void;
    onEnd(error: any): void;
    onError(error: any): void;
}
import util = require("./util");
import WebSocketClient = require("./socket_client_ws");
