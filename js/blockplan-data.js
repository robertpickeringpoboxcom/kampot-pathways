/* ==========================================================================
   blockplan-data.js — Kampot Pathways Property Data
   --------------------------------------------------------------------------
   Maps every clickable object ID in BlockPlan/BlockPlanClaude.svg to the
   content shown in its popup: label, dimensions, description, and photos.

   Source of truth for photos: KP_Photos.xlsx (Filename / Region /
   Description / Notes columns) — ONLY filenames listed in that sheet are
   referenced below. The KP folder holds many more photos than the sheet
   currently tags; those are deliberately left out until Robert adds rows
   for them. If you re-tag or add rows in KP_Photos.xlsx, tell Claude and
   this file gets regenerated to match — it is not read automatically at
   page-load time.

   STATUS (updated 3 Sept 2026): all five photo gaps from an earlier
   version of this file (Main House, Bungalow 1, Motorcycle Parking,
   Workshop, Vehicle Parking) are filled with real photos. No placeholders
   remain. The interim placeholder SVGs in images/placeholders/ and
   Photo-Prompts-ComfyUI.md are no longer referenced by this file and can
   be deleted whenever convenient.

   Second update (same day, after feedback on the first index.html draft):
   - main-house/bungalow-3 photo split corrected (source_images/20260903_145551.jpg
     re-tagged from main-house to Bungalow 3 in KP_Photos.xlsx; a second
     distinct "Side view from North" shot, source_images/20260903_145534.jpg, added to
     main-house)
   - galleryPhotos expanded to include every photo Robert flagged with
     Notes="x" in KP_Photos.xlsx, plus the new source_images/20260812_132019.jpg
   - water-tank1 updated to reflect the 5,000 litre capacity and the
     mains-pressure pump system (previously just said "rainwater
     catchment tank")
   - all three bungalow descriptions updated: modern kitchen/living area
     and modern bathroom with hot shower, not just Bungalow 3

   Third update (4 Sept 2026): two new rows Robert flagged Notes="x" in
   KP_Photos.xlsx added to galleryPhotos, both Property views —
   source_images/20200419_162947.jpg (Mango trees) and source_images/20260330_074321.jpg (So many
   fresh mangoes). Matching draft km/zh entries added to
   galleryTranslations in i18n-data.js (unreviewed, same as the rest of
   that file).

   Fourth update (4 Sept 2026): the 20260811_085227.mp4 kayaking video is
   commented out of pontoon.videos and galleryPhotos — 76MB is unfit for
   free static hosting. Re-enable once it has a YouTube/Vimeo home and the
   reference becomes an embed. Also: a compressed deploy/ folder was built
   (see deploy/README.md) containing only the 56 photos actually
   referenced in this file, resized/compressed for the web — that folder,
   not this KP working folder, is what gets pushed to hosting.
   ========================================================================== */

