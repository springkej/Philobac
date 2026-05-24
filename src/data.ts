import { Subject, Notion, ThesisNotion, NotionMetadata } from "./types";

export const THESES_LIBRARY: ThesisNotion[] = [
  {
    notion: "La technique",
    angles: [
      {
        these: "La technique comme dépossession de l'humain: la « honte prométhéenne »",
        reference: "Günther Anders, L'Obsolescence de l'homme",
        developpement: "Dans L'Obsolescence de l'homme, Günther Anders explique que la technique moderne est devenue si puissante que l'être humain ne parvient plus à comprendre ni à maîtriser ce qu'il produit. Cette situation crée ce qu'il appelle une « honte prométhéenne » : l'homme se sent inférieur aux machines, qu'il juge plus efficaces, plus précises et plus durables que lui. Anders parle aussi d'un « décalage prométhéen » : nous sommes capables de fabriquer des technologies extrêmement dangereuses, comme la bombe atomique, sans être capables d'en imaginer réellement les conséquences humaines et morales. Peu à peu, l'homme cesse d'être maître de la technique et devient un simple exécutant ou consommateur dépendant des systèmes techniques. Les médias et les objets techniques remplacent même notre expérience directe du monde par des images et des représentations toutes faites. Ainsi, l'individu finit par s'adapter aux exigences de la machine et du rendement, au risque de perdre sa liberté, son esprit critique et sa dignité humaine.",
        argumentPivot: "Par le « décalage prométhéen », Anders démontre que notre pouvoir de production technique dépasse infiniment notre faculté de représentation et d'imagination morale, réduisant l'homme au statut de simple serviteur d'un système qu'il ne maîtrise plus."
      },
      {
        these: "La promesse de maîtrise : « Maîtres et possesseurs de la nature »",
        reference: "René Descartes, Discours de la méthode",
        developpement: "Dans le Discours de la méthode, René Descartes affirme que la science et la technique doivent permettre à l'homme de devenir « maître et possesseur de la nature ». Grâce à la connaissance des lois naturelles, l'être humain peut inventer des outils et des machines capables de transformer le monde à son avantage. Pour Descartes, la technique a donc une fonction positive : elle doit améliorer les conditions de vie, réduire les souffrances et développer la médecine afin de préserver la santé. La domination technique de la nature n'est pas présentée comme une destruction, mais comme un moyen d'émancipation. En maîtrisant son environnement par la raison et la science, l'homme peut se libérer de la maladie, de la misère et des limites imposées par la nature, permettant à l'homme de ne plus subir passivement son environnement, mais de le plier à sa propre volonté rationnelle.",
        argumentPivot: "Descartes montre que la technique, fondée sur la science, permet de soumettre la nature à la volonté rationnelle humaine afin de libérer l'homme de la précarité et de la maladie."
      },
      {
        these: "Le fondement anthropologique : Le mythe de Prométhée et d'Épiméthée",
        reference: "Platon, Protagoras",
        developpement: "Dans le Protagoras, Platon raconte le mythe de Prométhée et d'Épiméthée pour expliquer l'origine de la technique. Épiméthée distribue aux animaux toutes les qualités nécessaires pour survivre : force, vitesse, griffes ou fourrure. Mais il oublie l'être humain, qui reste faible et sans protection face à la nature. Pour sauver l'humanité, Prométhée vole alors le feu et les techniques aux dieux afin de les offrir aux hommes. Ce mythe montre que la technique est indispensable à la survie humaine. Contrairement aux animaux, l'homme ne possède pas de défenses naturelles suffisantes ; il doit donc fabriquer des outils pour vivre, se protéger et transformer son environnement. La technique apparaît ainsi comme la véritable nature de l'être humain.",
        argumentPivot: "La technique n'est pas un luxe artificiel mais l'essence même de l'homme : dépourvu de défenses naturelles, sa survie biologique dépend entièrement de sa capacité à créer des outils."
      },
      {
        these: "L'essence destructrice moderne : L'Arraisonnement / Le Gestell",
        reference: "Martin Heidegger, La Question de la technique",
        developpement: "Dans La Question de la technique, Martin Heidegger affirme que la technique moderne n'est pas un simple outil neutre. Elle impose une manière particulière de voir le monde qu'il appelle l'« arraisonnement » (Gestell). La nature n'est plus considérée comme un milieu à respecter, mais comme un stock de ressources à exploiter et à rentabiliser. La technique moderne cherche à extraire, produire et contrôler toujours plus d'énergie et de richesses. Le danger est que cette logique s'applique aussi aux êtres humains, réduits à de simples « ressources humaines » destinées à être utilisées efficacement. Heidegger critique donc une vision du monde dominée par le rendement et l'utilité, qui fait perdre à l'homme son rapport authentique et poétique à la nature et à l'existence.",
        argumentPivot: "Heidegger montre que la technique moderne n'est pas neutre : elle arraisonne le monde en le réduisant à un simple stock disponible, risquant d'assimiler l'homme lui-même à une simple ressource exploitable."
      },
      {
        these: "L'aliénation capitaliste : L'homme comme appendice de la machine",
        reference: "Karl Marx, Le Capital",
        developpement: "Dans Le Capital, Karl Marx analyse les effets de la machine dans le système capitaliste. Autrefois, l'artisan contrôlait ses outils et maîtrisait entièrement son travail. Avec l'industrialisation, cette relation s'inverse : l'ouvrier doit désormais suivre le rythme imposé par la machine. Il devient un simple rouage du système productif. Cette organisation du travail provoque une aliénation, car le travailleur ne se reconnaît plus dans ce qu'il produit et perd son savoir-faire. La technique, au lieu de libérer l'homme, sert surtout la recherche du profit. L'ouvrier est réduit à une fonction mécanique répétitive qui épuise son corps et limite son développement intellectuel.",
        argumentPivot: "Marx dénonce l'aliénation par la machine sous le capitalisme, où l'ouvrier n'est plus le maître de ses outils mais un simple rouage passif assujetti au rythme mécanique de la production."
      },
      {
        these: "L'éthique environnementale : Le Principe Responsabilité et l'heuristique de la peur",
        reference: "Hans Jonas, Le Principe responsabilité",
        developpement: "Dans Le Principe responsabilité, Hans Jonas explique que la puissance technologique moderne est devenue si grande qu'elle menace désormais l'avenir de l'humanité et de la planète. Les anciennes morales ne suffisent plus, car elles ne prenaient pas en compte les conséquences à long terme de nos actions techniques. Jonas propose alors un nouvel impératif moral : agir de manière à préserver la possibilité d'une vie humaine future sur Terre. Pour cela, il défend une « heuristique de la peur » : la peur des catastrophes écologiques ou nucléaires doit nous pousser à être prudents et responsables. La technique doit donc être limitée et contrôlée par une éthique de la prévoyance afin d'éviter des destructions irréversibles.",
        argumentPivot: "Jonas affirme que la puissance technologique moderne menace la survie future de l'humanité, exigeant un nouvel impératif d'autolimitation guidé par une « heuristique de la peur »."
      },
      {
        these: "La réconciliation : La culture technique et la compréhension de la machine",
        reference: "Gilbert Simondon, Du mode d'existence des objets techniques",
        developpement: "Dans Du mode d'existence des objets techniques, Gilbert Simondon refuse l'idée selon laquelle les machines seraient opposées à la culture humaine. Selon lui, le véritable problème vient surtout de notre ignorance du fonctionnement des objets techniques. L'homme moderne utilise les machines sans les comprendre, ce qui crée un sentiment d'aliénation et de dépendance. Simondon pense qu'il faut développer une véritable culture technique permettant de comprendre la logique, la fabrication et l'évolution des machines. En apprenant à connaître les objets techniques, l'homme peut retrouver une relation plus équilibrée avec eux et cesser de les subir passivement.",
        argumentPivot: "Simondon soutient que l'aliénation face aux machines provient de notre ignorance : comprendre l'objet technique comme un produit de l'intelligence permet de réconcilier culture et technologie."
      },
      {
        these: "Le péril du temps libéré : L'animal laborans et la société sans travail",
        reference: "Hannah Arendt, Condition de l'homme moderne",
        developpement: "Dans Condition de l'homme moderne, Hannah Arendt distingue le simple travail nécessaire à la survie biologique de l'activité créatrice et politique qui donne un sens plus élevé à la vie humaine. L'automatisation technique peut libérer l'homme des tâches pénibles et répétitives, ce qui semble être un progrès. Cependant, Arendt souligne un paradoxe : notre société valorise principalement le travail salarié comme source d'identité et de reconnaissance sociale. Si les machines remplacent massivement les travailleurs, les individus risquent de se retrouver sans rôle ni but véritable. Une société totalement automatisée pourrait alors produire des individus désœuvrés, enfermés dans la consommation et privés d'activités politiques, intellectuelles ou créatrices.",
        argumentPivot: "Arendt avertit du paradoxe de l'automatisation : elle libère l'homme du labeur au sein d'une société qui n'a pourtant d'autre idéal que le travail, menaçant de nous laisser désœuvrés."
      }
    ]
  },
    {
    notion: "Le travail",
    angles: [
      {
        these: "L'entrave à la liberté : le travail comme nécessité subie",
        reference: "Aristote, La Politique",
        developpement: "Pour Aristote, le travail manuel empêche l'être humain d'accéder à la véritable liberté, car il l'enferme dans les besoins matériels de la survie quotidienne. Dans la Grèce antique, les tâches physiques et laborieuses étaient ainsi réservées aux esclaves, tandis que les citoyens libres devaient disposer de temps pour se consacrer à la politique, à la philosophie et aux arts. Aristote considère en effet que la véritable vocation de l'homme libre est de rechercher la sagesse et de participer activement à la vie de la cité. Le loisir, appelé « skholè », n'est pas une simple oisiveté, mais représente un temps noble et indispensable consacré au développement intellectuel et moral. Ainsi, la liberté commence véritablement lorsque l'individu n'est plus soumis aux contraintes du travail nécessaire à sa survie biologique.",
        argumentPivot: "Aristote affirme que le travail aliène la liberté humaine en nous soumettant aux nécessités biologiques, justifiant ainsi le loisir (skholè) comme condition de l'accomplissement intellectuel."
      },
      {
        these: "Le devoir moral et la formation du caractère",
        reference: "Emmanuel Kant, Réflexions sur l'éducation",
        developpement: "Pour Emmanuel Kant, le travail dépasse la simple nécessité économique : il constitue un devoir moral indispensable à la dignité humaine. L'être humain ne doit en aucun cas céder à la paresse, car l'oisiveté empêche le développement de sa volonté, de sa raison et de sa discipline intérieure. Le travail permet de maîtriser nos instincts immédiats et d'apprendre la rigueur, la patience, la persévérance et le sens des responsabilités. Il contribue également à rendre chaque individu utile à la société dans laquelle il évolue. En surmontant la résistance des choses, l'individu se forme lui-même. Ainsi, le travail possède une fonction profondément éducative et morale : il arrache l'homme à sa nature animale pour l'élever vers son humanité véritable en lui inculquant le respect de l'effort continu.",
        argumentPivot: "Kant définit le travail comme un devoir moral incontournable, arrachant l'homme à sa paresse naturelle pour forger sa discipline, sa volonté et sa dignité."
      },
      {
        these: "La dialectique libératrice : le travail comme moyen d'émancipation",
        reference: "G.W.F. Hegel, Phénoménologie de l'Esprit",
        developpement: "Dans sa célèbre dialectique du maître et de l'esclave, Hegel démontre que le travail joue un rôle essentiel dans la formation de la conscience. Initialement, l'esclave est contraint de travailler pour satisfaire son maître. Cependant, en transformant concrètement la nature par son activité, il façonne la matière et y imprime sa volonté. Par cet effort, l'esclave découvre sa propre puissance créatrice et développe une autonomie intérieure inattendue. Le maître, à l'inverse, s'enferme dans une dépendance totale vis-à-vis du travail de l'esclave et reste passif dans la jouissance immédiate des biens produits. Hegel conclut ainsi de manière paradoxale que le travail, bien qu'il naisse d'une violente contrainte, devient le véritable moteur de l'émancipation intellectuelle et de la conquête historique de la liberté pour l'être humain.",
        argumentPivot: "Hegel illustre par la figure de l'esclave que le travail, en transformant la nature, permet à l'homme de prendre conscience de sa puissance créatrice et de s'émanciper."
      },
      {
        these: "L'aliénation capitaliste : la dépossession du travailleur",
        reference: "Karl Marx, Manuscrits de 1844 et Le Capital",
        developpement: "Si Karl Marx considère le travail libre comme l'essence de l'homme, il critique farouchement ses conditions dans le système capitaliste. Dans ce modèle, l'ouvrier ne possède ni les moyens de production, ni le produit final de son effort, ce qui le sépare brutalement du sens de son activité. Le travail devient alors répétitif, morcelé et imposé, épuisant physiquement et moralement le travailleur. L'ouvrier est contraint de vendre son temps et sa force de travail comme de simples marchandises pour survivre, engendrant une profonde aliénation. Au lieu de s'épanouir dans ce qu'il fabrique, le salarié s'y perd. Selon Marx, le capitalisme transforme ainsi le travail, initialement censé être une activité créatrice et libératrice, en une source d'exploitation, de dépossession et de souffrance intolérable.",
        argumentPivot: "Marx dénonce l'aliénation du travail salarié sous le capitalisme : privé des fruits de son labeur, l'ouvrier est réduit à une marchandise, vidant son activité de son sens."
      },
      {
        these: "La réduction à l'animal laborans : la perte du monde commun",
        reference: "Hannah Arendt, Condition de l'homme moderne",
        developpement: "Hannah Arendt distingue trois activités humaines fondamentales : le travail, l'œuvre et l'action. Le travail correspond strictement aux tâches nécessaires à la survie biologique, comme produire de la nourriture et subvenir aux besoins corporels. Ces activités sont par nature éphémères, répétitives, cycliques et immédiatement liées à la consommation. L'être humain réduit uniquement à cette dimension devient ce qu'elle nomme l'« animal laborans ». Contrairement à l'œuvre qui crée des objets durables ou à l'action politique qui tisse des liens sociaux de liberté, le simple labeur ne laisse aucune trace pérenne dans le monde. Arendt s'inquiète profondément de voir nos sociétés modernes dominées exclusivement par le cycle de la production et de la consommation. Une telle société risque d'étouffer notre capacité d'agir et de nous priver d'un monde commun.",
        argumentPivot: "Arendt met en garde contre la glorification moderne du simple travail de survie, qui réduit l'homme à l'état d'« animal laborans » enfermé dans le cycle stérile de la production-consommation."
      },
      {
        these: "La libération par le temps libre : la réhabilitation de l'oisiveté",
        reference: "Bertrand Russell, Éloge de l'oisiveté",
        developpement: "Dans Éloge de l'oisiveté, Bertrand Russell critique la croyance morale traditionnelle selon laquelle il faudrait travailler constamment pour être un individu respectable. Il observe que les extraordinaires progrès technologiques permettraient déjà de réduire drastiquement le temps de travail nécessaire à la production globale des richesses. Selon lui, une société organisée de façon plus rationnelle pourrait offrir énormément de loisirs, de culture et de temps libre à tous. L'oisiveté ne doit absolument plus être stigmatisée comme de la paresse, mais valorisée comme la condition indispensable du développement intellectuel et artistique. Russell plaide ainsi pour une réorganisation radicale du travail visant à émanciper l'humanité, plaçant enfin la recherche du bonheur, de la convivialité et de la créativité au centre de l'existence humaine.",
        argumentPivot: "Russell démystifie le culte moral du travail en affirmant que les progrès techniques doivent servir à réduire le labeur au profit d'une oisiveté créatrice et libératrice."
      },
      {
        these: "La crise du sens contemporaine : l'absurdité des « bullshit jobs »",
        reference: "David Graeber, Bullshit Jobs",
        developpement: "L'anthropologue David Graeber a conceptualisé la notion de « bullshit jobs » (ou emplois absurdes) pour décrire des postes que même les salariés qui les exercent jugent fondamentalement inutiles, voire nuisibles. Dans nos économies modernes occidentales, de nombreux travailleurs ont le sentiment persistant que leur activité quotidienne n'apporte strictement aucune contribution réelle ou positive à la société. Cette absence criante de finalité provoque une souffrance psychologique profonde, un épuisement moral et un redoutable sentiment d'aliénation. Graeber fustige ainsi les grandes organisations bureaucratiques et tertiaires qui multiplient artificiellement ces tâches administratives vides de sens. Il démontre avec acuité que le principal fléau du monde professionnel contemporain n'est plus seulement l'exploitation physique ou la fatigue, mais bien la disparition tragique de l'utilité sociale et de la dignité au travail.",
        argumentPivot: "Graeber dénonce la prolifération moderne des « emplois absurdes », illustrant que l'aliénation contemporaine naît avant tout de l'absence totale de sens et d'utilité sociale des tâches bureaucratiques."
      },
      {
        these: "La tyrannie de la performance : l'auto-exploitation volontaire",
        reference: "Byung-Chul Han, La Société de la fatigue",
        developpement: "Le philosophe Byung-Chul Han analyse nos sociétés contemporaines comme de véritables sociétés de la performance. Aujourd'hui, les individus ne sont plus seulement exploités par une autorité extérieure, comme au temps de l'usine, mais ils s'auto-exploitent eux-mêmes. Animés par le désir d'être toujours plus efficaces, optimisés et performants, les travailleurs intériorisent les exigences de rentabilité. Cette pression permanente, vécue à tort comme un accomplissement personnel, conduit inévitablement à l'épuisement psychologique, à la dépression et au burn-out. Han souligne que ce culte aveugle de la productivité ininterrompue détruit notre précieuse capacité de contemplation, de silence et de véritable repos. Il lance ainsi un vibrant appel à ralentir et à réhabiliter des moments de profonde inactivité afin de préserver notre intégrité mentale face au diktat de la performance continue.",
        argumentPivot: "Han démontre que la société moderne a remplacé la contrainte externe par une injonction à la performance, conduisant les individus à s'auto-exploiter jusqu'à l'épuisement psychologique."
      },
      {
        these: "Le fondement de la propriété : le travail comme extension de soi",
        reference: "John Locke, Second Traité du gouvernement civil",
        developpement: "Pour John Locke, le travail est l'origine légitime du droit de propriété privée. Selon lui, la nature a été donnée en commun à tous les hommes, mais chaque individu possède une propriété exclusive sur sa propre personne et sur sa force de travail. Lorsqu'un homme extrait une ressource de l'état de nature ou cultive une terre, il y mêle son effort personnel et y ajoute quelque chose qui lui appartient en propre. Cet acte de transformation retire l'objet de l'état commun pour en faire sa possession personnelle. Le travail n'est donc pas seulement une activité économique, mais une extension de la personnalité humaine dans le monde matériel. Cette théorie justifie la propriété par l'effort individuel, posant ainsi les bases du libéralisme moderne où le fruit du labeur définit le droit.",
        argumentPivot: "Locke soutient que le travail fonde le droit de propriété : en transformant la nature par son effort, l'homme y incorpore sa propre personne, rendant l'appropriation légitime."
      },
      {
        these: "Le divertissement : le travail comme fuite de l'angoisse existentielle",
        reference: "Blaise Pascal, Pensées",
        developpement: "Pascal analyse le travail à travers le concept de « divertissement », terme qui désigne tout ce qui détourne l'homme de la pensée de sa propre condition. Selon lui, l'être humain éprouve une angoisse insupportable lorsqu'il se retrouve seul et sans occupation, car il est alors confronté à sa finitude, à sa misère et au vide de son existence. Le travail, par l'agitation et l'attention qu'il exige, offre une diversion efficace contre cette confrontation intérieure douloureuse. Même les tâches pénibles ou les responsabilités accablantes sont préférées au repos, car elles empêchent l'esprit de s'attarder sur le tragique de la condition humaine. En ce sens, le travail n'est pas recherché pour ses résultats, mais comme un moyen psychologique de fuir l'ennui et le désespoir d'une réflexion solitaire sur la mort.",
        argumentPivot: "Pascal montre que le travail fonctionne comme un divertissement : une activité incessante qui protège l'homme de l'angoisse insupportable liée à sa propre finitude."
      },
      {
        these: "L'efficacité par la division du travail : le gain de productivité",
        reference: "Adam Smith, Richesse des nations",
        developpement: "Dans son analyse de la manufacture d'épingles, Adam Smith démontre que la division du travail est le moteur principal de la croissance économique. En fragmentant la fabrication d'un objet simple en de multiples tâches spécialisées, la productivité augmente de manière spectaculaire. Chaque ouvrier gagne en dextérité, le temps de transition entre les étapes disparaît et l'invention de machines spécifiques est favorisée. Pour Smith, cette organisation rationnelle est la source de l'opulence générale dans les sociétés civilisées. Cependant, il reconnaît aussi un revers social : la répétition d'un geste unique et simple risque d'engourdir l'intelligence du travailleur. Malgré ce danger, Smith privilégie l'efficacité collective, car elle permet de satisfaire les besoins du plus grand nombre grâce à une production de masse rendue possible par la spécialisation technique des fonctions productives.",
        argumentPivot: "Smith prouve que la division du travail démultiplie la richesse nationale par la spécialisation, tout en alertant sur le risque d'atrophie intellectuelle du travailleur mécanisé."
      },
      {
        these: "La discipline contre l'ennui : le travail comme régulateur du désir",
        reference: "Arthur Schopenhauer, Le Monde comme volonté et comme représentation",
        developpement: "Pour Schopenhauer, l'existence humaine oscille perpétuellement comme un pendule entre la souffrance du besoin et le vide de l'ennui. Lorsque les besoins vitaux sont satisfaits, l'homme tombe dans une oisiveté qui le livre à ses inquiétudes et au dégoût de soi. Le travail intervient alors comme une nécessité salvatrice qui organise le temps et canalise l'énergie de la volonté. En imposant une discipline quotidienne et des objectifs concrets, le travail occupe l'esprit et l'empêche de s'égarer dans des désirs insatiables ou dans une introspection mélancolique. Bien que le travail soit souvent pénible, il protège l'individu d'un mal plus grand encore : le sentiment d'absurdité totale qui surgit dans l'inactivité. Il donne ainsi un rythme artificiel mais indispensable à une vie qui, sans effort, ne serait que stagnation et ennui métaphysique.",
        argumentPivot: "Schopenhauer considère le travail comme un rempart contre l'ennui : il structure l'existence et calme temporairement les tourments d'une volonté jamais satisfaite."
      },
      {
        these: "La déshumanisation par le chronomètre : la souffrance ouvrière",
        reference: "Simone Weil, La Condition ouvrière",
        developpement: "Après avoir travaillé anonymement en usine, Simone Weil décrit le travail industriel comme une expérience de destruction de la pensée. Sous le régime de la rationalisation extrême (taylorisme), l'ouvrier est soumis à une cadence mécanique qui interdit toute réflexion. La nécessité de vitesse et la répétition de gestes vides de sens vident l'âme de toute vie intérieure. Pour Weil, cette forme de travail est une « oppression » car elle transforme l'homme en une chose, un simple prolongement de la machine. Le travailleur ne peut plus éprouver la fierté de créer, car il n'est plus qu'un rouage docile sous la menace constante du chronomètre. Cette déshumanisation brise la dignité et la capacité de révolte, car l'épuisement physique se double d'un sentiment de néant. Le travail, au lieu d'élever l'homme, devient ici l'instrument de son écrasement total.",
        argumentPivot: "Weil témoigne de la violence du travail industriel : l'asservissement au rythme des machines détruit la pensée et réduit l'ouvrier à une chose dépourvue de dignité."
      },
      {
        these: "Le travail comme contrôle social : la méfiance envers l'effort",
        reference: "Friedrich Nietzsche, Aurore",
        developpement: "Nietzsche propose une critique radicale de la glorification du travail par la société. Selon lui, l'éloge constant du « travail acharné » est une ruse utilisée par la communauté pour maintenir les individus dans un état de docilité. Le travail épuisant consomme une quantité prodigieuse de force nerveuse, empêchant l'individu de s'adonner à la réflexion critique, à la méditation ou à la culture de son propre génie. En maintenant les citoyens occupés du matin au soir, la société s'assure qu'ils ne poseront pas de questions dangereuses et qu'ils ne se révolteront pas contre l'ordre établi. Pour Nietzsche, la « religion du travail » est donc un instrument de sécurité publique qui favorise la médiocrité collective. Elle transforme les hommes en instruments dociles, fiers de leur propre fatigue, tout en étouffant toute velléité d'indépendance spirituelle et de création authentique.",
        argumentPivot: "Nietzsche dénonce le travail intensif comme une forme de police sociale : il épuise les énergies individuelles pour empêcher toute pensée libre et rebelle."
      }
    ]
  },
  {
    notion: "La religion",
    angles: [
      {
        these: "La religion comme projection anthropologique de l'essence humaine",
        reference: "Ludwig Feuerbach, L'Essence du christianisme",
        developpement: "Dans L'Essence du christianisme, Ludwig Feuerbach opère un renversement radical : ce n'est pas Dieu qui a créé l'homme, c'est l'homme qui a créé Dieu à son image. Selon lui, la religion est un miroir dans lequel l'humanité se contemple sans s'en rendre compte. Face à ses propres faiblesses, l'être humain projette toutes ses qualités idéales (la bonté, la justice, l'intelligence, l'amour) à l'extérieur de lui-même et les pousse à l'infini pour former l'idée d'un être suprême. L'homme s'appauvrit alors au profit de son propre reflet divin, se considérant comme un être misérable et pécheur. Feuerbach conclut que la théologie est en réalité une anthropologie ignorée : en étudiant ce qu'une religion vénère, on découvre simplement les valeurs et les désirs profonds de la nature humaine.",
        argumentPivot: "Feuerbach montre que Dieu n'est qu'une projection idéalisée des qualités humaines, ce qui signifie que la croyance religieuse est fondamentalement une connaissance de l'Homme qui s'ignore."
      },
      {
        these: "La religion comme aliénation sociale et idéologie de consolation",
        reference: "Karl Marx, Critique de la philosophie du droit de Hegel",
        developpement: "Pour Karl Marx, la religion est avant tout le symptôme d'une société malade et profondément injuste. Dans un système où les travailleurs sont exploités et dépossédés du fruit de leur labeur, la religion agit comme un antidouleur : elle est « l'opium du peuple ». Elle offre une consolation trompeuse en promettant un bonheur éternel dans l'au-delà, ce qui rend la misère présente psychologiquement supportable. Ce faisant, elle remplit une fonction idéologique néfaste pour l'émancipation. En prêchant la soumission et en détournant le regard des hommes vers le ciel, elle les empêche de se révolter contre les inégalités sociales terrestres. Marx soutient donc que la libération de l'homme ne passe pas par une critique théorique, mais par une révolution matérielle supprimant l'exploitation sociale.",
        argumentPivot: "Marx dénonce la religion comme un narcotique idéologique qui, en promettant un paradis illusoire, justifie l'exploitation matérielle et détourne le peuple de la révolution sociale."
      },
      {
        these: "La religion comme illusion rassurante et régression infantile",
        reference: "Sigmund Freud, L'Avenir d'une illusion",
        developpement: "Dans L'Avenir d'une illusion, Sigmund Freud analyse la croyance religieuse non pas comme une erreur de la raison, mais comme une puissante illusion psychologique. Face à la nature terrifiante, à la maladie et à l'inéluctabilité de la mort, l'être humain ressent une profonde détresse. Pour s'apaiser, il réactive un mécanisme infantile : le besoin d'un père tout-puissant. Dieu devient ainsi cette figure paternelle idéalisée, capable de réconforter, de récompenser et de protéger le croyant. La religion agit donc comme une névrose obsessionnelle collective qui aide l'humanité à supporter son angoisse face à l'existence. Cependant, Freud estime que pour devenir libre et adulte, l'humanité doit abandonner cette consolation puérile, accepter sa vulnérabilité et s'en remettre à la seule rationalité scientifique.",
        argumentPivot: "Freud affirme que la religion est une illusion née de l'angoisse humaine, poussant l'individu terrifié par l'existence à projeter l'image rassurante d'un père protecteur et omnipotent."
      },
      {
        these: "La religion comme ciment social et sacralisation de la société",
        reference: "Émile Durkheim, Les Formes élémentaires de la vie religieuse",
        developpement: "Pour le sociologue Émile Durkheim, la religion ne se définit pas par la simple croyance en un ou plusieurs dieux, mais par la division rigoureuse du monde entre le sacré et le profane. Dans son approche, la religion est avant tout un phénomène collectif essentiel à la survie d'un groupe. Lorsqu'une communauté se rassemble pour vénérer un totem ou accomplir des rites sacrés, elle célèbre en réalité l'autorité et la force de la société elle-même. La religion agit comme un puissant ciment invisible : elle impose des règles, unit les individus et renforce leur sentiment d'appartenance. Ainsi, en adorant une puissance transcendante, les fidèles vénèrent inconsciemment le lien social qui les dépasse, les protège et assure la cohésion de leur communauté.",
        argumentPivot: "Durkheim démontre que le véritable objet du culte religieux est la société elle-même : en vénérant le sacré, les individus célèbrent et renforcent le lien social qui les unit."
      },
      {
        these: "La foi comme paradoxe absolu et saut existentiel",
        reference: "Søren Kierkegaard, Crainte et Tremblement",
        developpement: "Dans Crainte et Tremblement, Søren Kierkegaard oppose radicalement la foi religieuse authentique à la tiédeur de la raison objective. À travers la figure biblique d'Abraham, prêt à sacrifier son fils Isaac sur l'ordre de Dieu, Kierkegaard illustre le caractère vertigineux de la croyance. Cet acte est un scandale absolu pour la morale universelle et pour la rationalité, mais il démontre que la foi exige une « suspension téléologique de l'éthique ». Le croyant se retrouve alors seul, dans une angoisse terrible, face à l'Absolu. La foi n'est donc pas un savoir intellectuel ou un ensemble de dogmes confortables, mais une passion infinie et un saut courageux dans l'inconnu, constituant l'expérience subjective la plus intense et la plus authentique pour un individu.",
        argumentPivot: "Kierkegaard soutient que la foi n'est pas un savoir rationnel mais une épreuve intime et angoissante, exigeant un « saut » subjectif qui suspend les règles éthiques et logiques ordinaires."
      },
      {
        these: "La religion comme accomplissement moral et postulat pratique",
        reference: "Emmanuel Kant, La Religion dans les limites de la simple raison",
        developpement: "Emmanuel Kant affirme que la raison humaine est incapable de prouver scientifiquement l'existence de Dieu, car cette réalité échappe à notre expérience sensible. Cependant, s'il détruit la possibilité d'un savoir théologique objectif, il sauve la religion par la morale. Pour agir de façon juste dans un monde où la vertu n'est presque jamais récompensée par le bonheur, l'homme a besoin d'espérance. Kant explique donc que nous devons « postuler » l'existence de Dieu et l'immortalité de l'âme pour soutenir notre effort éthique quotidien. La véritable religion ne réside pas dans des rituels magiques, mais dans la reconnaissance de nos devoirs moraux comme s'ils étaient des commandements divins. La croyance devient ainsi une nécessité pratique donnant sens à notre bonne volonté.",
        argumentPivot: "Kant établit que si la raison ne peut prouver théoriquement l'existence de Dieu, elle doit la postuler d'un point de vue pratique pour garantir la réconciliation finale entre la morale et le bonheur."
      },
      {
        these: "La croyance comme pari rationnel et intuition du cœur",
        reference: "Blaise Pascal, Pensées",
        developpement: "Dans ses Pensées, Blaise Pascal refuse de séparer naïvement foi et rationalité, tout en posant fermement les limites de l'intellect humain. Il souligne que la raison seule est incapable de prouver l'existence de Dieu avec certitude. C'est ici qu'intervient son célèbre argument du Pari. Face à cette incertitude, il affirme qu'il est mathématiquement et pragmatiquement rationnel de « parier » sur l'existence de Dieu : si l'on gagne, on obtient l'éternité et un bonheur infini ; si l'on perd, on ne sacrifie que de vains plaisirs terrestres. Pascal ajoute toutefois que cette ruse de l'intellect ne suffit pas à faire un croyant véritable. La foi profonde reste avant tout une intuition immédiate, car « le cœur a ses raisons que la raison ne connaît point ».",
        argumentPivot: "Pascal utilise le calcul des probabilités pour prouver qu'il est rationnellement avantageux de parier sur Dieu, tout en affirmant que la certitude de la foi s'éprouve ultimement par le cœur."
      },
      {
        these: "Le besoin fondamental de sens : la structuration par le sacré",
        reference: "Mircea Eliade, Le Sacré et le Profane",
        developpement: "Pour l'historien des religions Mircea Eliade, l'être humain est par essence un « homo religiosus ». La religion n'est pas une simple idéologie archaïque, mais une structure fondamentale de la conscience humaine face à l'angoisse du chaos. L'expérience du sacré permet de « cosmiser » l'espace et le temps, c'est-à-dire d'y introduire de l'ordre, du sens et des repères absolus. Sans cette dimension religieuse, l'univers apparaîtrait plat, homogène et totalement absurde. En accomplissant des rites, les hommes réactivent les actes créateurs des origines et s'inscrivent dans une réalité supérieure. Ainsi, la religion répond au besoin vital de s'ancrer dans un monde ordonné. Même l'individu moderne et laïque conserve, souvent sans le savoir, des comportements imprégnés par ce besoin de structuration symbolique.",
        argumentPivot: "Eliade montre que la religion structure l'existence en séparant le sacré du profane, répondant ainsi au besoin psychologique vital de l'homme de donner un ordre et un sens à l'univers."
      },
      {
        these: "La religion comme projection anthropologique : Dieu à l'image de l'homme",
        reference: "Ludwig Feuerbach, L'Essence du christianisme",
        developpement: "Dans L'Essence du christianisme, Ludwig Feuerbach propose une critique de la théologie en affirmant que la religion est en réalité une anthropologie inversée. Selon lui, Dieu n'a pas créé l'homme à son image, c'est l'homme qui projette ses propres qualités intérieures hors de lui-même pour construire la figure divine. La bonté, la sagesse, la justice ou l'amour sont des attributs spécifiquement humains que l'individu élève à l'infini et attribue à un être supérieur extérieur. Cette projection dépouille l'humanité de ses forces réelles au profit d'un être imaginaire. Pour Feuerbach, comprendre le secret de la religion permet à l'homme de se réapproprier ses propres richesses morales et intellectuelles. La religion n'est donc pas une révélation transcendante, mais un miroir inconscient où l'homme contemple sa propre essence idéalisée.",
        argumentPivot: "Feuerbach montre que l'idée de Dieu résulte d'une projection inconsciente des qualités humaines idéalisées, de sorte que l'étude du divin se résout en une étude de l'homme lui-même."
      },
      {
        these: "La religion comme besoin de la raison pratique et fondement de l'espérance morale",
        reference: "Emmanuel Kant, La Religion dans les limites de la simple raison",
        developpement: "Dans son ouvrage La Religion dans les limites de la simple raison, Emmanuel Kant explique que la religion ne peut pas être un moyen de connaître scientifiquement Dieu ou l'au-delà, car notre raison théorique est structurellement limitée au monde sensible. Cependant, la religion trouve une légitimité essentielle dans le domaine pratique, c'est-à-dire moral. Pour maintenir l'effort vers le souverain bien dans un monde souvent injuste, la raison humaine a besoin de postuler l'existence de Dieu et l'immortalité de l'âme. La religion ne dicte pas le devoir, elle donne une forme sensible et une espérance à la loi morale que la raison découvre déjà en elle-même. Ainsi, croire permet de soutenir notre engagement éthique en donnant un sens ultime à nos actions, transformant la morale en une espérance rationnelle.",
        argumentPivot: "Kant soutient que si la religion ne fournit aucune connaissance objective de la transcendance, elle demeure un postulat indispensable de la raison pratique pour guider et soutenir l'action morale."
      },
      {
        these: "La religion comme opium du peuple et expression de la souffrance sociale",
        reference: "Karl Marx, Critique de la philosophie du droit de Hegel",
        developpement: "Dans sa Critique de la philosophie du droit de Hegel, Karl Marx définit la religion comme « l'opium du peuple ». Selon cette perspective matérialiste, la religion n'est pas une simple erreur intellectuelle, mais le symptôme de conditions de vie matérielles misérables et oppressives. Face à l'exploitation économique et sociale, les êtres humains cherchent un soulagement et une consolation dans l'illusion d'un paradis futur. La croyance religieuse agit alors comme un narcotique qui apaise temporairement la souffrance tout en détournant le travailleur de la lutte politique nécessaire pour transformer le monde réel. En promettant une justice divine dans l'au-delà, la religion légitime l'ordre social établi et endort la conscience révolutionnaire, faisant de la critique de la religion le préalable nécessaire à toute émancipation humaine réelle.",
        argumentPivot: "Marx démontre que la religion fonctionne comme un anesthésiant social qui console les opprimés de leur misère terrestre, faisant obstacle à la transformation concrète de leurs conditions d'existence."
      },
      {
        these: "La foi comme paradoxe absolu et saut existentiel face à la raison",
        reference: "Søren Kierkegaard, Crainte et Tremblement",
        developpement: "Dans Crainte et Tremblement, Søren Kierkegaard utilise l'épisode du sacrifice d'Abraham pour illustrer la nature paradoxale de la foi authentique. Pour le philosophe danois, la foi ne se réduit pas à une adhésion rationnelle ou à un ensemble de règles morales collectives. Elle constitue un « saut existentiel » qui suspend temporairement l'éthique universelle et la raison logique. Abraham accepte d'accomplir un acte absurde et moralement condamnable par obéissance à un commandement divin direct. La foi se vit ainsi dans l'angoisse et la solitude absolue d'une relation personnelle et directe avec la transcendance. Kierkegaard montre que la croyance véritable commence précisément là où s'arrêtent la logique et la compréhension humaine, s'affirmant comme une expérience subjective irréductible aux catégories de la pensée rationnelle.",
        argumentPivot: "Kierkegaard soutient que la foi authentique n'est pas une croyance tranquille, mais un paradoxe absolu et un saut existentiel qui exige de l'individu qu'il dépasse les limites de la raison commune."
      }
    ]
  },
  {
    notion: "L'art",
    angles: [
      {
        these: "L'art comme illusion trompeuse et éloignement du vrai",
        reference: "Platon, La République (Livre X)",
        developpement: "Dans La République, Platon condamne sévèrement l'art imitatif, car il le considère comme une illusion trompeuse. Selon sa théorie, la véritable réalité réside dans le monde des Idées abstraites, tandis que notre monde matériel n'en est qu'une copie imparfaite. Par conséquent, lorsqu'un peintre dessine un lit, il ne fait que copier un objet physique qui est lui-même la copie de l'Idée du lit. L'art est donc la « copie d'une copie », éloignée de trois degrés de la vérité. De plus, l'art s'adresse à la partie irrationnelle de notre âme. Il flatte nos passions, nos émotions et nos faiblesses au lieu de nourrir notre raison. Pour Platon, l'artiste est un créateur de mirages qui enferme les hommes dans l'ignorance et les détourne du travail philosophique.",
        argumentPivot: "L'art est une imitation du monde sensible, ce qui en fait la copie d'une copie, éloignant ainsi l'homme de la vérité rationnelle et des Idées pures."
      },
      {
        these: "L'art comme produit de consommation : l'industrie culturelle (Kulturindustrie)",
        reference: "Theodor Adorno & Max Horkheimer, La Dialectique de la Raison",
        developpement: "Adorno et Horkheimer analysent comment, dans les sociétés capitalistes, l'art a cessé d'être une œuvre autonome pour devenir un produit manufacturé par ce qu'ils appellent « l'industrie culturelle ». Au lieu de bousculer le spectateur ou de l'éveiller, l'art de masse (cinéma commercial, musique formatée) cherche à le divertir pour mieux le détourner de la réflexion critique. Tout est standardisé : on utilise des recettes qui marchent pour garantir le profit. L'œuvre d'art perd son « unicité » et son pouvoir de contestation sociale pour devenir un simple bien de consommation qui s'adapte aux goûts du public au lieu de les élever. Pour Adorno, le vrai art doit rester « difficile » et dissonant pour résister à cette récupération par le marché.",
        argumentPivot: "Adorno dénonce l'industrie culturelle qui transforme l'art en un simple outil de distraction standardisé, anesthésiant l'esprit critique des masses au profit de la logique marchande."
      },
      {
        these: "L'art comme révélation de la réalité profonde",
        reference: "Henri Bergson, Le Rire",
        developpement: "Dans Le Rire, Henri Bergson affirme que l'art ne nous détourne pas du réel, mais nous y plonge au contraire plus profondément. Dans notre vie quotidienne, nous ne percevons pas les choses pour ce qu'elles sont, mais pour ce qu'elles nous apportent. Nos besoins pratiques placent un voile d'habitudes et d'étiquettes utiles entre la nature et nous. Nous voyons des catégories plutôt que des objets uniques. L'artiste, en revanche, possède une perception « détachée » et désintéressée des urgences pratiques. Il observe le monde pour lui-même. En déchirant le voile des conventions sociales et utilitaires, l'artiste nous révèle les nuances invisibles de la réalité et de l'âme humaine. L'art devient ainsi l'accès le plus direct à l'essence authentique du monde.",
        argumentPivot: "En se détachant des besoins utilitaires qui voilent notre perception quotidienne, l'artiste déchire le voile de l'habitude pour nous révéler la réalité dans sa richesse originelle."
      },
      {
        these: "L'art comme consolation et suspension de la souffrance",
        reference: "Arthur Schopenhauer, Le Monde comme volonté et comme représentation",
        developpement: "Pour Arthur Schopenhauer, la vie humaine est dominée par le « vouloir-vivre », une force aveugle et insatiable qui nous pousse constamment à désirer. Ce désir perpétuel engendre inévitablement la souffrance, la frustration et l'ennui. Face à cette tragédie de l'existence, l'art offre une issue salvatrice, bien que temporaire. Schopenhauer explique que la contemplation esthétique nous arrache à notre condition d'individus esclaves de leurs besoins. Devant une grande œuvre d'art, et tout particulièrement en écoutant de la musique, nos désirs s'apaisent. Nous devenons de purs sujets de connaissance, libérés de la douleur du vouloir. L'art agit donc comme une véritable anesthésie existentielle. Il ne transforme pas définitivement le monde, mais il offre une parenthèse de paix et de consolation au sein du chaos.",
        argumentPivot: "La contemplation artistique suspend momentanément l'agitation douloureuse de nos désirs, offrant à l'homme une libération éphémère face à la souffrance inhérente à l'existence."
      },
      {
        these: "L'artiste guidé par le génie et la nature",
        reference: "Emmanuel Kant, Critique de la faculté de juger",
        developpement: "Dans la Critique de la faculté de juger, Emmanuel Kant s'interroge sur l'origine de la création artistique et introduit la notion de « génie ». Pour lui, les beaux-arts ne peuvent pas être le simple résultat d'une technique apprise ou de règles rationnelles appliquées mécaniquement. L'art véritable nécessite un don inné que Kant définit comme le génie, c'est-à-dire « le talent de produire ce dont on ne saurait donner de règle déterminée ». C'est en réalité la nature qui, à travers l'artiste, donne ses règles à l'art. Par conséquent, le génie ignore lui-même comment les idées s'assemblent dans son esprit. Il est incapable d'expliquer scientifiquement son processus créatif ni de le transmettre. L'artiste est traversé par une force créatrice naturelle qui dépasse sa propre compréhension.",
        argumentPivot: "L'artiste de génie ne crée pas selon des règles rationnelles ou un savoir technique, mais grâce à un don naturel mystérieux dont il ne maîtrise pas consciemment les mécanismes."
      },
      {
        these: "L'art comme découverte dans l'action de créer",
        reference: "Alain, Système des beaux-arts",
        developpement: "Dans son Système des beaux-arts, le philosophe Alain s'oppose à l'idée que l'artiste saurait exactement ce qu'il va créer avant de commencer. Il établit une distinction fondamentale entre l'artisan et l'artiste. L'artisan possède une idée claire de l'objet à fabriquer et applique des règles précises pour le réaliser. À l'inverse, l'artiste ne possède pas de plan définitif. L'idée de l'œuvre lui vient à mesure qu'il la fait, confronté à la résistance de la matière. La règle de l'œuvre n'apparaît qu'une fois celle-ci achevée. Ainsi, l'artiste est le premier spectateur de sa propre création, qui se révèle à lui par le geste et le travail. Il n'y a donc pas d'inspiration miraculeuse préalable, mais une intelligence pratique ancrée dans l'action de faire.",
        argumentPivot: "Contrairement à l'artisan qui exécute un plan préétabli, l'artiste découvre son œuvre au fur et à mesure qu'il la façonne, l'idée naissant de la confrontation avec la matière."
      },
      {
        these: "L'art comme illusion vitale et affirmation de la vie",
        reference: "Friedrich Nietzsche, La Naissance de la tragédie",
        developpement: "Dans La Naissance de la tragédie, Friedrich Nietzsche refuse l'idée que l'art devrait rechercher la vérité objective ou morale. Pour lui, la réalité brute de l'existence est chaotique, absurde et profondément douloureuse, ce qu'il nomme la dimension dionysiaque. Si l'homme devait regarder cette vérité en face de façon permanente, il en mourrait de désespoir. C'est ici qu'intervient l'art, porté par la dimension apollinienne, qui apporte la forme, la beauté et la mesure. L'art est une « illusion vitale » essentielle qui transfigure la cruauté du réel pour le rendre supportable et magnifique. Loin d'être une fuite lâche, la création artistique est l'acte suprême d'affirmation de la vie. Nous avons besoin de l'art et du mensonge esthétique pour survivre et dire « oui » à notre existence.",
        argumentPivot: "L'art n'a pas pour but de dévoiler la vérité objective, mais de transfigurer esthétiquement la dureté tragique de l'existence afin de nous donner la force de l'affirmer."
      },
      {
        these: "L'art comme dévoilement de la vérité de l'être",
        reference: "Martin Heidegger, L'Origine de l'œuvre d'art",
        developpement: "Dans L'Origine de l'œuvre d'art, Martin Heidegger propose une vision radicale où l'art n'est ni un simple divertissement ni une reproduction esthétique, mais un véritable événement de vérité. Il prend pour exemple un tableau de Van Gogh représentant une paire de vieux souliers de paysan. Tant qu'ils sont utilisés, ces souliers se font oublier dans leur utilité muette. Mais sur la toile, l'œuvre d'art les arrache à leur banalité. Elle « met en œuvre la vérité » et révèle l'essence même de l'objet : la fatigue de la marche, le lien de la paysanne avec la terre, la rudesse de son monde. L'art est donc un dévoilement qui ouvre un monde nouveau et nous apprend à voir la réalité profonde des choses dissimulées par l'habitude.",
        argumentPivot: "L'œuvre d'art ne se contente pas de représenter des objets, elle dévoile leur vérité profonde et fondatrice, éclairant ainsi notre rapport existentiel au monde."
      },
      {
        these: "L'art comme manifestation sensible de l'Esprit supérieur à la nature",
        reference: "G.W.F. Hegel, Cours d'esthétique",
        developpement: "Dans ses Cours d'esthétique, Hegel conteste l'idée largement répandue selon laquelle l'art devrait imiter la beauté naturelle. Pour lui, l'art est fondamentalement supérieur à la nature. Pourquoi ? Parce que la nature est inconsciente et muette, tandis que l'œuvre d'art est le produit de l'esprit humain, de sa conscience et de sa liberté. Une mauvaise peinture qui exprime une émotion ou une idée humaine a plus de valeur spirituelle que le plus beau des paysages naturels. L'art a donc pour fonction de rendre sensible l'Idée, d'extérioriser la richesse intérieure de l'humanité. En transformant la matière, l'artiste spiritualise le monde physique et permet à l'esprit humain de se contempler lui-même dans ce qu'il a librement créé.",
        argumentPivot: "L'art surpasse la nature car il n'en est pas la simple copie aveugle, mais l'expression consciente de l'esprit humain qui donne une forme sensible à ses idées."
      },
      {
        these: "L'art comme créateur de la réalité : la nature imite l'art",
        reference: "Oscar Wilde, Le Déclin du mensonge",
        developpement: "Dans Le Déclin du mensonge, Oscar Wilde prend le contre-pied total de la tradition selon laquelle l'art devrait copier la nature. Avec provocation, il affirme que c'est la réalité et la nature qui imitent l'art. Ce paradoxe signifie que notre perception du monde est entièrement façonnée par les œuvres que nous avons contemplées. Nous ne voyons dans la nature que ce que les artistes nous ont appris à y regarder. Wilde donne l'exemple célèbre du brouillard londonien : ce phénomène météorologique a toujours existé, mais les Londoniens ne l'ont véritablement « vu » et apprécié esthétiquement qu'après que les peintres impressionnistes l'ont représenté. L'art ne suit pas le monde, il précède notre regard et invente la réalité que nous percevons au quotidien.",
        argumentPivot: "L'art ne copie pas le monde naturel, c'est l'inverse : les œuvres d'art éduquent et façonnent notre perception, de sorte que nous voyons la réalité à travers un prisme esthétique."
      },
      {
        these: "L'artiste engagé et sa responsabilité face au monde",
        reference: "Jean-Paul Sartre, Qu'est-ce que la littérature ?",
        developpement: "Dans Qu'est-ce que la littérature ?, Jean-Paul Sartre détruit le mythe de « l'art pour l'art ». Selon lui, l'écrivain (et par extension l'artiste) est inévitablement en situation dans son époque. Chaque parole a des conséquences politiques et sociales, et chaque silence en a tout autant. Puisque l'utilisation du langage consiste à dévoiler le monde aux autres, l'artiste ne peut pas rester neutre face aux injustices. Se taire devant l'oppression, c'est déjà choisir le camp de l'oppresseur. L'artiste est donc investi d'une lourde responsabilité : il doit utiliser son œuvre pour éveiller les consciences, appeler à l'action et défendre la liberté humaine. La création littéraire n'est pas un refuge imaginaire ni un divertissement, mais un véritable engagement dans le réel.",
        argumentPivot: "L'artiste ne peut s'isoler dans un esthétisme pur, car toute œuvre est une prise de position : la création engage moralement l'auteur à dénoncer l'injustice et défendre la liberté."
      },
      {
        these: "L'art comme construction sociale et outil de distinction",
        reference: "Pierre Bourdieu, La Distinction",
        developpement: "Dans La Distinction, le sociologue Pierre Bourdieu s'attaque à l'idée d'un goût artistique inné et universel. Pour lui, la capacité d'apprécier une œuvre d'art classique ou moderne n'est pas un don naturel, mais le résultat d'un long apprentissage social. Elle dépend du « capital culturel » hérité par l'individu, c'est-à-dire son éducation, son milieu familial et sa fréquentation précoce des musées. L'art n'est donc pas le domaine pur de l'émerveillement, mais un champ de luttes où les classes sociales dominantes imposent leurs goûts comme étant les seuls légitimes. Aimer la musique classique ou l'art abstrait permet de se démarquer des classes populaires, jugées trop terre-à-terre. L'art sert ainsi de marqueur de classe, reproduisant et justifiant les inégalités sous le masque de la culture.",
        argumentPivot: "Le jugement esthétique n'est ni naturel ni universel, mais découle d'un capital culturel hérité, faisant de l'art un puissant instrument de domination et de distinction sociale."
      },
      {
        these: "L'art comme intensification de l'expérience vivante ordinaire",
        reference: "John Dewey, L'Art comme expérience",
        developpement: "Dans L'Art comme expérience, John Dewey critique fermement la vision élitiste qui enferme l'art dans des musées ou des salles de concert, coupant ainsi la création de la vie quotidienne. Pour ce philosophe pragmatiste, l'art n'est pas réservé aux seuls spécialistes ni limité aux objets dits « classiques ». Il doit être pensé comme une continuité, une intensification de nos expériences ordinaires. L'expérience esthétique peut surgir dans un repas bien préparé, un geste artisanal précis, ou même une conversation stimulante. Dès qu'une action humaine atteint une forme de plénitude, de rythme et d'unité, elle devient artistique. Dewey plaide ainsi pour une véritable démocratisation de l'art, invitant chacun à retrouver la dimension esthétique de l'existence plutôt que de la figer dans une vénération purement institutionnelle.",
        argumentPivot: "L'art ne doit pas être isolé dans des musées comme un objet sacré, mais compris comme le prolongement vital et l'intensification lumineuse de l'expérience humaine quotidienne."
      },
      {
        these: "L'art comme copie illusoire et danger moral",
        reference: "Platon, La République (Livre X)",
        developpement: "Dans le livre X de La République, Platon condamne sévèrement les artistes imitateurs, en particulier les peintres et les poètes tragiques. Selon sa théorie des Idées, la véritable réalité est intelligible, constituée par les essences pures, tandis que le monde sensible n'est qu'une pâle copie de ce royaume parfait. L'artiste qui cherche à reproduire les objets physiques du monde sensible ne fait donc que copier une copie. Son travail se situe à trois degrés de distance de la vérité ultime. De plus, Platon reproche à l'art d'exciter les passions irrationnelles de l'âme humaine au détriment de la raison directrice. En favorisant l'illusion et le trouble émotionnel, les créateurs affaiblissent la moralité des citoyens et nuisent à l'organisation juste de la cité idéale.",
        argumentPivot: "Platon démontre que l'art mimétique est une entreprise illusoire qui éloigne l'homme de la vérité intelligible en flattant la sensibilité irrationnelle de l'âme."
      },
      {
        these: "La mimesis comme moyen de connaissance et de purification",
        reference: "Aristote, Poétique",
        developpement: "Contrairement à Platon, Aristote réhabilite l'imitation artistique dans sa Poétique. Il affirme que la mimétique est une tendance innée chez l'être humain, constituant un outil pédagogique fondamental. Par l'imitation, l'homme acquiert ses premières connaissances et éprouve un plaisir intellectuel en reconnaissant les formes représentées. De plus, Aristote attribue à la tragédie une fonction thérapeutique majeure : la catharsis. En assistant à la représentation dramatique de destins malheureux, les spectateurs ressentent de la terreur et de la pitié. Ce processus esthétique permet de purifier et de réguler les passions intenses des individus de manière saine et contrôlée. L'art tragique ne corrompt donc pas les esprits, mais offre plutôt une compréhension profonde des actions humaines et de l'universel à travers le particulier.",
        argumentPivot: "Aristote valorise l'art comme un processus d'apprentissage rationnel et de régulation émotionnelle, montrant que l'imitation purifie l'esprit au lieu de l'égarer dans l'illusion."
      },
      {
        these: "Le jugement esthétique comme plaisir désintéressé et libre jeu des facultés",
        reference: "Emmanuel Kant, Critique de la faculté de juger",
        developpement: "Dans la Critique de la faculté de juger, Kant définit le beau à travers le concept de plaisir désintéressé. Pour apprécier esthétiquement une œuvre d'art, le spectateur doit détacher son jugement de toute considération utilitaire, morale ou sensuelle. L'expérience esthétique n'est pas guidée par un concept strict de la raison, mais résulte d'un accord harmonieux entre l'imagination et l'entendement. C'est ce que Kant appelle le libre jeu des facultés. De plus, il explique que la création artistique nécessite le génie, qu'il décrit comme un don naturel permettant de produire des œuvres originales sans suivre de règles techniques prédéterminées. Ainsi, l'art beau échappe aux critères de démonstration scientifique, s'adresse directement à la sensibilité commune de l'humanité pour susciter un sentiment d'harmonie partagée.",
        argumentPivot: "Kant établit l'autonomie de l'art en montrant que l'expérience du beau est désintéressée, favorisant un libre accord spirituel qui dépasse les concepts rationnels."
      },
      {
        these: "L'art comme manifestation sensible de l'Esprit",
        reference: "G.W.F. Hegel, Cours d'esthétique",
        developpement: "Hegel rejette l'idée que l'art doit simplement imiter la nature, qualifiant cette imitation de pure caricature technique. Dans ses Cours d'esthétique, il soutient que la beauté artistique est bien supérieure à la beauté naturelle, car elle est produite par l'Esprit humain. L'art a pour mission essentielle de rendre l'Idée, ou la vérité spirituelle, accessible à la perception sensorielle. À travers la matière physique, l'œuvre d'art extériorise la conscience humaine et matérialise son évolution historique. Toutefois, Hegel introduit également la thèse controversée de la « fin de l'art ». Selon lui, dans les sociétés modernes axées sur la réflexion conceptuelle, l'art cesse d'être le mode suprême de manifestation de la vérité absolue, cédant progressivement cette fonction de révélation à la religion et à la philosophie.",
        argumentPivot: "Hegel montre que l'art n'est pas un jeu formel mais une expression spirituelle historique, matérialisant la vérité de la conscience humaine sous une forme concrète."
      },
      {
        these: "La contemplation esthétique comme délivrance provisoire de la souffrance",
        reference: "Arthur Schopenhauer, Le Monde comme volonté et comme représentation",
        developpement: "Pour Schopenhauer, la réalité profonde du monde est gouvernée par la Volonté, un vouloir-vivre aveugle et insatiable qui engendre une souffrance humaine perpétuelle. L'homme est constamment partagé entre la douleur du manque et l'ennui de la satisfaction. Dans ce cadre pessimiste, l'art offre une issue salvatrice mais temporaire. La contemplation esthétique d'une œuvre permet d'arracher l'individu à l'agitation de ses désirs quotidiens. En s'absorbant de manière désintéressée dans la beauté, le spectateur devient un sujet pur de connaissance, détaché de son l'individualité souffrante. Schopenhauer accorde une importance suprême à la musique, qu'il considère comme la copie directe de la Volonté elle-même. Ainsi, la création et l'écoute artistiques constituent une anesthésie existentielle, suspendant temporairement les tourments de notre condition matérielle.",
        argumentPivot: "Schopenhauer présente l'art comme une forme d'évasion salutaire, permettant à la conscience humaine de s'affranchir temporairement de la souffrance inhérente à notre nature désireuse."
      },
      {
        these: "L'art comme transfiguration tragique et affirmation de l'existence",
        reference: "Friedrich Nietzsche, La Naissance de la tragédie",
        developpement: "Dans La Naissance de la tragédie, Nietzsche soutient que l'existence humaine ne peut être justifiée qu'en tant que phénomène esthétique. Face à la vérité absurde et douloureuse de la réalité, qu'il qualifie de dionysiaque, l'homme a besoin de l'illusion pour survivre. L'art joue ce rôle protecteur en transfigurant la souffrance grâce à la beauté des formes apolliniennes. Contrairement aux approches morales ou scientifiques qui cherchent à fuir la douleur ou à l'expliquer, la création artistique affronte le tragique de la vie pour l'embellir et lui donner une valeur positive. Nietzsche résume cette idée en affirmant que l'art empêche l'humanité de mourir de la vérité pure. Il constitue ainsi un stimulant vital qui pousse l'individu à célébrer l'existence malgré ses aspects les plus sombres.",
        argumentPivot: "Nietzsche démontre que l'art est un outil métaphysique essentiel à la survie humaine, transfigurant la dureté tragique du monde réel en une célébration esthétique vigoureuse."
      },
      {
        these: "L'art comme dévoilement de la réalité et dépassement de l'utilité",
        reference: "Henri Bergson, Le Rire",
        developpement: "Dans son essai Le Rire, Bergson explique que notre vie quotidienne est dominée par des nécessités pratiques et utilitaires. Pour agir efficacement, nous simplifions le réel et percevons le monde à travers un filtre d'habitudes. Nous apposons des étiquettes générales sur les choses au lieu d'observer leur singularité profonde. L'artiste se distingue par une perception désintéressée, étant détaché de ces contraintes de survie matérielle. Cette distraction originelle lui permet de déchirer le voile des habitudes quotidiennes pour contempler la réalité nue. L'art n'est donc pas une fuite loin de la réalité, mais le seul moyen d'accéder à sa vérité authentique. En montrant les nuances invisibles de la matière et de l'âme humaine, l'artiste rééduque notre regard et enrichit notre relation au monde.",
        argumentPivot: "Bergson soutient que l'art libère notre perception du filtre utilitaire, révélant la singularité cachée des choses et de l'esprit que la routine dissimule."
      },
      {
        these: "La distinction fondamentale entre l'artiste et l'artisan",
        reference: "Alain, Système des beaux-arts",
        developpement: "Dans le Système des beaux-arts, le philosophe Alain propose une distinction conceptuelle claire entre l'artisan et l'artiste. L'artisan travaille à partir d'un plan préétabli, appliquant des règles techniques précises pour fabriquer un objet utilitaire dont la forme finale est déjà connue à l'avance. À l'inverse, l'artiste ne possède pas de modèle rigide avant de se mettre au travail. Sa création émerge et se précise au fur et à mesure de l'affrontement avec la matière physique. L'idée lui vient en faisant, et non avant d'agir, ce qui le rend spectateur de sa propre œuvre en train de naître. L'artiste maîtrise ses outils techniques, mais il se laisse surprendre par l'acte créateur lui-même. C'est cette imprévisibilité qui confère à l'œuvre d'art sa beauté unique et authentique.",
        argumentPivot: "Alain montre que l'art authentique se distingue de l'artisanat par son absence de plan figé, l'artiste découvrant et ajustant son intention à travers la résistance même du travail physique."
      },
      {
        these: "Le renversement de la mimesis : la réalité imite l'art",
        reference: "Oscar Wilde, Le Déclin du mensonge",
        developpement: "Dans son célèbre dialogue Le Déclin du mensonge, Oscar Wilde formule un paradoxe provocateur : ce n'est pas l'art qui imite la nature, mais la nature qui imite l'art. Wilde explique que les objets physiques et les paysages naturels n'existent pour notre conscience que lorsque des créateurs nous apprennent à les regarder. Par exemple, le brouillard londonien a toujours existé scientifiquement, mais l'humanité n'a commencé à percevoir sa beauté poétique qu'après sa représentation par les peintres impressionnistes. L'art façonne notre sensibilité et éduque notre regard esthétique. Ainsi, la réalité physique et sociale se modèle sur les visions inventées par les artistes. L'art ne cherche pas à reproduire fidèlement un monde extérieur préexistant ; au contraire, il crée le regard à partir duquel le monde devient enfin visible et significatif.",
        argumentPivot: "Wilde renverse la conception classique de l'imitation en affirmant que notre perception du réel est entièrement construite et éduquée par les œuvres d'art préexistantes."
      },
      {
        these: "La perte de l'aura de l'œuvre d'art par la reproduction de masse",
        reference: "Walter Benjamin, L'Œuvre d'art à l'époque de sa reproductibilité technique",
        developpement: "Dans son essai célèbre, Walter Benjamin analyse comment les technologies modernes, comme la photographie et le cinéma, bouleversent le statut traditionnel de l'art. Autrefois, l'œuvre d'art possédait une « aura », c'est-à-dire un caractère unique, sacré et lointain, lié à son insertion dans un contexte rituel ou cultuel. La possibilité de reproduire techniquement les œuvres en milliers d'exemplaires détruit cette singularité spatio-temporelle. L'image se rapproche physiquement des masses, perdant son mystère théologique originel. Bien qu'il constate cette perte de l'aura avec une certaine mélancolie, Benjamin y voit une opportunité politique majeure. Libéré du domaine du rituel sacré, l'art cesse d'être un objet d'adoration élitiste pour devenir un instrument d'émancipation démocratique, permettant d'éveiller la conscience critique du public face aux dérives de la société moderne.",
        argumentPivot: "Benjamin montre que la reproduction technique désacralise l'œuvre d'art en détruisant son aura traditionnelle, ouvrant la voie à une réception collective et politique des images."
      },
      {
        these: "L'œuvre d'art comme instauration d'un monde et dévoilement de la vérité",
        reference: "Martin Heidegger, L'Origine de l'œuvre d'art",
        developpement: "Dans L'Origine de l'œuvre d'art, Martin Heidegger affirme que l'art ne consiste pas à copier fidèlement des objets existants, mais à mettre en œuvre la vérité de l'être. L'œuvre d'art authentique réalise cette mission en ouvrant un « monde », c'est-à-dire un réseau de significations culturelles, de valeurs et de repères spirituels qui guident une communauté humaine. Pour illustrer sa thèse, Heidegger prend l'exemple d'un temple grec. Ce monument de pierre ne représente rien de particulier, mais sa présence physique rassemble les destins des citoyens, donnant un sens à leur existence, à leurs naissances et à leurs morts. En parallèle, l'œuvre fait surgir la « terre », la matière brute et obscure qui résiste à l'explication technique. L'art réconcilie ainsi l'homme avec le mystère fondamental de la réalité.",
        argumentPivot: "Heidegger démontre que l'art n'est pas une simple illustration, mais un événement ontologique qui fonde les valeurs culturelles et spirituelles d'une époque humaine."
      },
      {
        these: "La littérature comme engagement moral et interpellation de la liberté",
        reference: "Jean-Paul Sartre, Qu'est-ce que la littérature ?",
        developpement: "Dans Qu'est-ce que la littérature ?, Jean-Paul Sartre soutient que l'écrivain est profondément impliqué dans les affaires de son époque et ne peut rester neutre. Écrire n'est pas un exercice formel gratuit, mais un acte de dévoilement de la réalité sociale et politique. En nommant les injustices, l'auteur les rend visibles et force les lecteurs à prendre position. Sartre explique que l'écriture est un pacte de générosité mutuelle : l'écrivain fait appel à la liberté du lecteur pour l'aider à faire exister l'œuvre d'art. Le créateur n'a pas le droit d'utiliser sa plume pour fuir les responsabilités collectives ou cautionner l'oppression par son silence. Ainsi, l'art authentique est un outil d'émancipation politique qui invite l'homme à assumer sa responsabilité historique et à transformer le monde réel.",
        argumentPivot: "Sartre affirme que l'écrivain ne peut se soustraire aux luttes de son temps, la création artistique étant un appel éthique destiné à mobiliser la liberté humaine contre l'injustice."
      }
    ]
  },
  {
    notion: "Le langage",
    angles: [
      {
        these: "L'inadéquation du langage à la vie intérieure : le mot comme étiquette",
        reference: "Henri Bergson, Essai sur les données immédiates de la conscience",
        developpement: "Pour Henri Bergson, le langage a été forgé par la société pour répondre à des besoins d'action et de communication pratiques, et non pour exprimer la vérité intime de notre conscience. Il reproche aux mots d'être des « étiquettes » générales, fixes et impersonnelles. Or, notre vie intérieure, ce qu'il nomme la « durée », est un flux continu, mouvant et absolument singulier. En nommant un sentiment complexe, comme l'amour ou la tristesse, le langage l'isole, le fige et l'assimile au sentiment de tous les autres hommes. Ainsi, le langage spatialise et appauvrit notre expérience vécue. Au lieu de révéler notre moi profond, les mots le recouvrent d'un voile de banalités sociales, nous éloignant de la réalité authentique et nuancée de notre existence.",
        argumentPivot: "Bergson démontre que le langage, outil social fait de concepts généraux, fige et trahit la nature fluide et singulière de notre vie intérieure subjective."
      },
      {
        these: "Le langage comme illusion vitale et métaphore oubliée",
        reference: "Friedrich Nietzsche, Vérité et mensonge au sens extra-moral",
        developpement: "Friedrich Nietzsche affirme que le langage est fondamentalement trompeur et qu'il nous éloigne de la réalité foisonnante de la nature. Selon lui, les mots ne sont à l'origine que des métaphores subjectives qui, à force d'être répétées, ont perdu leur force poétique pour devenir des concepts rigides. L'être humain oublie cette origine et finit par croire que les mots reflètent des vérités objectives. Par exemple, le concept de « feuille » gomme les différences uniques entre chaque feuille réelle pour imposer une idée générale et fausse. La grammaire elle-même nous force à croire à des illusions métaphysiques, comme l'existence d'un « je » permanent. Le langage n'est donc pas un miroir du réel, mais une construction artificielle inventée par les hommes pour survivre, communiquer et se rassurer.",
        argumentPivot: "Nietzsche soutient que le langage est une armée de métaphores usées qui simplifie la réalité pour imposer des concepts généraux, créant ainsi l'illusion d'une vérité objective."
      },
      {
        these: "L'illusion de l'ineffable : le langage comme accomplissement de la pensée",
        reference: "G.W.F. Hegel, Encyclopédie des sciences philosophiques",
        developpement: "Contrairement à ceux qui croient que le langage appauvrit nos idées, Hegel soutient que vouloir penser sans les mots est une entreprise insensée. Il s'attaque directement au mythe de l'ineffable, cette illusion selon laquelle nous posséderions des pensées ou des émotions trop sublimes pour être exprimées. Pour Hegel, si nous ne trouvons pas les mots, ce n'est pas parce que le langage est limité, mais parce que notre pensée est encore obscure et inachevée. L'indicible n'est que de la confusion intellectuelle. C'est uniquement en se formulant à travers le langage que la pensée s'objective, gagne en clarté et accède à la conscience d'elle-même. Loin d'être la prison ou le tombeau de l'idée, le mot est ce qui lui donne sa véritable existence rationnelle.",
        argumentPivot: "Hegel détruit le mythe de l'ineffable en affirmant que la pensée n'existe véritablement et clairement qu'à partir du moment où elle s'incarne dans des mots."
      },
      {
        these: "Les limites logiques du dicible et le domaine du mystique",
        reference: "Ludwig Wittgenstein, Tractatus logico-philosophicus",
        developpement: "Dans sa première philosophie, Ludwig Wittgenstein considère que le langage fonctionne comme une image ou une carte logique de la réalité empirique. Les mots ne peuvent décrire avec sens que les faits objectifs du monde, ce qui relève principalement des sciences de la nature. Il en déduit une frontière stricte : « Les limites de mon langage signifient les limites de mon propre monde. » Tout ce qui touche au sens de la vie, à l'éthique, à la morale, à l'esthétique ou à Dieu ne correspond à aucun fait matériel et ne peut donc pas être dit logiquement. Ces dimensions relèvent de ce qu'il nomme le « mystique ». Face à ces questions existentielles fondamentales, le langage descriptif échoue, d'où sa célèbre conclusion : « Sur ce dont on ne peut parler, il faut garder le silence. »",
        argumentPivot: "Wittgenstein établit que le langage logique ne peut décrire que les faits matériels, repoussant l'éthique et le sens de l'existence dans l'indicible qu'il faut se contenter de montrer."
      },
      {
        these: "La performativité : quand la parole devient action",
        reference: "J.L. Austin, Quand dire, c'est faire",
        developpement: "Le philosophe anglais J.L. Austin bouleverse l'approche classique du langage en démontrant que les mots ne servent pas uniquement à décrire passivement le monde ou à communiquer des informations. Il met en lumière l'existence d'énoncés « performatifs », des phrases qui n'ont pas pour fonction d'être vraies ou fausses, mais d'accomplir un acte par le simple fait d'être prononcées. Lorsqu'un maire déclare « Je vous déclare mari et femme », ou qu'un individu affirme « Je le promets », l'énonciation elle-même transforme concrètement la réalité sociale et juridique. La parole n'est plus séparée de l'action : elle coïncide avec elle. Austin prouve ainsi que le langage possède une dimension active et créatrice, capable de modifier l'état des choses et d'engager la responsabilité de celui qui parle.",
        argumentPivot: "Austin montre que le langage n'est pas qu'un outil de description : à travers les énoncés performatifs, dire c'est littéralement accomplir une action qui modifie la réalité sociale."
      },
      {
        these: "La violence symbolique et le pouvoir social des mots",
        reference: "Pierre Bourdieu, Ce que parler veut dire",
        developpement: "Pierre Bourdieu souligne que le langage n'est jamais un instrument de communication neutre : c'est un véritable marché où s'exercent des rapports de domination. L'efficacité d'un discours ne repose pas seulement sur la grammaire ou la logique, mais sur l'autorité sociale de celui qui le prononce. Parler le « bon français », celui des institutions et de l'école, constitue un capital symbolique qui confère du pouvoir et de la légitimité. À l'inverse, ceux qui ne maîtrisent pas cette langue dominante subissent une « violence symbolique » : ils sont dévalorisés, exclus du débat public ou contraints à l'autocensure. Ainsi, le langage reproduit et masque les inégalités sociales. Le pouvoir des mots n'appartient donc pas aux mots eux-mêmes, mais à la position hiérarchique du locuteur dans la société.",
        argumentPivot: "Bourdieu analyse le langage comme un espace de pouvoir où l'imposition de la langue légitime exerce une violence symbolique, reproduisant silencieusement les inégalités sociales."
      },
      {
        these: "Le langage comme dévoilement : la « maison de l'Être »",
        reference: "Martin Heidegger, Acheminement vers la parole",
        developpement: "Pour Martin Heidegger, il faut rompre avec la conception purement instrumentale et utilitaire du langage. L'être humain n'est pas le maître absolu des mots, qui ne seraient que des simples outils à sa disposition. Au contraire, Heidegger affirme que « le langage est la maison de l'Être » et que c'est en réalité le langage qui parle à travers l'homme. La langue structure notre manière d'habiter le monde et de le comprendre. Si le langage quotidien, qualifié de « bavardage », nous éloigne de l'essentiel en figeant le réel dans des formules convenues, la parole authentique, particulièrement celle des poètes, a le pouvoir d'ouvrir de nouvelles dimensions de l'existence. La poésie ne se contente pas de nommer les choses, elle les fait apparaître et dévoile leur vérité profonde.",
        argumentPivot: "Heidegger refuse de voir le langage comme un outil de communication : il est l'espace originaire où le monde se dévoile, trouvant sa forme la plus pure dans la poésie."
      },
      {
        these: "L'expression charnelle : la parole comme geste et accomplissement",
        reference: "Maurice Merleau-Ponty, Phénoménologie de la perception",
        developpement: "Maurice Merleau-Ponty s'oppose à l'idée que la pensée existerait, achevée et parfaite, avant même de trouver ses mots, le langage n'étant qu'un simple vêtement. Pour ce phénoménologue, la parole est profondément enracinée dans notre corps et notre perception. Il compare le langage à un geste. De même que le corps s'oriente dans l'espace, la parole s'oriente vers le sens. Merleau-Ponty distingue la « parole parlée », qui est le langage usuel, institutionnalisé et répétitif, de la « parole parlante », qui est l'acte créateur par lequel l'homme arrache un sens inédit au silence, comme dans la littérature ou l'amour. L'expression linguistique ne traduit pas une pensée antérieure : elle l'accomplit, la fait exister dans le monde et permet une véritable rencontre avec autrui.",
        argumentPivot: "Merleau-Ponty conçoit la parole comme un geste charnel où la pensée ne précède pas l'expression, mais s'accomplit et prend forme à travers l'acte vivant de parler."
      },
      {
        these: "Le déterminisme politique : la Novlangue comme destruction de la pensée",
        reference: "George Orwell, 1984",
        developpement: "Dans son célèbre roman dystopique, George Orwell illustre la dimension éminemment politique du langage à travers l'invention de la « Novlangue ». Ce langage fictif, imposé par un État totalitaire, a pour particularité d'être continuellement appauvri : chaque année, des centaines de mots sont supprimés ou vidés de leurs nuances. Le but de ce rétrécissement linguistique n'est pas de faciliter la communication, mais de rendre la pensée critique littéralement impossible. Si le mot « liberté » perd son sens politique pour ne désigner qu'un concept vide, la rébellion devient impensable. Orwell démontre brillamment que la richesse du vocabulaire est la condition absolue de l'émancipation intellectuelle. Contrôler, appauvrir et simplifier la syntaxe et le lexique, c'est directement emprisonner la pensée et empêcher toute résistance au pouvoir.",
        argumentPivot: "Orwell avertit que la restriction du vocabulaire et l'appauvrissement de la langue sont des armes totalitaires conçues pour détruire l'esprit critique et rendre la dissidence mentalement impossible."
      },
      {
        these: "Le langage rationnel comme fondement exclusif de la Cité humaine",
        reference: "Aristote, Les Politiques",
        developpement: "Dès l'Antiquité, Aristote pose le langage au cœur de la définition de l'être humain, qualifié de « zôon logikon » (animal doué de raison et de parole). Il établit une distinction fondamentale entre la voix (phonè), partagée avec les animaux et servant à exprimer la douleur ou le plaisir, et le discours rationnel (logos), qui est l'apanage exclusif de l'humanité. Le but du langage n'est pas seulement de communiquer des besoins vitaux, mais d'exprimer et de débattre des valeurs morales : le juste et l'injuste, le bien et le mal. C'est cette capacité à échanger rationnellement qui rend possible la communauté politique. Le langage est donc l'outil démocratique et émancipateur qui permet de substituer la loi, le droit et la délibération à la violence pure.",
        argumentPivot: "Aristote définit l'homme par la possession du logos, une parole rationnelle qui seule permet de débattre du juste et de l'injuste, fondant ainsi l'existence de la vie politique."
      },
      {
        these: "L'agir communicationnel : la parole comme quête de consensus rationnel",
        reference: "Jürgen Habermas, Théorie de l'agir communicationnel",
        developpement: "Jürgen Habermas refuse de réduire le langage à un simple instrument de domination ou de manipulation. Selon lui, la fonction première de la parole est l'intercompréhension et la pacification des rapports sociaux. Il distingue « l'agir stratégique », où l'on utilise le discours pour contraindre ou manipuler l'autre afin de satisfaire ses propres intérêts, de « l'agir communicationnel », où des interlocuteurs échangent librement des arguments pour s'entendre sur une vérité ou une norme juste. Dans une démocratie saine, l'espace public doit reposer sur cette éthique de la discussion. Habermas soutient que tout acte de parole sincère porte en lui l'idéal d'un accord rationnel sans contrainte. Ainsi, la véritable force du langage ne réside pas dans la rhétorique trompeuse, mais dans la puissance pacificatrice du meilleur argument.",
        argumentPivot: "Habermas soutient que la finalité essentielle du langage est l'intercompréhension, offrant par « l'agir communicationnel » un moyen pacifique et rationnel de construire un consensus démocratique."
      },
      {
        these: "Le relativisme linguistique : la langue comme filtre de la réalité",
        reference: "Edward Sapir et Benjamin Lee Whorf, Linguistique et anthropologie",
        developpement: "L'hypothèse de Sapir et Whorf, issue de l'anthropologie et de la linguistique, remet en cause l'idée que le langage ne ferait que traduire une réalité objective universelle. Selon leur théorie de la relativité linguistique, c'est la structure même de notre langue maternelle qui détermine, ou du moins influence fortement, notre manière de percevoir et de penser le monde. Les mots et la grammaire agissent comme des lunettes à travers lesquelles nous découpons la réalité. Par exemple, une culture dont la langue ne possède pas de temps verbaux stricts percevra le déroulement de l'existence de manière beaucoup plus fluide qu'une culture obsédée par la chronologie. Ainsi, la langue n'est pas un outil neutre : elle conditionne nos catégories mentales, nos valeurs et notre compréhension intime de l'univers.",
        argumentPivot: "L'hypothèse de Sapir-Whorf avance que la structure grammaticale et le lexique de notre langue maternelle déterminent activement notre perception du réel et nos catégories de pensée."
      },
      {
        these: "Le structuralisme : l'arbitraire du signe et le découpage du réel",
        reference: "Ferdinand de Saussure, Cours de linguistique générale",
        developpement: "Ferdinand de Saussure, fondateur de la linguistique moderne, déconstruit l'idée naïve selon laquelle le langage serait une simple nomenclature, c'est-à-dire une liste d'étiquettes collées sur des choses existant préalablement. Il démontre que le signe linguistique est arbitraire : il n'y a aucun lien naturel ni logique entre le signifiant (la forme sonore du mot) et le signifié (le concept). Plus fondamentalement, Saussure affirme que sans le langage, notre pensée serait une nébuleuse confuse. La langue fonctionne comme un système autonome de différences qui découpe simultanément le son et la pensée. Ce ne sont donc pas les idées ou les objets qui précèdent les mots : c'est la structure interne de chaque langue qui organise et impose à l'être humain sa propre classification de la réalité.",
        argumentPivot: "Saussure établit que le lien entre le mot et la chose est arbitraire, et que le langage fonctionne comme un système autonome qui découpe et organise activement notre réalité."
      },
      {
        these: "La littérature engagée : nommer, c'est dévoiler et transformer",
        reference: "Jean-Paul Sartre, Qu'est-ce que la littérature ?",
        developpement: "Pour Jean-Paul Sartre, l'écriture et la parole ne sont jamais innocentes ni neutres : elles constituent des actes à part entière. Dans sa vision de la littérature engagée, Sartre affirme que l'écrivain ne peut se réfugier dans l'art pour l'art. « Parler, c'est agir ». Le simple fait de nommer une réalité, comme une injustice sociale ou une oppression politique, oblige la conscience humaine à la voir. Le langage arrache les situations au silence et à l'indifférence. Dès lors qu'une situation est formulée et partagée par les mots, personne ne peut plus faire semblant de l'ignorer. L'auteur, tout comme le lecteur, se retrouve en position de responsabilité. Le mot fonctionne donc comme un révélateur explosif qui modifie irrémédiablement notre regard sur le monde et nous somme de prendre position.",
        argumentPivot: "Sartre défend l'idée que la parole est une action révélatrice : nommer une réalité, c'est la dévoiler à la conscience publique et obliger l'humanité à en prendre la responsabilité."
      },
      {
        these: "La critique de la rhétorique : la manipulation contre la vérité",
        reference: "Platon, Gorgias",
        developpement: "Dans le dialogue du Gorgias, Platon s'attaque violemment aux sophistes, ces maîtres de rhétorique de la Grèce antique qui enseignaient l'art de persuader les foules. Platon dénonce cette conception du langage qui réduit la parole à un pur instrument de pouvoir et de manipulation. Le rhéteur ne se soucie absolument pas de la vérité ni du bien commun ; il cherche uniquement à flatter les désirs de son auditoire pour asseoir sa domination politique. Platon compare cette pratique à la pâtisserie, qui donne l'illusion de nourrir alors qu'elle ne fait que flatter le goût, contrairement à la médecine, qui soigne réellement. Face à cette dérive manipulatoire des mots, Platon oppose la dialectique du philosophe : un dialogue rationnel et honnête qui utilise le langage pour découvrir la vérité.",
        argumentPivot: "Platon critique la rhétorique sophistique comme une flatterie dangereuse qui utilise le pouvoir de persuasion des mots pour manipuler les foules, au détriment de la vérité et de la justice."
      }
    ]
  }
];

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

