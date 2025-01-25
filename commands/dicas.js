const { SlashCommandBuilder } = require("discord.js");

const dicas = [
    "🏡 **Construa casas próximas a fontes de água** para facilitar a coleta e manter a eficiência de seus moradores.",
    "🌳 **Estabeleça vilarejos perto de florestas** para garantir madeira abundante e fácil acesso a recursos essenciais.",
    "🍂 **Mantenha alimentos estocados** para sobreviver ao inverno sem depender apenas de caça ou coleta.",
    "🌱 **Plante no início da primavera** para colher antes do inverno e garantir estoque de alimentos.",
    "🔨 **Invista em ferramentas de alta qualidade** para aumentar a produtividade de trabalhadores e economizar tempo.",
    "🧑‍🌾 **Recrute trabalhadores com habilidades específicas** para aumentar a eficiência de tarefas como agricultura, caça e carpintaria.",
    "📦 **Construa armazéns para estocar mais recursos** e evitar perda de itens devido à capacidade limitada.",
    "🏘️ **Evite construir muito próximo de outros vilarejos** para facilitar a expansão futura de sua aldeia.",
    "🎯 **Use a caça como fonte inicial de alimentos e peles**, essenciais para sobrevivência e comércio.",
    "🌻 **Planeje as plantações de acordo com as estações**. Algumas sementes só crescem em épocas específicas.",
    "🏠 **Melhore as casas de seus moradores** para aumentar sua felicidade e produtividade.",
    "🔥 **Instale fogueiras nas casas** para aquecer seus moradores durante o inverno.",
    "🚜 **Expanda gradualmente seus campos agrícolas** para evitar sobrecarga de trabalho.",
    "🍅 **Rotacione os cultivos** para manter a fertilidade do solo e evitar pragas.",
    "🐗 **Evite confrontos diretos com javalis** a menos que tenha boas armas.",
    "🐺 **Tenha cuidado ao explorar florestas à noite**, pois lobos se tornam mais agressivos.",
    "🎯 **Use arco e flecha para caçar animais de grande porte** como veados e javalis.",
    "🔪 **Recolha peles de animais caçados** para fabricar roupas e vender no mercado.",
    "🔄 **Gerencie os estoques regularmente** para evitar desperdícios e falta de itens essenciais.",
    "📊 **Compre sementes e materiais raros em vilarejos vizinhos** para expandir sua produção.",
    "💬 **Construa boas relações com os moradores** para facilitar o recrutamento.",
    "🏃 **Invista em habilidades de resistência física** para economizar energia ao explorar.",
    "🌙 **Evite viajar longas distâncias à noite**, pois a visibilidade e a segurança são reduzidas.",
    "📦 **Transporte cargas pesadas com carroças** para economizar tempo e energia.",
    "📖 **Leia os tutoriais no início do jogo para entender as mecânicas principais.**",
    "⛺ **Tenha sempre um acampamento portátil para descansar em áreas remotas.**",
    "🏹 **Crie armadilhas para capturar pequenos animais como coelhos.**",
    "⚒️ **Priorize construções essenciais** como casas e armazéns antes de investir em decorações.",
    "📦 **Construa armazéns próximos aos centros de produção** para economizar tempo.",
    "🛒 **Explore diferentes mercados para encontrar os melhores preços.**",
    "💡 **Distribua tarefas de acordo com as habilidades dos trabalhadores.**",
    "⚖️ **Equilibre a produção e o consumo de recursos** para evitar escassez.",
    "🌦️ **Preste atenção às estações do ano** para plantar e colher no momento certo.",
    "🐗 **Use armadilhas para evitar confrontos diretos com animais selvagens.**",
    "🎁 **Dê presentes simples para melhorar suas relações com NPCs.**",
    "🚧 **Desbloqueie construções gradativamente** e não se apresse para expandir muito rápido.",
    "🎯 **Use a caça como fonte inicial de alimentos e peles**, essenciais para sobrevivência e comércio.",
    "🔨 **Repare construções danificadas regularmente** para evitar perdas.",
    "📜 **Pesquise habilidades que aumentam a eficiência da produção de recursos.**",
    "💰 **Venda produtos de alto valor** como roupas e ferramentas de qualidade para obter mais lucro.",
    "🌾 **Designe trabalhadores para cuidar das plantações automaticamente**, permitindo que você foque em outras tarefas.",
    "🚪 **Feche as portas de celeiros e casas à noite** para proteger seus recursos de possíveis invasores.",
    "🛠️ **Construa oficinas de artesanato** para fabricar ferramentas e itens valiosos para comércio.",
    "🌳 **Plante árvores perto de sua vila** para garantir madeira sustentável no longo prazo.",
    "💼 **Use o sistema de impostos sabiamente**, economizando dinheiro para pagar na primavera.",
    "🌟 **Complete missões secundárias de aldeões** para ganhar reputação e recompensas úteis.",
    "📜 **Use o mapa para marcar locais importantes** como fontes de água, minas e áreas de caça.",
    "🐐 **Invista em cabras para produzir leite**, um recurso valioso para receitas e vendas.",
    "🐓 **Construa galinheiros para garantir uma fonte estável de ovos e penas.**",
    "🔧 **Conserte suas ferramentas antes que quebrem completamente** para evitar perdas de tempo.",
    "⏳ **Priorize tarefas sazonais** como colheitas e plantio no início de cada estação.",
    "👶 **Invista em relacionamentos e construa uma família** para garantir herdeiros que continuarão sua vila.",
    "🌠 **Decore sua vila com tochas e bandeiras** para aumentar a moral dos moradores.",
    "💎 **Procure por itens raros em baús escondidos ao explorar o mapa.**",
    "🪓 **Troque ferramentas quebradas com aldeões para economizar dinheiro.**",
    "🚜 **Use fertilizantes para aumentar a produção de alimentos nas plantações.**",
    "🎯 **Pratique o arco regularmente** para melhorar sua precisão e eficiência na caça.",
    "🍖 **Seque carne em racks para preservá-la durante o inverno.**",
    "🏹 **Arcos de alta qualidade permitem caçar presas maiores com mais facilidade.**",
    "🏡 **Mantenha os moradores felizes fornecendo boa comida e moradia confortável.**",
    "🛏️ **Descanse em camas confortáveis para recuperar energia rapidamente.**",
    "⛏️ **Explore cavernas profundas para encontrar ferro, essencial para ferramentas avançadas.**",
    "📜 **Desbloqueie habilidades passivas para aumentar sua eficiência em diferentes áreas.**",
    "🦌 **Use furtividade para se aproximar de veados sem assustá-los.**",
    "💰 **Crie cestos e potes para vender nos mercados próximos.**",
    "🎁 **Dar presentes aos aldeões melhora suas relações e pode garantir descontos.**",
    "🌾 **Use uma foice para colher trigo e aveia mais rápido.**",
    "🍗 **Cozinhe refeições em fogueiras para aumentar o valor nutricional dos alimentos.**",
    "🔨 **Construa um estábulo para manter cavalos e aumentar sua velocidade de viagem.**",
    "🏴 **Reclame áreas de terras férteis** para expandir suas plantações.",
    "🌌 **Viaje durante o dia para evitar encontros com animais perigosos à noite.**",
    "⚔️ **Tenha sempre uma arma de reserva** caso a sua quebre durante um confronto.",
    "🐑 **Crie ovelhas para produzir lã e fabricar roupas quentes para o inverno.**",
    "📦 **Evite acumular muitos itens inúteis; priorize recursos essenciais.**",
    "🚰 **Mantenha um balde cheio de água durante viagens longas.**",
    "🐟 **Pesque regularmente para garantir um suprimento de alimentos frescos.**",
    "🌱 **Use estrume coletado de animais para fertilizar suas plantações.**",
    "🚪 **Tranque armazéns para evitar que moradores não autorizados acessem recursos valiosos.**",
    "🌦️ **Planeje a coleta de madeira em dias secos para evitar perdas por chuvas.**",
    "📜 **Leia a descrição de cada recurso para aprender usos inesperados.**",
    "🏞️ **Construa vilas em terrenos planos para facilitar a expansão.**",
    "🏹 **Cace coelhos e raposas com armadilhas simples no início do jogo.**",
    "🐷 **Invista em porcos para produzir estrume para fertilização.**",
    "🛒 **Compre sementes raras durante as feiras anuais dos vilarejos.**",
    "🌋 **Evite áreas perigosas até ter equipamentos adequados.**",
    "🎯 **Pratique sua mira com alvos para se preparar para caçadas maiores.**",
    "🔒 **Desbloqueie habilidades avançadas de carpintaria** para construir casas melhores.",
    "🍎 **Colete frutas silvestres no verão para garantir uma boa fonte de vitaminas.**",
    "🔨 **Melhore as ferramentas de seus trabalhadores para aumentar sua eficiência.**",
];

let ultimaDica = null; // Variável para armazenar a última dica enviada

module.exports = {
    data: new SlashCommandBuilder()
        .setName("dicas")
        .setDescription("Receba uma dica aleatória sobre Medieval Dynasty!"),
    async execute(interaction) {
        let novaDica;

        // Garante que a nova dica seja diferente da última
        do {
            novaDica = dicas[Math.floor(Math.random() * dicas.length)];
        } while (novaDica === ultimaDica && dicas.length > 1);

        ultimaDica = novaDica; // Atualiza a última dica enviada

        await interaction.reply({
            content: `🔹 **Dica Aleatória:**\n${novaDica}`,
            ephemeral: true, // Define a mensagem como ephemeral
        });
    },
};