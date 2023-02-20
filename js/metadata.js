// create and append meta tags
const head = document.getElementsByTagName('head')[0];

const charsetMeta = document.createElement('meta');
charsetMeta.setAttribute('charset', 'UTF-8');
head.appendChild(charsetMeta);

const viewportMeta = document.createElement('meta');
viewportMeta.setAttribute('name', 'viewport');
viewportMeta.setAttribute('content', 'width=device-width, initial-scale=1.0');
head.appendChild(viewportMeta);

const ieCompatMeta = document.createElement('meta');
ieCompatMeta.setAttribute('http-equiv', 'X-UA-Compatible');
ieCompatMeta.setAttribute('content', 'ie=edge');
head.appendChild(ieCompatMeta);

const titleMeta = document.createElement('title');
titleMeta.textContent = 'Arena Breakout Wiki';
head.appendChild(titleMeta);

const descriptionMeta = document.createElement('meta');
descriptionMeta.setAttribute('name', 'description');
descriptionMeta.setAttribute('content', 'Arena Breakout Wiki es un proyecto impulsado por la comunidad realizado por NoCapxGaming.');
head.appendChild(descriptionMeta);

const ogTitleMeta = document.createElement('meta');
ogTitleMeta.setAttribute('property', 'og:title');
ogTitleMeta.setAttribute('content', 'Arena Breakout Wiki');
head.appendChild(ogTitleMeta);

const ogDescriptionMeta = document.createElement('meta');
ogDescriptionMeta.setAttribute('property', 'og:description');
ogDescriptionMeta.setAttribute('content', 'Arena Breakout Wiki es un proyecto impulsado por la comunidad realizado por NoCapxGaming.');
head.appendChild(ogDescriptionMeta);

const ogTypeMeta = document.createElement('meta');
ogTypeMeta.setAttribute('property', 'og:type');
ogTypeMeta.setAttribute('content', 'website');
head.appendChild(ogTypeMeta);

const ogUrlMeta = document.createElement('meta');
ogUrlMeta.setAttribute('property', 'og:url');
ogUrlMeta.setAttribute('content', 'https://www.arenabreakout.wiki');
head.appendChild(ogUrlMeta);

const ogImageMeta = document.createElement('meta');
ogImageMeta.setAttribute('property', 'og:image');
ogImageMeta.setAttribute('content', 'https://www.arenabreakout.wiki/images/thumbnail.jpg');
head.appendChild(ogImageMeta);

const ogImageAltMeta = document.createElement('meta');
ogImageAltMeta.setAttribute('property', 'og:image:alt');
ogImageAltMeta.setAttribute('content', 'Arena Breakout Logo');
head.appendChild(ogImageAltMeta);

const twitterSiteMeta = document.createElement('meta');
twitterSiteMeta.setAttribute('name', 'twitter:site');
twitterSiteMeta.setAttribute('content', 'Arena Breakout WIKI');
head.appendChild(twitterSiteMeta);

const twitterTitleMeta = document.createElement('meta');
twitterTitleMeta.setAttribute('name', 'twitter:title');
twitterTitleMeta.setAttribute('content', 'Arena Breakout WIKI Oficial');
head.appendChild(twitterTitleMeta);

const twitterDescMeta = document.createElement('meta');
twitterDescMeta.setAttribute('name', 'twitter:description');
twitterDescMeta.setAttribute('content', 'Arena Breakout WIKI LATAM Oficial');
head.appendChild(twitterDescMeta);

const twitterCardMeta = document.createElement('meta');
twitterCardMeta.setAttribute('name', 'twitter:card');
twitterCardMeta.setAttribute('content', 'summary_large_image');
head.appendChild(twitterCardMeta);

const twitterImgMeta = document.createElement('meta');
twitterImgMeta.setAttribute('name', 'twitter:image:src');
twitterImgMeta.setAttribute('content', 'https://www.arenabreakout.wiki/images/thumbnail.jpg');
head.appendChild(twitterImgMeta);

const ogImageWidthMeta = document.createElement('meta');
ogImageWidthMeta.setAttribute('property', 'og:image:width');
ogImageWidthMeta.setAttribute('content', '1200');
head.appendChild(ogImageWidthMeta);

const ogImageHeightMeta = document.createElement('meta');
ogImageHeightMeta.setAttribute('property', 'og:image:height');
ogImageHeightMeta.setAttribute('content', '630');
head.appendChild(ogImageHeightMeta);

const themeColorMeta = document.createElement('meta');
themeColorMeta.setAttribute('name', 'theme-color');
themeColorMeta.setAttribute('content', '#FD0054');
head.appendChild(themeColorMeta);

// create and append link tags
const faviconLink = document.createElement('link');
faviconLink.setAttribute('rel', 'icon');
faviconLink.setAttribute('type', 'image/x-icon');
faviconLink.setAttribute('href', 'https://www.arenabreakout.wiki/images/favicon.ico');
head.appendChild(faviconLink);

const cssLink = document.createElement('link');
cssLink.setAttribute('rel', 'stylesheet');
cssLink.setAttribute('type', 'text/css');
cssLink.setAttribute('href', 'https://www.arenabreakout.wiki/css/style.css');
head.appendChild(cssLink);

const fontawesomeLink = document.createElement('link');
fontawesomeLink.setAttribute('rel', 'stylesheet');
fontawesomeLink.setAttribute('href', 'https://use.fontawesome.com/releases/v5.15.1/css/all.css');
fontawesomeLink.setAttribute('integrity', 'sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp');
fontawesomeLink.setAttribute('crossorigin', 'anonymous');
head.appendChild(fontawesomeLink);
