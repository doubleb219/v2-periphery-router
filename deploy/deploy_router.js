const hre = require("hardhat");

async function main() {
    const factory = "0x31d76cc8196704e48098C62DCc92dA0f965c1626";
    const weth = "0x91000870799f537E16cBa085bbf5e14139C3D630";

    const Router = await hre.ethers.getContractFactory("UniswapV2Router02");
    const router = await Router.deploy(factory, weth);

    // console.log("Router deployed at:", router.address);
    // await new Promise(resolve => setTimeout(resolve, 30000));
    await hre.run("verify:verify", {
        address: router.address,
        constructorArguments: [factory, weth]
    });
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
})