# Site FC Soluções

Site institucional responsivo, mobile-first, para a marca FC Soluções.

## Arquivos principais

- `index.html`: página principal do site.
- `assets/css/styles.css`: estilos visuais e responsividade.
- `assets/js/app.js`: menu mobile, links de contato e formulário para WhatsApp.
- `assets/img/logo-fc-solucoes.svg`: logomarca horizontal.
- `assets/img/icon.svg`: ícone simplificado.
- `site-config.json`: configuração de referência dos canais.

## Como alterar contatos

Abra `assets/js/app.js` e altere:

```js
const CONFIG = {
  whatsappNumber: "552122335989",
  phoneDisplay: "(21) 2233-5989",
  instagramUrl: "https://www.instagram.com/fcsolucoes",
  facebookUrl: "https://www.facebook.com/fcsolucoes",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=FC%20Solu%C3%A7%C3%B5es%20Materiais%20de%20Constru%C3%A7%C3%A3o%20Maric%C3%A1%20RJ"
};
```

## Observação importante

Os links de Instagram, Facebook e Google Maps estão como base editável. Substitua pelos perfis oficiais quando forem criados ou confirmados.
