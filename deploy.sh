#!/bin/bash
# ===================================
#  PLATTO - Script de déploiement OVH
#  Usage : ./deploy.sh
# ===================================

HOST="ftp.cluster129.hosting.ovh.net"
USER="plattos"
PASS="Plattoweb2026"
REMOTE_DIR="www"

echo "🚀 Déploiement Platto sur OVH..."
echo ""

lftp -u "$USER","$PASS" "$HOST" <<EOF
set ssl:verify-certificate no
set ftp:passive-mode yes
cd $REMOTE_DIR

echo "📤 Upload des fichiers..."
put index.html
put styles.css
put script.js
put contact.html
put contact.css
put contact.js

echo ""
echo "✅ Fichiers déployés :"
ls -lh

bye
EOF

echo ""
echo "✅ Déploiement terminé ! → https://plattoapp.com"
