(() => {
  const params = new URLSearchParams(window.location.search);
  const memberId = (params.get("id") || "").trim().toUpperCase();

  const badge = document.getElementById("statusBadge");
  const title = document.getElementById("title");
  const memberName = document.getElementById("memberName");
  const memberIdEl = document.getElementById("memberId");
  const memberRole = document.getElementById("memberRole");
  const memberStatus = document.getElementById("memberStatus");
  const message = document.getElementById("message");
  const checkedAt = document.getElementById("checkedAt");

  checkedAt.textContent = new Date().toLocaleString();

  function setBadge(text, cssClass) {
    badge.textContent = text;
    badge.className = `badge ${cssClass}`;
  }

  if (!memberId) {
    setBadge("INVALID LINK", "invalid");
    title.textContent = "Invalid Verification Link";
    memberName.textContent = "—";
    memberIdEl.textContent = "—";
    memberRole.textContent = "—";
    memberStatus.textContent = "INVALID";
    message.textContent = "This verification link does not contain a Member ID.";
    return;
  }

  const member = IMC_MEMBERS[memberId];

  if (!member) {
    setBadge("NOT VERIFIED", "invalid");
    title.textContent = "Member Not Found";
    memberName.textContent = "Unknown";
    memberIdEl.textContent = memberId;
    memberRole.textContent = "—";
    memberStatus.textContent = "NOT FOUND";
    message.textContent =
      "This Member ID is not listed in the official IMC Esports Club member records.";
    return;
  }

  memberName.textContent = member.name;
  memberIdEl.textContent = memberId;
  memberRole.textContent = member.role;
  memberStatus.textContent = member.status;

  if (member.status === "ACTIVE") {
    setBadge("✓ VERIFIED MEMBER", "active");
    title.textContent = "Official Member Verified";
    message.textContent =
      "This membership is currently ACTIVE and verified by IMC Esports Club.";
  } else if (member.status === "REVOKED") {
    setBadge("MEMBERSHIP REVOKED", "revoked");
    title.textContent = "Membership Not Active";
    message.textContent =
      "This membership has been revoked and is no longer valid.";
  } else {
    setBadge("MEMBERSHIP INACTIVE", "inactive");
    title.textContent = "Membership Not Active";
    message.textContent =
      "This membership is currently inactive.";
  }
})();
