const hre = require("hardhat");

async function main() {
    const factory = "0x31d76cc8196704e48098C62DCc92dA0f965c1626";
    const weth = "0xD0716d2d12AD8753E1E007B66A62b66Ce58a9783";

    // const Router = await hre.ethers.getContractFactory("UniswapV2Router02");
    // const router = await Router.deploy(factory, weth);

    // console.log("Router deployed at:", router.address);
    // await new Promise(resolve => setTimeout(resolve, 30000));
    await hre.run("verify:verify", {
        address: "0x7dDb023cdaFeeCd594b4D9174f60AB0811BA3491",
        constructorArguments: [factory, weth]
    });
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
})