const { ethers } = require("ethers");

const provider = new ethers.providers.Web3Provider(window.ethereum);
await provider.send("eth_requestAccounts", []);
const signer = provider.getSigner();

const sendETH = document.querySelector('#sendETH');
const addressTo = document.querySelector('#addressTo');
const ETHAmount = document.querySelector('#ETHAmount');

sendETH.addEventListener('submit', async(e) => {
  e.preventDefault();

  // Get the form values
  const addressToValue = addressTo.value;
  const ETHAmountValue = ETHAmount.value;
  // Calculate amount to transfer in wei
  const weiAmountValue = ethers.utils.parseEther(ETHAmountValue) //parseInt(ETHAmountValue) * 10**18

  // Form the transaction request for sending ETH
  const transactionRequest = {
    to: addressToValue.toString(),
    value: weiAmountValue.toString()
  }

  // Send the transaction and log the receipt
  const receipt = await signer.sendTransaction(transactionRequest);
  console.log(receipt);

})