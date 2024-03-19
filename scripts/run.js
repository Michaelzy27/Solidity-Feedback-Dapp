const main = async () => {
    const helloContractFactory = await hre.ethers.getContractFactory("HelloWorld");
    const helloContract = await helloContractFactory.deploy();
    //await helloContract.deployed();

    const message = await helloContract.getMessage();
    console.log(message);

    await helloContract.addFeedback("myy");

    const feedbacks = await helloContract.getFeedbacks()
    console.log(feedbacks);

    





};

const addFeedbackButton = document.getElementById("add");
addFeedbackButton.addEventListener("click", () => {addFeedback();});  //when submit button in html is clicked

function addFeedback() {
    const newFeedback = document.getElementById("thefeedback").value;      //gets the feedback from the text field
    //helloContract.addFeedback(newFeedback);
    document.getElementById("thefeedback").value = "hhh";
}

const connectWalletButton = document.getElementById("connect");
  connectWalletButton.addEventListener("click", () => {
    connectWallet();
  });

function connectWallet() {
    if (typeof window.ethereum !== "undefined") {
      ethereum
        .request({ method: "eth_requestAccounts" })
        .then((accounts) => {
          currentAccount = accounts[0];
          document.getElementById("account").textContent = currentAccount;
          initializeContract();
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      alert("Please install MetaMask to use this DApp.");
    }
  }

  



const runMain = async () => {
    try {
        await main();
        process.exit(0);   // exit node process without error
    } catch (error) {
        console.log(error);
        process.exit(1);   // exit node process while indicating 'Uncaught Fatal Exception' error
    }
}

runMain();