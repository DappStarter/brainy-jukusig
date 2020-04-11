require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give narrow fog table name release stick huge inflict enroll slot gentle'; 
let testAccounts = [
"0xf5fb3f762d8926edbf479bdf667b5fa63dcfc78dfceb6d5ea4ce6493c52ade51",
"0x3477455f60c7b6082a0d152eaee5caf2994e4d81cf685d93c529d924f4ce289d",
"0xc2fa16390ecfb7288e12bbce7f13c01315ec7fc6863f6171f087c14a0d7c56aa",
"0x7ec76c67941fc7590ceba92dfeb19394e25e0df6aec1d7e4a65dfc06fbd8e031",
"0xcaee8bad96abfccf3236dd1703dc11146100d0a475384aaccc60c3733ccf2527",
"0x2ddb8fa79b963ca0b18fb6299a8925dfcb1c359b98e289358fda39f94217fdab",
"0x7ab82598fbb023e6e8c576a61230553cba7c5c6113af8eb8226b88ef70f3283a",
"0x57af4a97d34205a63381bec1ca9751ddeefd67321c24a83bc9140ddd2aa6fa97",
"0x2532d7a145aad3da7b0c300e6ecbab7644831e482d4d3d3f47678a84a5961097",
"0xed8c36e98841ef8ac273742e5ed62e4a97141cf616e844368d2c4c667b18c011"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
