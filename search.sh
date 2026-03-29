#!/usr/bin/env bash
# SOCAtlas ELITE - Instant Knowledge Search
# Usage: ./search.sh <keyword>
set -euo pipefail

ROOT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"

# Colors for premium CLI experience
RED='\033[0;31m'
TEAL='\033[0;36m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
BOLD='\033[1m'
NC='\033[0m' # No Color

if [ "$#" -eq 0 ]; then
    echo -e "${CYAN}🛡️ SOCAtlas Elite Search Engine${NC}"
    echo -e "Usage: ./search.sh ${BOLD}<keyword or phrase>${NC}"
    exit 1
fi

search_term="$*"
docs_dir="$ROOT_DIR/docs/quick"

echo -e "${TEAL}🔎 Searching for '${BOLD}$search_term${NC}${TEAL}' in 1200 Quick Points...${NC}"
echo -e "${PURPLE}────────────────────────────────────────────────────────────────${NC}"

count=0

# Fallback to standard grep if ripgrep (rg) is not found
if command -v rg &> /dev/null; then
    SEARCH_CMD="rg -i -F --no-filename --no-line-number --color never"
else
    SEARCH_CMD="grep -rihF"
fi

while IFS= read -r line; do
    clean_line=$(printf '%s\n' "$line" | sed -E 's/^[[:space:]]*\|?[[:space:]]*//; s/[[:space:]]*\|[[:space:]]*/  ➜  /g; s/[[:space:]]*$//')
    echo -e "${NC}🔹 ${clean_line}${NC}"
    count=$((count + 1))
done < <($SEARCH_CMD "$search_term" "$docs_dir" || true)

if [ $count -eq 0 ]; then
    echo -e "${RED}❌ No matching points found for '$search_term'.${NC}"
else
    echo -e "${PURPLE}────────────────────────────────────────────────────────────────${NC}"
    echo -e "${TEAL}✅ Search complete. Found ${BOLD}$count${NC}${TEAL} matches.${NC}"
fi
