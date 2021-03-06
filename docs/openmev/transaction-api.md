---
title: OpenMEV Transaction Status API Specification
version: 0.1.0
date: 2022.04.06
---

# OpenMEV Transaction API

Transactions that you submit to OpenMEV won't be observable in the public mempool. You can still check on the status of
your submitted transaction via our API detailed below.

## Potential statuses

- `PENDING` - The transaction was received and is currently being submitted to miners
- `INCLUDED` - The transaction was included on-chain
- `FAILED` - The transaction was submitted for 25 blocks and failed to be included on-chain
- `CANCELLED` - The transaction was cancelled by the user and not included on-chain
- `UNKNOWN` - The transaction was not received

## Privacy

In order to receive a response from the status API you must provide a valid transaction hash to look up.

## Response Message

OpenMEV Status API is flashbots compatible, meaning it covers at least version 0.6+ of Flashbots API.

To check the status of your transactions query the OpenMEV API Endpoint. Response messages are formatted as follows:

```json
{
  "status": "PENDING",
  "hash": "YOUR_TX_HASH",
  "maxBlockNumber": "latest",
  "transaction": {
    "from": "<SENDER>",
    "to": "<RECEIVER>",
    "gasLimit": "23000",
    "maxFeePerGas": "300",
    "maxPriorityFeePerGas": "10",
    "nonce": "42",
    "value": "1333333333337"
  }
}
```

## Typescript Library

```typescript
// @see {@link https://github.com/manifoldfinance/libsushi/blob/master/src/SushiGuard/index.ts}
/**
 * @package OpenMevTxState
 * @version 2022.04
 * @see {@link docs.openmev.org}
 * @notice This is a flashbots-api compatible interface ( ~v0.6 )
 *
 * - UNCHECKED -> Tx status has not been checked and there's no information about it.
 * - PROCESSING -> Tx checks are in place until a resolution happens: OK, INDETERMINATE, ERROR.
 * - OK -> Relay received the Tx && all downstream miners accepted without complains && tx mined successfully
 * - INDETERMINATE -> Relay received correctly the Tx && at least one miner accepted the TX && TX potentially mineable
 * - ERROR -> Relay hasn't received the TX || none of the miners accepted the Tx || Tx was not mined successfully
 *
 */

export enum PrivateTxState {
  UNCHECKED = 'UNCHECKED',
  PROCESSING = 'PROCESSING',
  OK = 'OK',
  INDETERMINATE = 'INDETERMINATE',
  ERROR = 'ERROR',
}

export type RelayResponses = Record<string, RelayResponse>;

export interface RelayResponse {
  response: JsonRpcResponse<any>;
  error?: string;
}

export interface PrivateTxStatus {
  transactionHash: string;
  receivedAt: string;
  relayedAt?: string;
  minedAt?: string;
  relayFailure?: boolean;
  relayResponses?: RelayResponses;
}
```

## Block parameters

When you make requests that might have different results depending on the block accessed, the block parameter specifies
the block. Methods such as `eth_getTransactionByBlockNumberAndIndex` have a block parameter.

The block parameter can have the following values:

`blockNumber` : quantity - The block number, specified in hexadecimal or decimal. 0 represents the genesis block.  
`earliest` : tag - The earliest (genesis) block.  
`latest` : tag - The last block mined.  
`pending` : tag - The last block mined plus pending transactions. Use only with `eth_getTransactionCount`.

## Subscribing

Use `eth_subscribe` to create subscriptions for the following event types:

- New headers    
- Logs    
- Pending transactions    
- Dropped transactions    


## Logs

To notify you about logs included in new blocks, use the logs' parameter with `eth_subscribe` or `mev_subscribe`.    
Specify a filter object to receive notifications only for logs matching your filter.

Logs subscriptions have a filter object parameter with the following fields:

`address` - (optional) Either an address or an array of addresses. Returns only logs created from these addresses.    
`topics` - (optional) Returns only logs that match the specified topics.    
`fromBlock` - (optional) The earliest block from which to return logs.    
`toBlock` - (optional) The last block from which to return logs.    

