import React, { Component } from 'react';

import './Galeria.css';
import Menu from '../Components/Menu';
import GalleryThumbnails from '../Components/GalleryThumbnails';
import Lightbox from 'react-images';


function sortAlphaNum(a, b) {
    
    let aA = a.replace('/static/media/','');
    let bA = b.replace('/static/media/','');

    return aA > bA ? 1 : -1;
}


function importAll(r) {
    let images = [];
    let image;
    r.keys().map((item, index) => {
        image = r(item);
        image = image.replace('./', '');
        images.push(image);
        return image;
    });

    return images.sort(sortAlphaNum);
}

const images = importAll(require.context('../img/gallery', false, /\.(png|jpe?g|svg)$/));
const imagesThumbs = importAll(require.context('../img/gallery/thumbs', false, /\.(png|jpe?g|svg)$/));

let galleryThumbs = [];
let galleryThumb;
for (let i = 0; i < imagesThumbs.length; i++) {
    galleryThumb = {id:i, src: imagesThumbs[i], alt:""};
    galleryThumbs.push(galleryThumb);
}

let galleryImages = [];
let galleryImage;
for (let i = 0; i < images.length; i++) {
    let caption = '';
    switch (i) {
        case 0:
            caption = 'Nossa 1ª foto';
            break;
        case 1:
            caption = 'Ah, esse fondue de queijo!';
            break;
        case 2:
            caption = 'MENGÃO EÔ!';
            break;
        case 3:
            caption = 'Ela está sempre gargalhando com ele';
            break;
        case 4:
            caption = 'Casa nova!';
            break;
        case 5:
            caption = 'Nosso primeiro ano novo!';
            break;
        case 6:
            caption = 'Ela se formou na residência e comemorou como? Comendo!';
            break;
        case 7:
            caption = 'O único jeito de não passar calor em Bauru';
            break;
        case 8:
            caption = 'VAI MOONHOWLERS!';
            break;
        case 9:
            caption = 'Parece que pegar o buquê deu sorte';
            break;
        case 10:
            caption = 'Ele se formou!';
            break;
        case 11:
            caption = 'Aniversário de 27 da Rô';
            break;
        case 12:
            caption = 'Com o trabalho vieram as conquistas 🚗';
            break;
        case 13:
            caption = 'Vinho, muito vinho!';
            break;
        case 14:
            caption = 'Quero colocar essa foto, mas não sei legenda :P';
            break;
        case 15:
            caption = 'Titios babões de primeira viagem!';
            break;
        case 16:
            caption = 'Mudamos pro litoral';
            break;
        case 17:
            caption = 'Par de velhos!';
            break;
        case 18:
            caption = 'Amor, jogo online não tem pause!';
            break;
        case 19:
            caption = 'Turistando no Rio de Janeiro';
            break;
        case 20:
            caption = 'Uma vez Flamengo, sempre Flamengo!';
            break;
        case 21:
            caption = 'Mais um dia dos namorados';
            break;
        case 22:
            caption = 'Born to be wild!';
            break;
        case 23:
            caption = 'O pedido mais mágico! Um conto de fadas!';
            break;
        case 24:
            caption = 'Ela disse sim! 💍';
            break;
        case 25:
            caption = 'Happily Ever After - 13/09/2018';
            break;
        case 26:
            caption = 'O Pateta adorou o anel de noivado';
            break;
        case 27:
            caption = 'Nossos melhores amigos, Mickey e Minnie!';
            break;
        case 28:
            caption = 'Nós adoramos uma montanha-russa!';
            break;
        case 29:
            caption = 'Disney 💙';
            break;
        case 30:
            caption = 'Muito amor na Disney, e em qualquer lugar do mundo!';
            break;
        case 31:
            caption = 'Volta ao mundo em 1 dia (comendo muito!)';
            break;
        case 32:
            caption = 'Esse vinho!';
            break;
        case 33:
            caption = 'QUE CASAL!';
            break;
        case 34:
            caption = 'Universal e Islands of Adventure';
            break;
        case 35:
            caption = 'Butterbeer tem gosto de vaca preta!';
            break;
        case 36:
            caption = 'QUE HOMEM!';
            break;
        case 37:
            caption = 'Tampa Bay Buccaneers x Pittsburgh Steelers. GO STEELERS!';
            break;
        case 38:
            caption = 'Luigi e Mario';
            break;
        case 39:
            caption = 'E continuamos nossas aventuras... A próxima é o casamento! Esperamos vocês lá!';
            break;

        default:
            caption = '';
    }
    galleryImage = {id:i, src: images[i], caption:caption, alt:"alt"};
    galleryImages.push(galleryImage);
}

class Galeria extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            isOpen:false,
            currentImage:0
        };
        this.openLightbox   = this.openLightbox.bind(this);
        this.closeLightbox  = this.closeLightbox.bind(this);
        this.gotoNext       = this.gotoNext.bind(this);
        this.gotoPrevious   = this.gotoPrevious.bind(this);
        this.clickThumbnail = this.clickThumbnail.bind(this);

    }
    openLightbox (id) {
        this.setState({
            isOpen: true,
            currentImage:id
        });
    }
    
    closeLightbox () {
        this.setState({
            isOpen: false
        });
    }
    
    gotoPrevious () {
        this.setState({
            currentImage: this.state.currentImage + -1,
        });
    }

    gotoNext () {
        this.setState({
            currentImage: this.state.currentImage + 1,
        });
    }
    
    clickThumbnail (index) {
        this.setState({
            currentImage: index,
        });
    }
    

    render() {
        return (
            <div>
                <Menu selected={1}/>
                <div className="page-container">
                    <div className="gallery">
                        <p className="title">Galeria</p>
                        <GalleryThumbnails 
                            images={galleryThumbs}
                            onClick={this.openLightbox}/>
                        <Lightbox 
                            images={galleryImages}
                            isOpen={this.state.isOpen}
                            onClickPrev={this.gotoPrevious}
                            onClickNext={this.gotoNext}
                            onClose={this.closeLightbox}
                            currentImage={this.state.currentImage}
                            imageCountSeparator={' | '}
                            showThumbnails={true}
                            onClickThumbnail={this.clickThumbnail}
                            backdropClosesModal={true}
                            leftArrowTitle={'Anterior'}
                            rightArrowTitle={'Próxima'}
                            closeButtonTitle={'Fechar (Esc)'}
                        />
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default Galeria;