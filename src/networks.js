// https://en.bitcoin.it/wiki/List_of_address_prefixes
// Dogecoin BIP32 is a proposed standard: https://bitcointalk.org/index.php?topic=409731

module.exports = {
  tuxcoin: {
    messagePrefix: '\x19Tuxcoin Signed Message:\n',
    bech32: 'tux',
    bip32: {
      public: 0x0488ADE4,
      private: 0x0488B21E
    },
    pubKeyHash: 0x41,
    scriptHash: 0x40,
    wif: 0xc1
  },
  regtest: {
    messagePrefix: '\x19Tuxcoin Signed Message:\n',
    bech32: 'rtux',
    bip32: {
      public: 0x043587cf,
      private: 0x04358394
    },
    pubKeyHash: 0x6f,
    scriptHash: 0x3a,
    wif: 0xc1
  },
  testnet: {
    messagePrefix: '\x19Tuxcoin Signed Message:\n',
    bech32: 'ttux',
    bip32: {
      public: 0x043587CF,
      private: 0x04358394
    },
    pubKeyHash: 0x6f,
    scriptHash: 0x3a,
    wif: 0xef
  }
}