If a chain _reorganization_ occurs, the subscription publishes notifications for logs from the old chain with the
removed property in the log object set to true. This means the subscription can publish notifications for multiple logs
for the same transaction.

## Response RPC Methods

These are methods we support for which we return static responses to ensure compliance


| rpc_method                              | endpoint    |
|-----------------------------------------|-------------|
| eth_getUncleByBlockNumberAndIndex       |   v1        |
| eth_protocolVersion            |   v1        |
| net_version          |   v1        |
| web3_clientVersion                  |   v1        |
| eth_chainId                  |   v1        |



### Supported RPC Methods

These are all methods we expose and proxy to our internal eth clients


| rpc_method                              | endpoint    |
|-----------------------------------------|-------------|
| eth_blockNumber                         |   v1        |
| eth_call                                |   v1        |
| eth_estimateGas                         |   v1        |
| eth_gasPrice                            |   v1        |
| eth_getBalance                          |   v1        |
| eth_getBlockByHash                      |   v1        |
| eth_getBlockByNumber                    |   v1        |
| eth_getBlockTransactionCountByHash      |   v1        |
| eth_getBlockTransactionCountByNumber    |   v1        |
| eth_getCode                             |   v1        |
| eth_getStorageAt                        |   v1        |
| eth_getTransactionByBlockHashAndIndex   |   v1        |
| eth_getTransactionByBlockNumberAndIndex |   v1        |
| eth_getTransactionByHash                |   v1        |
| eth_getTransactionCount                 |   v1        |
| eth_getTransactionReceipt               |   v1        |
| eth_getUncleByBlockHashAndIndex         |   v1        |
| eth_getUncleByBlockNumberAndIndex       |   v1        |
| eth_getUncleCountByBlockHash            |   v1        |
| eth_getUncleCountByBlockNumber          |   v1        |
| eth_sendRawTransaction                  |   v1        |
 

### SecureRPC MEV Transaction

Same signature as `eth_sendRawTransaction`

```
manifold_sendTransaction
```


## 3rd Party Compatible APIs

