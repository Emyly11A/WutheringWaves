document.addEventListener('DOMContentLoaded', () => {
    // Game data
   const characters = [
        // 5-star
        {name: "Aalto", rarity: 4, image: "https://www.prydwen.gg/static/28692b3a188f6b7b14a9d28aa90bf3c8/b26e2/aalto_card.webp" },
        {name: "Augusta", rarity: 5, image: "https://www.prydwen.gg/static/2f1f1aad1444416525bca51ce823bff7/b26e2/aug_card.webp" },
        {name: "Baizhi", rarity: 4, image: "https://www.prydwen.gg/static/3752f18605107b5fdb36835e9e7a2b90/b26e2/baizhi_card.webp" },
        {name: "Brant", rarity: 5, image: "https://www.prydwen.gg/static/30c84393d4f1fff8fcdb71ef6be8e090/b26e2/card_brant.webp" },
        {name: "Calcharo", rarity: 5, image: "https://www.prydwen.gg/static/7b01c2f05825303762d3e6b9da538c7d/b26e2/kakarot_card.webp" },
        {name: "Camellya", rarity: 5, image: "https://www.prydwen.gg/static/fa50106c1d7d6d2f02033da9c00628f1/b26e2/card_cam.webp" },
        {name: "Cantarella", rarity: 5, image: "https://www.prydwen.gg/static/c62fb9a25dd8420d6fc03c1ca064dae2/b26e2/card_canta.webp" },
        {name: "Carlotta", rarity: 5, image: "https://www.prydwen.gg/static/72a394e25463af4c5b9c309f516c9d17/b26e2/card_carlotta.webp" },
        {name: "Cartethyia", rarity: 5, image: "https://www.prydwen.gg/static/f63677cedd1006e204f353b1f3c0af14/b26e2/cart_card.webp" },
        {name: "Changli", rarity: 5, image: "https://www.prydwen.gg/static/7eb8b347a3aa1837164c79a5e520d268/b26e2/card_changli.webp" },
        {name: "Chisa", rarity: 5, image: "https://www.prydwen.gg/static/1e11acd3163c86536e6c69aa7005424a/b26e2/chisa_card.webp" },
        {name: "Chixia", rarity: 4, image: "https://www.prydwen.gg/static/689148c2dc5b0b38aeb2c75ca8b3ef65/b26e2/chixia_card.webp" },
        {name: "Ciaccona", rarity: 5, image: "https://www.prydwen.gg/static/b70837a5b18151413c72027b8ddfac64/b26e2/cia_card.webp" },
        {name: "Danjin", rarity: 4, image: "https://www.prydwen.gg/static/431f962f5a8febb92f44ae9138aa5e01/b26e2/danjin_card.webp" },
        {name: "Encore", rarity: 5, image: "https://www.prydwen.gg/static/0acc12c57906dc3c1f47e038832ec1f4/b26e2/encore_card.webp" },
        {name: "Galbrena", rarity: 5, image: "https://www.prydwen.gg/static/aa301f37c792e3d46dce891092c9cc0f/b26e2/gal_card.webp" },
        {name: "Iuno", rarity: 5, image: "https://www.prydwen.gg/static/250723737f0c5c477d1e161f5991c9fc/b26e2/iuno_card.webp" },
        {name: "Jianxin", rarity: 5, image: "https://www.prydwen.gg/static/c215e7a42cbfd78f85455f192dc0e4f/b26e2/jiaxin_card.webp" },
        {name: "Jinshi", rarity: 5, image: "https://www.prydwen.gg/static/136095b0f95ac4be3ddc7e2d585855bf/b26e2/jihni_card.webp" },
        {name: "Jiyan", rarity: 5, image: "https://www.prydwen.gg/static/5020d60083afc09d2fb6bce4a35225bc/b26e2/jiyan_card.webp" },
        {name: "Lingyang", rarity: 5, image: "https://www.prydwen.gg/static/672fdaae2b01f8355d5631a989e5f472/b26e2/ling_card.webp" },
        {name: "Lumi", rarity: 4 , image: "https://www.prydwen.gg/static/f25eefa86b00502ff430328006610ca2/b26e2/card_lumi.webp" },
        {name: "Lupa", rarity: 5, image: "https://www.prydwen.gg/static/8b4af672cd0b39da9882c9aedab02893/b26e2/lupa_card.webp" },
        {name: "Mortefi", rarity: 4, image: "https://www.prydwen.gg/static/afa511d7b0c173247db7478c15e7e8d7/b26e2/mortefi_card.webp" },
        {name: "Phoebe", rarity: 5, image: "https://www.prydwen.gg/static/5dc88527029d541ce29c09eb9e34944c/b26e2/card_phoebe.webp" },
        {name: "Phrolova", rarity: 5, image: "https://www.prydwen.gg/static/36c6e5dae2dd77cd0b36bb0383ec28c6/b26e2/phr_card.webp" },
        {name: "Qiuyuan", rarity: 5, image: "https://www.prydwen.gg/static/7fe009cd5b71e9ba70125318aece3ef9/b26e2/qiu_card.webp" },
        {name: "Roccia", rarity: 5, image: "https://www.prydwen.gg/static/3cdda48d32ebb2b5185dfbb1f5fac561/b26e2/card_roccia.webp" },
        {name: "Sanhua", rarity: 4, image: "https://www.prydwen.gg/static/f67966dd31af657ac8612d36006d5874/b26e2/senhua_card.webp" },
        {name: "Shorekeeper", rarity: 5, image: "https://www.prydwen.gg/static/53a7609e743512dbf5f89bb78cc7bab4/b26e2/card_keeper.webp" },
        {name: "Taoqi", rarity: 4, image: "https://www.prydwen.gg/static/9759a6ea13fefd1bc632650a0a657e8e/b26e2/taoqi_card.webp" },
        {name: "Verina", rarity: 5, image: "https://www.prydwen.gg/static/dd5bdface07cef9b868fe8214b0988ed/b26e2/verina_card.webp" },
        {name: "Xiangli Yao", rarity: 5, image: "https://www.prydwen.gg/static/698d0d5f2ba882de8f3d5494e622e940/b26e2/card_xiang.webp" },
        {name: "Yangyang", rarity: 4, image: "https://wutheringwaves.gg/wp-content/uploads/sites/8/2024/05/Wuthering-Waves-Yangyang-Build-Guide.png" },
        {name: "Yinlin", rarity: 5, image: "https://www.prydwen.gg/static/a2b0c34a81e57a52165da5b356be412c/b26e2/yinglin_card.webp" },
        {name: "Youhu", rarity: 4, image: "https://www.prydwen.gg/static/c4b47996ef9c20aa6c2fc04c9bd7cfa3/b26e2/card_youhu.webp" },
        {name: "Yuanwu", rarity: 4, image: "https://www.prydwen.gg/static/fb4fc64e05d0d40ef90adc4527dc93ea/b26e2/yuanwu_card.webp" },
        {name: "Zani", rarity: 5, image: "https://www.prydwen.gg/static/505ab092ab4d706f757a89bac424b378/b26e2/card_zani.webp" },
        {name: "Zhezhi", rarity: 5, image: "https://www.prydwen.gg/static/50c9470f533efed9b28076e92230308b/b26e2/card_zhe.webp" },
    ];
    const weapons = [
       {name: "Beguiling Melody", rarity: 3, image: "https://www.prydwen.gg/static/e006b16c6bff6b997daa80cd666e608e/d8057/21010063.webp" },
       {name: "Broadblade of Night", rarity: 3, image: "https://www.prydwen.gg/static/06704904c9b54f1f95a2384dbfa766a0/d8057/21010013.webp" },
       {name: "Broadblade of Voyager", rarity: 3, image: "https://www.prydwen.gg/static/b4dd91a36c45c9b91210f48e1c6e0412/d8057/21010043.webp" },
       {name: "Gauntlets of Night", rarity: 3, image: "https://www.prydwen.gg/static/6d5eb509855384a14310dae5eaed1b5c/d8057/21040013.webp" },
       {name: "Gauntlets of Voyager", rarity: 3, image: "https://www.prydwen.gg/static/c548c2684186ab49e0c93d22552a52f7/d8057/21040043.webp" },
       {name: "Guardian Broadblade", rarity: 3, image: "https://www.prydwen.gg/static/697650a8647ce95de4506d788e32a656/d8057/21010053.webp" },
       {name: "Guardian Gauntlets", rarity: 3, image: "https://www.prydwen.gg/static/14c2bb71de9bed7ffb002f3443c9535b/d8057/21040053.webp" },
       {name: "Guardian Pistols", rarity: 3, image: "https://www.prydwen.gg/static/cdcfd1ad35cd9b0dd9fc423923e5b6b1/d8057/21030053.webp" },
       {name: "Guardian Rectifier",rarity: 3, image: "https://www.prydwen.gg/static/31c05da7e286f382e049ae690630e226/d8057/21050053.webp" },
       {name: "Guardian Sword", rarity: 3, image: "https://www.prydwen.gg/static/12690208ea634a52cc3c1625bf807dc2/d8057/21020053.webp" },
       {name: "Originite: Type I", rarity: 3, image: "https://www.prydwen.gg/static/08c31c2ee5d804bddba208020110e090/d8057/21010023.webp" },
       {name: "Originite: Type II", rarity: 3, image: "originite2.png" },
       {name: "Originite: Type III", rarity: 3, image: "originite3.webp" },
       {name: "Originite: Type IV", rarity: 3, image: "originite4.webp" },
       {name: "Originite: Type V", rarity: 3, image: "https://www.prydwen.gg/static/4fd54319bbca3cde057b4c3f0d873237/d8057/21050023.webp" },
       {name: "Pistols of Night", rarity: 3, image: "https://static.wikia.nocookie.net/wutheringwaves/images/6/63/Weapon_Pistols_of_Night.png/revision/latest?cb=20240526011400" },
       {name: "Pistols of Voyager", rarity: 3, image: "https://www.prydwen.gg/static/367ed9fc905e5a5648eed30710e7244e/d8057/21030043.webp" },
       {name: "Rectifier of Night", rarity: 3, image: "https://www.prydwen.gg/static/03b6aebe9897a053b78c05b116f61d06/d8057/21050013.webp" },
       {name: "Rectifier of Voyager", rarity: 3, image: "rectifierofvoyager.webp" },
       {name: "Sword of Night", rarity: 3, image: "https://www.prydwen.gg/static/42a972faea539fc6c622218562054d5a/d8057/21020013.webp" },
       {name: "Sword of Voyager", rarity: 3, image: "https://www.prydwen.gg/static/a54fbd2658dc0b17e57bfb1fb0186e6b/d8057/21020043.webp" },
       {name: "Amity Accord", rarity: 4, image: "https://www.prydwen.gg/static/bd46a459b49550b3594a4a9f42e107fb/d8057/21040044.webp" },
       {name: "Augment",rarity: 4, image: "https://www.prydwen.gg/static/98f0b950aa2740ae3612015d50786ee2/d8057/21050074.webp" },
       {name: "Autumntrace", rarity: 4, image: "https://www.prydwen.gg/static/adc80fa7d937da837ced0d5161898ee6/d8057/21010074.webp" },
       {name: "Broadblade#41", rarity: 4, image: "https://www.prydwen.gg/static/d92d1a7f1687f1f26b77fc4a567bf787/d8057/21010034.webp" },
       {name: "Cadenza", rarity: 4, image: "https://www.prydwen.gg/static/3411e0520354d10c53ab75f9557b641a/d8057/21030024.webp" },
       {name: "Call of the Abyss", rarity: 4, image: "https://www.prydwen.gg/static/d5b94442047d06ba570e6109d6d98226/d8057/21050017.webp" },
       {name: "Celestial Spiral", rarity: 4, image: "https://www.prydwen.gg/static/6bf49490260e1bf6c29984f786eeb4db/d8057/21040084.webp" },
       {name: "Comet Flare", rarity: 4, image: "https://www.prydwen.gg/static/2afa7da0f06e8360651d812f8e75eeec/d8057/21050064.webp" },
       {name: "Commando of Conviction", rarity: 4, image: "https://www.prydwen.gg/static/fdd237561891d62b1a797f4abc373e59/d8057/21020044.webp" },
       {name: "Dauntless Evernight", rarity: 4, image: "https://www.prydwen.gg/static/ff9b1b486e67e7133c92236b8a25b899/d8057/21010044.webp" },
       {name: "Discord", rarity: 4, image: "https://www.prydwen.gg/static/188f761e3e5ca1b039df7959c0034929/d8057/21010024.webp" },
       {name: "Fables of Wisdom", rarity:  4, image: "https://www.prydwen.gg/static/8cff04fe945ad669d9fdd96cf70bfbb0/d8057/21020094.webp" },
       {name: "Fusion Accretion", rarity: 4, image: "https://www.prydwen.gg/static/ec64c738dc213ff8577c0e49ec0eabd4/d8057/21050084.webp" },
       {name: "Gauntlets#21D", rarity: 4, image: "https://www.prydwen.gg/static/b4dfa7b4e2579ccf865d3715c08bb3a5/d8057/21040034.webp" },
       {name: "Helios Cleaver", rarity: 4, image: "https://www.prydwen.gg/static/7e404c8965d96ba9485904887fa13c1d/d8057/21010064.webp" },
       {name: "Hollow Mirage", rarity: 4, image: "https://www.prydwen.gg/static/f9d39aa09d3ac8c82f808e79ef20cee9/d8057/21040064.webp" },
       {name: "Jinzhou Keeper", rarity: 4, image: "https://www.prydwen.gg/static/3df20f62a915724b1e00969db9049390/d8057/21050044.webp" },
       {name: "Legend of Drunken Hero", rarity: 4, image: "https://www.prydwen.gg/static/db22af6d1117254126b02a55d4e3dde5/d8057/21040094.webp" },
       {name: "Lumingloss", rarity: 4, image: "https://www.prydwen.gg/static/3c96fa22b3ec2f92dd1062fe4bd833cd/d8057/21020074.webp" },
       {name: "Lunar Cutter", rarity: 4, image: "https://static.wikia.nocookie.net/wutheringwaves/images/c/ca/Weapon_Lunar_Cutter.png/revision/latest?cb=20240526011750" },
       {name: "Marcato", rarity: 4, image: "https://www.prydwen.gg/static/a1a116a62c73e15ae365e73dbeba60e0/d8057/21040024.webp" },
       {name: "Mediations on Mercy", rarity: 4, image: "https://www.prydwen.gg/static/17956cd3406249c8f12edbf5464ec1b5/d8057/21010094.webp" },
       {name: "Novaburst", rarity: 4, image: "https://www.prydwen.gg/static/ff30d714609a1a96237c12dfcb0e248b/d8057/21030064.webp" },
       {name: "Ocean's Gift", rarity: 4, image: "https://www.prydwen.gg/static/ac890a3f96908f1f0481185c222db19a/d8057/21050027.webp" },
       {name: "Overture", rarity: 4, image: "https://www.prydwen.gg/static/c7245f70c6282909433bb73081571507/d8057/21020024.webp" },
       {name: "Pistols#26", rarity: 4, image: "https://www.prydwen.gg/static/40200b1f5449a8cd8655aa7cd96b6714/d8057/21030034.webp" },
       {name: "Rectifier#25", rarity: 4, image: "https://www.prydwen.gg/static/29e9a9de172784c2de4f0d76e371a60b/d8057/21050034.webp" },
       {name: "Relativistic Jet", rarity: 4, image: "https://www.prydwen.gg/static/f7d0db605e6df4851bbc61329d788026/d8057/21030084.webp" },
       {name: "Romance in Farewell", rarity: 4, image: "https://www.prydwen.gg/static/3d67322bfd1789fadedb23631aee70cd/d8057/21030094.webp" },
       {name: "Somnoire Anchor", rarity: 4, image: "https://www.prydwen.gg/static/8096f34617104e3f4c69d70007e8e351/d8057/21020017.webp" },
       {name: "Stonard", rarity: 4, image: "https://www.prydwen.gg/static/0ec71b53bda686cfa3da5c255c4e6014/d8057/21040074.webp" },
       {name: "Sword#18", rarity: 4, image: "https://www.prydwen.gg/static/360e564b64befe84af30a0a2fa79c0b5/d8057/21020034.webp" },
       {name: "Thunderbold", rarity: 4, image: "https://www.prydwen.gg/static/5cd96efa005e20f2a22f50a3fdf8dd0a/d8057/21030074.webp" },
       {name: "Undying Flame", rarity: 4, image: "https://www.prydwen.gg/static/56b1822228eafd7b28de77acf9b3f871/d8057/21030044.webp" },
       {name: "Variation", rarity: 4, image: "https://www.prydwen.gg/static/17b3ecd853dc96c67fbd61529e8f20cc/d8057/21050024.webp" },
       {name: "Waltz in Masquerade", rarity: 4, image: "https://www.prydwen.gg/static/3f5985f963b9534560b68b09e15a3b61/d8057/21050094.webp" },
       {name: "Waning Redshift", rarity: 4, image: "https://www.prydwen.gg/static/a9dec34478e09071ff40306d7bb43e30/d8057/21010084.webp" },
       {name: "Abyss Surges", rarity: 5, image: "https://www.prydwen.gg/static/da96eff40570b44e7ad147a1f02fb010/d8057/21040015.webp" },
       {name: "Age of Harvest", rarity: 5, image: "https://www.prydwen.gg/static/4618aff3766c7321a6ed5b90a5ba5233/d8057/21010026.webp" },
       {name: "Blazing Brilliance", rarity: 5, image: "https://www.prydwen.gg/static/d10d36537a00df4dbb097bbf060882e5/d8057/21020016.webp" },
       {name: "Blazing Justice", rarity: 5, image: "https://www.prydwen.gg/static/56209339a7d77fa2aba666782c5edd4d/d8057/21040036.webp" },
       {name: "Bloodpact's Pledge", rarity: 5, image: "https://www.prydwen.gg/static/82e03cb3a85e7a7099208399d405dcb3/d8057/21020046.webp" },
       {name: "Cosmic Ripples", rarity: 5, image: "https://www.prydwen.gg/static/39c57180711200564883c36983cc61bf/d8057/21050015.webp" },
       {name: "Defier's Thorn", rarity: 5, image: "https://www.prydwen.gg/static/724513a7283abb524ffea4341e11cc81/d8057/21020056.webp" },
       {name: "Emerald of Genesis", rarity: 5, image: "https://www.prydwen.gg/static/30143bcc97126ddc90c6f0a143d2f034/d8057/21020015.webp" },
       {name: "Lethean Elegy", rarity: 5, image: "https://www.prydwen.gg/static/038c0171b512d8628d9a82a0ef2954c8/d8057/21050066.webp" },
       {name: "Luminous Hymn", rarity: 5, image: "https://www.prydwen.gg/static/aa87373361d2f01d5e8664dd81f3e4bd/d8057/21050046.webp" },
       {name: "Lustrous Razor", rarity: 5, image: "https://static.wikia.nocookie.net/wutheringwaves/images/c/c1/Weapon_Lustrous_Razor.png/revision/latest?cb=20240606152146" },
       {name: "Red Spring", rarity: 5, image: "https://www.prydwen.gg/static/df316ecf3de0e6c72f51382c85266ed6/d8057/21020026.webp" },
       {name: "Rime-Draped Sprouts", rarity: 5, image: "https://www.prydwen.gg/static/616d8054f1f14435f9d963e6f338f200/d8057/21050026.webp" },
       {name: "Static Mist", rarity: 5, image: "https://www.prydwen.gg/static/7d6753ee032694bd071ccdd5d5ba5b3b/d8057/21030015.webp" },
       {name: "Stellar Symphony", rarity: 5, image: "https://www.prydwen.gg/static/0c478cd8efeab343c930d70b32eb1fa6/d8057/21050036.webp" },
       {name: "Stringmaster", rarity: 5, image: "https://www.prydwen.gg/static/8ff1fade69b3c0c324b49542bd182b06/d8057/21050016.webp" },
       {name: "The Last Dance", rarity: 5, image: "https://www.prydwen.gg/static/e2a821935b5401e06fdedf5a0f053b1/d8057/21030016.webp" },
       {name: "Tragicomedy", rarity: 5, image: "https://www.prydwen.gg/static/47ea08cce530ca69535b6a53e5d8a101/d8057/21040026.webp" },
       {name: "Unflickering Valor", rarity: 5, image: "https://www.prydwen.gg/static/3f8e4381cb746d3db5d78a4f7b221979/d8057/21020036.webp" },
       {name: "Verdant Summit", rarity: 5, image: "https://www.prydwen.gg/static/628bb28c1fe21823b30de4abe067ce5d/d8057/21010016.webp" },
       {name: "Verity's Handle", rarity: 5, image: "https://www.prydwen.gg/static/725db1ce3c32dac3c843deeb9da9feec/d8057/21040016.webp" },
       {name: "Whispers of Sirens", rarity: 5, image: "https://www.prydwen.gg/static/85e5622e263df3634be85a04d624343c/d8057/21050056.webp" },
       {name: "Wildfire Mark", rarity: 5, image: "https://www.prydwen.gg/static/0d3e3193c82c0668a793c4cd0762a5d4/d8057/21010036.webp" },
       {name: "Woodland Aria", rarity: 5, image: "https://www.prydwen.gg/static/4bd8e13dc74fe0db2936df08ecc86861/d8057/21030026.webp" },
    ];
    
    const allItems = [...characters, ...weapons];
    
    // DOM Elements
    const navLinks = document.querySelectorAll('.nav-link');
    const pages = document.querySelectorAll('.page');
    
    // Authentication elements
    const authButton = document.getElementById('authButton');
    const authModal = document.getElementById('authModal');
    const closeModal = document.getElementById('closeModal');
    const authTabs = document.querySelectorAll('.auth-tab');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const loginMessage = document.getElementById('loginMessage');
    const registerMessage = document.getElementById('registerMessage');
    const userInfo = document.getElementById('userInfo');
    const usernameSpan = document.getElementById('username');
    const welcomeMessage = document.getElementById('welcomeMessage');
    
    // Language selector elements
    const languageButton = document.getElementById('languageButton');
    const languageDropdown = document.getElementById('languageDropdown');
    const languageOptions = document.querySelectorAll('.language-option');
    const currentFlag = document.getElementById('currentFlag');
    const currentLang = document.getElementById('currentLang');
    
    // Wish page elements
    const wish1Button = document.getElementById('wish1');
    const wish10Button = document.getElementById('wish10');
    const wishResultsDiv = document.getElementById('wishResults');
    const totalWishesSpan = document.getElementById('totalWishes');
    const pity5StarSpan = document.getElementById('pity5Star');
    const pity4StarSpan = document.getElementById('pity4Star');
    const stat5Star = document.getElementById('stat5Star');
    const stat4Star = document.getElementById('stat4Star');
    const stat3Star = document.getElementById('stat3Star');
    const stat5Rate = document.getElementById('stat5Rate');
    const filterButtons = document.querySelectorAll('.filter-button');
    const pityHistoryList = document.getElementById('pityHistoryList');
    
    // Characters page elements
    const charactersGrid = document.getElementById('charactersGrid');
    const charactersRarityTabs = document.querySelectorAll('#characters .rarity-tab');
    
    // Weapons page elements
    const weaponsGrid = document.getElementById('weaponsGrid');
    const weaponsRarityTabs = document.querySelectorAll('#weapons .rarity-tab');
    
    // ANIMATION OVERLAY - Video Effect
    const wishAnimationOverlay = document.createElement('div');
    wishAnimationOverlay.id = 'wishAnimationOverlay';
    wishAnimationOverlay.className = 'wish-animation-overlay';
    wishAnimationOverlay.innerHTML = `
        <div class="video-container">
            <video class="wish-video" autoplay muted playsinline id="wishVideo">
                <!-- Video sources will be set dynamically based on rarity -->
            </video>
            <div class="wishing-text" data-translate="wish-animation-text">WISHING...</div>
        </div>
    `;
    document.body.appendChild(wishAnimationOverlay);
    const animationDuration = 5000; // 5 seconds for main animation
    
    // Video URLs to replace with actual video files!
    // Make sure these video files are available at the specified URLs.
    // Example videos from Mixkit are used for demonstration.
    const videoSources = {
        3: "Wishing 3.mp4",  // Example: 3-star video (blue)
        4: "Wishing 4.mp4",  // Example: 4-star video (purple)
        5: "Wishing 5.mp4"   // Example: 5-star video (gold)
    };
    
    // State variables
    let currentUser = null;
    let totalWishes = 0;
    let pity5Star = 0;
    let pity4Star = 0;
    let count5Star = 0;
    let count4Star = 0;
    let count3Star = 0;
    let currentFilter = 'all';
    let pityHistory = [];
    let obtainedCharacters = [];
    let obtainedWeapons = [];
    let last5StarWish = 0; // Tracks the total number of pulls at the last 5-star
    const PITY_5_STAR_MAX = 80;
    const PITY_4_STAR_MAX = 10;
    const RATE_5_STAR = 0.025; // 2.5% for 5-star
    let shellCredits = 0;
    
    // Translations
    const translations = {
        // Romanian
        ro: {
            'logo': 'Wuthering Waves Collection',
            'nav-main': 'Meniu Principal',
            'nav-wish': 'Wish',
            'nav-characters': 'Caractere',
            'nav-weapons': 'Arme',
            'nav-domain': 'Domeniu',
            'auth-login': 'Autentificare',
            'auth-logout': 'Deconectare',
            'auth-title': 'Autentificare',
            'auth-login-tab': 'Autentificare',
            'auth-register-tab': 'Înregistrare',
            'auth-username': 'Nume utilizator',
            'auth-password': 'Parolă',
            'auth-email': 'Email',
            'auth-confirm-password': 'Confirmă parola',
            'auth-login-btn': 'Autentificare',
            'auth-register-btn': 'Înregistrare',
            'auth-error-login': 'Nume de utilizator sau parolă incorectă.',
            'auth-error-username': 'Acest nume de utilizator este deja folosit.',
            'auth-error-email': 'Acest email este deja folosit.',
            'auth-error-password': 'Parolele nu se potrivesc.',
            'auth-success-register': 'Înregistrare reușită! Acum te poți autentifica.',
            'main-title': 'Wuthering Waves Collection',
            'main-welcome': 'Bun venit în lumea Wuthering Waves!',
            'main-description-1': 'Acest site este dedicat colecționarilor și fanilor jocului Wuthering Waves. Aici poți simula sistemul de "wish" pentru a obține personaje și arme, poți vizualiza colecția ta și poți urmări progresul tău în joc.',
            'main-description-2': 'Scopul nostru este să oferim o experiență cât mai apropiată de cea reală, cu rate de drop personalizabile și un design atractiv.',
            'main-login-prompt': 'Autentifică-te pentru a-ți salva progresul!',
            'feature-simulator-title': 'Simulator Wish',
            'feature-simulator-desc': 'Simulează sistemul de wish din joc cu rate personalizabile și pity tracking pentru 5 stele.',
            'feature-characters-title': 'Colecție Personaje',
            'feature-characters-desc': 'Vizualizează toate personajele pe care le-ai obținut, organizate după raritate.',
            'feature-weapons-title': 'Colecție Arme',
            'feature-weapons-desc': 'Explorează arsenalul tău complet, cu toate armele organizate pe categorii.',
            'wish-title': 'Wuthering Waves Wishing Simulator',
            'wish-description': 'Apasă pe butoane pentru a face o tragere!',
            'wish-total-wishes': 'Total Trageri: ',
            'wish-pity-5': 'Pity 5-stele: ',
            'wish-pity-4': 'Pity 4-stele: ',
            'wish-filter-all': 'Toate',
            'wish-filter-5': '5-stele',
            'wish-filter-4': '4-stele',
            'wish-filter-3': '3-stele',
            'wish-prompt': 'Trage pentru a vedea rezultatele!',
            'wish-button-1': 'Tragere x1',
            'wish-button-10': 'Tragere x10',
            'wish-stat-5': '5-stele',
            'wish-stat-4': '4-stele',
            'wish-stat-3': '3-stele',
            'wish-stat-rate': 'Rata 5*',
            'wish-pity-history': 'Istoric Pity 5-stele',
            'wish-empty-pity': 'Niciun personaj de 5 stele obținut încă.',
            'wish-animation-text': 'WISHING...',
            'characters-title': 'Colecția de Caractere',
            'characters-tab-5': '5-stele',
            'characters-tab-4': '4-stele',
            'characters-empty': 'Niciun personaj de {rarity}-stele obținut încă.',
            'weapons-title': 'Colecția de Arme',
            'weapons-tab-5': '5-stele',
            'weapons-tab-4': '4-stele',
            'weapons-tab-3': '3-stele',
            'weapons-empty': 'Nicio armă de {rarity}-stele obținută încă.',
            'rarity-text': '{rarity}-stele',
            'domain-title': 'Domain - Joc pentru Astrite & Shell Credits',
            'domain-desc': 'Joacă mini-jocul pentru a câștiga Astrite și Shell Credits!',
            'domain-play-btn': 'Joacă!',
        },
        // English
        en: {
            'logo': 'Wuthering Waves Collection',
            'nav-main': 'Main Menu',
            'nav-wish': 'Wish',
            'nav-characters': 'Characters',
            'nav-weapons': 'Weapons',
            'nav-domain': 'Domain',
            'auth-login': 'Login',
            'auth-logout': 'Logout',
            'auth-title': 'Login',
            'auth-login-tab': 'Login',
            'auth-register-tab': 'Register',
            'auth-username': 'Username',
            'auth-password': 'Password',
            'auth-email': 'Email',
            'auth-confirm-password': 'Confirm Password',
            'auth-login-btn': 'Login',
            'auth-register-btn': 'Register',
            'auth-error-login': 'Incorrect username or password.',
            'auth-error-username': 'This username is already in use.',
            'auth-error-email': 'This email is already in use.',
            'auth-error-password': 'Passwords do not match.',
            'auth-success-register': 'Registration successful! You can now login.',
            'main-title': 'Wuthering Waves Collection',
            'main-welcome': 'Welcome to the world of Wuthering Waves!',
            'main-description-1': 'This site is dedicated to collectors and fans of the Wuthering Waves game. Here you can simulate the "wish" system to get characters and weapons, view your collection, and track your progress in the game.',
            'main-description-2': 'Our goal is to provide an experience as close to reality as possible, with customizable drop rates and an attractive design.',
            'main-login-prompt': 'Login to save your progress!',
            'feature-simulator-title': 'Wish Simulator',
            'feature-simulator-desc': 'Simulate the game\'s wish system with customizable rates and pity tracking for 5-star items.',
            'feature-characters-title': 'Character Collection',
            'feature-characters-desc': 'View all the characters you\'ve obtained, organized by rarity.',
            'feature-weapons-title': 'Weapon Collection',
            'feature-weapons-desc': 'Explore your complete arsenal, with all weapons organized by categories.',
            'wish-title': 'Wuthering Waves Wishing Simulator',
            'wish-description': 'Press the buttons to make a pull!',
            'wish-total-wishes': 'Total Pulls: ',
            'wish-pity-5': '5-star Pity: ',
            'wish-pity-4': '4-star Pity: ',
            'wish-filter-all': 'All',
            'wish-filter-5': '5-star',
            'wish-filter-4': '4-star',
            'wish-filter-3': '3-star',
            'wish-prompt': 'Pull to see the results!',
            'wish-button-1': 'Pull x1',
            'wish-button-10': 'Pull x10',
            'wish-stat-5': '5-star',
            'wish-stat-4': '4-star',
            'wish-stat-3': '3-star',
            'wish-stat-rate': '5* Rate',
            'wish-pity-history': '5-star Pity History',
            'wish-empty-pity': 'No 5-star characters obtained yet.',
            'wish-animation-text': 'WISHING...',
            'characters-title': 'Character Collection',
            'characters-tab-5': '5-star',
            'characters-tab-4': '4-star',
            'characters-empty': 'No {rarity}-star characters obtained yet.',
            'weapons-title': 'Weapon Collection',
            'weapons-tab-5': '5-star',
            'weapons-tab-4': '4-star',
            'weapons-tab-3': '3-star',
            'weapons-empty': 'No {rarity}-star weapons obtained yet.',
            'rarity-text': '{rarity}-star',
            'domain-title': 'Domain - Game for Astrite & Shell Credits',
            'domain-desc': 'Play the mini-game to win Astrite or Shell Credits!',
            'domain-play-btn': 'Play',
        }
    };
    
    // Current language
    let currentLanguage = localStorage.getItem('wwLanguage') || 'ro';
    
    // --- User management functions ---
    function getUsers() {
        const users = localStorage.getItem('wwUsers');
        return users ? JSON.parse(users) : [];
    }
    
    function saveUsers(users) {
        localStorage.setItem('wwUsers', JSON.stringify(users));
    }
    
    function saveUserDataToLocalStorage(username, data) {
        localStorage.setItem(`wwUserData_${username}`, JSON.stringify(data));
    }
    
    function getUserData(username) {
        const userData = localStorage.getItem(`wwUserData_${username}`);
        return userData ? JSON.parse(userData) : null;
    }
    
    function saveCurrentUserData() {
        if (!currentUser) return;
        
        const userData = {
            totalWishes,
            pity5Star,
            pity4Star,
            count5Star,
            count4Star,
            count3Star,
            pityHistory,
            obtainedCharacters,
            obtainedWeapons,
            last5StarWish
        };
        
        saveUserDataToLocalStorage(currentUser.username, userData);
    }
    
    // --- Translation functions ---
    function setLanguage(lang) {
        currentLanguage = lang;
        localStorage.setItem('wwLanguage', lang);
        
        // Update language button
        const activeOption = document.querySelector(`.language-option[data-lang="${lang}"]`);
        if (activeOption) {
            const flagSrc = activeOption.querySelector('.flag-icon').src;
            const langText = lang === 'ro' ? 'RO' : 'EN';
            
            currentFlag.src = flagSrc;
            currentLang.textContent = langText;
            
            // Update active option
            languageOptions.forEach(option => {
                option.classList.remove('active');
                if (option.dataset.lang === lang) {
                    option.classList.add('active');
                }
            });
        }
        
        // Update all elements with data-translate attributes
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[lang] && translations[lang][key]) {
                // Check if the element has a placeholder
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translations[lang][key];
                } else {
                    element.textContent = translations[lang][key];
                }
            }
        });
        
        // Update dynamic texts
        updateDynamicTexts();
    }
    
    function updateDynamicTexts() {
        // Update texts that contain variables
        const lang = currentLanguage;
        
        // Update texts for empty collections
        const emptyCharacters = document.querySelector('#characters .empty-collection');
        if (emptyCharacters) {
            const rarity = document.querySelector('#characters .rarity-tab.active').dataset.rarity;
            emptyCharacters.textContent = translations[lang]['characters-empty'].replace('{rarity}', rarity);
        }
        
        const emptyWeapons = document.querySelector('#weapons .empty-collection');
        if (emptyWeapons) {
            const rarity = document.querySelector('#weapons .rarity-tab.active').dataset.rarity;
            emptyWeapons.textContent = translations[lang]['weapons-empty'].replace('{rarity}', rarity);
        }
        
        // Update rarity texts
        document.querySelectorAll('.wish-item .rarity').forEach(element => {
            const raritySpan = element.querySelector('span');
            if (raritySpan) {
                const rarity = raritySpan.dataset.rarity;
                const rarityText = translations[lang]['rarity-text'].replace('{rarity}', rarity);
                element.innerHTML = `${translations[lang]['wish-stat-' + rarity]}: <span class="rarity-text-${rarity}" data-rarity="${rarity}">${rarityText}</span>`;
            }
        });
    }
    
    // --- User state change listener ---
    const firebaseConfig = {
        apiKey: "AIzaSyBIJcN5IUCZSaxO6AWiCYDHB-Kxrk1UEz4",
        authDomain: "wuwaemy.firebaseapp.com",
        projectId: "wuwaemy",
        storageBucket: "wuwaemy.appspot.com ",
        messagingSenderId: "959818398485",
        appId: "1:959818398485:web:2691ee4f42c8336d1d071c",
        measurementId: "G-MSYL1JZ0QG"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    const auth = firebase.auth();
    const db = firebase.firestore();
    
    auth.onAuthStateChanged((user) => {
        if (user) {
            loadUserCurrencies(user);
            // user.displayName, user.email etc.
            // Actualizează UI-ul pentru utilizator logat
            currentUser = {
                username: user.displayName || user.email,
                email: user.email
            };
            usernameSpan.textContent = currentUser.username;
            userInfo.style.display = 'flex';
            authButton.textContent = translations[currentLanguage]['auth-logout'];
            authButton.classList.remove('pulse');
            welcomeMessage.style.display = 'none';
            
            // Load user data
            loadUserData();
            loadAstrite(user); // Load astrite balance
        } else {
            // Actualizează UI-ul pentru utilizator delogat
            userInfo.style.display = 'none';
            authButton.textContent = translations[currentLanguage]['auth-login'];
            authButton.classList.add('pulse');
            welcomeMessage.style.display = 'block';
            
            updateAstriteDisplay(0);
            updateShellCreditsDisplay(0);
        }        
    });
    
    function createUserData(user) {
        return db.collection('users').doc(user.uid).set({
            email: user.email,
            username: user.displayName || "",
            astrite: 100, // astrite inițiale
            shellCredits: 100 // shell credits inițiale
        });
    }
    
    function loadAstrite(user) {
        db.collection('users').doc(user.uid).get().then(doc => {
            if (doc.exists) {
                updateAstriteDisplay(doc.data().astrite);
                updateShellCreditsDisplay(doc.data().shellCredits);
            }
        });
    }
    
    function updateAstriteDisplay(value) {
        document.getElementById('astriteValue').textContent = value;
    }
    
    function updateShellCreditsDisplay(value) {
        document.getElementById('shellCreditsValue').textContent = value;
        // și în caseta de lângă username:
        document.getElementById('profileShellCredits').textContent = value;
    }
    
    function changeAstrite(user, delta) {
        const userRef = db.collection('users').doc(user.uid);
        return db.runTransaction(transaction => {
            return transaction.get(userRef).then(doc => {
                if (!doc.exists) throw "User data not found!";
                let newAstrite = (doc.data().astrite || 0) + delta;
                if (newAstrite < 0) newAstrite = 0;
                transaction.update(userRef, { astrite: newAstrite });
                return newAstrite;
            });
        }).then(newAstrite => {
            updateAstriteDisplay(newAstrite);
            return newAstrite;
        });
    }
    
    function changeShellCredits(user, delta) {
        const userRef = db.collection('users').doc(user.uid);
        return db.runTransaction(transaction => {
            return transaction.get(userRef).then(doc => {
                if (!doc.exists) throw "User data not found!";
                let newShell = (doc.data().shellCredits || 0) + delta;
                if (newShell < 0) newShell = 0;
                transaction.update(userRef, { shellCredits: newShell });
                return newShell;
            });
        }).then(newShell => {
            updateShellCreditsDisplay(newShell);
            return newShell;
        });
    }
    
    function loadUserData() {
        if (!currentUser) return;
        const userData = getUserData(currentUser.username);
        if (userData) {
            totalWishes = userData.totalWishes || 0;
            pity5Star = userData.pity5Star || 0;                    
            pity4Star = userData.pity4Star || 0;
            count5Star = userData.count5Star || 0;
            count4Star = userData.count4Star || 0;
            count3Star = userData.count3Star || 0;
            pityHistory = userData.pityHistory || [];
            obtainedCharacters = userData.obtainedCharacters || [];
            obtainedWeapons = userData.obtainedWeapons || [];
            last5StarWish = userData.last5StarWish || 0;
            
            // Update UI
            totalWishesSpan.textContent = totalWishes;
            pity5StarSpan.textContent = pity5Star;
            pity4StarSpan.textContent = pity4Star;
            stat5Star.textContent = count5Star;
            stat4Star.textContent = count4Star;
            stat3Star.textContent = count3Star;
            
            const rate5Star = totalWishes > 0 ? ((count5Star / totalWishes) * 100).toFixed(2) : 0;
            stat5Rate.textContent = `${rate5Star}%`;
            
            updatePityHistory();
            
            // Update collections when user data is loaded
            updateCharactersCollection();
            updateWeaponsCollection();
        }
    }
    
    // --- Authentication modal handling ---
    authButton.addEventListener('click', () => {
        if (auth.currentUser) {
            auth.signOut();
            // Resetează UI-ul
        } else {
            // Deschide modalul de autentificare
            authModal.classList.add('active');
            loginForm.reset();
            registerForm.reset();
            loginMessage.className = 'form-message';
            registerMessage.className = 'form-message';
        }
    });
    
    closeModal.addEventListener('click', () => {
        authModal.classList.remove('active');
    });
    
    // Switch between login and register tabs
    authTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabName = tab.dataset.tab;
            
            // Update active tab
            authTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            // Update active form
            if (tabName === 'login') {
                loginForm.classList.add('active');
                registerForm.classList.remove('active');
                document.querySelector('.modal-title').textContent = translations[currentLanguage]['auth-title'];
            } else {
                loginForm.classList.remove('active');
                registerForm.classList.add('active');
                document.querySelector('.modal-title').textContent = translations[currentLanguage]['auth-register-tab'];
            }
        });
    });
    
    // Process login form
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value; // Folosește emailul!
        const password = document.getElementById('loginPassword').value;
        auth.signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                authModal.classList.remove('active');
            })
            .catch((error) => {
                loginMessage.textContent = error.message;
                loginMessage.className = 'form-message error';
            });
    });
    
    // Process registration form
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('registerEmail').value;
        const password = document.getElementById('registerPassword').value;
        const username = document.getElementById('registerUsername').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        if (password !== confirmPassword) {
            registerMessage.textContent = "Parolele nu se potrivesc.";
            registerMessage.className = 'form-message error';
            return;
        }
        auth.createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Set displayName (opțional)
                return userCredential.user.updateProfile({ displayName: username })
                .then(() => createUserData(userCredential.user)); // <-- APEL NOU
            })
            .then(() => {
                registerMessage.textContent = "Înregistrare reușită! Acum te poți autentifica.";
                registerMessage.className = 'form-message success';
                registerForm.reset();
                setTimeout(() => { authTabs[0].click(); }, 1500);
            })
            .catch((error) => {
                registerMessage.textContent = error.message;
                registerMessage.className = 'form-message error';
            });
    });
    
    // --- Language selector handling ---
    languageButton.addEventListener('click', () => {
        languageDropdown.classList.toggle('active');
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!languageButton.contains(e.target) && !languageDropdown.contains(e.target)) {
            languageDropdown.classList.remove('active');
        }
    });
    
    // Change language when an option is selected
    languageOptions.forEach(option => {
        option.addEventListener('click', () => {
            const lang = option.dataset.lang;
            setLanguage(lang);
            languageDropdown.classList.remove('active');
        });
    });
    
    // --- Page navigation ---
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetPage = link.getAttribute('data-page');
            
            // Update active links
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            
            // Show target page
            pages.forEach(page => {
                page.classList.remove('active');
                if (page.id === targetPage) {
                    page.classList.add('active');
                }
            });
            
            // Update collections when navigating to respective pages
            if (targetPage === 'characters') {
                updateCharactersCollection();
            } else if (targetPage === 'weapons') {
                updateWeaponsCollection();
            }
        });
    });
    
    // --- Main pull function ---
    function performWish() {
        totalWishes++;
        pity5Star++;
        pity4Star++;
        let resultItem;
        const rand = Math.random();
        
        // Pity System Logic
        if (pity5Star >= PITY_5_STAR_MAX || (rand < RATE_5_STAR && pity5Star < PITY_5_STAR_MAX)) {
            resultItem = getRandomItemByRarity(5);
            pity5Star = 0;
            pity4Star = 0;
            count5Star++;
            createSparkles();
            
            // Calculate pity for this 5-star
            const pityCount = totalWishes - last5StarWish;
            last5StarWish = totalWishes;
            
            // Add to pity history
            pityHistory.push({
                name: resultItem.name,
                pity: pityCount
            });
            updatePityHistory();
        } else if (pity4Star >= PITY_4_STAR_MAX || (rand < 0.051 + RATE_5_STAR && pity4Star < PITY_4_STAR_MAX)) {
            resultItem = getRandomItemByRarity(4);
            pity4Star = 0;
            count4Star++;
        } else {
            resultItem = getRandomItemByRarity(3);
            count3Star++;
        }
        
        // Add to appropriate collection
        if (characters.some(c => c.name === resultItem.name)) {
            if (!obtainedCharacters.some(c => c.name === resultItem.name)) {
                obtainedCharacters.push(resultItem);
            }
        } else {
            if (!obtainedWeapons.some(w => w.name === resultItem.name)) {
                obtainedWeapons.push(resultItem);
            }
        }
        
        // Save user data
        if (currentUser) {
            saveCurrentUserData();
        }
        
        // Update result display
        const itemElement = document.createElement('div');
        itemElement.className = `wish-item rarity-${resultItem.rarity}-item reveal-item-${resultItem.rarity}`; // Add reveal animation class
        itemElement.dataset.rarity = resultItem.rarity;
        
        // Add rarity text in current language
        const rarityText = translations[currentLanguage]['rarity-text'].replace('{rarity}', resultItem.rarity);
        
        itemElement.innerHTML = `
            <img src="${resultItem.image}" alt="${resultItem.name}">
            <div class="details">
                <p class="name">${resultItem.name}</p>
                <p class="rarity">${translations[currentLanguage]['wish-stat-' + resultItem.rarity]}: <span class="rarity-text-${resultItem.rarity}" data-rarity="${resultItem.rarity}">${rarityText}</span></p>
            </div>
        `;
        
        // Add special class for 5-star items
        if (resultItem.rarity === 5) {
            itemElement.classList.add('special-glow');
        }
        
        return { element: itemElement, rarity: resultItem.rarity };
    }
    
    // --- Function to get a random item by rarity ---
    function getRandomItemByRarity(rarity) {
        const filteredItems = allItems.filter(item => item.rarity === rarity);
        const randomIndex = Math.floor(Math.random() * filteredItems.length);
        return filteredItems[randomIndex];
    }
    
    // --- UI update function ---
    function updateUI(results) {
        // This function is now called *after* items are revealed
        // Update counters
        totalWishesSpan.textContent = totalWishes;
        pity5StarSpan.textContent = pity5Star;
        pity4StarSpan.textContent = pity4Star;
        
        // Update stats
        stat5Star.textContent = count5Star;
        if(stat4Star) stat4Star.textContent = count4Star; // Check if element exists
        if(stat3Star) stat3Star.textContent = count3Star; // Check if element exists
        
        // Calculate 5-star rate
        const rate5Star = totalWishes > 0 ? ((count5Star / totalWishes) * 100).toFixed(2) : 0;
        stat5Rate.textContent = `${rate5Star}%`;
    }
    
    // --- Function to update pity history ---
    function updatePityHistory() {
        if (pityHistory.length === 0) {
            pityHistoryList.innerHTML = `<p class="empty-collection" data-translate="wish-empty-pity">${translations[currentLanguage]['wish-empty-pity']}</p>`;
            return;
        }
        
        pityHistoryList.innerHTML = '';
        // Display latest 5-star pulls at the top
        pityHistory.slice().reverse().forEach((item, index) => { 
            const pityItem = document.createElement('div');
            pityItem.className = 'pity-item';
            pityItem.innerHTML = `
                <span class="pity-character">${item.name}</span>
                <span class="pity-count">${item.pity} pity</span>
            `;
            pityHistoryList.appendChild(pityItem);
        });
    }
    
    // --- Function to update character collection ---
    function updateCharactersCollection() {
        const activeRarity = document.querySelector('#characters .rarity-tab.active').getAttribute('data-rarity');
        const filteredCharacters = obtainedCharacters.filter(c => c.rarity == activeRarity);
        
        if (filteredCharacters.length === 0) {
            const emptyText = translations[currentLanguage]['characters-empty'].replace('{rarity}', activeRarity);
            charactersGrid.innerHTML = `<p class="empty-collection">${emptyText}</p>`;
            return;
        }
        
        charactersGrid.innerHTML = '';
        filteredCharacters.forEach(character => {
            const characterElement = document.createElement('div');
            characterElement.className = 'collection-item';
            
            // Add rarity text in current language
            const rarityText = translations[currentLanguage]['rarity-text'].replace('{rarity}', character.rarity);
            
            characterElement.innerHTML = `
                <img src="${character.image}" alt="${character.name}">
                <div class="info">
                    <h3 class="name">${character.name}</h3>
                    <p class="rarity rarity-text-${character.rarity}">${rarityText}</p>
                </div>
            `;
            charactersGrid.appendChild(characterElement);
        });
    }
    
    // --- Function to update weapon collection ---
    function updateWeaponsCollection() {
        const activeRarity = document.querySelector('#weapons .rarity-tab.active').getAttribute('data-rarity');
        const filteredWeapons = obtainedWeapons.filter(w => w.rarity == activeRarity);
        
        if (filteredWeapons.length === 0) {
            const emptyText = translations[currentLanguage]['weapons-empty'].replace('{rarity}', activeRarity);
            weaponsGrid.innerHTML = `<p class="empty-collection">${emptyText}</p>`;
            return;
        }
        
        weaponsGrid.innerHTML = '';
        filteredWeapons.forEach(weapon => {
            const weaponElement = document.createElement('div');
            weaponElement.className = 'collection-item';
            
            // Add rarity text in current language
            const rarityText = translations[currentLanguage]['rarity-text'].replace('{rarity}', weapon.rarity);
            
            weaponElement.innerHTML = `
                <img src="${weapon.image}" alt="${weapon.name}">
                <div class="info">
                    <h3 class="name">${weapon.name}</h3>
                    <p class="rarity rarity-text-${weapon.rarity}">${rarityText}</p>
                </div>
            `;
            weaponsGrid.appendChild(weaponElement);
        });
    }
    
    // --- Function to create sparkle effect ---
    function createSparkles() {
        for (let i = 0; i < 15; i++) {
            setTimeout(() => {
                const sparkle = document.createElement('div');
                sparkle.className = 'sparkle';
                const wishContainer = document.querySelector('.wish-container'); // Get wish container reference
                const rect = wishContainer.getBoundingClientRect();
                sparkle.style.left = `${(Math.random() * rect.width)}px`;
                sparkle.style.top = `${(Math.random() * rect.height)}px`;
                wishContainer.appendChild(sparkle);
                
                setTimeout(() => {
                    sparkle.remove();
                }, 1500);
            }, i * 100);
        }
    }
    
    // --- Function to apply filter ---
    function applyFilter() {
        const items = wishResultsDiv.querySelectorAll('.wish-item');
        
        items.forEach(item => {
            if (currentFilter === 'all') {
                item.style.display = 'flex';
            } else {
                if (item.dataset.rarity === currentFilter) {
                    item.style.display = 'flex';
                } else {
                    item.style.display = 'none';
                }
            }
        });
    }
    
    // --- Event listeners for pull buttons ---
    wish1Button.addEventListener('click', () => handleWish(1));
    wish10Button.addEventListener('click', () => handleWish(10));
    
    async function handleWish(numWishes) {
        wish1Button.disabled = true;
        wish10Button.disabled = true;
        wishResultsDiv.innerHTML = '';
        
        // Determine the highest rarity obtained in this pull set
        let maxRarity = 0;
        let results = [];
        for (let i = 0; i < numWishes; i++) {
            const wishResult = performWish();
            results.push(wishResult);
            if (wishResult.rarity > maxRarity) {
                maxRarity = wishResult.rarity;
            }
        }
        // Play the video corresponding to the highest rarity
        const video = document.getElementById('wishVideo');
        if (videoSources[maxRarity]) {
            video.src = videoSources[maxRarity];
            video.load(); // Load the video
            video.play().catch(error => console.error("Video playback failed:", error)); // Play the video, handle potential errors
            wishAnimationOverlay.classList.add('active');
            
            await new Promise(resolve => {
                const onEnded = () => {
                    video.removeEventListener('ended', onEnded);
                    resolve();
                };
                video.addEventListener('ended', onEnded);
                setTimeout(resolve, animationDuration); // Fallback to animationDuration
            });
        } else {
            console.warn(`No video source defined for rarity: ${maxRarity}`);
            await new Promise(resolve => setTimeout(resolve, animationDuration));
        }
        
        wishAnimationOverlay.classList.remove('active');
        
        // Display all results after the animation
        results.reverse().forEach(res => wishResultsDiv.prepend(res.element));
        updateUI(results);
        
        wish1Button.disabled = false;
        wish10Button.disabled = false;
    }
    
    // --- Event listeners for filter buttons ---
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            currentFilter = button.dataset.filter;
            
            // Update active button
            filterButtons.forEach(btn => {
                if (btn.dataset.filter === currentFilter) {
                    btn.classList.add('active');
                } else {
                    btn.classList.remove('active');
                }
            });
            
            // Apply filter
            applyFilter();
        });
    });
    
    // --- Event listeners for rarity tabs in characters ---
    charactersRarityTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Update active tab
            charactersRarityTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            // Update displayed collection
            updateCharactersCollection();
        });
    });
    
    // --- Event listeners for rarity tabs in weapons ---
    weaponsRarityTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Update active tab
            weaponsRarityTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            // Update displayed collection
            updateWeaponsCollection();
        });
    });
    
    // Initialize language on page load
    setLanguage(currentLanguage);
    
    // Hamburger menu toggle
    const menuToggle = document.getElementById('menuToggle');
    const navLinksList = document.getElementById('navLinks');
    menuToggle.addEventListener('click', () => {
        navLinksList.classList.toggle('open');
    });
    // Close menu on link click
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navLinksList.classList.remove('open');
        });
    });
    
    const usernameProfile = document.getElementById('username');
