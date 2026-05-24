import { Subject, Notion } from "./types";

export const NOTIONS: Notion[] = [
  "L'art",
  "Le bonheur",
  "La conscience",
  "Le devoir",
  "L'État",
  "L'inconscient",
  "La justice",
  "Le langage",
  "La liberté",
  "La nature",
  "La raison",
  "La religion",
  "La science",
  "La technique",
  "Le temps",
  "Le travail",
  "La vérité",
];

// Helper to deduce a notion from keywords to avoid heavy manual tagging for all past exams.
function extractNotions(title: string): Notion[] {
  const notions: Notion[] = [];
  const lowerTitle = title.toLowerCase();

  if (lowerTitle.includes("art") || lowerTitle.includes("oeuvre") || lowerTitle.includes("artiste")) notions.push("L'art");
  if (lowerTitle.includes("heureux") || lowerTitle.includes("bonheur")) notions.push("Le bonheur");
  if (lowerTitle.includes("conscience") || lowerTitle.includes("conscient")) notions.push("La conscience");
  if (lowerTitle.includes("devoir") || lowerTitle.includes("faut-il")) notions.push("Le devoir");
  if (lowerTitle.includes("état")) notions.push("L'État");
  if (lowerTitle.includes("inconscient") || lowerTitle.includes("inconscience")) notions.push("L'inconscient");
  if (lowerTitle.includes("juste") || lowerTitle.includes("justice") || lowerTitle.includes("droit") || lowerTitle.includes("injuste")) notions.push("La justice");
  if (lowerTitle.includes("langage") || lowerTitle.includes("mot") || lowerTitle.includes("parler")) notions.push("Le langage");
  if (lowerTitle.includes("libre") || lowerTitle.includes("liberté") || lowerTitle.includes("libérer")) notions.push("La liberté");
  if (lowerTitle.includes("nature")) notions.push("La nature");
  if (lowerTitle.includes("raison") || lowerTitle.includes("raisonnement") || lowerTitle.includes("raisonnable")) notions.push("La raison");
  if (lowerTitle.includes("religion") || lowerTitle.includes("foi") || lowerTitle.includes("religieuse")) notions.push("La religion");
  if (lowerTitle.includes("science") || lowerTitle.includes("scientifique") || lowerTitle.includes("savoir") || lowerTitle.includes("connaître")) notions.push("La science");
  if (lowerTitle.includes("technique") || lowerTitle.includes("machine") || lowerTitle.includes("utile")) notions.push("La technique");
  if (lowerTitle.includes("temps") || lowerTitle.includes("passé") || lowerTitle.includes("avenir") || lowerTitle.includes("dure")) notions.push("Le temps");
  if (lowerTitle.includes("travail") || lowerTitle.includes("travailler")) notions.push("Le travail");
  if (lowerTitle.includes("vrai") || lowerTitle.includes("vérité") || lowerTitle.includes("réalité")) notions.push("La vérité");

  // Fallback if no specific notion caught
  if (notions.length === 0) {
    if (lowerTitle.includes("homme") || lowerTitle.includes("humain")) notions.push("La nature");
    else notions.push("La raison");
  }

  // Deduplicate
  return Array.from(new Set(notions)).slice(0, 2); // Max 2 notions roughly
}

