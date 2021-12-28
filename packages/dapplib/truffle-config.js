require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope clock bridge silver normal note museum uncle harvest clock bottom size'; 
let testAccounts = [
"0xcccc97fabca3b9b3f4672355c814db534ab01946f92493cad6086a223696e7c1",
"0x393f252b6371d27a94e43048e64bc5144b981f6080d78da8936b16739a539a05",
"0x40dc725af691ca5aa8f2b89e0f1c73c85c5089e708a213a0b1ae0913d3f0c69c",
"0x530035e427c6048fb3922593586211580fac2a079b073223c2eae48665d53384",
"0xe46cfb2f5062401f943b93c4ea8f9f7f619a566c99cd92c67c92347e10381ebf",
"0x3f18f50fb6146e6217e509ddecf82d27c5a718fa3d8e6c5cc29af84433acd3fc",
"0x6962d342b49be832c1b97f484e6112412454ab0d2af3dd3d1fd8a5626148cb24",
"0x54aaeda02cc40bc0a50e68f72794a5b81818ce866e1772b5dacf7f2b2324b7cc",
"0xd131a242741eb206c1ab15e4d8c3a29011ba217526298d4e1fc144959a747386",
"0x8fe3cf12eaf103786af97021b45cb857d8e99e1b2df86d814165cdb58b27713e"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

