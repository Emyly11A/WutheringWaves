document.addEventListener('DOMContentLoaded', () => {
    // Game data
   const characters = [
        // 5-star
        {"name": "Aalto", "rarity": 4, "element": "Aero", "img": "poze charactere/char 4/Aalto.png" },
        {"name": "Aemeath", "rarity": 5, "element": "Fusion", "img": "poze charactere/char 5/Aemeath.png" },
        {"name": "Augusta", "rarity": 5, "element": "Electro", "img": "poze charactere/char 5/Augusta.png" },
        {"name": "Baizhi", "rarity": 4, "element": "Glacio", "img": "poze charactere/char 4/Baizhi.png" },
        {"name": "Brant", "rarity": 5, "element": "Fusion", "img": "poze charactere/char 5/Brant.png" },
        {"name": "Buling", "rarity": 4, "element": "Electro", "img": "poze charactere/char 4/Buling.png" },
        {"name": "Calcharo", "rarity": 5, "element": "Electro", "img": "poze charactere/char 5/Calcharo.png" },
        {"name": "Camellya", "rarity": 5, "element": "Havoc", "img": "poze charactere/char 5/Camellya.png" },
        {"name": "Cantarella", "rarity": 5, "element": "Havoc", "img": "poze charactere/char 5/Cantarella.png" },
        {"name": "Carlotta", "rarity": 5, "element": "Glacio", "img": "poze charactere/char 5/Carlotta.png" },
        {"name": "Cartethyia", "rarity": 5, "element": "Aero", "img": "poze charactere/char 5/Cartethyia.png" },
        {"name": "Changli", "rarity": 5, "element": "Fusion", "img": "poze charactere/char 5/Changli.png" },
        {"name": "Chisa", "rarity": 5, "element": "Havoc", "img": "poze charactere/char 5/Chisa.png" },
        {"name": "Chixia", "rarity": 4, "element": "Fusion", "img": "poze charactere/char 4/Chixia.png" },
        {"name": "Ciaccona", "rarity": 5, "element": "Aero", "img": "poze charactere/char 5/Ciaccona.png" },
        {"name": "Danjin", "rarity": 4, "element": "Havoc", "img": "poze charactere/char 4/Danjin.png" },
        {"name": "Denia", "rarity": 5, "element": "Fusion", "img": "poze charactere/char 5/Denia.png" },
        {"name": "Encore", "rarity": 5, "element": "Fusion",  "img": "poze charactere/char 5/Encore.png" },
        {"name": "Galbrena", "rarity": 5, "element": "Fusion", "img": "poze charactere/char 5/Galbrena.png" },
        {"name": "Hiyuki", "rarity": 5, "element": "Glacio", "img": "poze charactere/char 5/Hiyuki.png" },
        {"name": "Iuno", "rarity": 5, "element": "Aero", "img": "poze charactere/char 5/Iuno.png" },
        {"name": "Jianxin", "rarity": 5, "element": "Aero", "img": "poze charactere/char 5/Jianxin.png" },
        {"name": "Jinshi", "rarity": 5, "element": "Spectro", "img": "poze charactere/char 5/Jinshi.png" },
        {"name": "Jiyan", "rarity": 5, "element": "Aero", "img": "poze charactere/char 5/Jiyan.png" },
        {"name": "Lingyang", "rarity": 5, "element": "Glacio", "img": "poze charactere/char 5/Lingyang.png" },
        {"name": "Lucilla", "rarity": 5, "element": "Glacio", "img": "poze charactere/char 5/Lucilla.png" },
        {"name": "Lucy", "rarity": 5, "element": "Spectro", "img": "poze charactere/char 5/Lucy.png" },
        {"name": "Lumi", "rarity": 4 , "element": "Electro", "img": "poze charactere/char 4/Lumi.png" },
        {"name": "Lupa", "rarity": 5, "element": "Fusion", "img": "poze charactere/char 5/Lupa.png" },
        {"name": "Luuk Hersen", "rarity": 5, "element": "Spectro", "img": "poze charactere/char 5/Luuk.png" },
        {"name": "Lynae", "rarity": 5, "element": "Spectro", "img": "poze charactere/char 5/Lynae.png" },
        {"name": "Mornye", "rarity": 5, "element": "Fusion", "img": "poze charactere/char 5/Mornye.png" },
        {"name": "Mortefi", "rarity": 4, "element": "Fusion", "img": "poze charactere/char 4/Mortefi.png" },
        {"name": "Phoebe", "rarity": 5, "element": "Spectro", "img": "poze charactere/char 5/Phoebe.png" },
        {"name": "Phrolova", "rarity": 5, "element": "Havoc", "img": "poze charactere/char 5/Phrolova.png" },
        {"name": "Qiuyuan", "rarity": 5, "element": "Aero", "img": "poze charactere/char 5/Qiuyuan.png" },
        {"name": "Rebecca", "rarity": 5, "element": "Electro", "img": "poze charactere/char 5/Rebecca.png" },
        {"name": "Roccia", "rarity": 5, "element": "Havoc", "img": "poze charactere/char 5/Roccia.png" },
        {"name": "Sanhua", "rarity": 4, "element": "Glacio", "img": "poze charactere/char 4/Sanhua.png" },
        {"name": "Shorekeeper", "rarity": 5, "element": "Spectro", "img": "poze charactere/char 5/Shorekeeper.png" },
        {"name": "Sigrika", "rarity": 5, "element": "Aero", "img": "poze charactere/char 5/Sigrika.png" },
        {"name": "Suisui", "rarity": 5, "element": "Glacio", "img": "poze charactere/char 5/Suisui.png" },
        {"name": "Taoqi", "rarity": 4, "element": "Havoc", "img": "poze charactere/char 4/Taoqi.png" },
        {"name": "Verina", "rarity": 5, "element": "Spectro", "img": "poze charactere/char 5/Verina.png" },
        {"name": "Xiangli Yao", "rarity": 5, "element": "Electro", "img": "poze charactere/char 5/Xiangli Yao.png" },
        {"name": "Yangyang", "rarity": 4, "element": "Aero", "img": "poze charactere/char 4/Yangyang.png" },
        {"name": "Yangyang: Xuanling", "rarity": 5, "element": "Havoc", "img": "poze charactere/char 5/Yangyang-Xuanling.png" },
        {"name": "Yinlin", "rarity": 5, "element": "Electro", "img": "poze charactere/char 5/Yinlin.png" },
        {"name": "Youhu", "rarity": 4, "element": "Glacio", "img": "poze charactere/char 4/Youhu.png" },
        {"name": "Yuanwu", "rarity": 4, "element": "Electro", "img": "poze charactere/char 4/Yuanwu.png" },
        {"name": "Zani", "rarity": 5, "element": "Spectro", "img": "poze charactere/char 5/Zani.png" },
        {"name": "Zhezhi", "rarity": 5, "element": "Glacio", "img": "poze charactere/char 5/Zhezhi.png" },
    ];
    const weapons = [
        {"name": "Beguiling Melody", "rarity": 3,"img": "poze arme/arme 3/Beguiling Melody.png" },
        {"name": "Broadblade of Night", "rarity": 3,"img": "poze arme/arme 3/Broadblade of Night.png" },
        {"name": "Broadblade of Voyager", "rarity": 3,"img": "poze arme/arme 3/Broadblade of Voyager.png" },
        {"name": "Gauntlets of Night", "rarity": 3,"img": "poze arme/arme 3/Gauntlets of Night.png" },
        {"name": "Gauntlets of Voyager", "rarity": 3,"img": "poze arme/arme 3/Gauntlets of Voyager.png" },
        {"name": "Guardian Broadblade", "rarity": 3,"img": "poze arme/arme 3/Guardian Broadblade.png" },
        {"name": "Guardian Gauntlets", "rarity": 3,"img": "poze arme/arme 3/Guardian Gauntlets.png" },
        {"name": "Guardian Pistols", "rarity": 3,"img": "poze arme/arme 3/Guardian Pistols.png" },
        {"name": "Guardian Rectifier","rarity": 3,"img": "poze arme/arme 3/Guardian Rectifier.png" },
        {"name": "Guardian Sword", "rarity": 3,"img": "poze arme/arme 3/Guardian Sword.png" },
        {"name": "Originite: Type I", "rarity": 3,"img": "poze arme/arme 3/Originite Type I.png" },
        {"name": "Originite: Type II", "rarity": 3,"img": "poze arme/arme 3/Originite Type II.png" },
        {"name": "Originite: Type III", "rarity": 3,"img": "poze arme/arme 3/Originite Type III.png" },
        {"name": "Originite: Type IV", "rarity": 3,"img": "poze arme/arme 3/Originite Type IV.png" },
        {"name": "Originite: Type V", "rarity": 3,"img": "poze arme/arme 3/Originite Type V.png" },
        {"name": "Pistols of Night", "rarity": 3,"img": "poze arme/arme 3/Pistols of Night.png" },
        {"name": "Pistols of Voyager", "rarity": 3,"img": "poze arme/arme 3/Pistols of Voyager.png" },
        {"name": "Rectifier of Night", "rarity": 3,"img": "poze arme/arme 3/Rectifier of Night.png" },
        {"name": "Rectifier of Voyager", "rarity": 3,"img": "poze arme/arme 3/Rectifier of Voyager.png" },
        {"name": "Sword of Night", "rarity": 3,"img": "poze arme/arme 3/Sword of Night.png" },
        {"name": "Sword of Voyager", "rarity": 3,"img": "poze arme/arme 3/Sword of Voyager.png" },

        {"name": "Aether Strike", "rarity": 4,"img": "poze arme/arme 4/Aether Strike.png" },
        {"name": "Amity Accord", "rarity": 4,"img": "poze arme/arme 4/Amity Accord.png" },
        {"name": "Augment","rarity": 4,"img": "poze arme/arme 4/Augment.png" },
        {"name": "Aureate Zenith", "rarity": 4,"img": "poze arme/arme 4/Aureate Zenith.png" },
        {"name": "Autumntrace", "rarity": 4,"img": "poze arme/arme 4/Autumntrace.png" },
        {"name": "Broadblade#41", "rarity": 4,"img": "poze arme/arme 4/Broadblade%2341.png" },
        {"name": "Cadenza", "rarity": 4,"img": "poze arme/arme 4/Cadenza.png" },
        {"name": "Call of the Abyss", "rarity": 4,"img": "poze arme/arme 4/Call of the Abyss.png" },
        {"name": "Celestial Spiral", "rarity": 4,"img": "poze arme/arme 4/Celestial Spiral.png" },
        {"name": "Comet Flare", "rarity": 4,"img": "poze arme/arme 4/Comet Flare.png" },
        {"name": "Commando of Conviction", "rarity": 4,"img": "poze arme/arme 4/Commando of Conviction.png" },
        {"name": "Dauntless Evernight", "rarity": 4,"img": "poze arme/arme 4/Dauntless Evernight.png" },
        {"name": "Discord", "rarity": 4,"img": "poze arme/arme 4/Discord.png" },
        {"name": "Endless Collapse", "rarity": 4,"img": "poze arme/arme 4/Endless Collapse.png" },
        {"name": "Fables of Wisdom", "rarity": 4,"img": "poze arme/arme 4/Fables of Wisdom.png" },
        {"name": "Feather Edge", "rarity": 4,"img": "poze arme/arme 4/Feather Edge.png" },
        {"name": "Fusion Accretion", "rarity": 4,"img": "poze arme/arme 4/Fusion Accretion.png" },
        {"name": "Gauntlets#21D", "rarity": 4,"img": "poze arme/arme 4/Gauntlets%2321D.png" },
        {"name": "Helios Cleaver", "rarity": 4,"img": "poze arme/arme 4/Helios Cleaver.png" },
        {"name": "Hollow Mirage", "rarity": 4,"img": "poze arme/arme 4/Hollow Mirage.png" },
        {"name": "Jinzhou Keeper", "rarity": 4,"img": "poze arme/arme 4/Jinzhou Keeper.png" },
        {"name": "Legend of Drunken Hero", "rarity": 4,"img": "poze arme/arme 4/Legend of Drunken Hero.png" },
        {"name": "Lumingloss", "rarity": 4,"img": "poze arme/arme 4/Lumingloss.png" },
        {"name": "Lunar Cutter", "rarity": 4,"img": "poze arme/arme 4/Lunar Cutter.png" },
        {"name": "Marcato", "rarity": 4,"img": "poze arme/arme 4/Marcato.png" },
        {"name": "Meditations on Mercy", "rarity": 4,"img": "poze arme/arme 4/Meditations on Mercy.png" },
        {"name": "Novaburst", "rarity": 4,"img": "poze arme/arme 4/Novaburst.png" },
        {"name": "Ocean's Gift", "rarity": 4,"img": "poze arme/arme 4/Ocean's Gift.png" },
        {"name": "Overture", "rarity": 4,"img": "poze arme/arme 4/Oveture.png" },
        {"name": "Pistols#26", "rarity": 4,"img": "poze arme/arme 4/Pistols%2326.png" },
        {"name": "Radiant Dawn", "rarity": 4,"img": "poze arme/arme 4/Radiant Dawn.png" },
        {"name": "Rectifier#25", "rarity": 4,"img": "poze arme/arme 4/Rectifier%2325.png" },
        {"name": "Relativistic Jet", "rarity": 4, "img": "poze arme/arme 4/Relativistic Jet.png" },
        {"name": "Romance in Farewell", "rarity": 4,"img": "poze arme/arme 4/Romance in Farewell.png" },
        {"name": "Solar Flame", "rarity": 4,"img": "poze arme/arme 4/Solar Flame.png" },
        {"name": "Somnoire Anchor", "rarity": 4,"img": "poze arme/arme 4/Somnoire Anchor.png" },
        {"name": "Stonard", "rarity": 4,"img": "poze arme/arme 4/Stonard.png" },
        {"name": "Sword#18", "rarity": 4,"img": "poze arme/arme 4/Sword%2318.png" },
        {"name": "Thunderbolt", "rarity": 4,"img": "poze arme/arme 4/Thunderbolt.png" },
        {"name": "Undying Flame", "rarity": 4, "img": "poze arme/arme 4/Undying Flame.png" },
        {"name": "Variation", "rarity": 4,"img": "poze arme/arme 4/Variation.png" },
        {"name": "Waltz in Masquerade", "rarity": 4,"img": "poze arme/arme 4/Waltz in Masquerade.png" },
        {"name": "Waning Redshift", "rarity": 4,"img": "poze arme/arme 4/Waning Redshift.png" },

        {"name": "Abyss Surges", "rarity": 5,"img": "poze arme/arme 5/Abyss Surges.png" },
        {"name": "Ages of Harvest", "rarity": 5,"img": "poze arme/arme 5/Ages of Harvest.png" },
        {"name": "Azure Oath", "rarity": 5,"img": "poze arme/arme 5/Azure Oath.png" },
        {"name": "Blazing Brilliance", "rarity": 5,"img": "poze arme/arme 5/Blazing Brilliance.png" },
        {"name": "Blazing Justice", "rarity": 5,"img": "poze arme/arme 5/Blazing Justice.png" },
        {"name": "Bloodpact's Pledge", "rarity": 5,"img": "poze arme/arme 5/Bloodpact's Pledge.png" },
        {"name": "Boson Astrolabe", "rarity": 5,"img": "poze arme/arme 5/Boson Astrolabe.png" },
        {"name": "Cosmic Ripples", "rarity": 5,"img": "poze arme/arme 5/Cosmic Ripples.png" },
        {"name": "Daybreaker's Spine", "rarity": 5,"img": "poze arme/arme 5/Daybreaker's spine.png" },
        {"name": "Defier's Thorn", "rarity": 5,"img": "poze arme/arme 5/Defier's Thorn.png" },
        {"name": "Emerald of Genesis", "rarity": 5,"img": "poze arme/arme 5/Emerald of Genesis.png" },
        {"name": "Emerald Sentence", "rarity": 5,"img": "poze arme/arme 5/Emerald Sentence.png" },
        {"name": "Everbright Polestar", "rarity": 5,"img": "poze arme/arme 5/Everbright Polestar.png" },
        {"name": "Firstlight's Herald", "rarity": 5,"img": "poze arme/arme 5/Firstlight's Herald.png" },
        {"name": "Forged Dwarf Star", "rarity": 5,"img": "poze arme/arme 5/Forged Dwarf Star.png" },
        {"name": "Freeze Frame", "rarity": 5,"img": "poze arme/arme 5/Freeze Frame.png" },
        {"name": "Frostburn", "rarity": 5,"img": "poze arme/arme 5/Frostburn.png" },
        {"name": "Kumokiri", "rarity": 5,"img": "poze arme/arme 5/Kumokiri.png" },
        {"name": "Laser Shearer", "rarity": 5,"img": "poze arme/arme 5/Laser Shearer.png" },
        {"name": "Lethean Elegy", "rarity": 5,"img": "poze arme/arme 5/Lethean Elegy.png" },
        {"name": "Luminous Hymn", "rarity": 5,"img": "poze arme/arme 5/Luminous Hymn.png" },
        {"name": "Lustrous Razor", "rarity": 5,"img": "poze arme/arme 5/Lustrous Razor.png" },
        {"name": "Lux & Umbra", "rarity": 5,"img": "poze arme/arme 5/Lux & Umbra.png" },
        {"name": "Moongazer's Sigil", "rarity": 5,"img": "poze arme/arme 5/Moongazer's Sigil.png" },
        {"name": "Phasic Homogenizer", "rarity": 5,"img": "poze arme/arme 5/Phasic Homogenizer.png" },
        {"name": "Pulsation Bracer", "rarity": 5,"img": "poze arme/arme 5/Pulsation Bracer.png" },
        {"name": "Radiance Cleaver", "rarity": 5,"img": "poze arme/arme 5/Radiance Cleaver.png" },
        {"name": "Red Spring", "rarity": 5,"img": "poze arme/arme 5/Red String.png" },
        {"name": "Rime-Draped Sprouts", "rarity": 5,"img": "poze arme/arme 5/Rime-Draped Sprouts.png" },
        {"name": "Skull Thrasher", "rarity": 5,"img": "poze arme/arme 5/Skull Thrasher.png" },
        {"name": "Solsworn Ciphers", "rarity": 5,"img": "poze arme/arme 5/Solsworn Ciphers.png" },
        {"name": "Spectral Trigger", "rarity": 5,"img": "poze arme/arme 5/Spectral Trigger.png" },
        {"name": "Spectrum Blaster", "rarity": 5,"img": "poze arme/arme 5/Spectrum Blaster.png" },
        {"name": "Starfield Calibrator", "rarity": 5,"img": "poze arme/arme 5/Starfield Calibrator.png" },
        {"name": "Static Mist", "rarity": 5,"img": "poze arme/arme 5/Static Mist.png" },
        {"name": "Stellar Symphony", "rarity": 5,"img": "poze arme/arme 5/Stellar Symphony.png" },
        {"name": "Stringmaster", "rarity": 5,"img": "poze arme/arme 5/Stringmaster.png" },
        {"name": "The Last Dance", "rarity": 5,"img": "poze arme/arme 5/The Last Dance.png" },
        {"name": "Thunderflare Dominion", "rarity": 5,"img": "poze arme/arme 5/Thunderflare Dominion.png" },
        {"name": "Tragicomedy", "rarity": 5,"img": "poze arme/arme 5/Tragicomedy.png" },
        {"name": "Unflickering Valor", "rarity": 5,"img": "poze arme/arme 5/Unflickering Valor.png" },
        {"name": "Verdant Summit", "rarity": 5,"img": "poze arme/arme 5/Verdant Summit.png" },
        {"name": "Verity's Handle", "rarity": 5,"img": "poze arme/arme 5/Verity's Handle.png" },
        {"name": "Whispers of Sirens", "rarity": 5,"img": "poze arme/arme 5/Whispers of Sirens.png" },
        {"name": "Wildfire Mark", "rarity": 5,"img": "poze arme/arme 5/Wildfire Mark.png" },
        {"name": "Woodland Aria", "rarity": 5,"img": "poze arme/arme 5/Woodland Aria.png" },   ];
    
    const allItems = [...characters, ...weapons];
    const weaponTypeGroups = {
        Sword: ["Emerald of Genesis", "Blazing Brilliance", "Red Spring", "Unflickering Valor", "Bloodpact's Pledge", "Defier's Thorn", "Emerald Sentence", "Laser Shearer", "Everbright Polestar", "Frostburn", "Azure Oath", "Lumingloss", "Overture", "Sword#18", "Commando of Conviction", "Lunar Cutter", "Endless Collapse", "Somnoire Anchor", "Fables of Wisdom", "Feather Edge", "Sword of Night", "Originite: Type II", "Sword of Voyager", "Guardian Sword"],
        Broadblade: ["Lustrous Razor", "Verdant Summit", "Ages of Harvest", "Wildfire Mark", "Thunderflare Dominion", "Kumokiri", "Starfield Calibrator", "Radiance Cleaver", "Autumntrace", "Discord", "Broadblade#41", "Dauntless Evernight", "Helios Cleaver", "Waning Redshift", "Meditations on Mercy", "Aureate Zenith", "Broadblade of Night", "Originite: Type I", "Broadblade of Voyager", "Guardian Broadblade", "Beguiling Melody"],
        Pistols: ["Static Mist", "The Last Dance", "Woodland Aria", "Lux & Umbra", "Spectrum Blaster", "Phasic Homogenizer", "Spectral Trigger", "Skull Thrasher", "Thunderbolt", "Cadenza", "Pistols#26", "Undying Flame", "Novaburst", "Relativistic Jet", "Romance in Farewell", "Solar Flame", "Pistols of Night", "Originite: Type III", "Pistols of Voyager", "Guardian Pistols"],
        Gauntlets: ["Abyss Surges", "Verity's Handle", "Tragicomedy", "Blazing Justice", "Moongazer's Sigil", "Pulsation Bracer", "Daybreaker's Spine", "Solsworn Ciphers", "Stonard", "Marcato", "Gauntlets#21D", "Amity Accord", "Hollow Mirage", "Celestial Spiral", "Legend of Drunken Hero", "Aether Strike", "Gauntlets of Night", "Originite: Type IV", "Gauntlets of Voyager", "Guardian Gauntlets"],
        Rectifier: ["Cosmic Ripples", "Stringmaster", "Rime-Draped Sprouts", "Stellar Symphony", "Luminous Hymn", "Whispers of Sirens", "Lethean Elegy", "Boson Astrolabe", "Forged Dwarf Star", "Freeze Frame", "Firstlight's Herald", "Augment", "Variation", "Rectifier#25", "Jinzhou Keeper", "Comet Flare", "Fusion Accretion", "Call of the Abyss", "Waltz in Masquerade", "Ocean's Gift", "Radiant Dawn", "Rectifier of Night", "Originite: Type V", "Rectifier of Voyager", "Guardian Rectifier"]
    };

    function getWeaponType(weapon) {
        return Object.keys(weaponTypeGroups).find(type => weaponTypeGroups[type].includes(weapon.name)) || 'Unknown';
    }
    
    // DOM Elements
    const navLinks = document.querySelectorAll('.nav-link');
    const pages = document.querySelectorAll('.page');
    const shopAstriteAmount = document.getElementById('shopAstriteAmount');
    const shopCostValue = document.getElementById('shopCostValue');
    const shopShellBalance = document.getElementById('shopShellBalance');
    const shopAstriteBalance = document.getElementById('shopAstriteBalance');
    const shopBuyButton = document.getElementById('shopBuyButton');
    const shopMaxButton = document.getElementById('shopMaxButton');
    const shopMessage = document.getElementById('shopMessage');
    const energyValue = document.getElementById('energyValue');
    const energyBar = document.getElementById('energyBar');
    const energyTimer = document.getElementById('energyTimer');
    const domainsEnergyValue = document.getElementById('domainsEnergyValue');
    
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
    const profileDropdownContainer = document.getElementById('profileDropdownContainer');
    const logoutButton = document.getElementById('logoutButton');
    
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
    const freeWishesRemainingSpan = document.getElementById('freeWishesRemaining');
    const wishCostInfo = document.getElementById('wishCostInfo');
    const stat5Star = document.getElementById('stat5Star');
    const stat4Star = document.getElementById('stat4Star');
    const stat3Star = document.getElementById('stat3Star');
    const stat5Rate = document.getElementById('stat5Rate');
    const filterButtons = document.querySelectorAll('.filter-button');
    const pityHistoryList = document.getElementById('pityHistoryList');
    
    // Characters page elements
    const charactersGrid = document.getElementById('charactersGrid');
    const charactersRarityTabs = document.querySelectorAll('#characters .rarity-tab');
    const charactersFilterSelect = document.getElementById('charactersFilter');
    const charactersSortSelect = document.getElementById('charactersSort');
    
    // Weapons page elements
    const weaponsGrid = document.getElementById('weaponsGrid');
    const weaponsRarityTabs = document.querySelectorAll('#weapons .rarity-tab');
    const weaponsFilterSelect = document.getElementById('weaponsFilter');
    const weaponsSortSelect = document.getElementById('weaponsSort');
    
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
    let wishHistory = [];
    let obtainedCharacters = [];
    let obtainedWeapons = [];
    let last5StarWish = 0; // Tracks the total number of pulls at the last 5-star
    const PITY_5_STAR_MAX = 80;
    const PITY_4_STAR_MAX = 10;
    const FREE_WISH_LIMIT = 1000;
    const WISH_ASTRITE_COST = 160;
    const RATE_5_STAR = 0.025; // 2.5% for 5-star
    let shellCredits = 0;
    let astrite = 0;
    let unionExp = 0;
    let claimedUnionLevelRewards = [];
    let profileAvatarName = null;
    let wishExpGranted = 0;
    let totalExpeditionsCompleted = 0;
    let expeditionExpGranted = 0;
    let characterProgress = {};
    let selectedTrainingCharacterName = null;
    let resonancePotions = { basic: 0, medium: 0, advanced: 0, premium: 0 };
    let resonancePotionStarterPackRemoved = true;
    let weaponProgress = {};
    let selectedTrainingWeaponName = null;
    let equippedWeapons = {};
    let energyCores = { basic: 0, medium: 0, advanced: 0, premium: 0 };
    let soldWeaponCopies = {};
    let echoInventory = [];
    let usedHuntingCharacters = [];
    let selectedHuntCharacterName = null;
    let huntingSonataFilter = [];
    let huntingRarityFilter = [];
    let shopEchoSonataFilter = [];
    let shopEchoRarityFilter = [];
    let shopWeaponTypeFilter = 'all';
    let trainingMode = 'character';
    let characterCollectionFilter = 'all';
    let characterCollectionSort = 'level-desc';
    let trainingCharacterFilter = 'all';
    let trainingCharacterSort = 'level-desc';
    let weaponCollectionFilter = 'all';
    let weaponCollectionSort = 'level-desc';
    let trainingWeaponFilter = 'all';
    let trainingWeaponSort = 'level-desc';
    let equipmentWeaponFilter = 'all';

    if (totalWishesSpan) {
        totalWishesSpan.textContent = totalWishes;
    }
    
    // Translations
    const translations = {
        // Romanian
        ro: {
            'logo': 'Wuthering Waves Collection',
            'nav-main': 'Meniu Principal',
            'nav-wish': 'Wish',
            'nav-characters': 'Caractere',
            'nav-weapons': 'Arme',
            'nav-training': 'Antrenament',
            'nav-domain': 'Expediție',
            'nav-domains': 'Domeniu',
            'nav-hunting': 'Vânătoare',
            'hunting-eyebrow': 'EXPEDIȚIE DE VÂNĂTOARE',
            'hunting-title': 'Vânătoare',
            'hunting-description': 'Trimite un personaj într-o vânătoare. Fiecare personaj poate pleca o singură dată.',
            'hunting-select': 'Alege un personaj',
            'hunting-start': 'Trimite la vânătoare',
            'hunting-used': 'Acest personaj a fost deja trimis la vânătoare.',
            'hunting-empty': 'Obține un personaj din Wish pentru a începe vânătoarea.',
            'hunting-login': 'Autentifică-te pentru a porni o vânătoare.',
            'hunting-select-error': 'Alege un personaj disponibil.',
            'hunting-success': '{character} s-a întors cu {shell} Shell Credits și {count} Echoes.',
            'hunting-reward-title': 'Recompense de vânătoare',
            'hunting-reward-shell': 'Shell Credits câștigate',
            'hunting-echoes': 'Echoes obținute',
            'hunting-echoes-description': 'Echoes sunt păstrate pe sonate și rarități, pregătite pentru vânzarea în Shop.',
            'hunting-none': 'Nu ai obținut Echoes încă.',
            'energy-label': 'Energie',
            'energy-full': 'Energie completă',
            'energy-next': 'Următorul punct în {time}',
            'domains-eyebrow': 'DOMENII DE RESURSE',
            'domains-title': 'Domeniu',
            'domains-description': 'Folosește energie pentru a obține resursele necesare dezvoltării. Mini-game-urile vor fi adăugate ulterior.',
            'domains-character-tag': 'DEZVOLTARE CARACTERE',
            'domains-character-title': 'Domeniul Rezonanței',
            'domains-character-description': 'Aici vei obține Resonance Potions pentru creșterea personajelor.',
            'domains-weapon-tag': 'DEZVOLTARE ARME',
            'domains-weapon-title': 'Domeniul Energiei',
            'domains-weapon-description': 'Aici vei obține Energy Cores pentru creșterea armelor.',
            'domains-coming-soon': 'Mini-game în curând',
            'domains-rewards-label': 'RECOMPENSE POSIBILE',
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
            'wish-free-remaining': 'Trageri gratuite rămase: ',
            'wish-cost-info-free': 'Primele 1.000 de trageri sunt gratuite.',
            'wish-cost-info-paid': 'După limita gratuită, o tragere costă 160 Astrite.',
            'wish-error-login': 'Autentifică-te pentru a folosi Astrite la trageri.',
            'wish-error-astrite': 'Nu ai suficiente Astrite pentru aceste trageri.',
            'wish-cost-prefix': 'Cost: ',
            'wish-free': 'Gratuit',
            'wish-error-details': 'Ai nevoie de {cost} Astrite, dar ai doar {balance}.',
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
            'character-filter-label': 'Filtru',
            'character-filter-all': 'Toate caracterele',
            'character-filter-4': 'Caractere de 4 stele',
            'character-filter-5': 'Caractere de 5 stele',
            'character-sort-label': 'Sortează',
            'character-sort-level': 'Nivel: mare la mic',
            'character-sort-alpha': 'Alfabetic',
            'character-filter-empty': 'Niciun personaj nu corespunde filtrului ales.',
            'characters-empty': 'Niciun personaj de {rarity}-stele obținut încă.',
            'weapons-title': 'Colecția de Arme',
            'weapons-tab-5': '5-stele',
            'weapons-tab-4': '4-stele',
            'weapons-tab-3': '3-stele',
            'weapons-filter-all': 'Toate armele',
            'weapons-filter-5': 'Arme de 5 stele',
            'weapons-filter-4': 'Arme de 4 stele',
            'weapons-filter-3': 'Arme de 3 stele',
            'weapons-empty': 'Nicio armă de {rarity}-stele obținută încă.',
            'rarity-text': '{rarity}-stele',
            'profile-eyebrow': 'CONTUL MEU',
            'profile-title': 'Profilul meu',
            'profile-union-exp': 'Union EXP',
            'profile-level': 'Nivel',
            'profile-exp-to-level': 'EXP până la următorul nivel',
            'profile-next-reward': 'Recompensă nivel {level}: +{shell} Shell Credits · +{astrite} Astrite',
            'profile-level-rewards': 'Recompense de nivel',
            'profile-reward-level': 'Nivel {level}',
            'profile-claim': 'Revendică',
            'profile-claimed': 'Revendicată',
            'profile-no-rewards': 'Atinge nivelul 2 pentru prima recompensă.',
            'profile-avatar-title': 'Alege personajul pentru avatar',
            'profile-avatar-empty': 'Obține un personaj din Wish pentru a-l putea alege ca avatar.',
            'profile-resources': 'Resurse',
            'profile-shell': 'Shell Credits',
            'profile-astrite': 'Astrite',
            'profile-collection': 'Colecția mea',
            'profile-char-5': 'Caractere 5★',
            'profile-char-4': 'Caractere 4★',
            'profile-weapon-5': 'Arme 5★',
            'profile-weapon-4': 'Arme 4★',
            'profile-weapon-3': 'Arme 3★',
            'training-eyebrow': 'DEZVOLTARE PERSONAJ',
            'training-title': 'Antrenament',
            'training-description': 'Dezvoltă personajele și armele obținute folosind resursele dedicate.',
            'training-select': 'Alege un personaj',
            'training-level': 'Nivel',
            'training-hp': 'HP',
            'training-dmg': 'DMG',
            'training-max-level': 'Nivel maxim atins',
            'training-potions': 'Resonance Potions',
            'training-use': 'Folosește',
            'training-empty': 'Obține un personaj din Wish pentru a începe antrenamentul.',
            'training-mode-character': 'Caracter',
            'training-mode-weapon': 'Armă',
            'training-weapon-select': 'Alege o armă',
            'training-weapon-empty': 'Obține o armă din Wish pentru a o putea crește.',
            'training-weapon-equipped': 'Armă echipată',
            'training-weapon-none': 'Fără armă echipată',
            'training-weapon-dmg': 'DMG armă',
            'training-total-dmg': 'DMG total',
            'training-base-dmg': 'DMG fără sinergie',
            'training-synergy-dmg': 'DMG cu sinergie',
            'training-synergy-active': 'Sinergie activă',
            'training-synergy-inactive': 'Fără sinergie',
            'training-energy-cores': 'Energy Cores',
            'domain-title': 'Domain - Joc pentru Astrite & Shell Credits',
            'domain-desc': 'Joacă mini-jocul pentru a câștiga Astrite și Shell Credits!',
            'domain-eyebrow': 'EXPEDIȚIE · DOMENIU',
            'domain-time-label': 'TIMP',
            'domain-score-label': 'NUCLEE',
            'domain-game-hint': 'Apasă „Joacă!” pentru a începe.',
            'domain-ready': 'PREGĂTIT PENTRU MISIUNE',
            'domain-challenge-title': 'Provocarea domeniului',
            'domain-challenge-desc': 'Colectează nucleele de rezonanță înainte să dispară pentru a revendica resurse.',
            'domain-rewards-title': 'RECOMPENSE POSIBILE',
            'domain-reward-astrite': 'Astrite',
            'domain-reward-shell': 'Shell Credits',
            'domain-difficulty-label': 'Dificultate:',
            'domain-difficulty-medium': 'Medie',
            'domain-game-limit': 'Jocuri azi: {played}/{limit}',
            'domain-game-cooldown': 'Următoarea expediție este disponibilă în {time}.',
            'domain-game-limit-reached': 'Ai atins limita de 10 expediții pentru astăzi.',
            'domain-game-login': 'Autentifică-te pentru a începe o expediție.',
            'domain-game-active': 'Colectează nucleele înainte să dispară!',
            'domain-game-finished': 'Expediția s-a încheiat: +{shell} Shell Credits și +{astrite} Astrite.',
            'domain-play-btn': 'Joacă!',
            'nav-shop': 'Magazin',
            'shop-eyebrow': 'BURSA DE RESURSE',
            'shop-title': 'Magazin',
            'shop-description': 'Schimbă Shell Credits pe Astrite. 1 Astrite costă 20 Shell Credits.',
            'shop-rate-label': 'Curs valutar',
            'shop-rate-value': '1 Astrite = 20 Shell Credits',
            'shop-buy-amount-label': 'Cantitate Astrite',
            'shop-cost-label': 'Cost',
            'shop-buy-btn': 'Cumpără',
            'shop-buy-max': 'Max',
            'shop-login': 'Autentifică-te pentru a folosi magazinul.',
            'shop-success': 'Ai cumpărat {astrite} Astrite pentru {shell} Shell Credits.',
            'shop-error-funds': 'Nu ai suficiente Shell Credits.',
            'shop-error-amount': 'Introdu o cantitate validă (mai mare ca 0).',
            'shop-balance': 'Sold curent',
            'shop-echoes-title': 'Vinde Echoes',
            'shop-echoes-description': 'Filtrează Echoes după sonată și raritate, apoi vinde-le pentru Shell Credits.',
            'shop-echoes-empty': 'Nu ai Echoes care corespund filtrelor alese.',
            'shop-sell-echo': 'Vinde',
            'shop-filter-all': 'Toate',
            'shop-sell-all-echoes': 'Vinde toate Echoes',
            'shop-weapons-title': 'Vinde arme de 3 stele',
            'shop-weapons-description': 'Alege toate armele sau un tip de armă, apoi vinde armele de 3 stele pentru Shell Credits.',
            'shop-weapons-all': 'Toate tipurile',
            'shop-sell-weapons': 'Vinde armele',
            'shop-weapons-empty': 'Nu ai arme de 3 stele pentru filtrul ales.',
        },
        // English
        en: {
            'logo': 'Wuthering Waves Collection',
            'nav-main': 'Main Menu',
            'nav-wish': 'Wish',
            'nav-characters': 'Characters',
            'nav-weapons': 'Weapons',
            'nav-training': 'Training',
            'nav-domain': 'Expedition',
            'nav-domains': 'Domain',
            'nav-hunting': 'Hunting',
            'hunting-eyebrow': 'HUNTING EXPEDITION',
            'hunting-title': 'Hunting',
            'hunting-description': 'Send a character on a hunt. Each character can only go once.',
            'hunting-select': 'Choose a character',
            'hunting-start': 'Send hunting',
            'hunting-used': 'This character has already been sent hunting.',
            'hunting-empty': 'Get a character from Wish to start hunting.',
            'hunting-login': 'Log in to start a hunt.',
            'hunting-select-error': 'Choose an available character.',
            'hunting-success': '{character} returned with {shell} Shell Credits and {count} Echoes.',
            'hunting-reward-title': 'Hunting rewards',
            'hunting-reward-shell': 'Shell Credits earned',
            'hunting-echoes': 'Echoes obtained',
            'hunting-echoes-description': 'Echoes are stored by sonata and rarity, ready to be sold in the Shop.',
            'hunting-none': 'You have not obtained Echoes yet.',
            'energy-label': 'Energy',
            'energy-full': 'Energy full',
            'energy-next': 'Next point in {time}',
            'domains-eyebrow': 'RESOURCE DOMAINS',
            'domains-title': 'Domain',
            'domains-description': 'Use energy to obtain resources needed for development. Mini-games will be added later.',
            'domains-character-tag': 'CHARACTER DEVELOPMENT',
            'domains-character-title': 'Resonance Domain',
            'domains-character-description': 'You will obtain Resonance Potions to level up characters here.',
            'domains-weapon-tag': 'WEAPON DEVELOPMENT',
            'domains-weapon-title': 'Energy Domain',
            'domains-weapon-description': 'You will obtain Energy Cores to level up weapons here.',
            'domains-coming-soon': 'Mini-game coming soon',
            'domains-rewards-label': 'POSSIBLE REWARDS',
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
            'wish-free-remaining': 'Free pulls remaining: ',
            'wish-cost-info-free': 'Your first 1,000 pulls are free.',
            'wish-cost-info-paid': 'After the free limit, one pull costs 160 Astrite.',
            'wish-error-login': 'Log in to use Astrite for pulls.',
            'wish-error-astrite': 'You do not have enough Astrite for these pulls.',
            'wish-cost-prefix': 'Cost: ',
            'wish-free': 'Free',
            'wish-error-details': 'You need {cost} Astrite, but only have {balance}.',
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
            'character-filter-label': 'Filter',
            'character-filter-all': 'All characters',
            'character-filter-4': '4-star characters',
            'character-filter-5': '5-star characters',
            'character-sort-label': 'Sort',
            'character-sort-level': 'Level: high to low',
            'character-sort-alpha': 'Alphabetical',
            'character-filter-empty': 'No characters match the selected filter.',
            'characters-empty': 'No {rarity}-star characters obtained yet.',
            'weapons-title': 'Weapon Collection',
            'weapons-tab-5': '5-star',
            'weapons-tab-4': '4-star',
            'weapons-tab-3': '3-star',
            'weapons-filter-all': 'All weapons',
            'weapons-filter-5': '5-star weapons',
            'weapons-filter-4': '4-star weapons',
            'weapons-filter-3': '3-star weapons',
            'weapons-empty': 'No {rarity}-star weapons obtained yet.',
            'rarity-text': '{rarity}-star',
            'profile-eyebrow': 'MY ACCOUNT',
            'profile-title': 'My profile',
            'profile-union-exp': 'Union EXP',
            'profile-level': 'Level',
            'profile-exp-to-level': 'EXP to the next level',
            'profile-next-reward': 'Level {level} reward: +{shell} Shell Credits · +{astrite} Astrite',
            'profile-level-rewards': 'Level rewards',
            'profile-reward-level': 'Level {level}',
            'profile-claim': 'Claim',
            'profile-claimed': 'Claimed',
            'profile-no-rewards': 'Reach level 2 for your first reward.',
            'profile-avatar-title': 'Choose a character for your avatar',
            'profile-avatar-empty': 'Get a character from Wish to use it as your avatar.',
            'profile-resources': 'Resources',
            'profile-shell': 'Shell Credits',
            'profile-astrite': 'Astrite',
            'profile-collection': 'My collection',
            'profile-char-5': '5-star characters',
            'profile-char-4': '4-star characters',
            'profile-weapon-5': '5-star weapons',
            'profile-weapon-4': '4-star weapons',
            'profile-weapon-3': '3-star weapons',
            'training-eyebrow': 'CHARACTER DEVELOPMENT',
            'training-title': 'Training',
            'training-description': 'Develop obtained characters and weapons using their dedicated resources.',
            'training-select': 'Choose a character',
            'training-level': 'Level',
            'training-hp': 'HP',
            'training-dmg': 'DMG',
            'training-max-level': 'Maximum level reached',
            'training-potions': 'Resonance Potions',
            'training-use': 'Use',
            'training-empty': 'Get a character from Wish to begin training.',
            'training-mode-character': 'Character',
            'training-mode-weapon': 'Weapon',
            'training-weapon-select': 'Choose a weapon',
            'training-weapon-empty': 'Get a weapon from Wish to level it up.',
            'training-weapon-equipped': 'Equipped weapon',
            'training-weapon-none': 'No weapon equipped',
            'training-weapon-dmg': 'Weapon DMG',
            'training-total-dmg': 'Total DMG',
            'training-base-dmg': 'DMG without synergy',
            'training-synergy-dmg': 'DMG with synergy',
            'training-synergy-active': 'Synergy active',
            'training-synergy-inactive': 'No synergy',
            'training-energy-cores': 'Energy Cores',
            'domain-title': 'Domain - Game for Astrite & Shell Credits',
            'domain-desc': 'Play the mini-game to win Astrite or Shell Credits!',
            'domain-eyebrow': 'EXPEDITION · DOMAIN',
            'domain-time-label': 'TIME',
            'domain-score-label': 'CORES',
            'domain-game-hint': 'Press “Play!” to begin.',
            'domain-ready': 'MISSION READY',
            'domain-challenge-title': 'Domain challenge',
            'domain-challenge-desc': 'Collect resonance cores before they disappear to claim resources.',
            'domain-rewards-title': 'POSSIBLE REWARDS',
            'domain-reward-astrite': 'Astrite',
            'domain-reward-shell': 'Shell Credits',
            'domain-difficulty-label': 'Difficulty:',
            'domain-difficulty-medium': 'Medium',
            'domain-game-limit': 'Games today: {played}/{limit}',
            'domain-game-cooldown': 'Next expedition is available in {time}.',
            'domain-game-limit-reached': 'You have reached today’s limit of 10 expeditions.',
            'domain-game-login': 'Log in to start an expedition.',
            'domain-game-active': 'Collect cores before they disappear!',
            'domain-game-finished': 'Expedition complete: +{shell} Shell Credits and +{astrite} Astrite.',
            'domain-play-btn': 'Play',
            'nav-shop': 'Shop',
            'shop-eyebrow': 'RESOURCE EXCHANGE',
            'shop-title': 'Shop',
            'shop-description': 'Exchange Shell Credits for Astrite. 1 Astrite costs 20 Shell Credits.',
            'shop-rate-label': 'Exchange rate',
            'shop-rate-value': '1 Astrite = 20 Shell Credits',
            'shop-buy-amount-label': 'Astrite amount',
            'shop-cost-label': 'Cost',
            'shop-buy-btn': 'Buy',
            'shop-buy-max': 'Max',
            'shop-login': 'Log in to use the shop.',
            'shop-success': 'You bought {astrite} Astrite for {shell} Shell Credits.',
            'shop-error-funds': 'You do not have enough Shell Credits.',
            'shop-error-amount': 'Enter a valid amount greater than 0.',
            'shop-balance': 'Current balance',
            'shop-echoes-title': 'Sell Echoes',
            'shop-echoes-description': 'Filter Echoes by sonata and rarity, then sell them for Shell Credits.',
            'shop-echoes-empty': 'You have no Echoes matching the selected filters.',
            'shop-sell-echo': 'Sell',
            'shop-filter-all': 'All',
            'shop-sell-all-echoes': 'Sell all Echoes',
            'shop-weapons-title': 'Sell 3-star weapons',
            'shop-weapons-description': 'Choose all weapons or one weapon type, then sell your 3-star weapons for Shell Credits.',
            'shop-weapons-all': 'All types',
            'shop-sell-weapons': 'Sell weapons',
            'shop-weapons-empty': 'You have no 3-star weapons for the selected filter.',
        }
    };
    
    // Current language
    let currentLanguage = localStorage.getItem('wwLanguage') || 'ro';
    const ENERGY_MAX = 300;
    const ENERGY_RECHARGE_MS = 5 * 60 * 1000;
    const ENERGY_STORAGE_KEY = 'wwEnergyState';

    function getEnergyState() {
        const now = Date.now();
        let state;
        try {
            state = JSON.parse(localStorage.getItem(ENERGY_STORAGE_KEY));
        } catch {
            state = null;
        }
        if (!state || !Number.isFinite(state.energy) || !Number.isFinite(state.lastChargeAt)) {
            state = { energy: 0, lastChargeAt: now };
            localStorage.setItem(ENERGY_STORAGE_KEY, JSON.stringify(state));
            return state;
        }
        state.energy = Math.max(0, Math.min(ENERGY_MAX, Math.floor(state.energy)));
        if (state.energy < ENERGY_MAX) {
            const gained = Math.floor(Math.max(0, now - state.lastChargeAt) / ENERGY_RECHARGE_MS);
            if (gained > 0) {
                state.energy = Math.min(ENERGY_MAX, state.energy + gained);
                state.lastChargeAt += gained * ENERGY_RECHARGE_MS;
                if (state.energy === ENERGY_MAX) state.lastChargeAt = now;
                localStorage.setItem(ENERGY_STORAGE_KEY, JSON.stringify(state));
            }
        }
        return state;
    }

    function updateEnergyUI() {
        const state = getEnergyState();
        if (energyValue) energyValue.textContent = state.energy;
        if (domainsEnergyValue) domainsEnergyValue.textContent = state.energy;
        if (energyBar) energyBar.style.width = `${(state.energy / ENERGY_MAX) * 100}%`;
        if (energyTimer) {
            if (state.energy >= ENERGY_MAX) {
                energyTimer.textContent = translations[currentLanguage]['energy-full'];
            } else {
                const remaining = Math.max(0, ENERGY_RECHARGE_MS - (Date.now() - state.lastChargeAt));
                const minutes = Math.floor(remaining / 60000);
                const seconds = Math.floor((remaining % 60000) / 1000);
                const time = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
                energyTimer.textContent = translations[currentLanguage]['energy-next'].replace('{time}', time);
            }
        }
    }

    function spendEnergy(amount) {
        const state = getEnergyState();
        if (!Number.isInteger(amount) || amount <= 0 || state.energy < amount) return false;
        state.energy -= amount;
        state.lastChargeAt = Date.now();
        localStorage.setItem(ENERGY_STORAGE_KEY, JSON.stringify(state));
        updateEnergyUI();
        return true;
    }
    
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
            wishHistory,
            obtainedCharacters,
            obtainedWeapons,
            last5StarWish,
            astrite,
            shellCredits,
            unionExp,
            claimedUnionLevelRewards,
            profileAvatarName,
            wishExpGranted,
            totalExpeditionsCompleted,
            expeditionExpGranted,
            characterProgress,
            selectedTrainingCharacterName,
            resonancePotions,
            resonancePotionStarterPackRemoved,
            weaponProgress,
            selectedTrainingWeaponName,
            equippedWeapons,
            energyCores,
            soldWeaponCopies,
            echoInventory,
            usedHuntingCharacters,
            selectedHuntCharacterName,
            domainProgress
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
            updateCharactersCollection();
        }
        
        const emptyWeapons = document.querySelector('#weapons .empty-collection');
        if (emptyWeapons) {
            updateWeaponsCollection();
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

        if (document.getElementById('domainGameLimit')) {
            updateDomainAvailability();
        }
        if (document.getElementById('charactersGrid')) updateCharactersCollection();
        if (document.getElementById('weaponsGrid')) updateWeaponsCollection();
        if (document.getElementById('trainingContent')) renderTrainingPage();
        if (document.getElementById('profileEmail')) updateProfileDropdown();
        if (document.getElementById('huntingCharacters')) renderHuntingPage();
        updateWishPurchaseUI();
        updateEnergyUI();
    }
    
    // --- User state change listener ---
    function updateAccountUI() {
        const isLoggedIn = Boolean(currentUser);
        if (usernameSpan) usernameSpan.textContent = isLoggedIn ? currentUser.username : '';
        if (profileDropdownContainer) profileDropdownContainer.style.display = isLoggedIn ? 'flex' : 'none';
        if (authButton) {
            authButton.style.display = isLoggedIn ? 'none' : 'block';
            authButton.textContent = translations[currentLanguage][isLoggedIn ? 'auth-logout' : 'auth-login'];
            authButton.classList.toggle('pulse', !isLoggedIn);
        }
        if (logoutButton) logoutButton.style.display = isLoggedIn ? 'block' : 'none';
        if (welcomeMessage) welcomeMessage.style.display = isLoggedIn ? 'none' : 'block';
    }

    function startLocalSession(user) {
        currentUser = { username: user.username, email: user.email };
        localStorage.setItem('wwCurrentUser', JSON.stringify(currentUser));
        loadUserData();
        updateAccountUI();
        updateProfileDropdown();
    }

    function endLocalSession() {
        currentUser = null;
        localStorage.removeItem('wwCurrentUser');
        astrite = 0;
        shellCredits = 0;
        unionExp = 0;
        claimedUnionLevelRewards = [];
        profileAvatarName = null;
        wishExpGranted = 0;
        totalExpeditionsCompleted = 0;
        expeditionExpGranted = 0;
        characterProgress = {};
        selectedTrainingCharacterName = null;
        resonancePotions = { basic: 0, medium: 0, advanced: 0, premium: 0 };
        resonancePotionStarterPackRemoved = true;
        weaponProgress = {};
        selectedTrainingWeaponName = null;
        equippedWeapons = {};
        energyCores = { basic: 0, medium: 0, advanced: 0, premium: 0 };
        soldWeaponCopies = {};
        echoInventory = [];
        usedHuntingCharacters = [];
        selectedHuntCharacterName = null;
        trainingMode = 'character';
        updateAstriteDisplay(0);
        updateShellCreditsDisplay(0);
        updateUnionExpDisplay();
        updateAccountUI();
    }

    function restoreLocalSession() {
        const savedUser = localStorage.getItem('wwCurrentUser');
        if (!savedUser) return endLocalSession();
        try {
            const user = JSON.parse(savedUser);
            const exists = getUsers().some(item => item.email === user.email && item.username === user.username);
            if (exists) startLocalSession(user);
            else endLocalSession();
        } catch {
            endLocalSession();
        }
    }
    
    function createUserData(user) {
        if (getUserData(user.username)) return;
        saveUserDataToLocalStorage(user.username, {
            totalWishes: 0,
            pity5Star: 0,
            pity4Star: 0,
            count5Star: 0,
            count4Star: 0,
            count3Star: 0,
            pityHistory: [],
            wishHistory: [],
            obtainedCharacters: [],
            obtainedWeapons: [],
                last5StarWish: 0,
                astrite: 100,
                shellCredits: 100,
                unionExp: 0,
                claimedUnionLevelRewards: [],
                profileAvatarName: null,
                wishExpGranted: 0,
                totalExpeditionsCompleted: 0,
                expeditionExpGranted: 0,
                characterProgress: {},
                selectedTrainingCharacterName: null,
                resonancePotions: { basic: 0, medium: 0, advanced: 0, premium: 0 },
                resonancePotionStarterPackRemoved: true,
                weaponProgress: {},
                selectedTrainingWeaponName: null,
                equippedWeapons: {},
                energyCores: { basic: 0, medium: 0, advanced: 0, premium: 0 },
                soldWeaponCopies: {},
                echoInventory: [],
                usedHuntingCharacters: [],
                selectedHuntCharacterName: null
        });
    }
    
    function loadUserCurrencies(user) {
        if (!user) return;
        const userData = getUserData(user.username);
        astrite = userData?.astrite || 0;
        shellCredits = userData?.shellCredits || 0;
        updateAstriteDisplay(astrite);
        updateShellCreditsDisplay(shellCredits);
        updateProfileDropdown();
    }
    
    function updateAstriteDisplay(value) {
        document.getElementById('astriteValue').textContent = value;
        updateShopUI();
    }
    
    function updateShellCreditsDisplay(value) {
        document.getElementById('shellCreditsValue').textContent = value;
        // și în caseta de lângă username:
        document.getElementById('profileShellCredits').textContent = value;
        // și în Domain, dacă există
        const domainShell = document.getElementById('shellCreditsValueDomain');
        if(domainShell) domainShell.textContent = value;
        updateShopUI();
    }

    function updateShopUI() {
        const amount = Math.max(0, Math.floor(Number(shopAstriteAmount?.value) || 0));
        if (shopCostValue) shopCostValue.textContent = amount * 20;
        if (shopShellBalance) shopShellBalance.textContent = shellCredits;
        if (shopAstriteBalance) shopAstriteBalance.textContent = astrite;
        renderShopEchoes();
        renderShopWeapons();
    }

    function renderShopEchoes() {
        const inventoryContainer = document.getElementById('shopEchoInventory');
        if (!inventoryContainer) return;
        const sellableEchoes = echoInventory.filter(echo => echo.rarity === 1 || echo.rarity === 3);
        const filteredEchoes = sellableEchoes.filter(echo =>
            (!shopEchoSonataFilter.length || shopEchoSonataFilter.includes(echo.sonata)) &&
            (!shopEchoRarityFilter.length || shopEchoRarityFilter.includes(String(echo.rarity))));
        const totalValue = filteredEchoes.reduce((total, echo) => total + (echo.rarity === 1 ? 100 : 300), 0);
        const allFiltersSelected = !shopEchoSonataFilter.length && !shopEchoRarityFilter.length;
        inventoryContainer.innerHTML = `<div class="hunting-filters shop-echo-filters"><div class="hunting-sonata-filters"><strong class="shop-filter-heading"><span>Sonate</span><button type="button" class="shop-filter-all ${allFiltersSelected ? 'active' : ''}" data-shop-echo-all>${translations[currentLanguage]['shop-filter-all']}</button></strong>${sonataCatalog.map(sonata => `<label title="${sonata}"><input type="checkbox" data-shop-echo-sonata="${sonata}" ${shopEchoSonataFilter.includes(sonata) ? 'checked' : ''}><img src="poze echoes (sonata)/${sonata}/${sonata}.png" alt="${sonata}"></label>`).join('')}</div><div class="hunting-rarity-filters"><strong class="shop-filter-heading">Raritate</strong>${[1, 3].map(rarity => `<label title="Cost ${rarity}"><input type="checkbox" data-shop-echo-rarity="${rarity}" ${shopEchoRarityFilter.includes(String(rarity)) ? 'checked' : ''}><span class="rarity-filter-icon cost-${rarity}">${rarity}</span></label>`).join('')}</div></div><div class="shop-echo-actions"><button type="button" class="wish-button" data-sell-filtered-echoes ${filteredEchoes.length && currentUser ? '' : 'disabled'}>${translations[currentLanguage]['shop-sell-echo']} &middot; +${totalValue} Shell Credits</button>${filteredEchoes.length ? '' : `<p class="empty-collection">${translations[currentLanguage]['shop-echoes-empty']}</p>`}</div>`;
        inventoryContainer.querySelectorAll('[data-shop-echo-sonata]').forEach(input => input.addEventListener('change', () => {
            shopEchoSonataFilter = [...inventoryContainer.querySelectorAll('[data-shop-echo-sonata]:checked')].map(item => item.dataset.shopEchoSonata);
            renderShopEchoes();
        }));
        inventoryContainer.querySelectorAll('[data-shop-echo-rarity]').forEach(input => input.addEventListener('change', () => {
            shopEchoRarityFilter = [...inventoryContainer.querySelectorAll('[data-shop-echo-rarity]:checked')].map(item => item.dataset.shopEchoRarity);
            renderShopEchoes();
        }));
        inventoryContainer.querySelector('[data-shop-echo-all]')?.addEventListener('click', () => {
            shopEchoSonataFilter = [];
            shopEchoRarityFilter = [];
            renderShopEchoes();
        });
        inventoryContainer.querySelector('[data-sell-filtered-echoes]')?.addEventListener('click', () => {
            if (!currentUser || !filteredEchoes.length) return;
            const soldEchoes = new Set(filteredEchoes);
            echoInventory = echoInventory.filter(echo => !soldEchoes.has(echo));
            shellCredits += totalValue;
            updateShellCreditsDisplay(shellCredits);
            saveCurrentUserData();
            updateProfileDropdown();
            renderHuntingPage();
        });
    }

    function renderShopWeapons() {
        const container = document.getElementById('shopWeaponInventory');
        if (!container) return;
        const sellableWeapons = obtainedWeapons.filter(weapon => weapon.rarity === 3);
        const filteredWeapons = sellableWeapons.filter(weapon => shopWeaponTypeFilter === 'all' || getWeaponType(weapon) === shopWeaponTypeFilter);
        const saleValue = filteredWeapons.reduce((total, weapon) => total + getItemCopyCount(weapon.name) * 100, 0);
        container.innerHTML = `<div class="shop-weapon-actions"><select aria-label="Tipul armei" data-shop-weapon-type><option value="all">${translations[currentLanguage]['shop-weapons-all']}</option>${Object.keys(weaponTypeGroups).map(type => `<option value="${type}" ${shopWeaponTypeFilter === type ? 'selected' : ''}>${type}</option>`).join('')}</select><button type="button" class="wish-button" data-sell-3star-weapons ${filteredWeapons.length && currentUser ? '' : 'disabled'}>${translations[currentLanguage]['shop-sell-weapons']} · +${saleValue} Shell Credits</button></div>${filteredWeapons.length ? '' : `<p class="empty-collection">${translations[currentLanguage]['shop-weapons-empty']}</p>`}`;
        container.querySelector('[data-shop-weapon-type]')?.addEventListener('change', event => {
            shopWeaponTypeFilter = event.target.value;
            renderShopWeapons();
        });
        container.querySelector('[data-sell-3star-weapons]')?.addEventListener('click', () => {
            if (!currentUser || !filteredWeapons.length) return;
            const soldNames = new Set(filteredWeapons.map(weapon => weapon.name));
            filteredWeapons.forEach(weapon => {
                soldWeaponCopies[weapon.name] = (soldWeaponCopies[weapon.name] || 0) + getItemCopyCount(weapon.name);
            });
            obtainedWeapons = obtainedWeapons.filter(weapon => !soldNames.has(weapon.name));
            soldNames.forEach(name => {
                delete weaponProgress[name];
                if (selectedTrainingWeaponName === name) selectedTrainingWeaponName = null;
            });
            Object.keys(equippedWeapons).forEach(characterName => {
                if (soldNames.has(equippedWeapons[characterName])) delete equippedWeapons[characterName];
            });
            shellCredits += saleValue;
            updateShellCreditsDisplay(shellCredits);
            saveCurrentUserData();
            updateProfileDropdown();
            if (document.getElementById('weaponsGrid')) updateWeaponsCollection();
            if (document.getElementById('trainingContent')) renderTrainingPage();
        });
    }

    function buyAstriteFromShop() {
        if (!currentUser) {
            shopMessage.textContent = translations[currentLanguage]['shop-login'];
            shopMessage.className = 'shop-message error';
            return;
        }
        const amount = Math.floor(Number(shopAstriteAmount.value));
        if (!Number.isFinite(amount) || amount <= 0) {
            shopMessage.textContent = translations[currentLanguage]['shop-error-amount'];
            shopMessage.className = 'shop-message error';
            return;
        }
        const cost = amount * 20;
        if (shellCredits < cost) {
            shopMessage.textContent = translations[currentLanguage]['shop-error-funds'];
            shopMessage.className = 'shop-message error';
            return;
        }
        shellCredits -= cost;
        astrite += amount;
        updateShellCreditsDisplay(shellCredits);
        updateAstriteDisplay(astrite);
        saveCurrentUserData();
        updateProfileDropdown();
        shopMessage.textContent = translations[currentLanguage]['shop-success'].replace('{astrite}', amount).replace('{shell}', cost);
        shopMessage.className = 'shop-message success';
    }
    
    function changeAstrite(user, delta) {
        if (!user) return 0;
        astrite = Math.max(0, astrite + delta);
        updateAstriteDisplay(astrite);
        saveCurrentUserData();
        updateProfileDropdown();
        return astrite;
    }
    
    function changeShellCredits(user, delta) {
        if (!user) return 0;
        shellCredits = Math.max(0, shellCredits + delta);
        updateShellCreditsDisplay(shellCredits);
        saveCurrentUserData();
        updateProfileDropdown();
        return shellCredits;
    }

    function getUnionLevelInfo(totalExp) {
        let level = 1;
        let expInLevel = totalExp;
        let expRequired = 100;

        while (expInLevel >= expRequired) {
            expInLevel -= expRequired;
            level++;
            expRequired = 100 + (level - 1) * 25;
        }
        return { level, expInLevel, expRequired };
    }

    function getUnionLevelReward(level) {
        return {
            shellCredits: 100 + (level - 2) * 50,
            astrite: 5 + Math.floor((level - 2) / 5)
        };
    }

    function renderUnionLevelRewards() {
        const rewardsList = document.getElementById('unionRewardsList');
        if (!rewardsList) return;

        const currentLevel = getUnionLevelInfo(unionExp).level;
        if (currentLevel < 2) {
            rewardsList.innerHTML = `<p class="empty-collection">${translations[currentLanguage]['profile-no-rewards']}</p>`;
            return;
        }

        rewardsList.innerHTML = '';
        for (let level = 2; level <= currentLevel; level++) {
            const reward = getUnionLevelReward(level);
            const claimed = claimedUnionLevelRewards.includes(level);
            const rewardCard = document.createElement('article');
            rewardCard.className = `union-reward-card${claimed ? ' claimed' : ''}`;
            rewardCard.innerHTML = `
                <div>
                    <strong>${translations[currentLanguage]['profile-reward-level'].replace('{level}', level)}</strong>
                    <p>+${reward.shellCredits} Shell Credits · +${reward.astrite} Astrite</p>
                </div>
                <button class="union-claim-button" type="button" data-level="${level}" ${claimed ? 'disabled' : ''}>${translations[currentLanguage][claimed ? 'profile-claimed' : 'profile-claim']}</button>
            `;
            rewardsList.appendChild(rewardCard);
        }
    }

    function claimUnionLevelReward(level) {
        const currentLevel = getUnionLevelInfo(unionExp).level;
        if (!currentUser || level < 2 || level > currentLevel || claimedUnionLevelRewards.includes(level)) return;

        const reward = getUnionLevelReward(level);
        claimedUnionLevelRewards.push(level);
        shellCredits += reward.shellCredits;
        astrite += reward.astrite;
        updateShellCreditsDisplay(shellCredits);
        updateAstriteDisplay(astrite);
        saveCurrentUserData();
        updateProfileDropdown();
    }

    function updateUnionExpDisplay() {
        const info = getUnionLevelInfo(unionExp);
        const level = document.getElementById('unionLevel');
        const current = document.getElementById('unionExpCurrent');
        const required = document.getElementById('unionExpRequired');
        const bar = document.getElementById('unionExpBar');
        const rewardSummary = document.getElementById('unionRewardSummary');
        const sidebarLevel = document.getElementById('sidebarUnionLevel');
        const sidebarBar = document.getElementById('sidebarUnionExpBar');

        if (level) level.textContent = info.level;
        if (current) current.textContent = info.expInLevel;
        if (required) required.textContent = info.expRequired;
        if (bar) bar.style.width = `${(info.expInLevel / info.expRequired) * 100}%`;
        if (sidebarLevel) sidebarLevel.textContent = info.level;
        if (sidebarBar) sidebarBar.style.width = `${(info.expInLevel / info.expRequired) * 100}%`;
        if (rewardSummary) {
            const reward = getUnionLevelReward(info.level + 1);
            rewardSummary.textContent = translations[currentLanguage]['profile-next-reward']
                .replace('{level}', info.level + 1)
                .replace('{shell}', reward.shellCredits)
                .replace('{astrite}', reward.astrite);
        }
        renderUnionLevelRewards();
    }

    function addUnionExp(amount) {
        if (!currentUser || amount <= 0) return;
        unionExp += amount;
        saveCurrentUserData();
        updateUnionExpDisplay();
        updateProfileDropdown();
    }

    function syncWishExperienceFromHistory() {
        const expectedWishExp = wishHistory.length * 5;
        const missingWishExp = Math.max(0, expectedWishExp - wishExpGranted);
        if (missingWishExp === 0) return;

        wishExpGranted += missingWishExp;
        unionExp += missingWishExp;
        saveCurrentUserData();
        updateUnionExpDisplay();
    }

    function syncExpeditionExperience() {
        const expectedExpeditionExp = totalExpeditionsCompleted * 25;
        const missingExpeditionExp = Math.max(0, expectedExpeditionExp - expeditionExpGranted);
        if (missingExpeditionExp === 0) return;

        expeditionExpGranted += missingExpeditionExp;
        unionExp += missingExpeditionExp;
        saveCurrentUserData();
        updateUnionExpDisplay();
    }

    document.getElementById('unionRewardsList')?.addEventListener('click', (event) => {
        const claimButton = event.target.closest('.union-claim-button');
        if (!claimButton) return;
        claimUnionLevelReward(Number(claimButton.dataset.level));
    });

    document.getElementById('unionRewardsToggle')?.addEventListener('click', (event) => {
        const section = event.currentTarget.closest('.union-rewards-section');
        const isOpen = section.classList.toggle('is-open');
        event.currentTarget.setAttribute('aria-expanded', String(isOpen));
        document.getElementById('unionRewardsList').setAttribute('aria-hidden', String(!isOpen));
    });
    
    function syncCountersFromHistory() {
        totalWishes = wishHistory.length;
        pity5Star = 0;
        pity4Star = 0;
        count5Star = 0;
        count4Star = 0;
        count3Star = 0;
        pityHistory = [];
        last5StarWish = 0;

        wishHistory.forEach((item, index) => {
            if (item.rarity === 5) {
                count5Star++;
                const pityCount = index + 1 - last5StarWish;
                pityHistory.push({ name: item.name, pity: pityCount });
                last5StarWish = index + 1;
                pity5Star = 0;
                pity4Star = 0;
            } else if (item.rarity === 4) {
                count4Star++;
                pity4Star = 0;
                pity5Star++;
            } else {
                count3Star++;
                pity5Star++;
                pity4Star++;
            }
        });

        const rate5Star = totalWishes > 0 ? ((count5Star / totalWishes) * 100).toFixed(2) : 0;
        stat5Rate.textContent = `${rate5Star}%`;
        if (totalWishesSpan) {
            totalWishesSpan.textContent = totalWishes;
        }
        updateWishPurchaseUI();
        stat5Star.textContent = count5Star;
        stat4Star.textContent = count4Star;
        stat3Star.textContent = count3Star;
    }

    function loadUserData() {
        if (!currentUser) return;
        const userData = getUserData(currentUser.username);
        if (userData) {
            let needsPotionInventoryResetSave = false;
            let needsWeaponNameMigrationSave = false;
            totalWishes = userData.totalWishes || 0;
            pity5Star = userData.pity5Star || 0;                    
            pity4Star = userData.pity4Star || 0;
            count5Star = userData.count5Star || 0;
            count4Star = userData.count4Star || 0;
            count3Star = userData.count3Star || 0;
            pityHistory = userData.pityHistory || [];
            wishHistory = (userData.wishHistory || userData.wishResults || []).map(item => item.name === 'Red String' ? { ...item, name: 'Red Spring' } : item);
            obtainedCharacters = (userData.obtainedCharacters || []).map(character => {
                const catalogCharacter = characters.find(item => item.name === character.name);
                return {
                    ...character,
                    rarity: character.rarity ?? catalogCharacter?.rarity,
                    img: character.img || catalogCharacter?.img,
                    element: character.element || catalogCharacter?.element
                };
            });
            obtainedWeapons = (userData.obtainedWeapons || []).map(weapon => weapon.name === 'Red String' ? { ...weapon, name: 'Red Spring' } : weapon);
            last5StarWish = userData.last5StarWish || 0;
            astrite = userData.astrite || 0;
            shellCredits = userData.shellCredits || 0;
            unionExp = userData.unionExp || 0;
            claimedUnionLevelRewards = userData.claimedUnionLevelRewards || [];
            profileAvatarName = userData.profileAvatarName || null;
            wishExpGranted = userData.wishExpGranted || 0;
            domainProgress = userData.domainProgress || createEmptyDomainProgress();
            totalExpeditionsCompleted = userData.totalExpeditionsCompleted ?? domainProgress.gamesPlayed ?? 0;
            expeditionExpGranted = userData.expeditionExpGranted || 0;
            characterProgress = userData.characterProgress || {};
            selectedTrainingCharacterName = userData.selectedTrainingCharacterName || null;
            resonancePotionStarterPackRemoved = userData.resonancePotionStarterPackRemoved === true;
            resonancePotions = userData.resonancePotions || { basic: 0, medium: 0, advanced: 0, premium: 0 };
            weaponProgress = userData.weaponProgress || {};
            selectedTrainingWeaponName = userData.selectedTrainingWeaponName || null;
            equippedWeapons = userData.equippedWeapons || {};
            energyCores = userData.energyCores || { basic: 0, medium: 0, advanced: 0, premium: 0 };
            soldWeaponCopies = userData.soldWeaponCopies || {};
            echoInventory = userData.echoInventory || [];
            usedHuntingCharacters = userData.usedHuntingCharacters || [];
            selectedHuntCharacterName = userData.selectedHuntCharacterName || null;
            if (weaponProgress['Red String']) {
                weaponProgress['Red Spring'] = weaponProgress['Red Spring'] || weaponProgress['Red String'];
                delete weaponProgress['Red String'];
                needsWeaponNameMigrationSave = true;
            }
            if (selectedTrainingWeaponName === 'Red String') {
                selectedTrainingWeaponName = 'Red Spring';
                needsWeaponNameMigrationSave = true;
            }
            Object.keys(equippedWeapons).forEach(characterName => {
                if (equippedWeapons[characterName] === 'Red String') {
                    equippedWeapons[characterName] = 'Red Spring';
                    needsWeaponNameMigrationSave = true;
                }
            });
            if (wishHistory.some(item => item.name === 'Red Spring') || obtainedWeapons.some(weapon => weapon.name === 'Red Spring')) {
                needsWeaponNameMigrationSave = needsWeaponNameMigrationSave || (userData.wishHistory || userData.wishResults || []).some(item => item.name === 'Red String') || (userData.obtainedWeapons || []).some(weapon => weapon.name === 'Red String');
            }
            if (!resonancePotionStarterPackRemoved) {
                resonancePotions = { basic: 0, medium: 0, advanced: 0, premium: 0 };
                resonancePotionStarterPackRemoved = true;
                needsPotionInventoryResetSave = true;
            }
            syncWishExperienceFromHistory();
            syncExpeditionExperience();
            
            syncCountersFromHistory();
            updatePityHistory();
            renderWishHistory();
            updateAstriteDisplay(astrite);
            updateShellCreditsDisplay(shellCredits);
            
            // Update collections when user data is loaded
            updateCharactersCollection();
            updateWeaponsCollection();
            updateProfileDropdown();
            updateDomainAvailability();
            if (domainProgress.lastRoundCompletedAt + DOMAIN_COOLDOWN_MS > Date.now()) {
                startDomainCooldownTicker();
            }
            if (needsPotionInventoryResetSave || needsWeaponNameMigrationSave) saveCurrentUserData();
        }
    }
    
    // --- Character training ---
    const CHARACTER_MAX_LEVEL = 100;
    const potionDefinitions = {
        basic: { name: 'Basic Resonance Potion', exp: 100, image: 'Extra/Basic%20Resonance%20Potion.png' },
        medium: { name: 'Medium Resonance Potion', exp: 500, image: 'Extra/Medium%20Resonance%20Potion.png' },
        advanced: { name: 'Advanced Resonance Potion', exp: 2500, image: 'Extra/Advanced%20Resonance%20Potion.png' },
        premium: { name: 'Premium Resonance Potion', exp: 10000, image: 'Extra/Premium%20Resonance%20Potion.png' }
    };
    const WEAPON_MAX_LEVEL = 100;
    const energyCoreDefinitions = {
        basic: { name: 'Basic Energy Core', exp: 100, image: 'Extra/Basic%20Energy%20Core.png' },
        medium: { name: 'Medium Energy Core', exp: 500, image: 'Extra/Medium%20Energy%20Core.png' },
        advanced: { name: 'Advanced Energy Core', exp: 2500, image: 'Extra/Advanced%20Energy%20Core.png' },
        premium: { name: 'Premium Energy Core', exp: 10000, image: 'Extra/Premium%20Energy%20Core.png' }
    };
    const weaponSynergies = {
        'Lingyang': 'Abyss Surges', 'Zhezhi': 'Rime-Draped Sprouts', 'Carlotta': 'The Last Dance',
        'Lucilla': 'Freeze Frame', 'Hiyuki': 'Frostburn', 'Suisui': "Firstlight's Herald",
        'Encore': 'Cosmic Ripples', 'Changli': 'Blazing Brilliance', 'Brant': 'Unflickering Valor',
        'Lupa': 'Wildfire Mark', 'Galbrena': 'Lux & Umbra', 'Mornye': 'Starfield Calibrator',
        'Aemeath': 'Everbright Polestar', 'Denia': 'Forged Dwarf Star', 'Calcharo': 'Lustrous Razor',
        'Yinlin': 'Stringmaster', 'Xiangli Yao': "Verity's Handle", 'Augusta': 'Thunderflare Dominion',
        'Rebecca': 'Skull Thrasher', 'Jiyan': 'Verdant Summit', 'Jianxin': 'Abyss Surges',
        'Ciaccona': 'Woodland Aria', 'Cartethyia': "Defier's Thorn", 'Iuno': "Moongazer's Sigil",
        'Qiuyuan': 'Emerald Sentence', 'Sigrika': 'Solsworn Ciphers', 'Verina': 'Cosmic Ripples',
        'Jinshi': 'Ages of Harvest', 'Shorekeeper': 'Stellar Symphony', 'Phoebe': 'Luminous Hymn',
        'Zani': 'Blazing Justice', 'Lynae': 'Spectrum Blaster', 'Luuk Hersen': "Daybreaker's Spine",
        'Lucy': 'Spectral Trigger', 'Camellya': 'Red Spring', 'Roccia': 'Tragicomedy',
        'Cantarella': 'Whispers of Sirens', 'Phrolova': 'Lethean Elegy', 'Chisa': 'Kumokiri',
        'Yangyang: Xuanling': 'Azure Oath'
    };

    function getCharacterTrainingState(characterName) {
        if (!characterProgress[characterName]) {
            characterProgress[characterName] = { level: 1, exp: 0 };
        }
        return characterProgress[characterName];
    }

    function getCharacterLevelInfo(state) {
        const expRequired = 100 + (state.level - 1) * 50;
        return { expRequired, expInLevel: state.exp };
    }

    function getTrainingCharacterImage(character) {
        const specialFileNames = {
            'Jinshi': 'Jinhsi',
            'Luuk Hersen': 'Luuk',
            'Yangyang: Xuanling': 'Yangyang-Xuanling'
        };
        const fileName = specialFileNames[character.name] || character.name;
        return `poze charactere/char ${character.rarity} full/${fileName}.png`;
    }

    function getTrainingWeaponImage(weapon) {
        return `poze%20arme/arme%20${weapon.rarity}%20full/${encodeURIComponent(weapon.name)}.png`;
    }

    function getWeaponTrainingState(weaponName) {
        if (!weaponProgress[weaponName]) weaponProgress[weaponName] = { level: 1, exp: 0 };
        return weaponProgress[weaponName];
    }

    function getWeaponDamage(weaponName, characterName = null) {
        if (!weaponName) return { base: 0, synergy: 0, active: 0, hasSynergy: false };
        const level = getWeaponTrainingState(weaponName).level;
        const base = 50 + (level - 1) * 2;
        const synergy = 100 + (level - 1) * 5;
        const hasSynergy = Boolean(characterName && weaponSynergies[characterName] === weaponName);
        return { base, synergy, active: hasSynergy ? synergy : base, hasSynergy };
    }

    function getTrainingModeMarkup() {
        return `<div class="training-mode-switch">
            <button type="button" data-training-mode="character" class="${trainingMode === 'character' ? 'active' : ''}">${translations[currentLanguage]['training-mode-character']}</button>
            <button type="button" data-training-mode="weapon" class="${trainingMode === 'weapon' ? 'active' : ''}">${translations[currentLanguage]['training-mode-weapon']}</button>
        </div>`;
    }

    function bindTrainingModeControls(container) {
        container.querySelectorAll('[data-training-mode]').forEach(button => {
            button.addEventListener('click', () => {
                trainingMode = button.dataset.trainingMode;
                renderTrainingPage();
            });
        });
    }

    function renderTrainingPage() {
        if (trainingMode === 'weapon') return renderWeaponTrainingPage();
        renderCharacterTrainingPage();
    }

    function getCharacterElement(character) {
        return character.element || characters.find(item => item.name === character.name)?.element || null;
    }

    function getCharacterElementIconMarkup(character) {
        const element = getCharacterElement(character);
        return element ? `<img class="character-element-icon" src="poze elemente/${element.toLowerCase()}.png" alt="${element}">` : '';
    }

    function getFilteredAndSortedCharacters(characterList, filter, sort) {
        return characterList
            .filter(character => filter === 'all' || (filter.startsWith('rarity-')
                ? character.rarity === Number(filter.replace('rarity-', ''))
                : getCharacterElement(character) === filter))
            .sort((first, second) => {
                if (sort === 'alphabetical') return first.name.localeCompare(second.name);
                const firstLevel = characterProgress[first.name]?.level || 1;
                const secondLevel = characterProgress[second.name]?.level || 1;
                return secondLevel - firstLevel || first.name.localeCompare(second.name);
            });
    }

    function getCharacterControlsMarkup(filterId, sortId, filter, sort) {
        const option = (value, label) => `<option value="${value}"${filter === value ? ' selected' : ''}>${label}</option>`;
        const sortOption = (value, label) => `<option value="${value}"${sort === value ? ' selected' : ''}>${label}</option>`;
        return `
            <div class="character-controls">
                <label><span>${translations[currentLanguage]['character-filter-label']}</span>
                    <select id="${filterId}">
                        ${option('all', translations[currentLanguage]['character-filter-all'])}
                        ${option('rarity-4', translations[currentLanguage]['character-filter-4'])}
                        ${option('rarity-5', translations[currentLanguage]['character-filter-5'])}
                        ${option('Aero', 'Aero')}${option('Spectro', 'Spectro')}${option('Electro', 'Electro')}
                        ${option('Havoc', 'Havoc')}${option('Fusion', 'Fusion')}${option('Glacio', 'Glacio')}
                    </select>
                </label>
                <label><span>${translations[currentLanguage]['character-sort-label']}</span>
                    <select id="${sortId}">
                        ${sortOption('level-desc', translations[currentLanguage]['character-sort-level'])}
                        ${sortOption('alphabetical', translations[currentLanguage]['character-sort-alpha'])}
                    </select>
                </label>
            </div>`;
    }

    function getFilteredAndSortedWeapons(weaponList, filter, sort = 'alphabetical') {
        return weaponList
            .filter(weapon => filter === 'all' || (filter.startsWith('rarity-')
                ? weapon.rarity === Number(filter.replace('rarity-', ''))
                : getWeaponType(weapon) === filter))
            .sort((first, second) => sort === 'alphabetical'
                ? first.name.localeCompare(second.name)
                : (weaponProgress[second.name]?.level || 1) - (weaponProgress[first.name]?.level || 1) || first.name.localeCompare(second.name));
    }

    function getWeaponControlsMarkup(filterId, sortId, filter, sort, includeSort = true) {
        const option = (value, label) => `<option value="${value}"${filter === value ? ' selected' : ''}>${label}</option>`;
        const sortOption = (value, label) => `<option value="${value}"${sort === value ? ' selected' : ''}>${label}</option>`;
        return `<div class="character-controls">
            <label><span>${translations[currentLanguage]['character-filter-label']}</span>
                <select id="${filterId}">
                    ${option('all', translations[currentLanguage]['weapons-filter-all'])}
                    ${option('rarity-5', translations[currentLanguage]['weapons-filter-5'])}
                    ${option('rarity-4', translations[currentLanguage]['weapons-filter-4'])}
                    ${option('rarity-3', translations[currentLanguage]['weapons-filter-3'])}
                    ${option('Sword', 'Sword')}${option('Broadblade', 'Broadblade')}${option('Rectifier', 'Rectifier')}
                    ${option('Gauntlets', 'Gauntlets')}${option('Pistols', 'Pistols')}
                </select>
            </label>
            ${includeSort ? `<label><span>${translations[currentLanguage]['character-sort-label']}</span>
                <select id="${sortId}">${sortOption('level-desc', translations[currentLanguage]['character-sort-level'])}${sortOption('alphabetical', translations[currentLanguage]['character-sort-alpha'])}</select>
            </label>` : ''}
        </div>`;
    }

    function renderCharacterTrainingPage() {
        const container = document.getElementById('trainingContent');
        if (!container) return;

        if (obtainedCharacters.length === 0) {
            container.innerHTML = `${getTrainingModeMarkup()}<p class="empty-collection">${translations[currentLanguage]['training-empty']}</p>`;
            bindTrainingModeControls(container);
            return;
        }

        const trainingCharacters = getFilteredAndSortedCharacters(obtainedCharacters, trainingCharacterFilter, trainingCharacterSort);
        if (trainingCharacters.length === 0) {
            container.innerHTML = `${getTrainingModeMarkup()}${getCharacterControlsMarkup('trainingCharactersFilter', 'trainingCharactersSort', trainingCharacterFilter, trainingCharacterSort)}<p class="empty-collection">${translations[currentLanguage]['character-filter-empty']}</p>`;
            bindTrainingModeControls(container);
            bindTrainingCharacterControls(container);
            return;
        }

        if (!trainingCharacters.some(character => character.name === selectedTrainingCharacterName)) {
            selectedTrainingCharacterName = trainingCharacters[0].name;
        }
        const selectedCharacter = obtainedCharacters.find(character => character.name === selectedTrainingCharacterName);
        const state = getCharacterTrainingState(selectedCharacter.name);
        const levelInfo = getCharacterLevelInfo(state);
        const progress = state.level >= CHARACTER_MAX_LEVEL ? 100 : Math.min(100, (levelInfo.expInLevel / levelInfo.expRequired) * 100);
        const characterHp = 600 + (state.level - 1) * 50;
        const characterDmg = 200 + (state.level - 1) * 10;
        const equippedWeaponName = equippedWeapons[selectedCharacter.name] || '';
        const equippedWeapon = obtainedWeapons.find(weapon => weapon.name === equippedWeaponName);
        const weaponDamage = getWeaponDamage(equippedWeaponName, selectedCharacter.name);
        const equippableWeapons = getFilteredAndSortedWeapons(obtainedWeapons, equipmentWeaponFilter);

        container.innerHTML = `
            <section class="training-character-picker">
                <h2>${translations[currentLanguage]['training-select']}</h2>
                ${getCharacterControlsMarkup('trainingCharactersFilter', 'trainingCharactersSort', trainingCharacterFilter, trainingCharacterSort)}
                <div class="training-character-list">
                    ${trainingCharacters.map(character => `
                        <button class="training-character-option${character.name === selectedCharacter.name ? ' selected' : ''}" type="button" data-training-character="${character.name}">
                            <img src="${character.img}" alt="${character.name}">
                            ${getCharacterElementIconMarkup(character)}
                            <span>${character.name}</span>
                        </button>
                    `).join('')}
                </div>
            </section>
            <section class="training-detail-panel">
                <div class="training-character-showcase">
                    ${getTrainingModeMarkup()}
                    <img src="${getTrainingCharacterImage(selectedCharacter)}" alt="${selectedCharacter.name}" onerror="this.onerror=null; this.src='${selectedCharacter.img}'">
                    ${getCharacterElementIconMarkup(selectedCharacter)}
                    <h2>${selectedCharacter.name}</h2>
                </div>
                <div class="training-level-panel">
                    <div class="training-level-heading"><span>${translations[currentLanguage]['training-level']}</span><strong>${state.level} / ${CHARACTER_MAX_LEVEL}</strong></div>
                    <div class="training-exp-track"><div class="training-exp-fill" style="width:${progress}%"></div></div>
                    <p>${state.level >= CHARACTER_MAX_LEVEL ? translations[currentLanguage]['training-max-level'] : `${levelInfo.expInLevel} / ${levelInfo.expRequired} EXP`}</p>
                    <div class="training-stat-grid">
                        <div><span>${translations[currentLanguage]['training-hp']}</span><strong>${characterHp}</strong></div>
                        <div><span>${translations[currentLanguage]['training-dmg']}</span><strong>${characterDmg}</strong></div>
                        <div><span>${translations[currentLanguage]['training-weapon-dmg']}</span><strong>${weaponDamage.active}</strong></div>
                        <div><span>${translations[currentLanguage]['training-total-dmg']}</span><strong>${characterDmg + weaponDamage.active}</strong></div>
                    </div>
                    <h3>${translations[currentLanguage]['training-weapon-equipped']}</h3>
                    <div class="training-equipment-slot">
                        <img src="${equippedWeapon?.img || 'Extra/Basic%20Energy%20Core.png'}" alt="${equippedWeapon?.name || translations[currentLanguage]['training-weapon-none']}">
                        <strong>${equippedWeapon?.name || translations[currentLanguage]['training-weapon-none']}</strong>
                        <span>${weaponDamage.hasSynergy ? translations[currentLanguage]['training-synergy-active'] : translations[currentLanguage]['training-synergy-inactive']}</span>
                    </div>
                    ${getWeaponControlsMarkup('equipmentWeaponsFilter', '', equipmentWeaponFilter, 'alphabetical', false)}
                    <div class="profile-avatar-options training-weapon-options">
                        <button class="profile-avatar-option${!equippedWeaponName ? ' selected' : ''}" type="button" data-equip-weapon="">
                            <span>${translations[currentLanguage]['training-weapon-none']}</span>
                        </button>
                        ${equippableWeapons.map(weapon => `
                            <button class="profile-avatar-option${weapon.name === equippedWeaponName ? ' selected' : ''}" type="button" data-equip-weapon="${weapon.name}">
                                <img src="${weapon.img}" alt="${weapon.name}"><span>${weapon.name}</span>
                            </button>`).join('')}
                    </div>
                    <h3>${translations[currentLanguage]['training-potions']}</h3>
                    <div class="training-potions">
                        ${Object.entries(potionDefinitions).map(([key, potion]) => `
                            <article class="training-potion-card">
                                <img src="${potion.image}" alt="${potion.name}">
                                <div><strong>${potion.name}</strong><span>+${potion.exp} EXP · x${resonancePotions[key] || 0}</span></div>
                                <button type="button" data-potion="${key}" ${state.level >= CHARACTER_MAX_LEVEL || !(resonancePotions[key] > 0) ? 'disabled' : ''}>${translations[currentLanguage]['training-use']}</button>
                            </article>
                        `).join('')}
                    </div>
                </div>
            </section>
        `;

        bindTrainingCharacterControls(container);
        bindTrainingModeControls(container);
        container.querySelector('#equipmentWeaponsFilter')?.addEventListener('change', event => {
            equipmentWeaponFilter = event.target.value;
            renderTrainingPage();
        });
        container.querySelectorAll('[data-equip-weapon]').forEach(button => {
            button.addEventListener('click', () => {
                const weaponName = button.dataset.equipWeapon;
                if (weaponName) equippedWeapons[selectedCharacter.name] = weaponName;
                else delete equippedWeapons[selectedCharacter.name];
                saveCurrentUserData();
                renderTrainingPage();
            });
        });
        container.querySelectorAll('[data-training-character]').forEach(button => {
            button.addEventListener('click', () => {
                selectedTrainingCharacterName = button.dataset.trainingCharacter;
                saveCurrentUserData();
                renderTrainingPage();
            });
        });
        container.querySelectorAll('[data-potion]').forEach(button => {
            button.addEventListener('click', () => applyResonancePotion(button.dataset.potion));
        });
    }

    function bindTrainingCharacterControls(container) {
        const filterSelect = container.querySelector('#trainingCharactersFilter');
        const sortSelect = container.querySelector('#trainingCharactersSort');
        filterSelect?.addEventListener('change', () => {
            trainingCharacterFilter = filterSelect.value;
            renderTrainingPage();
        });
        sortSelect?.addEventListener('change', () => {
            trainingCharacterSort = sortSelect.value;
            renderTrainingPage();
        });
    }

    function renderWeaponTrainingPage() {
        const container = document.getElementById('trainingContent');
        if (!container) return;

        if (obtainedWeapons.length === 0) {
            container.innerHTML = `${getTrainingModeMarkup()}<p class="empty-collection">${translations[currentLanguage]['training-weapon-empty']}</p>`;
            bindTrainingModeControls(container);
            return;
        }

        const trainingWeapons = getFilteredAndSortedWeapons(obtainedWeapons, trainingWeaponFilter, trainingWeaponSort);
        if (trainingWeapons.length === 0) {
            container.innerHTML = `${getTrainingModeMarkup()}${getWeaponControlsMarkup('trainingWeaponsFilter', 'trainingWeaponsSort', trainingWeaponFilter, trainingWeaponSort)}<p class="empty-collection">${translations[currentLanguage]['character-filter-empty']}</p>`;
            bindTrainingModeControls(container);
            bindTrainingWeaponControls(container);
            return;
        }
        if (!trainingWeapons.some(weapon => weapon.name === selectedTrainingWeaponName)) {
            selectedTrainingWeaponName = trainingWeapons[0].name;
        }
        const selectedWeapon = trainingWeapons.find(weapon => weapon.name === selectedTrainingWeaponName);
        const state = getWeaponTrainingState(selectedWeapon.name);
        const levelInfo = getCharacterLevelInfo(state);
        const progress = state.level >= WEAPON_MAX_LEVEL ? 100 : Math.min(100, (levelInfo.expInLevel / levelInfo.expRequired) * 100);
        const equippedCharacterName = Object.keys(equippedWeapons).find(characterName => equippedWeapons[characterName] === selectedWeapon.name) || null;
        const damage = getWeaponDamage(selectedWeapon.name, equippedCharacterName);

        container.innerHTML = `
            <section class="training-character-picker">
                <h2>${translations[currentLanguage]['training-weapon-select']}</h2>
                ${getWeaponControlsMarkup('trainingWeaponsFilter', 'trainingWeaponsSort', trainingWeaponFilter, trainingWeaponSort)}
                <div class="training-character-list">
                    ${trainingWeapons.map(weapon => `
                        <button class="training-character-option${weapon.name === selectedWeapon.name ? ' selected' : ''}" type="button" data-training-weapon="${weapon.name}">
                            <img src="${weapon.img}" alt="${weapon.name}">
                            <span>${weapon.name}</span>
                        </button>
                    `).join('')}
                </div>
            </section>
            <section class="training-detail-panel">
                <div class="training-character-showcase training-weapon-showcase">
                    ${getTrainingModeMarkup()}
                    <img src="${getTrainingWeaponImage(selectedWeapon)}" alt="${selectedWeapon.name}" onerror="this.onerror=null; this.src='${selectedWeapon.img}'">
                    <h2>${selectedWeapon.name}</h2>
                </div>
                <div class="training-level-panel">
                    <div class="training-level-heading"><span>${translations[currentLanguage]['training-level']}</span><strong>${state.level} / ${WEAPON_MAX_LEVEL}</strong></div>
                    <div class="training-exp-track"><div class="training-exp-fill" style="width:${progress}%"></div></div>
                    <p>${state.level >= WEAPON_MAX_LEVEL ? translations[currentLanguage]['training-max-level'] : `${levelInfo.expInLevel} / ${levelInfo.expRequired} EXP`}</p>
                    <div class="training-stat-grid">
                        <div><span>${translations[currentLanguage]['training-base-dmg']}</span><strong>${damage.base}</strong></div>
                        <div><span>${translations[currentLanguage]['training-synergy-dmg']}</span><strong>${damage.synergy}</strong></div>
                        <div><span>${translations[currentLanguage]['training-weapon-dmg']}</span><strong>${damage.active}</strong></div>
                        <div><span>${damage.hasSynergy ? translations[currentLanguage]['training-synergy-active'] : translations[currentLanguage]['training-synergy-inactive']}</span><strong>${equippedCharacterName || '—'}</strong></div>
                    </div>
                    <h3>${translations[currentLanguage]['training-energy-cores']}</h3>
                    <div class="training-potions">
                        ${Object.entries(energyCoreDefinitions).map(([key, core]) => `
                            <article class="training-potion-card">
                                <img src="${core.image}" alt="${core.name}">
                                <div><strong>${core.name}</strong><span>+${core.exp} EXP · x${energyCores[key] || 0}</span></div>
                                <button type="button" data-energy-core="${key}" ${state.level >= WEAPON_MAX_LEVEL || !(energyCores[key] > 0) ? 'disabled' : ''}>${translations[currentLanguage]['training-use']}</button>
                            </article>
                        `).join('')}
                    </div>
                </div>
            </section>`;

        bindTrainingModeControls(container);
        bindTrainingWeaponControls(container);
        container.querySelectorAll('[data-training-weapon]').forEach(button => {
            button.addEventListener('click', () => {
                selectedTrainingWeaponName = button.dataset.trainingWeapon;
                saveCurrentUserData();
                renderTrainingPage();
            });
        });
        container.querySelectorAll('[data-energy-core]').forEach(button => {
            button.addEventListener('click', () => applyEnergyCore(button.dataset.energyCore));
        });
    }

    function bindTrainingWeaponControls(container) {
        const filterSelect = container.querySelector('#trainingWeaponsFilter');
        const sortSelect = container.querySelector('#trainingWeaponsSort');
        filterSelect?.addEventListener('change', () => {
            trainingWeaponFilter = filterSelect.value;
            renderTrainingPage();
        });
        sortSelect?.addEventListener('change', () => {
            trainingWeaponSort = sortSelect.value;
            renderTrainingPage();
        });
    }

    function applyEnergyCore(coreKey) {
        const weapon = obtainedWeapons.find(item => item.name === selectedTrainingWeaponName);
        const core = energyCoreDefinitions[coreKey];
        if (!weapon || !core || !(energyCores[coreKey] > 0)) return;
        const state = getWeaponTrainingState(weapon.name);
        if (state.level >= WEAPON_MAX_LEVEL) return;
        energyCores[coreKey]--;
        state.exp += core.exp;
        while (state.level < WEAPON_MAX_LEVEL) {
            const required = 100 + (state.level - 1) * 50;
            if (state.exp < required) break;
            state.exp -= required;
            state.level++;
        }
        if (state.level >= WEAPON_MAX_LEVEL) state.exp = 0;
        saveCurrentUserData();
        renderTrainingPage();
    }

    function applyResonancePotion(potionKey) {
        const character = obtainedCharacters.find(item => item.name === selectedTrainingCharacterName);
        const potion = potionDefinitions[potionKey];
        if (!character || !potion || !(resonancePotions[potionKey] > 0)) return;

        const state = getCharacterTrainingState(character.name);
        if (state.level >= CHARACTER_MAX_LEVEL) return;
        resonancePotions[potionKey]--;
        state.exp += potion.exp;

        while (state.level < CHARACTER_MAX_LEVEL) {
            const required = 100 + (state.level - 1) * 50;
            if (state.exp < required) break;
            state.exp -= required;
            state.level++;
        }
        if (state.level >= CHARACTER_MAX_LEVEL) state.exp = 0;
        saveCurrentUserData();
        renderTrainingPage();
    }

    // --- Hunting ---
    const sonataCatalog = ['Celestial Light', 'Chromatic Foam', 'Crown of Valor', 'Dream of the Lost', 'Empyrean Anthem', 'Eternal Radiance', "Flamewing's Shadow", 'Flaming Clawprint', 'Freezing Frost', 'Frosty Resolve', 'Gusts of Welkin', 'Halo of Starry Radiance', 'Havoc Eclipse', "Heart of Evil's Purge", 'Lamp of Nether Road', 'Law of Harmony', 'Lingering Tunes', 'Midnight Veil', 'Molten Rift', 'Moonlit Clouds', 'Pact of Neonlight Leap', 'Reel of Spliced Memories', 'Rejuvenating Glow', 'Rite of Gilded Revelation', 'Shadow of Shattered Dreams', 'Sierra Gale', 'Song of Feathered Trace', 'Sound of True Name', 'Thread of Severed Fate', 'Tidebreaking Courage', 'Trailblazing Star', 'Void Thunder', 'Windward Pilgrimage', 'Wishes of Quiet Snowfall'];
    const echoCatalog = [
        { sonata: 'Wishes of Quiet Snowfall', sonataImage: 'poze echoes (sonata)/Wishes of Quiet Snowfall/Wishes of Quiet Snowfall.png', rarity: 4, name: 'Reminiscence Threnodian - Voidborne Construct', image: 'poze echoes (sonata)/Wishes of Quiet Snowfall/echoes 4/Reminiscence Threnodian - Voidborne Construct.png' },
        { sonata: 'Wishes of Quiet Snowfall', sonataImage: 'poze echoes (sonata)/Wishes of Quiet Snowfall/Wishes of Quiet Snowfall.png', rarity: 3, name: 'Windlash Coleoid', image: 'poze echoes (sonata)/Wishes of Quiet Snowfall/echoes 3/Windlash Coleoid.png' },
        { sonata: 'Wishes of Quiet Snowfall', sonataImage: 'poze echoes (sonata)/Wishes of Quiet Snowfall/Wishes of Quiet Snowfall.png', rarity: 1, name: 'Iceglint Dancer', image: 'poze echoes (sonata)/Wishes of Quiet Snowfall/echoes 1/Iceglint Dancer.png' },
        { sonata: 'Void Thunder', sonataImage: 'poze echoes (sonata)/Void Thunder/Void Thunder.png', rarity: 4, name: 'Thundering Mephis', image: 'poze echoes (sonata)/Void Thunder/echoes 4/Thundering Mephis.png' },
        { sonata: 'Void Thunder', sonataImage: 'poze echoes (sonata)/Void Thunder/Void Thunder.png', rarity: 3, name: 'Flautist', image: 'poze echoes (sonata)/Void Thunder/echoes 3/Flautist.png' },
        { sonata: 'Void Thunder', sonataImage: 'poze echoes (sonata)/Void Thunder/Void Thunder.png', rarity: 1, name: 'Traffic Illuminator', image: 'poze echoes (sonata)/Void Thunder/echoes 1/Traffic Illuminator.png' },
        { sonata: 'Molten Rift', sonataImage: 'poze echoes (sonata)/Molten Rift/Molten Rift.png', rarity: 4, name: 'Inferno Rider', image: 'poze echoes (sonata)/Molten Rift/echoes 4/Inferno Rider.png' },
        { sonata: 'Molten Rift', sonataImage: 'poze echoes (sonata)/Molten Rift/Molten Rift.png', rarity: 3, name: 'Viridblaze Saurian', image: 'poze echoes (sonata)/Molten Rift/echoes 3/Viridblaze Saurian.png' },
        { sonata: 'Molten Rift', sonataImage: 'poze echoes (sonata)/Molten Rift/Molten Rift.png', rarity: 1, name: 'Lava Larva', image: 'poze echoes (sonata)/Molten Rift/echoes 1/Lava Larva.png' },
        { sonata: 'Windward Pilgrimage', sonataImage: 'poze echoes (sonata)/Windward Pilgrimage/Windward Pilgrimage.png', rarity: 4, name: 'Reminiscence Fleurdelys', image: 'poze echoes (sonata)/Windward Pilgrimage/echoes 4/Reminiscence Fleurdelys.png' },
        { sonata: 'Windward Pilgrimage', sonataImage: 'poze echoes (sonata)/Windward Pilgrimage/Windward Pilgrimage.png', rarity: 3, name: 'Kerasaur', image: 'poze echoes (sonata)/Windward Pilgrimage/echoes 3/Kerasaur.png' },
        { sonata: 'Windward Pilgrimage', sonataImage: 'poze echoes (sonata)/Windward Pilgrimage/Windward Pilgrimage.png', rarity: 1, name: 'Spectro Drake', image: 'poze echoes (sonata)/Windward Pilgrimage/echoes 1/Spectro Drake.png' }
    ];
    const additionalSonataEchoes = [
        ['Celestial Light','Clang Bang','Autopuppet Scout'],['Chromatic Foam','Shadow Stepper','Kronablight'],['Crown of Valor','Calcified Junrock','Hurriclaw'],['Dream of the Lost','Fae Ignis','Chop Chop'],['Empyrean Anthem','Calcified Junrock','Abyssal Patricius'],['Eternal Radiance','Aero Prism','Abyssal Mercator'],["Flamewing's Shadow",'Nightmare Baby Roseshroom','Corrosaurus'],['Flaming Clawprint','Aero Drake','Corrosaurus'],['Freezing Frost','Clang Bang','Autopuppet Scout'],['Frosty Resolve','Chest Mimic','Abyssal Mercator'],['Gusts of Welkin','Aero Drake','Capitaneus'],['Halo of Starry Radiance','Geospider S4','Frostbite Coleoid'],['Havoc Eclipse','Baby Roseshroom','Havoc Dreadmane'],["Heart of Evil's Purge",'Aureate Picket','Fog Lionarch'],['Lamp of Nether Road','Kernel Puppet Fright','Fog Lionarch'],['Law of Harmony','Golden Junrock','Nightmare Cyan-Feathered Heron'],['Lingering Tunes','Baby Viridblaze Saurian','Chasm Guardian'],['Midnight Veil','Chest Mimic','Abyssal Gladius'],['Moonlit Clouds','Cruisewing','Carapace'],['Pact of Neonlight Leap','Flora Drone','Ironhoof'],['Reel of Spliced Memories','Flora Drone','Flora Reindeer'],['Rejuvenating Glow','Cruisewing','Chasm Guardian'],['Rite of Gilded Revelation','Flora Drone','Flora Reindeer'],['Sierra Gale','Aero Predator','Carapace'],['Song of Feathered Trace','Fog Lionarch Body','Fog Lionarch'],['Sound of True Name','Flora Drone','Sabercat Prowler'],['Thread of Severed Fate','Havoc Drake','Abyssal Gladius'],['Tidebreaking Courage','Aero Drake','Abyssal Gladius'],['Trailblazing Star','Geospider S4','Glommoth']
    ];
    additionalSonataEchoes.forEach(([sonata, oneCostName, threeCostName]) => {
        const basePath = `poze echoes (sonata)/${sonata}`;
        echoCatalog.push(
            { sonata, sonataImage: `${basePath}/${sonata}.png`, rarity: 1, name: oneCostName, image: `${basePath}/echoes 1/${oneCostName}.png` },
            { sonata, sonataImage: `${basePath}/${sonata}.png`, rarity: 3, name: threeCostName, image: `${basePath}/echoes 3/${threeCostName}.png` }
        );
    });

    // Catalogul generat din toate fișierele Echo existente are prioritate.
    // Lista scurtă de mai sus rămâne doar ca rezervă dacă acest fișier lipsește.
    if (Array.isArray(window.allEchoCatalog) && window.allEchoCatalog.length) {
        echoCatalog.splice(0, echoCatalog.length, ...window.allEchoCatalog);
    }

    function renderHuntingPage() {
        const charactersContainer = document.getElementById('huntingCharacters');
        const inventoryContainer = document.getElementById('huntingInventory');
        const message = document.getElementById('huntingMessage');
        const huntButton = document.getElementById('startHuntButton');
        if (!charactersContainer || !inventoryContainer || !huntButton) return;
        if (!currentUser) {
            charactersContainer.innerHTML = `<p class="empty-collection">${translations[currentLanguage]['hunting-login']}</p>`;
            inventoryContainer.innerHTML = '';
            huntButton.disabled = true;
            return;
        }
        if (!obtainedCharacters.length) {
            charactersContainer.innerHTML = `<p class="empty-collection">${translations[currentLanguage]['hunting-empty']}</p>`;
            huntButton.disabled = true;
            return;
        }
        const availableCharacters = obtainedCharacters.filter(character => !usedHuntingCharacters.includes(character.name));
        if (!availableCharacters.some(character => character.name === selectedHuntCharacterName)) {
            selectedHuntCharacterName = availableCharacters[0]?.name || null;
        }
        charactersContainer.innerHTML = obtainedCharacters.map(character => {
            const used = usedHuntingCharacters.includes(character.name);
            return `<button class="profile-avatar-option${character.name === selectedHuntCharacterName ? ' selected' : ''}${used ? ' hunting-used' : ''}" type="button" data-hunt-character="${character.name}" ${used ? 'disabled' : ''}><img src="${character.img}" alt="${character.name}"><span>${character.name}${used ? ' · ✓' : ''}</span></button>`;
        }).join('');
        huntButton.disabled = !selectedHuntCharacterName;
        if (!message.textContent) message.textContent = '';

        if (!echoInventory.length) {
            inventoryContainer.innerHTML = `<p class="empty-collection">${translations[currentLanguage]['hunting-none']}</p>`;
        } else {
            const grouped = echoInventory.reduce((groups, echo) => {
                const key = `${echo.sonata}|${echo.rarity}`;
                if (!groups[key]) groups[key] = { ...echo, count: 0, echoes: [] };
                groups[key].count++;
                groups[key].echoes.push(echo);
                return groups;
            }, {});
            inventoryContainer.innerHTML = Object.values(grouped).map(group => `<article class="hunting-echo-summary rarity-${group.rarity}-echo"><img src="${group.sonataImage}" alt="${group.sonata}"><div><strong>${group.sonata}</strong><span>${group.rarity}-cost Echoes · x${group.count}</span></div></article>`).join('');
        }

        if (echoInventory.length) {
            const sonatas = sonataCatalog;
            const filteredEchoes = echoInventory.filter(echo =>
                (!huntingSonataFilter.length || huntingSonataFilter.includes(echo.sonata)) &&
                (!huntingRarityFilter.length || huntingRarityFilter.includes(String(echo.rarity))));
            const filteredGroups = filteredEchoes.reduce((groups, echo) => {
                const key = `${echo.sonata}|${echo.rarity}`;
                if (!groups[key]) groups[key] = { ...echo, echoes: [] };
                groups[key].echoes.push(echo);
                return groups;
            }, {});
            inventoryContainer.innerHTML = `<div class="hunting-filters"><div class="hunting-sonata-filters"><strong>Sonate</strong>${sonatas.map(sonata => `<label title="${sonata}"><input type="checkbox" data-hunt-sonata="${sonata}" ${huntingSonataFilter.includes(sonata) ? 'checked' : ''}><img src="poze echoes (sonata)/${sonata}/${sonata}.png" alt="${sonata}"></label>`).join('')}</div><div class="hunting-rarity-filters"><strong>Raritate</strong>${[1, 3, 4].map(rarity => `<label title="Cost ${rarity}"><input type="checkbox" data-hunt-rarity="${rarity}" ${huntingRarityFilter.includes(String(rarity)) ? 'checked' : ''}><span class="rarity-filter-icon cost-${rarity}">${rarity}</span></label>`).join('')}</div></div>${Object.values(filteredGroups).map(group => `<article class="hunting-echo-summary rarity-${group.rarity}-echo"><header><img src="${group.sonataImage}" alt="${group.sonata}"><strong>${group.sonata} - cost ${group.rarity} x${group.echoes.length}</strong></header><div class="hunting-echo-images">${group.echoes.map(echo => `<img src="${echo.image}" alt="${echo.name}" title="${echo.name}">`).join('')}</div></article>`).join('') || `<p class="empty-collection">${translations[currentLanguage]['hunting-none']}</p>`}`;
        }

        charactersContainer.querySelectorAll('[data-hunt-character]').forEach(button => button.addEventListener('click', () => {
            selectedHuntCharacterName = button.dataset.huntCharacter;
            saveCurrentUserData();
            renderHuntingPage();
        }));
        inventoryContainer.querySelectorAll('[data-hunt-sonata]').forEach(input => input.addEventListener('change', () => {
            huntingSonataFilter = [...inventoryContainer.querySelectorAll('[data-hunt-sonata]:checked')].map(item => item.dataset.huntSonata);
            renderHuntingPage();
        }));
        inventoryContainer.querySelectorAll('[data-hunt-rarity]').forEach(input => input.addEventListener('change', () => {
            huntingRarityFilter = [...inventoryContainer.querySelectorAll('[data-hunt-rarity]:checked')].map(item => item.dataset.huntRarity);
            renderHuntingPage();
        }));
        huntButton.onclick = startHunt;
    }

    function showHuntRewardPopup(rewards, shellReward) {
        document.getElementById('huntRewardsPopup')?.remove();
        const popup = document.createElement('div');
        popup.id = 'huntRewardsPopup';
        popup.className = 'hunt-rewards-popup';
        popup.setAttribute('role', 'dialog');
        popup.setAttribute('aria-modal', 'true');
        popup.innerHTML = `<section class="hunt-rewards-card"><h2>${translations[currentLanguage]['hunting-reward-title']}</h2><p class="hunt-rewards-shell">${translations[currentLanguage]['hunting-reward-shell']}: <strong>+${shellReward}</strong></p><div class="hunt-rewards-list">${rewards.map(echo => `<article class="hunt-reward-echo rarity-${echo.rarity}-echo"><img src="${echo.image}" alt="${echo.name}"><span>${echo.name}</span><small>${echo.sonata} · cost ${echo.rarity}</small></article>`).join('')}</div><p class="hunt-rewards-close">Apasă oriunde pentru a închide</p></section>`;
        popup.addEventListener('click', () => popup.remove(), { once: true });
        document.body.appendChild(popup);
    }

    function startHunt() {
        const message = document.getElementById('huntingMessage');
        const character = obtainedCharacters.find(item => item.name === selectedHuntCharacterName);
        if (!character || usedHuntingCharacters.includes(character.name)) {
            message.textContent = translations[currentLanguage]['hunting-select-error'];
            message.className = 'hunting-message error';
            return;
        }
        const echoCount = 5 + Math.floor(Math.random() * 16);
        const shellReward = 500 + Math.floor(Math.random() * 501);
        const rewards = Array.from({ length: echoCount }, () => {
            const rarity = Math.random() < 0.42 ? 3 : 1;
            const options = echoCatalog.filter(echo => echo.rarity === rarity);
            return { ...options[Math.floor(Math.random() * options.length)] };
        });
        echoInventory.push(...rewards);
        usedHuntingCharacters.push(character.name);
        selectedHuntCharacterName = null;
        shellCredits += shellReward;
        updateShellCreditsDisplay(shellCredits);
        saveCurrentUserData();
        updateProfileDropdown();
        renderHuntingPage();
        const resultMessage = document.getElementById('huntingMessage');
        resultMessage.textContent = translations[currentLanguage]['hunting-success'].replace('{character}', character.name).replace('{shell}', shellReward).replace('{count}', echoCount);
        resultMessage.className = 'hunting-message success';
        showHuntRewardPopup(rewards, shellReward);
    }

    // --- Domain mini-game ---
    const domainPlayButton = document.getElementById('playDomainGame');
    const domainPlayfield = document.getElementById('domainPlayfield');
    const domainPlayfieldHint = document.getElementById('domainPlayfieldHint');
    const domainTimer = document.getElementById('domainTimer');
    const domainScore = document.getElementById('domainScore');
    const domainGameResult = document.getElementById('domainGameResult');
    const domainGameLimit = document.getElementById('domainGameLimit');
    const DOMAIN_DAILY_LIMIT = 10;
    const DOMAIN_COOLDOWN_MS = 5 * 60 * 1000;
    let domainGameActive = false;
    let domainSecondsLeft = 60;
    let domainRoundScore = 0;
    let domainRoundShellCredits = 0;
    let domainRoundAstrite = 0;
    let domainCountdown = null;
    let domainTargetTimeout = null;
    let domainCooldownTicker = null;
    let domainProgress = createEmptyDomainProgress();

    function getLocalDateKey() {
        const date = new Date();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${date.getFullYear()}-${month}-${day}`;
    }

    function createEmptyDomainProgress() {
        return { date: getLocalDateKey(), gamesPlayed: 0, lastRoundCompletedAt: 0 };
    }

    function normalizeDomainProgress() {
        if (domainProgress.date !== getLocalDateKey()) {
            domainProgress = createEmptyDomainProgress();
            if (currentUser) saveCurrentUserData();
        }
        return domainProgress;
    }

    function formatCooldown(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainder = seconds % 60;
        return `${minutes}:${String(remainder).padStart(2, '0')}`;
    }

    function updateDomainAvailability() {
        const progress = normalizeDomainProgress();
        const cooldownSeconds = Math.max(0, Math.ceil((progress.lastRoundCompletedAt + DOMAIN_COOLDOWN_MS - Date.now()) / 1000));

        if (domainGameLimit) {
            domainGameLimit.textContent = translations[currentLanguage]['domain-game-limit']
                .replace('{played}', progress.gamesPlayed)
                .replace('{limit}', DOMAIN_DAILY_LIMIT);
            if (cooldownSeconds > 0) domainGameLimit.textContent += ` · ${formatCooldown(cooldownSeconds)}`;
        }

        if (!domainGameActive && domainPlayButton) {
            domainPlayButton.disabled = progress.gamesPlayed >= DOMAIN_DAILY_LIMIT || cooldownSeconds > 0;
        }

        if (cooldownSeconds === 0 && domainCooldownTicker) {
            clearInterval(domainCooldownTicker);
            domainCooldownTicker = null;
        }
        return { progress, cooldownSeconds };
    }

    function startDomainCooldownTicker() {
        if (domainCooldownTicker) clearInterval(domainCooldownTicker);
        domainCooldownTicker = setInterval(updateDomainAvailability, 1000);
    }

    function clearDomainTarget() {
        if (domainTargetTimeout) {
            clearTimeout(domainTargetTimeout);
            domainTargetTimeout = null;
        }
        domainPlayfield.querySelector('.resonance-core')?.remove();
    }

    function spawnDomainCore() {
        if (!domainGameActive) return;
        clearDomainTarget();

        const isAstriteCore = Math.random() < 0.03;
        const core = document.createElement('button');
        core.type = 'button';
        core.className = `resonance-core${isAstriteCore ? ' astrite-core' : ''}`;
        core.setAttribute('aria-label', isAstriteCore ? 'Astrite' : 'Shell Credits');
        core.innerHTML = `<img src="${isAstriteCore ? 'Extra/Astrite.png' : 'Extra/Shell%20Credit.png'}" alt="">`;
        core.style.left = `${12 + Math.random() * 72}%`;
        core.style.top = `${25 + Math.random() * 58}%`;

        core.addEventListener('click', () => {
            if (!domainGameActive) return;
            if (domainTargetTimeout) {
                clearTimeout(domainTargetTimeout);
                domainTargetTimeout = null;
            }
            domainRoundScore++;
            domainRoundShellCredits += isAstriteCore ? 1 : 2 + Math.floor(Math.random() * 3);
            if (isAstriteCore) domainRoundAstrite++;
            domainScore.textContent = domainRoundScore;
            core.remove();
            domainTargetTimeout = setTimeout(spawnDomainCore, 250);
        }, { once: true });

        domainPlayfield.appendChild(core);
        domainTargetTimeout = setTimeout(spawnDomainCore, 2200);
    }

    function finishDomainGame() {
        domainGameActive = false;
        clearInterval(domainCountdown);
        domainCountdown = null;
        clearDomainTarget();
        domainPlayfieldHint.textContent = translations[currentLanguage]['domain-game-hint'];

        const progress = normalizeDomainProgress();
        progress.gamesPlayed++;
        progress.lastRoundCompletedAt = Date.now();
        saveCurrentUserData();
        updateDomainAvailability();
        startDomainCooldownTicker();

        changeShellCredits(currentUser, domainRoundShellCredits);
        changeAstrite(currentUser, domainRoundAstrite);
        totalExpeditionsCompleted++;
        expeditionExpGranted += 25;
        addUnionExp(25);
        domainGameResult.textContent = translations[currentLanguage]['domain-game-finished']
            .replace('{shell}', domainRoundShellCredits)
            .replace('{astrite}', domainRoundAstrite);
    }

    function startDomainGame() {
        if (!currentUser) {
            domainGameResult.textContent = translations[currentLanguage]['domain-game-login'];
            return;
        }
        if (domainGameActive) return;

        const availability = updateDomainAvailability();
        if (availability.progress.gamesPlayed >= DOMAIN_DAILY_LIMIT) {
            domainGameResult.textContent = translations[currentLanguage]['domain-game-limit-reached'];
            return;
        }
        if (availability.cooldownSeconds > 0) {
            domainGameResult.textContent = translations[currentLanguage]['domain-game-cooldown']
                .replace('{time}', formatCooldown(availability.cooldownSeconds));
            return;
        }

        domainGameActive = true;
        domainSecondsLeft = 60;
        domainRoundScore = 0;
        domainRoundShellCredits = 0;
        domainRoundAstrite = 0;
        domainTimer.textContent = domainSecondsLeft;
        domainScore.textContent = 0;
        domainPlayfieldHint.textContent = '';
        domainGameResult.textContent = translations[currentLanguage]['domain-game-active'];
        domainPlayButton.disabled = true;
        spawnDomainCore();

        domainCountdown = setInterval(() => {
            domainSecondsLeft--;
            domainTimer.textContent = domainSecondsLeft;
            if (domainSecondsLeft <= 0) finishDomainGame();
        }, 1000);
    }

    if (domainPlayButton && domainPlayfield) {
        domainPlayButton.addEventListener('click', startDomainGame);
    }

    // --- Authentication modal handling ---
    authButton.addEventListener('click', () => {
        if (currentUser) {
            endLocalSession();
        } else {
            authModal.classList.add('active');
            loginForm.reset();
            registerForm.reset();
            loginMessage.className = 'form-message';
            registerMessage.className = 'form-message';
        }
    });

    logoutButton.addEventListener('click', endLocalSession);
    
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
        const email = document.getElementById('loginEmail').value.trim().toLowerCase();
        const password = document.getElementById('loginPassword').value;
        const user = getUsers().find(item => item.email === email && item.password === password);
        if (!user) {
            loginMessage.textContent = translations[currentLanguage]['auth-error-login'];
            loginMessage.className = 'form-message error';
            return;
        }
        startLocalSession(user);
        authModal.classList.remove('active');
        loginForm.reset();
    });
    
    // Process registration form
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('registerEmail').value.trim().toLowerCase();
        const password = document.getElementById('registerPassword').value;
        const username = document.getElementById('registerUsername').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        if (password !== confirmPassword) {
            registerMessage.textContent = translations[currentLanguage]['auth-error-password'];
            registerMessage.className = 'form-message error';
            return;
        }
        const users = getUsers();
        if (users.some(user => user.email === email)) {
            registerMessage.textContent = translations[currentLanguage]['auth-error-email'];
            registerMessage.className = 'form-message error';
            return;
        }
        if (users.some(user => user.username.toLowerCase() === username.toLowerCase())) {
            registerMessage.textContent = translations[currentLanguage]['auth-error-username'];
            registerMessage.className = 'form-message error';
            return;
        }
        const user = { email, username, password };
        users.push(user);
        saveUsers(users);
        createUserData(user);
        startLocalSession(user);
        authModal.classList.remove('active');
        registerForm.reset();
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
            } else if (targetPage === 'training') {
                renderTrainingPage();
            } else if (targetPage === 'shop') {
                updateShopUI();
            } else if (targetPage === 'hunting') {
                renderHuntingPage();
            }
        });
    });
    
    // --- Main pull function ---
    function performWish() {
        let resultItem;
        const rand = Math.random();
        
        // Pity System Logic
        if (pity5Star >= PITY_5_STAR_MAX - 1 || (rand < RATE_5_STAR && pity5Star < PITY_5_STAR_MAX)) {
            resultItem = getRandomItemByRarity(5);
            pity5Star = 0;
            pity4Star = 0;
            count5Star++;
            createSparkles();
            
            // Calculate pity for this 5-star
            const pityCount = totalWishes + 1 - last5StarWish;
            last5StarWish = totalWishes + 1;
            
            // Add to pity history
            pityHistory.push({
                name: resultItem.name,
                pity: pityCount
            });
            updatePityHistory();
        } else if (pity4Star >= PITY_4_STAR_MAX - 1 || (rand < 0.051 + RATE_5_STAR && pity4Star < PITY_4_STAR_MAX)) {
            resultItem = getRandomItemByRarity(4);
            pity4Star = 0;
            count4Star++;
            pity5Star++;
        } else {
            resultItem = getRandomItemByRarity(3);
            count3Star++;
            pity5Star++;
            pity4Star++;
        }

        totalWishes++;
        
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
        
        const resultData = {
            name: resultItem.name,
            img: resultItem.img,
            rarity: resultItem.rarity
        };

        wishHistory.push(resultData);
        syncCountersFromHistory();

        // Save user data
        if (currentUser) {
            wishExpGranted += 5;
            addUnionExp(5);
        }
        
        return { rarity: resultItem.rarity };
    }
    
    // --- Function to get a random item by rarity ---
    function getRandomItemByRarity(rarity) {
        const filteredItems = allItems.filter(item => item.rarity === rarity);
        const randomIndex = Math.floor(Math.random() * filteredItems.length);
        return filteredItems[randomIndex];
    }
    
    function createWishResultElement(resultItem) {
        const itemElement = document.createElement('div');
        itemElement.className = `wish-item rarity-${resultItem.rarity}-item reveal-item-${resultItem.rarity}`;
        itemElement.dataset.rarity = resultItem.rarity;

        const rarityText = translations[currentLanguage]['rarity-text'].replace('{rarity}', resultItem.rarity);

        itemElement.innerHTML = `
            <img src="${resultItem.img}" alt="${resultItem.name}">
            <div class="details">
                <p class="name">${resultItem.name}</p>
                <p class="rarity">${translations[currentLanguage]['wish-stat-' + resultItem.rarity]}: <span class="rarity-text-${resultItem.rarity}" data-rarity="${resultItem.rarity}">${rarityText}</span></p>
            </div>
        `;

        if (resultItem.rarity === 5) {
            itemElement.classList.add('special-glow');
        }

        return itemElement;
    }

    function renderWishHistory() {
        wishResultsDiv.innerHTML = '';

        if (wishHistory.length === 0) {
            wishResultsDiv.innerHTML = `<h3 data-translate="wish-prompt">Trage pentru a vedea rezultatele!</h3>`;
            return;
        }

        wishHistory.slice().reverse().forEach(item => {
            wishResultsDiv.appendChild(createWishResultElement(item));
        });

        applyFilter();
    }

    // --- UI update function ---
    function updateUI(results) {
        syncCountersFromHistory();
        updatePityHistory();

        totalWishesSpan.textContent = totalWishes;
        updateWishPurchaseUI();
        
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
    
    function getItemCopyCount(itemName) {
        const copies = wishHistory.filter(item => item.name === itemName).length;
        const isWeapon = weapons.some(weapon => weapon.name === itemName);
        return Math.max(1, copies - (isWeapon ? (soldWeaponCopies[itemName] || 0) : 0));
    }

    // --- Function to update character collection ---
    function updateCharactersCollection() {
        const filteredCharacters = getFilteredAndSortedCharacters(obtainedCharacters, characterCollectionFilter, characterCollectionSort);
        
        if (filteredCharacters.length === 0) {
            const emptyText = characterCollectionFilter === 'all'
                ? translations[currentLanguage]['training-empty']
                : translations[currentLanguage]['character-filter-empty'];
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
                <div class="collection-character-visual">
                    <img src="${character.img}" alt="${character.name}">
                    ${getCharacterElementIconMarkup(character)}
                </div>
                <div class="info">
                    <div class="collection-name-row"><h3 class="name">${character.name}</h3><span class="copy-count">x${getItemCopyCount(character.name)}</span></div>
                    <p class="rarity rarity-text-${character.rarity}">${rarityText}</p>
                </div>
            `;
            charactersGrid.appendChild(characterElement);
        });
    }
    
    // --- Function to update weapon collection ---
    function updateWeaponsCollection() {
        const filteredWeapons = obtainedWeapons
            .filter(weapon => weaponCollectionFilter === 'all' || (weaponCollectionFilter.startsWith('rarity-')
                ? weapon.rarity === Number(weaponCollectionFilter.replace('rarity-', ''))
                : getWeaponType(weapon) === weaponCollectionFilter))
            .sort((first, second) => weaponCollectionSort === 'alphabetical'
                ? first.name.localeCompare(second.name)
                : (weaponProgress[second.name]?.level || 1) - (weaponProgress[first.name]?.level || 1) || first.name.localeCompare(second.name));
        
        if (filteredWeapons.length === 0) {
            const emptyText = weaponCollectionFilter === 'all' ? translations[currentLanguage]['training-weapon-empty'] : translations[currentLanguage]['character-filter-empty'];
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
                <img src="${weapon.img}" alt="${weapon.name}">
                <div class="info">
                    <div class="collection-name-row"><h3 class="name">${weapon.name}</h3><span class="copy-count">x${getItemCopyCount(weapon.name)}</span></div>
                    <p class="rarity rarity-text-${weapon.rarity}">${rarityText}</p>
                    <p class="weapon-type">${getWeaponType(weapon)}</p>
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

    function getWishAstriteCost(numWishes) {
        const freeWishesRemaining = Math.max(0, FREE_WISH_LIMIT - Number(totalWishes || 0));
        const paidWishes = Math.max(0, numWishes - freeWishesRemaining);
        return paidWishes * WISH_ASTRITE_COST;
    }

    function refreshSavedAstriteBalance() {
        if (!currentUser) return;
        const savedBalance = Number(getUserData(currentUser.username)?.astrite);
        if (Number.isFinite(savedBalance) && savedBalance >= 0) {
            astrite = savedBalance;
            updateAstriteDisplay(astrite);
        }
    }

    function updateWishPurchaseUI() {
        const freeRemaining = Math.max(0, FREE_WISH_LIMIT - totalWishes);
        if (freeWishesRemainingSpan) freeWishesRemainingSpan.textContent = freeRemaining;
        if (wishCostInfo) {
            wishCostInfo.textContent = freeRemaining > 0
                ? translations[currentLanguage]['wish-cost-info-free']
                : translations[currentLanguage]['wish-cost-info-paid'];
        }
        const setButtonCost = (button, amount, key) => {
            if (!button) return;
            const cost = getWishAstriteCost(amount);
            button.textContent = `${translations[currentLanguage][key]} · ${cost ? `${translations[currentLanguage]['wish-cost-prefix']}${cost} Astrite` : translations[currentLanguage]['wish-free']}`;
        };
        setButtonCost(wish1Button, 1, 'wish-button-1');
        setButtonCost(wish10Button, 10, 'wish-button-10');
    }
    
    async function handleWish(numWishes) {
        refreshSavedAstriteBalance();
        const astriteCost = getWishAstriteCost(numWishes);
        if (astriteCost > 0 && !currentUser) {
            wishResultsDiv.innerHTML = `<h3 class="wish-purchase-error">${translations[currentLanguage]['wish-error-login']}</h3>`;
            return;
        }
        if (astriteCost > astrite) {
            const details = translations[currentLanguage]['wish-error-details'].replace('{cost}', astriteCost).replace('{balance}', astrite);
            wishResultsDiv.innerHTML = `<h3 class="wish-purchase-error">${translations[currentLanguage]['wish-error-astrite']}<br><small>${details}</small></h3>`;
            return;
        }
        if (astriteCost > 0) {
            astrite -= astriteCost;
            updateAstriteDisplay(astrite);
            saveCurrentUserData();
            updateProfileDropdown();
        }
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
        
        renderWishHistory();
        updateUI(results);
        updateWishPurchaseUI();
        
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

    charactersFilterSelect?.addEventListener('change', () => {
        characterCollectionFilter = charactersFilterSelect.value;
        updateCharactersCollection();
    });

    charactersSortSelect?.addEventListener('change', () => {
        characterCollectionSort = charactersSortSelect.value;
        updateCharactersCollection();
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

    weaponsFilterSelect?.addEventListener('change', () => {
        weaponCollectionFilter = weaponsFilterSelect.value;
        updateWeaponsCollection();
    });

    weaponsSortSelect?.addEventListener('change', () => {
        weaponCollectionSort = weaponsSortSelect.value;
        updateWeaponsCollection();
    });

    shopAstriteAmount?.addEventListener('input', () => {
        if (shopMessage) shopMessage.textContent = '';
        updateShopUI();
    });

    shopMaxButton?.addEventListener('click', () => {
        if (!currentUser) return buyAstriteFromShop();
        shopAstriteAmount.value = Math.floor(shellCredits / 20);
        if (shopMessage) shopMessage.textContent = '';
        updateShopUI();
    });

    shopBuyButton?.addEventListener('click', buyAstriteFromShop);
    
    // Initialize language on page load
    setLanguage(currentLanguage);
    restoreLocalSession();
    updateEnergyUI();
    setInterval(updateEnergyUI, 1000);
    
    // Hamburger menu toggle
    const menuToggle = document.getElementById('menuToggle');
    const navLinksList = document.getElementById('navLinks');
    if (menuToggle && navLinksList) {
        menuToggle.addEventListener('click', () => {
            navLinksList.classList.toggle('open');
        });
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navLinksList.classList.remove('open');
            });
        });
    }
    
    const profileBtn = document.getElementById('profileBtn');

    if (profileBtn) {
        profileBtn.addEventListener('click', () => {
            pages.forEach(page => page.classList.toggle('active', page.id === 'profile'));
            navLinks.forEach(link => link.classList.remove('active'));
            updateProfileDropdown();
        });
    }

    function updateProfileAvatar() {
        const avatarImage = document.getElementById('profileAvatarImage');
        const avatarIcon = document.getElementById('profileAvatarIcon');
        const selectedCharacter = obtainedCharacters.find(character => character.name === profileAvatarName);

        if (selectedCharacter) {
            avatarImage.src = selectedCharacter.img;
            avatarImage.alt = selectedCharacter.name;
            avatarImage.hidden = false;
            avatarIcon.hidden = true;
        } else {
            profileAvatarName = null;
            avatarImage.hidden = true;
            avatarIcon.hidden = false;
        }
    }

    function renderProfileAvatarPicker() {
        const picker = document.getElementById('profileAvatarPicker');
        if (!picker) return;

        if (obtainedCharacters.length === 0) {
            picker.innerHTML = `<p class="empty-collection">${translations[currentLanguage]['profile-avatar-empty']}</p>`;
            return;
        }

        picker.innerHTML = `
            <p class="profile-avatar-picker-title">${translations[currentLanguage]['profile-avatar-title']}</p>
            <div class="profile-avatar-options">
                ${obtainedCharacters.map(character => `
                    <button class="profile-avatar-option${character.name === profileAvatarName ? ' selected' : ''}" type="button" data-character-name="${character.name}">
                        <img src="${character.img}" alt="${character.name}">
                        <span>${character.name}</span>
                    </button>
                `).join('')}
            </div>
        `;
    }

    const profileAvatarButton = document.getElementById('profileAvatarButton');
    const profileAvatarPicker = document.getElementById('profileAvatarPicker');

    profileAvatarButton?.addEventListener('click', () => {
        const willOpen = profileAvatarPicker.hidden;
        renderProfileAvatarPicker();
        profileAvatarPicker.hidden = !willOpen;
        profileAvatarButton.setAttribute('aria-expanded', String(willOpen));
    });

    profileAvatarPicker?.addEventListener('click', (event) => {
        const option = event.target.closest('.profile-avatar-option');
        if (!option) return;
        profileAvatarName = option.dataset.characterName;
        saveCurrentUserData();
        updateProfileAvatar();
        renderProfileAvatarPicker();
        profileAvatarPicker.hidden = true;
        profileAvatarButton.setAttribute('aria-expanded', 'false');
    });

    // Actualizează datele din profil
    function updateProfileDropdown() {
        updateUnionExpDisplay();
        updateProfileAvatar();
        renderProfileAvatarPicker();

        // Astrite — folosește variabila globală (sursa de adevăr), nu citirea din DOM
        document.getElementById('profileAstrite').textContent = astrite;
        const profileEmail = document.getElementById('profileEmail');
        if (profileEmail) profileEmail.textContent = currentUser ? currentUser.email : '';

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
