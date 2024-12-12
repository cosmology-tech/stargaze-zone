import { join, resolve } from 'path';
import telescope from '@cosmology/telescope';

const protoDirs = [join(__dirname, '/../proto')];
const contractsDir = resolve(join(__dirname, '/../../../contracts/contracts/nft'));


const contracts = [
  {
    name: 'AuctionEnglish',
    dir: join(contractsDir, 'auction-english')
  },
  {
    name: 'MarketplaceLegacy',
    dir: join(contractsDir, 'marketplace-legacy')
  },
  {
    name: 'MarketplaceV2',
    dir: join(contractsDir, 'marketplace-v2')
  },
  {
    name: 'MinterMetadataOnChain',
    dir: join(contractsDir, 'minter-metadata-onchain')
  },
  {
    name: 'Minter',
    dir: join(contractsDir, 'nft-vault')
  },
  {
    name: 'PG721Legacy',
    dir: join(contractsDir, 'pg721-legacy')
  },
  {
    name: 'PG721Legacy',
    dir: join(contractsDir, 'pg721-legacy')
  },
  {
    name: 'PG721MetadataOnChain',
    dir: join(contractsDir, 'pg721-metadata-onchain')
  },
  {
    name: 'PG721',
    dir: join(contractsDir, 'pg721')
  },
  {
    name: 'RoyaltyGroup',
    dir: join(contractsDir, 'royalty-group')
  },
  {
    name: 'Whitelist',
    dir: join(contractsDir, 'whitelist')
  }
];


telescope({
  protoDirs,
  outPath: join(__dirname, '../src/codegen'),
  options: {
    env: 'v-next',
    interfaces: {
      enabled: true,
      useGlobalDecoderRegistry: true,
      useUnionTypes: true
    },
    prototypes: {
      excluded: {
        packages: [
          'cosmos.app.**',
          'cosmos.auth.**',
          'cosmos.autocli.**',
          'cosmos.base.kv.v1beta1',
          'cosmos.base.reflection.v1beta1',
          'cosmos.base.snapshots.v1beta1',
          'cosmos.base.store.v1beta1',
          'cosmos.base.tendermint.v1beta1',
          'cosmos.circuit.**',
          'cosmos.consensus.**',
          'cosmos.crisis.**',
          'cosmos.evidence.**',
          'cosmos.feegrant.**',
          'cosmos.genutil.**',
          'cosmos.group.**',
          'cosmos.mint.**',
          'cosmos.msg.**',
          'cosmos.nft.**',
          'cosmos.orm.**',
          'cosmos.params.**',
          'cosmos.query.**',
          'cosmos.reflection.**',
          'cosmos.slashing.**',
          'cosmos.staking.**',
          'cosmos.store.**',
          'cosmos.vesting.**',
          'google.api',
          'ibc.core.port.v1',
          'ibc.core.types.v1'
        ]
      },
      includePackageVar: false,
      addAminoTypeToObjects: true,
      addTypeUrlToObjects: true,
      addTypeUrlToDecoders: true,
      typingsFormat: {
        customTypes: {
          useCosmosSDKDec: true
        },
        num64: 'bigint',
        useDeepPartial: true,
        useExact: false,
        timestamp: 'date',
        duration: 'duration',
        autoFixUndefinedEnumDefault: true
      }
    },
    cosmwasm: {
      contracts,
      outPath: join(__dirname, '../src/codegen'),
      options: {
        bundle: {
          enabled: true,
          bundleFile: 'contracts.ts',
          scope: 'contracts'
        },
        types: {
          enabled: true
        },
        client: {
          enabled: true
        },
        messageComposer: {
          enabled: true
        }
      }
    },
    aminoEncoding: {
      enabled: true,
      omitEmptyTags: ['omitempty', 'dont_omitempty']
    },
    lcdClients: {
      enabled: true
    },
    rpcClients: {
      enabled: true,
      camelCase: true,
      useConnectComet: true
    }
  }
})
  .then(() => {
    console.log('✨ all done!');
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
