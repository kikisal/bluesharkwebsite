((m) => {

    function Parser() {

    }

    const ATTRIBS = {
        TARGET_EL:    '--ki-m-target',
        ATTACH_EVENT: '--ki-m-attach-event',
        TITLE:        '--ki-m-title',
        IMG:          '--ki-m-img',
        REF:          '--ki-m-ref',
        DESC:         '--ki-m-desc'
    };

    const VALUES = {
        DEFAULT_TITLE: 'Untitled',
        DEFAULT_DESC: 'No description',
        DEFAULT_IMG: ''
    };

    
    const socialButtonsList = [
        {
            icon: 'whatsapp',
            href: 'tel:+392374823790',
            label: '+39 237 482 3790'
        },
        {
            icon: 'facebook',
            href: '#',
            label: 'Blue Shark Noleggio'
        },
        {
            icon: 'instagram',
            href: '#',
            label: '@blueshark_noleggio'
        }
    ];

    function extractEventElements() {
        return document.querySelectorAll(`[${ATTRIBS.ATTACH_EVENT}]`);
    }

    const $Ki_modal =  function() {
        this.targetEl = document.querySelector(`[${ATTRIBS.TARGET_EL}]`);
        if ( !this.targetEl )
            throw new Error;

        this.evntElements = extractEventElements(); // get all elements with ATTRIBS.ATTACH_EVENT attribute
        for ( const e of this.evntElements )
            this.pushEvent( e );

        this.currentActiveModal = null;
        window.addEventListener('keydown', this.onKeyDown.bind(this));
        window.addEventListener('popstate', this.onPopState.bind(this));
    };

    $Ki_modal.prototype = {
        onPopState: function(e) {
            this.destroyActiveModal();
        },

        onKeyDown: function(e) {
            if( e.key === 'Escape' ) {
                history.back();
                this.destroyActiveModal();
            }
        },

        pushEvent: function(el) {
            el.addEventListener('click', this.onClick.bind(this, el));
        },

        onClick: function(e) {
            const title = e.getAttribute(ATTRIBS.TITLE) || VALUES.DEFAULT_TITLE;
            const desc  = e.getAttribute(ATTRIBS.DESC)  || VALUES.DEFAULT_DESC;
            const img   = e.getAttribute(ATTRIBS.IMG)   || VALUES.DEFAULT_IMG;
            const page = title.replaceAll(' ', '_').toLowerCase();
            history.pushState(page, '', page);
            
            this.invokeModal(title, desc, img);
        },

        invokeModal: function(title, desc, img) {
            this.destroyActiveModal();
            document.body.style.overflow = 'hidden';

            // build modal
            const boatPreview = document.createElement('div');

            boatPreview.classList.add('boat-preview');

            const previewBox = document.createElement('div');
            previewBox.classList.add('preview-box');

            boatPreview.addEventListener('click', function(box, e) {
                
                if ( box === e.target )
                {
                    history.back();
                    this.destroyActiveModal();
                }

            }.bind(this, boatPreview));

            // preview-align
            const previewAlign = document.createElement('div');
            previewAlign.classList.add('preview-align');

            const item0 = document.createElement('div');
            item0.classList.add('item');
            // item-content

            const itemContent = document.createElement('div');
            itemContent.classList.add('item-content');
            
            // vertical-layout
            
            const verticalLayout = document.createElement('div');
            verticalLayout.classList.add('vertical-layout');

            const titleBoxDiv      = this.generateTitleBoxDiv(title);
            
            const imgBoxDiv        = this.generateImgBoxDdiv(img);
            const socialSectionDiv = this.generateSocialSectionDiv(desc);    

            verticalLayout.appendChild(titleBoxDiv);
            verticalLayout.appendChild(imgBoxDiv);
            verticalLayout.appendChild(socialSectionDiv);
                    

            itemContent.appendChild(verticalLayout);
            item0.appendChild(itemContent);
            previewAlign.appendChild(item0);
            previewBox.appendChild( previewAlign );
            boatPreview.appendChild(previewBox);
            

            this.currentActiveModal = boatPreview;
            this.targetEl.appendChild(boatPreview);
        },

        destroyActiveModal: function(doIt) {
            
            if ( !this.currentActiveModal )
                return;

            document.body.style.overflow = 'auto';
            
            this.targetEl.removeChild(this.currentActiveModal);
            this.currentActiveModal = null;
        },

        generateTitleBoxDiv:      generateTitleBoxDiv,
        generateImgBoxDdiv:       generateImgBoxDdiv,
        generateSocialSectionDiv: generateSocialSectionDiv,
        generateDescDiv:          generateDescDiv,
        generateSocial__Div:      generateSocial__Div
    }

    function generateTitleBoxDiv(_____boatNameTitle_____) 
    {
       const div  = document.createElement('div');
       const boatName = document.createElement('div')
       boatName.classList.add('boat-name');
       boatName.classList.add('clear-margin-top');
       const span = document.createElement('span');
       span.style.marginLeft = '50px';
       const backIcon = document.createElement('div');
       backIcon.classList.add('back-icon');
       backIcon.setAttribute('title', 'Indietro');

       const img = document.createElement('div');
       img.classList.add('img');
       backIcon.appendChild(img);

       backIcon.addEventListener('click', function(e) {
            history.back();
            this.destroyActiveModal();
       }.bind(this));

       span.appendChild(backIcon);
       const titleChild = document.createElement('span');
       titleChild.innerText = _____boatNameTitle_____;
       span.appendChild(titleChild);

       boatName.appendChild(span);
       div.appendChild(boatName);
       return div;
    }

    function generateImgBoxDdiv(_____img_____) 
    {
        const l01Content = document.createElement('div');
        l01Content.classList.add('l01-content');

        const boatPicture = document.createElement('div');
        boatPicture.classList.add('boat-picture-preview');
        boatPicture.style.backgroundImage = 'url(\'' + _____img_____ + '\')';
        l01Content.appendChild(boatPicture);
        return l01Content;
    }

    function generateDescDiv(_____desc_____)
    {
        const __section = document.createElement('div');
        __section.classList.add('__section');

        const sectionTitle = document.createElement('div');
        sectionTitle.classList.add('section-title');
        
        const sectionContent = document.createElement('div');
        sectionContent.classList.add('section-content');
        
        const titleText = document.createElement('div');
        titleText.classList.add('title-text');
        
        const descSpan = document.createElement('span');
        descSpan.innerText = 'Descrizione';

        titleText.appendChild(descSpan);
        sectionTitle.appendChild(titleText);

        const descSpan01 = document.createElement('span');
        descSpan01.innerText = _____desc_____;

        sectionContent.appendChild( descSpan01 );
        

        __section.appendChild(sectionTitle);
        __section.appendChild(sectionContent);
        
        return __section;
    }

    function generateSocialButton(icon, href, label) {
        const socialBtn = document.createElement('div');
        socialBtn.classList.add('social-btn');

        const contact = document.createElement('div');
        contact.classList.add('contact');

            const social = document.createElement('div');
            social.classList.add('social');
                const __icon = document.createElement('div');
                __icon.classList.add('icon');
                __icon.classList.add(icon);
            social.appendChild(__icon);

            const contactValue = document.createElement('div');
            contactValue.classList.add('contact-value');
                const link = document.createElement('div');
                link.classList.add('link');
                    const a = document.createElement('a');
                    a.setAttribute('target', '_blank');
                    a.setAttribute('href', href);
                    a.innerText = label;
                link.appendChild(a);

            contactValue.appendChild(link);
        
        contact.appendChild(social);
        contact.appendChild(contactValue);

        socialBtn.appendChild(contact);

        return socialBtn;
    }
    
/*
    <div class="__section desktop">
        <div class="text"><span>Sei interessato? <br>Contattaci su uno dei  nostri social:</span></div>
        <div class="social-buttons">
            social buttons
            
        </div>
    </div>
*/


    function generateSocial__Div(platform)
    {
        const __section = document.createElement('div');
        __section.classList.add('__section');
        __section.classList.add(platform);
        
            const text = document.createElement('div');
            text.classList.add('text');
                const span = document.createElement('span');
                span.innerHTML = 'Sei interessato? <br>Contattaci su uno dei  nostri social:';
            text.appendChild(span);

        __section.appendChild(text);

        const socialButtons = document.createElement('div');
        socialButtons.classList.add('social-buttons');

        for ( const s of socialButtonsList )
            socialButtons.appendChild(generateSocialButton(s.icon, s.href, s.label));

        __section.appendChild(socialButtons);


        return __section;
    }

    // <div class="l01-content social-section">

    function generateSocialSectionDiv(_____desc_____) 
    {
        const l01Content = document.createElement('div');
        l01Content.classList.add('l01-content');
        l01Content.classList.add('social-section');

        l01Content.appendChild(generateSocial__Div('desktop'));
        l01Content.appendChild(generateDescDiv(_____desc_____));
        l01Content.appendChild(generateSocial__Div('mobile'));

        return l01Content;
    }    

    const ki_modal = {
        init: function() {
            return new $Ki_modal();
        }
    };

    m.ki_modal = ki_modal;
})(window);