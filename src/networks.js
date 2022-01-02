// https://en.bitcoin.it/wiki/List_of_address_prefixes
// Dogecoin BIP32 is a proposed standard: https://bitcointalk.org/index.php?topic=409731
// https://github.com/GarlicoinOrg/Garlicoin/blob/master/src/chainparams.cpp

module.exports = {
  garlicoin: {
    messagePrefix: '\x19Garlicoin Signed Message:\n',//
    bech32: 'grlc',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4
    },
    pubKeyHash: 0x26,
    scriptHash: 0x32,
    wif: 0xb0
  },
  regtest: {
    messagePrefix: '\x19Garlicoin Signed Message:\n',
    bech32: 'rgrlc',
    bip32: {
      public: 0x043587cf,
      private: 0x04358394
    },
    pubKeyHash: 0x6f,
    scriptHash: 0x3a,
    wif: 0xef
  },
  testnet: {
    messagePrefix: '\x19Garlicoin Signed Message:\n',
    bech32: 'tgrlc',
    bip32: {
      public: 0x043587cf,
      private: 0x04358394
    },
    pubKeyHash: 0x6f,
    scriptHash: 0x3a,
    wif: 0xef
  }
}
