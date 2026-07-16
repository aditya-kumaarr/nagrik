# HTML email drafting rules (Gmail drafts for Aditya)

Gmail's compose editor fragments HTML at `<tr>` boundaries — content in its own table
row (especially the footer with name/phone/links) gets visually detached from the card.
Every email draft MUST follow these rules so that separation can never happen:

1. **Single-cell structure only.** Exactly two tables: one full-width wrapper
   (`bgcolor="#eceae5"`) with one `<tr><td align="center">`, and inside it one 560px
   card table (`bgcolor="#fbfaf8"`, `border:1px solid #e7e5e0`) with exactly ONE
   `<tr><td>` containing the ENTIRE email as stacked `<div>`/`<p>` elements.
   Never give the footer (or any section) its own `<tr>` or nested layout table.
2. **Footer stays in the same cell.** The personal-details block (Aditya Kumar /
   8809031073 | adityaakumaarr@gmail.com / LinkedIn / Portfolio / Resume) is a `<div>`
   with `border-top:1px solid #e7e5e0; text-align:center;` at the end of the one card
   cell — never a separate row, never a separate table.
3. **Styling:** inline styles only; duplicate backgrounds as both `bgcolor` attribute and
   `background-color` style; hex colors only (no `rgba()`); no `<head>`, `<meta>`, or
   `<style>` blocks (Gmail strips them); no self-closing `/>` tags (`<br>`, not `<br/>`);
   real line breaks between tags (never one giant line).
4. **Design system:** cream `#eceae5` page, card `#fbfaf8`, ink `#14130f`, green accent
   `#16794a`, muted `#55554d`/`#6a6a60`/`#9a9a90`, hairlines `#e7e5e0`; kicker labels are
   uppercase, letter-spaced, with `border-left:2px solid #16794a`; font stack
   `'Inter','Segoe UI',Helvetica,Arial,sans-serif`.
5. **Links:** always plain original URLs (LinkedIn profile, https://aditya-kumaarr.github.io,
   raw.githubusercontent.com resume PDF) — never Google-redirect-wrapped URLs, never
   `github.com/.../blob/...` links.
6. **Judge rendering only from a SENT message opened in the Inbox** (or fetched via the
   Gmail API). The compose/draft editor misrenders valid HTML and must never be used as
   evidence that the structure is broken.
