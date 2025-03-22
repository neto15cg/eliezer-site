#!/bin/bash

# Tenta usar npx serve primeiro
if command -v npx &> /dev/null; then
    npx serve out
# Caso contrário, usa Python como fallback
else
    cd out
    if command -v python3 &> /dev/null; then
        python3 -m http.server 3000
    elif command -v python &> /dev/null; then
        python -m SimpleHTTPServer 3000
    else
        echo "Error: Nem serve nem Python estão disponíveis"
        exit 1
    fi
fi
