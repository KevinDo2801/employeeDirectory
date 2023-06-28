class Member{
    constructor(data){
        Object.assign(this, data);
    }

    getDataHtml(){
        const {name, title, bio, image, social} = this;
        return `
            <section>
                <div class="top">
                    <img src="./images/photos/${image}" alt="">
                    <h2 class="name">${name}</h2>
                    <p class="title">${title}</p>
                </div>
                <div class="bio">
                    ${bio}
                </div>
                <div class="social">
                    <a target="_blank" href="${social.twitter}" class="${!social.twitter ? 'hidden' : ''}" >
                        <i class="fab fa-twitter"></i>
                    </a>
                    <a target="_blank" href="${social.linkedin}" class="${!social.linkedin ? 'hidden' : ''}">
                        <i class="fab fa-linkedin"></i>
                    </a>
                </div>
            </section>
        `
    }
}

export default Member