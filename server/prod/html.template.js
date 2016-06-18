export default ({title, description, image, html}) => (
`
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="chrome=1">
  <meta property="og:title" content="${title}" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta property="og:description" content="${description}" />
  <meta property="og:image" content="${image}" />
  <title>${title}</title>
  <link href="/styles/vendor.css" type="text/css" rel="stylesheet"></link>
  <link href="/styles/main.css" type="text/css" rel="stylesheet"></link>
</head>
<body>
  <div id="side_bar"></div>
  <div id="content">${html}</div>
  <div id="nation_modal" class="ui dimmer modals page"></div>
  <script type="text/javascript" src="/scripts/vendor.bundle.js"></script>
  <script type="text/javascript" src="/scripts/bundle.js"></script>
  <script type="text/javascript">
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-61509591-1', 'auto');
    ga('send', 'pageview');
  </script>
</body>
</html>`
);