SecureRPC's third party compatibility APIs require an active membership.
[securerpc.com/request-invite](https://securerpc.com/request-invite/).

The following APIs are designed to be API compatible with different
third party endpoints. Responses are intended to be "happy path
compatible" with the third party endpoints - that is under some error
conditions responses may not be exactly identical. Additionally, in some
cases where aggregations or estimates are involved responses may not be
identical, but should be comparable and fit for the same purposes.
Additionally, our APIs will generally provide addresses in checksummed
format.


## Etherscan Compatible

SecureRPC implements the following Etherscan compatible APIs. 
All Etherscan compatible API calls are of the form:

```env
    https://api.securerpc.com/eth/api?module=$MODULE&action=$ACTION
```

With additional parameters to be documented below.

### Account Transaction List

Returns transactions and receipt data where the specified address is
either the sender, recipient, or the contract created by a transaction.

```bash
    curl 'https://api.securerpc.com/eth/api?module=account&action=txlist&address=0xdde19c145c1ee51b48f7a28e8df125da0cc440be'
```

The following parameters are available:

| **Key** 	| **Value** 	| **Description** 	|
|---	|---	|---	|
| address  	| (required) 	| The Ethereum address to look up related nft transfers. 	|
| startblock 	| (default 0) 	| The beginning of the block range to inspect. 	|
| endblock 	| (default 99999999) 	| The end of the block range to inspect. 	|
| offset  	| (default 10000) 	| The maximum number of records to be returned. 	|
| page  	| (default 1) 	| The page number (assuming each page has a size of offset) 	|
| sort 	| (default asc) 	| Whether records should be sorted ascending (asc - earliest records first) or descending (desc - oldest records first). 	|


<div class="note">
<div class="title">

???? NOTE.

</div>

The behavior of the `isError` field of transactions within this API is
not documented by Etherscan, and our implementation differs in some
cases. We define `isError` to be `true` if the transaction reverted, or
failed for other reasons (such as invalid opcodes), and `false`
otherwise.

</div>

### Account Token Transfer List

Returns information about ERC20 token transfers, including several
pieces of information about the transaction in which the token transfer
occurred.

```bash
    curl -sL 'https://api.securerpc.com/eth/api?module=account&action=tokentx&address=0xA0766B65A4f7B1da79a1AF79aC695456eFa28644'
```
The following parameters are available:

| **Key** 	| **Value** 	| **Description** 	|
|---	|---	|---	|
| address  	| (required) 	| The Ethereum address to look up related nft transfers. 	|
| startblock 	| (default 0) 	| The beginning of the block range to inspect. 	|
| endblock 	| (default 99999999) 	| The end of the block range to inspect. 	|
| offset  	| (default 10000) 	| The maximum number of records to be returned. 	|
| page  	| (default 1) 	| The page number (assuming each page has a size of offset) 	|
| sort 	| (default desc) 	| Whether records should be sorted ascending (asc - earliest records first) or descending (desc - oldest records first). 	|

### Account NFT Token Transfer List

Returns information about ERC721 token transfers, including several
pieces of information about the transaction in which the token transfer
occurred.

```bash
    curl 'https://api.securerpc.com/eth/api?module=account&action=tokennfttx&address=0xA0766B65A4f7B1da79a1AF79aC695456eFa28644'
```
The following parameters are available:

| **Key** 	| **Value** 	| **Description** 	|
|---	|---	|---	|
| address  	| (required) 	| The Ethereum address to look up related nft transfers. 	|
| startblock 	| (default 0) 	| The beginning of the block range to inspect. 	|
| endblock 	| (default 99999999) 	| The end of the block range to inspect. 	|
| offset  	| (default 10000) 	| The maximum number of records to be returned. 	|
| page  	| (default 1) 	| The page number (assuming each page has a size of offset) 	|
| sort 	| (default desc) 	| Whether records should be sorted ascending (asc - earliest records first) or descending (desc - oldest records first). 	|

### Account Get Mined Blocks

Get mined blocks by account, including block number, timestamp, and
reward. Note that at this time Bolt does not support retrieving uncles
with this method.

```bash
    curl 'https://api.securerpc.com/eth/api?module=account&action=getminedblocks&address=0xA0766B65A4f7B1da79a1AF79aC695456eFa28644'
```
| **Key** 	| **Value** 	| **Description** 	|
|---	|---	|---	|
| address  	| (required) 	| The Ethereum address to look up related nft transfers. 	|
| startblock 	| (default 0) 	| The beginning of the block range to inspect. 	|
| endblock 	| (default 99999999) 	| The end of the block range to inspect. 	|
| offset  	| (default 10000) 	| The maximum number of records to be returned. 	|
| page  	| (default 1) 	| The page number (assuming each page has a size of offset) 	|
| sort 	| (default desc) 	| Whether records should be sorted ascending (asc - earliest records first) or descending (desc - oldest records first). 	|

### Block Countdown

Get the number of remaining blocks and the estimated remaining time in
seconds until a particular block is mined.

```bash
    curl 'https://api.securerpc.com/eth/api?module=block&action=getblockcountdown&blockno=13000000'
```

-   `blockno` (required): The block to countdown to

### Block Number By Time

```bash
    curl 'https://api.securerpc.com/eth/api?module=block&action=getblocknobytime&timestamp=1600000000&closest=before'
```

-   `timestamp` (required): The unix timestamp (in seconds) of the target block
-   `closest` (default `before`): Whether to get the closest block before or the closest block after the specified time.

### Token Info


```bash
    'https://api.securerpc.com/eth/api?module=token&action=tokeninfo&contractaddress=0xd084944d3c05cd115c09d072b9f44ba3e0e45921'
```

-   `contractraddress` (required): The contract address to get token info about.
