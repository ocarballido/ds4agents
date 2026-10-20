#!/usr/bin/env bash
# G09: ejecuta un paso de CI y, si falla, publica las últimas líneas de su salida como anotaciones
# (::error::), visibles en el resumen del run sin descargar los registros.
# Uso: tools/ci-step.sh npm run build
log=$(mktemp)
"$@" 2>&1 | tee "$log"
status=${PIPESTATUS[0]}
if [ "$status" -ne 0 ]; then
  tail -n 40 "$log" | grep -v '^[[:space:]]*$' | sed 's/%/%25/g' | while IFS= read -r line; do echo "::error title=$*::$line"; done
fi
exit "$status"