const rawAnnales = [
  // 2026
  { year: 2026, location: "Amérique du Nord", title: "La science doit-elle être utile ?" },
  { year: 2026, location: "Amérique du Nord", title: "L'artiste sait-il ce qu'il fait ?" },

  // 2025
  { year: 2025, location: "Amérique du Nord", title: "Une œuvre d'art doit-elle toujours plaire ?" },
  { year: 2025, location: "Amérique du Nord", title: "Suffit-il de faire son devoir pour être juste ?" },
  { year: 2025, location: "Amérique du Sud", title: "L'État nous protège-t-il des injustices ?" },
  { year: 2025, location: "Amérique du Sud", title: "Suffit-il de vouloir le bonheur pour l'atteindre ?" },
  { year: 2025, location: "Asie", title: "La justice a-t-elle besoin de la force ?" },
  { year: 2025, location: "Asie", title: "La science nous éloigne-t-elle de la réalité ?" },
  { year: 2025, location: "Centres Étrangers", title: "Peut-on douter des pouvoirs de la raison ?" },
  { year: 2025, location: "Centres Étrangers", title: "L'art peut-il nous apprendre à voir le monde autrement ?" },
  { year: 2025, location: "Métropole", title: "Notre avenir dépend-il de la technique ?" },
  { year: 2025, location: "Métropole", title: "La vérité est-elle toujours convaincante ?" },
  { year: 2025, location: "Métropole (Secours)", title: "Devons-nous lutter contre le temps ?" },
  { year: 2025, location: "Métropole (Secours)", title: "Faut-il suivre sa raison pour agir moralement ?" },
  { year: 2025, location: "Antilles-Guyane", title: "La technique nous fait-elle gagner du temps ?" },
  { year: 2025, location: "Antilles-Guyane", title: "Existe-t-il des vérités inutiles?" },
  { year: 2025, location: "Polynésie", title: "La fréquentation des œuvres d'art est-elle une perte de temps ?" },
  { year: 2025, location: "Polynésie", title: "Peut-on combattre une croyance par le raisonnement ?" },
  { year: 2025, location: "Nouvelle-Calédonie", title: "L'art n'est-il qu'un loisir ?" },
  { year: 2025, location: "Nouvelle-Calédonie", title: "A-t-on à se libérer du passé ?" },
  { year: 2025, location: "Polynésie remplacement", title: "Faut-il toujours faire son devoir ?" },
  { year: 2025, location: "Polynésie remplacement", title: "Ne travaille-t-on que pour vivre ?" },
  { year: 2025, location: "Métropole France remplacement", title: "Faut-il opposer l'art et la nature ?" },
  { year: 2025, location: "Métropole France remplacement", title: "La science doit-elle tout remettre en question ?" },
  { year: 2025, location: "Métropole France remplacement 2", title: "Y a-t-il des choses dont il ne faudrait pas avoir conscience ?" },
  { year: 2025, location: "Métropole France remplacement 2", title: "Est-il utile d'être juste ?" },

  // 2024
  { year: 2024, location: "Amérique du Nord", title: "Comment être heureux si rien ne dure ?" },
  { year: 2024, location: "Amérique du Nord", title: "Peut-on parler sans savoir ?" },
  { year: 2024, location: "Métropole France", title: "La science peut-elle satisfaire notre besoin de vérité ?" },
  { year: 2024, location: "Métropole France", title: "L'État nous doit-il quelque chose ?" },
  { year: 2024, location: "Centres Étrangers", title: "L'art nous aide-t-il à vivre ?" },
  { year: 2024, location: "Centres Étrangers", title: "Pourquoi faut-il se fier à la science ?" },
  { year: 2024, location: "Asie", title: "Faut-il se battre pour la vérité ?" },
  { year: 2024, location: "Asie", title: "Doit-on se libérer de soi-même ?" },
  { year: 2024, location: "Polynésie", title: "Décide-t-on d'être heureux ?" },
  { year: 2024, location: "Polynésie", title: "Le savoir nous rend-il égaux ?" },
  { year: 2024, location: "Antilles-Guyane", title: "Puis-je savoir si j'ai raison ?" },
  { year: 2024, location: "Antilles-Guyane", title: "L'égalité garantit-elle la justice ?" },
  { year: 2024, location: "Métropole France (Remplacement)", title: "Avons-nous le devoir d'être libres ?" },
  { year: 2024, location: "Métropole France (Remplacement)", title: "Peut-on s'arrêter de travailler ?" },

  // 2023
  { year: 2023, location: "Amérique du Nord", title: "Que nous font connaître les religions ?" },
  { year: 2023, location: "Amérique du Nord", title: "Toute vérité se prouve-t-elle ?" },
  { year: 2023, location: "Métropole France", title: "Le bonheur est-il affaire de raison ?" },
  { year: 2023, location: "Métropole France", title: "Vouloir la paix, est-ce vouloir la justice ?" },
  { year: 2023, location: "Centres Étrangers Afrique", title: "Peut-on s'accorder sur ce qui est juste ?" },
  { year: 2023, location: "Centres Étrangers Afrique", title: "Le langage déforme-t-il la pensée ?" },
  { year: 2023, location: "Polynésie", title: "L'art est-il l'affaire des seuls spécialistes ?" },
  { year: 2023, location: "Polynésie", title: "Savoir rend-il malheureux ?" },
  { year: 2023, location: "Asie", title: "Est-il raisonnable de lutter contre le temps ?" },
  { year: 2023, location: "Asie", title: "Le langage peut-il être fidèle à la réalité ?" },
  { year: 2023, location: "Antilles-Guyane", title: "Ce qui est vrai peut-il être réfuté ?" },
  { year: 2023, location: "Antilles-Guyane", title: "Les artistes nous rendent-ils heureux ?" },

  // 2022
  { year: 2022, location: "Amérique du Nord", title: "La conscience fait-elle obstacle au bonheur ?" },
  { year: 2022, location: "Amérique du Nord", title: "La technique permet-elle de ne plus avoir peur de la nature ?" },
  { year: 2022, location: "Amérique du Sud", title: "Puis-je ignorer mes propres pensées ?" },
  { year: 2022, location: "Amérique du Sud", title: "La justice met-elle fin à la loi du plus fort ?" },
  { year: 2022, location: "Métropole France", title: "Les pratiques artistiques transforment-elles le monde ?" },
  { year: 2022, location: "Métropole France", title: "Revient-il à l'État de décider de ce qui est juste ?" },

  // 2021
  { year: 2021, location: "Métropole France", title: "Discuter, est-ce renoncer à la violence ?" },
  { year: 2021, location: "Métropole France", title: "L'inconscient échappe-t-il à toute forme de connaissance ?" },
  { year: 2021, location: "Métropole France", title: "Sommes-nous responsables de l'avenir ?" },
  { year: 2021, location: "Polynésie", title: "La technique est-elle une violence infligée à la nature ?" },
  { year: 2021, location: "Zéro 1", title: "La vie en société menace-t-elle notre liberté ?" },
];

