/* ==========================================================================
   contact-data.js — Kampot Pathways Contact Details
   --------------------------------------------------------------------------
   Edit this file to change what appears in the Contact section — nothing
   in index.html or app.js needs to change.

   primaryContacts: always shown, in order.

   salesContact: a third-party sales/agent contact. Leave firstName empty
   ("") to hide the whole block — js/app.js checks firstName and renders
   nothing if it's blank, so an unused sales contact never shows an empty
   card on the live site. Fill in any subset of fields once there is one;
   phones accepts up to 3 numbers and only renders the ones you fill in.
   ========================================================================== */

const primaryContacts = [
  { language: "English", name: "Robert", phone: "010726644" },
  { language: "Khmer", name: "Koemyi", phone: "093249307" }
];

const salesContact = {
  firstName: "",
  surname: "",
  company: "",
  phones: [] // up to 3 phone numbers, e.g. ["012345678", "098765432"]
};
