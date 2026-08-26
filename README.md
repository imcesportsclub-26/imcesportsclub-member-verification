# IMC Esports Club — GitHub Pages Verification

This version is made specifically for **free GitHub Pages hosting**.

## Files

- `index.html` — verification page
- `style.css` — design
- `members.js` — member records
- `app.js` — verification logic
- `assets/membership-verification.jpg` — your official verification artwork

## How the QR works

A QR should contain a URL like:

`https://YOUR-GITHUB-USERNAME.github.io/imc-member-verification/?id=IMC-0001`

Each member gets a different Member ID.

Examples:

- `?id=IMC-0001`
- `?id=IMC-0002`
- `?id=IMC-0003`

## Add a member

Open `members.js` and add:

```js
"IMC-0004": {
  name: "Member Name",
  role: "Official Member",
  status: "ACTIVE"
}
```

## Revoke a member

Change:

```js
status: "ACTIVE"
```

to:

```js
status: "REVOKED"
```

Then commit/upload the updated `members.js` to GitHub.

## Security note

This is a static website. It is good for a simple free verification page, but it is not equivalent to a secure server-side database. Member data in `members.js` can be viewed by anyone who inspects the website source.

For stronger security later, move the member records to a backend/database.
