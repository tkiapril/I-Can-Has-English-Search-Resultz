browser.runtime.onStartup.addListener(() => browser.webRequest.onBeforeRequest.addListener(e => {
if (e.method != 'GET' || e.url.includes('lr=lang_en') || !e.url.includes("?q=")) return {};
var pos = e.url.indexOf("&q=") + 1 || e.url.indexOf('?q=') + 1
q = e.url.substr(pos + 2)
if (q.includes('&')) { q = q.substr(0, q.indexOf('&')) }
if (!/^[\x00-\x24F]*$/.test(decodeURIComponent(q))) return {};
pos = e.url.indexOf("&lr=") + 1 || e.url.indexOf('?lr=') + 1
if (pos) {
var rest = e.url.substr(pos)
if (rest.includes('&')) { rest = rest.substr(rest.indexOf('&')) } else { rest = "" }
e.url = e.url.substr(0,pos) + "lr=lang_en" + rest
} else {
e.url = e.url + "&lr=lang_en"
}
return {redirectUrl: e.url};
}, {urls: ['ae', 'am', 'as', 'at', 'az', 'ba', 'be', 'bg', 'bi', 'bs', 'ca', 'cd', 'cg', 'ch', 'ci', 'cl', 'co.bw', 'co.ck', 'co.cr', 'co.hu', 'co.id', 'co.il', 'co.im', 'co.in', 'co.je', 'co.jp', 'co.ke', 'co.kr', 'co.ls', 'co.ma', 'co.nz', 'co.th', 'co.ug', 'co.uk', 'co.uz', 'co.ve', 'co.vi', 'co.za', 'co.zm', 'com', 'com.af', 'com.ag', 'com.ar', 'com.au', 'com.bd', 'com.bo', 'com.br', 'com.bz', 'com.co', 'com.cu', 'com.do', 'com.ec', 'com.eg', 'com.et', 'com.fj', 'com.gi', 'com.gt', 'com.hk', 'com.jm', 'com.kw', 'com.ly', 'com.mt', 'com.mx', 'com.my', 'com.na', 'com.nf', 'com.ni', 'com.np', 'com.om', 'com.pa', 'com.pe', 'com.ph', 'com.pk', 'com.pr', 'com.py', 'com.qa', 'com.sa', 'com.sb', 'com.sg', 'com.sv', 'com.tj', 'com.tr', 'com.tw', 'com.ua', 'com.uy', 'com.uz', 'com.vc', 'com.vn', 'cz', 'de', 'dj', 'dk', 'dm', 'ee', 'es', 'fi', 'fm', 'fr', 'gg', 'gl', 'gm', 'gr', 'hn', 'hr', 'ht', 'hu', 'ie', 'is', 'it', 'jo', 'kg', 'kz', 'li', 'lk', 'lt', 'lu', 'lv', 'md', 'mn', 'ms', 'mu', 'mw', 'nl', 'no', 'nr', 'nu', 'pl', 'pn', 'pt', 'ro', 'ru', 'rw', 'sc', 'se', 'sh', 'si', 'sk', 'sm', 'sn', 'tm', 'to', 'tp', 'tt', 'tv', 'uz', 'vg', 'vu', 'ws'].map(e => '://www.google.' + e + '/search?*').flatMap(e => ['https' + e, 'http' + e]), types: ['main_frame']}, ['blocking']))
