/* ==========================================================================
   i18n-data.js — Kampot Pathways translations (English / Khmer / Mandarin)
   --------------------------------------------------------------------------
   *** MANDARIN (zh) NOT YET REVIEWED BY A FLUENT SPEAKER ***
   Khmer (km) was machine-translated by Claude, then reviewed in full by
   Koemyi (7 Sept 2026) — no errors found, cleared for live use. Mandarin
   (zh) is still Claude's machine translation only and still needs a
   native check before the site goes live in that language. Nothing here
   needs to change structurally to fix a wording issue — just edit the
   string in place.

   English (en) is always the fallback: if a key is missing for km or zh,
   js/app.js shows the English text rather than breaking.

   Four pieces of translation data live in this one file, kept separate
   from the English-language source files (index.html, blockplan-data.js,
   contact-data.js) so none of that existing structure has to change:

   1. uiStrings          — static page copy (nav, hero, headings, buttons,
                            footer, contact labels, modal chrome), keyed by
                            a dotted id. Applied to index.html via
                            data-i18n="that.id" attributes.
   2. propertyTranslations — overrides for propertyData in
                            blockplan-data.js (label/dimensions/region/
                            description/photo captions), keyed by the same
                            object id, then by the same photo filename.
   3. galleryTranslations — overrides for galleryPhotos in
                            blockplan-data.js (region/caption), keyed by
                            filename.
   4. svgLabelTranslations — overrides for the <text> elements baked into
                            the inline block-plan SVG in index.html, keyed
                            by that element's id (e.g. "text12"). Only
                            elements whose English text is a *word*
                            (labels like "Bed 1", "Workshop") are listed;
                            plain measurements (like "4×4m") are the same
                            in every language and are left out on purpose,
                            same for the compass N/S/E/W letters, which
                            stay as international map abbreviations in all
                            three languages so they keep fitting the small
                            compass circle.
   ========================================================================== */

/* ------------------------------------------------------------------ *
 *  1. Static page copy
 * ------------------------------------------------------------------ */

