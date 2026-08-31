(() => {
  const g = (id) => document.getElementById(id);

  const memberId = (
    new URLSearchParams(location.search).get("id") || ""
  ).trim().toUpperCase();

  const member = IMC_MEMBERS[memberId];

  const badge = g("badge");
  const title = g("title");
  const message = g("message");
  const card = document.querySelector(".card");

  g("id").textContent = memberId || "—";

  /* Initial checking state */
  badge.textContent = "● CHECKING MEMBER";
  title.textContent = "Verifying Membership...";

  /* Verification delay */
  setTimeout(() => {

    /* Invalid member */
    if (!member) {

      title.textContent = "Invalid Verification Link";

      badge.textContent = "✕ INVALID MEMBER";
      badge.className = "badbadge";

      message.textContent = memberId
        ? "Member ID not found in IMC database."
        : "This link does not contain a Member ID.";

      message.className = "message bad";

      return;
    }

    /* Load member information */
    g("name").textContent = member.name;
    g("role").textContent = member.role;
    g("status").textContent = member.status;

    const active =
      (member.status || "").toUpperCase() === "ACTIVE";

    /* ACTIVE MEMBER */
    if (active) {
      
      card?.classList.add("verified-card");
      title.textContent = "Official Member Verified";

      title.classList.add("verified-title");

      badge.textContent = "✓ VERIFIED MEMBER";
      badge.className = "verified-glow";

      message.innerHTML =
        'This membership is currently <b>ACTIVE</b> and verified by IMC Esports Club.';

    }

    /* INACTIVE / REVOKED */
    else {

      title.textContent = "Membership Not Active";

      badge.textContent = "✕ NOT ACTIVE";
      badge.className = "badbadge";

      message.innerHTML =
        `This membership is currently <b>${member.status}</b>.`;

      message.className = "message bad";
    }

  }, 7000);

})();
