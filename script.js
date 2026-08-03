document.addEventListener('DOMContentLoaded', () => {
    // Game data
   const characters = [
        // 5-star
        {"name": "Aalto", "rarity": 4,"img": "poze charactere/char 4/Aalto.png" },
        {"name": "Aemeath", "rarity": 5,"img": "poze charactere/char 5/Aemeath.png" },
        {"name": "Augusta", "rarity": 5,"img": "poze charactere/char 5/Augusta.png" },
        {"name": "Baizhi", "rarity": 4,"img": "poze charactere/char 4/Baizhi.png" },
        {"name": "Brant", "rarity": 5,"img": "poze charactere/char 5/Brant.png" },
        {"name": "Buling", "rarity": 4,"img": "poze charactere/char 4/Buling.png" },
        {"name": "Calcharo", "rarity": 5,"img": "poze charactere/char 5/Calcharo.png" },
        {"name": "Camellya", "rarity": 5,"img": "poze charactere/char 5/Camellya.png" },
        {"name": "Cantarella", "rarity": 5,"img": "poze charactere/char 5/Cantarella.png" },
        {"name": "Carlotta", "rarity": 5,"img": "poze charactere/char 5/Carlotta.png" },
        {"name": "Cartethyia", "rarity": 5,"img": "poze charactere/char 5/Cartethyia.png" },
        {"name": "Changli", "rarity": 5,"img": "poze charactere/char 5/Changli.png" },
        {"name": "Chisa", "rarity": 5,"img": "poze charactere/char 5/Chisa.png" },
        {"name": "Chixia", "rarity": 4,"img": "poze charactere/char 4/Chixia.png" },
        {"name": "Ciaccona", "rarity": 5,"img": "poze charactere/char 5/Ciaccona.png" },
        {"name": "Danjin", "rarity": 4,"img": "poze charactere/char 4/Danjin.png" },
        {"name": "Denia", "rarity": 5,"img": "poze charactere/char 5/Denia.png" },
        {"name": "Encore", "rarity": 5, "img": "poze charactere/char 5/Encore.png" },
        {"name": "Galbrena", "rarity": 5,"img": "poze charactere/char 5/Galbrena.png" },
        {"name": "Hiyuki", "rarity": 5,"img": "poze charactere/char 5/Hiyuki.png" },
        {"name": "Iuno", "rarity": 5,"img": "poze charactere/char 5/Iuno.png" },
        {"name": "Jianxin", "rarity": 5,"img": "poze charactere/char 5/Jianxin.png" },
        {"name": "Jinshi", "rarity": 5,"img": "poze charactere/char 5/Jinshi.png" },
        {"name": "Jiyan", "rarity": 5,"img": "poze charactere/char 5/Jiyan.png" },
        {"name": "Lingyang", "rarity": 5,"img": "poze charactere/char 5/Lingyang.png" },
        {"name": "Lucilla", "rarity": 5,"img": "poze charactere/char 5/Lucilla.png" },
        {"name": "Lucy", "rarity": 5,"img": "poze charactere/char 5/Lucy.png" },
        {"name": "Lumi", "rarity": 4 ,"img": "poze charactere/char 4/Lumi.png" },
        {"name": "Lupa", "rarity": 5,"img": "poze charactere/char 5/Lupa.png" },
        {"name": "Luuk Hersen", "rarity": 5,"img": "poze charactere/char 5/Luuk.png" },
        {"name": "Lynae", "rarity": 5,"img": "poze charactere/char 5/Lynae.png" },
        {"name": "Mornye", "rarity": 5,"img": "poze charactere/char 5/Mornye.png" },
        {"name": "Mortefi", "rarity": 4,"img": "poze charactere/char 4/Mortefi.png" },
        {"name": "Phoebe", "rarity": 5,"img": "poze charactere/char 5/Phoebe.png" },
        {"name": "Phrolova", "rarity": 5,"img": "poze charactere/char 5/Phrolova.png" },
        {"name": "Qiuyuan", "rarity": 5,"img": "poze charactere/char 5/Qiuyuan.png" },
        {"name": "Rebecca", "rarity": 5,"img": "poze charactere/char 5/Rebecca.png" },
        {"name": "Roccia", "rarity": 5,"img": "poze charactere/char 5/Roccia.png" },
        {"name": "Sanhua", "rarity": 4,"img": "poze charactere/char 4/Sanhua.png" },
        {"name": "Shorekeeper", "rarity": 5,"img": "poze charactere/char 5/Shorekeeper.png" },
        {"name": "Sigrika", "rarity": 5,"img": "poze charactere/char 5/Sigrika.png" },
        {"name": "Suisui", "rarity": 5,"img": "poze charactere/char 5/Suisui.png" },
        {"name": "Taoqi", "rarity": 4,"img": "poze charactere/char 4/Taoqi.png" },
        {"name": "Verina", "rarity": 5,"img": "poze charactere/char 5/Verina.png" },
        {"name": "Xiangli Yao", "rarity": 5,"img": "poze charactere/char 5/Xiangli Yao.png" },
        {"name": "Yangyang", "rarity": 4,"img": "poze charactere/char 4/Yangyang.png" },
        {"name": "Yangyang: Xuanling", "rarity": 5,"img": "poze charactere/char 5/Yangyang-Xuanling.png" },
        {"name": "Yinlin", "rarity": 5,"img": "poze charactere/char 5/Yinlin.png" },
        {"name": "Youhu", "rarity": 4,"img": "poze charactere/char 4/Youhu.png" },
        {"name": "Yuanwu", "rarity": 4,"img": "poze charactere/char 4/Yuanwu.png" },
        {"name": "Zani", "rarity": 5,"img": "poze charactere/char 5/Zani.png" },
        {"name": "Zhezhi", "rarity": 5,"img": "poze charactere/char 5/Zhezhi.png" },
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
        {"name": "Red String", "rarity": 5,"img": "poze arme/arme 5/Red String.png" },
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
    let wishHistory = [];
    let obtainedCharacters = [];
    let obtainedWeapons = [];
    let last5StarWish = 0; // Tracks the total number of pulls at the last 5-star
    const PITY_5_STAR_MAX = 80;
    const PITY_4_STAR_MAX = 10;
    const RATE_5_STAR = 0.025; // 2.5% for 5-star
    let shellCredits = 0;
    let astrite = 0;
    let unionExp = 0;
    let claimedUnionLevelRewards = [];
    let profileAvatarName = null;
    let wishExpGranted = 0;
    let totalExpeditionsCompleted = 0;
    let expeditionExpGranted = 0;

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
            'nav-domain': 'Expediție',
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
        },
        // English
        en: {
            'logo': 'Wuthering Waves Collection',
            'nav-main': 'Main Menu',
            'nav-wish': 'Wish',
            'nav-characters': 'Characters',
            'nav-weapons': 'Weapons',
            'nav-domain': 'Expedition',
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

        if (document.getElementById('domainGameLimit')) {
            updateDomainAvailability();
        }
        if (document.getElementById('charactersGrid')) updateCharactersCollection();
        if (document.getElementById('weaponsGrid')) updateWeaponsCollection();
        if (document.getElementById('profileEmail')) updateProfileDropdown();
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
                expeditionExpGranted: 0
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
    }
    
    function updateShellCreditsDisplay(value) {
        document.getElementById('shellCreditsValue').textContent = value;
        // și în caseta de lângă username:
        document.getElementById('profileShellCredits').textContent = value;
        // și în Domain, dacă există
        const domainShell = document.getElementById('shellCreditsValueDomain');
        if(domainShell) domainShell.textContent = value;
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
        stat5Star.textContent = count5Star;
        stat4Star.textContent = count4Star;
        stat3Star.textContent = count3Star;
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
            wishHistory = userData.wishHistory || userData.wishResults || [];
            obtainedCharacters = userData.obtainedCharacters || [];
            obtainedWeapons = userData.obtainedWeapons || [];
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
        }
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
            registerMessage.textContent = "Parolele nu se potrivesc.";
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
        return Math.max(1, copies);
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
                <img src="${character.img}" alt="${character.name}">
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
                <img src="${weapon.img}" alt="${weapon.name}">
                <div class="info">
                    <div class="collection-name-row"><h3 class="name">${weapon.name}</h3><span class="copy-count">x${getItemCopyCount(weapon.name)}</span></div>
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
        
        renderWishHistory();
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
    restoreLocalSession();
    
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
        // Astrite
        const astrite = document.getElementById('astriteValue').textContent;
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
