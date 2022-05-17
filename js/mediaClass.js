class Media {
    constructor(_parent, _item) {
        this.parent = _parent;
        this.likes = _item.likes;
        this.name = _item.tags
        this.views = _item.views
        this.img = _item.largeImageURL
        this.linkPage = _item.pageURL
    }


    render() {
        let div = document.createElement('div');
        div.className = 'col';

        document.querySelector(this.parent).append(div);

        div.innerHTML = `
        <div class="box-media border shadow overflow-hidden d-flex align-items-center">
        <img src="${this.img}" width="300" height="200" alt="">
        <div class="disc p-3">
            <h5>${this.name}</h5>
            <p>Likes: ${this.likes}</p>
            <p>Viwes: ${this.views}</p>
            <a href="${this.linkPage}" class="text-dark">More info...</a>
        </div>
    </div>

        `
    }
}