const propertyData = {

  /* ------------------------------------------------------------------ *
   *  RIVER ZONE
   * ------------------------------------------------------------------ */

  "kampot-river": {
    label: "Kampot River",
    dimensions: "200m wide (river itself is outside the block boundary)",
    region: "River views",
    description: "Absolute riverfront — the block's top boundary is a retaining wall directly on the Kampot River. Tidal, with up to 1.5m of daily sea-water tide.",
    photos: [
      { file: "source_images/20220913_063740.jpg", caption: "River morning reflections" },
      { file: "source_images/20220913_063751.jpg", caption: "River morning reflections" },
      { file: "source_images/20211127_173227.jpg", caption: "Sunset with light rays" },
      { file: "source_images/20211127_173726.jpg", caption: "Sunset with cloud formations" },
      { file: "source_images/20211127_173710.jpg", caption: "Sunset with light rays" }
    ],
    placeholder: false
  },

  "pontoon": {
    label: "Floating Pontoon",
    dimensions: "2.5m × 2.5m",
    region: "River views",
    description: "Floating pontoon set inside the deck's cutout, used for swimming and as a kayak launch point.",
    photos: [
      { file: "source_images/20240629_173300.jpg", caption: "Swimming from the floating pontoon" },
      { file: "source_images/20260811_085313.jpg", caption: "Kayaking from the pontoon" },
      { file: "source_images/20260811_085527.jpg", caption: "Kayaking across the river" },
      { file: "source_images/20260811_090007.jpg", caption: "Kayaking across the river" }
    ],
    // videos: temporarily disabled — 76MB raw phone video is too large for free
    // static hosting (self-hosted bandwidth cost / repo size). Re-enable once
    // it's uploaded to YouTube/Vimeo and this becomes an embed instead of a
    // direct file reference. See js/app.js video handling if re-adding.
    // videos: [
    //   { file: "20260811_085227.mp4", caption: "Kayaking from the pontoon" }
    // ],
    placeholder: false
  },

  "deck": {
    label: "River Deck",
    dimensions: "8m × 2.5m (L-shaped, timber)",
    region: "River views",
    description: "Timber deck built out over the river, connected to the paved area by the retaining-wall gate and six steps down to the pontoon.",
    photos: [
      { file: "source_images/20240304_125451.jpg", caption: "River deck lunch" },
      { file: "source_images/20250303_153325.jpg", caption: "River deck and pontoon", note: "Tide rises up to 1.5m daily from the sea" }
    ],
    placeholder: false
  },

  /* Steps 1-6 share one description — six individual grey stripes forming
     the stairway from the retaining-wall gate down to the deck/pontoon. */
  "step1": { label: "Steps to River", dimensions: "1m wide", region: "River views",
    description: "One of six steps down from the retaining-wall gate to the deck and pontoon.", photos: [], placeholder: false },
  "step2": { label: "Steps to River", dimensions: "1m wide", region: "River views",
    description: "One of six steps down from the retaining-wall gate to the deck and pontoon.", photos: [], placeholder: false },
  "step3": { label: "Steps to River", dimensions: "1m wide", region: "River views",
    description: "One of six steps down from the retaining-wall gate to the deck and pontoon.", photos: [], placeholder: false },
  "step4": { label: "Steps to River", dimensions: "1m wide", region: "River views",
    description: "One of six steps down from the retaining-wall gate to the deck and pontoon.", photos: [], placeholder: false },
  "step5": { label: "Steps to River", dimensions: "1m wide", region: "River views",
    description: "One of six steps down from the retaining-wall gate to the deck and pontoon.", photos: [], placeholder: false },
  "step6": { label: "Steps to River", dimensions: "1m wide", region: "River views",
    description: "One of six steps down from the retaining-wall gate to the deck and pontoon.", photos: [], placeholder: false },

  "retaining-wall-left": {
    label: "Retaining Wall",
    dimensions: "part of full-width retaining wall",
    region: "Property views",
    description: "Retaining wall separating the paved Coconut Garden from the river, running the full width of the block.",
    photos: [],
    placeholder: false
  },
  "retaining-wall-gate": {
    label: "River Gate",
    dimensions: "1m wide",
    region: "Property views",
    description: "Gate through the retaining wall giving direct access from the Coconut Garden down the steps to the deck and river.",
    photos: [],
    placeholder: false
  },
  "retaining-wall-right": {
    label: "Retaining Wall",
    dimensions: "part of full-width retaining wall",
    region: "Property views",
    description: "Retaining wall separating the paved Coconut Garden from the river, running the full width of the block.",
    photos: [],
    placeholder: false
  },

  /* ------------------------------------------------------------------ *
   *  LAND / GARDEN
   * ------------------------------------------------------------------ */

  "paved-area": {
    label: "Coconut Garden",
    dimensions: "25m × 2.5m",
    region: "Gardens",
    description: "Paved strip running the full width of the block between the house/bungalows and the retaining wall, planted with coconut palms.",
    photos: [
      { file: "source_images/20211207_073451.jpg", caption: "Orchids" },
      { file: "source_images/20211210_183630.jpg", caption: "Coconuts" }
    ],
    placeholder: false
  },

  /* ------------------------------------------------------------------ *
   *  MAIN HOUSE
   * ------------------------------------------------------------------ */

  "main-house": {
    label: "Main House",
    dimensions: "11m × 18m, L-shaped (≈168 m²)",
    region: "House plan",
    description: "L-shaped main house: 4 bedrooms, 2 bathrooms, kitchen/dining, storage area, laundry, and a verandah, with front (river-side) and rear entrances.",
    photos: [
      { file: "source_images/20260903_145609.jpg", caption: "Front entrance" },
      { file: "source_images/20260903_145537.jpg", caption: "Side view from North" },
      { file: "source_images/20260903_145534.jpg", caption: "Side view from North" }
    ],
    placeholder: false
  },

  "bedroom-4": {
    label: "Bedroom 4",
    dimensions: "4.2m × 2.5m",
    region: "House plan",
    description: "One of four bedrooms in the main house, at the river end of the house.",
    photos: [],
    placeholder: false
  },
  "bedroom-1": {
    label: "Bedroom 1",
    dimensions: "4m × 4m",
    region: "House plan",
    description: "One of four bedrooms in the main house.",
    photos: [],
    placeholder: false
  },
  "bedroom-2": {
    label: "Bedroom 2",
    dimensions: "4m × 4m",
    region: "House plan",
    description: "One of four bedrooms in the main house, adjacent to the front entrance.",
    photos: [],
    placeholder: false
  },
  "bedroom-3": {
    label: "Bedroom 3",
    dimensions: "4m × 4m",
    region: "House plan",
    description: "One of four bedrooms in the main house.",
    photos: [],
    placeholder: false
  },

  "entrance-front": {
    label: "Front Entrance",
    dimensions: "doorway",
    region: "House plan",
    description: "Front (river-side) entrance to the main house, running east-west between Bedroom 2 and Bedroom 3.",
    photos: [],
    placeholder: false
  },
  "entrance-rear": {
    label: "Rear Entrance",
    dimensions: "doorway",
    region: "House plan",
    description: "Rear entrance to the main house, connecting the bathrooms to the store room.",
    photos: [],
    placeholder: false
  },

  "bathroom-1": {
    label: "Bathroom 1",
    dimensions: "2.5m × 1.8m",
    region: "House plan",
    description: "One of two bathrooms in the main house.",
    photos: [],
    placeholder: false
  },
  "bathroom-2": {
    label: "Bathroom 2",
    dimensions: "2.5m × 1.8m",
    region: "House plan",
    description: "One of two bathrooms in the main house.",
    photos: [],
    placeholder: false
  },

  "laundry": {
    label: "Laundry",
    dimensions: "2.6m × 2m",
    region: "House plan",
    description: "Laundry area at the rear of the main house, below Bathroom 2.",
    photos: [],
    placeholder: false
  },

  "store-room": {
    label: "Store Room",
    dimensions: "4m × 6m",
    region: "House plan",
    description: "Storage area at the rear of the main house, connected to the bathrooms by the rear entrance.",
    photos: [],
    placeholder: false
  },

  /* ------------------------------------------------------------------ *
   *  BUNGALOWS
   * ------------------------------------------------------------------ */

  "bungalow-3": {
    label: "Bungalow 3",
    dimensions: "6m × 4m",
    region: "Bungalow 3",
    description: "Bungalow parallel to the top (riverfront) boundary, with open-plan living and direct river views. Modern open-plan kitchen and living area, with a modern bathroom and hot shower.",
    photos: [
      { file: "source_images/20240504_171616.jpg", caption: "River view from Bungalow 3" },
      { file: "source_images/20240504_171709.jpg", caption: "River view from Bungalow 3" },
      { file: "source_images/20240524_163802.jpg", caption: "Open plan living" },
      { file: "source_images/20240526_180921.jpg", caption: "Open plan living" },
      { file: "source_images/20240526_181001.jpg", caption: "Verandah views" },
      { file: "source_images/20240526_181012.jpg", caption: "Verandah views" },
      { file: "source_images/20260903_145551.jpg", caption: "Outdoor entertainment area" }
    ],
    placeholder: false
  },

  "bungalow-1": {
    label: "Bungalow 1",
    dimensions: "5m × 4m",
    region: "Bungalow 1",
    description: "Bungalow parallel to the right (north) boundary, closer to the river end of the block. Modern open-plan kitchen and living area, with a modern bathroom and hot shower.",
    photos: [
      { file: "source_images/20260903_145128.jpg", caption: "View of frontage" },
      { file: "source_images/20260903_145236.jpg", caption: "Open plan living" },
      { file: "source_images/20260903_145248.jpg", caption: "Open plan living" }
    ],
    placeholder: false
  },

  "bungalow-2": {
    label: "Bungalow 2",
    dimensions: "6.5m × 4m",
    region: "Bungalow 2",
    description: "Bungalow parallel to the right (north) boundary, positioned below Bungalow 1. Modern open-plan kitchen and living area, with a modern bathroom and hot shower.",
    photos: [
      { file: "source_images/20240621_101712.jpg", caption: "Open area living with modern kitchen" },
      { file: "source_images/20191126_074148.jpg", caption: "Bathroom" },
      { file: "source_images/20260812_124941.jpg", caption: "View of frontage" },
      { file: "source_images/20260903_145416.jpg", caption: "Open plan living" },
      { file: "source_images/20260903_145412.jpg", caption: "Open plan living" }
    ],
    placeholder: false
  },

  /* ------------------------------------------------------------------ *
   *  SERVICES — water, parking, workshop
   * ------------------------------------------------------------------ */

  "water-tank1": {
    label: "Water Storage Tank",
    dimensions: "5,000 litre capacity",
    region: "Utilities",
    description: "Water storage tank positioned just below the main house. Water to the house and bungalows is maintained by pumps at mains pressure.",
    photos: [],
    placeholder: false
  },

  "parking-moto": {
    label: "Motorcycle Parking",
    dimensions: "6m × 4m",
    region: "Moto-Parking",
    description: "Covered parking for motorcycles and bicycles, one of three sections in the services building that runs parallel to the left (south) boundary.",
    photos: [
      { file: "source_images/20260812_124927.jpg", caption: "Parking for motorcycles and bicycles" }
    ],
    placeholder: false
  },

  "workshop": {
    label: "Workshop",
    dimensions: "6m × 4m",
    region: "Workshop",
    description: "Woodworking and metalworking workshop, the middle section of the services building — 8 metres of workbench space.",
    photos: [
      { file: "source_images/20260812_132027.jpg", caption: "8 metres of workbench space" }
    ],
    placeholder: false
  },

  "parking-vehicle": {
    label: "Vehicle Parking",
    dimensions: "6m × 4m",
    region: "Vehicle Parking",
    description: "Covered parking for one vehicle, the third section of the services building, closest to the rear gate and access road.",
    photos: [
      { file: "source_images/20260903_145437.jpg", caption: "Parking for one vehicle" }
    ],
    placeholder: false
  },

  /* ------------------------------------------------------------------ *
   *  BOTTOM BOUNDARY — access road, gate, fence
   * ------------------------------------------------------------------ */

  "fence-left": {
    label: "Boundary Fence",
    dimensions: "2.5m high",
    region: "Property views",
    description: "Fence along the bottom (east) boundary, left of the access gate.",
    photos: [],
    placeholder: false
  },
  "gate-bottom": {
    label: "Access Gate",
    dimensions: "4m wide",
    region: "Property views",
    description: "Main vehicle/pedestrian gate on the bottom (east) boundary, opening onto the access road.",
    photos: [
      { file: "source_images/20240824_144505.jpg", caption: "Rear gate from the access road" },
      { file: "source_images/20250323_144855.jpg", caption: "Rear gate from the access road" },
      { file: "source_images/20260812_132036.jpg", caption: "View from rear gate" },
      { file: "source_images/20260812_131959.jpg", caption: "View toward rear gate" }
    ],
    placeholder: false
  },
  "fence-right": {
    label: "Boundary Fence",
    dimensions: "2.5m high",
    region: "Property views",
    description: "Fence along the bottom (east) boundary, right of the access gate, running to the access road.",
    photos: [],
    placeholder: false
  }

};

