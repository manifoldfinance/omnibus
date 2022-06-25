# Vm









## Methods

### accesses

```solidity
function accesses(address) external nonpayable returns (bytes32[] reads, bytes32[] writes)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| reads | bytes32[] | undefined |
| writes | bytes32[] | undefined |

### addr

```solidity
function addr(uint256) external nonpayable returns (address)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### assume

```solidity
function assume(bool) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### broadcast

```solidity
function broadcast() external nonpayable
```






### broadcast

```solidity
function broadcast(address) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### chainId

```solidity
function chainId(uint256) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### clearMockedCalls

```solidity
function clearMockedCalls() external nonpayable
```






### coinbase

```solidity
function coinbase(address) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### deal

```solidity
function deal(address, uint256) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |
| _1 | uint256 | undefined |

### envAddress

```solidity
function envAddress(string) external nonpayable returns (address)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | string | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### envAddress

```solidity
function envAddress(string, string) external nonpayable returns (address[])
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | string | undefined |
| _1 | string | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address[] | undefined |

### envBool

```solidity
function envBool(string) external nonpayable returns (bool)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | string | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### envBool

```solidity
function envBool(string, string) external nonpayable returns (bool[])
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | string | undefined |
| _1 | string | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool[] | undefined |

### envBytes

```solidity
function envBytes(string) external nonpayable returns (bytes)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | string | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bytes | undefined |

### envBytes

```solidity
function envBytes(string, string) external nonpayable returns (bytes[])
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | string | undefined |
| _1 | string | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bytes[] | undefined |

### envBytes32

```solidity
function envBytes32(string, string) external nonpayable returns (bytes32[])
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | string | undefined |
| _1 | string | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bytes32[] | undefined |

### envBytes32

```solidity
function envBytes32(string) external nonpayable returns (bytes32)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | string | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bytes32 | undefined |

### envInt

```solidity
function envInt(string, string) external nonpayable returns (int256[])
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | string | undefined |
| _1 | string | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | int256[] | undefined |

### envInt

```solidity
function envInt(string) external nonpayable returns (int256)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | string | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | int256 | undefined |

### envString

```solidity
function envString(string, string) external nonpayable returns (string[])
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | string | undefined |
| _1 | string | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | string[] | undefined |

### envString

```solidity
function envString(string) external nonpayable returns (string)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | string | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | string | undefined |

### envUint

```solidity
function envUint(string) external nonpayable returns (uint256)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | string | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### envUint

```solidity
function envUint(string, string) external nonpayable returns (uint256[])
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | string | undefined |
| _1 | string | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256[] | undefined |

### etch

```solidity
function etch(address, bytes) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |
| _1 | bytes | undefined |

### expectCall

```solidity
function expectCall(address, bytes) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |
| _1 | bytes | undefined |

### expectCall

```solidity
function expectCall(address, uint256, bytes) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |
| _1 | uint256 | undefined |
| _2 | bytes | undefined |

### expectEmit

```solidity
function expectEmit(bool, bool, bool, bool) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |
| _1 | bool | undefined |
| _2 | bool | undefined |
| _3 | bool | undefined |

### expectEmit

```solidity
function expectEmit(bool, bool, bool, bool, address) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |
| _1 | bool | undefined |
| _2 | bool | undefined |
| _3 | bool | undefined |
| _4 | address | undefined |

### expectRevert

```solidity
function expectRevert(bytes4) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | bytes4 | undefined |

### expectRevert

```solidity
function expectRevert(bytes) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | bytes | undefined |

### expectRevert

```solidity
function expectRevert() external nonpayable
```






### fee

```solidity
function fee(uint256) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### ffi

```solidity
function ffi(string[]) external nonpayable returns (bytes)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | string[] | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bytes | undefined |

### getCode

```solidity
function getCode(string) external nonpayable returns (bytes)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | string | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bytes | undefined |

### getNonce

```solidity
function getNonce(address) external nonpayable returns (uint64)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint64 | undefined |

### label

```solidity
function label(address, string) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |
| _1 | string | undefined |

### load

```solidity
function load(address, bytes32) external nonpayable returns (bytes32)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |
| _1 | bytes32 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bytes32 | undefined |

### mockCall

```solidity
function mockCall(address, uint256, bytes, bytes) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |
| _1 | uint256 | undefined |
| _2 | bytes | undefined |
| _3 | bytes | undefined |

### mockCall

```solidity
function mockCall(address, bytes, bytes) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |
| _1 | bytes | undefined |
| _2 | bytes | undefined |

### prank

```solidity
function prank(address, address) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |
| _1 | address | undefined |

### prank

```solidity
function prank(address) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### record

```solidity
function record() external nonpayable
```






### roll

```solidity
function roll(uint256) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### setEnv

```solidity
function setEnv(string, string) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | string | undefined |
| _1 | string | undefined |

### setNonce

```solidity
function setNonce(address, uint64) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |
| _1 | uint64 | undefined |

### sign

```solidity
function sign(uint256, bytes32) external nonpayable returns (uint8, bytes32, bytes32)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |
| _1 | bytes32 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint8 | undefined |
| _1 | bytes32 | undefined |
| _2 | bytes32 | undefined |

### startBroadcast

```solidity
function startBroadcast() external nonpayable
```






### startBroadcast

```solidity
function startBroadcast(address) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### startPrank

```solidity
function startPrank(address) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### startPrank

```solidity
function startPrank(address, address) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |
| _1 | address | undefined |

### stopBroadcast

```solidity
function stopBroadcast() external nonpayable
```






### stopPrank

```solidity
function stopPrank() external nonpayable
```






### store

```solidity
function store(address, bytes32, bytes32) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |
| _1 | bytes32 | undefined |
| _2 | bytes32 | undefined |

### warp

```solidity
function warp(uint256) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |




