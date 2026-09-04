# Kampot Pathways — deploy folder

This folder is what gets pushed to hosting (GitHub Pages / Cloudflare Pages /
Netlify) — NOT the parent KP folder, which holds full-resolution originals
and working files (KP_Photos.xlsx, BlockPlan/, translation review docs, etc.)
that don't need to be public or don't need to ship to visitors' browsers.

## How it was built (4 Sept 2026)

- index.html, css/, js/ copied as-is from the parent folder.
- Only the 55 photo files actually referenced in js/blockplan-data.js
  (propertyData photos + galleryPhotos + siteConfig hero images) were
  copied — resized to a 1920px longest edge and re-saved as JPEG quality 82.
  This took the used-photo footprint from 155.2 MB to 20.1 MB (~87% smaller)
  with no visible quality loss on screen.
- The 20260811_085227.mp4 kayaking video (76MB) is excluded — see the
  "Fourth update" note in js/blockplan-data.js. Self-hosting it isn't a good
  fit for free static hosting; it needs a YouTube/Vimeo home first.
- 24 unreferenced media files sitting in the parent folder (54.7MB) were
  never used by the site and were correctly left out.

## Note

"milky way 1.jpg" briefly looked corrupted (a grey band across the bottom
of the frame) during the first compression pass — that turned out to be a
one-off read glitch over the network folder connection, not real file
damage. Re-read cleanly and re-compressed on 4 Sept 2026; verified full
frame, no artifact.

## Regenerating

If you add/remove photos from KP_Photos.xlsx or edit blockplan-data.js,
tell Claude and this folder gets rebuilt from the parent folder's current
source files — it is not built automatically.
