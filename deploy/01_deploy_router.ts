import { DeployFunction } from "hardhat-deploy/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";

const deployRouter: DeployFunction = async function (hre) {
    const { deployments, getNamedAccounts } = hre;
    const { deployer } = await getNamedAccounts();

    const factory = "0x5BA17Ed538E5CcbA111A93D4253E4A8D24f47DC7";
    const weth = "0x309C92261178fA0CF748A855e90Ae73FDb79EBc7";

    console.log(`Deploying UniswapV2Router02 with factory: ${factory} and WETH: ${weth}`);

    const router = await deployments.deploy("UniswapV2Router02", {
        from: deployer,
        args: [factory, weth],
        log: true,
        gasLimit: 8000000,
    });

    console.log(`UniswapV2Router02 deployed at: ${router.address}`);
};

deployRouter.tags = ["UniswapV2Router"];
export default deployRouter;