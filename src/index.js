//const {Client, LocalAuth} = require('whatsapp-web-js');
import { Client, LocalAuth } from "whatsapp-web.js";

const client = new Client({ authStrategy: new LocalAuth() });

client.initialize();

client.on('loading_screen', (percent, message) => {
    console.log('CARREGANDO WPP WEB', percent, message);
});

client.on('authenticated', () => {
    console.log('AUTENTICADO');
});

client.on('auth_failure', msg => {
    
    console.error('FALHA DE AUTENTICACAO', msg);
});

