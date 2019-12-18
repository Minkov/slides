Reveal.addEventListener('ready', function (event) {
    hljs.configure({
        tabReplace: '    ',
    });

    $('pre code').each(function (_, block) {
        hljs.highlightBlock(block);
    });

    $('head title').html(
        $("h1").eq(0).html()
    );

    window.setupLiAnimations();
});
Reveal.initialize({
    controls: true,
    progress: true,
    history: true,
    center: true,

    transition: 'slide',
    dependencies: [{
        src: '/static/lib/js/classList.js',
        condition: function () {
            return !document.body.classList;
        }
    },
    {
        src: '/static/plugin/markdown/marked.js',
        condition: function () {
            return !!document.querySelector('[data-markdown]');
        }
    },
    {
        src: '/static/plugin/markdown/markdown.js',
        condition: function () {
            return !!document.querySelector('[data-markdown]');
        }
    },
    {
        src: '/static/plugin/highlight/highlight.js',
        // async: true,
        callback: function () {

        }
    },
    {
        src: '/static/plugin/search/search.js',
        async: true
    },
    {
        src: '/static/plugin/zoom-js/zoom.js',
        async: true
    },
    {
        src: '/static/plugin/notes/notes.js',
        async: true
    },
    {
        src: '/static/lib/js/line-numbers.js'
    }
    ]
});