const uiStrings = {
  en: {
    "nav.property": "The Property",
    "nav.gallery": "Gallery",
    "nav.goods": "Goods for Sale",
    "nav.services": "IT Services",
    "nav.retirement": "Retirement Visa",
    "nav.contact": "Contact",
    "nav.development": "Development",
    "nav.toggle": "Toggle menu",

    "hero.eyebrow": "Kampot, Cambodia",
    "hero.title": "Absolute riverfront living on the Kampot River",
    "hero.subtitle": "A 70m-deep riverfront block, 25.6m wide at the water narrowing to 19m at the street, with a 4-bedroom house, three bungalows, a private deck and pontoon — for sale directly from the owner. The owner holds Hard Title for the property. Note that these diagrams are approximate guidance only.",
    "hero.ctaExplore": "Explore the property",
    "hero.ctaGallery": "View photo gallery",
    "hero.ctaDevelopment": "Development",
    "hero.ctaMap": "View on Google Maps",

    "property.heading": "The Property",
    "property.intro": "An interactive scale plan of the block — 70m deep, 25.6m wide at the riverfront, narrowing to 19m at the street boundary, with the Kampot River running the full length of the top boundary. Click (or tap) any building, room or feature below for photos and details.",
    "property.tapHint": "Tap any coloured area for photos & details. North points right — the top boundary faces West, directly onto the river.",

    "property.block.heading": "The block",
    "property.block.body": "70m deep, 25.6m wide at the riverfront narrowing to 19m at the street boundary — an absolute riverfront position. The top boundary is a retaining wall directly on the Kampot River, which is tidal — up to 1.5m of daily sea-water tide. A private timber deck and floating pontoon sit out over the water, reached by a gate and six steps down from the paved Coconut Garden.",

    "property.house.heading": "Main house",
    "property.house.body": "≈168 m² — 4 bedrooms, 2 bathrooms, kitchen/dining, storage and laundry, with covered verandah and both river-side and rear entrances.",

    "property.bungalows.heading": "Three bungalows",
    "property.bungalows.body": "Bungalow 3 sits parallel to the river with open-plan living and direct water views. Bungalows 1 and 2 run along the north boundary — all bungalows have a modern open-plan kitchen and living area, and modern bathrooms with hot shower.",

    "property.services.heading": "Services",
    "property.services.body": "A dedicated services building along the south boundary houses covered motorcycle parking, a workshop with 8 metres of workbench space, and covered vehicle parking — plus a 5000 litre water storage tank by the house.",

    "property.connected.heading": "Connected services",
    "property.connected.body": "Water to the house and bungalows is maintained by pumps at mains pressure.",

    "property.environment.heading": "Local Environment",
    "property.environment.body": "The property experiences fresh breezes all year round from the sea (3 km away to the South) and from the Kampot River Valley to the North.",

    "gallery.heading": "Gallery",
    "gallery.intro": "Sunsets over Bokor, river mornings, and life on the water — general views of the property and its surroundings. Click any photo to enlarge.",

    "development.heading": "Development Potential",
    "development.intro": "Beyond the house, bungalows and services, a good-sized area of the block is still open — shown dashed below, on the same scale plan as the property above.",
    "development.tapHint": "North points right — the top boundary faces West, directly onto the river.",
    "development.rectLabel1": "Proposed new",
    "development.rectLabel2": "development area",

    "goods.heading": "Goods for Sale",
    "goods.body": "A small selection of personal gear, listed here as it's ready to sell.",
    "goods.cat.guitars": "Guitars & Instruments",
    "goods.cat.pedals": "Effects Pedals",
    "goods.cat.woodworking": "Woodworking Tools",
    "goods.cat.metalworking": "Metalworking Tools",
    "goods.comingSoon": "Listings coming soon",

    "services.heading": "IT Development Services",
    "services.body": "This site itself is a working example of Claude-collaborative web development — full details on remote development services coming soon. If you need a website like this, contact Robert — see below.",

    "retirement.heading": "Want to retire to Cambodia?",
    "retirement.body": "Retire to Cambodia — so easy, with no fuss. A 12-month, multiple-entry Retirement Visa costs $300 p.a. and is typically processed in around 10 days.",

    "contact.heading": "Contact",
    "contact.primaryHeading": "Primary Contacts",
    "contact.salesHeading": "Sales Contact",
    "contact.expectHeading": "What to expect",
    "contact.expectOwner": "Owner-direct sale",
    "contact.expectOwnerSub": "No commission, no middle layer.",
    "contact.expectLocation": "Kampot, Cambodia",
    "contact.expectLocationSub": "On the Kampot River.",
    "contact.expectViewings": "Private viewings",
    "contact.expectViewingsSub": "Arranged on request, with time to see the block properly.",
    "contact.legalNote": "The owner holds Hard Title. Diagrams are approximate guidance only.",
    "contact.formName": "Name",
    "contact.formEmail": "Email",
    "contact.formPhone": "Phone",
    "contact.formPhoneOptional": "(optional)",
    "contact.formMessage": "Message",
    "contact.formMessagePlaceholder": "I'd like to enquire about the Kampot riverfront property…",
    "contact.formSubmit": "Send enquiry",
    "contact.formTrust": "Your details go directly to the owner. Nothing is shared with third parties.",
    "contact.formGuard": "The enquiry channel is being connected — please try again shortly.",

    "footer.copyright": "© 2026 Kampot Pathways.",
    "footer.tagline": "Built with HTML5, Tailwind CSS & vanilla JavaScript — a Claude-collaborative development portfolio piece.",

    "modal.close": "Close",
    "modal.photoOf": "Show photo {i} of {n}",
    "gallery.playVideo": "Play video — ",
    "gallery.viewLarger": " — view larger",
    "gallery.defaultPhotoTitle": "Photo",

    "lang.en": "English",
    "lang.km": "ខ្មែរ",
    "lang.zh": "中文"
  },

  km: {
    "nav.property": "អចលនទ្រព្យ",
    "nav.gallery": "វិចិត្រសាល",
    "nav.goods": "ទំនិញលក់",
    "nav.services": "សេវាកម្ម IT",
    "nav.retirement": "ទិដ្ឋាការចូលនិវត្តន៍",
    "nav.contact": "ទំនាក់ទំនង",
    "nav.development": "អភិវឌ្ឍន៍",
    "nav.toggle": "បើក/បិទម៉ឺនុយ",

    "hero.eyebrow": "កំពត, កម្ពុជា",
    "hero.title": "ការរស់នៅមុខទន្លេពេញលេញនៅទន្លេកំពត",
    "hero.subtitle": "ដីមុខទន្លេជម្រៅ ៧០ម ទទឹង ២៥,៦ម នៅមាត់ទន្លេ ចង្អៀតមកនៅត្រឹម ១៩ម នៅព្រំដែនផ្លូវ មានផ្ទះ៤បន្ទប់គេង បង្ហ្គាឡូបី ខ្សែក្រាលឈើឯកជន និងអាងបណ្តែតទឹក — លក់ដោយផ្ទាល់ពីម្ចាស់។ ម្ចាស់កាន់កាប់ប្លង់រឹង (Hard Title) សម្រាប់អចលនទ្រព្យនេះ។ សូមចំណាំថា ដ្យាក្រាមទាំងនេះគ្រាន់តែជាការណែនាំប្រហែលប៉ុណ្ណោះ។",
    "hero.ctaExplore": "មើលព័ត៌មានអចលនទ្រព្យ",
    "hero.ctaGallery": "មើលវិចិត្រសាលរូបភាព",
    "hero.ctaDevelopment": "អភិវឌ្ឍន៍",
    "hero.ctaMap": "មើលទីតាំងលើ Google Maps",

    "property.heading": "អចលនទ្រព្យ",
    "property.intro": "ប្លង់មាត្រដ្ឋានអន្តរកម្មនៃដី — ជម្រៅ ៧០ម ទទឹង ២៥,៦ម នៅមាត់ទន្លេ ចង្អៀតមកនៅត្រឹម ១៩ម នៅព្រំដែនផ្លូវ ដោយមានទន្លេកំពតហូរតាមព្រំដែនខាងលើពេញមួយប្រវែង។ ចុច (ឬប៉ះ) លើអគារ បន្ទប់ ឬលក្ខណៈពិសេសណាមួយខាងក្រោម ដើម្បីមើលរូបភាព និងព័ត៌មានលម្អិត។",
    "property.tapHint": "ប៉ះលើផ្ទៃណាមួយដែលមានពណ៌ ដើម្បីមើលរូបភាព និងព័ត៌មានលម្អិត។ ទិសខាងជើងចង្អុលទៅខាងស្តាំ — ព្រំដែនខាងលើបែរទៅទិសខាងលិច ជាប់នឹងទន្លេផ្ទាល់។",

    "property.block.heading": "ដី",
    "property.block.body": "ជម្រៅ ៧០ម ទទឹង ២៥,៦ម នៅមាត់ទន្លេ ចង្អៀតមកនៅត្រឹម ១៩ម នៅព្រំដែនផ្លូវ — ជាដីមុខទន្លេទាំងស្រុង។ ព្រំដែនខាងលើគឺជាជញ្ជាំងទប់ដីនៅជាប់នឹងទន្លេកំពតផ្ទាល់ ដែលមានទឹកជោរ រហូតដល់ ១,៥ម៉ែត្រ ជារៀងរាល់ថ្ងៃ។ ខ្សែក្រាលឈើឯកជន និងអាងបណ្តែតទឹកលាតសន្ធឹងលើទឹក អាចទៅដល់តាមទ្វារ និងជណ្តើរប្រាំមួយជាន់ចុះពីសួនដូងក្រាលថ្ម។",

    "property.house.heading": "ផ្ទះធំ",
    "property.house.body": "≈១៦៨ ម៉ែត្រការ៉េ — បន្ទប់គេង៤ បន្ទប់ទឹក២ ផ្ទះបាយ/ជាន់អាហារ កន្លែងផ្ទុកទំនិញ និងបន្ទប់បោកគក់ មានជាន់ក្រៅដែលមានដំបូល ព្រមទាំងច្រកចូលមុខ (ខាងទន្លេ) និងច្រកចូលក្រោយ។",

    "property.bungalows.heading": "បង្ហ្គាឡូបី",
    "property.bungalows.body": "បង្ហ្គាឡូទី៣ ស្ថិតស្របទៅនឹងទន្លេ មានផ្ទៃរស់នៅបើកចំហ និងទេសភាពទឹកផ្ទាល់។ បង្ហ្គាឡូទី១ និងទី២ ស្ថិតតាមព្រំដែនខាងជើង — បង្ហ្គាឡូទាំងអស់មានផ្ទះបាយ និងផ្ទៃរស់នៅទំនើបបើកចំហ ព្រមទាំងបន្ទប់ទឹកទំនើប មានទឹកកក់ក្តៅ។",

    "property.services.heading": "អគារសេវាកម្ម",
    "property.services.body": "អគារសេវាកម្មដាច់ដោយឡែកមួយតាមព្រំដែនខាងត្បូង មានកន្លែងចតម៉ូតូមានដំបូល សិល្បការដ្ឋានដែលមានតុធ្វើការវែង៨ម៉ែត្រ និងកន្លែងចតរថយន្តមានដំបូល — ព្រមទាំងធុងស្តុកទឹកទំហំ ៥០០០ លីត្រនៅជិតផ្ទះ។",

    "property.connected.heading": "ប្រព័ន្ធសាធារណូបភោគតភ្ជាប់",
    "property.connected.body": "ទឹកសម្រាប់ផ្ទះ និងបង្ហ្គាឡូទាំងអស់ ត្រូវបានរក្សាសម្ពាធជាទឹកម៉ាស៊ីនបូម។",

    "property.environment.heading": "បរិយាកាសជុំវិញ",
    "property.environment.body": "អចលនទ្រព្យនេះទទួលខ្យល់អាកាសបរិសុទ្ធពេញមួយឆ្នាំ ពីសមុទ្រ (ចម្ងាយ ៣គម ទៅទិសខាងត្បូង) និងពីជ្រលងទន្លេកំពតទៅទិសខាងជើង។",

    "gallery.heading": "វិចិត្រសាល",
    "gallery.intro": "ថ្ងៃលិចលើភ្នំបូកគោ ព្រឹកនៅមាត់ទន្លេ និងជីវិតនៅលើទឹក — ទេសភាពទូទៅនៃអចលនទ្រព្យ និងបរិវេណជុំវិញ។ ចុចលើរូបភាពណាមួយ ដើម្បីពង្រីក។",

    "development.heading": "សក្តានុពលអភិវឌ្ឍន៍",
    "development.intro": "ក្រៅពីផ្ទះ បង្ហ្គាឡូ និងសេវាកម្មនានា តំបន់ដីមួយផ្នែកដ៏ធំនៅតែទំនេរ — បង្ហាញជាខ្សែបន្ទាត់ដាច់ៗខាងក្រោម នៅលើប្លង់មាត្រដ្ឋានតែមួយដូចអចលនទ្រព្យខាងលើ។",
    "development.tapHint": "ទិសខាងជើងចង្អុលទៅខាងស្តាំ — ព្រំដែនខាងលើបែរទៅទិសខាងលិច ជាប់នឹងទន្លេផ្ទាល់។",
    "development.rectLabel1": "តំបន់អភិវឌ្ឍន៍ថ្មី",
    "development.rectLabel2": "ដែលស្នើឡើង",

    "goods.heading": "ទំនិញលក់",
    "goods.body": "ជម្រើសដ៏តូចមួយនៃឧបករណ៍ផ្ទាល់ខ្លួន បង្ហាញនៅទីនេះនៅពេលត្រៀមរួចសម្រាប់លក់។",
    "goods.cat.guitars": "ហ្គីតា និងឧបករណ៍តន្ត្រី",
    "goods.cat.pedals": "ប្រអប់ Effects",
    "goods.cat.woodworking": "ឧបករណ៍ជាងឈើ",
    "goods.cat.metalworking": "ឧបករណ៍ជាងដែក",
    "goods.comingSoon": "បញ្ជីលក់នឹងមកដល់ឆាប់ៗនេះ",

    "services.heading": "សេវាកម្មអភិវឌ្ឍន៍ IT",
    "services.body": "គេហទំព័រនេះផ្ទាល់ ជាឧទាហរណ៍ជាក់ស្តែងនៃការអភិវឌ្ឍន៍គេហទំព័រសហការជាមួយ Claude — ព័ត៌មានលម្អិតអំពីសេវាកម្មអភិវឌ្ឍន៍ពីចម្ងាយ នឹងមកដល់ឆាប់ៗនេះ។ ប្រសិនបើលោកអ្នកត្រូវការគេហទំព័រដូចនេះ សូមទាក់ទង Robert — មើលព័ត៌មានខាងក្រោម។",

    "retirement.heading": "ចង់ចូលនិវត្តន៍នៅកម្ពុជាទេ?",
    "retirement.body": "ការចូលនិវត្តន៍នៅកម្ពុជា — ងាយស្រួល និងគ្មានបញ្ហាអ្វីទាំងអស់។ ទិដ្ឋាការចូលនិវត្តន៍ រយៈពេល១២ខែ ចូល-ចេញច្រើនដង មានតម្លៃត្រឹមតែ ៣០០ដុល្លារក្នុងមួយឆ្នាំ ហើយដំណើរការក្នុងរយៈពេលប្រមាណ ១០ថ្ងៃប៉ុណ្ណោះ។",

    "contact.heading": "ទំនាក់ទំនង",
    "contact.primaryHeading": "ទំនាក់ទំនងចម្បង",
    "contact.salesHeading": "ភ្នាក់ងារលក់",
    "contact.expectHeading": "អ្វីដែលត្រូវរំពឹង",
    "contact.expectOwner": "លក់ដោយម្ចាស់ផ្ទាល់",
    "contact.expectOwnerSub": "គ្មានប្រាក់ចំណាយពាណិជ្ជកម្ម គ្មានអ្នកកណ្ដាល។",
    "contact.expectLocation": "កំពត កម្ពុជា",
    "contact.expectLocationSub": "នៅលើទន្លេកំពត។",
    "contact.expectViewings": "ពិនិត្យមើលឯកជន",
    "contact.expectViewingsSub": "រៀបចំតាមការស្នើ ដោយមានពេលវេលាគ្រប់គ្រាន់សម្រាប់មើលទីដីឱ្យបានល្មម។",
    "contact.legalNote": "ម្ចាស់កាន់កាប់ Hard Title (បញ្ជីដីគាស់)។ រូបភាពគ្រឹះគណនាគ្រាន់តែជាគន្លឹះប្រមាណប៉ុណ្ណោះ។",
    "contact.formName": "ឈ្មោះ",
    "contact.formEmail": "អ៊ីមែល",
    "contact.formPhone": "ទូរស័ព្ទ",
    "contact.formPhoneOptional": "(មិនចាំបាច់)",
    "contact.formMessage": "សារ",
    "contact.formMessagePlaceholder": "ខ្ញុំចង់សួរអំពីទីដីនៅក្បែរទន្លេកំពត…",
    "contact.formSubmit": "ផ្ញើសំណួរ",
    "contact.formTrust": "ព័ត៌មានរបស់អ្នកនឹងទៅដល់ម្ចាស់ផ្ទាល់។ មិនមានការចែករំលែកជាមួយជនទីបីទេ។",
    "contact.formGuard": "ដំណើរការទទួលសំណួរកំពុងត្រូវបានភ្ជាប់ — សូមព្យាយាមម្តងទៀតក្នុងពេលឆាប់។",

    "footer.copyright": "© ២០២៦ Kampot Pathways។",
    "footer.tagline": "សាងសង់ដោយ HTML5, Tailwind CSS និង JavaScript សុទ្ធ — ជាស្នាដៃផលប័ត្រនៃការអភិវឌ្ឍន៍សហការជាមួយ Claude។",

    "modal.close": "បិទ",
    "modal.photoOf": "បង្ហាញរូបភាពទី {i} នៃ {n}",
    "gallery.playVideo": "ចាក់វីដេអូ — ",
    "gallery.viewLarger": " — មើលពង្រីក",
    "gallery.defaultPhotoTitle": "រូបភាព",

    "lang.en": "English",
    "lang.km": "ខ្មែរ",
    "lang.zh": "中文"
  },

  zh: {
    "nav.property": "地产详情",
    "nav.gallery": "相册",
    "nav.goods": "闲置物品",
    "nav.services": "IT服务",
    "nav.retirement": "退休签证",
    "nav.contact": "联系方式",
    "nav.development": "开发潜力",
    "nav.toggle": "切换菜单",

    "hero.eyebrow": "柬埔寨 贡布",
    "hero.title": "贡布河畔 · 绝对临江生活",
    "hero.subtitle": "地块临江,纵深70米,临江一端宽25.6米,至临街一端收窄为19米,配有4卧主屋、3栋平房、私人露台及浮动码头——业主直售。业主持有该地产的硬产权证(Hard Title)。请注意,这些示意图仅供大致参考。",
    "hero.ctaExplore": "查看地产详情",
    "hero.ctaGallery": "浏览相册",
    "hero.ctaDevelopment": "开发潜力",
    "hero.ctaMap": "在 Google 地图上查看",

    "property.heading": "地产详情",
    "property.intro": "地块互动比例平面图——纵深70米,临江一端宽25.6米,至临街一端收窄为19米,贡布河沿北侧边界全长流过。点击(或轻触)下方任意建筑、房间或设施即可查看照片与详情。",
    "property.tapHint": "轻触任意色块查看照片与详情。指北针指向右侧——北侧边界朝西,直接面向河流。",

    "property.block.heading": "地块",
    "property.block.body": "地块纵深70米,临江一端宽25.6米,至临街一端收窄为19米,绝对临江。北侧边界为紧邻贡布河的挡土墙,河水受潮汐影响,每日水位涨落可达1.5米。私人木质露台与浮动码头架设于水面之上,经闸门及六级台阶从铺装的椰子园下行可达。",

    "property.house.heading": "主屋",
    "property.house.body": "面积约168平方米——4间卧室、2间浴室、厨房/餐厅、储藏室及洗衣房,配有带顶棚的走廊,并设临江前门与后门。",

    "property.bungalows.heading": "三栋平房",
    "property.bungalows.body": "3号平房与河流平行而建,开放式起居空间可直接欣赏水景。1号与2号平房沿北侧边界排列——所有平房均设有现代开放式厨房与起居区,以及配备热水淋浴的现代浴室。",

    "property.services.heading": "服务设施",
    "property.services.body": "沿南侧边界设有专用服务用房,内含有顶棚摩托车停车区、配备8米工作台的工作间及有顶棚汽车停车区——另设一个5000升蓄水箱,位于主屋旁。",

    "property.connected.heading": "接入服务设施",
    "property.connected.body": "主屋及各平房的供水均通过水泵维持市政压力。",

    "property.environment.heading": "周边环境",
    "property.environment.body": "本地产全年都能感受到清新的海风(南侧3公里外的海洋)以及来自北侧贡布河谷的凉风。",

    "gallery.heading": "相册",
    "gallery.intro": "波哥山日落、河边清晨与水上生活——地产及周边环境概览。点击任意照片可放大查看。",

    "development.heading": "开发潜力",
    "development.intro": "除了住宅、平房和附属设施外，地块上仍有一块面积可观的空地——如下图虚线所示，比例与上方的地产平面图相同。",
    "development.tapHint": "指北针指向右侧——北侧边界朝西,直接面向河流。",
    "development.rectLabel1": "拟议新",
    "development.rectLabel2": "开发区域",

    "goods.heading": "闲置物品出售",
    "goods.body": "少量个人物品，准备就绪后将在此上架。",
    "goods.cat.guitars": "吉他与乐器",
    "goods.cat.pedals": "效果器",
    "goods.cat.woodworking": "木工工具",
    "goods.cat.metalworking": "金属加工工具",
    "goods.comingSoon": "商品清单即将上线",

    "services.heading": "IT开发服务",
    "services.body": "本网站本身即为 Claude 协作式网站开发的实际范例——远程开发服务的详细信息即将上线。如果您需要类似的网站，请联系 Robert——详见下方。",

    "retirement.heading": "想退休移居柬埔寨吗？",
    "retirement.body": "退休移居柬埔寨——轻松无忧。12个月多次往返退休签证，每年仅需300美元，办理时间约10天。",

    "contact.heading": "联系方式",
    "contact.primaryHeading": "主要联系人",
    "contact.salesHeading": "销售联系人",
    "contact.expectHeading": "交易须知",
    "contact.expectOwner": "业主直售",
    "contact.expectOwnerSub": "无佣金，无中间环节。",
    "contact.expectLocation": "柬埔寨 贡布",
    "contact.expectLocationSub": "位于贡布河畔。",
    "contact.expectViewings": "私人看房",
    "contact.expectViewingsSub": "可按预约安排，留出充足时间仔细查看地块。",
    "contact.legalNote": "业主持有硬产权（Hard Title）。示意图仅供参考。",
    "contact.formName": "姓名",
    "contact.formEmail": "电子邮箱",
    "contact.formPhone": "电话",
    "contact.formPhoneOptional": "（选填）",
    "contact.formMessage": "留言",
    "contact.formMessagePlaceholder": "我想咨询关于贡布河滨物业……",
    "contact.formSubmit": "发送咨询",
    "contact.formTrust": "您的信息将直接发送给业主，不会与任何第三方共享。",
    "contact.formGuard": "咨询通道正在连接中——请稍后再试。",

    "footer.copyright": "© 2026 Kampot Pathways。",
    "footer.tagline": "使用 HTML5、Tailwind CSS 与原生 JavaScript 构建——Claude 协作开发的作品集案例。",

    "modal.close": "关闭",
    "modal.photoOf": "显示第 {i} / {n} 张照片",
    "gallery.playVideo": "播放视频 — ",
    "gallery.viewLarger": " — 查看大图",
    "gallery.defaultPhotoTitle": "照片",

    "lang.en": "English",
    "lang.km": "ខ្មែរ",
    "lang.zh": "中文"
  }
};

