const Router = require('koa-router');
var router = new Router();

const Pug = require('koa-pug');
var pug = new Pug({
    viewPath: './web',
    noCache: process.env.NODE_ENV === 'development',
});

router.get('index.html', (ctx) => ctx.redirect('/'))
router.get('/', (ctx) => {
    ctx.body = pug.render('index');
});

router.get('bot', (ctx) => {
    // var bots = [];
    var bots = [{name: 'lolo'}, {name: 'lala'}];
    console.log('bot-render', process.env);
    ctx.body = pug.render('bot/template', {bots});
});

module.exports = router;
