declare class ElectrumClient {
  constructor(
    host: string,
    port: number,
    protocol: "ws" | "wss",
    options?: any
  );

  connect(
    clientName?: string,
    electrumProtocolVersion?: string,
    persistencePolicy?: { maxRetry: number; callback: Function | null }
  ): Promise<void>;
  request(method: string, params: any[]): Promise<any>;
  keepAlive(): Promise<void>;
  close(): void;

  // Server methods
  server_version(
    client_name: string,
    protocol_version: string
  ): Promise<string[]>;
  server_banner(): Promise<string>;
  server_ping(): Promise<null>;
  server_addPeer(features: any): Promise<null>;
  server_donation_address(): Promise<string>;
  server_features(): Promise<any>;
  server_peers_subscribe(): Promise<any[]>;

  // Blockchain address methods
  blockchain_address_getProof(address: string): Promise<any>;
  blockchain_address_getBalance(
    address: string
  ): Promise<{ confirmed: number; unconfirmed: number }>;
  blockchain_address_getHistory(address: string): Promise<any[]>;
  blockchain_address_getMempool(address: string): Promise<any[]>;
  blockchain_address_listunspent(address: string): Promise<any[]>;
  blockchain_address_subscribe(address: string): Promise<string | null>;

  // Blockchain scripthash methods
  blockchain_scripthash_getBalance(
    scripthash: string
  ): Promise<{ confirmed: number; unconfirmed: number }>;
  blockchain_scripthash_getHistory(scripthash: string): Promise<any[]>;
  blockchain_scripthash_getMempool(scripthash: string): Promise<any[]>;
  blockchain_scripthash_listunspent(scripthash: string): Promise<any[]>;
  blockchain_scripthash_subscribe(scripthash: string): Promise<string | null>;
  blockchain_scripthash_unsubscribe(scripthash: string): Promise<boolean>;

  // Blockchain block methods
  blockchain_block_header(height: number, cpHeight?: number): Promise<string>;
  blockchain_block_headers(
    startHeight: number,
    count: number,
    cpHeight?: number
  ): Promise<{ hex: string; count: number; max: number }>;
  blockchain_block_getChunk(index: number): Promise<string>;

  // Blockchain transaction methods
  blockchain_transaction_broadcast(rawtx: string): Promise<string>;
  blockchain_transaction_get(tx_hash: string, verbose?: boolean): Promise<any>;
  blockchain_transaction_getMerkle(
    tx_hash: string,
    height: number
  ): Promise<{ block_height: number; merkle: string[]; pos: number }>;

  // Other blockchain methods
  blockchainEstimatefee(number: number): Promise<number>;
  blockchain_headers_subscribe(): Promise<any>;
  blockchain_relayfee(): Promise<number>;
  blockchain_utxo_getAddress(tx_hash: string, index: number): Promise<string>;
  blockchain_numblocks_subscribe(): Promise<number>;

  // Mempool methods
  mempool_getFeeHistogram(): Promise<[number, number][]>;
}

export = ElectrumClient;
