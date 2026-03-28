#!/usr/bin/env bash
# SOC Atlas - Local Development Script
# Built to work universally for anyone downloading this repository.
set -e

echo "🛡️  Starting SOC Atlas Local Server..."

# Check if Python is installed
if ! command -v python3 &> /dev/null; then
    echo "❌ Error: Python 3 is required. Please install Python 3."
    exit 1
fi

# Clean up previously running instances on the designated port
PORT=8087
echo "🧹 Releasing port $PORT (if occupied)..."
lsof -ti:$PORT | xargs kill -9 2>/dev/null || true

# Check if Zensical module is installed
if ! python3 -m zensical serve --help &> /dev/null; then
    echo "📦 Installing Zensical engine..."
    python3 -m pip install --user --upgrade zensical
fi

echo "🌐 SOC Atlas is running at: http://127.0.0.1:$PORT"
echo "──────────────────────────────────────────"

# Execute the core static site generator server
python3 -m zensical serve -f zensical.yml -a "127.0.0.1:$PORT"
