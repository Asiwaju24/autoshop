// scripts/vercel-build.js
const { execSync } = require("child_process");

try {
  console.log("Installing Vite globally...");
  execSync("npm install -g vite", { stdio: "inherit" });

  console.log("Running Vite build...");
  execSync("vite build", { stdio: "inherit" });

  console.log("Build finished successfully!");
} catch (err) {
  console.error("Build failed:", err);
  process.exit(1);
}
