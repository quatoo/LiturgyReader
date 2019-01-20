import { View } from './View';
import { Boletim } from '../model/Boletim';
import { formatDate } from '../helpers/Utils'

export class DocView extends View<Boletim> {
    template(model: Boletim): string {
        return `
            <div class="row pt-2">
                <div class="col-3 pt-2">
                    <img class="img-fluid" src="IPIB_logo_small.jpg">
                </div>
                <div class="col-9 pl-0">
                    <center class="head4phone">
                        <p class="title">3ª IGREJA PRESBITERIANA INDEPENDENTE DE SANTO ANDRÉ</p>
                        <p>Rua Xavantes, 399 – Vila Pires – Santo André</p>
                        <p>Organizada em 29 de Dezembro de 1985</p>
                        <p>Pastor: Rev. Gerson David Ferreira</p>
                        <p>(11) 96341-0991 ou (11) 98229-7127 (WhatsApp)</p>
                        <p><a class="text-decoration-none" href="https://www.facebook.com/3ipisa/">https://www.facebook.com/3ipisa/</a></p>
                    </center>
                </div>
            </div>
            <div class="row pt-3">
                <div class="col-12">
                    <center class="border">
                        <span>${formatDate(model.Dia)} - ${model.CalendarioLiturgico}</span>
                    </center>
                </div>
            </div>

            <div class="row pt-4 pb-2">
                <div class="col-12 pb-2">
                    <div class="border pl-2">
                        <span>${model.ChamadaReuniao}</span>
                    </div>
                </div>
                <div class="col-12">
                    <span><strong>&#9662; Prelúdio </strong> ${model.Preludio}</span>
                </div>
                <div class="col-12">
                    <span><strong>&#9652; Chamada à Adoração </strong> ${model.ChamadaAdoracao}</span>
                </div>
                <div class="col-12">
                    <span><strong>&#9652; Oração de invocação </strong> ${model.OracaoInvocacao}</span>
                </div>
                <div class="col-12">
                    <span><strong>&#9652; Cântigo Congregacional </strong> ${model.CantigoCongregacional}</span>
                </div>
            </div>

            <div class="row pt-4 pb-2">
                <div class="col-12 pb-2">
                    <div class="border pl-2">
                        <span>${model.TituloConfissao}</span>
                    </div>
                </div>
                <div class="col-12">
                    <span><strong>&#9662; Chamada à Confissão </strong> ${model.ChamadaConfissao}</span>
                </div>
                <div class="col-12">
                    <span><strong>&#9662; Oração Silenciosa </strong></span>
                </div>
                <div class="col-12">
                    <span><strong>&#9662; Responso </strong> ${model.ResponsoConfissao}</span>
                </div>
                <div class="col-12">
                    <span><strong>&#9662; Oração de Confissao </strong> ${model.OracaoConfissao}</span>
                </div>
                <div class="col-12">
                    <span><strong>&#9662; Declaração de Perdão </strong> ${model.DeclaracaoPerdao}</span>
                </div>
            </div>

            <div class="row pt-4 pb-2">
                <div class="col-12 pb-2">
                    <div class="border pl-2">
                        <span>${model.TituloLouvor}</span>
                    </div>
                </div>
                <div class="col-12">
                    <span><strong>&#9652; Convite ao Louvor e Saudação da Paz </strong> ${model.ConviteLouvorSaudacao}</span>
                </div>
                <div class="col-12">
                    <span><strong>&#9652; Louvor Comunitário: </strong> ${model.LouvorComunitario}</span>
                </div>
                <div class="col-12">
                    <span><strong>&#9652; Oração pelas Crianças </strong> ${model.OracaoCriancas}</span>
                </div>
            </div>

            <div class="row pt-4 pb-2">
                <div class="col-12 pb-2">
                    <div class="border pl-2">
                        <span>${model.TituloIluminacao}</span>
                    </div>
                </div>
                <div class="col-12">
                    <span><strong>&#9662; Leitura do Antigo Testamento: </strong> ${model.LeituraAntigoTestamento}</span>
                </div>
                <div class="col-12">
                    <span><strong>&#9662; Responso: </strong> ${model.ResponsoAntigoTestamento}</span>
                </div>
                <div class="col-12">
                    <span><strong>&#9662; Leitura do Novo Testamento: </strong> ${model.LeituraNovoTestamento}</span>
                </div>
                <div class="col-12">
                    <span><strong>&#9662; Responso: </strong> ${model.ResponsoNovoTestamento}</span>
                </div>
                <div class="col-12">
                    <span><strong>&#9662; Proclamação da Palavra: </strong> ${model.ProclamacaoPalavra}</span>
                </div>
                <div class="col-12">
                    <span> ${model.AfirmacaoFe}</span>
                </div>
                <div class="col-12">
                    <span><strong>&#9662; Ofertório: </strong> ${model.OfertorioTexto}</span>
                </div>
                <div class="col-12">
                    <span><strong>&#9662; Cântico Congregacional: </strong> ${model.OfertorioCantico}</span>
                </div>
                <div class="col-12">
                    <span><strong>&#9662; Oração de Intercessão: </strong> ${model.OracaoIntercessao}</span>
                </div>
            </div>

            <div class="row pt-4 pb-2">
                <div class="col-12 pb-2">
                    <div class="border pl-2">
                        <span>${model.TituloEnvio}</span>
                    </div>
                </div>
                <div class="col-12">
                    <span><strong>&#9652; Envio </strong> ${model.EnvioTexto}</span>
                </div>
                <div class="col-12">
                    <span><strong>&#9652; Cãntico Congregacional: </strong> ${model.EnvioCanticoCongregacional}</span>
                </div>
                <div class="col-12">
                    <span><strong>&#9652; Oração Final: </strong> ${model.OracaoFinalTexto}</span>
                </div>
                <div class="col-12">
                    <span><strong>&#9652; Bênção: </strong> ${model.BencaoTexto}</span>
                </div>
                <div class="col-12">
                    <span><strong>&#9652; </strong> ${model.AmemTexto}</span>
                </div>
                <div class="col-12">
                    <span><strong>&#9662; Poslúdio</strong> ${model.Posludio}</span>
                </div>
            </div>
        `
    }
}