export const NOTION_INTRO_DATA: Record<Notion, NotionMetadata> = {
  "L'art": {
    definition: "L'art désigne la création humaine d'objets, de formes ou d'expériences conçues pour émouvoir la sensibilité, solliciter l'imagination et stimuler la réflexion, se distinguant de l'utilité pratique immédiate par son ambition esthétique.",
    contexte: "Le terme dérive du latin ars qui désignait d'abord l'adresse technique et le travail de l'artisan. L'époque moderne a séparé les beaux-arts de l'artisanat. L'art exprime la liberté de l'esprit humain capable de projeter son intériorité dans la matière. À travers l'œuvre, l'artiste réinvente notre rapport au monde et propose un sens spirituel universel.",
    family: "conscience_culture"
  },
  "Le bonheur": {
    definition: "Le bonheur se définit traditionnellement comme un état de satisfaction globale, complet et durable, caractérisé par un sentiment de plénitude, de paix intérieure et d'harmonie avec soi-même et avec son environnement de vie.",
    contexte: "Venu du vieux français heur (la chance ou le bon augure), le bonheur interroge le but suprême de l'existence. Les philosophies antiques le lient à la sagesse pratique et à l'exercice de la vertu. Pour les Modernes, il devient une quête subjective et privée, souvent confondue avec l'accumulation de plaisirs passagers ou compromise par l'insatiabilité intrinsèque du désir humain.",
    family: "conscience_culture"
  },
  "La conscience": {
    definition: "La conscience est la faculté de l'intelligence qui permet à un sujet de se représenter ses propres états psychologiques, ses actes, ses valeurs éthiques, ainsi que la réalité extérieure avec laquelle il entretient des relations.",
    contexte: "Du latin cum-scientia (accompagné de savoir). Elle constitue le socle de l'identité personnelle et de la subjectivité moderne depuis le cogito de Descartes. Elle définit également le sens moral, c'est-à-dire le tribunal intérieur du bien et du mal. Par sa nature intentionnelle, elle est toujours une tension vers quelque chose de distinct d'elle-même.",
    family: "conscience_culture"
  },
  "Le devoir": {
    definition: "Le devoir désigne l'obligation morale absolue qui s'impose à la conscience d'un individu comme une règle d'action impérative, indépendamment de ses penchants personnels, de ses intérêts égoïstes ou de ses désirs de bonheur.",
    contexte: "Issu du latin debere (devoir une dette). Le devoir n'est pas une contrainte extérieure subie par la force, mais une obligation acceptée de l'intérieur par une volonté autonome. Kant en fait le cœur de la moralité à travers l'impératif catégorique : agir par pur respect pour la loi rationnelle universelle, faisant du devoir le critère ultime de la dignité humaine.",
    family: "etat_justice"
  },
  "L'État": {
    definition: "L'État est l'institution politique et juridique souveraine exerçant le pouvoir suprême et détenant le monopole légitime de la contrainte physique sur l'ensemble d'une population régie par un territoire géographique défini.",
    contexte: "Du latin status, évoquant l'ordre stable. Né de l'exigence de dépasser la violence généralisée de l'état de nature (comme le théorise Hobbes via le contrat social), l'État doit garantir la sécurité collective, la paix publique et l'intérêt général. Son défi permanent réside dans l'équilibre fragile entre la préservation de son autorité nécessaire et le respect des libertés constitutionnelles individuelles.",
    family: "etat_justice"
  },
  "L'inconscient": {
    definition: "L'inconscient désigne l'ensemble des forces, des pulsions, des désirs refoulés et des souvenirs cachés qui échappent de fait au contrôle de l'esprit conscient mais qui continuent à déterminer de façon décisive nos pensées, rêves et conduites.",
    contexte: "Forgé en creux contre la souveraineté du cogito, l'inconscient devient un concept solide avec l'avènement de la psychanalyse freudienne. Il rompt l'illusion d'une transparence absolue du sujet à lui-même, révélant que « le moi n'est pas maître dans sa propre maison ». Il interroge ainsi la possibilité même d'une liberté totale et d'une pleine responsabilité morale.",
    family: "conscience_culture"
  },
  "La justice": {
    definition: "La justice est à la fois l'idéal éthique exigeant de rendre à chacun ce qui lui revient de droit (équité et égalité) et l'appareil institutionnel officiel chargé de faire respecter les lois en vigueur.",
    contexte: "Liée au latin justitia et au radical jus (le droit positif). La justice balance entre la stricte conformité à la loi écrite (égalité arithmétique) et l'exigence d'une équité morale plus humaine (égalité proportionnelle). Elle cherche à harmoniser les intérêts particuliers pour rendre possible une coexistence pacifique, s'opposant constamment aux dérives de l'injustice arbitraire ou de la force brute.",
    family: "etat_justice"
  },
  "Le langage": {
    definition: "Le langage est le système structuré de signes, de symboles articulés et de règles syntaxiques qui permet la transmission d'informations, l'expression de la pensée abstraite et la socialisation au sein de l'humanité.",
    contexte: "Du latin lingua. Le langage est le véhicule indispensable de la raison (logos grec). Cependant, il présente une double face : outil parfait de communication et d'accès à la vérité, il peut aussi trahir notre pensée intime par des mots génériques simplificateurs, ou devenir un redoutable pouvoir de manipulation rhétorique et politique lorsqu'il est mis au service du mensonge.",
    family: "conscience_culture"
  },
  "La liberté": {
    definition: "La liberté est la condition d'un être autonome doué de raison qui agit conformément à sa propre volonté réfléchie, sans être entravé par des forces de contrainte extérieures ni déterminé passivement par des pulsions internes.",
    contexte: "Dérivé du latin libertas. Elle s'oppose à la fois à l'aliénation de la servitude sociale et au déterminisme absolu des lois physiques. On distingue le libre arbitre cartésien (capacité souveraine de choix) de la liberté d'indifférence, et de l'autonomie éthique kantienne, qui consiste à obéir librement à la loi morale que la raison s'est elle-même prescrite.",
    family: "etat_justice"
  },
  "La nature": {
    definition: "La nature désigne la totalité de la réalité matérielle visible régie par des lois universelles objectives et biologiques, qui se développe de façon spontanée en dehors de toute intervention de la volonté ou de l'industrie humaine.",
    contexte: "Dérivé du latin natura (les forces de naissance). Elle s'oppose formellement au domaine de l'artifice, de l'histoire et de la culture. Elle peut être perçue de multiples manières : comme un cosmos harmonieux dont l'homme doit s'inspirer moralement, comme une force sauvage hostile qu'il faut exploiter par la technique, ou comme une entité vulnérable exigeant protection.",
    family: "nature_science"
  },
  "La raison": {
    definition: "La raison est la faculté de l'entendement humain permettant de relier logiquement des concepts, de démontrer des vérités scientifiques, d'analyser méthodiquement les causes et les conséquences pour guider nos jugements moraux.",
    contexte: "Provient du latin ratio (la mesure, la proportion et le calcul). Traduisant le logos grec, elle s'oppose aux passions irrationnelles et aux préjugés trompeurs de l'opinion. Elle cherche à ordonner le désordre apparent des phénomènes naturels sous des principes intelligibles. Elle se veut universelle, établissant un terrain commun d'entente et de discussion pacifique pour toute l'humanité.",
    family: "nature_science"
  },
  "La religion": {
    definition: "La religion se définit traditionnellement comme un ensemble de croyances, de dogmes et de rites qui relient les êtres humains à un principe supérieur, sacré ou divin.",
    contexte: "Le terme vient du latin religio (scrupule, lien, rassemblement). Il souligne le rapport triple : à l'absolu, aux autres (communauté) et à soi-même. C'est une expérience universelle présente depuis les sociétés premières jusqu'aux monothéismes modernes.",
    family: "conscience_culture"
  },
  "La science": {
    definition: "La science est le processus de construction méthodique de connaissances universelles, vérifiables et rigoureusement structurées, validées par des démonstrations rationnelles rigoureuses ou des expériences pratiques répétables.",
    contexte: "Venu du latin scientia (le savoir formel). Elle s'émancipe de la simple croyance ou de la doxa commune. À travers sa forme moderne mathématisée, elle cherche à dévoiler les causes réelles de la nature. Elle remet en question nos intuitions naïves, posant la question de savoir si elle nous livre la réalité ultime ou de simples modèles d'explications commodes.",
    family: "nature_science"
  },
  "La technique": {
    definition: "La technique désigne l'ensemble des procédés matériels, des instruments, des machines et des règles opératoires mis au service de la transformation active de l'environnement physique et de l'efficacité de l'effort humain.",
    contexte: "Dérivé de la technè grecque (savoir d'action, métier). Outil d'adaptation d'un homme biologiquement indéfendable à la naissance, elle amplifie notre pouvoir sur le réel. À l'âge moderne et industriel, son développement autonome et la sacralisation de la performance font douter de notre maîtrise finale sur elle, transformant l'habileté épanouissante en un risque de déshumanisation.",
    family: "nature_science"
  },
  "Le temps": {
    definition: "Le temps est la dimension continue et irréversible au sein de laquelle se succèdent les moments, constituant le cadre universel où s'inscrivent le changement des choses, la durée intérieure et l'existence mortelle.",
    contexte: "Du latin tempus. Il pose de redoutables apories métaphysiques (Augustin note ainsi que le passé n'est plus, le futur n'est pas, et le présent s'évanouit). Il est la mesure de notre condition de mortels éphémères. Par la mémoire et les projets, l'homme habite le temps historiquement de manière consciente, cherchant à donner un sens à son devenir inéluctable.",
    family: "conscience_culture"
  },
  "Le travail": {
    definition: "Le travail est l'activité humaine consciente d'effort physique ou intellectuel méthodique visant à transformer la nature brute dans le but de produire des richesses, de subvenir à nos besoins fondamentaux et d'élever notre condition sociale.",
    contexte: "Issu de tripalium (un instrument de contrainte et de torture de l'Antiquité). D'abord stigmatisé comme un fardeau servile excluant des devoirs nobles de citoyenneté, il est sacralisé à l'époque moderne et industrielle comme facteur de développement historique et d'accomplissement personnel. Le travail aliène ou libère selon qu'il respecte le travailleur ou l'instrumentalise.",
    family: "etat_justice"
  },
  "La vérité": {
    definition: "La vérité est la correspondance rigoureuse et adéquate entre un énoncé formulé par notre esprit ou notre logique rationnelle et la réalité des faits constatés objectivement dans l'univers réel.",
    contexte: "Du latin veritas. Distincte de la réalité brute (qui existe simplement), la vérité se joue dans notre parole rationnelle et critique à son sujet. Elle requiert la franchise, le doute critique contre les préjugés confortables et la démonstration. Elle s'oppose au mensonge volontaire, à l'erreur intellectuelle passive, et aux séductions illusoires.",
    family: "nature_science"
  }
};

