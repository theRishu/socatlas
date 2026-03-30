#!/usr/bin/env bash
# SOCAtlas - Production build script
set -euo pipefail

ROOT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
SITE_DIR="$ROOT_DIR/site"
PUBLIC_DIR="$ROOT_DIR/public"

cd "$ROOT_DIR"

echo "🛡️  Compiling SOCAtlas into ultra-fast HTML..."

if ! python3 -m mkdocs --version &> /dev/null; then
    echo "📦 Installing build dependencies..."
    python3 -m pip install --upgrade pip
    python3 -m pip install -r deps.txt
fi

echo "📚 Generating complete guide export..."
python3 scripts/generate_complete_guide.py

echo "🏗️  Building with MkDocs Material..."
python3 -m mkdocs build -f mkdocs.yml -d "$SITE_DIR"

# Standard Static Build - No redirection or flattening

echo "📦 Syncing static output to public/ for Vercel..."
mkdir -p "$PUBLIC_DIR"

if command -v rsync &> /dev/null; then
    rsync -a --delete "$SITE_DIR"/ "$PUBLIC_DIR"/
else
    # Fallback to rm + cp if rsync is missing to ensure a clean sync
    echo "⚠️  rsync not found. Performing fresh sync with rm + cp..."
    rm -rf "$PUBLIC_DIR"/*
    cp -R "$SITE_DIR"/. "$PUBLIC_DIR"/
fi

echo "🚫 Writing Vercel skip config for gh-pages exports..."
cat > "$SITE_DIR/vercel.json" <<'EOF'
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "framework": null,
  "buildCommand": "",
  "installCommand": "",
  "ignoreCommand": "echo \"Skipping Vercel deploy for gh-pages\"; exit 0"
}
EOF

echo "✅ Site build complete. Adding .nojekyll for GitHub Pages..."
touch "$SITE_DIR/.nojekyll"

echo "✅ Build Complete."
