# Intermittent MetaMask Connection Failure

This repository demonstrates a common issue in dapps where the connection to MetaMask is not consistently detected, even when the user is logged in. The provided code exhibits this problem and offers a solution.

## Problem

The `checkIfWalletIsConnected` function sometimes fails to detect a connected MetaMask wallet.  This is because it relies on the `ethereum.selectedAddress` property, which might not be populated immediately after the user connects the wallet.