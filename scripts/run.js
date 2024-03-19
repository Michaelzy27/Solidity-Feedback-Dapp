const main = async () => {
    const helloContractFactory = await hre.ethers.getContractFactory("HelloWorld");
    const helloContract = await helloContractFactory.deploy();
    //await helloContract.deployed();

    const message = await helloContract.getMessage();
    console.log(message);

    await helloContract.giveFeedback("myy");

    const feedbacks = await helloContract.getFeedbacks()
    console.log(feedbacks);



};

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