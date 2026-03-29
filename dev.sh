#!/usr/bin/env bash
# SOCAtlas - Live Development Server
# Auto-reloads as you change markdown files.
set -e

PORT=8087
echo "🛡️  Starting SOCAtlas Hot-Reloading Development Server..."

# Check dependencies
if ! python3 -m mkdocs --version &> /dev/null; then
    echo "📦 Installing development dependencies..."
    python3 -m pip install -r requirements.txt
fi

# Release port
lsof -ti:$PORT | xargs kill -9 2>/dev/null || true

echo "🌐 Development server starting at: http://127.0.0.1:$PORT"
echo "──────────────────────────────────────────"

# Run mkdocs serve using zensical.yml config
python3 -m mkdocs serve -f zensical.yml -a 127.0.0.1:$PORT
