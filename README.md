# stargaze 

<p align="center" width="100%">
    <img height="90" src="https://user-images.githubusercontent.com/545047/184694732-f4a3d397-14fb-415a-9562-a532f510f812.png" />
</p>

<p align="center" width="100%">
   <a href="https://github.com/cosmology-tech/stargazejs/blob/main/LICENSE"><img height="20" src="https://img.shields.io/badge/license-MIT-blue.svg"></a>
</p>

Typescript libraries for the Stargaze ecosystem.

## Packages

#### [stargazejs](packages/passagejs)

TS library with Cosmos SDK and Stargaze smart contracts.

#### [@stargaze-zone/contracts](packages/contracts)

TS library with Stargaze smart contracts.

#### [@stargaze-zone/chain](packages/chain)

Chain Registry info for Stargaze, including asset lists.

## Developing

Checkout the repository and bootstrap the yarn workspace:

```sh
# Clone the repo.
git clone https://github.com/cosmology-tech/stargazejs
yarn
yarn bootstrap
```


And then get all submodules:

```
git submodule update --init
```

### Building

```sh
yarn build
```
### Publishing

```
lerna publish
# lerna publish minor
# lerna publish major
```
## Credits

🛠 Built by Cosmology — if you like our tools, please consider delegating to [our validator ⚛️](https://cosmology.zone/validator)

## Related

Checkout these related projects:

* [@cosmology/telescope](https://github.com/cosmology-tech/telescope) a "babel for the Cosmos", Telescope is a TypeScript Transpiler for Cosmos Protobufs.
* [@cosmwasm/ts-codegen](https://github.com/CosmWasm/ts-codegen) for generated CosmWasm contract Typescript classes
* [chain-registry](https://github.com/cosmology-tech/chain-registry) an npm module for the official Cosmos chain-registry.
* [cosmos-kit](https://github.com/cosmology-tech/cosmos-kit) A wallet connector for the Cosmos ⚛️
* [create-cosmos-app](https://github.com/cosmology-tech/create-cosmos-app) set up a modern Cosmos app by running one command.
* [starship](https://github.com/cosmology-tech/starship) a k8s-based unified development environment for Cosmos Ecosystem

## Disclaimer

AS DESCRIBED IN THE LICENSES, THE SOFTWARE IS PROVIDED “AS IS”, AT YOUR OWN RISK, AND WITHOUT WARRANTIES OF ANY KIND.

No developer or entity involved in creating this software will be liable for any claims or damages whatsoever associated with your use, inability to use, or your interaction with other users of the code, including any direct, indirect, incidental, special, exemplary, punitive or consequential damages, or loss of profits, cryptocurrencies, tokens, or anything else of value.
