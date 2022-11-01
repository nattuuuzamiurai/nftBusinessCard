## React

ローカルでのサイトの立ち上げ

```
npm run start
```

## hardhat

ローカル node の立ち上げ

```
 npx hardhat node
```

その他コマンド

```
 npx hardhat clean
 npx hardhat compile
```

# deploy

```
npx hardhat run scripts/deployNFT.js --network localhost
```

# verify

```
npx hardhat verify --network {network} {contractAddress} {args}
```

example
deploy 時の引数が name, symbol, uri の 3 つの場合

```
npx hardhat verify --network {network} {contractAddress} {"name" "symbol" "uri"}
```