// Helper to deduce a notion from keywords to avoid heavy manual tagging for all past exams.
function extractNotions(title: string): Notion[] {
  const notions: Notion[] = [];
  const lowerTitle = title.toLowerCase();

  if (lowerTitle.includes("art") || lowerTitle.includes("oeuvre") || lowerTitle.includes("artiste")) notions.push("L'art");
  if (lowerTitle.includes("heureux") || lowerTitle.includes("bonheur")) notions.push("Le bonheur");
  if (lowerTitle.includes("conscience") || lowerTitle.includes("conscient")) notions.push("La conscience");
  if (lowerTitle.includes("devoir") || lowerTitle.includes("faut-il") || lowerTitle.includes("morale") || lowerTitle.includes("moralement") || lowerTitle.includes("obligation")) notions.push("Le devoir");
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
  return Array.from(new Set(notions)).slice(0, 3); // Max 3 notions roughly
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
{ year: 2025, location: "Antilles-Guyane", title: "Existe-t-il des vérités inutiles ?" },
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
{ year: 2025, location: "Polynésie remplacement", title: "Que peut la raison contre les préjugés ?" },
{ year: 2025, location: "Polynésie remplacement", title: "L'être humain est-il à sa place dans la nature ?" },

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
{ year: 2024, location: "Antilles-Guyane (Remplacement)", title: "La raison recommande-t-elle de douter de tout ?" },
{ year: 2024, location: "Antilles-Guyane (Remplacement)", title: "La justice n'est-elle qu'un idéal ?" },
{ year: 2024, location: "Métropole France (Remplacement)", title: "Avons-nous le devoir d'être libres ?" },
{ year: 2024, location: "Métropole France (Remplacement)", title: "Peut-on s'arrêter de travailler ?" },
{ year: 2024, location: "Polynésie (Remplacement)", title: "Qu'y a-t-il de plus dans l'art que dans la réalité ?" },
{ year: 2024, location: "Polynésie (Remplacement)", title: "L'inconscience est-elle la condition du bonheur ?" },

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
{ year: 2023, location: "Remplacement, Antilles-Guyane", title: "Quelle vérité l'artiste recherche-t-il ?" },
{ year: 2023, location: "Remplacement, Antilles-Guyane", title: "L'État est-il source de liberté ?" },
{ year: 2023, location: "Remplacement, Métropole France", title: "Pouvons-nous vraiment connaître la nature ?" },
{ year: 2023, location: "Remplacement, Métropole France", title: "Être heureux, cela requiert-il d'être seul ?" },
{ year: 2023, location: "Remplacement, Polynésie", title: "Apprécier une oeuvre d'art, est-ce la comprendre ?" },
{ year: 2023, location: "Remplacement, Polynésie", title: "Est-il vrai que la nature fait bien les choses ?" },

// 2022
{ year: 2022, location: "Amérique du Nord", title: "La conscience fait-elle obstacle au bonheur ?" },
{ year: 2022, location: "Amérique du Nord", title: "La technique permet-elle de ne plus avoir peur de la nature ?" },
{ year: 2022, location: "Amérique du Sud", title: "Puis-je ignorer mes propres pensées ?" },
{ year: 2022, location: "Amérique du Sud", title: "La justice met-elle fin à la loi du plus fort ?" },
{ year: 2022, location: "Antilles-Guyane", title: "La science a-t-elle toujours raison ?" },
{ year: 2022, location: "Antilles-Guyane", title: "Le langage ne sert-il qu'à communiquer ?" },
{ year: 2022, location: "Asie", title: "L'homme est-il une exception dans la nature ?" },
{ year: 2022, location: "Asie", title: "Toute prise de conscience est-elle libératrice ?" },
{ year: 2022, location: "Centres Étrangers", title: "Le bonheur nous échappe-t-il inévitablement ?" },
{ year: 2022, location: "Centres Étrangers", title: "N'y a-t-il de foi que religieuse ?" },
{ year: 2022, location: "Métropole France", title: "Les pratiques artistiques transforment-elles le monde ?" },
{ year: 2022, location: "Métropole France", title: "Revient-il à l'État de décider de ce qui est juste ?" },
{ year: 2022, location: "Nouvelle-Calédonie", title: "Le travail est-il une marchandise comme les autres ?" },
{ year: 2022, location: "Nouvelle-Calédonie", title: "Y a-t-il des vérités intemporelles ?" },
{ year: 2022, location: "Polynésie", title: "La science ne fournit-elle que des certitudes ?" },
{ year: 2022, location: "Polynésie", title: "L'inconscience est-elle un défaut ?" },
{ year: 2022, location: "Remplacement, Antilles-Guyane", title: "Le langage peut-il exprimer ce que nous vivons ?" },
{ year: 2022, location: "Remplacement, Antilles-Guyane", title: "La science est-elle au service de notre liberté ?" },
{ year: 2022, location: "Remplacement, Métropole France", title: "Le droit est-il la mesure des actions justes et injustes ?" },
{ year: 2022, location: "Remplacement, Métropole France", title: "Les objets techniques satisfont-ils nos besoins ?" },
{ year: 2022, location: "Remplacement, Polynésie", title: "Peut-on dire d'une œuvre d'art qu'elle est vraie ?" },
{ year: 2022, location: "Remplacement, Polynésie", title: "L'État a-t-il le devoir de nous protéger ?" },

// 2021
{ year: 2021, location: "Amérique du Nord", title: "Les vérités scientifiques sont-elles définitives ?" },
{ year: 2021, location: "Amérique du Nord", title: "La nature est-elle injuste ?" },
{ year: 2021, location: "Amérique du Nord", title: "L'art est-il l'affaire des seuls spécialistes ?" },
{ year: 2021, location: "Antilles-Guyane", title: "La nature nous impose-t-elle des devoirs ?" },
{ year: 2021, location: "Antilles-Guyane", title: "L'artiste peut-il dire la vérité ?" },
{ year: 2021, location: "Antilles-Guyane", title: "Connaître le passé est-ce préparer l'avenir ?" },
{ year: 2021, location: "Asie", title: "Existe-t-it des techniques pour être heureux ?" },
{ year: 2021, location: "Asie", title: "Les résultats des sciences sont-ils indiscutables ?" },
{ year: 2021, location: "Asie", title: "Le droit peut-il être injuste ?" },
{ year: 2021, location: "Centres Étrangers", title: "Tout le monde peut-il être artiste ?" },
{ year: 2021, location: "Centres Étrangers", title: "L'homme est-il responsable de la nature ?" },
{ year: 2021, location: "Centres Étrangers", title: "Existe-t-il des vérités définitives ?" },
{ year: 2021, location: "Métropole France", title: "Discuter, est-ce renoncer à la violence ?" },
{ year: 2021, location: "Métropole France", title: "L'inconscient échappe-t-il à toute forme de connaissance ?" },
{ year: 2021, location: "Métropole France", title: "Sommes-nous responsables de l'avenir ?" },
{ year: 2021, location: "Polynésie", title: "La technique est-elle une violence infligée à la nature ?" },
{ year: 2021, location: "Polynésie", title: "L'art échappe-t-il au temps ?" },
{ year: 2021, location: "Polynésie", title: "Savoir rend-il malheureux ?" },
{ year: 2021, location: "Zéro 1", title: "Le langage trahit-il la pensée ?" },
{ year: 2021, location: "Zéro 1", title: "Faut-il oublier le passé pour se donner un avenir ?" },
{ year: 2021, location: "Zéro 1", title: "La vie en société menace-t-elle notre liberté ?" },
{ year: 2021, location: "Zéro 2", title: "Y a-t-il de justes inégalités ?" },
{ year: 2021, location: "Zéro 2", title: "L'unanimité est-elle un criterion de vérité ?" },
{ year: 2021, location: "Zéro 2", title: "Faut-il du temps pour devenir soi-même ?" },
{ year: 2021, location: "Remplacement, Antilles-Guyane", title: "Suis-je ce que mon inconscient fait de moi ?" },
{ year: 2021, location: "Remplacement, Antilles-Guyane", title: "La technique nuit-elle nécessairement à la nature ?" },
{ year: 2021, location: "Remplacement, Antilles-Guyane", title: "Sans les mots, que serait la réalité ?" },
{ year: 2021, location: "Remplacement, Métropole France", title: "La conscience nous fait-elle connaître la vérité de ce que nous sommes ?" },
{ year: 2021, location: "Remplacement, Métropole France", title: "N'y a-t-il de liberté que dans la solitude ?" },
{ year: 2021, location: "Remplacement, Métropole France", title: "Bien parler, est-ce bien penser ?" },
{ year: 2021, location: "Remplacement, Polynésie", title: "Les machines nous donnent-elles un pouvoir sur nous-mêmes ?" },
{ year: 2021, location: "Remplacement, Polynésie", title: "Puis-je accomplir mon devoir sans attendre de contrepartie ?" },
{ year: 2021, location: "Remplacement, Polynésie", title: "Sommes-nous conscients ou le devenons-nous ?" },
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
      problematica: "Nous avons l'impression de choisir librement nos actions. Pourtant, nos décisions ne sont-elles pas influencées par notre éducation, notre psychologie ou notre environnement au point que cette liberté soit seulement apparente ?",
      authors: ["B. Spinoza", "J.-P. Sartre", "E. Kant"],
      plan: {
        these: "L'être humain ressent intérieurement qu'il est libre de choisir et d'agir. Cette impression de liberté semble naturelle et essentielle à la conscience humaine.",
        antithese: "Cependant, nos choix peuvent être influencés par des causes sociales, psychologiques ou biologiques que nous ne maîtrisons pas. Nous pouvons alors croire être libres alors que nous suivons des déterminismes invisibles.",
        synthese: "La liberté ne consiste pas à agir sans aucune influence extérieure. Elle devient réelle lorsque l'on prend conscience de ce qui nous détermine afin d'agir de manière plus réfléchie."
      }
    }
  },
  {
    id: "pot-2",
    title: "Peut-on être heureux sans les autres ?",
    notions: ["Le bonheur", "L'État"],
    type: "Potentiel",
    ideas: {
      problematica: "Le bonheur semble parfois dépendre de notre tranquillité personnelle. Mais peut-on vraiment être heureux sans relations humaines et sans vivre avec les autres ?",
      authors: ["Aristote", "A. Schopenhauer", "Épicure"],
      plan: {
        these: "Certaines personnes pensent que le bonheur se trouve dans le calme et l'indépendance. S'éloigner des conflits et des contraintes sociales peut apporter une certaine paix intérieure.",
        antithese: "Pourtant, l'être humain vit naturellement avec les autres et a besoin de relations pour se construire. L'amitié, l'amour et la reconnaissance jouent un rôle essentiel dans l'épanouissement personnel.",
        synthese: "Le bonheur demande parfois des moments de solitude et de réflexion personnelle. Mais il semble difficile d'être pleinement heureux sans partager sa vie avec les autres."
      }
    }
  },
  {
    id: "pot-3",
    title: "Mieux connaître la nature, est-ce mieux la maîtriser ?",
    notions: ["La nature", "La technique", "La science"],
    type: "Potentiel",
    ideas: {
      problematica: "La science permet de mieux comprendre la nature et de développer des techniques puissantes. Mais cette connaissance nous donne-t-elle réellement le contrôle de la nature ?",
      authors: ["R. Descartes", "H. Jonas", "F. Bacon"],
      plan: {
        these: "Les progrès scientifiques permettent à l'homme d'utiliser les lois de la nature à son avantage. Grâce à la technique, il peut transformer son environnement et améliorer ses conditions de vie.",
        antithese: "Cependant, certaines conséquences de la technique échappent au contrôle humain. Les crises écologiques montrent que la nature reste difficile à maîtriser totalement.",
        synthese: "Connaître la nature donne un grand pouvoir à l'homme, mais ce pouvoir doit être limité et réfléchi. La véritable maîtrise passe aussi par le respect et la responsabilité."
      }
    }
  },
  {
    id: "pot-4",
    title: "L'État est-il l'ennemi de la liberté ?",
    notions: ["L'État", "La liberté", "La justice"],
    type: "Potentiel",
    ideas: {
      problematica: "L'État impose des lois et des règles à tous. Ces contraintes limitent-elles notre liberté ou permettent-elles au contraire de la protéger ?",
      authors: ["T. Hobbes", "J.-J. Rousseau", "M. Bakounine"],
      plan: {
        these: "L'État impose des règles qui limitent certaines libertés individuelles. Les lois et les sanctions peuvent donner l'impression d'un pouvoir oppressif.",
        antithese: "Mais sans État, chacun risquerait d'imposer sa force aux autres. Les règles communes permettent de protéger les citoyens et de garantir leurs droits.",
        synthese: "L'État devient légitime lorsqu'il protège les libertés au lieu de les détruire. Une société juste repose sur des lois acceptées collectivement par les citoyens."
      }
    }
  },
  {
    id: "pot-5",
    title: "La technique doit-elle nous libérer du travail ?",
    notions: ["La technique", "Le travail", "La liberté"],
    type: "Potentiel",
    ideas: {
      problematica: "Les machines et les technologies permettent de réduire les efforts humains. Mais supprimer le travail est-il forcément bénéfique pour l'homme ?",
      authors: ["K. Marx", "G.W.F. Hegel", "H. Arendt"],
      plan: {
        these: "La technique permet de réduire les tâches pénibles et répétitives. Elle peut ainsi améliorer les conditions de vie et donner plus de temps libre aux hommes.",
        antithese: "Cependant, un monde sans travail pourrait rendre l'homme passif et inutile. Le travail est aussi une manière de développer ses capacités et de participer à la société.",
        synthese: "La technique ne doit pas supprimer toute activité humaine. Elle doit surtout permettre un travail plus libre, plus créatif et moins aliénant."
      }
    }
  },
  {
    id: "pot-6",
    title: "Le travail permet-il de prendre conscience de soi ?",
    notions: ["Le travail", "La conscience"],
    type: "Potentiel",
    ideas: {
      problematica: "En travaillant, l'homme transforme le monde et crée des objets. Cette activité lui permet-elle aussi de mieux se comprendre lui-même ?",
      authors: ["G.W.F. Hegel", "K. Marx", "J.-P. Sartre"],
      plan: {
        these: "Le travail permet à l'homme de transformer la matière selon ses idées. En voyant le résultat de son activité, il prend conscience de ses capacités.",
        antithese: "Mais certains travaux répétitifs empêchent l'individu de s'exprimer réellement. Le travailleur peut alors se sentir étranger à ce qu'il produit.",
        synthese: "Le travail aide à mieux se connaître lorsqu'il laisse une place à l'initiative personnelle. Il devient aliénant lorsqu'il réduit l'homme à une simple fonction mécanique."
      }
    }
  },
  {
    id: "pot-7",
    title: "Le travail définit-il l'être humain ?",
    notions: ["Le travail", "La nature"],
    type: "Potentiel",
    ideas: {
      problematica: "Le travail distingue l'homme de l'animal par sa capacité à transformer le monde. Mais peut-on réduire l'être humain à cette seule activité ?",
      authors: ["H. Bergson", "K. Marx", "H. Arendt"],
      plan: {
        these: "Le travail a permis à l'homme de développer des outils, des techniques et des sociétés organisées. Il joue donc un rôle important dans l'histoire humaine.",
        antithese: "Cependant, l'homme ne vit pas seulement pour produire et travailler. Il possède aussi des besoins artistiques, intellectuels et spirituels.",
        synthese: "Le travail participe à la construction de l'humanité, mais il ne suffit pas à définir toute la richesse de l'existence humaine. L'homme se réalise également dans la pensée, la culture et les relations."
      }
    }
  },
  {
    id: "pot-8",
    title: "Le travail est-il une activité contre-nature ?",
    notions: ["Le travail", "La nature"],
    type: "Potentiel",
    ideas: {
      problematica: "Le travail demande des efforts, des règles et de la discipline. Va-t-il contre les désirs naturels de l'homme ou permet-il au contraire son développement ?",
      authors: ["S. Freud", "J.-J. Rousseau", "K. Marx"],
      plan: {
        these: "Le travail oblige l'homme à faire des efforts et à renoncer à certains plaisirs immédiats. Il semble donc aller contre la recherche naturelle du confort et du repos.",
        antithese: "Mais le travail permet aussi de développer l'intelligence, les compétences et la maîtrise de soi. Grâce à lui, l'homme transforme la nature et progresse.",
        synthese: "Le travail peut être difficile et exigeant, mais il participe aussi à l'éducation et à l'accomplissement humain. Il ne détruit pas la nature humaine : il la transforme."
      }
    }
  },
  {
    id: "pot-9",
    title: "Le travail nous rend-il plus humains ?",
    notions: ["Le travail", "La nature", "Le devoir"],
    type: "Potentiel",
    ideas: {
      problematica: "Le travail aide-t-il l'homme à se construire moralement et socialement, ou peut-il au contraire le déshumaniser ?",
      authors: ["I. Kant", "K. Marx", "F. Nietzsche"],
      plan: {
        these: "Le travail apprend à l'homme la discipline, l'effort et le sens des responsabilités. Il permet aussi de vivre avec les autres et de participer à la société.",
        antithese: "Cependant, certains travaux répétitifs ou pénibles peuvent dégrader les conditions humaines. L'exploitation et la perte de sens dans le travail peuvent rendre l'individu malheureux et aliéné.",
        synthese: "Le travail rend l'homme plus humain lorsqu'il respecte sa dignité et développe ses capacités. Il devient déshumanisant lorsqu'il réduit la personne à un simple outil de production."
      }
    }
  },
  {
    id: "pot-10",
    title: "Le travail est-il nécessairement une servitude ?",
    notions: ["Le travail", "La liberté"],
    type: "Potentiel",
    ideas: {
      problematica: "Comme il est souvent pénible et nécessaire pour vivre, le travail est-il forcément une contrainte ?",
      authors: ["G.W.F. Hegel", "K. Marx", "J.-P. Sartre"],
      plan: {
        these: "Le travail semble être une obligation imposée par les besoins matériels de la vie. L'homme doit travailler pour survivre et satisfaire ses besoins essentiels.",
        antithese: "Mais le travail permet aussi de développer des compétences et de gagner en autonomie. En transformant le monde par son activité, l'homme peut également se transformer lui-même.",
        synthese: "Le travail n'est pas forcément une servitude par nature. Il devient oppressant surtout lorsqu'il est marqué par l'exploitation et l'absence de liberté."
      }
    }
  },
  {
    id: "pot-11",
    title: "Peut-on se libérer par le travail ?",
    notions: ["Le travail", "La liberté"],
    type: "Potentiel",
    ideas: {
      problematica: "Même s'il demande des efforts et des contraintes, le travail peut-il permettre à l'homme de devenir plus libre ?",
      authors: ["G.W.F. Hegel", "K. Marx", "Alain"],
      plan: {
        these: "Le travail aide l'homme à maîtriser la nature et à satisfaire ses besoins par lui-même. Il peut ainsi lui donner une certaine indépendance matérielle et sociale.",
        antithese: "Cependant, certains emplois enferment les individus dans la fatigue, la répétition et la dépendance économique. Le travail peut alors devenir une source d'aliénation plutôt qu'un moyen de liberté.",
        synthese: "Le travail devient libérateur lorsqu'il permet à chacun de développer ses capacités et de garder le contrôle sur son activité. La liberté dépend donc des conditions dans lesquelles on travaille."
      }
    }
  },
  {
    id: "pot-12",
    title: "Le travail est-il un obstacle à la liberté ?",
    notions: ["Le travail", "La liberté", "Le temps"],
    type: "Potentiel",
    ideas: {
      problematica: "Le temps consacré au travail empêche-t-il l'homme de vivre librement, ou le travail est-il au contraire une condition de son autonomie ?",
      authors: ["Sénèque", "K. Marx", "Hannah Arendt"],
      plan: {
        these: "Le travail occupe une grande partie du temps humain et limite les loisirs. Il peut empêcher l'individu de se consacrer pleinement à ses passions ou à sa vie personnelle.",
        antithese: "Mais sans travail, l'homme dépendrait totalement des autres ou des ressources naturelles. Le travail permet d'acquérir une autonomie concrète et de construire sa vie.",
        synthese: "Le travail devient compatible avec la liberté lorsqu'il laisse du temps pour l'épanouissement personnel. L'équilibre entre activité professionnelle et vie personnelle est donc essentiel."
      }
    }
  },
  {
    id: "pot-13",
    title: "Travailler, est-ce perdre son temps ?",
    notions: ["Le travail", "Le temps", "Le bonheur"],
    type: "Potentiel",
    ideas: {
      problematica: "Le travail prend beaucoup de temps dans la vie humaine. Est-ce un sacrifice inutile ou une activité qui donne un sens à notre existence ?",
      authors: ["Aristote", "H. Arendt", "Nietzsche"],
      plan: {
        these: "Le travail peut sembler répétitif et fatigant, surtout lorsqu'il est uniquement fait pour survivre. Il peut alors donner l'impression d'empêcher l'homme de profiter pleinement de la vie.",
        antithese: "Cependant, le travail permet aussi de créer, d'apprendre et de participer à la société. Il peut donner un sentiment d'utilité et de satisfaction personnelle.",
        synthese: "Le travail n'est pas une perte de temps lorsqu'il contribue au développement de soi et au bien commun. Tout dépend du sens que l'on donne à son activité."
      }
    }
  },
  {
    id: "pot-14",
    title: "Travailler, est-ce seulement obéir ?",
    notions: ["Le travail", "Le devoir", "La liberté"],
    type: "Potentiel",
    ideas: {
      problematica: "Le travail consiste-t-il uniquement à suivre des ordres ou demande-t-il aussi de l'intelligence et de l'initiative ?",
      authors: ["M. Crawford", "K. Marx", "Alain"],
      plan: {
        these: "Dans certaines organisations, le travail réduit l'individu à exécuter des consignes précises. Le salarié peut alors avoir l'impression de simplement obéir à une hiérarchie.",
        antithese: "Mais même dans les métiers les plus techniques, il faut réfléchir, s'adapter et résoudre des problèmes. Le travail demande souvent de l'initiative et du savoir-faire personnel.",
        synthese: "Le travail ne se limite pas à l'obéissance lorsqu'il laisse une place à l'autonomie et à la réflexion. L'intelligence humaine reste nécessaire dans toute activité réelle."
      }
    }
  },
  {
    id: "pot-15",
    title: "Le travail peut-il être un plaisir ?",
    notions: ["Le travail", "Le bonheur"],
    type: "Potentiel",
    ideas: {
      problematica: "Le travail est souvent associé à l'effort et à la fatigue. Peut-il malgré tout devenir une source de satisfaction et de bonheur ?",
      authors: ["C. Fourier", "F. Nietzsche", "K. Marx"],
      plan: {
        these: "Le travail est souvent vécu comme une contrainte nécessaire pour gagner sa vie. Lorsqu'il est subi ou répétitif, il peut devenir source de souffrance.",
        antithese: "Cependant, réussir une tâche, créer quelque chose ou progresser grâce à ses efforts peut procurer du plaisir. Le travail peut aussi donner un sentiment d'utilité et de fierté.",
        synthese: "Le travail devient agréable lorsqu'il est choisi, reconnu et intéressant. Les conditions de travail jouent donc un rôle important dans le bonheur au travail."
      }
    }
  },
  {
    id: "pot-16",
    title: "Y a-t-il un sens à travailler sans créer ?",
    notions: ["Le travail", "L'art", "La raison"],
    type: "Potentiel",
    ideas: {
      problematica: "Peut-on trouver de la valeur dans un travail répétitif ou utilitaire qui ne laisse pas de place à la création personnelle ?",
      authors: ["H. Arendt", "A. Camus", "S. Weil"],
      plan: {
        these: "Un travail répétitif peut sembler vide de sens lorsqu'il ne permet ni imagination ni innovation. L'individu peut alors avoir l'impression de répéter sans cesse les mêmes gestes.",
        antithese: "Mais même les tâches simples ou utilitaires sont utiles au fonctionnement de la société. Elles permettent d'aider les autres et de participer à un effort collectif.",
        synthese: "Le travail peut avoir un sens même sans création artistique ou originale. Sa valeur dépend aussi de l'utilité sociale et de l'engagement personnel qu'il implique."
      }
    }
  },
  {
    id: "pot-17",
    title: "La valeur d'un homme se mesure-t-elle à son travail ?",
    notions: ["Le travail", "Le devoir", "La justice"],
    type: "Potentiel",
    ideas: {
      problematica: "La société doit-elle juger les individus selon leur métier et leur productivité, ou la valeur humaine dépasse-t-elle le travail ?",
      authors: ["I. Kant", "P. Lafargue", "F. Nietzsche"],
      plan: {
        these: "Dans de nombreuses sociétés, le travail est considéré comme un signe de mérite et de réussite. Les personnes actives et productives sont souvent davantage valorisées.",
        antithese: "Cependant, la dignité humaine ne dépend pas seulement de l'utilité économique d'une personne. Réduire un individu à son travail peut être injuste et déshumanisant.",
        synthese: "Le travail peut participer à la reconnaissance sociale, mais il ne définit pas entièrement la valeur d'un être humain. Chaque personne possède une dignité qui dépasse sa profession."
      }
    }
  },
  {
    id: "pot-18",
    title: "Le travail n'est-il qu'un moyen de survie ?",
    notions: ["Le travail", "Le bonheur", "La nature"],
    type: "Potentiel",
    ideas: {
      problematica: "Le travail sert-il seulement à satisfaire les besoins matériels de l'homme ou possède-t-il aussi une dimension sociale et humaine ?",
      authors: ["H. Arendt", "G.W.F. Hegel", "A. Honneth"],
      plan: {
        these: "À l'origine, le travail permet surtout de répondre aux besoins essentiels comme manger, se loger ou se protéger. Il apparaît donc d'abord comme une nécessité de survie.",
        antithese: "Mais le travail permet aussi d'obtenir une place dans la société et la reconnaissance des autres. Il contribue à l'identité personnelle et au lien social.",
        synthese: "Le travail naît de la nécessité matérielle, mais il peut prendre une dimension plus humaine et sociale. Il devient alors un moyen de participer pleinement à la vie collective."
      }
    }
  },
  {
    id: "pot-19",
    title: "Le travail peut-il être autre chose qu'un moyen de survivre ?",
    notions: ["Le travail", "La liberté", "La conscience"],
    type: "Potentiel",
    ideas: {
      problematica: "Même soumis aux contraintes économiques, le travail peut-il devenir une activité d'épanouissement personnel ?",
      authors: ["E. Mounier", "K. Marx", "A. Honneth"],
      plan: {
        these: "Beaucoup de personnes travaillent principalement pour gagner leur vie et assurer leurs besoins. Le travail peut alors sembler uniquement dicté par la nécessité économique.",
        antithese: "Cependant, certaines activités professionnelles permettent de développer des compétences et de se sentir utile. Le travail peut aussi donner confiance en soi et favoriser la reconnaissance sociale.",
        synthese: "Le travail dépasse la simple survie lorsqu'il permet à l'individu de s'épanouir et de donner un sens à son activité. Cela dépend largement des conditions humaines et sociales du travail."
      }
    }
  },
  {
    id: "pot-20",
    title: "Le travail est-il un devoir ?",
    notions: ["Le travail", "Le devoir", "La justice"],
    type: "Potentiel",
    ideas: {
      problematica: "Chaque individu a-t-il l'obligation morale de travailler pour contribuer à la société, ou chacun est-il libre de refuser cette exigence ?",
      authors: ["I. Kant", "P. Lafargue", "F. Nietzsche"],
      plan: {
        these: "Le travail permet à chacun de participer à la vie collective et de contribuer au bien commun. Refuser tout effort peut être vu comme injuste envers les autres membres de la société.",
        antithese: "Mais faire du travail une obligation absolue peut limiter la liberté individuelle. Une société centrée uniquement sur la production risque aussi d'oublier les besoins spirituels et intellectuels de l'homme.",
        synthese: "Le travail peut être considéré comme un devoir de solidarité envers la communauté. Cependant, il doit rester compatible avec la liberté et l'épanouissement personnel."
      }
    }
  },
  {
    id: "pot-21",
    title: "La technique nous libère-t-elle ?",
    notions: ["La technique", "La liberté", "L'État"],
    type: "Potentiel",
    ideas: {
      problematica: "La technique est censée nous rendre plus libres en facilitant la vie. Mais ne crée-t-elle pas aussi de nouvelles dépendances, notamment à la consommation et aux technologies ?",
      authors: ["R. Descartes", "G. Anders", "G. Simondon"],
      plan: {
        these: "Grâce aux outils et aux machines, l'homme maîtrise mieux la nature. Il souffre moins des contraintes matérielles et améliore ses conditions de vie.",
        antithese: "Cependant, la technologie peut rendre l'individu dépendant : téléphone, réseaux, machines ou consommation limitent parfois son autonomie.",
        synthese: "La technique devient vraiment libératrice seulement si l'homme comprend et maîtrise les outils qu'il utilise, au lieu de les subir."
      }
    }
  },
  {
    id: "pot-22",
    title: "La technique n'est-elle qu'un outil au service de l'homme ?",
    notions: ["La technique", "La conscience", "Le devoir"],
    type: "Potentiel",
    ideas: {
      problematica: "La technique est-elle simplement un moyen contrôlé par l'homme, ou finit-elle par imposer ses propres règles et dépasser notre contrôle ?",
      authors: ["Aristote", "K. Marx", "M. Heidegger"],
      plan: {
        these: "Au départ, la technique est un simple outil créé pour aider l'homme à atteindre ses objectifs plus facilement.",
        antithese: "Avec l'industrialisation, l'homme peut devenir dépendant du système technique et travailler au rythme des machines.",
        synthese: "La technique moderne influence profondément notre manière de vivre et de penser : elle n'est plus seulement un outil neutre."
      }
    }
  },
  {
    id: "pot-23",
    title: "La technique nous éloigne-t-elle de la nature ?",
    notions: ["La technique", "La nature", "L'État"],
    type: "Potentiel",
    ideas: {
      problematica: "La technique nous coupe-t-elle de la nature, ou fait-elle au contraire partie de ce qui définit l'être humain ?",
      authors: ["Platon", "H. Jonas", "M. Merleau-Ponty"],
      plan: {
        these: "L'homme est naturellement fragile : il a besoin de la technique pour survivre et transformer son environnement.",
        antithese: "Mais aujourd'hui, certaines technologies détruisent les équilibres naturels et menacent l'environnement.",
        synthese: "Le problème n'est pas la technique elle-même, mais la manière dont nous l'utilisons. Elle peut aussi servir à protéger la nature."
      }
    }
  },
  {
    id: "pot-24",
    title: "Faut-il avoir peur du progrès technique ?",
    notions: ["La technique", "La liberté", "Le devoir"],
    type: "Potentiel",
    ideas: {
      problematica: "Le progrès technique améliore-t-il forcément la vie humaine, ou peut-il aussi devenir dangereux ?",
      authors: ["R. Descartes", "F. Rabelais", "H. Jonas"],
      plan: {
        these: "Les progrès techniques ont permis d'énormes avancées, notamment dans la médecine, les transports ou le confort quotidien.",
        antithese: "Mais certaines inventions peuvent être destructrices : armes, pollution, surveillance ou catastrophes écologiques.",
        synthese: "Le danger ne vient pas de la technique seule, mais du manque de réflexion morale dans son utilisation."
      }
    }
  },
  {
    id: "pot-25",
    title: "La technique échappe-t-elle à la raison ?",
    notions: ["La technique", "La conscience", "L'État"],
    type: "Potentiel",
    ideas: {
      problematica: "La technique est née de la raison humaine. Pourtant, peut-elle finir par fonctionner sans contrôle moral ni réflexion sur ses conséquences ?",
      authors: ["M. Weber", "J. Habermas", "H. Arendt"],
      plan: {
        these: "La technique applique la logique scientifique pour résoudre efficacement des problèmes concrets.",
        antithese: "Mais elle peut devenir purement « instrumentale » : on cherche l'efficacité sans se demander si les objectifs sont bons.",
        synthese: "Il faut donc accompagner le progrès technique d'une réflexion éthique et politique sur ses finalités."
      }
    }
  },
  {
    id: "pot-26",
    title: "La technique nous libère-t-elle du travail ?",
    notions: ["La technique", "La liberté", "Le devoir"],
    type: "Potentiel",
    ideas: {
      problematica: "Les machines permettent-elles vraiment de réduire le travail humain, ou créent-elles de nouvelles formes de contraintes ?",
      authors: ["K. Marx", "H. Arendt", "J. Rifkin"],
      plan: {
        these: "L'automatisation soulage l'homme des tâches les plus pénibles et augmente la productivité.",
        antithese: "Cependant, le travail moderne peut devenir répétitif, stressant et dépendant des machines ou des rythmes imposés.",
        synthese: "Si la technique réduit certains efforts physiques, elle nous oblige aussi à repenser le sens du travail humain."
      }
    }
  },
  {
    id: "pot-27",
    title: "La technique peut-elle satisfaire tous nos désirs ?",
    notions: ["La technique", "La conscience", "La liberté"],
    type: "Potentiel",
    ideas: {
      problematica: "La technique peut-elle rendre l'homme pleinement heureux en répondant à tous ses besoins et désirs ?",
      authors: ["Épicure", "A. Schopenhauer", "J. Baudrillard"],
      plan: {
        these: "Les progrès techniques améliorent le confort de vie et répondent à beaucoup de besoins matériels.",
        antithese: "Mais la société de consommation crée sans cesse de nouveaux désirs et entretient l'insatisfaction.",
        synthese: "La technique satisfait les besoins matériels, mais elle ne peut pas combler les aspirations profondes de l'être humain."
      }
    }
  },
  {
    id: "pot-28",
    title: "Peut-on vivre sans technique ?",
    notions: ["La technique", "La nature", "La conscience"],
    type: "Potentiel",
    ideas: {
      problematica: "L'être humain peut-il vivre sans technique, ou celle-ci fait-elle partie de sa nature même ?",
      authors: ["Platon", "J.-J. Rousseau", "A. Leroi-Gourhan"],
      plan: {
        these: "Certains rêvent d'un retour à une vie plus simple et plus proche de la nature.",
        antithese: "Pourtant, depuis la préhistoire, l'homme évolue grâce aux outils et à la technique.",
        synthese: "Il est impossible de vivre totalement sans technique, mais nous restons responsables des usages que nous en faisons."
      }
    }
  },
  {
    id: "pot-29",
    title: "La technique transforme-t-elle notre rapport au temps ?",
    notions: ["La technique", "La liberté", "L'État"],
    type: "Potentiel",
    ideas: {
      problematica: "Les technologies modernes nous font-elles gagner du temps, ou nous enferment-elles dans une vie toujours plus rapide ?",
      authors: ["H. Rosa", "H. Arendt", "P. Virilio"],
      plan: {
        these: "Les moyens de communication et de transport permettent d'aller plus vite et d'éviter de nombreuses pertes de temps.",
        antithese: "Mais cette accélération permanente crée du stress et donne l'impression de manquer toujours de temps.",
        synthese: "La technique devrait nous aider à mieux vivre le temps, et non à subir une course permanente à la vitesse."
      }
    }
  },
  {
    id: "pot-30",
    title: "La technique menace-t-elle la vérité ?",
    notions: ["La technique", "La conscience", "L'État"],
    type: "Potentiel",
    ideas: {
      problematica: "Les technologies permettent-elles de mieux connaître le réel, ou favorisent-elles aussi les illusions et les manipulations ?",
      authors: ["G. Bachelard", "Platon", "J. Baudrillard"],
      plan: {
        these: "Les instruments scientifiques améliorent l'observation et rendent les connaissances plus précises.",
        antithese: "Mais les médias, les images et le numérique peuvent aussi créer de fausses réalités et manipuler l'opinion.",
        synthese: "La vérité dépend donc surtout de notre esprit critique et de notre capacité à analyser les informations."
      }
    }
  },
  {
    id: "pot-31",
    title: "L'État doit-il limiter le progrès technique ?",
    notions: ["La technique", "L'État", "Le devoir"],
    type: "Potentiel",
    ideas: {
      problematica: "Le progrès technique doit-il être totalement libre, ou l'État doit-il intervenir pour protéger la société ?",
      authors: ["H. Jonas", "M. Foucault", "J. Habermas"],
      plan: {
        these: "Limiter la recherche pourrait empêcher de résoudre de grands problèmes comme les maladies ou les crises alimentaires.",
        antithese: "Mais sans règles, certaines technologies menacent les libertés, renforcent les inégalités ou développent la surveillance.",
        synthese: "L'État doit encadrer les dangers du progrès technique tout en laissant place à l'innovation utile."
      }
    }
  },
  {
    id: "pot-32",
    title: "Le progrès technique garantit-il le bonheur ?",
    notions: ["La technique", "La liberté", "La conscience"],
    type: "Potentiel",
    ideas: {
      problematica: "Le progrès technique suffit-il à rendre l'homme heureux ?",
      authors: ["J.-J. Rousseau", "Épicure", "J.S. Mill"],
      plan: {
        these: "Les avancées techniques ont amélioré les conditions de vie et réduit beaucoup de souffrances.",
        antithese: "Cependant, le confort matériel ne suffit pas toujours à apporter le bonheur intérieur.",
        synthese: "La technique peut améliorer la vie, mais le bonheur dépend aussi de la sagesse, des relations humaines et du sens donné à l'existence."
      }
    }
  },
  {
    id: "pot-33",
    title: "Le langage n’est-il qu’un outil ?",
    notions: ["Le langage", "La technique"],
    type: "Potentiel",
    ideas: {
      problematica: "Le langage est-il un simple moyen de communication ou possède-t-il une nature plus profonde qui nous définit ?",
      authors: ["Aristote", "J.-J. Rousseau", "L. Wittgenstein"],
      plan: {
        these: "Souvent, le langage est perçu comme un simple instrument permettant de transmettre des informations. L'être humain l'utilise au quotidien pour exprimer ses besoins et organiser la société de manière efficace.",
        antithese: "Cependant, cette vision omet que le langage structure aussi notre façon de penser et de comprendre le monde. Les mots que nous employons influencent directement notre perception de la réalité et nos émotions.",
        synthese: "Le langage a bien une dimension utilitaire pour faciliter la communication. Toutefois, il dépasse largement le statut de simple outil pour devenir ce qui façonne notre vie intérieure et notre humanité."
      }
    }
  },
  {
    id: "pot-34",
    title: "Le langage est-il propre à l'être humain ?",
    notions: ["Le langage", "La nature"],
    type: "Potentiel",
    ideas: {
      problematica: "Les méthodes de communication des animaux peuvent-elles être considérées comme un véritable langage ?",
      authors: ["R. Descartes", "K. von Frisch", "E. Benveniste"],
      plan: {
        these: "De nombreux animaux utilisent des signaux sonores ou corporels pour communiquer entre eux. Ils parviennent facilement à alerter d'un danger ou à exprimer un besoin immédiat.",
        antithese: "Mais le langage humain est riche, créatif et permet d'exprimer des idées abstraites. Contrairement aux animaux, l'être humain peut discuter du passé, du futur ou d'événements imaginaires.",
        synthese: "Les animaux possèdent une communication basique orientée vers la survie. Le langage articulé ou symbolique reste une spécificité purement humaine qui permet de transmettre une culture."
      }
    }
  },
  {
    id: "pot-35",
    title: "Peut-on penser sans les mots ?",
    notions: ["Le langage", "La conscience", "La raison"],
    type: "Potentiel",
    ideas: {
      problematica: "La pensée précède-t-elle le langage, ou la conscience est-elle indissociable des mots ?",
      authors: ["R. Descartes", "G.W.F. Hegel", "H. Bergson"],
      plan: {
        these: "L'expérience quotidienne nous donne parfois l'impression d'avoir une idée en tête sans trouver le mot juste. Cela suggère qu'une pensée pure pourrait exister indépendamment des mots pour la formuler.",
        antithese: "Pourtant, une idée qui ne peut pas être formulée clairement reste floue, vague et incomplète. C'est en choisissant les mots appropriés que notre esprit parvient à structurer et à achever sa réflexion.",
        synthese: "Les mots et la pensée ne sont pas simplement liés, ils se développent ensemble. Les mots fournissent à notre esprit le cadre indispensable pour construire des raisonnements clairs et élaborés."
      }
    }
  },
  {
    id: "pot-36",
    title: "Les mots nous permettent-ils de nous comprendre ?",
    notions: ["Le langage", "La conscience"],
    type: "Potentiel",
    ideas: {
      problematica: "Le langage garantit-il la compréhension mutuelle, ou est-il par nature source de malentendus ?",
      authors: ["J.-J. Rousseau", "F. Nietzsche", "J. Habermas"],
      plan: {
        these: "Les mots sont le moyen le plus direct et efficace pour partager nos pensées avec les autres. Grâce à un vocabulaire commun, nous pouvons exprimer nos intentions et coopérer au sein de la société.",
        antithese: "Cependant, chaque individu associe aux mots des émotions et des vécus strictement personnels qui échappent aux autres. Le langage peut alors facilement devenir une source d'erreurs, d'incompréhensions et de malentendus profonds.",
        synthese: "S'ils restent l'outil privilégié de l'échange humain, les mots sont souvent imparfaits pour transmettre toute notre intériorité. Une véritable compréhension demande un effort d'écoute, d'empathie et parfois d'interprétation pour dépasser le sens littéral."
      }
    }
  },
  {
    id: "pot-37",
    title: "Faut-il maîtriser les mots pour maîtriser sa pensée ?",
    notions: ["Le langage", "La conscience", "La raison"],
    type: "Potentiel",
    ideas: {
      problematica: "Un langage structuré est-il la condition d'une pensée claire et rigoureuse ?",
      authors: ["N. Boileau", "G.W.F. Hegel", "F. de Saussure"],
      plan: {
        these: "Un vocabulaire riche permet d'exprimer des nuances précises et de clarifier ses propres idées. Celui qui possède beaucoup de mots parvient à organiser son esprit avec logique et rigueur intellectuelle.",
        antithese: "Toutefois, l'intelligence ne se limite pas à des mots, puisque l'intuition ou l'expression artistique sont des formes de pensée puissantes. De plus, une rhétorique brillante peut parfois masquer l'absence véritable de fond ou de réflexion sincère.",
        synthese: "La pensée peut s'exprimer au-delà des mots par l'art, les mathématiques ou le ressenti instinctif. Malgré tout, maîtriser la langue offre un avantage fondamental pour donner de l'ordre et de la profondeur à notre réflexion quotidienne."
      }
    }
  },
  {
    id: "pot-38",
    title: "Le langage révèle-t-il la pensée ou la détermine-t-il ?",
    notions: ["Le langage", "La conscience"],
    type: "Potentiel",
    ideas: {
      problematica: "Les mots ne font-ils que traduire la pensée, ou la modèlent-ils profondément ?",
      authors: ["F. de Saussure", "L. Wittgenstein", "E. Sapir"],
      plan: {
        these: "Le langage est souvent vu comme une simple traduction de ce qui se passe dans la tête de l'individu. L'être humain semble façonner ses idées librement avant de choisir les mots adéquats pour les révéler.",
        antithese: "Cependant, la langue maternelle fournit des catégories mentales qui orientent profondément notre vision du monde. Nos pensées sont inconsciemment conditionnées par le vocabulaire et les règles grammaticales que nous employons.",
        synthese: "Le langage offre à chacun la possibilité d'exprimer sa propre conscience face au monde. Néanmoins, il fixe toujours un cadre culturel et mental qui structure secrètement la manière dont nous réfléchissons."
      }
    }
  },
  {
    id: "pot-39",
    title: "Les mots peuvent-ils enfermer la pensée ?",
    notions: ["Le langage", "La vérité"],
    type: "Potentiel",
    ideas: {
      problematica: "En donnant un cadre à la pensée, les mots finissent-ils par figer notre perception du réel ?",
      authors: ["H. Bergson", "F. Nietzsche", "G. Orwell"],
      plan: {
        these: "Le vocabulaire fixe et catégorise le monde pour le rendre plus facilement compréhensible. En imposant des étiquettes générales, les mots figent souvent la réalité qui est plus complexe et mouvante.",
        antithese: "Heureusement, la littérature et la poésie prouvent que nous pouvons réinventer le langage. Par les métaphores et une utilisation créative des mots, nous parvenons à exprimer des émotions originales et inédites.",
        synthese: "Utilisée mécaniquement, la langue peut figer la créativité et emprisonner notre jugement. Mais si nous en explorons toute la richesse, la parole redevient un espace ouvert où la pensée s'évade librement."
      }
    }
  },
  {
    id: "pot-40",
    title: "Le langage crée-t-il la réalité ?",
    notions: ["Le langage", "La vérité"],
    type: "Potentiel",
    ideas: {
      problematica: "Le langage ne fait-il que décrire la réalité existante, ou contribue-t-il à la fabriquer ?",
      authors: ["J.L. Austin", "P. Bourdieu", "E. Kant"],
      plan: {
        these: "À première vue, les mots servent simplement à nommer des choses qui existent déjà autour de nous. Le monde matériel existerait de manière identique même si aucun humain n'était là pour en parler.",
        antithese: "Par contre, dans le domaine social et relationnel, dire des mots revient parfois à faire naître de nouvelles réalités. Par exemple, prononcer certains mots lors d'un mariage transforme instantanément la vie des personnes et leur identité.",
        synthese: "Le monde matériel existe bien indépendamment de nous, mais les mots donnent un sens humain à cette réalité. La parole humaine façonne nos valeurs, nos relations sociales et la façon dont nous percevons collectivement l'univers."
      }
    }
  },
  {
    id: "pot-41",
    title: "Peut-on tout dire ?",
    notions: ["Le langage", "La vérité", "L'État"],
    type: "Potentiel",
    ideas: {
      problematica: "Notre expression trouve-t-elle ses limites dans l'indicible ou dans les interdits sociaux ?",
      authors: ["L. Wittgenstein", "S. Freud", "M. Foucault"],
      plan: {
        these: "Les êtres humains ressentent souvent la capacité d'exprimer n'importe quelle pensée grâce à l'immensité du vocabulaire. D'un point de vue moral ou politique, la liberté d'expression pousse à croire que tout sujet peut être discuté.",
        antithese: "Pourtant, certaines expériences très intimes ou des souffrances extrêmes défient toute description linguistique. Le sentiment d'indicible nous montre régulièrement que certains mystères ou douleurs résistent aux mots et au langage.",
        synthese: "Le langage tend idéalement à déchiffrer tous les aspects de la condition humaine. Cependant, il rencontre toujours des limites face au silence intérieur des émotions intenses ou face au respect de la pudeur d'autrui."
      }
    }
  },
  {
    id: "pot-42",
    title: "Y a-t-il des choses indicibles ?",
    notions: ["Le langage", "La conscience"],
    type: "Potentiel",
    ideas: {
      problematica: "Existe-t-il des limites linguistiques ou conceptuelles qui nous empêchent de tout partager avec notre prochain ?",
      authors: ["H. Bergson", "L. Wittgenstein", "M. Merleau-Ponty"],
      plan: {
        these: "Il semble exister des expériences traumatisantes ou extatiques que les mots ordinaires sont incapables de restituer fidèlement. Les événements d'une cruauté indicible ou les élans mystiques dépassent les limites de toute formulation verbale.",
        antithese: "À l'inverse, l'être humain peut s'appuyer sur l'art, la poésie ou le récit pour s'approcher de l'inexprimable. En explorant continuellement de nouvelles formes d'expression, nous parvenons progressivement à contourner ces limites du sens.",
        synthese: "Bien sûr, il reste une part de mystère impénétrable au cœur de l'expérience humaine. Néanmoins, l'effort pour traduire en mots ce qui semble inavouable reste notre plus belle conquête pour combattre le silence."
      }
    }
  },
  {
    id: "pot-43",
    title: "Le langage nous rapproche-t-il de la vérité ?",
    notions: ["Le langage", "La vérité"],
    type: "Potentiel",
    ideas: {
      problematica: "Le langage est-il le support indispensable de la vérité ou l'outil privilégié de l'illusion ?",
      authors: ["Platon", "R. Descartes", "J. Baudrillard"],
      plan: {
        these: "Grâce au langage, les êtres humains partagent leurs découvertes et corrigent leurs erreurs logiques. La langue commune offre ainsi l'instrument nécessaire pour élaborer collectivement des certitudes ou des connaissances rigoureuses.",
        antithese: "Pourtant, à cause de son absence de précision immédiate, la langue peut aussi fausser nos perceptions et propager des illusions. Des personnes mal intentionnées utilisent d'ailleurs des mots vagues pour séduire, manipuler ou imposer de fausses convictions.",
        synthese: "Le langage n'est donc pas la vérité elle-même, mais il constitue le seul outil permettant à la raison de la rechercher. Son usage honnête et éclairé demeure indispensable pour partager une analyse juste et vérifier la réalité des faits."
      }
    }
  },
  {
    id: "pot-44",
    title: "Les mots ont-ils un sens par eux-mêmes ?",
    notions: ["Le langage", "La raison"],
    type: "Potentiel",
    ideas: {
      problematica: "La signification d'un mot est-elle inhérente à sa nature, ou relève-t-elle de pures conventions culturelles ?",
      authors: ["Platon", "F. de Saussure", "L. Wittgenstein"],
      plan: {
        these: "Dans la vie quotidienne, nous constatons que les termes d'un dictionnaire possèdent des définitions précises. Les mots semblent alors détenir une signification objective que chacun peut apprendre lors de son éducation.",
        antithese: "Toutefois, l'étude des langues rappelle que le lien entre le mot et l'objet qu'il désigne est purement arbitraire et conventionnel. Le véritable sens du mot provient toujours de notre culture et du contexte relationnel particulier dans lequel on le prononce.",
        synthese: "Aucun mot n'incarne par magie la chose matérielle qu'il nomme, puisque son sens dépend d'un accord humain. Les mots tirent entièrement leur pertinence et leur puissance de la volonté d'une société à partager l'information de manière claire."
      }
    }
  },
  {
    id: "pot-45",
    title: "Faut-il toujours dire la vérité ?",
    notions: ["Le langage", "La vérité", "Le devoir"],
    type: "Potentiel",
    ideas: {
      problematica: "Dire la vérité est-il un devoir inconditionnel, ou le mensonge peut-il être parfois moralement justifié ?",
      authors: ["E. Kant", "B. Constant", "N. Machiavel"],
      plan: {
        these: "La morale affirme souvent qu'il est indispensable d'être honnête, car le mensonge détruit la confiance entre les individus. Pour des penseurs comme Emmanuel Kant, dire systématiquement la vérité est un devoir moral universel et inconditionnel.",
        antithese: "Toutefois, une honnêteté brutale peut parfois causer des blessures inutiles ou mettre des innocents en danger. Dans certaines situations tragiques, adoucir la réalité ou dissimuler l'information devient paradoxalement un acte de protection et de compassion.",
        synthese: "La confiance imposant une base d'honnêteté, il est crucial de privilégier la vérité dans nos échanges quotidiens. Cependant, la délicatesse et le discernement moral autorisent le silence ou le mensonge lorsque parler vrai devient cruel ou destructeur."
      }
    }
  },
  {
    id: "pot-46",
    title: "Les mots créent-ils la réalité ou la décrivent-ils seulement ?",
    notions: ["Le langage", "La vérité"],
    type: "Potentiel",
    ideas: {
      problematica: "Le langage est-il un miroir de la réalité ou un moule qui lui donne sa forme concrète ?",
      authors: ["J.L. Austin", "M. Foucault", "E. Kant"],
      plan: {
        these: "Au premier abord, les mots apparaissent comme de simples étiquettes destinées à nommer une nature qui nous précède. Le monde matériel s'organiserait de manière identique même si aucun humain n'était là pour prononcer le moindre son.",
        antithese: "Malgré tout, notre conscience du monde est profondément découpée par les différentes classifications grammaticales et le vocabulaire imposés. De plus, par les actes institutionnels, prononcer un verdict ou une promesse modifie très concrètement la réalité sociale.",
        synthese: "Les mots partent toujours de la représentation d'une réalité extérieure objective à décrire afin d'organiser le réel. En retour, les classifications de ces mots forgent nos préjugés culturels et influencent la construction future de notre réalité politique collective."
      }
    }
  },
  {
    id: "pot-47",
    title: "Les mots nous éloignent-ils de la réalité des choses ?",
    notions: ["Le langage", "La nature", "La conscience"],
    type: "Potentiel",
    ideas: {
      problematica: "En nous offrant des concepts généraux pour catégoriser le monde, le langage occulte-t-il la singularité de la réalité ?",
      authors: ["H. Bergson", "F. Nietzsche", "A. Schopenhauer"],
      plan: {
        these: "En utilisant des mots généraux, nous masquons la richesse unique de chaque objet ou de chaque événement réel. Le mot tend inévitablement à figer et à simplifier une réalité qui est pourtant en perpétuel changement pour faciliter nos routines.",
        antithese: "Mais c'est précisément grâce au langage que nous organisons le monde chaotique autour de nous avec une certaine logique. Les créateurs, de leur côté, utilisent subtilement la richesse des mots pour nous dévoiler la beauté invisible des petites choses.",
        synthese: "Employé de manière paresseuse, le langage s'interpose comme un écran appauvrissant entre nous et la richesse du grand monde. Exploité d'une façon plus évocatrice et plus créative, il devient l'outil le plus puissant pour rendre au réel toute sa profondeur initiale."
      }
    }
  },
  {
    id: "pot-48",
    title: "Faut-il exiger du langage qu'il soit parfaitement clair ?",
    notions: ["Le langage", "La raison"],
    type: "Potentiel",
    ideas: {
      problematica: "La clarté absolue est-elle l'idéal inaccessible ou indésirable de la communication linguistique ?",
      authors: ["R. Descartes", "S. Mallarmé", "L. Wittgenstein"],
      plan: {
        these: "La précision du vocabulaire est essentielle pour éviter les malentendus et organiser sereinement le savoir scientifique. Parler avec clarté permet de transmettre les informations sans équivoque et avec une efficacité optimale dans une société libre.",
        antithese: "Néanmoins, vouloir tout réduire à une clarté mathématique absolue risquerait d'abolir la poésie, les nuances ironiques et la séduction humaine. L'humour, l'amour ou l'art ont souvent besoin d'un léger mystère pour retranscrire toute la part indicible de notre pensée complexe.",
        synthese: "Pour la science et les échanges vitaux du quotidien, la clarté rigoureuse du langage est une exigence morale irremplaçable. Cependant, tolérer des frontières artistiques plus souples et moins directes est indispensable pour préserver la magie littéraire et la beauté de l'existence."
      }
    }
  },
  {
    id: "pot-49",
    title: "La rhétorique est-elle l'ennemie de la vérité ?",
    notions: ["Le langage", "La vérité", "L'État"],
    type: "Potentiel",
    ideas: {
      problematica: "L'art de séduire par les mots représente-t-il une menace pour la logique ou un soutien utile à la vérité ?",
      authors: ["Platon", "Aristote", "Cicéron"],
      plan: {
        these: "Depuis les philosophes grecs, l'art de bien parler est souvent vu comme une manipulation dangereuse qui flatte les passions plutôt que la raison. Un bon orateur peut utiliser des arguments charmeurs pour convaincre la foule d'une opinion totalement fausse ou de mesures très injustes.",
        antithese: "Mais un discours logiquement vrai a parfois du mal à convaincre les citoyens s'il est présenté de façon ennuyeuse ou abstraite. La rhétorique est donc nécessaire pour défendre efficacement les idées justes et emporter l'adhésion d'une société endormie.",
        synthese: "Lorsqu'elle n'est motivée que par la recherche du pouvoir égoïste, la rhétorique manipule et trompe inévitablement la population sincère. Associée à une quête sincère du bien commun, elle redevient une arme précieuse pour donner de l'impact à la stricte vérité des faits."
      }
    }
  },
  {
    id: "pot-50",
    title: "Dire la vérité, est-ce toujours bien parler ?",
    notions: ["Le langage", "La vérité"],
    type: "Potentiel",
    ideas: {
      problematica: "L'expression de la vérité brute se suffit-elle à elle-même ou exige-t-elle une exigence de forme oratoire respectueuse ?",
      authors: ["B. Pascal", "J.-J. Rousseau", "I. Kant"],
      plan: {
        these: "Les penseurs rationnels affirment que le seul but de la parole est de transmettre la réalité sans aucun détour de forme. Un discours est donc considéré comme parfaitement réussi s'il est logiquement vrai et respectueux des faits observables.",
        antithese: "Toutefois, une vérité brute, crachée avec mépris ou brutalité, perd sa force et se transforme en humiliation destructrice. Bien parler implique également de respecter son public par une grande empathie et un choix minutieux des délicates formulations employées.",
        synthese: "Respecter scrupuleusement la vérité des faits constitue évidemment le fondement éthique indispensable d'une expression légitime. Néanmoins, exprimer efficacement et respectueusement cette vérité requiert bien souvent une grande intelligence sociale ainsi qu'un tact mesuré."
      }
    }
  },
  {
    id: "pot-51",
    title: "Parler, est-ce agir ?",
    notions: ["Le langage", "L'État"],
    type: "Potentiel",
    ideas: {
      problematica: "La parole se sépare-t-elle de l'action physique ou s'accomplit-elle concrètement tel un acte réel du quotidien ?",
      authors: ["J.L. Austin", "H. Arendt", "P. Bourdieu"],
      plan: {
        these: "Souvent, nous distinguons vivement les mots et les actes en considérant que parler revient simplement à décrire ou débattre. Bavarder semble être une occupation intellectuelle inoffensive qui ne produit concrètement aucun véritable changement direct dans le monde physique.",
        antithese: "Cependant, la théorie des actes de langage montre très bien que jurer, ordonner ou juger ne décrit rien, mais agit directement. L'ordre formel d'un général militaire ou le verdict terrible d'un tribunal modifient incontestablement la situation vécue par des centaines d'individus concernés.",
        synthese: "Les mots ne sont jamais une matière totalement inerte ou un simple vent sonore pour amuser les tribunes tranquilles. Bien utilisée, la parole constitue notre premier levier d'action pour engager notre responsabilité et infléchir le destin des événements politiques."
      }
    }
  },
  {
    id: "pot-52",
    title: "Le langage est-il un outil de pouvoir ?",
    notions: ["Le langage", "L'État"],
    type: "Potentiel",
    ideas: {
      problematica: "Le langage sert-il une égalité démocratique idéale ou structure-t-il systématiquement une asymétrie de prestige ?",
      authors: ["P. Bourdieu", "M. Foucault", "G. Orwell"],
      plan: {
        these: "Naturellement, le vocabulaire reste l'instrument simple avec lequel nous cherchons à interagir pacifiquement sans rapports de force explicites. L'éducation l'enseigne aux plus jeunes comme une aide magique pour tisser des compromis faciles ou pour partager rapidement d'utiles informations scolaires.",
        antithese: "Pourtant, ceux qui possèdent l'aisance verbale supérieure s'en servent depuis toujours pour endoctriner ou dominer l'opinion populaire. La belle culture, le vocabulaire savant de l'élite ou l'art oratoire incisif permettent systématiquement de s'imposer sur ses adversaires politiques démunis linguistiquement.",
        synthese: "Bien qu'il se veuille avant tout unificateur et neutre, le maniement supérieur du discours suscite inévitablement un avantage de pouvoir indéniable. Démocratiser l'étude des rouages du langage demeure par conséquent le moyen indispensable pour prémunir chaque futur citoyen de l'emprise intellectuelle autoritaire."
      }
    }
  },
  {
    id: "pot-53",
    title: "Le langage est-il un instrument de domination ?",
    notions: ["Le langage", "L'État", "La liberté"],
    type: "Potentiel",
    ideas: {
      problematica: "Assujettis au langage de nos dirigeants, sommes-nous fatalement opprimés ou pouvons-nous y trouver le moyen de résister ?",
      authors: ["N. Chomsky", "R. Barthes", "G. Orwell"],
      plan: {
        these: "Le langage sert bien souvent aux régimes stricts et aux dirigeants pour asseoir leur autorité morale sur les populations obéissantes. En utilisant des termes flatteurs ou rassurants, les autorités peuvent facilement masquer la grande violence de leurs réformes restrictives impopulaires.",
        antithese: "Néanmoins, le langage est également l'outil fondamental de toute protestation sociale justifiée et de la liberté d'expression combative moderne. Les journalistes vaillants et les philosophes engagés l'emploient sans cesse vigoureusement pour dénoncer durement l'oppression et affranchir ainsi la conscience populaire.",
        synthese: "La structure du discours peut assurément enfermer les citoyens dociles dans un conformisme inquiétant et une adoration insidieuse du chef. Affûter sa rigueur dialectique reste malgré tout le moyen individuel le plus efficace pour résister intellectuellement aux dangereux excès d'une propagande étatique dissimulée."
      }
    }
  },
  {
    id: "pot-54",
    title: "La maîtrise de la langue donne-t-elle du pouvoir ?",
    notions: ["Le langage", "L'État"],
    type: "Potentiel",
    ideas: {
      problematica: "Posséder un grand vocabulaire et l'art de l'éloquence suffit-il pour contrôler ou charmer de manière indiscutable les masses ?",
      authors: ["P. Bourdieu", "Cicéron", "M. Foucault"],
      plan: {
        these: "Savoir s'exprimer avec précision confère incontestablement une très grande force politique, parce qu'elle permet de convaincre plus aisément la majorité indécise. L'acquisition d'un vocabulaire étendu et d'une syntaxe limpide devient presque toujours le meilleur passeport du respect et de l'influence.",
        antithese: "Toutefois, l'habileté rhétorique froide ne garantit ni la moralité ni la véracité des thèses soutenues par le locuteur instruit. Par ailleurs, des discours candides très spontanés, quoiqu'imparfaits grammaticalement, réussissent de temps à autre à faire trembler des empereurs par la magie saisissante de la conviction pure.",
        synthese: "Le maniement habile et élégant du langage académique assure indiscutablement un atout terrifiant pour remporter l'attention publique de prestige. Mais, s'il n'est pas secondé par la vérité sincère du cœur, il se transforme à long terme en un vulgaire dispositif sectaire, incapable de gagner la grande confiance du peuple profond."
      }
    }
  },
  {
    id: "pot-55",
    title: "Les mots ont-ils un pouvoir sur les choses ?",
    notions: ["Le langage", "La technique", "La vérité"],
    type: "Potentiel",
    ideas: {
      problematica: "Au-delà de leur nature symbolique, les paroles possèdent-elles une véritable force d'altération matérielle ou juridique applicable au réel ?",
      authors: ["J.L. Austin", "Platon", "A. Schopenhauer"],
      plan: {
        these: "Intuitivement, exprimer une volonté par la parole ne modifie en rien la structure des objets physiques de la nature. Mettre toutes ses forces pour ordonner à la pluie de s'arrêter n'a absolument aucun impact sur la réalité climatique.",
        antithese: "En revanche, dans le monde social des institutions humaines, les déclarations officielles possèdent un véritable pouvoir de transformation concret. Dès qu'un juge prononce solennellement un verdict d'emprisonnement, la réalité physique et la liberté de mouvement d'un individu s'en trouvent instantanément modifiées.",
        synthese: "Le verbe humain reste totalement impuissant face aux lois inébranlables de la matière ou du monde végétal non doué d'intelligence. Toutefois, dès lors qu'il touche un être capable de partager des conventions culturelles communes, le langage influence souverainement toutes nos réalités quotidiennes et juridiques."
      }
    }
  },
  {
    id: "pot-56",
    title: "Faut-il se méfier des mots ?",
    notions: ["Le langage", "La raison", "La conscience"],
    type: "Potentiel",
    ideas: {
      problematica: "Les mots méritent-ils notre confiance instinctive pour bâtir un dialogue équitable ou nous obligent-ils à la plus grande vigilance ?",
      authors: ["R. Descartes", "J. Baudrillard", "G. Orwell"],
      plan: {
        these: "Le langage offre un moyen merveilleux de formuler la pensée pour collaborer et s'enrichir des sagesses des générations qui nous ont précédés sur terre. Cultiver une suspicion maladive constante à l'égard de toute parole conduirait désespérément à l'isolement complet de l'individu solitaire.",
        antithese: "Malgré leurs vertus formidables, les expressions des orateurs cachent bien souvent des arrière-pensées d'une manipulation subtile et discrète. Les publicitaires doués ou les propagateurs politiques misent consciencieusement sur notre vulnérabilité à certains nobles vocables, afin de tromper en douceur la vigilance passive du consommateur candide.",
        synthese: "Bien qu'il structure harmonieusement l'aventure intellectuelle partagée, le discours ambiant requiert toujours un minimum de clairvoyance et de prudence responsable. Exercer rigoureusement sa propre réflexion personnelle reste le remède d'urgence pour ne pas être envoûté par toutes ces paroles charmantes mais perfidement intéressées."
      }
    }
  },
  {
    id: "pot-57",
    title: "Le langage nous unit-il ou nous divise-t-il ?",
    notions: ["Le langage", "L'État"],
    type: "Potentiel",
    ideas: {
      problematica: "Vocation naturelle de tout outil de médiation, le dialogue produit-il par miracle l'alliance communautaire ou attise-t-il les pires luttes sociales ?",
      authors: ["J.-J. Rousseau", "P. Bourdieu", "H. Arendt"],
      plan: {
        these: "Partager une même langue permet à une société de communiquer, de coopérer et de transmettre facilement sa culture fraternelle. Un vocabulaire commun forme un ciment spirituel capable de rassembler durablement des personnes venant d'horizons très variés.",
        antithese: "Toutefois, la non-maîtrise d'une langue produit des barrières immenses qui alimentent le racisme et le rejet de l'étranger. Même au sein d'une nation, les cruelles inégalités de vocabulaire entre différentes classes sociales créent du mépris et d'insurmontables divisions quotidiennes.",
        synthese: "La parole, symbole du rassemblement humain supérieur, échoue malheureusement parfois à réconcilier la population sans effort soutenu et réciproque de bonne volonté. Elle exige en réalité beaucoup d'empathie, ainsi qu'une éducation solide, pour accueillir chaque différence sans faire du niveau de langue un instrument d'exclusion discriminatoire."
      }
    }
  },
  {
    id: "pot-58",
    title: "Le langage nous permet-il de mieux comprendre autrui ?",
    notions: ["Le langage", "La conscience"],
    type: "Potentiel",
    ideas: {
      problematica: "L'articulation du verbe perfore-t-elle notre subjectivité close pour assurer une communion solidaire authentique face à nos mystères respectifs ?",
      authors: ["E. Lévinas", "M. Merleau-Ponty", "H. Bergson"],
      plan: {
        these: "La parole reste notre meilleur moyen pour communiquer nos attentes, débattre sereinement et partager nos émotions avec notre entourage. Un dialogue honnête dissipe souvent les malentendus et offre un pont irremplaçable pour se rapprocher de la réalité intime des autres.",
        antithese: "Malgré cela, les mots demeurent souvent imparfaits pour exprimer spontanément les traumatismes profonds qui emprisonnent l'esprit dans le silence. De plus, l'hypocrisie et les manipulations rhétoriques empêchent constamment d'avoir accès aux véritables intentions dissimulées sous de beaux mensonges polis.",
        synthese: "Le langage crée indéniablement le seul véritable accès durable vers les pensées des autres êtres humains pour éviter l'isolement radical. Néanmoins, atteindre une compréhension profonde demande nécessairement beaucoup d'intelligence émotionnelle pour décrypter l'attitude non verbale et toutes les subtilités non prononcées."
      }
    }
  },
  {
    id: "pot-59",
    title: "Le langage crée-t-il des malentendus ?",
    notions: ["Le langage", "La vérité"],
    type: "Potentiel",
    ideas: {
      problematica: "Naturellement imprécis ou sujet à l'interprétation, le langage abrite-t-il les pires blocages de nos plus formidables ambitions collaboratives ?",
      authors: ["F. de Saussure", "L. Wittgenstein", "S. Freud"],
      plan: {
        these: "Puisque chaque individu projette ses propres références sur les mots, les erreurs d'interprétation et les quiproquos semblent inévitables. L'usage d'un vocabulaire imprécis déclenche régulièrement des frustrations ou des conflits stériles dans nos interactions quotidiennes et professionnelles.",
        antithese: "Toutefois, ces confusions ne sont souvent que la première étape indispensable pour se confronter à la perception différente d'autrui. C'est en faisant continuellement l'effort de se justifier, de corriger son langage et de réexpliquer, que l'être humain parfait véritablement son intelligence des autres.",
        synthese: "Les mots, porteurs d'approximations imparfaites, piègent régulièrement la communication spontanée innocente au profit de malentendus frustrants et douloureux. En revanche, accepter de poursuivre l'effort patient de la traduction respectueuse ou de la clarification apaisée, c'est triompher de ces obstacles inévitables pour retrouver une précieuse unité sociale."
      }
    }
  },
  {
    id: "pot-60",
    title: "La parole nous rend-elle libres ?",
    notions: ["Le langage", "La liberté", "L'État"],
    type: "Potentiel",
    ideas: {
      problematica: "Bénéfice éclatant de notre intellect, la compétence oratoire suffira-t-elle toujours pour se soustraire aux tyrans discrets de notre temps ?",
      authors: ["J.L. Austin", "H. Arendt", "R. Barthes"],
      plan: {
        these: "Savoir exprimer sa pensée avec une grande clarté permet de débattre, de s'opposer aux injustices et de revendiquer ses droits fondamentaux. Celui qui maîtrise sa parole peut plus facilement s'extirper des influences oppressantes et affirmer courageusement son indépendance d'esprit face au reste du public passif.",
        antithese: "Cependant, la langue que nous employons véhicule des stéréotypes et des valeurs politiques que nous intériorisons souvent inconsciemment depuis l'enfance. De ce fait, nous restons largement conditionnés par ce discours dominant, qui dessine secrètement les limites strictes de ce qu'il est possible de penser.",
        synthese: "Le langage nous transmet involontairement l'empreinte d'une culture et de multiples jugements moraux qui conditionnent et encadrent nos choix profonds. Cependant, l'usage critique du discours demeure fondamentalement notre meilleure arme intellectuelle pour repérer ces chaînes invisibles et bâtir fermement l'indépendance de nos futures convictions idéologiques émancipatrices."
      }
    }
  }
);
