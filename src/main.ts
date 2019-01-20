import 'bootstrap/dist/css/bootstrap.css';
import * as OfflinePluginRuntime from 'offline-plugin/runtime';

import { MainController } from './app/controllers/MainController';

// 

import './app/css/common.css';

// arquivos do app
import './favicon.ico';
import './app/img/IPIB_logo_small.jpg'

const controller = new MainController();

$('#recarregarApp').on('click', function (){
    window.location.reload(true);
});

$('[data-toggle="offcanvas"]').on('click', function () {
    $('.offcanvas-collapse').toggleClass('open')
});

OfflinePluginRuntime.install();
