# Platto Landing Page

Landing page moderne pour l'application Platto - une app de cuisine/recettes.

## Structure du projet

```
platto-landing/
├── index.html      # Page principale
├── styles.css      # Styles CSS
├── script.js       # JavaScript (animations, interactions)
├── assets/         # Dossier pour images/icons (à créer)
│   ├── favicon.svg
│   └── og-image.png
└── README.md
```

## Fonctionnalités

- Design responsive (mobile, tablette, desktop)
- Animations fluides au scroll
- Compteurs animés
- Particules flottantes en arrière-plan
- Menu mobile hamburger
- Navigation sticky avec effet blur

## Installation locale

1. Clone le repository :
```bash
git clone https://github.com/votre-username/platto-landing.git
cd platto-landing
```

2. Ouvre `index.html` dans ton navigateur ou utilise un serveur local :
```bash
# Avec Python
python -m http.server 8000

# Avec Node.js (npx)
npx serve

# Avec VS Code
# Installe l'extension "Live Server" et clique sur "Go Live"
```

## Déploiement sur OVH

### Option 1 : Hébergement web classique (FTP)

1. Connecte-toi à ton espace client OVH
2. Va dans "Hébergements" > ton hébergement
3. Récupère tes identifiants FTP dans "FTP - SSH"
4. Utilise FileZilla ou un autre client FTP :
   - Hôte : ftp.cluster0XX.hosting.ovh.net
   - Identifiant : ton-identifiant
   - Mot de passe : ton-mot-de-passe
   - Port : 21
5. Upload les fichiers dans le dossier `www/`

### Option 2 : Via SSH

```bash
# Connexion SSH
ssh ton-identifiant@ssh.cluster0XX.hosting.ovh.net

# Navigue vers le dossier web
cd www/

# Clone directement (si git disponible)
git clone https://github.com/votre-username/platto-landing.git .
```

### Option 3 : OVH Web Cloud Databases (pour futur backend)

Pour une évolution avec base de données, consulte la doc OVH.

## Configuration GitHub

### Initialisation du repo

```bash
# Initialise Git (si pas déjà fait)
git init

# Ajoute les fichiers
git add .

# Premier commit
git commit -m "Initial commit: Platto landing page"

# Ajoute le remote (remplace par ton URL)
git remote add origin https://github.com/votre-username/platto-landing.git

# Push
git push -u origin main
```

### Workflow recommandé

```bash
# Créer une nouvelle branche pour les modifications
git checkout -b feature/nouvelle-fonctionnalite

# Faire tes modifications...

# Commit
git add .
git commit -m "Ajoute nouvelle fonctionnalité"

# Push la branche
git push -u origin feature/nouvelle-fonctionnalite

# Merge dans main via PR sur GitHub
```

## Personnalisation

### Couleurs

Les couleurs sont définies en CSS custom properties dans `styles.css` :

```css
:root {
    --orange-500: #FF6B35;  /* Couleur principale */
    --orange-600: #E85A2A;  /* Hover */
    /* ... */
}
```

### Contenu

- Modifie les textes directement dans `index.html`
- Les statistiques (compteurs) sont configurables via `data-target` :
```html
<span class="stat-number" data-target="50000">0</span>
```

### Images

1. Crée un dossier `assets/`
2. Ajoute tes images :
   - `favicon.svg` - Icône du site
   - `og-image.png` - Image pour partage social (1200x630px recommandé)
   - Screenshots de l'app pour remplacer le mockup

## Assets à ajouter

Pour un site complet, tu auras besoin de :

- [ ] Favicon (favicon.svg ou favicon.ico)
- [ ] Image Open Graph (og-image.png)
- [ ] Logo Platto en SVG
- [ ] Screenshots de l'app (optionnel, pour remplacer le mockup emoji)

## Compatibilité navigateurs

- Chrome (dernières versions)
- Firefox (dernières versions)
- Safari (dernières versions)
- Edge (dernières versions)
- Mobile Safari / Chrome

## Performance

- Pas de dépendances externes (sauf Google Fonts)
- CSS et JS minifiés en production (recommandé)
- Images optimisées (WebP recommandé)

### Optimisation recommandée pour la prod

```bash
# Minifier CSS
npx clean-css-cli styles.css -o styles.min.css

# Minifier JS
npx terser script.js -o script.min.js -c -m
```

Puis mettre à jour les références dans `index.html`.

## Licence

MIT - Libre d'utilisation pour Platto.
