<?php
$uri = substr($_SERVER['REQUEST_URI'], 1);
if(strlen($uri) > 1)
{	
  	header('Location: /');
	exit;
}
?>
<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
    <title>BlueShark Noleggio</title>
    <link rel="stylesheet" href="static/style/app.css?v4" />
    <script src="static/js/app.js?v4"></script>
	<link rel="icon" type="image/x-icon" href="static/images/favicon.ico" />
</head>
<body>
    <!-- modal area -->
    <div --ki-m-target></div>

    <div class="header">
        <div class="section-wrapper0">
            <div class="mini-logo"></div>
        </div>
    </div>
    <div class="content">
        <div class="section-wrapper">
            <div class="sections">
                <div class="section">
                    
                    <div class="logo-box logo-mobile">
                        <div class="logo default-background-c"></div>
                    </div>
                   <!-- 
                    <div class="label-desc">
                        <span><span class="bold">Noleggio Barche - Blueshark Noleggio |</span> Baia del Campese, Isola del Giglio (GR)</span>
                    </div>
                    -->
                </div>
        
                <div class="section top">
                    
                    <div class="logo-box desktop">
                        <div class="logo default-background-c"></div>
                    </div>
                    
                    <div class="slider-wrapper">
  						<div class="slider-bg"></div>
                        <div class="slider">
                            <div class="img">
                                <div class="static-img default-background-c" style="background-image: url('static/images/baia.png');"></div>
                                <div class="description"><span>Baia del Campese, Isola del Giglio (Gr) - Italia</span></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="section content">
                    <div class="headline">
                        <h1>Noleggia le nostre barche</h1>
                    </div>
                    <div class="boats-list row-flex">
                        <div class="boat debug-border">
                            <div class="boat-content">
                                <div class="preview">
                                    <div class="boat-img debug-border default-background-c"
                                        style="background-image: url('/static/images/boats/boat-1.jpg');">
                                    </div>
                                </div>
                                <div class="boat-info">
                                    <div class="boat-name">
                                        <span --ki-m-ref="title1">Nome Barca</span>
                                    </div>
                                    <div class="boat-description">
                                        <span --ki-m-ref="desc1">Comoda barca per persone</span>
                                    </div>
                                </div>
                                
                                <div class="button">
                                    <button title="Scopri di più" --ki-m-attach-event --ki-m-title="Nome Barca" --ki-m-desc="Comoda barca per persone" --ki-m-img="/static/images/boats/boat-1.jpg">Scopri di più</button>
                                </div>
                            </div>
                        </div>
                        <div class="boat debug-border">
                            <div class="boat-content">
                                <div class="preview">
                                    <div class="boat-img debug-border default-background-c"
                                        style="background-image: url('/static/images/boats/boat-2.jpg')">
                                    </div>
                                </div>
                                <div class="boat-info">
                                    <div class="boat-name">
                                        <span --ki-m-ref="title2">Nome Barca</span>
                                    </div>
                                    <div class="boat-description">
                                        <span --ki-m-ref="desc2">Comoda barca per persone</span>
                                    </div>
                                </div>
                                <div class="button">
                                    <button title="Scopri di più" --ki-m-attach-event --ki-m-title="Nome Barca" --ki-m-desc="Comoda barca per persone" --ki-m-img="/static/images/boats/boat-2.jpg">Scopri di più</button>
                                </div>
                            </div>
                        </div>
                        <div class="boat debug-border">
                            <div class="boat-content">
                                <div class="preview">
                                    <div class="boat-img debug-border default-background-c"
                                        style="background-image: url('/static/images/boats/boat-3.jpg')">
                                    </div>
                                </div>
                                <div class="boat-info">
                                    <div class="boat-name">
                                        <span --ki-m-ref="title3">Nome Barca</span>
                                    </div>
                                    <div class="boat-description">
                                        <span --ki-m-ref="desc3">Comoda barca per persone</span>
                                    </div>
                                </div>
                                <div class="button">
                                    <button title="Scopri di più" --ki-m-attach-event --ki-m-title="Nome Barca" --ki-m-desc="Comoda barca per persone" --ki-m-img="/static/images/boats/boat-3.jpg">Scopri di più</button>
                                </div>
                            </div>
                        </div>
                        <div class="boat debug-border">
                            <div class="boat-content">
                                <div class="preview">
                                    <div class="boat-img debug-border default-background-c"
                                        style="background-image: url('/static/images/boats/boat-4.jpg')">
                                    </div>
                                </div>
                                <div class="boat-info">
                                    <div class="boat-name">
                                        <span --ki-m-ref="title4">Nome Barca</span>
                                    </div>
                                    <div class="boat-description">
                                        <span --ki-m-ref="desc4">Comoda barca per persone</span>
                                    </div>
                                </div>
                                <div class="button">
                                    <button title="Scopri di più" --ki-m-attach-event --ki-m-title="Nome Barca" --ki-m-desc="Comoda barca per persone" --ki-m-img="/static/images/boats/boat-4.jpg">Scopri di più</button>
                                </div>
                            </div>
                        </div>
                        <div class="boat debug-border">
                            <div class="boat-content">
                                <div class="preview">
                                    <div class="boat-img debug-border default-background-c"
                                        style="background-image: url('/static/images/boats/boat-5.jpg')">
                                    </div>
                                </div>
                                <div class="boat-info">
                                    <div class="boat-name">
                                        <span --ki-m-ref="title5">Nome Barca</span>
                                    </div>
                                    <div class="boat-description">
                                        <span --ki-m-ref="desc5">Comoda barca per persone</span>
                                    </div>
                                </div>
                                <div class="button">
                                    <button title="Scopri di più" --ki-m-attach-event --ki-m-title="Nome Barca" --ki-m-desc="Comoda barca per persone" --ki-m-img="/static/images/boats/boat-5.jpg">Scopri di più</button>
                                </div>
                            </div>
                        </div>
                        <div class="boat debug-border">
                            <div class="boat-content">
                                <div class="preview">
                                    <div class="boat-img debug-border default-background-c"
                                        style="background-image: url('/static/images/boats/boat-6.jpg')">
                                    </div>
                                </div>
                                <div class="boat-info">
                                    <div class="boat-name">
                                        <span --ki-m-ref="title6">Nome Barca</span>
                                    </div>
                                    <div class="boat-description">
                                        <span --ki-m-ref="desc6">Comoda barca per persone</span>
                                    </div>
                                </div>
                                <div class="button">
                                    <button title="Scopri di più" --ki-m-attach-event --ki-m-title="Nome Barca" --ki-m-desc="Comoda barca per persone" --ki-m-img="/static/images/boats/boat-6.jpg">Scopri di più</button>
                                </div>
                            </div>
                        </div>
                        
                    </div> 
                </div>
                <div class="section footer">
                    <div class="headline">
                        <div>
                            <h1 class="h10" style="margin-bottom: 10px;">Vorresti noleggiare una barca? </br> Cosa aspetti, Contattaci!</h1>
                        </div>
                    </div>
                </div>
                
            </div>
        
        </div>
    </div>
    <div class="contacts-wrapper">
        
        <div class="section-wrapper0">
            <div class="contacts">
                <div class="contact">
                    <div class="social">
                        <div class="icon whatsapp"></div>
                    </div>
                    <div class="contact-value">
                        <div class="link"><span>Telefono: </span><a href="tel:+392374823790">+39 2374823790</a></div>
                    </div>
                </div>
                <div class="contact">
                    <div class="social">
                        <div class="icon instagram"></div>
                    </div>
                    <div class="contact-value">
                        <div class="link"><span>Instagram: </span><a target="_blank" href="#">@blueshark_noleggio</a></div>
                    </div>
                </div>
                <div class="contact">
                    <div class="social">
                        <div class="icon facebook"></div>
                    </div>
                    <div class="contact-value">
                        <div class="link"><span>Facebook: </span><a target="_blank" href="#">Blue Shark Noleggio</a></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- init events -->
    <script>(function() { ki_modal.init(); })();</script>
</body>
</html>