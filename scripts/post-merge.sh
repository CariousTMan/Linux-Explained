#!/bin/bash
set -e
pnpm install --frozen-lockfile
pnpm --filter db push

# Restore kiro-cli if missing
if [ ! -f "$HOME/.local/bin/kiro-cli" ]; then
  mkdir -p "$HOME/.local/bin"
  cp "$(dirname "$0")/../.local/kiro-cli" "$HOME/.local/bin/kiro-cli"
  chmod +x "$HOME/.local/bin/kiro-cli"
fi