/* Contact-section "language" labels (js/contact-data.js uses the plain
   English words "English" / "Khmer" to say which language each primary
   contact speaks) — translated the same way as everything else so the
   label itself follows the page language. */
const contactLanguageNames = {
  en: { English: "English", Khmer: "Khmer" },
  km: { English: "អង់គ្លេស", Khmer: "ខ្មែរ" },
  zh: { English: "英语", Khmer: "高棉语" }
};

/* ------------------------------------------------------------------ *
 *  2. propertyData overrides (js/blockplan-data.js), by object id
 * ------------------------------------------------------------------ */

const propertyTranslations = {
  km: {
    "kampot-river": {
      label: "ទន្លេកំពត",
      dimensions: "ទទឹង ២០០ម៉ែត្រ (ទន្លេខ្លួនឯងនៅក្រៅព្រំដែនដី)",
      region: "ទេសភាពទន្លេ",
      description: "មុខដីទល់នឹងទន្លេទាំងស្រុង — ព្រំដែនខាងលើនៃដីគឺជាជញ្ជាំងទប់ដីនៅជាប់នឹងទន្លេកំពតផ្ទាល់។ ទឹកឡើងចុះតាមទឹកជោរ រហូតដល់ ១,៥ម៉ែត្រ ជារៀងរាល់ថ្ងៃ។",
      photos: {
        "source_images/20220913_063740.jpg": "ស្រមោលព្រឹកនៅលើទន្លេ",
        "source_images/20220913_063751.jpg": "ស្រមោលព្រឹកនៅលើទន្លេ",
        "source_images/20211127_173227.jpg": "អាកាសថ្ងៃលិចជាមួយកាំរស្មី",
        "source_images/20211127_173726.jpg": "អាកាសថ្ងៃលិចជាមួយពពក",
        "source_images/20211127_173710.jpg": "អាកាសថ្ងៃលិចជាមួយកាំរស្មី"
      }
    },
    "pontoon": {
      label: "អាងបណ្តែតទឹក",
      dimensions: "២,៥ម × ២,៥ម",
      region: "ទេសភាពទន្លេ",
      description: "អាងបណ្តែតទឹកនៅចន្លោះខ្សែក្រាលឈើ ប្រើសម្រាប់ហែលទឹក និងជាកន្លែងចេញជិះទូក Kayak។",
      photos: {
        "source_images/20240629_173300.jpg": "ហែលទឹកនៅអាងបណ្តែតទឹក",
        "source_images/20260811_085313.jpg": "ជិះទូក Kayak ពីអាងបណ្តែតទឹក",
        "source_images/20260811_085527.jpg": "ជិះទូក Kayak កាត់ទន្លេ",
        "source_images/20260811_090007.jpg": "ជិះទូក Kayak កាត់ទន្លេ"
      },
      videos: { "20260811_085227.mp4": "ជិះទូក Kayak ពីអាងបណ្តែតទឹក" }
    },
    "deck": {
      label: "ខ្សែក្រាលឈើមាត់ទន្លេ",
      dimensions: "៨ម × ២,៥ម (រាងអក្សរ L ធ្វើពីឈើ)",
      region: "ទេសភាពទន្លេ",
      description: "ខ្សែក្រាលឈើលាតសន្ធឹងទៅលើទន្លេ ភ្ជាប់ជាមួយផ្ទាំងក្រាលថ្មតាមរយៈទ្វារជញ្ជាំងទប់ដី និងជណ្តើរប្រាំមួយជាន់ចុះទៅអាងបណ្តែតទឹក។",
      photos: {
        "source_images/20240304_125451.jpg": "អាហារថ្ងៃត្រង់នៅខ្សែក្រាលឈើមាត់ទន្លេ",
        "source_images/20250303_153325.jpg": "ខ្សែក្រាលឈើ និងអាងបណ្តែតទឹក"
      },
      photoNotes: { "source_images/20250303_153325.jpg": "ទឹកឡើងចុះរហូតដល់ ១,៥ម៉ែត្រ ជារៀងរាល់ថ្ងៃ" }
    },
    "step1": { label: "ជណ្តើរចុះទន្លេ", dimensions: "ទទឹង ១ម", region: "ទេសភាពទន្លេ",
      description: "មួយក្នុងចំណោមជណ្តើរប្រាំមួយជាន់ ចុះពីទ្វារជញ្ជាំងទប់ដី ទៅដល់ខ្សែក្រាលឈើ និងអាងបណ្តែតទឹក។" },
    "step2": { label: "ជណ្តើរចុះទន្លេ", dimensions: "ទទឹង ១ម", region: "ទេសភាពទន្លេ",
      description: "មួយក្នុងចំណោមជណ្តើរប្រាំមួយជាន់ ចុះពីទ្វារជញ្ជាំងទប់ដី ទៅដល់ខ្សែក្រាលឈើ និងអាងបណ្តែតទឹក។" },
    "step3": { label: "ជណ្តើរចុះទន្លេ", dimensions: "ទទឹង ១ម", region: "ទេសភាពទន្លេ",
      description: "មួយក្នុងចំណោមជណ្តើរប្រាំមួយជាន់ ចុះពីទ្វារជញ្ជាំងទប់ដី ទៅដល់ខ្សែក្រាលឈើ និងអាងបណ្តែតទឹក។" },
    "step4": { label: "ជណ្តើរចុះទន្លេ", dimensions: "ទទឹង ១ម", region: "ទេសភាពទន្លេ",
      description: "មួយក្នុងចំណោមជណ្តើរប្រាំមួយជាន់ ចុះពីទ្វារជញ្ជាំងទប់ដី ទៅដល់ខ្សែក្រាលឈើ និងអាងបណ្តែតទឹក។" },
    "step5": { label: "ជណ្តើរចុះទន្លេ", dimensions: "ទទឹង ១ម", region: "ទេសភាពទន្លេ",
      description: "មួយក្នុងចំណោមជណ្តើរប្រាំមួយជាន់ ចុះពីទ្វារជញ្ជាំងទប់ដី ទៅដល់ខ្សែក្រាលឈើ និងអាងបណ្តែតទឹក។" },
    "step6": { label: "ជណ្តើរចុះទន្លេ", dimensions: "ទទឹង ១ម", region: "ទេសភាពទន្លេ",
      description: "មួយក្នុងចំណោមជណ្តើរប្រាំមួយជាន់ ចុះពីទ្វារជញ្ជាំងទប់ដី ទៅដល់ខ្សែក្រាលឈើ និងអាងបណ្តែតទឹក។" },

    "retaining-wall-left": {
      label: "ជញ្ជាំងទប់ដី",
      dimensions: "ជាផ្នែកនៃជញ្ជាំងទប់ដីពេញទទឹងដី",
      region: "ទេសភាពអចលនទ្រព្យ",
      description: "ជញ្ជាំងទប់ដីខណ្ឌចែកសួនដូងក្រាលថ្មពីទន្លេ លាតសន្ធឹងពេញទទឹងដី។"
    },
    "retaining-wall-gate": {
      label: "ទ្វារចេញទន្លេ",
      dimensions: "ទទឹង ១ម",
      region: "ទេសភាពអចលនទ្រព្យ",
      description: "ទ្វារនៅជញ្ជាំងទប់ដី ផ្តល់ផ្លូវផ្ទាល់ពីសួនដូង តាមជណ្តើរចុះទៅខ្សែក្រាលឈើ និងទន្លេ។"
    },
    "retaining-wall-right": {
      label: "ជញ្ជាំងទប់ដី",
      dimensions: "ជាផ្នែកនៃជញ្ជាំងទប់ដីពេញទទឹងដី",
      region: "ទេសភាពអចលនទ្រព្យ",
      description: "ជញ្ជាំងទប់ដីខណ្ឌចែកសួនដូងក្រាលថ្មពីទន្លេ លាតសន្ធឹងពេញទទឹងដី។"
    },

    "paved-area": {
      label: "សួនដូង",
      dimensions: "២៥ម × ២,៥ម",
      region: "សួនច្បារ",
      description: "ផ្ទាំងក្រាលថ្មលាតសន្ធឹងពេញទទឹងដី នៅចន្លោះផ្ទះ/បង្ហ្គាឡូ និងជញ្ជាំងទប់ដី ដាំដើមដូង។",
      photos: { "source_images/20211207_073451.jpg": "ផ្កាអរគីដេ", "source_images/20211210_183630.jpg": "ដូង" }
    },

    "main-house": {
      label: "ផ្ទះធំ",
      dimensions: "១១ម × ១៨ម រាងអក្សរ L (≈១៦៨ ម៉ែត្រការ៉េ)",
      region: "ប្លង់ផ្ទះ",
      description: "ផ្ទះធំរាងអក្សរ L មាន៖ បន្ទប់គេង ៤, បន្ទប់ទឹក ២, ផ្ទះបាយ/ជាន់អាហារ, កន្លែងផ្ទុកទំនិញ, បន្ទប់បោកគក់ និងជាន់ក្រៅ ព្រមទាំងច្រកចូលមុខ (ខាងទន្លេ) និងច្រកចូលក្រោយ។",
      photos: {
        "source_images/20260903_145609.jpg": "ច្រកចូលមុខ",
        "source_images/20260903_145537.jpg": "ទិដ្ឋភាពចំហៀងពីទិសខាងជើង",
        "source_images/20260903_145534.jpg": "ទិដ្ឋភាពចំហៀងពីទិសខាងជើង"
      }
    },

    "bedroom-4": { label: "បន្ទប់គេងទី៤", dimensions: "៤,២ម × ២,៥ម", region: "ប្លង់ផ្ទះ",
      description: "មួយក្នុងចំណោមបន្ទប់គេងទាំងបួននៅផ្ទះធំ ស្ថិតនៅចុងផ្ទះខាងទន្លេ។" },
    "bedroom-1": { label: "បន្ទប់គេងទី១", dimensions: "៤ម × ៤ម", region: "ប្លង់ផ្ទះ",
      description: "មួយក្នុងចំណោមបន្ទប់គេងទាំងបួននៅផ្ទះធំ។" },
    "bedroom-2": { label: "បន្ទប់គេងទី២", dimensions: "៤ម × ៤ម", region: "ប្លង់ផ្ទះ",
      description: "មួយក្នុងចំណោមបន្ទប់គេងទាំងបួននៅផ្ទះធំ ជាប់នឹងច្រកចូលមុខ។" },
    "bedroom-3": { label: "បន្ទប់គេងទី៣", dimensions: "៤ម × ៤ម", region: "ប្លង់ផ្ទះ",
      description: "មួយក្នុងចំណោមបន្ទប់គេងទាំងបួននៅផ្ទះធំ។" },

    "entrance-front": {
      label: "ច្រកចូលមុខ",
      dimensions: "ច្រកទ្វារ",
      region: "ប្លង់ផ្ទះ",
      description: "ច្រកចូលមុខ (ខាងទន្លេ) របស់ផ្ទះធំ តម្រង់ពីទិសខាងកើតទៅខាងលិច នៅចន្លោះបន្ទប់គេងទី២ និងទី៣។"
    },
    "entrance-rear": {
      label: "ច្រកចូលក្រោយ",
      dimensions: "ច្រកទ្វារ",
      region: "ប្លង់ផ្ទះ",
      description: "ច្រកចូលក្រោយរបស់ផ្ទះធំ ភ្ជាប់រវាងបន្ទប់ទឹក និងបន្ទប់ផ្ទុកទំនិញ។"
    },

    "bathroom-1": { label: "បន្ទប់ទឹកទី១", dimensions: "២,៥ម × ១,៨ម", region: "ប្លង់ផ្ទះ",
      description: "មួយក្នុងចំណោមបន្ទប់ទឹកទាំងពីរនៅផ្ទះធំ។" },
    "bathroom-2": { label: "បន្ទប់ទឹកទី២", dimensions: "២,៥ម × ១,៨ម", region: "ប្លង់ផ្ទះ",
      description: "មួយក្នុងចំណោមបន្ទប់ទឹកទាំងពីរនៅផ្ទះធំ។" },

    "laundry": {
      label: "បន្ទប់បោកគក់",
      dimensions: "២,៦ម × ២ម",
      region: "ប្លង់ផ្ទះ",
      description: "កន្លែងបោកគក់ខាងក្រោយផ្ទះធំ នៅក្រោមបន្ទប់ទឹកទី២។"
    },
    "store-room": {
      label: "បន្ទប់ផ្ទុកទំនិញ",
      dimensions: "៤ម × ៦ម",
      region: "ប្លង់ផ្ទះ",
      description: "កន្លែងផ្ទុកទំនិញខាងក្រោយផ្ទះធំ ភ្ជាប់ជាមួយបន្ទប់ទឹកតាមរយៈច្រកចូលក្រោយ។"
    },

    "bungalow-3": {
      label: "បង្ហ្គាឡូទី៣",
      dimensions: "៦ម × ៤ម",
      region: "បង្ហ្គាឡូទី៣",
      description: "បង្ហ្គាឡូស្របទៅនឹងព្រំដែនខាងលើ (មុខទន្លេ) មានផ្ទៃរស់នៅបើកចំហ និងទេសភាពទន្លេផ្ទាល់។ ផ្ទះបាយ និងផ្ទៃរស់នៅទំនើបបើកចំហ ព្រមទាំងបន្ទប់ទឹកទំនើប មានទឹកកក់ក្តៅ។",
      photos: {
        "source_images/20240504_171616.jpg": "ទេសភាពទន្លេពីបង្ហ្គាឡូទី៣",
        "source_images/20240504_171709.jpg": "ទេសភាពទន្លេពីបង្ហ្គាឡូទី៣",
        "source_images/20240524_163802.jpg": "ផ្ទៃរស់នៅបើកចំហ",
        "source_images/20240526_180921.jpg": "ផ្ទៃរស់នៅបើកចំហ",
        "source_images/20240526_181001.jpg": "ទេសភាពពីជាន់ក្រៅ",
        "source_images/20240526_181012.jpg": "ទេសភាពពីជាន់ក្រៅ",
        "source_images/20260903_145551.jpg": "កន្លែងកម្សាន្តខាងក្រៅ"
      }
    },
    "bungalow-1": {
      label: "បង្ហ្គាឡូទី១",
      dimensions: "៥ម × ៤ម",
      region: "បង្ហ្គាឡូទី១",
      description: "បង្ហ្គាឡូស្របទៅនឹងព្រំដែនខាងស្តាំ (ទិសខាងជើង) នៅជិតចុងដីខាងទន្លេ។ ផ្ទះបាយ និងផ្ទៃរស់នៅទំនើបបើកចំហ ព្រមទាំងបន្ទប់ទឹកទំនើប មានទឹកកក់ក្តៅ។",
      photos: {
        "source_images/20260903_145128.jpg": "ទិដ្ឋភាពផ្នែកខាងមុខ",
        "source_images/20260903_145236.jpg": "ផ្ទៃរស់នៅបើកចំហ",
        "source_images/20260903_145248.jpg": "ផ្ទៃរស់នៅបើកចំហ"
      }
    },
    "bungalow-2": {
      label: "បង្ហ្គាឡូទី២",
      dimensions: "៦,៥ម × ៤ម",
      region: "បង្ហ្គាឡូទី២",
      description: "បង្ហ្គាឡូស្របទៅនឹងព្រំដែនខាងស្តាំ (ទិសខាងជើង) ស្ថិតនៅក្រោមបង្ហ្គាឡូទី១។ ផ្ទះបាយ និងផ្ទៃរស់នៅទំនើបបើកចំហ ព្រមទាំងបន្ទប់ទឹកទំនើប មានទឹកកក់ក្តៅ។",
      photos: {
        "source_images/20240621_101712.jpg": "ផ្ទៃរស់នៅបើកចំហ ជាមួយផ្ទះបាយទំនើប",
        "source_images/20191126_074148.jpg": "បន្ទប់ទឹក",
        "source_images/20260812_124941.jpg": "ទិដ្ឋភាពផ្នែកខាងមុខ",
        "source_images/20260903_145416.jpg": "ផ្ទៃរស់នៅបើកចំហ",
        "source_images/20260903_145412.jpg": "ផ្ទៃរស់នៅបើកចំហ"
      }
    },

    "water-tank1": {
      label: "ធុងស្តុកទឹក",
      dimensions: "សមត្ថភាព ៥,០០០ លីត្រ",
      region: "ប្រព័ន្ធសាធារណូបភោគ",
      description: "ធុងស្តុកទឹកស្ថិតនៅជិតផ្ទះធំ។ ទឹកសម្រាប់ផ្ទះ និងបង្ហ្គាឡូទាំងអស់ ត្រូវបានរក្សាសម្ពាធដោយម៉ាស៊ីនបូម។"
    },

    "parking-moto": {
      label: "កន្លែងចតម៉ូតូ",
      dimensions: "៦ម × ៤ម",
      region: "កន្លែងចតម៉ូតូ",
      description: "កន្លែងចតម៉ូតូ និងកង់ដែលមានដំបូល មួយក្នុងចំណោមផ្នែកទាំងបីនៃអគារសេវាកម្ម ស្របទៅនឹងព្រំដែនខាងឆ្វេង (ខាងត្បូង)។",
      photos: { "source_images/20260812_124927.jpg": "កន្លែងចតម៉ូតូ និងកង់" }
    },
    "workshop": {
      label: "សិល្បការដ្ឋាន",
      dimensions: "៦ម × ៤ម",
      region: "សិល្បការដ្ឋាន",
      description: "សិល្បការដ្ឋានសម្រាប់ជាងឈើ និងជាងដែក ជាផ្នែកកណ្តាលនៃអគារសេវាកម្ម — មានតុធ្វើការវែង ៨ម៉ែត្រ។",
      photos: { "source_images/20260812_132027.jpg": "តុធ្វើការវែង ៨ម៉ែត្រ" }
    },
    "parking-vehicle": {
      label: "កន្លែងចតរថយន្ត",
      dimensions: "៦ម × ៤ម",
      region: "កន្លែងចតរថយន្ត",
      description: "កន្លែងចតរថយន្តមួយគ្រឿងមានដំបូល ជាផ្នែកទីបីនៃអគារសេវាកម្ម នៅជិតទ្វារខាងក្រោយ និងផ្លូវចូល។",
      photos: { "source_images/20260903_145437.jpg": "កន្លែងចតរថយន្តមួយគ្រឿង" }
    },

    "fence-left": {
      label: "របងព្រំដែន",
      dimensions: "កម្ពស់ ២,៥ម",
      region: "ទេសភាពអចលនទ្រព្យ",
      description: "របងតាមព្រំដែនខាងក្រោម (ខាងកើត) ខាងឆ្វេងទ្វារចូល។"
    },
    "gate-bottom": {
      label: "ទ្វារចូល",
      dimensions: "ទទឹង ៤ម",
      region: "ទេសភាពអចលនទ្រព្យ",
      description: "ទ្វារធំសម្រាប់រថយន្ត និងអ្នកដើរជើង នៅព្រំដែនខាងក្រោម (ខាងកើត) បើកចេញទៅផ្លូវចូល។",
      photos: {
        "source_images/20240824_144505.jpg": "ទ្វារខាងក្រោយពីផ្លូវចូល",
        "source_images/20250323_144855.jpg": "ទ្វារខាងក្រោយពីផ្លូវចូល",
        "source_images/20260812_132036.jpg": "ទេសភាពពីទ្វារខាងក្រោយ",
        "source_images/20260812_131959.jpg": "ទេសភាពទៅទ្វារខាងក្រោយ"
      }
    },
    "fence-right": {
      label: "របងព្រំដែន",
      dimensions: "កម្ពស់ ២,៥ម",
      region: "ទេសភាពអចលនទ្រព្យ",
      description: "របងតាមព្រំដែនខាងក្រោម (ខាងកើត) ខាងស្តាំទ្វារចូល រហូតដល់ផ្លូវចូល។"
    }
  },

  zh: {
    "kampot-river": {
      label: "贡布河",
      dimensions: "宽约200米(河流本身不属于地块范围)",
      region: "河景",
      description: "绝对临江地块——地块北侧边界为紧邻贡布河的挡土墙。河水受潮汐影响,每日水位涨落可达1.5米。",
      photos: {
        "source_images/20220913_063740.jpg": "河面晨曦倒影",
        "source_images/20220913_063751.jpg": "河面晨曦倒影",
        "source_images/20211127_173227.jpg": "夕阳光芒",
        "source_images/20211127_173726.jpg": "夕阳云彩",
        "source_images/20211127_173710.jpg": "夕阳光芒"
      }
    },
    "pontoon": {
      label: "浮动码头",
      dimensions: "2.5米 × 2.5米",
      region: "河景",
      description: "浮动码头设于露台缺口处,可供游泳及皮划艇下水使用。",
      photos: {
        "source_images/20240629_173300.jpg": "在浮动码头游泳",
        "source_images/20260811_085313.jpg": "从码头出发划皮划艇",
        "source_images/20260811_085527.jpg": "横渡河面划皮划艇",
        "source_images/20260811_090007.jpg": "横渡河面划皮划艇"
      },
      videos: { "20260811_085227.mp4": "从码头出发划皮划艇" }
    },
    "deck": {
      label: "临河露台",
      dimensions: "8米 × 2.5米(L形木质露台)",
      region: "河景",
      description: "架设于河面之上的木质露台,经挡土墙闸门及六级台阶与浮动码头相连。",
      photos: {
        "source_images/20240304_125451.jpg": "在临河露台用午餐",
        "source_images/20250303_153325.jpg": "临河露台与浮动码头"
      },
      photoNotes: { "source_images/20250303_153325.jpg": "潮汐每日可使水位上涨1.5米" }
    },
    "step1": { label: "临河台阶", dimensions: "宽1米", region: "河景",
      description: "六级台阶之一,从挡土墙闸门通往露台及浮动码头。" },
    "step2": { label: "临河台阶", dimensions: "宽1米", region: "河景",
      description: "六级台阶之一,从挡土墙闸门通往露台及浮动码头。" },
    "step3": { label: "临河台阶", dimensions: "宽1米", region: "河景",
      description: "六级台阶之一,从挡土墙闸门通往露台及浮动码头。" },
    "step4": { label: "临河台阶", dimensions: "宽1米", region: "河景",
      description: "六级台阶之一,从挡土墙闸门通往露台及浮动码头。" },
    "step5": { label: "临河台阶", dimensions: "宽1米", region: "河景",
      description: "六级台阶之一,从挡土墙闸门通往露台及浮动码头。" },
    "step6": { label: "临河台阶", dimensions: "宽1米", region: "河景",
      description: "六级台阶之一,从挡土墙闸门通往露台及浮动码头。" },

    "retaining-wall-left": {
      label: "挡土墙",
      dimensions: "为通长挡土墙的一部分",
      region: "地块景观",
      description: "挡土墙将铺装的椰子园与河流分隔开,贯穿地块整个宽度。"
    },
    "retaining-wall-gate": {
      label: "临河闸门",
      dimensions: "宽1米",
      region: "地块景观",
      description: "挡土墙上的闸门,可从椰子园经台阶直达露台与河边。"
    },
    "retaining-wall-right": {
      label: "挡土墙",
      dimensions: "为通长挡土墙的一部分",
      region: "地块景观",
      description: "挡土墙将铺装的椰子园与河流分隔开,贯穿地块整个宽度。"
    },

    "paved-area": {
      label: "椰子园",
      dimensions: "25米 × 2.5米",
      region: "花园",
      description: "铺装步道贯穿地块整个宽度,位于主屋/平房与挡土墙之间,种有椰子树。",
      photos: { "source_images/20211207_073451.jpg": "兰花", "source_images/20211210_183630.jpg": "椰子" }
    },

    "main-house": {
      label: "主屋",
      dimensions: "11米 × 18米,L形(约168平方米)",
      region: "房屋平面图",
      description: "L形主屋:4间卧室、2间浴室、厨房/餐厅、储藏室、洗衣房及走廊,设有前门(临江侧)及后门。",
      photos: {
        "source_images/20260903_145609.jpg": "前门入口",
        "source_images/20260903_145537.jpg": "北侧景观",
        "source_images/20260903_145534.jpg": "北侧景观"
      }
    },

    "bedroom-4": { label: "卧室4", dimensions: "4.2米 × 2.5米", region: "房屋平面图",
      description: "主屋四间卧室之一,位于靠河一端。" },
    "bedroom-1": { label: "卧室1", dimensions: "4米 × 4米", region: "房屋平面图",
      description: "主屋四间卧室之一。" },
    "bedroom-2": { label: "卧室2", dimensions: "4米 × 4米", region: "房屋平面图",
      description: "主屋四间卧室之一,紧邻前门入口。" },
    "bedroom-3": { label: "卧室3", dimensions: "4米 × 4米", region: "房屋平面图",
      description: "主屋四间卧室之一。" },

    "entrance-front": {
      label: "前门入口",
      dimensions: "门廊",
      region: "房屋平面图",
      description: "主屋前门(临江一侧),呈东西走向,位于卧室2与卧室3之间。"
    },
    "entrance-rear": {
      label: "后门入口",
      dimensions: "门廊",
      region: "房屋平面图",
      description: "主屋后门,连接浴室与储藏室。"
    },

    "bathroom-1": { label: "浴室1", dimensions: "2.5米 × 1.8米", region: "房屋平面图",
      description: "主屋两间浴室之一。" },
    "bathroom-2": { label: "浴室2", dimensions: "2.5米 × 1.8米", region: "房屋平面图",
      description: "主屋两间浴室之一。" },

    "laundry": {
      label: "洗衣房",
      dimensions: "2.6米 × 2米",
      region: "房屋平面图",
      description: "主屋后部洗衣区,位于浴室2下方。"
    },
    "store-room": {
      label: "储藏室",
      dimensions: "4米 × 6米",
      region: "房屋平面图",
      description: "主屋后部储藏区,经后门与浴室相连。"
    },

    "bungalow-3": {
      label: "3号平房",
      dimensions: "6米 × 4米",
      region: "3号平房",
      description: "与北侧(临江)边界平行的平房,开放式起居空间,直面河景。设有现代开放式厨房与起居区,以及配备热水淋浴的现代浴室。",
      photos: {
        "source_images/20240504_171616.jpg": "3号平房河景",
        "source_images/20240504_171709.jpg": "3号平房河景",
        "source_images/20240524_163802.jpg": "开放式起居空间",
        "source_images/20240526_180921.jpg": "开放式起居空间",
        "source_images/20240526_181001.jpg": "阳台景观",
        "source_images/20240526_181012.jpg": "阳台景观",
        "source_images/20260903_145551.jpg": "户外休闲区"
      }
    },
    "bungalow-1": {
      label: "1号平房",
      dimensions: "5米 × 4米",
      region: "1号平房",
      description: "与右侧(北侧)边界平行的平房,靠近地块临江一端。设有现代开放式厨房与起居区,以及配备热水淋浴的现代浴室。",
      photos: {
        "source_images/20260903_145128.jpg": "正面外观",
        "source_images/20260903_145236.jpg": "开放式起居空间",
        "source_images/20260903_145248.jpg": "开放式起居空间"
      }
    },
    "bungalow-2": {
      label: "2号平房",
      dimensions: "6.5米 × 4米",
      region: "2号平房",
      description: "与右侧(北侧)边界平行的平房,位于1号平房下方。设有现代开放式厨房与起居区,以及配备热水淋浴的现代浴室。",
      photos: {
        "source_images/20240621_101712.jpg": "开放式起居空间及现代厨房",
        "source_images/20191126_074148.jpg": "浴室",
        "source_images/20260812_124941.jpg": "正面外观",
        "source_images/20260903_145416.jpg": "开放式起居空间",
        "source_images/20260903_145412.jpg": "开放式起居空间"
      }
    },

    "water-tank1": {
      label: "蓄水箱",
      dimensions: "容量5000升",
      region: "公用设施",
      description: "蓄水箱位于主屋附近下方。主屋及各平房的供水均通过水泵维持市政压力。"
    },

    "parking-moto": {
      label: "摩托车停车棚",
      dimensions: "6米 × 4米",
      region: "摩托车停车区",
      description: "有顶棚的摩托车及自行车停车区,为服务用房三个区段之一,沿左侧(南侧)边界平行布置。",
      photos: { "source_images/20260812_124927.jpg": "摩托车及自行车停车区" }
    },
    "workshop": {
      label: "工作间",
      dimensions: "6米 × 4米",
      region: "工作间",
      description: "木工与金属加工工作间,为服务用房中间区段——设有8米长的工作台空间。",
      photos: { "source_images/20260812_132027.jpg": "8米长工作台空间" }
    },
    "parking-vehicle": {
      label: "汽车停车位",
      dimensions: "6米 × 4米",
      region: "汽车停车区",
      description: "有顶棚的单车位汽车停车区,为服务用房第三区段,最靠近后门及通道。",
      photos: { "source_images/20260903_145437.jpg": "单车位汽车停车区" }
    },

    "fence-left": {
      label: "边界围栏",
      dimensions: "高2.5米",
      region: "地块景观",
      description: "沿底部(东侧)边界的围栏,位于入口大门左侧。"
    },
    "gate-bottom": {
      label: "入口大门",
      dimensions: "宽4米",
      region: "地块景观",
      description: "位于底部(东侧)边界的主要车辆/行人大门,直通通道。",
      photos: {
        "source_images/20240824_144505.jpg": "从通道看后门",
        "source_images/20250323_144855.jpg": "从通道看后门",
        "source_images/20260812_132036.jpg": "后门视角景观",
        "source_images/20260812_131959.jpg": "通往后门的景观"
      }
    },
    "fence-right": {
      label: "边界围栏",
      dimensions: "高2.5米",
      region: "地块景观",
      description: "沿底部(东侧)边界的围栏,位于入口大门右侧,延伸至通道。"
    }
  }
};

