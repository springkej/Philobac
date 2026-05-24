import { Subject, Notion, ThesisNotion, NotionMetadata } from "./types";

export const THESES_LIBRARY: ThesisNotion[] = [
  {
    notion: "La technique",
    angles: [
      {
        these: "La technique comme dépossession de l'humain",
        reference: "Günther Anders, L'Obsolescence de l'homme, La « honte prométhéenne »",
        developpement: "Dans L'Obsolescence de l'homme, Günther Anders explique que la technique moderne est devenue si puissante que l'être humain ne parvient plus à comprendre ni à maîtriser ce qu'il produit. Cette situation crée ce qu'il appelle une « honte prométhéenne » : l'homme se sent inférieur aux machines, qu'il juge plus efficaces, plus précises et plus durables que lui. Anders parle aussi d'un « décalage prométhéen » : nous sommes capables de fabriquer des technologies extrêmement dangereuses, comme la bombe atomique, sans être capables d'en imaginer réellement les conséquences humaines et morales. Peu à peu, l'homme cesse d'être maître de la technique et devient un simple exécutant ou consommateur dépendant des systèmes techniques. Les médias et les objets techniques remplacent même notre expérience directe du monde par des images et des représentations toutes faites. Ainsi, l'individu finit par s'adapter aux exigences de la machine et du rendement, au risque de perdre sa liberté, son esprit critique et sa dignité humaine.",
        argumentPivot: "Par le « décalage prométhéen », Anders démontre que notre pouvoir de production technique dépasse infiniment notre faculté de représentation et d'imagination morale, réduisant l'homme au statut de simple serviteur d'un système qu'il ne maîtrise plus."
      },
      {
        these: "La promesse de maîtrise : « Maîtres et possesseurs de la nature »",
        reference: "René Descartes, Discours de la méthode, Maître et possesseur de la nature",
        developpement: "Dans le Discours de la méthode, René Descartes affirme que la science et la technique doivent permettre à l'homme de devenir « maître et possesseur de la nature ». Grâce à la connaissance des lois naturelles, l'être humain peut inventer des outils et des machines capables de transformer le monde à son avantage. Pour Descartes, la technique a donc une fonction positive : elle doit améliorer les conditions de vie, réduire les souffrances et développer la médecine afin de préserver la santé. La domination technique de la nature n'est pas présentée comme une destruction, mais comme un moyen d'émancipation. En maîtrisant son environnement par la raison et la science, l'homme peut se libérer de la maladie, de la misère et des limites imposées par la nature, permettant à l'homme de ne plus subir passivement son environnement, mais de le plier à sa propre volonté rationnelle.",
        argumentPivot: "Descartes montre que la technique, fondée sur la science, permet de soumettre la nature à la volonté rationnelle humaine afin de libérer l'homme de la précarité et de la maladie."
      },
      {
        these: "Le fondement anthropologique : Le mythe de Prométhée et d'Épiméthée",
        reference: "Platon, Protagoras, Le mythe de Prométhée et d'Épiméthée",
        developpement: "Dans le Protagoras, Platon raconte le mythe de Prométhée et d'Épiméthée pour expliquer l'origine de la technique. Épiméthée distribue aux animaux toutes les qualités nécessaires pour survivre : force, vitesse, griffes ou fourrure. Mais il oublie l'être humain, qui reste faible et sans protection face à la nature. Pour sauver l'humanité, Prométhée vole alors le feu et les techniques aux dieux afin de les offrir aux hommes. Ce mythe montre que la technique est indispensable à la survie humaine. Contrairement aux animaux, l'homme ne possède pas de défenses naturelles suffisantes ; il doit donc fabriquer des outils pour vivre, se protéger et transformer son environnement. La technique apparaît ainsi comme la véritable nature de l'être humain.",
        argumentPivot: "La technique n'est pas un luxe artificiel mais l'essence même de l'homme : dépourvu de défenses naturelles, sa survie biologique dépend entièrement de sa capacité à créer des outils."
      },
      {
        these: "L'essence destructrice moderne : L'Arraisonnement / Le Gestell",
        reference: "Martin Heidegger, La Question de la technique, L'« Arraisonnement » (Gestell)",
        developpement: "Dans La Question de la technique, Martin Heidegger affirme que la technique moderne n'est pas un simple outil neutre. Elle impose une manière particulière de voir le monde qu'il appelle l'« arraisonnement » (Gestell). La nature n'est plus considérée comme un milieu à respecter, mais comme un stock de ressources à exploiter et à rentabiliser. La technique moderne cherche à extraire, produire et contrôler toujours plus d'énergie et de richesses. Le danger est que cette logique s'applique aussi aux êtres humains, réduits à de simples « ressources humaines » destinées à être utilisées efficacement. Heidegger critique donc une vision du monde dominée par le rendement et l'utilité, qui fait perdre à l'homme son rapport authentique et poétique à la nature et à l'existence.",
        argumentPivot: "Heidegger montre que la technique moderne n'est pas neutre : elle arraisonne le monde en le réduisant à un simple stock disponible, risquant d'assimiler l'homme lui-même à une simple ressource exploitable."
      },
      {
        these: "L'aliénation capitaliste : L'homme comme appendice de la machine",
        reference: "Karl Marx, Le Capital, L'homme comme appendice de la machine",
        developpement: "Dans Le Capital, Karl Marx analyse les effets de la machine dans le système capitaliste. Autrefois, l'artisan contrôlait ses outils et maîtrisait entièrement son travail. Avec l'industrialisation, cette relation s'inverse : l'ouvrier doit désormais suivre le rythme imposé par la machine. Il devient un simple rouage du système productif. Cette organisation du travail provoque une aliénation, car le travailleur ne se reconnaît plus dans ce qu'il produit et perd son savoir-faire. La technique, au lieu de libérer l'homme, sert surtout la recherche du profit. L'ouvrier est réduit à une fonction mécanique répétitive qui épuise son corps et limite son développement intellectuel.",
        argumentPivot: "Marx dénonce l'aliénation par la machine sous le capitalisme, où l'ouvrier n'est plus le maître de ses outils mais un simple rouage passif assujetti au rythme mécanique de la production."
      },
      {
        these: "L'éthique environnementale : Le Principe Responsabilité et l'heuristique de la peur",
        reference: "Hans Jonas, Le Principe responsabilité, L'heuristique de la peur",
        developpement: "Dans Le Principe responsabilité, Hans Jonas explique que la puissance technologique moderne est devenue si grande qu'elle menace désormais l'avenir de l'humanité et de la planète. Les anciennes morales ne suffisent plus, car elles ne prenaient pas en compte les conséquences à long terme de nos actions techniques. Jonas propose alors un nouvel impératif moral : agir de manière à préserver la possibilité d'une vie humaine future sur Terre. Pour cela, il défend une « heuristique de la peur » : la peur des catastrophes écologiques ou nucléaires doit nous pousser à être prudents et responsables. La technique doit donc être limitée et contrôlée par une éthique de la prévoyance afin d'éviter des destructions irréversibles.",
        argumentPivot: "Jonas affirme que la puissance technologique moderne menace la survie future de l'humanité, exigeant un nouvel impératif d'autolimitation guidé par une « heuristique de la peur »."
      },
      {
        these: "La réconciliation : La culture technique et la compréhension de la machine",
        reference: "Gilbert Simondon, Du mode d'existence des objets techniques, La culture technique",
        developpement: "Dans Du mode d'existence des objets techniques, Gilbert Simondon refuse l'idée selon laquelle les machines seraient opposées à la culture humaine. Selon lui, le véritable problème vient surtout de notre ignorance du fonctionnement des objets techniques. L'homme moderne utilise les machines sans les comprendre, ce qui crée un sentiment d'aliénation et de dépendance. Simondon pense qu'il faut développer une véritable culture technique permettant de comprendre la logique, la fabrication et l'évolution des machines. En apprenant à connaître les objets techniques, l'homme peut retrouver une relation plus équilibrée avec eux et cesser de les subir passivement.",
        argumentPivot: "Simondon soutient que l'aliénation face aux machines provient de notre ignorance : comprendre l'objet technique comme un produit de l'intelligence permet de réconcilier culture et technologie."
      },
      {
        these: "Le péril du temps libéré : L'animal laborans et la société sans travail",
        reference: "Hannah Arendt, Condition de l'homme moderne, L'animal laborans et l'œuvre",
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
  }
);
