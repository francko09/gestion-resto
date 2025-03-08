# Guide de Déploiement sur Netlify

## Prérequis

- Un compte [GitHub](https://github.com)
- Un compte [Netlify](https://www.netlify.com)
- Un compte [Supabase](https://supabase.com)
- Node.js version 16 ou supérieure
- npm ou yarn

## 1. Configuration de Supabase

### 1.1 Création d'un nouveau projet Supabase

1. Connectez-vous à [Supabase](https://app.supabase.com)
2. Créez un nouveau projet
3. Notez les informations suivantes :
   - `SUPABASE_URL`
   - `SUPABASE_ANON_KEY`

### 1.2 Configuration de la base de données

Créez les tables suivantes dans votre base de données Supabase :

```sql
-- Table des plats
create table dishes (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  description text,
  price decimal(10,2) not null,
  category text not null,
  image_url text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Table des commandes
create table orders (
  id uuid default uuid_generate_v4() primary key,
  table_number integer not null,
  status text not null default 'pending',
  total decimal(10,2) not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Table des éléments de commande
create table order_items (
  id uuid default uuid_generate_v4() primary key,
  order_id uuid references orders(id) on delete cascade,
  dish_id uuid references dishes(id) on delete restrict,
  quantity integer not null,
  price_at_time decimal(10,2) not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Fonction pour mettre à jour le timestamp updated_at
create or replace function handle_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

-- Trigger pour mettre à jour automatiquement updated_at
create trigger set_updated_at
  before update on orders
  for each row
  execute procedure handle_updated_at();
```

### 1.3 Configuration des politiques de sécurité (RLS)

```sql
-- Activer RLS sur toutes les tables
alter table dishes enable row level security;
alter table orders enable row level security;
alter table order_items enable row level security;

-- Politiques pour les plats (lecture publique)
create policy "Permettre la lecture publique des plats"
  on dishes for select
  to anon
  using (true);

-- Politiques pour les commandes
create policy "Permettre la création de commandes"
  on orders for insert
  to anon
  with check (true);

create policy "Permettre la lecture des commandes"
  on orders for select
  to anon
  using (true);

create policy "Permettre la mise à jour des commandes"
  on orders for update
  to anon
  using (true);

-- Politiques pour les éléments de commande
create policy "Permettre la création d'éléments de commande"
  on order_items for insert
  to anon
  with check (true);

create policy "Permettre la lecture des éléments de commande"
  on order_items for select
  to anon
  using (true);
```

## 2. Configuration du Projet

### 2.1 Variables d'Environnement

Créez un fichier `.env` à la racine du projet :

```env
VITE_SUPABASE_URL=votre_url_supabase
VITE_SUPABASE_ANON_KEY=votre_clé_anon_supabase
```

### 2.2 Configuration de Netlify

Créez un fichier `netlify.toml` à la racine du projet :

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

## 3. Déploiement

### 3.1 Préparation du Déploiement

1. Poussez votre code sur GitHub
2. Connectez-vous à Netlify
3. Cliquez sur "New site from Git"
4. Sélectionnez votre dépôt GitHub
5. Configurez les variables d'environnement dans Netlify :
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`

### 3.2 Configuration du Build

Dans Netlify, configurez les paramètres de build :

- Build command: `npm run build`
- Publish directory: `dist`

## 4. Post-Déploiement

### 4.1 Configuration du Domaine (Optionnel)

1. Dans Netlify, allez dans "Domain settings"
2. Ajoutez votre domaine personnalisé
3. Configurez les enregistrements DNS selon les instructions de Netlify

### 4.2 Vérification

Vérifiez les points suivants après le déploiement :

1. La connexion à Supabase fonctionne
2. Les commandes peuvent être créées
3. Les mises à jour en temps réel fonctionnent
4. Les images sont correctement affichées

## 5. Maintenance

### 5.1 Mises à Jour

Pour mettre à jour l'application :

1. Poussez vos modifications sur GitHub
2. Netlify déploiera automatiquement les changements

### 5.2 Surveillance

- Surveillez les logs de build dans Netlify
- Vérifiez les analytics de Supabase
- Surveillez les erreurs dans la console du navigateur

## 6. Dépannage

### Problèmes Courants

1. **Erreur de Build** :
   - Vérifiez les logs de build dans Netlify
   - Assurez-vous que toutes les dépendances sont installées

2. **Erreurs de Connexion Supabase** :
   - Vérifiez les variables d'environnement
   - Vérifiez les politiques RLS

3. **Problèmes de Routing** :
   - Vérifiez la configuration des redirections dans `netlify.toml`

## 7. Ressources Utiles

- [Documentation Netlify](https://docs.netlify.com)
- [Documentation Supabase](https://supabase.com/docs)
- [Guide Vite.js](https://vitejs.dev/guide/) 