const profileDropdown = document.getElementById('profileDropdown');

// Toggle dropdown la click pe username
usernameProfile.addEventListener('click', (e) => {
    profileDropdown.style.display = profileDropdown.style.display === 'block' ? 'none' : 'block';
    if (profileDropdown.style.display === 'block') {
        updateProfileDropdown();
    }
    e.stopPropagation();
});

// Închide dropdown dacă dai click în afara lui
document.addEventListener('click', (e) => {
    if (!profileDropdown.contains(e.target) && e.target !== usernameProfile) {
        profileDropdown.style.display = 'none';
    }
});

// Actualizează datele din profil
function updateProfileDropdown() {
    // Astrite
    const astrite = document.getElementById('astriteValue').textContent;
    document.getElementById('profileAstrite').textContent = astrite;

    // Caractere
    const char5 = obtainedCharacters.filter(c => c.rarity == 5).length;
    const char4 = obtainedCharacters.filter(c => c.rarity == 4).length;
    document.getElementById('profileChar5').textContent = char5;
    document.getElementById('profileChar4').textContent = char4;

    // Arme
    const weap5 = obtainedWeapons.filter(w => w.rarity == 5).length;
    const weap4 = obtainedWeapons.filter(w => w.rarity == 4).length;
    const weap3 = obtainedWeapons.filter(w => w.rarity == 3).length;
    document.getElementById('profileWeap5').textContent = weap5;
    document.getElementById('profileWeap4').textContent = weap4;
    document.getElementById('profileWeap3').textContent = weap3;
}
});