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
      problematica: "Est-ce par la contemplation théorique ou par l'activité pratique que l'homme parvient à se comprendre ? Le travail, en imprimant notre marque consciente dans la matière extérieure, ne nous offre-t-il pas le miroir de notre liberté ?",
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
        these: "Par l'outil et l'intelligence de fabrication, le travail est ce qui extrait l'homme de l'animalité pure et forme le socle de la culture (Bergson).",
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
        synthese: "Le travail n'humanise que s'il respecte l'autonomie morale de la personne et s'il est valorisé comme un acte créateur constructif."
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
        synthese: "Travailler n'est pas perdre son temps si cette activité permet de cultiver ses compétences rationnelles et coopératives."
      }
    }
  },
  {
    id: "pot-14",
    title: "Travailler, est-ce seulement obéir ?",
    notions: ["Le travail", "Le devoir", "La liberté"],
    type: "Potentiel",
    ideas: {
      problematica: "Le travail se résume-t-il à se plier à des ordres de supérieurs, des exigences de rentabilité et des principes physiques rigides, ou suppose-t-il l'initiative de l'intelligence pratique ?",
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
      problematica: "Est-ce la contribution productive et la profession d'un individu qui décident de son mérite dans la cité, ou cela constitue-t-il un réductionnisme utilitariste dangereux ?",
      authors: ["I. Kant", "P. Lafargue", "F. Nietzsche"],
      plan: {
        these: "La culture contemporaine valorise le travailleur infatigable comme le seul citoyen vraiment méritant et responsable de la cité.",
        antithese: "Or, la dignité humaine est inaliénable et transcende largement l'utilité productive de l'individu sur le marché (Kant).",
        synthese: "La valeur intime de l'homme relève de sa conscience morale, le travail n'étant qu'un des multiples modes de participation au monde."
      }
    }
  },
  {
    id: "pot-18",
    title: "Le travail n'est-il qu'un moyen de survie ?",
    notions: ["Le travail", "Le bonheur", "La nature"],
    type: "Potentiel",
    ideas: {
      problematica: "Né pour préserver l'existence des rigueurs extérieures, le travail se restreint-il par essence à l'utilitaire, ou s'élève-t-il à un besoin social de reconnaissance et d'intellection ?",
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
    title: "Le travail peut-il être autre chose qu'un moyen de survivre ?",
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
  },
  {
    id: "pot-21",
    title: "La technique nous libère-t-elle ?",
    notions: ["La technique", "La liberté", "L'État"],
    type: "Potentiel",
    ideas: {
      problematica: "Conçue pour affranchir l'humain des contraintes naturelles, la technique ne risque-t-elle pas de l'enfermer dans de nouvelles formes de dépendance à la société de consommation ?",
      authors: ["R. Descartes", "G. Anders", "G. Simondon"],
      plan: {
        these: "En maîtrisant la nature par ses outils, l'homme se libère des nécessités biologiques et améliore considérablement ses conditions de vie matérielles.",
        antithese: "Toutefois, l'usage omniprésent de la technologie moderne aliène grandement l'individu, qui perd son autonomie immédiate et devient massivement dépendant.",
        synthese: "Une véritable libération nécessite le développement impératif d'une culture technique éclairée, où l'homme conçoit et comprend ses machines plutôt que de simplement les subir."
      }
    }
  },
  {
    id: "pot-22",
    title: "La technique n'est-elle qu'un outil au service de l'homme ?",
    notions: ["La technique", "La conscience", "Le devoir"],
    type: "Potentiel",
    ideas: {
      problematica: "Pouvons-nous encore considérer les innovations techniques comme de simples moyens neutres que nous dominons, ou ont-elles acquis une complexité qui nous dépasse ?",
      authors: ["Aristote", "K. Marx", "M. Heidegger"],
      plan: {
        these: "À l'origine, la technique, conçue comme simple prolongement du corps, est un instrument docile visant à atteindre des fins librement choisies (Aristote).",
        antithese: "Avec l'industrialisation, l'homme devient souvent lui-même le rouage d'un système mécanique qui dicte son rythme de production et ses finalités (Marx).",
        synthese: "La technique moderne impose sa propre rationalité : l'« arraisonnement » global réduit toute chose à un simple stock de ressources exploitables (Heidegger)."
      }
    }
  },
  {
    id: "pot-23",
    title: "La technique nous éloigne-t-elle de la nature ?",
    notions: ["La technique", "La nature", "L'art"],
    type: "Potentiel",
    ideas: {
      problematica: "L'artifice technique constitue-t-il une rupture violente avec notre condition naturelle terrestre, ou est-il l'expression la plus pure de l'essence même de l'humanité ?",
      authors: ["Platon", "H. Jonas", "M. Merleau-Ponty"],
      plan: {
        these: "Le mythe de Prométhée enseigne que l'homme est naturellement démuni ; l'invention technique est indispensable à sa survie et devient indissociable de sa nature (Platon).",
        antithese: "Cependant, la puissance démiurgique contemporaine détruit souvent les équilibres écologiques fondamentaux et menace physiquement l'habitat terrestre (Jonas).",
        synthese: "L'enjeu crucial n'est pas de renouer naïvement avec une nature sauvage, mais d'utiliser l'innovation pour préserver pacifiquement notre environnement vital."
      }
    }
  },
  {
    id: "pot-24",
    title: "Faut-il avoir peur du progrès technique ?",
    notions: ["La technique", "La conscience", "Le devoir"],
    type: "Potentiel",
    ideas: {
      problematica: "L'innovation doit-elle être aveuglément célébrée comme le moteur du bonheur universel futur, ou justifie-t-elle une grande méfiance face aux menaces d'autodestruction ?",
      authors: ["R. Descartes", "F. Rabelais", "H. Jonas"],
      plan: {
        these: "Le développement technique a un immense potentiel curatif et émancipateur (progrès de la médecine, confort global) qui justifie un humanisme pro-technique.",
        antithese: "Néanmoins, les armes de destruction massive et les dérives écologiques prouvent dramatiquement qu'une « science sans conscience n'est que ruine de l'âme » (Rabelais).",
        synthese: "Ce n'est pas de la technique elle-même qu'il faut se méfier craintivement, mais bien de notre manque dramatique de sagesse éthique pour l'encadrer."
      }
    }
  },
  {
    id: "pot-25",
    title: "La technique échappe-t-elle à la raison ?",
    notions: ["La technique", "La raison", "L'État"],
    type: "Potentiel",
    ideas: {
      problematica: "Fruit de l'extrême intelligence rationaliste, la profusion technologique ne finit-elle pas par adopter une dynamique destructrice qui échappe au contrôle du bon sens moral ?",
      authors: ["M. Weber", "J. Habermas", "H. Arendt"],
      plan: {
        these: "La technique est triomphalement l'application méthodique et logique de la rationalité scientifique pour résoudre des problèmes matériels concrets (ingénierie).",
        antithese: "Cependant, elle engendre une vertigineuse raison « instrumentale » aveugle qui exclut dangereusement toute réflexion profonde sur les fins morales (Weber).",
        synthese: "Pour éviter l'irrationalisme technocratique systémique, il est impératif que la véritable raison éthique reprenne ses droits publics dans les délibérations."
      }
    }
  },
  {
    id: "pot-26",
    title: "La technique nous libère-t-elle du travail ?",
    notions: ["La technique", "Le travail", "La liberté"],
    type: "Potentiel",
    ideas: {
      problematica: "Les machines sophistiquées sont-elles les séduisantes prémices d'une libération totale du fardeau laborieux, ou génèrent-elles simplement de nouvelles formes de contraintes ?",
      authors: ["K. Marx", "H. Arendt", "J. Rifkin"],
      plan: {
        these: "L'automatisation et la robotisation permettent prodigieusement de s'affranchir des pires tâches physiques aliénantes tout en accroissant exponentiellement la productivité.",
        antithese: "Paradoxalement, la spécialisation mécanique des machines modernes enferme le travailleur dans de toutes nouvelles servitudes mentales et temporelles épuisantes.",
        synthese: "Si la machine nous affranchit du labeur de pure survie biologique, nous sommes collectivement mis au défi d'inventer des activités humaines riches de sens (Arendt)."
      }
    }
  },
  {
    id: "pot-27",
    title: "La technique peut-elle satisfaire tous nos désirs ?",
    notions: ["La technique", "Le bonheur", "La raison"],
    type: "Potentiel",
    ideas: {
      problematica: "Notre exceptionnelle ingéniosité technique, aisément capable de combler infiniment nos besoins matériels vitaux, peut-elle apaiser la subtile quête spirituelle du désir humain ?",
      authors: ["Épicure", "A. Schopenhauer", "J. Baudrillard"],
      plan: {
        these: "En facilitant confortablement l'accès massif au bien-être (alimentation, transports, soins de santé), les formidables innovations ont historiquement aboli quantité de carences.",
        antithese: "Toutefois, la société frénétique de consommation technicienne attise de faux besoins, stimulant le vide insatiable plutôt que l'apaisement pérenne (Baudrillard).",
        synthese: "La perfection technique comble les besoins utilitaires immédiats, mais demeure inapte à satisfaire métaphysiquement l'infini du désir (Schopenhauer)."
      }
    }
  },
  {
    id: "pot-28",
    title: "Peut-on vivre sans technique ?",
    notions: ["La technique", "La nature", "La conscience"],
    type: "Potentiel",
    ideas: {
      problematica: "L'humanité pourrait-elle se débarrasser totalement du filtre technologique pour exister à l'état de nature spontané, ou l'humain est-il ontologiquement un technicien invétéré ?",
      authors: ["Platon", "J.-J. Rousseau", "A. Leroi-Gourhan"],
      plan: {
        these: "Le retour intellectuel fantasmé à la simplicité radicale et originaire de la nature pourrait sembler un majestueux idéal libérant l'intériorité de l'emprise artificielle matérielle.",
        antithese: "Néanmoins, depuis l'aube préhistorique, l'évolution de la main et de l'outil est intimement et biologiquement liée à la genèse de l'intelligence humaine (Leroi-Gourhan).",
        synthese: "S'il est illusoire et impossible d'exister sans technique, nous préservons la primordiale responsabilité éthique de délibérer farouchement sur la puissance de nos choix techniques."
      }
    }
  },
  {
    id: "pot-29",
    title: "La technique transforme-t-elle notre rapport au temps ?",
    notions: ["La technique", "Le temps", "La conscience"],
    type: "Potentiel",
    ideas: {
      problematica: "L'omniprésence vertigineuse des accélérateurs techniques numériques magnifie-t-elle notre libre expérience du temps ou nous condamne-t-elle inéluctablement à l'urgence perpétuelle tyrannique ?",
      authors: ["H. Rosa", "H. Arendt", "P. Virilio"],
      plan: {
        these: "Les spectaculaires avancées de la logistique et de la transmission suppriment radicalement l'attente végétative stérile, nous faisant providentiellement « gagner un temps précieux ».",
        antithese: "Très curieusement, cette implacable accélération de la rotation sociale nous enferme tragiquement dans l'immédiateté (présentisme), nous confisquant l'épaisseur durable des heures (Rosa).",
        synthese: "Redonner du temps noble au temps exige de concevoir consciemment les machines non plus comme de formidables vecteurs de précipitation, mais comme de véritables garants de la lenteur libre."
      }
    }
  },
  {
    id: "pot-30",
    title: "La technique menace-t-elle la vérité ?",
    notions: ["La technique", "La vérité", "La science"],
    type: "Potentiel",
    ideas: {
      problematica: "Les technologies sophistiquées d'observation garantissent-elles implacablement l'objectivation du monde, ou fabriquent-elles incidemment un nouvel univers de mirages insaisissables (virtuel) ?",
      authors: ["G. Bachelard", "Platon", "J. Baudrillard"],
      plan: {
        these: "Dans le brillant champ des sciences pures, l'instrument technique perfectionné corrige les défectuosités naturelles : il réalise formidablement notre esprit objectif et rectifié (Bachelard).",
        antithese: "Cependant, la prolifération inquiétante des innombrables interfaces visuelles et communicationnelles construit par ailleurs une séduisante et trompeuse matrice d'hyperréalités (Baudrillard).",
        synthese: "La rigueur méthodique du savant et l'acuité de l'esprit rationnel demeurent le véritable et unique filtre critique indispensable pour ne pas se noyer dans l'illusion informatique généralisée."
      }
    }
  },
  {
    id: "pot-31",
    title: "L'État doit-il limiter le progrès technique ?",
    notions: ["La technique", "L'État", "La justice"],
    type: "Potentiel",
    ideas: {
      problematica: "Le jaillissement ingénieux de l'innovation technologique doit-il prospérer libéralement, ou justifie-t-il l'intervention souveraine sévère du pouvoir politique républicain garant du droit ?",
      authors: ["H. Jonas", "M. Foucault", "J. Habermas"],
      plan: {
        these: "Freiner massivement la noble invention conceptuelle équivaudrait à un mortifère renoncement face aux redoutables maux curables de l'humanité démunie (famine, épidémie, etc.).",
        antithese: "Néanmoins, les applications non politiquement régulées menacent ouvertement les droits démocratiques, étendent insidieusement la surveillance et aggravent l'ordre d'inégalité sociale (Foucault).",
        synthese: "Souverain et éclairé, l'État juste se doit d'endiguer préventivement les dangers mortels de l'imprévoyance sans entraver stupidement le salutaire génie inventif de laboratoire."
      }
    }
  },
  {
    id: "pot-32",
    title: "Le progrès technique garantit-il le bonheur ?",
    notions: ["La technique", "Le bonheur", "La raison"],
    type: "Potentiel",
    ideas: {
      problematica: "Si le savoir empirique et technique a libéré l'esprit des souffrances physiques flagrantes, est-il suffisant pour instaurer par lui-même la plénitude intérieure et la joie de l'âme humaine ?",
      authors: ["J.-J. Rousseau", "Épicure", "J.S. Mill"],
      plan: {
        these: "Le triomphal dépassement technique historique a évincé nombre d'angoisses terrestres primitives (douleur, dénuement), posant remarquablement les bases objectives d'un certain bonheur temporel.",
        antithese: "Hélas, l'accumulation effrénée d'outils fastueux génère le dérèglement de l'illusion des biens (frivolité), laissant intiment l'esprit dans un dénuement et un profond tourment métaphysique.",
        synthese: "L'aisance technique déblaie formidablement le long chemin en effaçant d'immenses souffrances, cependant le couronnement intime du bonheur de l'âme incombe exclusivement à la sagesse intime."
      }
    }
  }
);
