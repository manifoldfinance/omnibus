---
description: 
---

# ILendingPool.sol





## Methods

### flashLoan



```solidity title="Solidity"
function flashLoan(address receiverAddress, address[] assets, uint256[] amounts, uint256[] modes, address onBehalfOf, bytes params, uint16 referralCode) external nonpayable
```


:::note Details
Allows smartcontracts to access the liquidity of the pool within one transaction, as long as the amount taken plus a fee is returned. IMPORTANT There are security concerns for developers of flashloan receiver contracts that must be kept into consideration. For further details please visit https://developers.aave.com
:::


#### Parameters

| Name | Type | Description |
|---|---|---|
| receiverAddress | address | The address of the contract receiving the funds, implementing the IFlashLoanReceiver interface |
| assets | address[] | The addresses of the assets being flash-borrowed |
| amounts | uint256[] | The amounts amounts being flash-borrowed |
| modes | uint256[] | Types of the debt to open if the flash loan is not returned:   0 -&gt; Don&#39;t open any debt, just revert if funds can&#39;t be transferred from the receiver   1 -&gt; Open debt at stable rate for the value of the amount flash-borrowed to the `onBehalfOf` address   2 -&gt; Open debt at variable rate for the value of the amount flash-borrowed to the `onBehalfOf` address |
| onBehalfOf | address | The address  that will receive the debt in the case of using on `modes` 1 or 2 |
| params | bytes | Variadic packed params to pass to the receiver as extra information |
| referralCode | uint16 | Code used to register the integrator originating the operation, for potential rewards.   0 if the action is executed directly by the user, without any middle-man* |

### getReservesList



```solidity title="Solidity"
function getReservesList() external view returns (address[])
```





#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address[] | undefined |



## Events

### FlashLoan



```solidity title="Solidity"
event FlashLoan(address indexed target, address indexed initiator, address indexed asset, uint256 amount, uint256 premium, uint16 referralCode)
```


:::note Details
Emitted on flashLoan()
:::


#### Parameters

| Name | Type | Description |
|---|---|---|
| target `indexed` | address | The address of the flash loan receiver contract |
| initiator `indexed` | address | The address initiating the flash loan |
| asset `indexed` | address | The address of the asset being flash borrowed |
| amount  | uint256 | The amount flash borrowed |
| premium  | uint256 | The fee flash borrowed |
| referralCode  | uint16 | The referral code used* |



