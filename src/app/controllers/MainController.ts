import { DocView } from '../views/index';
import { Boletim } from '../model/Boletim';

export class MainController {

    private _mainView = new DocView('#mainView');

    private _boletim = new Boletim();

    constructor() {

        this._boletim.Dia = new Date();
        this._boletim.CalendarioLiturgico = 'Batismo de Jesus';

        this._boletim.ChamadaReuniao = 'REUNIMO-NOS EM NOME DE DEUS';
        this._boletim.Preludio = '(Silêncio e oração)';
        this._boletim.ChamadaAdoracao = ' - <i>Lucas 9:35</i> <br/><strong><i>Oficiante</i></strong>: "Da nuvem veio uma voz dizendo: Este é o Meu Filho, o meu eleitoç a Ele ouvi."';
        this._boletim.OracaoInvocacao = ''; // nao colocar nada quando nao precisa
        this._boletim.CantigoCongregacional = '<br/><strong>C.T.P. 15 "Como água cristalina"</strong>';

        // Confissao
        this._boletim.TituloConfissao = 'RECONHECEMOS QUE SOMOS PECADORES';
        this._boletim.ChamadaConfissao = ' - <i>Romanos 7:15</i> <br/><strong><i>Oficiante</i></strong>: "Oh Deus, o meu Sacrificio eh um grande lorem ipsum... the quick brown fox jumps over the lazy dog, e mais algum lorem ipsum de conteudo grande"';
        this._boletim.ResponsoConfissao = '<br/><strong>C.T.P. 45 "Suplica de Consagracao"</strong>';
        this._boletim.OracaoConfissao = '';
        this._boletim.DeclaracaoPerdao = ' - <i>Salmo 51:17</i> <br/><strong><i>Oficiante</i></strong>: "Oh Deus, o meu Sacrificio eh um grande lorem ipsum... the quick brown fox jumps over the lazy dog, e mais algum lorem ipsum de conteudo grande"';

        // Louvor
        this._boletim.TituloLouvor = 'LOUVAMOS A DEUS EM COMUNIDADE';
        this._boletim.ConviteLouvorSaudacao = '<br/><strong><i>Oficiante</i></strong>: Visto que o Senhor Jesus abriu seu coração para nós, vamos abrir nossos corações uns para os outros e Deus será glorificado. A Paz de Cristo esteja com todos nós.';
        this._boletim.LouvorComunitario = '<strong>C.T.P. 16, C.T.P. 114</strong>'
        this._boletim.OracaoCriancas = '';

        // Palavra
        this._boletim.TituloIluminacao = `A PALAVRA NOS ILUMINA`
        this._boletim.OracaoIluminacao = '';
        this._boletim.LeituraAntigoTestamento = 'Salmo 29';
        this._boletim.ResponsoAntigoTestamento = '<br/><strong>C.T.P. 100 "Invocacao para a Leitura Biblica" - estrofe 1</strong>';
        this._boletim.LeituraNovoTestamento = 'Mateus 3:13-17';
        this._boletim.ResponsoNovoTestamento = '<br/><strong>C.T.P. 100 "Invocacao para a Leitura Biblica" - estrofe 2</strong>';
        this._boletim.ProclamacaoPalavra = 'Rev. Gerson David Ferreira';
        this._boletim.AfirmacaoFe = '<strong>Afirmação de Fé Brasileira <br/> <i>Todos</i>:</strong> Cremos em um soh Deus isto que o Senhor Jesus abriu seu coração para nós, vamos abrir nossos corações';
        this._boletim.OfertorioTexto = 'I João 3:23';
        this._boletim.OfertorioCantico = '<strong>C.T.P. 241 "Vaso de Bencao"</strong>';
        this._boletim.OracaoIntercessao = '';

        // Envio
        this._boletim.TituloEnvio = 'SERVIMOS A DEUS NO MUNDO';
        this._boletim.EnvioTexto = ' - <i>Joao 3:23</i> <br/><strong><i>Oficiante</i></strong>: "Oh Deus, o meu Sacrificio eh um grande lorem ipsum... the quick brown fox jumps over the lazy dog, e mais algum lorem ipsum de conteudo grande"';' - <i>Romanos 7:15</i> <br/><strong><i>Oficiante</i></strong>: "Oh Deus, o meu Sacrificio eh um grande lorem ipsum... the quick brown fox jumps over the lazy dog, e mais algum lorem ipsum de conteudo grande"';
        this._boletim.EnvioCanticoCongregacional = '<br/><strong>C.T.P. 241 "Vaso de Bencao"</strong>';
        this._boletim.OracaoFinalTexto = '';
        this._boletim.BencaoTexto = '';
        this._boletim.AmemTexto = '<strong>Amém</strong>';
        this._boletim.Posludio = '';

        this._mainView.update(this._boletim);
    }

}