function checkIfWalletIsConnected() {
  const { ethereum } = window;

  if (!ethereum) {
    console.log('Make sure you have metamask!');
    return;
  }

  ethereum.on('accountsChanged', (accounts) => {
    if (accounts.length > 0) {
      console.log('Wallet is connected:', accounts[0]);
      // Use accounts[0] for the connected address
    } else {
      console.log('Wallet is disconnected');
    }
  });

  // Check for existing account on initial load
  ethereum.request({ method: 'eth_accounts' }).then((accounts) => {
    if (accounts.length > 0) {
      console.log('Wallet is connected:', accounts[0]);
      // Use accounts[0] for the connected address
    } else {
      console.log('Wallet is not connected');
    }
  }).catch(console.error);
}