export const subjects: Subject[] = rawAnnales.map((s, idx) => ({
  id: `annale-${s.year}-${idx}`,
  year: s.year,
  location: s.location,
  title: s.title,
  notions: extractNotions(s.title),
  type: "Annale",
}));

// Add some handcrafted "Sujets Potentiels" with detailed plans
subjects.push(
  {
    id: "pot-1",
    title: "La liberté n'est-elle qu'une illusion ?",
    notions: ["La liberté", "La conscience"],
    type: "Potentiel",
    ideas: {
      problematica: "Si nous avons le sentiment profond d'être libres, de faire des choix par nous-mêmes, le déterminisme (scientifique, psychologique, social) ne fait-il pas de cette conscience de liberté une simple ignorance des causes qui nous font agir ?",
      authors: ["B. Spinoza", "J.-P. Sartre", "E. Kant"],
      plan: {
        these: "Le sentiment intérieur de liberté est puissant et constitutif de l'homme (Descartes, Sartre).",
        antithese: "Pourtant, cette impression peut masquer un déterminisme absolu où nos choix sont contraints à notre insu (Spinoza, Marx, Freud).",
        synthese: "La liberté n'est pas une donnée immédiate mais une conquête : elle passe par la connaissance de nos déterminismes pour s'en affranchir (Kant)."
      }
    }
  },
  {
    id: "pot-2",
    title: "Peut-on être heureux sans les autres ?",
    notions: ["Le bonheur", "L'État"],
    type: "Potentiel",
    ideas: {
      problematica: "Le bonheur semble consister dans une plénitude individuelle, parfois troublée par autrui (l'enfer c'est les autres). Cependant, la condition humaine étant sociale, notre accomplissement peut-il se passer de la relation à l'autre ?",
      authors: ["Aristote", "A. Schopenhauer", "Épicure"],
      plan: {
        these: "Le bonheur exige le repli sur soi et l'indépendance à l'égard de l'agitation sociale pour atteindre l'ataraxie (Stoïciens, Épicure).",
        antithese: "L'homme est par nature un « animal politique » ; son épanouissement nécessite l'autre, par l'amitié (philia) ou la reconnaissance sociale (Aristote, Hegel).",
        synthese: "Le bonheur authentique est partagé : autrui n'est pas qu'un moyen, mais le miroir dans lequel la conscience se réalise et s'apaise."
      }
    }
  },
  {
    id: "pot-3",
    title: "Mieux connaître la nature, est-ce mieux la maîtriser ?",
    notions: ["La nature", "La technique", "La science"],
    type: "Potentiel",
    ideas: {
      problematica: "Le projet de la science moderne a fait de la connaissance un levier de l'action technique (« maîtres et possesseurs de la nature »). Mais l'étendue de notre savoir ne révèle-t-elle pas aussi les limites de notre maîtrise, voire l'illusion de celle-ci face aux dérèglements ?",
      authors: ["R. Descartes", "H. Jonas", "F. Bacon"],
      plan: {
        these: "Savoir, c'est pouvoir (Bacon). Mieux connaître les lois naturelles permet de s'en rendre maître d'un point de vue technique et utilitaire.",
        antithese: "Cependant, cette maîtrise instrumentale se retourne contre elle-même ; la nature échappe à notre contrôle, nos techniques engendrent des dysfonctionnements (crise écologique).",
        synthese: "Connaître la nature doit donc impliquer un devoir éthique : la véritable maîtrise n'est pas l'exploitation, mais la responsabilité (Jonas)."
      }
    }
  },
  {
    id: "pot-4",
    title: "L'État est-il l'ennemi de la liberté ?",
    notions: ["L'État", "La liberté", "La justice"],
    type: "Potentiel",
    ideas: {
      problematica: "L'État impose des lois, contraint les individus et crée le monopole de la violence légitime. Dès lors, son existence est-elle par principe antithétique à l'exercice de la liberté, ou en est-elle, au contraire, la garantie véritable ?",
      authors: ["T. Hobbes", "J.-J. Rousseau", "M. Bakounine"],
      plan: {
        these: "Dans sa nature même, l'État restreint notre liberté naturelle et impose son pouvoir contraignant, frôlant l'oppression (Anarchisme).",
        antithese: "S'il n'y avait pas d'État, la loi du plus fort règnerait. L'État garantit la sécurité, condition première pour exercer ses libertés (Hobbes).",
        synthese: "L'État n'est garant de la liberté civile que s'il est l'expression de la volonté générale : obéir à la loi qu'on s'est prescrite est liberté (Rousseau)."
      }
    }
  },
  {
    id: "pot-5",
    title: "La technique doit-elle nous libérer du travail ?",
    notions: ["La technique", "Le travail", "La liberté"],
    type: "Potentiel",
    ideas: {
      problematica: "Si la technique vise à automatiser les tâches pour supprimer l'effort pénible, le travail n'est-il pas aussi ce qui forme l'esprit humain, rendant sa suppression par la machine potentiellement aliénante ou déshumanisante ?",
      authors: ["K. Marx", "G.W.F. Hegel", "H. Arendt"],
      plan: {
        these: "La technique a pour vocation historique d'alléger la peine des hommes et de les libérer des contraintes de la simple survie biologique.",
        antithese: "Cependant, confier tout travail laborieux aux machines risque de priver l'homme de sa capacité créatrice active et de le réduire à la passivité consommatrice (Arendt).",
        synthese: "La libération véritable n'est pas l'abolition totale du travail, mais la libération de l'aliénation grâce à une technique humanisée qui laisse place à l'activité créatrice."
      }
    }
  },
  {
    id: "pot-6",
    title: "Le travail permet-il de prendre conscience de soi ?",
    notions: ["Le travail", "La conscience"],
    type: "Potentiel",
    ideas: {
      problematica: "Est-ce par la contemplation théorique ou par l’activité pratique que l’homme parvient à se comprendre ? Le travail, en imprimant notre marque consciente dans la matière extérieure, ne nous offre-t-il pas le miroir de notre liberté ?",
      authors: ["G.W.F. Hegel", "K. Marx", "J.-P. Sartre"],
      plan: {
        these: "L'action de travailler externalise nos pensées et matérialise notre liberté, nous permettant de nous contempler dans nos œuvres concrètes (Hegel).",
        antithese: "Pourtant, dans le cadre du travail aliéné ou taylorisé, l'ouvrier ne se reconnaît pas dans son produit mais s'y sent étranger et dépossédé (Marx).",
        synthese: "Le travail n'induit une prise de conscience émancipatrice que s'il est une expression libre de soi et non une contrainte automatique."
      }
    }
  },
  {
    id: "pot-7",
    title: "Le travail définit-il l'être humain ?",
    notions: ["Le travail", "La nature"],
    type: "Potentiel",
    ideas: {
      problematica: "Le travail est-il l'essence fondamentale qui distingue l'homme de l'animal par son intelligence fabricatrice, ou n'est-il qu'une modalité contingente qui n'épuise pas la diversité de l'existence humaine (art, jeu, pensée) ?",
      authors: ["H. Bergson", "K. Marx", "H. Arendt"],
      plan: {
        these: "Par l’outil et l'intelligence de fabrication, le travail est ce qui extrait l'homme de l'animalité pure et forme le socle de la culture (Bergson).",
        antithese: "Néanmoins, définir l'homme uniquement par le travail productif réduit la condition humaine à la seule dimension de subsistance (Arendt).",
        synthese: "Le travail fonde la vie sociale humaine mais il doit servir de tremplin pour l'exercice d'activités libres supérieures de l'esprit."
      }
    }
  },
  {
    id: "pot-8",
    title: "Le travail est-il une activité contre-nature ?",
    notions: ["Le travail", "La nature"],
    type: "Potentiel",
    ideas: {
      problematica: "Travailler exige de discipliner le corps, d'imposer des horaires précis et de dompter les instincts immédiats. Cette rupture artificielle avec les penchants naturels de l'homme est-elle destructrice ou salvatrice ?",
      authors: ["S. Freud", "J.-J. Rousseau", "K. Marx"],
      plan: {
        these: "Le travail est par définition contre-nature car il réprime le principe de plaisir immédiat au profit d'un dur principe de réalité collective (Freud).",
        antithese: "Cependant, la nature humaine n'est pas fixe mais perfectible. Le travail développe nos facultés rationnelles morales et techniques latentes (Rousseau).",
        synthese: "Le travail n'est pas une violence gratuite faite à notre nature, mais le moyen privilégié d'accomplir nos possibilités spirituelles de manière cultivée."
      }
    }
  },
  {
    id: "pot-9",
    title: "Le travail nous rend-il plus humains ?",
    notions: ["Le travail", "La nature", "Le devoir"],
    type: "Potentiel",
    ideas: {
      problematica: "Le travail est-il un levier d'éducation morale et de socialisation par lequel l'homme discipline ses instincts sauvages, ou bien l'organisation économique de la production l'abrutit-elle au point de le priver de son humanité ?",
      authors: ["I. Kant", "K. Marx", "F. Nietzsche"],
      plan: {
        these: "Le travail éduque à l'effort, discipline la force physique déréglée, et crée une solidarité sociale entre les individus (Kant).",
        antithese: "Toutefois, la parcellisation taylorienne et l'exploitation privent le travailleur du sens profond de sa tâche, ce qui le déshumanise (Marx).",
        synthese: "Le travail n'humanise que s'il respecte l’autonomie morale de la personne et s'il est valorisé comme un acte créateur constructif."
      }
    }
  },
  {
    id: "pot-10",
    title: "Le travail est-il nécessairement une servitude ?",
    notions: ["Le travail", "La liberté"],
    type: "Potentiel",
    ideas: {
      problematica: "Originaire de la nécessité matérielle de survivre et d'efforts parfois pénibles, le travail porte-t-il constitutivement la marque d'un asservissement, ou contient-il une force paradoxale de libération de l'homme ?",
      authors: ["G.W.F. Hegel", "K. Marx", "J.-P. Sartre"],
      plan: {
        these: "Le travail découle de la soumission de l'homme au besoin biologique fondamental de subsister, ce qui l'enchaîne à la matière.",
        antithese: "Cependant, en apprenant à transformer et discipliner activement la matière, le travailleur acquiert une maîtrise de soi supérieure à l'oisif (Hegel).",
        synthese: "La servitude dépend de l'organisation politique des conditions de production et de l'exploitation économique, non de l'essence même du travail."
      }
    }
  },
  {
    id: "pot-11",
    title: "Peut-on se libérer par le travail ?",
    notions: ["Le travail", "La liberté"],
    type: "Potentiel",
    ideas: {
      problematica: "Comment une activité caractérisée par l'effort contraignant et des lois concrètes peut-elle être l'instrument clé de la liberté intellectuelle et économique de l'individu ?",
      authors: ["G.W.F. Hegel", "K. Marx", "Alain"],
      plan: {
        these: "Le travail libère l'homme de sa dépendance vis-à-vis des forces naturelles extérieures brutes en construisant un monde humain maîtrisé.",
        antithese: "Néanmoins, dans le salariat forcé ou répétitif, le travailleur perd sa souveraineté en vendant l'usage laborieux de son corps.",
        synthese: "La liberté s'acquiert par l'effort intelligent personnel de transformation (Alain) adossé à une réappropriation politique du produit du labeur."
      }
    }
  },
  {
    id: "pot-12",
    title: "Le travail est-il un obstacle à la liberté ?",
    notions: ["Le travail", "La liberté", "Le temps"],
    type: "Potentiel",
    ideas: {
      problematica: "L'obligation constante de travailler pour vivre limite-t-elle irréversiblement l'exercice de nos volontés propres, ou est-elle au contraire la seule activité qui nous permet d'acquérir une authentique liberté concrète ?",
      authors: ["Sénèque", "K. Marx", "Hannah Arendt"],
      plan: {
        these: "Travailler accapare notre temps spirituel précieux, nous distrait d'une vie civique libre et d'une contemplation philosophique saine (Sénèque).",
        antithese: "S'il n'y avait pas d'efforts concertés pour transformer le réel, l'homme resterait entièrement dépendant de son environnement naturel hostile.",
        synthese: "Le travail devient un instrument d'épanouissement libre si la réduction du temps de travail permet le développement autonome de chacun."
      }
    }
  },
  {
    id: "pot-13",
    title: "Travailler, est-ce perdre son temps ?",
    notions: ["Le travail", "Le temps", "Le bonheur"],
    type: "Potentiel",
    ideas: {
      problematica: "Si le sens véritable de notre temps terrestre réside dans le bonheur, l'échange ou l'esprit, l'énergie dépensée à façonner continuellement des biens périssables n'est-elle pas un regrettable gaspillage existant ?",
      authors: ["Aristote", "H. Arendt", "Nietzsche"],
      plan: {
        these: "Le labeur utilitaire enferme l'homme dans un cycle biologique de subsistance infinie manquant de grandeur spirituelle (Aristote).",
        antithese: "En revanche, c'est dans le travail que le temps prend une consistance durable par la création d'œuvres matérielles stables.",
        synthese: "Travailler n’est pas perdre son temps si cette activité permet de cultiver ses compétences rationnelles et coopératives."
      }
    }
  },
  {
    id: "pot-14",
    title: "Travailler, est-ce seulement obéir ?",
    notions: ["Le travail", "Le devoir", "La liberté"],
    type: "Potentiel",
    ideas: {
      problematica: "Le travail se résume-t-il à se plier à des ordres de supérieurs, des exigences de rentabilité et des principes physiques rigides, ou suppose-t-il l’initiative de l'intelligence pratique ?",
      authors: ["M. Crawford", "K. Marx", "Alain"],
      plan: {
        these: "L'organisation industrielle moderne mécanise le labeur en contraignant le travailleur à un simple rôle d'obéissance passive et répétitive.",
        antithese: "Pourtant, se confronter au réel mécanique exige toujours une part d'initiative, de réactivité critique et de savoir-faire vivant (Crawford).",
        synthese: "Le travail achevé requiert par définition l'autonomie et le jugement critique de l'esprit, que la stricte hiérarchie managériale tente en vain de gommer."
      }
    }
  },
  {
    id: "pot-15",
    title: "Le travail peut-il être un plaisir ?",
    notions: ["Le travail", "Le bonheur"],
    type: "Potentiel",
    ideas: {
      problematica: "La dépense physique et intellectuelle que demande l'action laborieuse s'oppose-t-elle au bien-être sensible, ou la résolution de problématiques ardues et la fierté de l'œuvre accomplie créent-elles de réelles satisfactions ?",
      authors: ["C. Fourier", "F. Nietzsche", "K. Marx"],
      plan: {
        these: "Le travail est vécu comme corvée douloureuse s'il n'est motivé que par la violence silencieuse de la faim naturelle.",
        antithese: "Cependant, surmonter des difficultés concrètes en voyant mûrir son œuvre procure le bonheur constructif de l'action réussie (Nietzsche).",
        synthese: "L'activité laborieuse peut générer de réels plaisirs épanouissants si les tâches sont variées, choisies librement et utiles."
      }
    }
  },
  {
    id: "pot-16",
    title: "Y a-t-il un sens à travailler sans créer ?",
    notions: ["Le travail", "L'art", "La raison"],
    type: "Potentiel",
    ideas: {
      problematica: "Peut-on trouver de réelles gratifications dans l'exercice d'un rôle purement utilitaire sans visée novatrice, originale ou artistique ?",
      authors: ["H. Arendt", "A. Camus", "S. Weil"],
      plan: {
        these: "Répéter un geste mécanique de production sans finalité créatrice aliène l'homme en le privant d'imagination consciente (Sisyphe).",
        antithese: "Toutefois, tout travail de service ou de maintien assure la survie partagée, ce qui lui confère une puissante valeur morale solidaire (Weil).",
        synthese: "Bien que créer soit souverain, travailler sans créer trouve son orientation noble dans le sentiment de prendre sa place dans l'humanité."
      }
    }
  },
  {
    id: "pot-17",
    title: "La valeur d'un homme se mesure-t-elle à son travail ?",
    notions: ["Le travail", "Le devoir", "La justice"],
    type: "Potentiel",
    ideas: {
      problematica: "Est-ce la contribution productive et la profession d’un individu qui décident de son mérite dans la cité, ou cela constitue-t-il un réductionnisme utilitariste dangereux ?",
      authors: ["I. Kant", "P. Lafargue", "F. Nietzsche"],
      plan: {
        these: "La culture contemporaine valorise le travailleur infatigable comme le seul citoyen vraiment méritant et responsable de la cité.",
        antithese: "Or, la dignité humaine est inaliénable et transcende largement l'utilité productive de l'individu sur le marché (Kant).",
        synthese: "La valeur intime de l'homme relève de sa conscience morale, le travail n’étant qu'un des multiples modes de participation au monde."
      }
    }
  },
  {
    id: "pot-18",
    title: "Le travail n'est-il qu'un moyen de survie ?",
    notions: ["Le travail", "Le bonheur", "La nature"],
    type: "Potentiel",
    ideas: {
      problematica: "Né pour préserver l'existence des rigueurs extérieures, le travail se restreint-il par essence à l'utilitaire, ou s’élève-t-il à un besoin social de reconnaissance et d'intellection ?",
      authors: ["H. Arendt", "G.W.F. Hegel", "A. Honneth"],
      plan: {
        these: "Sous l'urgence constante du besoin corporel élémentaire, le labeur apparaît comme une pure répétition pour pérenniser la subsistance biologique.",
        antithese: "À l'inverse, il est le lieu fondamental de valorisation et de respect au sein de la sphère sociale publique (Honneth).",
        synthese: "S'il prend naissance dans l'urgence de vivre, le travail acquiert son authenticité dans son pouvoir de liaison humaine sociale."
      }
    }
  },
  {
    id: "pot-19",
    title: "Le travail peut-il être autre chose qu’un moyen de survivre ?",
    notions: ["Le travail", "La liberté", "La conscience"],
    type: "Potentiel",
    ideas: {
      problematica: "Comment l'activité professionnelle, dominée par les réalités économiques strictes, peut-elle s'émanciper de la simple contrainte financière pour devenir un outil d'affirmation spirituelle ?",
      authors: ["E. Mounier", "K. Marx", "A. Honneth"],
      plan: {
        these: "La dure réalité du marché moderne contraint souvent l'ouvrier à s'aliéner dans des labeurs alimentaires purement subis pour assurer sa faim.",
        antithese: "Pourtant, l'accomplissement professionnel enrichit l'intelligence technique et nourrit l'identité sociale et le sentiment d'utilité.",
        synthese: "C'est par une transformation des rapports professionnels et de l'environnement humain que l'effort accède à une visée d'épanouissement."
      }
    }
  },
  {
    id: "pot-20",
    title: "Le travail est-il un devoir ?",
    notions: ["Le travail", "Le devoir", "La justice"],
    type: "Potentiel",
    ideas: {
      problematica: "L'obligation de participer à l'effort de production national est-elle une exigence morale indiscutable pour chaque citoyen, ou la liberté légitime-t-elle le refus réclamé du productivisme ?",
      authors: ["I. Kant", "P. Lafargue", "F. Nietzsche"],
      plan: {
        these: "Participer aux travaux de la communauté est un devoir sacré de réciprocité ; l'oisiveté sans motif s'apparente à du parasitisme injuste.",
        antithese: "D'un autre côté, célébrer frénétiquement le labeur peut être une méthode d'obéissance docile limitant la saine révolte intellectuelle (Nietzsche).",
        synthese: "Contribuer équitablement à la subsistance commune relève de la justice, mais cela doit préserver un domaine libre d'études autonomes personnelles."
      }
    }
  }
);
