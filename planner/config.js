// Planner configuration.
// clientId: the Google OAuth "Web application" client ID (Settings in the app explains how to make one).
// allowedEmailHashes: SHA-256 of the Google account emails allowed to open this planner (lowercase).
//   Any other account is signed out. Leave empty to allow any account.
window.PLANNER_CONFIG = {
  clientId: "",
  allowedEmailHashes: ["b0b9ac774df41304a71ae63c8cce90e16ba51cddc47c34b1f01725bf15df16f9"]
};
