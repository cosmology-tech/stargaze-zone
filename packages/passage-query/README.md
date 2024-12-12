# stargaze-query

<p align="center" width="100%">
    <img height="90" src="https://user-images.githubusercontent.com/545047/184694732-f4a3d397-14fb-415a-9562-a532f510f812.png" />
</p>

<p align="center" width="100%">
   <a href="https://github.com/cosmology-tech/stargazejs/blob/main/LICENSE"><img height="20" src="https://img.shields.io/badge/license-MIT-blue.svg"></a>
   <a href="https://www.npmjs.com/package/stargaze-query"><img height="20" src="https://img.shields.io/github/package-json/v/cosmology-tech/stargazejs?filename=packages%2Fstargaze-query%2Fpackage.json"></a>
</p>


TS library with Cosmos SDK and Stargaze smart contracts, with react-query hooks.

```
npm install stargaze-query
```

### Cosmos SDK clients

```js
import {stargaze} from 'packages/passage-query';

const main = async () => {
    const {createLCDClient} = stargaze.ClientFactory;
    const client = await createLCDClient({restEndpoint: REST_ENDPOINT});

    // now you can query the modules
    const balance = await client.cosmos.bank.v1beta1
        .allBalances({address: 'stars1addresshere'});
};
```

### Stargaze contracts

#### clients

All contracts are scoped under the `contracts` object:

```js
import {contracts} from 'packages/passage-query';

const {
    SG721Base,
    VendingFactory,
    VendingMinter,
    Whitelist
} = contracts;
```

Then each contract will have clients, for example for `Whitelist`:

```ts
const {
    WhitelistClient,
    WhitelistMessageComposer,
    WhitelistQueryClient
} = Whitelist;
```

#### Queries 

```js
const queryClient = new WhitelistQueryClient(wasmClient, contractAddress);

const hasStarted = await queryClient.hasStarted()
const members = await queryClient.members({limit: 10})
```
#### Mutations

```js
const client = new WhitelistClient(signingWasmClient, sender, contractAddress);

await client.addMembers({
    toAdd: ['name1', 'name2']
})
```

### CosmWasm Messages

```js
import {cosmwasm} from "packages/passage-query";

const {
    clearAdmin,
    executeContract,
    instantiateContract,
    migrateContract,
    storeCode,
    updateAdmin
} = cosmwasm.wasm.v1.MessageComposer.withTypeUrl;
```

### IBC Messages

```js
import {ibc} from 'packages/passage-query';

const {
    transfer
} = ibc.applications.transfer.v1.MessageComposer.withTypeUrl
```

### Cosmos Messages

```js
import {cosmos} from 'packages/passage-query';

const {
    fundCommunityPool,
    setWithdrawAddress,
    withdrawDelegatorReward,
    withdrawValidatorCommission
} = cosmos.distribution.v1beta1.MessageComposer.fromPartial;

const {
    multiSend,
    send
} = cosmos.bank.v1beta1.MessageComposer.fromPartial;

const {
    beginRedelegate,
    createValidator,
    delegate,
    editValidator,
    undelegate
} = cosmos.staking.v1beta1.MessageComposer.fromPartial;

const {
    deposit,
    submitProposal,
    vote,
    voteWeighted
} = cosmos.gov.v1beta1.MessageComposer.fromPartial;
```

## Connecting with Wallets and Signing Messages

⚡️ For web interfaces, we recommend using [cosmos-kit](https://github.com/cosmology-tech/cosmos-kit). Continue below to see how to manually construct signers and clients.
### Initializing the Stargate Client

Use `getSigningPublicawesomeClient` to get your `SigningStargateClient`, with the proto/amino messages full-loaded. No need to manually add amino types, just require and initialize the client:

```js
import {getSigningPublicawesomeClient} from 'packages/passage-query';

const stargateClient = await getSigningPublicawesomeClient({
    rpcEndpoint,
    signer // OfflineSigner
});
```
## Creating Signers

To broadcast messages, you can create signers with a variety of options:

* [cosmos-kit](https://github.com/cosmology-tech/cosmos-kit/tree/main/packages/react#signing-clients) (recommended)
* [keplr](https://docs.keplr.app/api/cosmjs.html)
* [cosmjs](https://gist.github.com/webmaster128/8444d42a7eceeda2544c8a59fbd7e1d9)
### Cosmos Kit

We recommend using [cosmos-kit](https://github.com/cosmology-tech/cosmos-kit/tree/main/packages/react#signing-clients) for creating signers that work with Keplr and other wallets.

### Amino Signer

Likely you'll want to use the Amino, so unless you need proto, you should use this one:

```js
import { getOfflineSignerAmino as getOfflineSigner } from 'cosmjs-utils';
```
### Proto Signer

```js
import { getOfflineSignerProto as getOfflineSigner } from 'cosmjs-utils';
```

WARNING: NOT RECOMMENDED TO USE PLAIN-TEXT MNEMONICS. Please take care of your security and use best practices such as AES encryption and/or methods from 12factor applications.

```js
import { chains } from 'chain-registry';

const mnemonic =
  'unfold client turtle either pilot stock floor glow toward bullet car science';
  const chain = chains.find(({ chain_name }) => chain_name === 'stargaze');
  const signer = await getOfflineSigner({
    mnemonic,
    chain
  });
```
### Broadcasting messages

Now that you have your `stargateClient`, you can broadcast messages:

```js
const { send } = cosmos.bank.v1beta1.MessageComposer.withTypeUrl;

const msg = send({
    amount: [
    {
        denom: 'ustars',
        amount: '1000'
    }
    ],
    toAddress: address,
    fromAddress: address
});

const fee: StdFee = {
    amount: [
    {
        denom: 'ustars',
        amount: '864'
    }
    ],
    gas: '86364'
};
const response = await stargateClient.signAndBroadcast(address, [msg], fee);
```

### Advanced Usage

If you want to manually construct a stargate client

```js
import {OfflineSigner, GeneratedType, Registry} from "@cosmjs/proto-signing";
import {AminoTypes, SigningStargateClient} from "@cosmjs/stargate";

import {
    cosmosAminoConverters,
    cosmosProtoRegistry,
    cosmwasmAminoConverters,
    cosmwasmProtoRegistry,
    ibcProtoRegistry,
    ibcAminoConverters,
    publicawesomeAminoConverters,
    publicawesomeProtoRegistry
} from 'packages/passage-query';

const signer: OfflineSigner = /* create your signer (see above)  */
const rpcEndpint = 'https://rpc.cosmos.directory/stargaze'; // or another URL

const protoRegistry: ReadonlyArray<[string, GeneratedType]> = [
    ...cosmosProtoRegistry,
    ...publicawesomeProtoRegistry,
    ...cosmwasmProtoRegistry,
    ...ibcProtoRegistry
];

const aminoConverters = {
    ...cosmosAminoConverters,
    ...publicawesomeAminoConverters,
    ...cosmwasmAminoConverters,
    ...ibcAminoConverters
};

const registry = new Registry(protoRegistry);
const aminoTypes = new AminoTypes(aminoConverters);

const stargateClient = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry,
    aminoTypes
});
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
