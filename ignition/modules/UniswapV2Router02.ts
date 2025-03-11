import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("uniswapV2Router02", (m) => {
    const uniswapV2Router02 = m.contract("uniswapV2Router02", ["0x5BA17Ed538E5CcbA111A93D4253E4A8D24f47DC7", "0x309C92261178fA0CF748A855e90Ae73FDb79EBc7"]);

    // m.call(UniswapV2ERC20, "_mint", [10000]);

    return { uniswapV2Router02 };
});