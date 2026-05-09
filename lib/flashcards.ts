export type Flashcard = {
  id: number
  front: string
  back: string
}

export type Topic = {
  slug: string
  number: string
  title: string
  description: string
  cards: Flashcard[]
}

export const topics: Topic[] = [
  {
    slug: "conceitos-basicos",
    number: "01",
    title: "Conceitos básicos de Segurança da Informação",
    description:
      "Fundamentos da SI: tríade CIA, autenticidade, não repúdio, ativos, incidentes e princípios como menor privilégio.",
    cards: [
      {
        id: 1,
        front: "O que é Segurança da Informação?",
        back: "É o conjunto de práticas para proteger informações contra acesso indevido, alteração indevida, perda, vazamento ou indisponibilidade.",
      },
      {
        id: 2,
        front: "Qual é a tríade principal da Segurança da Informação?",
        back: "Confidencialidade, Integridade e Disponibilidade.",
      },
      {
        id: 3,
        front: "O que é confidencialidade?",
        back: "Garantir que apenas pessoas, sistemas ou processos autorizados acessem determinada informação.",
      },
      {
        id: 4,
        front: "O que é integridade?",
        back: "Garantir que a informação não foi alterada, corrompida ou manipulada de forma indevida.",
      },
      {
        id: 5,
        front: "O que é disponibilidade?",
        back: "Garantir que sistemas e informações estejam acessíveis quando forem necessários.",
      },
      {
        id: 6,
        front: "O que é autenticidade?",
        back: "Garantia de que uma pessoa, sistema, documento ou mensagem é realmente quem diz ser.",
      },
      {
        id: 7,
        front: "O que é não repúdio?",
        back: "Garantia de que alguém não consiga negar uma ação realizada, como assinar digitalmente um documento.",
      },
      {
        id: 8,
        front: "O que é um ativo de informação?",
        back: "Qualquer item que tenha valor para a organização, como banco de dados, servidor, documento, código-fonte, credencial ou reputação.",
      },
      {
        id: 9,
        front: "O que é um incidente de segurança?",
        back: "Evento que compromete ou pode comprometer confidencialidade, integridade ou disponibilidade.",
      },
      {
        id: 10,
        front: "O que é um controle de segurança?",
        back: "Medida usada para reduzir riscos, como firewall, backup, MFA, política de senha ou criptografia.",
      },
      {
        id: 11,
        front: "Qual a diferença entre segurança da informação e cibersegurança?",
        back: "Segurança da informação protege a informação em qualquer meio; cibersegurança foca principalmente no ambiente digital, redes, sistemas e dispositivos.",
      },
      {
        id: 12,
        front: "Qual exemplo afeta confidencialidade?",
        back: "Vazamento de dados de clientes.",
      },
      {
        id: 13,
        front: "Qual exemplo afeta integridade?",
        back: "Alteração indevida de valores em uma planilha financeira.",
      },
      {
        id: 14,
        front: "Qual exemplo afeta disponibilidade?",
        back: "Servidor fora do ar por ataque DDoS ou falha de infraestrutura.",
      },
      {
        id: 15,
        front: 'O que significa "menor privilégio"?',
        back: "Cada usuário deve ter apenas os acessos mínimos necessários para executar sua função.",
      },
      {
        id: 16,
        front: 'O que significa "necessidade de saber"?',
        back: "Mesmo que alguém esteja dentro da organização, só deve acessar dados que realmente precisa conhecer.",
      },
      {
        id: 17,
        front: "Por que usuários também fazem parte da segurança?",
        back: "Porque erros humanos, engenharia social, senhas fracas e compartilhamento indevido podem gerar incidentes.",
      },
      {
        id: 18,
        front: "Como estudar esse tema?",
        back: "Pegue casos reais e identifique: qual ativo foi afetado, qual parte da tríade foi comprometida e qual controle poderia reduzir o risco.",
      },
    ],
  },
  {
    slug: "ameaca-vulnerabilidade-risco",
    number: "02",
    title: "Ameaça, vulnerabilidade, risco, ataque e controle",
    description:
      "Diferença entre ameaça, vulnerabilidade, risco, ataque e controle, com exemplos práticos como phishing, MITM, SQLi e DDoS.",
    cards: [
      {
        id: 1,
        front: "O que é uma ameaça?",
        back: "Algo ou alguém que pode explorar uma vulnerabilidade e causar dano a um sistema ou informação.",
      },
      {
        id: 2,
        front: "O que é uma vulnerabilidade?",
        back: "Uma falha em sistema, software, configuração, processo ou comportamento humano que pode ser explorada.",
      },
      {
        id: 3,
        front: "O que é um ataque?",
        back: "A ação realizada para explorar uma vulnerabilidade.",
      },
      {
        id: 4,
        front: "O que é risco?",
        back: "A possibilidade de uma ameaça explorar uma vulnerabilidade e causar impacto em um ativo.",
      },
      {
        id: 5,
        front: "O que é um controle?",
        back: "Medida aplicada para reduzir probabilidade ou impacto de um risco.",
      },
      {
        id: 6,
        front: "Exemplo completo: senha fraca. Qual é a vulnerabilidade?",
        back: "A senha fraca ou reutilizada.",
      },
      {
        id: 7,
        front: "Exemplo completo: senha fraca. Qual é a ameaça?",
        back: "Um atacante tentando acessar a conta.",
      },
      {
        id: 8,
        front: "Exemplo completo: senha fraca. Qual é o ataque?",
        back: "Força bruta, credential stuffing ou tentativa de login indevido.",
      },
      {
        id: 9,
        front: "Exemplo completo: senha fraca. Qual é o risco?",
        back: "Acesso indevido ao sistema ou vazamento de dados.",
      },
      {
        id: 10,
        front: "Exemplo completo: senha fraca. Qual é o controle?",
        back: "MFA, senha forte, bloqueio por tentativas, monitoramento e não reutilização de senhas.",
      },
      {
        id: 11,
        front: "O que é malware?",
        back: "Software malicioso usado para prejudicar, espionar, controlar ou comprometer sistemas.",
      },
      {
        id: 12,
        front: "O que é engenharia social?",
        back: "Manipulação psicológica para enganar pessoas e obter dados, acessos ou ações indevidas.",
      },
      {
        id: 13,
        front: "O que é ameaça interna?",
        back: "Risco causado por usuários internos, como funcionários, terceiros ou ex-colaboradores com acesso indevido.",
      },
      {
        id: 14,
        front: "O que é phishing?",
        back: "Golpe que simula comunicação legítima para roubar dados, senhas ou induzir a vítima a clicar em links maliciosos.",
      },
      {
        id: 15,
        front: "O que é MITM?",
        back: "Ataque Man-in-the-Middle, no qual o atacante intercepta e possivelmente altera a comunicação entre duas partes.",
      },
      {
        id: 16,
        front: "O que é SQL Injection?",
        back: "Ataque que explora falhas em consultas SQL para manipular ou acessar dados indevidamente.",
      },
      {
        id: 17,
        front: "O que é força bruta?",
        back: "Tentativa repetitiva de descobrir senha, token ou PIN por tentativa e erro.",
      },
      {
        id: 18,
        front: "O que é DDoS?",
        back: "Ataque distribuído que busca derrubar ou degradar um serviço por excesso de requisições/tráfego.",
      },
      {
        id: 19,
        front: "Cite vulnerabilidades comuns.",
        back: "Senhas fracas, sistemas desatualizados, configurações incorretas, ausência de criptografia e dados sensíveis expostos.",
      },
      {
        id: 20,
        front: "Como se proteger contra ameaças comuns?",
        back: "Atualizações, MFA, senhas fortes, treinamento de usuários, backups, revisão de permissões, monitoramento e auditoria.",
      },
    ],
  },
  {
    slug: "malware-credenciais",
    number: "03",
    title: "Malware e vazamento de credenciais",
    description:
      "Categorias de malware (ransomware, spyware, trojan, worm, RAT, rootkit, bootkit, adware, hijacker) e impactos de credenciais vazadas.",
    cards: [
      {
        id: 1,
        front: "O que é ransomware?",
        back: "Malware que criptografa arquivos, sistemas ou aplicações e exige resgate para restaurar o acesso.",
      },
      {
        id: 2,
        front: "O que é spyware?",
        back: "Malware voltado à espionagem e roubo de dados, como credenciais, cookies, arquivos e dados do navegador.",
      },
      {
        id: 3,
        front: "O que é trojan?",
        back: "Malware disfarçado de programa legítimo para induzir a execução pela vítima.",
      },
      {
        id: 4,
        front: "O que um trojan pode fazer depois de instalado?",
        back: "Roubar dados, baixar outros malwares, abrir backdoor ou apoiar novas fases do ataque.",
      },
      {
        id: 5,
        front: "O que é worm?",
        back: "Malware capaz de se propagar automaticamente entre máquinas, redes ou dispositivos.",
      },
      {
        id: 6,
        front: "O que é backdoor?",
        back: "Mecanismo escondido que permite acesso não autorizado a um sistema.",
      },
      {
        id: 7,
        front: "O que é RAT?",
        back: "Remote Access Trojan, malware que permite controle remoto do host pela pessoa atacante.",
      },
      {
        id: 8,
        front: "O que é rootkit?",
        back: "Malware que opera em camadas profundas, como kernel, para ocultar sua presença.",
      },
      {
        id: 9,
        front: "O que é bootkit?",
        back: "Malware que atua na cadeia de inicialização do sistema, inclusive em UEFI, dificultando a detecção.",
      },
      {
        id: 10,
        front: "O que é adware?",
        back: "Software malicioso ou indesejado que exibe anúncios invasivos, redireciona navegação ou coleta dados.",
      },
      {
        id: 11,
        front: "O que é browser hijacker?",
        back: "Malware que altera configurações do navegador, como página inicial, mecanismo de busca ou extensões.",
      },
      {
        id: 12,
        front: "Por que credenciais vazadas são perigosas?",
        back: "Porque permitem que outra pessoa acesse sistemas e dados se passando pelo usuário legítimo.",
      },
      {
        id: 13,
        front: "O que fazer após descobrir senha vazada?",
        back: "Trocar a senha, ativar MFA, não reutilizar senha, revisar acessos e monitorar atividades suspeitas.",
      },
      {
        id: 14,
        front: "Por que não reutilizar senha?",
        back: "Porque um vazamento em um serviço pode permitir acesso em outros serviços usando a mesma credencial.",
      },
      {
        id: 15,
        front: "O que é credential stuffing?",
        back: "Ataque em que credenciais vazadas são testadas automaticamente em vários serviços.",
      },
      {
        id: 16,
        front: "O que é darknet no contexto de vazamentos?",
        back: "Parte da internet usada, entre outras coisas, para circulação de bases vazadas e atividades ilícitas.",
      },
      {
        id: 17,
        front: "Ferramentas de verificação sempre dão o mesmo resultado?",
        back: "Não necessariamente, porque cada serviço consulta bases diferentes, com períodos, fontes e níveis de atualização diferentes.",
      },
      {
        id: 18,
        front: "Qual controle reduz impacto de senha vazada?",
        back: "MFA, senhas únicas, gerenciador de senhas, monitoramento de login e troca imediata da senha comprometida.",
      },
    ],
  },
  {
    slug: "classificacao-da-informacao",
    number: "04",
    title: "Classificação da Informação",
    description:
      "Níveis de classificação (Público, Interno, Confidencial, Restrito), critérios e onde aplicar a rotulação da informação.",
    cards: [
      {
        id: 1,
        front: "O que é classificação da informação?",
        back: "Processo de atribuir nível de sensibilidade a uma informação para definir como ela deve ser protegida.",
      },
      {
        id: 2,
        front: "Por que classificar informações?",
        back: "Para reduzir vazamento, padronizar manuseio, apoiar conformidade legal e definir controles mínimos.",
      },
      {
        id: 3,
        front: "Onde a classificação deve ser aplicada?",
        back: "Em documentos, planilhas, e-mails, tickets, logs, dumps, backups, prints, repositórios, anexos etc.",
      },
      {
        id: 4,
        front: "Quais critérios ajudam a classificar informação?",
        back: "Confidencialidade, integridade, disponibilidade, requisitos legais, contratos, NDAs e impacto de exposição.",
      },
      {
        id: 5,
        front: "O que é informação pública?",
        back: "Informação que pode ser divulgada sem impacto relevante, como posts de marketing ou documentação aberta.",
      },
      {
        id: 6,
        front: "O que é informação interna?",
        back: "Informação usada dentro da organização, cuja exposição gera impacto baixo ou moderado.",
      },
      {
        id: 7,
        front: "O que é informação confidencial?",
        back: "Informação sensível de negócio, cliente ou operação, cuja exposição pode causar dano relevante.",
      },
      {
        id: 8,
        front: "O que é informação restrita ou secreta?",
        back: "Informação crítica cuja exposição pode causar dano grave, financeiro, reputacional ou comprometer segurança.",
      },
      {
        id: 9,
        front: "Exemplo de informação pública.",
        back: "Missão e visão da empresa, material público de aula, posts institucionais.",
      },
      {
        id: 10,
        front: "Exemplo de informação interna.",
        back: "Roadmap interno, atas de reunião e decisões internas.",
      },
      {
        id: 11,
        front: "Exemplo de informação confidencial.",
        back: "Lista de clientes, contratos, preços não públicos, logs de autenticação.",
      },
      {
        id: 12,
        front: "Exemplo de informação restrita.",
        back: "Senhas, chaves privadas, tokens ativos, dados pessoais sensíveis e dumps de equipamentos.",
      },
      {
        id: 13,
        front: "O que significa classificar pelo conteúdo e não pelo formato?",
        back: "Uma foto, print ou mensagem pode ser mais sensível que um PDF formal, dependendo do que contém.",
      },
      {
        id: 14,
        front: "Na dúvida, como classificar?",
        back: "Usar o nível mais restritivo aplicável.",
      },
      {
        id: 15,
        front: "Quais são os passos para classificar?",
        back: "Identificar o tipo de dado, avaliar impacto se vazar, considerar LGPD/contratos/políticas, escolher nível, rotular e aplicar controles.",
      },
      {
        id: 16,
        front: "O que fazer com um token de API colado no chat?",
        back: "Classificar como restrito, revogar o token, gerar novo, revisar logs e orientar o time.",
      },
      {
        id: 17,
        front: "Uma lista com nome, e-mail, telefone e status de pagamento é o quê?",
        back: "Confidencial, pois contém dados pessoais e dados de relacionamento/negócio.",
      },
      {
        id: 18,
        front: "Por que revisar a classificação periodicamente?",
        back: "Porque o valor, sensibilidade ou contexto da informação pode mudar com o tempo.",
      },
    ],
  },
  {
    slug: "normas-iso-nist-cis-cmm-fisma",
    number: "05",
    title: "Normas ISO, NIST, CIS, CMM e FISMA",
    description:
      "Frameworks e normas: ISO 27001/27002/27005/27701, CIS Controls, modelo de maturidade CMM, NIST CSF 2.0, SP 800-53 e FISMA.",
    cards: [
      {
        id: 1,
        front: "O que é ISO/IEC 27001?",
        back: "Norma que define requisitos para implementar e manter um Sistema de Gestão de Segurança da Informação, o SGSI.",
      },
      {
        id: 2,
        front: "Qual o foco da ISO 27001?",
        back: "Gestão da segurança da informação com foco em confidencialidade, integridade e disponibilidade.",
      },
      {
        id: 3,
        front: "O que é SGSI?",
        back: "Sistema de Gestão de Segurança da Informação: conjunto de políticas, processos, controles e melhoria contínua para proteger informações.",
      },
      {
        id: 4,
        front: "Quais partes aparecem na estrutura da ISO 27001?",
        back: "Contexto, liderança, planejamento, apoio, operação, avaliação e melhoria.",
      },
      {
        id: 5,
        front: "O que é ISO/IEC 27002?",
        back: "Norma com diretrizes para selecionar e implementar controles de segurança da informação.",
      },
      {
        id: 6,
        front: "Quais são os quatro grandes temas da ISO 27002:2022?",
        back: "Organizacionais, Pessoas, Físicos e Tecnológicos.",
      },
      {
        id: 7,
        front: "Exemplo de controle organizacional.",
        back: "Política de segurança, gestão de ativos, transferência segura de informações.",
      },
      {
        id: 8,
        front: "Exemplo de controle de pessoas.",
        back: "Conscientização, responsabilidades de RH, desligamento seguro.",
      },
      {
        id: 9,
        front: "Exemplo de controle físico.",
        back: "Controle de acesso físico, segurança de escritórios e monitoramento.",
      },
      {
        id: 10,
        front: "Exemplo de controle tecnológico.",
        back: "Backup, criptografia, segurança de endpoints e gerenciamento de vulnerabilidades.",
      },
      {
        id: 11,
        front: "O que é ISO/IEC 27005?",
        back: "Norma/diretriz voltada à gestão de riscos de segurança da informação.",
      },
      {
        id: 12,
        front: "Etapas típicas da ISO 27005.",
        back: "Estabelecer contexto, identificar riscos, analisar/avaliar, tratar, aceitar/comunicar, monitorar e revisar.",
      },
      {
        id: 13,
        front: "O que é ISO/IEC 27701?",
        back: "Extensão da ISO 27001/27002 voltada à gestão da privacidade da informação e proteção de dados pessoais.",
      },
      {
        id: 14,
        front: "Qual a relação entre ISO 27701 e LGPD?",
        back: "A 27701 ajuda a estruturar controles e processos de privacidade que apoiam conformidade com leis como a LGPD.",
      },
      {
        id: 15,
        front: "Diferença entre ISO 27001 e ISO 27701.",
        back: "27001 foca segurança da informação em geral; 27701 estende para privacidade e proteção de dados pessoais.",
      },
      {
        id: 16,
        front: "O que é controlador de dados?",
        back: "Quem decide as finalidades e meios de tratamento dos dados pessoais.",
      },
      {
        id: 17,
        front: "O que é processador/operador de dados?",
        back: "Quem trata dados pessoais seguindo instruções do controlador.",
      },
      {
        id: 18,
        front: "O que são CIS Controls?",
        back: "Conjunto de controles práticos e priorizados para fortalecer a postura de cibersegurança.",
      },
      {
        id: 19,
        front: "Quantos controles o CIS apresenta no material?",
        back: "18 controles.",
      },
      {
        id: 20,
        front: "Exemplos de controles básicos do CIS.",
        back: "Inventário de hardware, inventário de software, proteção de dados, gestão de vulnerabilidades, controle administrativo e configuração segura.",
      },
      {
        id: 21,
        front: "Exemplos de controles fundamentais do CIS.",
        back: "Proteção de e-mail/navegadores, defesa contra malware, backup, controle de portas, monitoramento de logs e acesso remoto seguro.",
      },
      {
        id: 22,
        front: "Exemplos de controles organizacionais do CIS.",
        back: "Resposta a incidentes e testes de invasão/avaliação de segurança.",
      },
      {
        id: 23,
        front: "O que é CMM?",
        back: "Modelo de maturidade usado para avaliar o nível de evolução dos processos de uma organização.",
      },
      {
        id: 24,
        front: "Quais são os níveis do CMM?",
        back: "Inicial, Repetível, Definido, Gerenciado e Otimizado.",
      },
      {
        id: 25,
        front: "O que é nível Inicial no CMM?",
        back: "Processos improvisados, não documentados e dependentes de pessoas.",
      },
      {
        id: 26,
        front: "O que é nível Repetível no CMM?",
        back: "Algumas práticas básicas existem e podem ser repetidas, mas ainda com pouca formalização.",
      },
      {
        id: 27,
        front: "O que é nível Definido no CMM?",
        back: "Processos documentados, padronizados e comunicados.",
      },
      {
        id: 28,
        front: "O que é nível Gerenciado no CMM?",
        back: "Processos monitorados com métricas, indicadores e ações corretivas.",
      },
      {
        id: 29,
        front: "O que é nível Otimizado no CMM?",
        back: "Melhoria contínua com automação, inovação e uso de aprendizados.",
      },
      {
        id: 30,
        front: "O que é NIST CSF?",
        back: "Framework para organizar, comunicar e melhorar a gestão de riscos de cibersegurança.",
      },
      {
        id: 31,
        front: "Quais são as funções do NIST CSF 2.0?",
        back: "Govern, Identify, Protect, Detect, Respond e Recover.",
      },
      {
        id: 32,
        front: "O que significa Govern no NIST CSF?",
        back: "Governança, estratégia, políticas, papéis, responsabilidades e apetite de risco.",
      },
      {
        id: 33,
        front: "O que significa Identify no NIST CSF?",
        back: "Identificar ativos, riscos, dependências, processos críticos e contexto.",
      },
      {
        id: 34,
        front: "O que significa Protect no NIST CSF?",
        back: "Implementar salvaguardas para reduzir probabilidade/impacto de incidentes.",
      },
      {
        id: 35,
        front: "O que significa Detect no NIST CSF?",
        back: "Detectar eventos e anomalias de segurança.",
      },
      {
        id: 36,
        front: "O que significa Respond no NIST CSF?",
        back: "Responder a incidentes, conter danos e comunicar partes envolvidas.",
      },
      {
        id: 37,
        front: "O que significa Recover no NIST CSF?",
        back: "Restaurar operações e melhorar após incidentes.",
      },
      {
        id: 38,
        front: "O que é NIST SP 800-53?",
        back: "Catálogo detalhado de controles de segurança e privacidade.",
      },
      {
        id: 39,
        front: "O que é FISMA?",
        back: "Lei dos EUA que exige programas de segurança da informação para agências federais.",
      },
      {
        id: 40,
        front: "Diferença entre CSF, 800-53 e FISMA.",
        back: "CSF organiza e prioriza; 800-53 detalha controles; FISMA é exigência legal/governamental.",
      },
    ],
  },
  {
    slug: "etapas-pentest-reconhecimento",
    number: "06",
    title: "Etapas de pentest e reconhecimento",
    description:
      "Fases do pentest (recon, scanning, exploração, escalonamento, persistência, DoS), DNS, WHOIS, port scanner e banner grabbing.",
    cards: [
      {
        id: 1,
        front: "O que é pentest?",
        back: "Teste de invasão autorizado para identificar vulnerabilidades, validar riscos reais, medir impacto e sugerir melhorias.",
      },
      {
        id: 2,
        front: "Pentest pode ser feito em qualquer ambiente?",
        back: "Não. Precisa de autorização formal e escopo definido.",
      },
      {
        id: 3,
        front: "Qual é a primeira etapa de um pentest?",
        back: "Reconhecimento, também chamado de RECON.",
      },
      {
        id: 4,
        front: "O que é reconhecimento?",
        back: "Coleta de informações sobre o ambiente antes de qualquer tentativa de exploração.",
      },
      {
        id: 5,
        front: "O que pode ser coletado no reconhecimento?",
        back: "IPs, domínios, subdomínios, registros DNS, tecnologias usadas e estrutura da rede.",
      },
      {
        id: 6,
        front: "O que é OSINT?",
        back: "Coleta de informações em fontes abertas e públicas.",
      },
      {
        id: 7,
        front: "O que é scanning/varredura?",
        back: "Mapeamento da superfície de ataque para identificar hosts, portas, serviços, versões e sistemas operacionais.",
      },
      {
        id: 8,
        front: "O que é superfície de ataque?",
        back: "Conjunto de pontos expostos que podem ser explorados, como portas, serviços, aplicações e credenciais.",
      },
      {
        id: 9,
        front: "O que é exploração de falhas?",
        back: "Validação controlada de que uma vulnerabilidade pode ser explorada.",
      },
      {
        id: 10,
        front: "Exemplos de falhas exploráveis.",
        back: "Senhas fracas, software desatualizado, falha de autenticação, configuração incorreta e CVEs.",
      },
      {
        id: 11,
        front: "O que é escalonamento de privilégios?",
        back: "Aumentar o nível de acesso obtido inicialmente, por exemplo de usuário comum para administrador.",
      },
      {
        id: 12,
        front: "O que pode permitir escalonamento?",
        back: "Falhas locais, permissões mal configuradas, credenciais expostas e tokens armazenados.",
      },
      {
        id: 13,
        front: "O que é manutenção de acesso?",
        back: "Simulação de persistência no ambiente, como um invasor tentaria manter acesso.",
      },
      {
        id: 14,
        front: "O que deve acontecer com mecanismos de persistência após o teste?",
        back: "Devem ser removidos ao final do pentest.",
      },
      {
        id: 15,
        front: "O que é DoS/DDoS em pentest?",
        back: "Teste de resiliência contra sobrecarga, executado apenas com autorização explícita por risco de indisponibilidade.",
      },
      {
        id: 16,
        front: "O que deve conter o relatório de pentest?",
        back: "Vulnerabilidades, evidências técnicas, classificação de risco, impacto no negócio e recomendações de mitigação.",
      },
      {
        id: 17,
        front: "O que é DNS?",
        back: "Sistema que traduz nomes de domínio em endereços IP e outros registros.",
      },
      {
        id: 18,
        front: "Para que serve o registro DNS A?",
        back: "Retorna o endereço IPv4 de um domínio.",
      },
      {
        id: 19,
        front: "Para que serve o registro AAAA?",
        back: "Retorna o endereço IPv6 de um domínio.",
      },
      {
        id: 20,
        front: "Para que serve o registro MX?",
        back: "Indica servidores de e-mail do domínio.",
      },
      {
        id: 21,
        front: "Para que serve o registro NS?",
        back: "Indica servidores DNS autoritativos do domínio.",
      },
      {
        id: 22,
        front: "O que é transferência de zona DNS?",
        back: "Sincronização de registros entre servidores DNS; se mal configurada, pode expor todos os registros a terceiros.",
      },
      {
        id: 23,
        front: "Por que transferência de zona aberta é perigosa?",
        back: "Porque pode revelar mapa completo da infraestrutura DNS, como subdomínios, serviços internos e registros sensíveis.",
      },
      {
        id: 24,
        front: "O que é WHOIS?",
        back: "Serviço que mostra informações de registro de domínio, como criação, expiração, organização, contatos e DNS.",
      },
      {
        id: 25,
        front: "O que é port scanner?",
        back: "Técnica/ferramenta para descobrir portas abertas em um IP.",
      },
      {
        id: 26,
        front: "O que pode indicar uma porta aberta?",
        back: "Um serviço exposto, como HTTP, SSH, FTP, SMB ou outro.",
      },
      {
        id: 27,
        front: "O que é ping sweep?",
        back: "Técnica que envia ping para uma faixa de IPs para identificar hosts ativos.",
      },
      {
        id: 28,
        front: "O que é ARPing?",
        back: "Técnica que usa ARP para descobrir dispositivos ativos e seus endereços MAC em rede local.",
      },
      {
        id: 29,
        front: "Diferença entre Ping Sweep e ARPing.",
        back: "Ping usa ICMP e pode ser bloqueado; ARPing funciona melhor em rede local e revela MAC address.",
      },
      {
        id: 30,
        front: "ARPing funciona na internet?",
        back: "Não. Ele funciona em redes locais.",
      },
      {
        id: 31,
        front: 'O que significa uma porta "filtrada"?',
        back: "Não houve resposta clara, geralmente por firewall ou filtro de rede.",
      },
      {
        id: 32,
        front: "O que é banner grabbing?",
        back: "Técnica de obter informações de versão ou identificação de um serviço exposto.",
      },
      {
        id: 33,
        front: "Por que banner grabbing é sensível?",
        back: "Porque pode revelar versões vulneráveis de serviços.",
      },
      {
        id: 34,
        front: "Como reduzir exposição por acesso remoto?",
        back: "Usar VPN, MFA, restringir IPs, atualizar serviços, trocar portas quando fizer sentido, monitorar logs e desabilitar serviços desnecessários.",
      },
      {
        id: 35,
        front: "Qual a diferença entre varredura de vulnerabilidade e pentest?",
        back: "Varredura identifica possíveis vulnerabilidades; pentest tenta validar impacto real dentro do escopo autorizado.",
      },
    ],
  },
  {
    slug: "criptografia-basica",
    number: "07",
    title: "Criptografia básica",
    description:
      "Simétrica e assimétrica, AES, hash, assinatura/certificado digital, ICP-Brasil, PGP, esteganografia, autenticação, Kerberos, protocolos seguros e criptografia quântica.",
    cards: [
      {
        id: 1,
        front: "O que é criptografia?",
        back: "Técnica para transformar informação legível em informação protegida, geralmente usando algoritmos e chaves.",
      },
      {
        id: 2,
        front: "Qual objetivo principal da criptografia?",
        back: "Proteger a confidencialidade dos dados.",
      },
      {
        id: 3,
        front: "O que é criptografia simétrica?",
        back: "Modelo em que a mesma chave é usada para cifrar e decifrar.",
      },
      {
        id: 4,
        front: "Vantagem da criptografia simétrica.",
        back: "É rápida e eficiente para grandes volumes de dados.",
      },
      {
        id: 5,
        front: "Desvantagem da criptografia simétrica.",
        back: "A distribuição segura da chave é difícil.",
      },
      {
        id: 6,
        front: "Exemplo de algoritmo simétrico.",
        back: "AES.",
      },
      {
        id: 7,
        front: "O que é AES?",
        back: "Algoritmo de criptografia simétrica moderno, baseado no Rijndael.",
      },
      {
        id: 8,
        front: "O que é criptografia assimétrica?",
        back: "Modelo com par de chaves: uma pública e uma privada.",
      },
      {
        id: 9,
        front: "Para que serve a chave pública?",
        back: "Pode ser compartilhada e usada para criptografar dados ou verificar assinaturas.",
      },
      {
        id: 10,
        front: "Para que serve a chave privada?",
        back: "Deve ser mantida em segredo e usada para decifrar dados ou assinar digitalmente.",
      },
      {
        id: 11,
        front: "Vantagem da criptografia assimétrica.",
        back: "Não exige compartilhar previamente uma chave secreta entre as partes.",
      },
      {
        id: 12,
        front: "Desvantagem da criptografia assimétrica.",
        back: "Geralmente é mais lenta que a simétrica.",
      },
      {
        id: 13,
        front: "O que é criptografia híbrida?",
        back: "Combinação de assimétrica para trocar chave e simétrica para cifrar os dados.",
      },
      {
        id: 14,
        front: "O que é hash?",
        back: "Função que gera um resumo fixo de uma entrada, usado para verificar integridade.",
      },
      {
        id: 15,
        front: "Hash é criptografia reversível?",
        back: "Não. Hash não deve ser reversível.",
      },
      {
        id: 16,
        front: "Diferença entre criptografia e hash.",
        back: "Criptografia pode ser revertida com chave; hash serve para resumo/verificação e não deve ser revertido.",
      },
      {
        id: 17,
        front: "Para que serve hash em senhas?",
        back: "Para armazenar/verificar senhas sem guardar a senha original em texto claro.",
      },
      {
        id: 18,
        front: "O que é assinatura digital?",
        back: "Mecanismo que usa criptografia para garantir autoria, integridade e não repúdio.",
      },
      {
        id: 19,
        front: "O que a assinatura digital garante?",
        back: "Autenticidade, integridade e não repúdio.",
      },
      {
        id: 20,
        front: "O que é certificado digital?",
        back: "Documento eletrônico que vincula uma identidade a uma chave pública.",
      },
      {
        id: 21,
        front: "O que é PKI/ICP?",
        back: "Infraestrutura de Chaves Públicas, com certificados, autoridades certificadoras e validação de identidade.",
      },
      {
        id: 22,
        front: "O que é Autoridade Certificadora?",
        back: "Entidade que emite e valida certificados digitais.",
      },
      {
        id: 23,
        front: "O que é ICP-Brasil?",
        back: "Infraestrutura brasileira oficial de chaves públicas para certificados digitais.",
      },
      {
        id: 24,
        front: "O que é PGP?",
        back: "Sistema de proteção de e-mails/arquivos que usa criptografia, assinatura e modelo de confiança.",
      },
      {
        id: 25,
        front: "O que é esteganografia?",
        back: "Técnica de esconder informação dentro de outra mídia, como imagem, áudio ou texto.",
      },
      {
        id: 26,
        front: "Diferença entre criptografia e esteganografia.",
        back: "Criptografia protege o conteúdo; esteganografia esconde a existência da mensagem.",
      },
      {
        id: 27,
        front: "O que é autenticação?",
        back: "Processo de identificar e verificar se uma pessoa ou sistema é quem afirma ser.",
      },
      {
        id: 28,
        front: "Quais são fatores de autenticação?",
        back: "Algo que você sabe, algo que você tem, algo que você é e algo que você faz.",
      },
      {
        id: 29,
        front: "Exemplo de algo que você sabe.",
        back: "Senha ou PIN.",
      },
      {
        id: 30,
        front: "Exemplo de algo que você tem.",
        back: "Token, cartão ou aplicativo autenticador.",
      },
      {
        id: 31,
        front: "Exemplo de algo que você é.",
        back: "Biometria.",
      },
      {
        id: 32,
        front: "O que é autenticação mútua?",
        back: "Quando cliente e servidor verificam a identidade um do outro.",
      },
      {
        id: 33,
        front: "O que é replay attack?",
        back: "Ataque que reutiliza uma mensagem/autenticação capturada anteriormente.",
      },
      {
        id: 34,
        front: "Como reduzir replay attack?",
        back: "Usando timestamp, nonce e desafio-resposta.",
      },
      {
        id: 35,
        front: "O que é Kerberos?",
        back: "Sistema centralizado de autenticação baseado em criptografia simétrica e tickets.",
      },
      {
        id: 36,
        front: "Vantagens do Kerberos.",
        back: "Senhas não trafegam na rede, permite SSO e centraliza autenticação.",
      },
      {
        id: 37,
        front: "Limitações do Kerberos.",
        back: "Depende do servidor Kerberos e precisa de sincronização de tempo.",
      },
      {
        id: 38,
        front: "O que é identidade federada?",
        back: "Uso de uma identidade/login para acessar múltiplos sistemas.",
      },
      {
        id: 39,
        front: "Exemplos de identidade federada.",
        back: "Login com Google, Microsoft ou Facebook.",
      },
      {
        id: 40,
        front: "O que é HTTPS?",
        back: "HTTP protegido por TLS, usado para navegação segura na web.",
      },
      {
        id: 41,
        front: "Porta padrão do HTTPS.",
        back: "443.",
      },
      {
        id: 42,
        front: "O que é SSH?",
        back: "Protocolo de acesso remoto seguro a servidores.",
      },
      {
        id: 43,
        front: "Porta padrão do SSH.",
        back: "22.",
      },
      {
        id: 44,
        front: "O que é SFTP?",
        back: "Transferência segura de arquivos baseada em SSH.",
      },
      {
        id: 45,
        front: "SFTP é igual a FTPS?",
        back: "Não. SFTP usa SSH; FTPS usa TLS.",
      },
      {
        id: 46,
        front: "O que é TLS?",
        back: "Protocolo de segurança usado para proteger comunicações, base do HTTPS e outros protocolos seguros.",
      },
      {
        id: 47,
        front: "O que é IPsec?",
        back: "Conjunto de protocolos para proteger tráfego IP, muito usado em VPNs.",
      },
      {
        id: 48,
        front: "O que é DNSSEC?",
        back: "Extensão de segurança do DNS que usa assinatura digital para evitar falsificação de respostas.",
      },
      {
        id: 49,
        front: "O que é WPA3?",
        back: "Padrão moderno de segurança para redes Wi-Fi.",
      },
      {
        id: 50,
        front: "O que é teste SSL/TLS?",
        back: "Avaliação de protocolos, cifras e configurações criptográficas de um servidor.",
      },
      {
        id: 51,
        front: "O que é criptografia baseada em identidade?",
        back: "Modelo em que uma identidade, como e-mail, pode funcionar como chave pública.",
      },
      {
        id: 52,
        front: "Problema da criptografia baseada em identidade.",
        back: "A autoridade geradora pode criar chaves privadas, gerando problema de custódia de chave.",
      },
      {
        id: 53,
        front: "O que é criptografia sem certificado?",
        back: "Modelo que tenta reduzir dependência de certificados sem entregar todo o poder à autoridade central.",
      },
      {
        id: 54,
        front: "O que é criptografia quântica/pós-quântica?",
        back: "Área que estuda segurança criptográfica diante de tecnologias quânticas ou usando princípios quânticos.",
      },
    ],
  },
  {
    slug: "perimetro-de-seguranca-e-firewall",
    number: "08",
    title: "Perímetro de segurança e firewall",
    description:
      "Conceitos de perímetro, tipos de firewall, IDS/IPS, DMZ, segmentação de rede, VPN, WAF e controles de acesso remoto.",
    cards: [
      {
        id: 1,
        front: "O que é perímetro de segurança?",
        back: "Conjunto de barreiras e controles que protegem a fronteira entre redes, sistemas e ambientes.",
      },
      {
        id: 2,
        front: "O que é firewall?",
        back: "Controle que filtra tráfego de rede com base em regras.",
      },
      {
        id: 3,
        front: "O que um firewall pode controlar?",
        back: "IPs, portas, protocolos, direções de tráfego e, em firewalls avançados, aplicações e conteúdo.",
      },
      {
        id: 4,
        front: "Firewall elimina todos os riscos?",
        back: "Não. Ele reduz exposição, mas precisa de atualização, regras corretas, monitoramento e outros controles.",
      },
      {
        id: 5,
        front: "O que é firewall de filtragem de pacotes?",
        back: "Firewall que analisa informações básicas como IP, porta e protocolo.",
      },
      {
        id: 6,
        front: "O que é firewall stateful?",
        back: "Firewall que considera o estado da conexão, não apenas pacotes isolados.",
      },
      {
        id: 7,
        front: "O que é proxy firewall?",
        back: "Firewall/intermediário que recebe a requisição do cliente e a repassa ao destino.",
      },
      {
        id: 8,
        front: "O que é NGFW?",
        back: "Next-Generation Firewall, com recursos como inspeção profunda, controle de aplicação e integração com IDS/IPS.",
      },
      {
        id: 9,
        front: "O que é IDS?",
        back: "Sistema de detecção de intrusão; identifica atividade suspeita.",
      },
      {
        id: 10,
        front: "O que é IPS?",
        back: "Sistema de prevenção de intrusão; detecta e pode bloquear atividade suspeita.",
      },
      {
        id: 11,
        front: "O que é DMZ?",
        back: "Zona de rede separada para hospedar serviços expostos, reduzindo risco para a rede interna.",
      },
      {
        id: 12,
        front: "O que é segmentação de rede?",
        back: "Separação da rede em partes menores para reduzir movimentação lateral e limitar danos.",
      },
      {
        id: 13,
        front: "O que é VPN?",
        back: "Canal criptografado para comunicação segura entre usuário/rede e ambiente remoto.",
      },
      {
        id: 14,
        front: "O que é porta aberta?",
        back: "Porta de rede aceitando conexões para algum serviço.",
      },
      {
        id: 15,
        front: "Por que portas abertas são sensíveis?",
        back: "Porque podem expor serviços vulneráveis ou mal configurados.",
      },
      {
        id: 16,
        front: "O que fazer com portas desnecessárias?",
        back: "Fechar, bloquear no firewall ou remover o serviço associado.",
      },
      {
        id: 17,
        front: "Qual a relação entre firewall e pentest?",
        back: "O pentest pode avaliar se regras de firewall estão expondo portas, serviços ou comportamentos inseguros.",
      },
      {
        id: 18,
        front: "Exemplo de controle de perímetro.",
        back: "Firewall, VPN, IDS/IPS, DMZ, segmentação, WAF e regras de acesso remoto.",
      },
    ],
  },
  {
    slug: "gestao-de-riscos",
    number: "09",
    title: "Gestão de riscos",
    description:
      "Identificação, avaliação, mitigação, aceitação e transferência de riscos, ISO 27005/31000, contingência, continuidade e NIST AI RMF.",
    cards: [
      {
        id: 1,
        front: "O que é risco em segurança da informação?",
        back: "Possibilidade de uma ameaça explorar uma vulnerabilidade e causar impacto em um ativo.",
      },
      {
        id: 2,
        front: "Fórmula mental de risco.",
        back: "Ativo + ameaça + vulnerabilidade + impacto/probabilidade = risco.",
      },
      {
        id: 3,
        front: "O que é ativo?",
        back: "Algo de valor para a organização, como dados, sistemas, pessoas, processos, reputação ou infraestrutura.",
      },
      {
        id: 4,
        front: "O que é probabilidade?",
        back: "Chance de um risco acontecer.",
      },
      {
        id: 5,
        front: "O que é impacto?",
        back: "Consequência caso o risco aconteça.",
      },
      {
        id: 6,
        front: "O que é risco inerente?",
        back: "Risco existente antes da aplicação de controles.",
      },
      {
        id: 7,
        front: "O que é risco residual?",
        back: "Risco que permanece depois da aplicação de controles.",
      },
      {
        id: 8,
        front: "O que é identificação de riscos?",
        back: "Levantamento de ativos, ameaças, vulnerabilidades e eventos possíveis.",
      },
      {
        id: 9,
        front: "O que é avaliação de riscos?",
        back: "Análise de probabilidade, impacto e prioridade dos riscos.",
      },
      {
        id: 10,
        front: "O que é mitigação de risco?",
        back: "Aplicar controles para reduzir probabilidade ou impacto.",
      },
      {
        id: 11,
        front: "O que é aceitação de risco?",
        back: "Decidir conscientemente conviver com o risco residual.",
      },
      {
        id: 12,
        front: "O que é transferência de risco?",
        back: "Transferir parte do impacto para terceiros, como seguro ou contrato.",
      },
      {
        id: 13,
        front: "O que é evitar risco?",
        back: "Deixar de realizar uma atividade que gera risco inaceitável.",
      },
      {
        id: 14,
        front: "O que é controle de risco?",
        back: "Medida técnica, administrativa ou física usada para reduzir risco.",
      },
      {
        id: 15,
        front: "O que é monitoramento de risco?",
        back: "Acompanhamento contínuo dos riscos e da eficácia dos controles.",
      },
      {
        id: 16,
        front: "O que é comunicação de riscos?",
        back: "Informar partes interessadas sobre riscos, decisões, impactos e responsabilidades.",
      },
      {
        id: 17,
        front: "O que é plano de resposta a riscos?",
        back: "Plano com ações, responsáveis e procedimentos para lidar com riscos materializados.",
      },
      {
        id: 18,
        front: "O que é cultura de riscos?",
        back: "Mentalidade organizacional em que pessoas entendem, comunicam e tratam riscos de forma contínua.",
      },
      {
        id: 19,
        front: "O que é contingência?",
        back: "Preparação para agir quando um incidente ou falha acontece.",
      },
      {
        id: 20,
        front: "O que é continuidade de negócios?",
        back: "Capacidade de manter ou restaurar operações essenciais após incidente.",
      },
      {
        id: 21,
        front: "Diferença entre contingência e continuidade.",
        back: "Contingência é o plano de resposta; continuidade é manter/restaurar a operação crítica.",
      },
      {
        id: 22,
        front: "Exemplo de risco com banco de dados.",
        back: "Ativo: banco de dados; ameaça: atacante; vulnerabilidade: permissão mal configurada; impacto: vazamento; controle: revisão de acesso e criptografia.",
      },
      {
        id: 23,
        front: "Exemplo de risco com computador de usuário.",
        back: "Ativo: notebook; ameaça: malware; vulnerabilidade: falta de antivírus; impacto: paralisação; controle: antimalware e atualização.",
      },
      {
        id: 24,
        front: "Exemplo de risco com rede interna.",
        back: "Ativo: rede; ameaça: DDoS; vulnerabilidade: firewall desatualizado; impacto: indisponibilidade; controle: atualizar e revisar firewall.",
      },
      {
        id: 25,
        front: "O que é ISO 27005?",
        back: "Diretriz para gestão de riscos de segurança da informação.",
      },
      {
        id: 26,
        front: "O que é ISO 31000?",
        back: "Norma geral de gestão de riscos, aplicável a diferentes áreas, não só segurança da informação.",
      },
      {
        id: 27,
        front: "Como a IA entra em gestão de riscos?",
        back: "IA pode gerar riscos de vazamento, decisões enviesadas, uso indevido, falta de explicabilidade e exposição de dados.",
      },
      {
        id: 28,
        front: "O que é NIST AI RMF?",
        back: "Framework do NIST para gerenciar riscos associados a sistemas de inteligência artificial.",
      },
      {
        id: 29,
        front: "Quais são as funções do NIST AI RMF?",
        back: "Govern, Map, Measure e Manage.",
      },
      {
        id: 30,
        front: "O que significa Govern no AI RMF?",
        back: "Definir governança, políticas, responsabilidades e cultura de gestão de riscos de IA.",
      },
      {
        id: 31,
        front: "O que significa Map no AI RMF?",
        back: "Mapear contexto, finalidade, partes impactadas e riscos do sistema de IA.",
      },
      {
        id: 32,
        front: "O que significa Measure no AI RMF?",
        back: "Medir, avaliar e testar riscos, desempenho, viés, segurança e confiabilidade.",
      },
      {
        id: 33,
        front: "O que significa Manage no AI RMF?",
        back: "Priorizar, tratar, monitorar e documentar riscos de IA.",
      },
      {
        id: 34,
        front: "Exemplo de risco de IA em empresa.",
        back: "Chatbot interno revelando informações confidenciais por falta de controle de acesso e classificação de dados.",
      },
      {
        id: 35,
        front: "Controles para risco de IA.",
        back: "Controle de acesso, anonimização, classificação de dados, logging, revisão humana, testes e políticas de uso.",
      },
    ],
  },
]

export function getTopicBySlug(slug: string): Topic | undefined {
  return topics.find((t) => t.slug === slug)
}