/* ------------------------------------------------------------------ *
 *  3. galleryPhotos overrides (js/blockplan-data.js), by filename
 * ------------------------------------------------------------------ */

const galleryTranslations = {
  km: {
    "source_images/20211127_173227.jpg": { region: "ទេសភាពទន្លេ", caption: "អាកាសថ្ងៃលិចជាមួយកាំរស្មី" },
    "source_images/20220611_183624.jpg": { region: "ទេសភាពទន្លេ", caption: "ភីរ៉ាមីតបូកគោ" },
    "source_images/20220625_171805.jpg": { region: "ទេសភាពទន្លេ", caption: "កាំរស្មីថ្ងៃរសៀលនៅបូកគោ" },
    "source_images/20220625_171835.jpg": { region: "ទេសភាពទន្លេ", caption: "កាំរស្មីថ្ងៃរសៀលនៅបូកគោ" },
    "source_images/20220819_182331.jpg": { region: "ទេសភាពទន្លេ", caption: "ទេសភាពដើមឈើពេលថ្ងៃលិច" },
    "source_images/20220819_182556.jpg": { region: "ទេសភាពទន្លេ", caption: "ថ្ងៃលិចនៅបូកគោ" },
    "source_images/20220819_182728.jpg": { region: "ទេសភាពទន្លេ", caption: "ថ្ងៃលិចនៅបូកគោ" },
    "source_images/20220914_072638.jpg": { region: "ទេសភាពទន្លេ", caption: "ផ្កាអរគីដេមាត់ទន្លេ" },
    "source_images/20240304_125451.jpg": { region: "ទេសភាពទន្លេ", caption: "អាហារថ្ងៃត្រង់នៅខ្សែក្រាលឈើមាត់ទន្លេ" },
    "source_images/20240629_173300.jpg": { region: "ទេសភាពទន្លេ", caption: "ពេលវេលាសប្បាយហែលទឹកនៅអាងបណ្តែតទឹក" },
    "20260811_085227.mp4": { region: "ទេសភាពទន្លេ", caption: "ជិះទូក Kayak ពីអាងបណ្តែតទឹក" },
    "source_images/IMG-20250215-WA0003.jpg": { region: "ទេសភាពទន្លេ", caption: "ជិះទូក Kayak ក្រោមម្លប់ដើមឈើ" },
    "source_images/IMG-20250215-WA0005.jpg": { region: "ទេសភាពទន្លេ", caption: "ជិះទូក Kayak ក្រោមម្លប់ដើមឈើ" },
    "source_images/IMG-20250215-WA0006.jpg": { region: "ទេសភាពទន្លេ", caption: "ជិះទូក Kayak ក្រោមម្លប់ដើមឈើ" },
    "source_images/20211210_183630.jpg": { region: "សួនច្បារ", caption: "ដូង" },
    "source_images/20200225_065327.jpg": { region: "បរិវេណជុំវិញ", caption: "វាលអំបិលពេលថ្ងៃលិច" },
    "source_images/20240824_144505.jpg": { region: "ទេសភាពអចលនទ្រព្យ", caption: "ទ្វារខាងក្រោយពីផ្លូវចូល" },
    "source_images/20250323_144855.jpg": { region: "ទេសភាពអចលនទ្រព្យ", caption: "ទ្វារខាងក្រោយពីផ្លូវចូល" },
    "source_images/20260812_131959.jpg": { region: "ទេសភាពអចលនទ្រព្យ", caption: "ទេសភាពទៅទ្វារខាងក្រោយ" },
    "source_images/20260812_132019.jpg": { region: "ទេសភាពអចលនទ្រព្យ", caption: "ផ្លូវចូលខាងក្រោយ" },
    "source_images/milky way 1.jpg": { region: "ទេសភាពអចលនទ្រព្យ", caption: "ផ្លូវទឹកនោមមេឃ ពណ៌ខៀវ" },
    "source_images/Milky way Amine.jpg": { region: "ទេសភាពអចលនទ្រព្យ", caption: "ផ្លូវទឹកនោមមេឃ ពណ៌ក្រហម" },
    "source_images/20200419_162947.jpg": { region: "ទេសភាពអចលនទ្រព្យ", caption: "ដើមស្វាយ" },
    "source_images/20260330_074321.jpg": { region: "ទេសភាពអចលនទ្រព្យ", caption: "ស្វាយស្រស់ដ៏ច្រើន" }
  },
  zh: {
    "source_images/20211127_173227.jpg": { region: "河景", caption: "夕阳光芒" },
    "source_images/20220611_183624.jpg": { region: "河景", caption: "波哥金字塔" },
    "source_images/20220625_171805.jpg": { region: "河景", caption: "波哥午后阳光" },
    "source_images/20220625_171835.jpg": { region: "河景", caption: "波哥午后阳光" },
    "source_images/20220819_182331.jpg": { region: "河景", caption: "夕阳树影" },
    "source_images/20220819_182556.jpg": { region: "河景", caption: "波哥日落" },
    "source_images/20220819_182728.jpg": { region: "河景", caption: "波哥日落" },
    "source_images/20220914_072638.jpg": { region: "河景", caption: "河边兰花" },
    "source_images/20240304_125451.jpg": { region: "河景", caption: "在临河露台用午餐" },
    "source_images/20240629_173300.jpg": { region: "河景", caption: "在浮动码头畅游的欢乐时光" },
    "20260811_085227.mp4": { region: "河景", caption: "从码头出发划皮划艇" },
    "source_images/IMG-20250215-WA0003.jpg": { region: "河景", caption: "在树荫下划皮划艇" },
    "source_images/IMG-20250215-WA0005.jpg": { region: "河景", caption: "在树荫下划皮划艇" },
    "source_images/IMG-20250215-WA0006.jpg": { region: "河景", caption: "在树荫下划皮划艇" },
    "source_images/20211210_183630.jpg": { region: "花园", caption: "椰子" },
    "source_images/20200225_065327.jpg": { region: "周边环境", caption: "夕阳下的盐田" },
    "source_images/20240824_144505.jpg": { region: "地块景观", caption: "从通道看后门" },
    "source_images/20250323_144855.jpg": { region: "地块景观", caption: "从通道看后门" },
    "source_images/20260812_131959.jpg": { region: "地块景观", caption: "通往后门的景观" },
    "source_images/20260812_132019.jpg": { region: "地块景观", caption: "后侧车道" },
    "source_images/milky way 1.jpg": { region: "地块景观", caption: "银河,蓝色调" },
    "source_images/Milky way Amine.jpg": { region: "地块景观", caption: "银河,红色调" },
    "source_images/20200419_162947.jpg": { region: "地块景观", caption: "芒果树" },
    "source_images/20260330_074321.jpg": { region: "地块景观", caption: "好多新鲜芒果" }
  }
};

