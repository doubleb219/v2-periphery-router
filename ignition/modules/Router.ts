import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("uniswapV2Router02", (m) => {
    const factory = "0x31d76cc8196704e48098C62DCc92dA0f965c1626"
    const ws = "0x91000870799f537E16cBa085bbf5e14139C3D630"
    const uniswapV2Router02 = m.contract("uniswapV2Router02",
        [factory, ws]);

    // m.call(UniswapV2ERC20, "_mint", [10000]);

    return { uniswapV2Router02 };
});