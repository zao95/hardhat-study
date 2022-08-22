import { HardhatUserConfig } from 'hardhat/config'
import '@nomicfoundation/hardhat-toolbox'
import 'hardhat-gas-reporter'
import 'dotenv/config'

const config: HardhatUserConfig = {
    solidity: {
        version: '0.8.16',
        settings: {
            optimizer: {
                enabled: true,
                runs: 10,
            },
        },
    },
    gasReporter: {
        enabled: process.env.GAS_REPORT ? true : false,
    },
    defaultNetwork: process.env.DEFAULT_NETWORK || 'hardhat',
}

export default config