/* ------------------------------------------------------------------ *
 *  4. Inline block-plan SVG <text> overrides, by element id
 *  (see the header comment — measurement-only text and the compass
 *  N/S/E/W letters are deliberately left untranslated)
 * ------------------------------------------------------------------ */

const svgLabelTranslations = {
  km: {
    text1: "ទន្លេកំពត",
    text2: "អាងបណ្តែតទឹក",
    text4: "ខ្សែក្រាលឈើ 8×2.5ម",
    text9: "ជណ្តើរ",
    text10: "ទ្វារ 1ម",
    text11: "សួនដូង — 25ម × 2.5ម",
    text12: "គេង 4",
    text14: "គេង 1",
    text16: "គេង 2",
    text19: "គេង 3",
    text21: "ទឹក 1",
    text23: "ទឹក 2",
    "text-laundry1": "បោកគក់",
    text26: "ឃ្លាំង",
    "text-kitchen1": "ប្លង់បើកចំហ",
    "text-kitchen2": "ផ្ទះបាយ/ជាន់អាហារ",
    text28: "បង្ហ្គាឡូ 3",
    text30: "បង្ហ្គាឡូ 1",
    text32: "បង្ហ្គាឡូ 2",
    text34: "ធុងទឹក",
    text35: "ចត",
    text36: "ម៉ូតូ",
    text37: "សិល្បការដ្ឋាន",
    text39: "ចត",
    text40: "រថយន្ត",
    text41: "ទ្វារ 4ម",
    text42: "— ផ្លូវចូល —",
    text47: "សញ្ញាណ",
    text48: "បន្ទប់គេង",
    text49: "បន្ទប់ទឹក",
    text50: "បង្ហ្គាឡូ",
    text51: "ខ្សែក្រាលឈើ",
    text52: "សួនដូង",
    text53: "ទន្លេ",
    text54: "ច្រកចូល"
  },
  zh: {
    text1: "贡布河",
    text2: "浮动码头",
    text4: "露台 8×2.5米",
    text9: "台阶",
    text10: "闸门 1米",
    text11: "椰子园 — 25米 × 2.5米",
    text12: "卧室4",
    text14: "卧室1",
    text16: "卧室2",
    text19: "卧室3",
    text21: "浴室1",
    text23: "浴室2",
    "text-laundry1": "洗衣房",
    text26: "储藏室",
    "text-kitchen1": "开放式",
    "text-kitchen2": "厨房/餐厅",
    text28: "3号平房",
    text30: "1号平房",
    text32: "2号平房",
    text34: "水箱",
    text35: "停车",
    text36: "摩托车",
    text37: "工作间",
    text39: "停车",
    text40: "汽车",
    text41: "闸门 4米",
    text42: "— 通道 —",
    text47: "图例",
    text48: "卧室",
    text49: "浴室",
    text50: "平房",
    text51: "露台/木质",
    text52: "椰子园",
    text53: "河流",
    text54: "入口"
  }
};
