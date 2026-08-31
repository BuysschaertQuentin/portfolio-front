export const postgresqlFr = {
  title: "PostgreSQL",
  shortDesc: "Système de gestion de base de données relationnelle avancé et open-source",
  definition:
    "Pour moi, **PostgreSQL** est le SGBDR open-source le plus performant, fiable et avancé. C'est mon **choix de prédilection** pour mes projets personnels et d'études.\n\nIl se caractérise par son respect strict des normes SQL, sa conformité ACID, sa gestion des types de données avancés (JSONB, tableaux, types personnalisés DOMAIN) et son langage procédural **PL/pgSQL**. PostgreSQL permet de structurer des bases de données robustes et sécurisées.",
  proofs:
    "J'ai utilisé PostgreSQL exclusivement dans le cadre de mes projets d'études et de mes projets personnels :\n\n- **Projet de fin d'études O'Voyage (Bootcamp O'clock)** : J'ai pris en main PostgreSQL lors de ma formation chez O'clock. Sur l'application *O'Voyage*, j'ai exploité ses fonctionnalités avancées : création de domaines sur-mesure pour valider les formats (`CREATE DOMAIN email_d`), déclencheurs (triggers `BEFORE INSERT OR UPDATE`) exécutant des fonctions PL/pgSQL pour générer automatiquement des slugs uniques à partir du titre et de l'ID, et rédaction de procédures d'agrégation (`get_travelers`, `get_travels`). L'ensemble des migrations de schéma a été géré de manière réversible avec l'outil **Sqitch**.\n\n- **Projet d'études MyLab (via Supabase)** : Sur l'application *MyLab*, j'ai utilisé **Supabase** qui s'appuie sur une base PostgreSQL. J'y ai rédigé des politiques de sécurité **Row Level Security (RLS)** en SQL pour restreindre l'accès aux données ligne par ligne selon le rôle des utilisateurs.",
  selfCritique:
    "L'utilisation des fonctionnalités avancées de PostgreSQL (triggers, PL/pgSQL) demande de la rigueur pour ne pas surcharger la base de données. J'ai appris à équilibrer les traitements : réserver les procédures stockées aux besoins stricts de performance réseau et d'intégrité, tout en conservant la logique métier évolutive dans le code applicatif.",
  hindsight:
    "PostgreSQL est un SGBDR extrêmement élégant et fiable. Avoir conçu la base de données d'O'Voyage avec des scripts de migration réversibles sous Sqitch m'a apporté une excellente compréhension du SQL natif.",
  evolution:
    "Je souhaite continuer à utiliser PostgreSQL sur mes futurs projets personnels et explorer des fonctionnalités avancées comme l'extension **PostGIS** pour la gestion de données géospatiales.",
};

export const postgresqlEn = {
  title: "PostgreSQL",
  shortDesc: "Advanced open-source relational database management system",
  definition:
    "For me, **PostgreSQL** is the most performant, reliable, and advanced open-source RDBMS. It represents my **preferred choice** for personal and academic projects.\n\nIt stands out for its strict adherence to SQL standards, ACID compliance, support for advanced data types (JSONB, arrays, custom DOMAIN types), and its procedural language **PL/pgSQL**. PostgreSQL enables designing robust and secure databases.",
  proofs:
    "I have utilized PostgreSQL exclusively within the context of academic and personal projects:\n\n- **O'Voyage Graduation Project (O'clock Bootcamp)**: I mastered PostgreSQL during my training at O'clock. On the *O'Voyage* app, I leveraged its advanced features: creating custom domains for format validation (`CREATE DOMAIN email_d`), triggers (`BEFORE INSERT OR UPDATE`) executing PL/pgSQL functions to automatically generate unique slugs from titles and IDs, and writing aggregation functions (`get_travelers`, `get_travels`). Schema migrations were managed reversibly using **Sqitch**.\n\n- **MyLab Academic Project (via Supabase)**: On the *MyLab* application, I used **Supabase**, which relies on a PostgreSQL database. I wrote **Row Level Security (RLS)** SQL policies to restrict data access on a per-row basis depending on user roles.",
  selfCritique:
    "Leveraging PostgreSQL's advanced features (triggers, PL/pgSQL) requires discipline to avoid overloading the database engine. I learned to balance processing: reserving stored procedures for strict network performance and integrity needs, while keeping evolving business logic inside application code.",
  hindsight:
    "PostgreSQL is an extremely elegant and reliable RDBMS. Designing O'Voyage's database using reversible migration scripts with Sqitch provided me with a deep understanding of native SQL.",
  evolution:
    "I aim to continue using PostgreSQL on future personal projects and explore advanced capabilities such as the **PostGIS** extension for geospatial data processing.",
};