/* ==========================================================================
   General gallery photos — not tied to a specific block-plan object ID.
   Candidates for a Home page gallery or "Surroundings" section.

   Items marked with Notes="x" in KP_Photos.xlsx are Robert's explicit
   "add this to the gallery" flag — several of these also appear elsewhere
   (e.g. in kampot-river or pontoon's photos above); that's intentional,
   the same photo can be both a specific object's illustration and a
   general gallery shot.
   ========================================================================== */
const galleryPhotos = [
  { file: "source_images/20211127_173227.jpg", region: "River views", caption: "Sunset with light rays" },
  { file: "source_images/20220611_183624.jpg", region: "River views", caption: "Bokor Pyramid" },
  { file: "source_images/20220625_171805.jpg", region: "River views", caption: "Bokor afternoon sun ray" },
  { file: "source_images/20220625_171835.jpg", region: "River views", caption: "Bokor afternoon sun ray" },
  { file: "source_images/20220819_182331.jpg", region: "River views", caption: "Sunset treescape" },
  { file: "source_images/20220819_182556.jpg", region: "River views", caption: "Bokor sunset" },
  { file: "source_images/20220819_182728.jpg", region: "River views", caption: "Bokor sunset" },
  { file: "source_images/20220914_072638.jpg", region: "River views", caption: "River orchids" },
  { file: "source_images/20240304_125451.jpg", region: "River views", caption: "River deck lunch" },
  { file: "source_images/20240629_173300.jpg", region: "River views", caption: "Swimming fun times from the floating pontoon" },
  // { file: "20260811_085227.mp4", region: "River views", caption: "Kayaking from the pontoon", type: "video" }, // disabled — see note above pontoon.videos
  { file: "source_images/IMG-20250215-WA0003.jpg", region: "River views", caption: "Kayaking under the canopy" },
  { file: "source_images/IMG-20250215-WA0005.jpg", region: "River views", caption: "Kayaking under the canopy" },
  { file: "source_images/IMG-20250215-WA0006.jpg", region: "River views", caption: "Kayaking under the canopy" },
  { file: "source_images/20211210_183630.jpg", region: "Gardens", caption: "Coconuts" },
  { file: "source_images/20200225_065327.jpg", region: "Surroundings", caption: "Salt fields at sunset" },
  { file: "source_images/20240824_144505.jpg", region: "Property views", caption: "Rear gate from the access road" },
  { file: "source_images/20250323_144855.jpg", region: "Property views", caption: "Rear gate from the access road" },
  { file: "source_images/20260812_131959.jpg", region: "Property views", caption: "View toward rear gate" },
  { file: "source_images/20260812_132019.jpg", region: "Property views", caption: "Rear driveway" },
  { file: "source_images/milky way 1.jpg", region: "Property views", caption: "Milky Way, blue shift" },
  { file: "source_images/Milky way Amine.jpg", region: "Property views", caption: "Milky Way, red shift" },
  { file: "source_images/20200419_162947.jpg", region: "Property views", caption: "Mango trees" },
  { file: "source_images/20260330_074321.jpg", region: "Property views", caption: "So many fresh mangoes" }
];

/* ==========================================================================
   Site-level config — not part of the block plan.
   ========================================================================== */
const siteConfig = {
  homeHeroImage: "source_images/20211127_173710.jpg",
  homeHeroImageMobile: "source_images/20211127_173710-portrait.jpg"
};

/* Click handler pattern (for when index.html is built):
   document.querySelectorAll('#block-plan [id]').forEach(el => {
     el.addEventListener('click', (e) => {
       const data = propertyData[e.currentTarget.id];
       if (data) showPopup(data);
     });
   });
*/
