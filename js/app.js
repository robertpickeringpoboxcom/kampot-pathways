/* ==========================================================================
   app.js — Kampot Pathways site behaviour
   --------------------------------------------------------------------------
   Depends on js/blockplan-data.js (propertyData, galleryPhotos, siteConfig),
   js/contact-data.js (primaryContacts, salesContact) and js/i18n-data.js
   (uiStrings, propertyTranslations, galleryTranslations,
   svgLabelTranslations, contactLanguageNames) being loaded first. No build
   step, no frameworks — plain DOM APIs only, so this runs unmodified on
   Netlify or GitHub Pages.

   LANGUAGE SUPPORT: the site's English content lives entirely in
   index.html and js/blockplan-data.js, unchanged. js/i18n-data.js holds
   Khmer/Mandarin overrides layered on top of that English base, keyed by
   the same ids/filenames. currentLang picks which layer to read through
   the getPropertyText() / getGalleryText() / t() helpers below — nothing
   in the base data files needs to change to add or edit a translation.
   ========================================================================== */

(function () {
  "use strict";

  /* ------------------------------------------------------------------ *
   *  Language state
   * ------------------------------------------------------------------ */

  const SUPPORTED_LANGS = ["en", "km", "zh"];
  const LANG_STORAGE_KEY = "kp-lang";

  function readStoredLang() {
    try {
      const stored = window.localStorage.getItem(LANG_STORAGE_KEY);
      if (stored && SUPPORTED_LANGS.indexOf(stored) !== -1) return stored;
    } catch (e) {
      // localStorage unavailable (private browsing, etc.) — fall through to default
    }
    return "en";
  }

  let currentLang = readStoredLang();

  /* t(key) — static UI copy from uiStrings, English fallback if a key is
     missing in the current language. */
  function t(key) {
    const dict = uiStrings[currentLang] || uiStrings.en;
    if (dict && dict[key] != null) return dict[key];
    return (uiStrings.en && uiStrings.en[key]) || "";
  }

  /* tFormat(key, {i, n}) — same as t(), replacing "{i}"/"{n}"-style
     placeholders with the given values. */
  function tFormat(key, params) {
    let str = t(key);
    Object.keys(params || {}).forEach(function (p) {
      str = str.replace("{" + p + "}", params[p]);
    });
    return str;
  }

  /* getPropertyText(id, field) — a propertyData field (label, dimensions,
     region or description) in the current language, falling back to the
     English value in blockplan-data.js if no translation exists. */
  function getPropertyText(id, field) {
    const base = propertyData[id];
    if (!base) return "";
    if (currentLang !== "en") {
      const override = propertyTranslations[currentLang] && propertyTranslations[currentLang][id];
      if (override && override[field] != null) return override[field];
    }
    return base[field] || "";
  }

  /* getPhotoCaption(id, filename, baseCaption) — a propertyData photo's
     caption in the current language. */
  function getPhotoCaption(id, filename, baseCaption) {
    if (currentLang !== "en") {
      const override = propertyTranslations[currentLang] && propertyTranslations[currentLang][id];
      if (override && override.photos && override.photos[filename] != null) {
        return override.photos[filename];
      }
    }
    return baseCaption;
  }

  /* getGalleryText(filename, field, base) — a galleryPhotos field
     (region or caption) in the current language. */
  function getGalleryText(filename, field, base) {
    if (currentLang !== "en") {
      const override = galleryTranslations[currentLang] && galleryTranslations[currentLang][filename];
      if (override && override[field] != null) return override[field];
    }
    return base;
  }

  /* ------------------------------------------------------------------ *
   *  Development-plan SVG
   *  Built once, at load, from the Property section's #block-plan — the
   *  Development section used to carry its own hand-copied duplicate of
   *  every room/feature coordinate, which meant every measurement update
   *  had to be applied twice (see BlockPlanDrawing.md). Now there's one
   *  geometry source: this clones #block-plan, drops the legend, appends
   *  the proposed-development-area overlay (unique to this section), and
   *  must run BEFORE initBlockPlan() below so the clone doesn't pick up
   *  the .kp-clickable/tabindex/role/aria-label attributes that function
   *  adds to the original — the development plan stays static, no click
   *  targets, same as before consolidation.
   * ------------------------------------------------------------------ */

  var DEVELOPMENT_AREA_OVERLAY_SVG =
    '<!-- PROPOSED NEW DEVELOPMENT AREA (draft — see BlockPlanDrawing.md' +
    ' Round 9). Repositioned for the corrected 70m-long block: top edge' +
    ' sits 3m below Bungalow 2 (bottom at y=527.01), bottom edge sits 1m' +
    ' above the (now 4m closer) Bottom Boundary at y=1047.' +
    ' x=221.14, y=572.01, w=132, h=459.99 (px) = 8.8m x 30.67m = ~270 sqm -->' +
    '<g id="proposed-development">' +
    '<rect id="proposed-development-area" x="221.14285" y="572.01"' +
    ' width="132" height="459.99" fill="#fff8e1" fill-opacity="0.55"' +
    ' stroke="#c62828" stroke-width="2" stroke-dasharray="8,5" />' +
    '<text data-i18n="development.rectLabel1" x="287.14285" y="790.58"' +
    ' text-anchor="middle" font-size="9" font-weight="bold" fill="#b71c1c"' +
    ' id="text-dev-label1">Proposed new</text>' +
    '<text data-i18n="development.rectLabel2" x="287.14285" y="802.58"' +
    ' text-anchor="middle" font-size="9" font-weight="bold" fill="#b71c1c"' +
    ' id="text-dev-label2">development area</text>' +
    '<text x="287.14285" y="823.58" text-anchor="middle" font-size="10"' +
    ' font-weight="bold" fill="#b71c1c" id="text-dev-area">&#8776; 270 m&#178;</text>' +
    '</g>';

  function buildDevelopmentPlan() {
    var source = document.getElementById("block-plan");
    var container = document.getElementById("development-plan-container");
    if (!source || !container) return;

    var clone = source.cloneNode(true);
    clone.setAttribute("id", "development-plan");

    // Suffix every id in the clone so it never collides with the
    // original's — same "-dev" convention the old hand-copied markup used.
    clone.querySelectorAll("[id]").forEach(function (el) {
      el.setAttribute("id", el.getAttribute("id") + "-dev");
    });

    var legend = clone.querySelector("#legend-dev");
    if (legend) legend.remove();

    clone.insertAdjacentHTML("beforeend", DEVELOPMENT_AREA_OVERLAY_SVG);

    container.appendChild(clone);
  }

  /* ------------------------------------------------------------------ *
   *  Block-plan click targets
   *  Wires every SVG element whose id matches a propertyData key to the
   *  popup, and marks it visually interactive (see .kp-clickable in
   *  style.css). Ids in the SVG that AREN'T in propertyData (the compass,
   *  the legend, plain <text> labels) are left alone — clicking them does
   *  nothing, by design.
   * ------------------------------------------------------------------ */

  let lastFocusedElement = null;

  function initBlockPlan() {
    const svg = document.getElementById("block-plan");
    if (!svg) return;

    Object.keys(propertyData).forEach(function (id) {
      const el = svg.getElementById ? svg.getElementById(id) : document.getElementById(id);
      if (!el) return; // data entry with no matching SVG object (shouldn't happen, but don't fail silently in the console)

      el.classList.add("kp-clickable");
      el.setAttribute("tabindex", "0");
      el.setAttribute("role", "button");

      el.addEventListener("click", function () {
        openObjectPopup(id);
      });
      el.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openObjectPopup(id);
        }
      });
    });

    updateBlockPlanAria();
  }

  /* aria-labels depend on the current language, so this runs both at
     startup (from initBlockPlan) and again on every language switch —
     separated from initBlockPlan so switching language never re-wires
     (and so never double-fires) the click/keydown listeners above. */
  function updateBlockPlanAria() {
    const svg = document.getElementById("block-plan");
    if (!svg) return;
    Object.keys(propertyData).forEach(function (id) {
      const el = svg.getElementById ? svg.getElementById(id) : document.getElementById(id);
      if (!el) return;
      el.setAttribute("aria-label", getPropertyText(id, "label") + " — view details");
    });
  }

  /* The plan's <text> labels (e.g. "Bed 1", "Workshop") are baked
     directly into the SVG markup in index.html as English. Swap their
     content per svgLabelTranslations on language change, remembering the
     original English the first time this runs so switching back to
     English (or to a language with no override for a given id) restores
     it exactly rather than leaving stale text behind.

     The Development section's plan is a runtime clone of #block-plan
     (see buildDevelopmentPlan()) with every id suffixed "-dev" — it's
     built once, before this function ever runs, so without applying the
     same overrides to it (via that suffix) it would silently stay in
     English forever after the first language switch. Both svgs share
     one svgOriginalLabels snapshot since they start out identical. */
  let svgOriginalLabels = null;

  function applySvgLabelOverrides(svg, idSuffix) {
    if (!svg) return;
    const overrides = svgLabelTranslations[currentLang];
    Object.keys(svgOriginalLabels).forEach(function (id) {
      const el = svg.getElementById ? svg.getElementById(id + idSuffix) : document.getElementById(id + idSuffix);
      if (!el) return;
      el.textContent = (overrides && overrides[id] != null) ? overrides[id] : svgOriginalLabels[id];
    });
  }

  function translateSvgLabels() {
    const svg = document.getElementById("block-plan");
    if (!svg) return;

    if (!svgOriginalLabels) {
      svgOriginalLabels = {};
      const ids = Object.keys(svgLabelTranslations.km).concat(Object.keys(svgLabelTranslations.zh));
      ids.forEach(function (id) {
        if (svgOriginalLabels[id] !== undefined) return;
        const el = svg.getElementById ? svg.getElementById(id) : document.getElementById(id);
        if (el) svgOriginalLabels[id] = el.textContent;
      });
    }

    applySvgLabelOverrides(svg, "");
    applySvgLabelOverrides(document.getElementById("development-plan"), "-dev");
  }

  /* ------------------------------------------------------------------ *
   *  Popup modal — shared by block-plan objects and the gallery grid
   * ------------------------------------------------------------------ */

  const modalBackdrop = () => document.getElementById("kp-modal-backdrop");
  const modalTitle = () => document.getElementById("kp-modal-title");
  const modalMeta = () => document.getElementById("kp-modal-meta");
  const modalDescription = () => document.getElementById("kp-modal-description");
  const modalMainImage = () => document.getElementById("kp-modal-main-image");
  const modalThumbs = () => document.getElementById("kp-modal-thumbs");
  const modalVideoWrap = () => document.getElementById("kp-modal-video-wrap");

  let currentPhotos = []; // [{file, caption}]
  let currentPhotoIndex = 0;

  function renderMainPhoto() {
    const img = modalMainImage();
    if (!currentPhotos.length) {
      img.src = "";
      img.alt = "";
      img.classList.add("hidden");
      return;
    }
    img.classList.remove("hidden");
    const photo = currentPhotos[currentPhotoIndex];
    img.src = photo.file;
    img.alt = photo.caption || "";
  }

  function renderThumbs() {
    const wrap = modalThumbs();
    wrap.innerHTML = "";
    if (currentPhotos.length <= 1) {
      wrap.classList.add("hidden");
      return;
    }
    wrap.classList.remove("hidden");
    currentPhotos.forEach(function (photo, i) {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className =
        "flex-shrink-0 w-16 h-16 rounded-md overflow-hidden border-2 " +
        (i === currentPhotoIndex ? "border-river-600" : "border-transparent");
      btn.setAttribute("aria-label", tFormat("modal.photoOf", { i: i + 1, n: currentPhotos.length }));
      const thumb = document.createElement("img");
      thumb.src = photo.file;
      thumb.alt = photo.caption || "";
      thumb.className = "w-full h-full object-cover";
      btn.appendChild(thumb);
      btn.addEventListener("click", function () {
        currentPhotoIndex = i;
        renderMainPhoto();
        renderThumbs();
      });
      wrap.appendChild(btn);
    });
  }

  function openObjectPopup(id) {
    const data = propertyData[id];
    if (!data) return;

    modalTitle().textContent = getPropertyText(id, "label");

    const metaParts = [];
    const dims = getPropertyText(id, "dimensions");
    const region = getPropertyText(id, "region");
    if (dims) metaParts.push(dims);
    if (region) metaParts.push(region);
    modalMeta().textContent = metaParts.join(" · ");

    modalDescription().textContent = getPropertyText(id, "description");

    currentPhotos = (data.photos || []).map(function (photo) {
      return { file: photo.file, caption: getPhotoCaption(id, photo.file, photo.caption) };
    });
    currentPhotoIndex = 0;
    renderMainPhoto();
    renderThumbs();

    // Video (currently only the pontoon has one)
    const videoWrap = modalVideoWrap();
    videoWrap.innerHTML = "";
    if (data.videos && data.videos.length) {
      videoWrap.classList.remove("hidden");
      data.videos.forEach(function (video) {
        const v = document.createElement("video");
        v.src = video.file;
        v.controls = true;
        v.className = "w-full rounded-lg mt-3";
        videoWrap.appendChild(v);
      });
    } else {
      videoWrap.classList.add("hidden");
    }

    showModal();
  }

  function openGalleryPopup(index) {
    const photo = galleryPhotos[index];
    if (!photo) return;

    const caption = getGalleryText(photo.file, "caption", photo.caption);
    const region = getGalleryText(photo.file, "region", photo.region);

    modalTitle().textContent = caption || region || t("gallery.defaultPhotoTitle");
    modalMeta().textContent = region || "";
    modalDescription().textContent = "";

    const videoWrap = modalVideoWrap();
    videoWrap.innerHTML = "";

    if (photo.type === "video") {
      // Video gallery item (e.g. the pontoon kayaking clip) — show the
      // player instead of a static image.
      currentPhotos = [];
      renderMainPhoto();
      renderThumbs();

      videoWrap.classList.remove("hidden");
      const v = document.createElement("video");
      v.src = photo.file;
      v.controls = true;
      v.autoplay = true;
      v.className = "w-full rounded-lg mt-3";
      videoWrap.appendChild(v);
    } else {
      currentPhotos = [{ file: photo.file, caption: caption }];
      currentPhotoIndex = 0;
      renderMainPhoto();
      renderThumbs();
      videoWrap.classList.add("hidden");
    }

    showModal();
  }

  function showModal() {
    const backdrop = modalBackdrop();
    lastFocusedElement = document.activeElement;
    backdrop.hidden = false;
    // Force layout so the transition below actually animates
    // eslint-disable-next-line no-unused-expressions
    backdrop.offsetHeight;
    backdrop.classList.remove("kp-modal-closed");
    document.body.classList.add("overflow-hidden");
    document.getElementById("kp-modal-close").focus();
  }

  function closeModal() {
    const backdrop = modalBackdrop();
    backdrop.classList.add("kp-modal-closed");
    document.body.classList.remove("overflow-hidden");
    // Stop any playing video so it doesn't keep running (or playing audio)
    // behind a closed modal.
    modalVideoWrap()
      .querySelectorAll("video")
      .forEach(function (v) {
        v.pause();
      });
    window.setTimeout(function () {
      backdrop.hidden = true;
    }, 200);
    if (lastFocusedElement && typeof lastFocusedElement.focus === "function") {
      lastFocusedElement.focus();
    }
  }

  function initModal() {
    const backdrop = modalBackdrop();
    if (!backdrop) return;

    document.getElementById("kp-modal-close").addEventListener("click", closeModal);
    backdrop.addEventListener("click", function (e) {
      if (e.target === backdrop) closeModal();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !backdrop.hidden) closeModal();
    });
  }

  /* ------------------------------------------------------------------ *
   *  Gallery grid — general photos not tied to a block-plan object
   * ------------------------------------------------------------------ */

  function initGallery() {
    const grid = document.getElementById("kp-gallery-grid");
    if (!grid) return;
    grid.innerHTML = ""; // re-run safely on every language switch

    galleryPhotos.forEach(function (photo, i) {
      const caption = getGalleryText(photo.file, "caption", photo.caption);

      // No forced aspect-square crop — each photo keeps its own natural
      // proportions (portrait/landscape) inside a CSS-columns "masonry"
      // layout (see #kp-gallery-grid in index.html), per the design
      // brief's ask to let real photography breathe instead of
      // identical cropped tiles (BlockPlanDrawing.md Round 10).
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className =
        "group relative block w-full mb-3 sm:mb-4 break-inside-avoid overflow-hidden rounded-lg bg-coconut focus:outline-none focus-visible:ring-2 focus-visible:ring-tide-600";
      btn.setAttribute("aria-label", (photo.type === "video" ? t("gallery.playVideo") : "") + caption + t("gallery.viewLarger"));

      if (photo.type === "video") {
        // No poster image on file, so use a simple video-file frame
        // (first frame, muted, no controls) as the thumbnail, with a
        // play icon on top — avoids needing a separate poster asset.
        const vid = document.createElement("video");
        vid.src = photo.file;
        vid.muted = true;
        vid.preload = "metadata";
        vid.className = "w-full h-auto block";
        btn.appendChild(vid);

        const playIcon = document.createElement("span");
        playIcon.className =
          "absolute inset-0 flex items-center justify-center";
        playIcon.innerHTML =
          '<span class="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center shadow"><svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-river translate-x-0.5" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></span>';
        btn.appendChild(playIcon);
      } else {
        const img = document.createElement("img");
        img.src = photo.file;
        img.alt = caption;
        img.loading = "lazy";
        img.className = "w-full h-auto block transition-transform duration-200 group-hover:scale-105";
        btn.appendChild(img);
      }

      const label = document.createElement("span");
      label.className =
        "absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent text-white text-xs px-2 py-1.5 text-left opacity-0 group-hover:opacity-100 transition-opacity";
      label.textContent = caption;
      btn.appendChild(label);

      btn.addEventListener("click", function () {
        openGalleryPopup(i);
      });

      grid.appendChild(btn);
    });
  }

  /* ------------------------------------------------------------------ *
   *  Contact section
   *  Reads primaryContacts and salesContact from js/contact-data.js.
   *  Names, company and phone numbers are just data (numerals/proper
   *  nouns), so only the "language" word itself (e.g. "English") is
   *  translated, via contactLanguageNames in js/i18n-data.js.
   * ------------------------------------------------------------------ */

  function initContacts() {
    const primaryList = document.getElementById("kp-primary-contacts");
    const salesWrap = document.getElementById("kp-sales-contact");
    const salesBody = document.getElementById("kp-sales-contact-body");

    if (primaryList) primaryList.innerHTML = ""; // re-run safely on every language switch
    if (salesBody) salesBody.innerHTML = "";
    if (salesWrap) salesWrap.hidden = true;

    if (primaryList && typeof primaryContacts !== "undefined" && primaryContacts.length) {
      const langNames = contactLanguageNames[currentLang] || contactLanguageNames.en;

      // Side-by-side table: one column per contact — "Language — Name" on
      // the top row, the phone (tel: link) on the row below. Email (if set)
      // sits under both, spanning the width. Layout per Robert, 2026-09-13.
      const table = document.createElement("table");
      table.className = "w-full border-collapse text-left";
      const nameRow = document.createElement("tr");
      const phoneRow = document.createElement("tr");

      primaryContacts.forEach(function (contact) {
        const langLabel = langNames[contact.language] || contact.language;

        const nameCell = document.createElement("td");
        nameCell.className = "align-top py-1 pr-4 font-medium text-charcoal";
        nameCell.textContent = langLabel + " — " + contact.name;

        const phoneCell = document.createElement("td");
        phoneCell.className = "align-top py-1 pr-4";
        const phone = document.createElement("a");
        phone.href = "tel:" + contact.phone.replace(/[^+\d]/g, "");
        phone.className = "whitespace-nowrap text-tide-700 hover:underline";
        phone.textContent = contact.phone;
        phoneCell.appendChild(phone);

        nameRow.appendChild(nameCell);
        phoneRow.appendChild(phoneCell);
      });

      table.appendChild(nameRow);
      table.appendChild(phoneRow);
      primaryList.appendChild(table);

      if (typeof primaryContactEmail !== "undefined" && primaryContactEmail) {
        const emailBlock = document.createElement("div");
        emailBlock.className = "mt-4 pt-4 border-t border-river/10";
        const emailLabel = document.createElement("span");
        emailLabel.className = "mb-1 block text-xs uppercase tracking-wide text-charcoal/55";
        emailLabel.textContent = "Email";
        const email = document.createElement("a");
        email.href = "mailto:" + primaryContactEmail;
        email.className = "break-all text-tide-700 hover:underline";
        email.textContent = primaryContactEmail;
        emailBlock.appendChild(emailLabel);
        emailBlock.appendChild(email);
        primaryList.appendChild(emailBlock);
      }
    }

    // Sales Contact is a third party (agent, etc.) who may not exist yet.
    // Only show the block once firstName is filled in — an empty
    // salesContact stays fully hidden rather than showing blank fields.
    if (
      salesWrap &&
      salesBody &&
      typeof salesContact !== "undefined" &&
      salesContact.firstName &&
      salesContact.firstName.trim() !== ""
    ) {
      const nameParts = [salesContact.firstName, salesContact.surname].filter(Boolean);
      const nameLine = document.createElement("p");
      nameLine.className = "font-medium text-charcoal";
      nameLine.textContent = nameParts.join(" ");
      salesBody.appendChild(nameLine);

      if (salesContact.company) {
        const companyLine = document.createElement("p");
        companyLine.textContent = salesContact.company;
        salesBody.appendChild(companyLine);
      }

      (salesContact.phones || []).slice(0, 3).forEach(function (phoneNumber) {
        if (!phoneNumber) return;
        const phone = document.createElement("a");
        phone.href = "tel:" + phoneNumber.replace(/\s+/g, "");
        phone.className = "block text-tide-700 hover:underline";
        phone.textContent = phoneNumber;
        salesBody.appendChild(phone);
      });

      salesWrap.hidden = false;
    }
  }

  /* ------------------------------------------------------------------ *
   *  Language switcher
   *  A row of EN / ខ្មែរ / 中文 buttons (desktop nav + mobile menu, see
   *  index.html), each with data-lang="en|km|zh". Re-renders every piece
   *  of translated content in place — no page reload.
   * ------------------------------------------------------------------ */

  function applyStaticStrings() {
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      el.textContent = t(el.getAttribute("data-i18n"));
    });
    document.querySelectorAll("[data-i18n-aria-label]").forEach(function (el) {
      el.setAttribute("aria-label", t(el.getAttribute("data-i18n-aria-label")));
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      el.setAttribute("placeholder", t(el.getAttribute("data-i18n-placeholder")));
    });
  }

  function updateLangSwitcherUI() {
    document.querySelectorAll("[data-lang]").forEach(function (btn) {
      const isActive = btn.getAttribute("data-lang") === currentLang;
      btn.classList.toggle("kp-lang-active", isActive);
      btn.setAttribute("aria-pressed", String(isActive));
    });
  }

  /* Khmer and Chinese script need their own web fonts — Tailwind's
     default sans stack doesn't include either, and the system fallback
     varies a lot by device. See css/style.css for the actual font-family
     rules; this just toggles which one applies. */
  function updateFontClass() {
    document.body.classList.remove("lang-km", "lang-zh");
    if (currentLang === "km") document.body.classList.add("lang-km");
    if (currentLang === "zh") document.body.classList.add("lang-zh");
  }

  function setLanguage(lang) {
    if (SUPPORTED_LANGS.indexOf(lang) === -1) lang = "en";
    currentLang = lang;
    try {
      window.localStorage.setItem(LANG_STORAGE_KEY, lang);
    } catch (e) {
      // localStorage unavailable — language choice just won't persist across visits
    }

    document.documentElement.lang = lang;
    updateFontClass();
    applyStaticStrings();
    translateSvgLabels();
    updateBlockPlanAria();
    initGallery();
    initContacts();
    updateLangSwitcherUI();
  }

  function initLanguageSwitcher() {
    document.querySelectorAll("[data-lang]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        setLanguage(btn.getAttribute("data-lang"));
      });
    });
  }

  /* ------------------------------------------------------------------ *
   *  Contact form (Formspree)
   *  SAFETY GUARD: until the real endpoint is wired up in index.html
   *  (see the TODO there — action must be "https://formspree.io/f/<id>"),
   *  a submit attempt does NOT POST anywhere; it shows a short status
   *  note instead, so a visitor never gets a dead-end 404 page. Once the
   *  /f/<id> form ID is in place, normal browser submission to Formspree
   *  takes over with no further JS needed.
   * ------------------------------------------------------------------ */

  function initContactForm() {
    const form = document.getElementById("contact-form");
    if (!form) return;

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const action = (form.getAttribute("action") || "").replace(/\/+$/, "");
      const endpointReady = /^https:\/\/formspree\.io\/f\/[a-z0-9]+$/i.test(action);
      const button = form.querySelector("button[type=\"submit\"]");
      if (button) {
        button.disabled = true;
        setTimeout(function () { button.disabled = false; }, 3000);
      }
      let note = form.querySelector("[data-form-guard]");
      if (!endpointReady) {
        if (!note) {
          note = document.createElement("p");
          note.setAttribute("data-form-guard", "");
          note.className = "mt-4 text-center text-sm text-laterite-700";
          form.appendChild(note);
        }
        note.textContent = t("contact.formGuard");
        return;
      }
      if (note) note.remove();
      form.submit();
    });
  }

  /* ------------------------------------------------------------------ *
   *  Mobile nav toggle
   * ------------------------------------------------------------------ */

  function initMobileNav() {
    const toggle = document.getElementById("kp-nav-toggle");
    const menu = document.getElementById("kp-nav-menu");
    if (!toggle || !menu) return;

    toggle.addEventListener("click", function () {
      const isOpen = !menu.classList.contains("hidden");
      menu.classList.toggle("hidden", isOpen);
      toggle.setAttribute("aria-expanded", String(!isOpen));
    });

    // Close the mobile menu after tapping a link
    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        menu.classList.add("hidden");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ------------------------------------------------------------------ */

  document.addEventListener("DOMContentLoaded", function () {
    buildDevelopmentPlan();
    initBlockPlan();
    initModal();
    initLanguageSwitcher();
    initMobileNav();
    initContactForm();
    // Applies currentLang (English by default, or whatever was
    // remembered from a previous visit) to every piece of translated
    // content, including the initial gallery/contacts render — replaces
    // calling initGallery()/initContacts() separately.
    setLanguage(currentLang);
  });
})();
