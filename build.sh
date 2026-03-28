#!/usr/bin/env bash
# SOC Atlas - Production Build Script
# Use this script for CI/CD deployments on Vercel, Netlify, or GitHub Actions.
set -e

echo "🛡️  Compiling SOC Atlas into ultra-fast static HTML..."

# Enforce dependency installation in hosting environments
python3 -m pip install --upgrade zensical

# Run the build command to generate the 'site/' distribution directory
python3 -m zensical build -f zensical.yml

echo "✅ Compilation successful! The 'site/' folder is ready for global hosting."
