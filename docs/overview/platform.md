---
id: doc-intro
title: Manifold Finance
hide_title: false
hide_table_of_contents: false
sidebar_label: Overview
sidebar_position: 1
pagination_label: Manifold Finance Platform Overview
description: Platform Overview and Specification
keywords:
  - docs
  - overview
  - platform
  - usage
---

# Manifold Finance - Platform Overview

> Documentation for Integration Partners, Application Partners, End Users and Searchers

> [status page](https://status.manifoldfinance.com/)

> v2022.01.11 v2022.02.10

## Content summary

- [📚 Summary](#---summary)
- [✅ Overview](#--overview)
- [📖 Comparison](#comparison)
- [📐 Sushi Relay API Reference](#---sushi-relay-api-reference)
- [🧰 Specification](#---specification)
- [📐 Technical Integration / SDK](#---technical-integration---sdk)
  - [New Features for SDK](#new-features-for-sdk)

## 📚 Summary

> OpenMEV is a (permission-based) RPC network layer connected to MEV-enabled block producer pools. By having a private
> connection we can enable protocols and dapps a consistent protection against MEV (maximal extracted value). MEV is a
> category of transactions that include 'sandwich trades, front running, back running, arbitrage, etc'. Additional
> services can be built and offered, such as 'Pay for Order Flow', 'Account Abstraction (Buterin, EIP 4337), Carrier
> Transactions, etc. By privatizing user transaction flow we can enable the recapture of arbitrage/slippage back to the
> originating user trade.

## ✅ Overview

**[docs.openmev.org](https://docs.openmev.org)**

## Comparison

[see docs.openmev.org/compare](https://docs.openmev.org/compare)

> Note, we are in the process of overhauling our documentation process - please only refer to docs.openmev.org,
> docs.sushirelay.com or this repo

## SushiGuard: OpenMEV for SushiSwap

> 🔍 Note SushiRelay is the backend infrastructure component, while SushiGuard is the forward facing name of the service
> to end users

[see the available RPC methods](https://docs.sushirelay.com)

### app.sushi.com](https://app.sushi.com)

OpenMEV/Sushi Relay is live on app.sushi.com - to see the frontend integration you can see this feature branch
[integration branch on the sushiswap frontend](https://github.com/manifoldfinance/sushiswap-interface/tree/feat/openmev-relay)

## 📐 Sushi Relay API Reference

> v0.0.1 RPC and API Overview

## Response RPC Methods

These are methods we support for which we return static responses to ensure compliance

```
eth_chainId
eth_protocolVersion
eth_mining
eth_hashrate
eth_accounts
eth_syncing
eth_coinbase
net_listening
net_peerCount
net_version
web3_clientVersion
```

## Supported RPC

These are all methods we expose and proxy to our internal eth clients

```
eth_blockNumber
eth_call
eth_estimateGas
eth_gasPrice
eth_getBalance
eth_getBlockByHash
eth_getBlockByNumber
eth_getBlockTransactionCountByHash
eth_getBlockTransactionCountByNumber
eth_getCode
eth_getStorageAt
eth_getTransactionByBlockHashAndIndex
eth_getTransactionByBlockNumberAndIndex
eth_getTransactionByHash
eth_getTransactionCount
eth_getTransactionReceipt
eth_getUncleByBlockHashAndIndex
eth_getUncleByBlockNumberAndIndex
eth_getUncleCountByBlockHash
eth_getUncleCountByBlockNumber
eth_sign
eth_signTypedData
eth_sendRawTransaction
```

### OpenMEV

To send a transaction that you would want a rebate on, you use this custom rpc methods:

```
manifold_sendTransaction
```

#### RPC Endpoints

##### HTTPS

https://api.sushirelay.com/v1

### WebSocket

#### Staging

```
wss://api-stag.sushirelay.com/v1
```

#### Production

```
wss://api.sushirelay.com/v1
```

#### Example: Web socket usage

```sh
$ wscat -c wss://api.sushirelay.com/v1
```

```sh
< {"method":"manifold_motd","jsonrpc":"2.0","params":{"result":{"notice":"THIS IS A NOTICE OF MONITORING OF MANIFOLD FINANCE, INC NETWORK INFORMATION SYSTEMS  By logging into Manifold Finance, Inc computer systems, you acknowledge and consent to monitoring of this system.  Network Policy <https://docs.manifoldfinance.com/network/policy>  By using this network, you certify that you have read, understand, and agree to abide by the Rules of Behavior for Manifold Finance Network Platform."}}}
>
```

## 🧰 Specification

> Engineering Goals and Specification

### Design goals

- **Pre-trade privacy** Pre-trade privacy implies transactions only become publicly known after they have been included
  in a block. Note, this type of privacy does not exclude privileged actors such as transaction aggregators / gateways /
  miners.

- **Failed trade privacy**

Failed trade privacy implies loosing bids are never included in a block, thus never exposed to the public. Failed trade
privacy is tightly coupled to extraction efficiency.

- **Complete privacy**

Complete privacy implies there are no privileged actors such as transaction aggregators / gateways / miners who can
observe incoming transactions.

- **Finality**

Finality implies it is infeasible for MEV extraction to be reversed once included in a block. This would protect against
time-bandit chain re-org attacks.

### Architecture Goals

#### Redundant resources (trade cost)

Having redundant resources to avoid single points of failure. Every component can fail, but the system is robust enough
that an individual outage can be tolerated.

#### Degraded results (trade quality)

For some services, it might be acceptable to trade quality for reliability. Instead of expecting every transaction to
succeed, it can be tolerable for a business to see some requests fail.

#### Retry transient failures (trade latency)

If a response isn't returned to the expected time, the system sends the same request again.

## 📐 Technical Integration / SDK

1. [OpenMEV Ethersjs Provider](https://github.com/manifoldfinance/openmev-provider)

Expanding Integration to have an unstyled widget component and react hook.

### New Features for SDK

- Populates back to user errors from all rpc endpoints
- Populates back to user an exception if rejected for malformed/defects
- Users can query the state of their transactions
- Users can query their 'status': pending rebates, total rebates,

- Path Optimization
- Aggregation layer optional
