#!/usr/bin/env bash
# SOCAtlas ELITE - Instant Knowledge Search
# Usage: ./search.sh <keyword>

# Colors for premium CLI experience
RED='\033[0;31m'
TEAL='\033[0;36m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
BOLD='\033[1m'
NC='\033[0m' # No Color

if [ -z "$1" ]; then
    echo -e "${CYAN}🛡️ SOCAtlas Elite Search Engine${NC}"
    echo -e "Usage: ./search.sh ${BOLD}<keyword>${NC}"
    exit 1
fi

search_term="$1"
docs_dir="docs/quick"

echo -e "${TEAL}🔎 Searching for '${BOLD}$search_term${NC}${TEAL}' in 1200 Quick Points...${NC}"
echo -e "${PURPLE}────────────────────────────────────────────────────────────────${NC}"

# Search across all markdown files in the quick directory
count=0
grep -rEhi "\|.*$search_term.*\|" "$docs_dir" | while read -r line; do
    # Clean up the markdown table row for terminal display
    # We use sed to replace the | with a nicer arrow and add colors
    clean_line=$(echo "$line" | sed 's/^|//; s/|$//; s/|/  ➜  /g' | xargs)
    echo -e "${NC}🔹 ${clean_line}${NC}"
    ((count++))
done

if [ $count -eq 0 ]; then
    echo -e "${RED}❌ No matching points found for '$search_term'.${NC}"
else
    echo -e "${PURPLE}────────────────────────────────────────────────────────────────${NC}"
    echo -e "${TEAL}✅ Search complete. Found ${BOLD}$count${NC}${TEAL} matches.${NC}"
fi
