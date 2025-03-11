const hre = require("hardhat");

async function main() {
    const factory = "0x5BA17Ed538E5CcbA111A93D4253E4A8D24f47DC7";
    const weth = "0x309C92261178fA0CF748A855e90Ae73FDb79EBc7";

    const Router = await hre.ethers.getContractFactory("UniswapV2Router02");
    const router = await Router.deploy(factory, weth);

    console.log("Router deployed at:", router.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
})