[中文简介](./README-CN.md)
# EOSPark Cooperation
> Present your brand, DApp, and products to more users through the EOSPark block explorer.

## Why ？
EOSPark hopes to build a cooperative relationship with other EOS teams to promote EOS quality brands, DApps and products and to promote the development of the EOS community.

## How to present ？
EOSPark provide multiple places for you to display your brands, DApps, and products. All the details are shown below.

### DApps page
You can show your DApp in the DApps page. [https://eospark.com/dapps](https://eospark.com/dapps)

### Partners page
You can show your brands, Dapps and products in the partners page. [https://eospark.com/partners](https://eospark.com/partners)

### Home Partners
You can show your brands in the home partner place, which is located in the bottom of the official page. [https://eospark.com](https://eospark.com)

## Referrer
If your brands, Dapps, or products have a referral bonus, you can add our EOS account **supereospark** to the link, for example:
```
https://www.eospark.com/?ref=supereospark
```

## Contribution
We provide the following national language support, please be sure to introduce your brands, DApps, and products in English.

| Language           | Abbreviation | Default |
| :--------:         | :-----:      | :----:  |
| English            | en-US        |    ✅   |
| Simplified Chinese | zh-Hans-CN   |         |
| Traditional Chinese| zh-Hant-HK   |         |
| Russian            | ru           |         |
| Japanese           | ja           |         |
| French             | fr           |         |
| Korean             | ko           |         |
| German             | de           |         |
| Italian            | it           |         |
| Turkish            | tr           |         |
| Polish             | pt           |         |
| Vietnamese         | vn           |         |
| Spanish            | es           |         |
| Dutch              | nl           |         |

**1. Clone**
```
git clone https://github.com/BlockABC/eospark-cooperation
cd eospark-cooperation
```

**2. Add DApp to the Dapps page. Open the `dapps/` folder, edit the `index.json` file, and add your DApp information, such as:**

```json
{
    "gaTag": "eos_park", // for Google Analytics statistics
    "categoriy": "tool", // Dapps categories, Optional: game, entertainment, exchange, tool
    "link": "https://www.eospark.com/?ref=supereospark", // link
    "logo": "eospark_logo.png", // DApp logo, pictures placed under the 'dapps/img/' folder, the size of 48px * 48px, support PNG
    "preview": "eospark.png", // DApp preview, pictures placed under the 'dapps/img/' folder, the size of 548px * 365px, support PNG
    "title": "EOSPark", // DApp name
    "description": "EOSPark -  Not Only EOS Explorer.", // introduction to english
    "zh-Hans-CN": { // chinese simplified information
        "description": "EOSPark -  不仅仅是区块浏览器." // introduction to chinese
        ...
    }
}
```

**3. Add Partner to the Home-partners page. Open the `home-partner/` folder, edit the `index.json` file, and add your partner information, such as:**

```json
{
    "gaTag": "eospark", // for Google Analytics statistics
    "link": "https://www.eospark.com/?ref=supereospark", // link
    "logo": "eospark.png", // brands logo, pictures placed under the 'home-partners/img/' folder, the size of 372px * 120px, support PNG
    "zh-Hans-CN": { // chinese simplified information
        "url": "https://www.eospark.com/cn/",
        "logo": "eospark_cn.png"
        ...
    }
}
```

**4. Add Partner to Partners page. The Partners page can be added to open the `partners/` folder, edit the `index.json` file, and add your Partner information, such as:**

Partners page can only add wallet, exchange, informationPlatforms, dapp, game, tool, before adding Partner first select the category to which you belong.

```json
{
    "gaTag": "eospark", // for Google Analytics statistics
    "link": "https://www.eospark.com/?ref=supereospark", // link
    "logo": "eospark_logo.png", // brands, DApp, products logo, pictures placed under the 'partners/img/' folder, the size of 148px * 148px, support PNG.
    "title": "EOSPark", // title
    "description": "EOSPark -  Not Only EOS Explorer.", // introduction to english
    "zh-Hans-CN": { // chinese simplified information
        "description": "EOSPark -  不仅仅是区块浏览器." // introduction to chinese
        ...
    }
}
```

**5. Check**
Use the following to check if the command is added successfully

```
npm run dev
```

You can preview it below.

**6. Compile**

```
npm run build
```

**7. Submit PR**


## Contact
For more information, please join us on telegram: [EOSPark Telegram](https://t.me/eospark)

## Preview
It can be previewed here after compilation, and only a brief introduction to English is shown here.

### DApps
<!-- dapp_list_start -->
| Logo       | Title   | Description | Preview | Link   | categoriy | Google Analytics Tag |
| :--------: | :-----: | :----:      | :----:  | :----: | :----:    | :----:               |
| <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/dapps/img/dice_logo.png" /> | DICE | The largest social gaming platform on EOSIO. | <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/dapps/img/dice.png" /> | https://dice.one/?ref=supereospark | game | dice | 
| <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/dapps/img/luckyminer_logo.png" /> | Lucky Miner | The yield on the diamond is 50 times earnings | <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/dapps/img/luckyminer.png" /> | https://luckyminer.one/luckyeosminer/multeos/index?ref=eospark.com | game | luckyminer | 
| <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/dapps/img/eosjoy_logo.png" /> | EOSJoy | The World's First Blockchain Platform for Leisure and Competitive Games. | <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/dapps/img/eosjoy.png" /> | https://www.eosjoy.io/?user=supereospark&utm_source=eospark | game | eos_joy | 
| <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/dapps/img/switcheo.png" /> | Switcheo Network | The simplest way to buy and sell cryptocurrencies securely. | <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/dapps/img/switcheo_preview.png" /> | https://switcheo.exchange | exchange | switcheo_network | 
| <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/dapps/img/csm_logo.png" /> | Crypto Sword & Magic | Crypto Sword & Magic -  First EOS Blockbuster RPG Game | <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/dapps/img/csm.png" /> | https://cryptoswordandmagic.com/?utm_source=eospark | game | crypto_sword_magic | 
| <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/dapps/img/endless_game_logo.png" /> | Endless Game | The First Cross-Chain Profit-Sharing Gaming Platform. | <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/dapps/img/endless_game.png" /> | https://endless.game/dice?invite=supereospark&channel=eospark | game | endless_game | 
| <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/dapps/img/trust_dice_logo.png" /> | Trust Dice | Play to Earn at TXT Gaming Platform. | <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/dapps/img/trust_dice.png" /> | https://trustdice.win/?ref=supereospark | game | trust_dice | 
| <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/dapps/img/chaince_logo.png" /> | Chaince | World First EOS Full-Ecological Exchange. | <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/dapps/img/chaince.png" /> | https://chaince.com | exchange | chaince | 
| <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/dapps/img/stname_logo.png" /> | Stname | EOS Premium Accounts Auction, by participating you will have the opportunity to earn EOS! | <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/dapps/img/stname_en.png" /> | http://stname.starteos.io/#/index?refs=supereospark | tool | stname | 
| <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/dapps/img/whale_ex_logo.png" /> | WhaleEx | Decentralized Exchange with World's Highest Trading Volume. | <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/dapps/img/whale_ex_en.png" /> | https://www.whaleex.com | exchange | whale_ex | 
| <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/dapps/img/bank_of_staked_logo.png" /> | Bank of Staked | Bank of Staked, a CPU rental platform that understands your security concerns. | <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/dapps/img/bank_of_staked.png" /> | https://eoslaomao.com/bankofstaked | tool | bank_of_staked | 
| <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/dapps/img/eostowergame_logo.png" /> | EOS Tower Game | Fun 1:1 PVP game that you can compete with others. | <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/dapps/img/eostowergame.png" /> | https://eostowergame.com/?ref=supereospark | game | eostowergame | 
| <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/dapps/img/unlimitedtower_logo.png" /> | Unlimited Tower ⚔️ | The Next Generation On-Chain Battle SRPG Dapp. | <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/dapps/img/unlimitedtower.png" /> | https://www.unlimitedtower.com/main.jsp | game | unlimitedtower | 
| <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/dapps/img/findex_logo.png" /> | FINDEX | FINDEX is a decentralised exchange based on EOS plugin technology match engine. | <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/dapps/img/findex.png" /> | https://findex.pro | exchange | findex | 
| <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/dapps/img/token_planet_logo.png" /> | Token Planet | A game which you can make money without investing. | <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/dapps/img/token_planet.png" /> | http://app.tokenplanet.net | game | token_planet | 
| <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/dapps/img/vs_bet_logo.png" /> | VSbet | VSbet is a first multi-PvP dice game base on EOS. Besides tradditional dice game, team battle is introduced into the game. Winners will take the jackpot of the lost team. More bonus, more compatitive, and more fun! | <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/dapps/img/vs_bet.png" /> | https://vsbet.io/?i=supereospark | game | vs_bet | 
| <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/dapps/img/eoshash_logo.png" /> | EOSHASH | The FAIREST Satoshi-style Decentralized Crypto Casino Built on EOS, use hash to draw winning numbers to guarantee absolute Fairness, No Chance for Cheating at All! Generous rewards, high referral bonus! | <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/dapps/img/eoshash.png" /> | https://eoshash.win/game/lottery?ref=supereospark  | game | eoshash | 
| <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/dapps/img/newdex_logo.png" /> | Newdex | The first EOS based decentralized exchange in the world. | <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/dapps/img/newdex.png" /> | https://newdex.io | exchange | newdex | 
| <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/dapps/img/eos_texas_poker_logo.png" /> | EOS Texas POKER | The First Orthodox Texas Poker Game on EOS. | <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/dapps/img/eos_texas_poker.png" /> | http://texas.eospokers.com | game | eos_texas_poker | 
| <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/dapps/img/pra_candybox_logo.png" /> | PRA Candybox | PRA Candy Box is the first EOS-based advertisement DApp. | <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/dapps/img/pra_candybox.png" /> | https://chain.pro/web-prabox/#/?ref=supereospark | tool | pra_candybox | 
| <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/dapps/img/eos_royale_logo.png" /> | EOS Royale | EOS Royale is a decentralized gaming platform on the EOS blockchain. | <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/dapps/img/eos_royale.png" /> | https://roulette.eosroyale.com?ref=supereospark&utm_source=eospark | game | eos_royale | 
| <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/dapps/img/eosluck_logo.png" /> | EOSLUCK | The first betting platform based on EOS. | <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/dapps/img/eosluck.png" /> | https://eosluck.one/?ref=supereospark | game | eosluck | 
| <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/dapps/img/murmur_logo.png" /> | Murmur | Microblogging, re-imagined. | <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/dapps/img/murmur.png" /> | https://murmurdapp.com | entertainment | murmur | 
| <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/dapps/img/roulette_logo.png" /> | Roulette | Lucky wheel's big prize is waiting for you. | <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/dapps/img/roulette.png" /> | https://roulette.dapp365.io/?ref=supereospark | game | roulette | 
| <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/dapps/img/enbank_logo.png" /> | ENBank | ENB is a financial management service platform. | <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/dapps/img/enbank.png" /> | https://enbk.io/candy/?ref=supereospark | tool | enbank | 
| <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/dapps/img/uu_dog_racing_logo.png" /> | UU Dog Racing | UU 赛狗是 UUGames 平台的首款游戏，将传统休闲竞技玩法进行通证化改造，透明公正，欢乐有趣. | <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/dapps/img/uu_dog_racing.png" /> | http://h5.uugames.io?ref=supereospark | game | uu_dog_racing | 
| <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/dapps/img/eosnameswaps_logo.png" /> | EosNameSwaps | EosNameSwaps is the most popular Eos account trading system which is open source, safety and global market. | <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/dapps/img/eosnameswaps.png" /> | https://www.eosnameswaps.com/en.html?ref=eospark | tool | eosnameswaps | 
| <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/dapps/img/dice_eosget_logo.png" /> | EOSGET SICBO&K3 | Zero CPU USE BlockChain ID as the lottery basis. | <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/dapps/img/dice_eosget.png" /> | https://dice.eosget.io/?a=supereospark | game | dice_eosget | 
| <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/dapps/img/eosabc_logo.png" /> | EOSABC | EOSABC is a game platform based on EOS blockchain. | <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/dapps/img/eosabc.png" /> | https://www.eosabc.io/?ref=supereospark | game | eosabc | 
| <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/dapps/img/firewallx_logo.png" /> | FireWall.X | Powerful Firewall For EOS Contract, by SlowMist. | <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/dapps/img/firewallx.png" /> | https://firewallx.io/index-en.html | tool | firewall.x | 
| <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/dapps/img/big_game_logo.png" /> | Big.game | Big.game, Big Win! Now giving away 7,770 EOS! | <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/dapps/img/big_game.png" /> | https://big.game/?code=supereospark | game | big_game | 
| <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/dapps/img/game_sky_logo.png" /> | GameSky | GameSky is safe,reliable,open source game platform. | <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/dapps/img/game_sky.png" /> | https://www.gamesky.io/?ref=supereospark | game | game_sky | 
| <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/dapps/img/pokerking_logo.png" /> | Hold'em Pokerking | The first PVP Texas Hold’em on EOS.IO blockchain. | <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/dapps/img/pokerking.png" /> | https://pokerking.one/?ref=supereospark | game | game_sky | 
| <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/dapps/img/eosknights_logo.png" /> | EOS Knights | EOS Knights is a first mobile game, runs on an EOS. | <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/dapps/img/eosknights.png" /> | https://eosknights.io | game | eosknights | 
| <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/dapps/img/btex_logo.png" /> | BTEX | BTEX is a de-centralized exchange on EOS. | <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/dapps/img/btex.png" /> | https://www.btex.org | exchange | btex | 
| <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/dapps/img/we_dice_logo.png" /> | WeDice | Automatic earning dice for dice owner. | <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/dapps/img/we_dice.png" /> | https://wedice.one/?ref=supereospark | game | we_dice | 
| <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/dapps/img/iboxgames_logo.png" /> | iBoxGame | A baccarat HiLo gambling game dapp rewarding high IQ players. | <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/dapps/img/iboxgames.png" /> | https://ibox.games/?ref=supereospark | game | iboxgames | 
| <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/dapps/img/sportbet_logo.png" /> | SportBet | First decentralized sportsbook on EOS blockchain | <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/dapps/img/sportbet.png" /> | https://sportbet.one?r=supereospark | game | sportbet | 
| <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/dapps/img/prospectors_logo.png" /> | Prospectors | Massive Multiplayer Online Real-Time Economic Strategy Game, MINE GOLD - BUILD YOUR WORLD | <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/dapps/img/prospectors.png" /> | https://prospectors.io?ref=supereospark | game | prospectors | 
| <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/dapps/img/mytoken_best_logo.png" /> | EOS Premium Accounts | Register .win .ca .en .pro .biz .best ...  and free accounts. | <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/dapps/img/mytoken_best.png" /> | https://mytoken.best/?ref=eospark | entertainment | mytoken_best | 

<!-- dapp_list_end -->

### Partners
<!-- partner_list_start -->
| Logo        | Title   | Description | Link   | Type   | Google Analytics Tag |
| :--------:  | :-----: | :----:      | :----: | :----: | :----:               |
| <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/partners/img/CoinU.png" /> | CoinU | Decentralized multi-chain wallet | https://coinu.top/en_US/ | wallet | CoinU | 
| <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/partners/img/bitkeep.png" /> | Bitkeep | The first global decentralized digital wallet service for transaction | https://bitkeep.com | wallet | Bitkeep | 
| <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/partners/img/bepal.png" /> | BEPAL | Digital Asset Management Specialist | https://www.bepal.pro | wallet | bepal | 
| <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/partners/img/atomic_wallet.png" /> | Atomic Wallet | Secure multi-asset wallet with built-in exchange | https://atomicwallet.io | wallet | atomic_wallet | 
| <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/partners/img/pocket_ecology.png" /> | PocketEcology | discover your new life in the crypto-world | https://www.pocketeos.com | wallet | pocket_ecology | 
| <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/partners/img/hoo.png" /> | Hoo Wallet | Professional blockchain asset management and service platform | https://hoo.com | wallet | hoo | 
| <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/partners/img/math_wallet.png" /> | Math Wallet | World's first insured crypto wallet | http://www.mathwallet.org | wallet | math_wallet | 
| <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/partners/img/meet_one.png" /> | MEET.ONE | The Portal to EOS Ecology | https://meet.one/ | wallet | meet_one | 
| <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/partners/img/token_pocket.png" /> | TOKEN POCKET | EOS wallet that supports block producer secure voting and super proxy | https://www.mytokenpocket.vip/en | wallet | token_pocket | 
| <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/partners/img/eocat.png" /> | EOCAT | The easiest EOS wallet | https://eocat.io | wallet | eocat | 
| <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/partners/img/eos_live.png" /> | EOS LIVE | Discover your favorite thing of EOS | https://eos.live | wallet | eos_live | 
| <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/partners/img/imtoken.png" /> | imToken | World-renowned digital asset management tool, supporting Bitcoin, Ethereum, EOS, and other blockchains | https://token.im/ | wallet | imToken | 
| <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/partners/img/bitpie.png" /> | Bitpie.com | Bitpie is a safe and multi-assets wallet | https://bitpie.com | wallet | bitpie | 
| <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/partners/img/nova_wallet.png" /> | NOVA Wallet | Your First EOS Wallet | http://eosnova.io/ | wallet | novaWallet | 
| <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/partners/img/starteos.png" /> | Starteos | A considerate、innovative、convenient and satisfying eco center | https://www.starteos.io | wallet | Starteos | 
| <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/partners/img/zebra_wallet.png" /> | ZebraWallet | Chain the Future | https://zebrawallet.io | wallet | zebra_wallet | 
| <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/partners/img/gold_stone.png" /> | GoldStone | Multi-chain wallet, supporting EOS, BTC, ETH, ETC, LTC, BCH and Tokens | https://www.goldstone.io | wallet | GoldStone | 
| <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/partners/img/secrypto.png" /> | Secrypto | Multi-chain crypto wallet with mobile entrance of DApps | https://www.secrypto.io/ | wallet | secrypto | 
| <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/partners/img/walletio.png" /> | Wallet.io | A simple and secure 100% onchain wallet | https://wallet.io | wallet | wallet.io | 
| <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/partners/img/one.png" /> | ONE | You all-in-ONE Dapp, supports all blockchain system and Chinese characters mnemonics | http://app.onechain.one/appstart.html | wallet | ONE | 
| <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/partners/img/dalong_wallet.png" /> | Dalong Wallet | Safe and easy to use eos wallet | DApp explorer | https://dalong.com | wallet | dalong_wallet | 
| <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/partners/img/vip_wallet.png" /> | VipWallet | VIP 账户注册，冷热钱包保护数字资产安全 | http://www.vipwallet.tech | wallet | vip_wallet | 
| <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/partners/img/eostoken.png" /> | eostoken.im | Professional EOS digital property butler | http://eostoken.im/en/index.html | wallet | eostoken | 
| <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/partners/img/coin_us_wallet.png" /> | CoinUs Wallet | CoinUs is a personal multi-wallet offering convenience and security for storing various cryptocurrencies | https://www.coinus.io | wallet | coin_us_wallet | 
| <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/partners/img/btex.png" /> | BTEX | New Generation Decentralization Exchange on EOS | https://www.btex.org | exchange | btex | 
| <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/partners/img/whale_ex.png" /> | WhaleEx | World's best decentralized exchange with highest liquidity | https://www.whaleex.com | exchange | WhaleEx | 
| <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/partners/img/switcheo.png" /> | Switcheo Network | The simplest way to buy and sell cryptocurrencies securely.  | https://switcheo.exchange | exchange | switcheo_network | 
| <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/partners/img/newdex.png" /> | Newdex | The first EOS based decentralized exchange in the world | https://newdex.io/ | exchange | newdex | 
| <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/partners/img/zb.png" /> | ZB | Global Compliance Exchange | https://www.zb.cn | exchange | zb | 
| <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/partners/img/bit_cc.png" /> | Bit.cc | AEX bitcoin trading exchange to support a variety of digital asset spot transactions | https://www.bit.cc | exchange | bit_cc | 
| <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/partners/img/top_one.png" /> | TOP.ONE | The world's leading, asset-transparent digital asset exchange | https://top.one/ | exchange | top_one | 
| <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/partners/img/coinex.png" /> | CoinEx | The Global Digital Coin Exchange | https://www.coinex.com/ | exchange | coinex | 
| <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/partners/img/coin_bene.png" /> | CoinBene | The World's Leading Trustworthy Crypto Assets Platform | http://www.coinbene.com | exchange | coin_bene | 
| <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/partners/img/best_rate.png" /> | BestRate | Aggregator of Crypto Currency Exchanges | https://bestrate.org | exchange | bestrate | 
| <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/partners/img/digi_finex.png" /> | DigiFinex | DigiFinex Infinite Possibilities | https://www.digifinex.com | exchange | DigiFinex | 
| <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/partners/img/findex.png" /> | Findex | A decentralized exchange (No transaction fees) | https://findex.pro | exchange | Findex | 
| <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/partners/img/coin_tiger.png" /> | CoinTiger | Safe and reliable, support multiple stable currency such as BitCNY,USDT | https://www.cointiger.pro | exchange | CoinTiger | 
| <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/partners/img/eosdaq.png" /> | EOSDAQ | A New Standard of DEX | https://eosdaq.com | exchange | EOSDAQ | 
| <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/partners/img/onedex.png" /> | OneDex | OneDex - The completely decentralized exchange, support all cryptocurrency, supporting fiat transaction soon | https://onedexweb.haoduobi.com/?source=onedex123451 | exchange | OneDex | 
| <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/partners/img/gate_io.png" /> | Gate.io | Your gateway to cryptocurrency | https://www.gate.io | exchange | gateio | 
| <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/partners/img/fcoin.png" /> | FCoin | FCoin，A Real-time, Open and Transparent Community-based Digital Asset Trading Platform | https://www.fcoin.com | exchange | fcoin | 
| <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/partners/img/coin_gecko.png" /> | CoinGecko | 360° Market Overview of Coins & Cryptocurrencies | https://www.coingecko.com/en | informationPlatforms | coin_gecko | 
| <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/partners/img/imeos_one.png" /> | IMEOS.ONE | An ecological portal platform that provides EOS airdrop information | https://imeos.one | informationPlatforms | imeos_one | 
| <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/partners/img/jinse.png" /> | Jinse Finance | The Door to Blockchain | https://www.jinse.com | informationPlatforms | jinse | 
| <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/partners/img/spider_store.png" /> | Spider Store | Discover quality DApp | https://spider.store | informationPlatforms | spider_store | 
| <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/partners/img/feixiaohao.png" /> | 非小号 | Cryptocurrency data analysis platform | https://www.feixiaohao.com/ | informationPlatforms | feixiaohao | 
| <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/partners/img/coincodex.png" /> | coincodex | Know Your Crypto | https://coincodex.com/ | informationPlatforms | coincodex | 
| <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/partners/img/dapp_com.png" /> | Dapp.com | Latest & Top Blockchain Dapps | EOS, NEO, ETH. | https://www.dapp.com | informationPlatforms | dapp_com  | 
| <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/partners/img/liebi.png" /> | 猎币 | Become a smart investor | https://liebi.com | informationPlatforms | liebi | 
| <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/partners/img/matrixdata.png" /> | MATRIX DATA | Make it easier to get data | https://matrixdata.io | informationPlatforms | matrixdata | 
| <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/partners/img/dapp_review.png" /> | Dapp.Review | Delivering accurate DApp data, user insights and market analytics | https://dapp.review | informationPlatforms | dapp.review | 
| <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/partners/img/go_dapp.png" /> | GoDapp | GoDapp.where the best dapps go! | https://godapp.com | informationPlatforms | go_dapp | 
| <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/partners/img/pro_chain.png" /> | PRA Candy Box | The first EOS-based candy box DApp developed by ProChain | https://chain.pro/web-prabox/ | dapp | pro_chain | 
| <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/partners/img/takafuly.png" /> | Takafuly | One Marketplace Where Everybody Connects | https://www.takafuly.net/ | dapp | takafuly | 
| <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/partners/img/btmore.png" /> | btmore | online games platform based on crypto assets | https://www.btmore.com/?channel=eospark | game | btmore | 
| <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/partners/img/eos_joy.png" /> | EOSJoy | The World's First Blockchain Platform for Leisure and Competitive Games | https://www.eosjoy.io/?user=supereospark&utm_source=eospark | game | eosjoy | 
| <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/partners/img/farm_eos.png" /> | FarmEOS | The world's first DApp gaming eco-platform | https://farmeos.io/a/supereospark | game | farm_eos | 
| <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/partners/img/bet_dice.png" /> | BetDice | The largest gaming platform on EOS | https://betdice.one/ | game | bet_dice | 
| <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/partners/img/endless.png" /> | Endless | The first true profit-sharing online arcade | https://dice.endless.game/dice | game | endless | 
| <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/partners/img/token_planet.png" /> | Token Planet | The first EOS-based blockchain gaming platform in the world | http://app.tokenplanet.net/?isInApp=1&qd=eospark | game | token_planet | 
| <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/partners/img/big_game.png" /> | Big Game | Fair & Exciting EOS Gaming Platform | https://big.game/?code=supereospark | game | big_game | 
| <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/partners/img/trust_dice.png" /> | TrustDice | The best profit-sharing gaming platform on EOS | https://trustdice.win/?ref=supereospark | game | trust_dice | 
| <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/partners/img/eos_royale.png" /> | EOS Royale | EOS Royale is a decentralized gaming platform on the EOS blockchain | https://roulette.eosroyale.com?ref=supereospark&utm_source=eospark | game | eos_royale | 
| <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/partners/img/game_bet.png" /> | GameBet | 基于泛 EOS 开发的小游戏. | http://gamebet.one/?referrer=supereospark | game | game_bet | 
| <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/partners/img/unlimited_tower.png" /> | Unlimited Tower ⚔️ | The Next Generation On-Chain Battle SRPG Dapp. | https://www.unlimitedtower.com/main.jsp | game | unlimitedtower | 
| <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/partners/img/sportbet.png" /> | SportBet | First decentralized sportsbook on EOS blockchain | https://sportbet.one?r=supereospark | game | sportbet | 
| <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/partners/img/eos_mon_kit.png" /> | EOS MonKit | Gain insight into everything about the EOS contract | https://eos.slowmist.io/ | tool | eos_mon_kit | 
| <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/partners/img/dapp_pub.png" /> | DappPub | Unleashing the power of DApps | https://dapp.pub | tool | dapp_pub | 
| <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/partners/img/token_pad.png" /> | TokenPad | Old driver take you to the EOS | https://eos.tokenpad.io | tool | token_pad | 
| <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/partners/img/my-wish.png" /> | My Wish | Create your smart contract without coding | https://mywish.io/?utm_source=partners&utm_medium=site&utm_campaign=EOSPark | tool | my-wish | 
| <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/partners/img/best_rate.png" /> | BestRate Payment Tool | Sell your tokens within your project | https://bestrate.org/ico-payment-tools | tool | BestRate_Payment_Tool | 
| <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/partners/img/eos_cloud.png" /> | EOSCloud | The most convenient and fast CPU rental service | https://cpu.liebi.com | tool | EOSCloud | 
| <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/partners/img/dapp_cpu.png" /> | DAppCPU | Fuel it to the moon | https://www.dappcpu.com | tool | DAppCPU | 

<!-- partner_list_end -->

### Home Partners
<!-- home_partner_list_start -->
| Logo       | Link    | Google Analytics Tag |
| :--------: | :-----: | :----:               |
| <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/home-partners/img/imeos_one.png" /> | https://imeos.one | imeos | 
| <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/home-partners/img/zb.png" /> | https://www.zb.cn | zb | 
| <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/home-partners/img/imtoken.png" /> | https://token.im/ | imToken | 
| <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/home-partners/img/hoo.png" /> | https://hoo.com | hoo | 
| <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/home-partners/img/math_wallet.png" /> | https://www.mathwallet.org/en/ | math_wallet | 
| <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/home-partners/img/meet_one.png" /> | https://meet.one/ | meet.one | 
| <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/home-partners/img/coinex.png" /> | https://www.coinex.com/ | coinex | 
| <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/home-partners/img/token_pocket.png" /> | https://www.mytokenpocket.vip | token_pocket | 
| <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/home-partners/img/eos_live.png" /> | https://eos.live | eos_live | 
| <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/home-partners/img/gate_io.png" /> | https://www.gate.io | gate_io | 
| <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/home-partners/img/iostabc.png" /> | https://iostabc.com/ | iostabc | 
| <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/home-partners/img/whale_ex.png" /> | https://www.whaleex.com | whale_ex | 
| <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/home-partners/img/dapp_review.png" /> | https://dapp.review | dapp_review | 
| <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/home-partners/img/hacken.png" /> | https://hacken.io | Hacken | 
| <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/home-partners/img/newdex.png" /> | https://newdex.io | Newdex | 
| <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/home-partners/img/starteos.png" /> | https://www.starteos.io | Starteos | 
| <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/home-partners/img/switcheo_network.png" /> | https://switcheo.exchange | switcheo_network | 
| <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/home-partners/img/firewall.png" /> | https://firewallx.io | FireWall.X | 
| <img src="https://raw.githubusercontent.com/BlockABC/eospark-cooperation/master/home-partners/img/peckshield.png" /> | https://peckshield.com | PeckShield | 

<!-- home_partner_list_end -->