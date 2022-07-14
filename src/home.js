;(() => {
    const $mainNode = document.querySelector('#main');

    fetch('/user-posts/')
    .then((response) => {
        return response.json();
    })
    .then((userPosts) => {
        const posts = userPosts.posts;

        posts.forEach(post => {
            const article = document.createElement('article');
            article.classList.add('posts');

            const userPhotoDiv = document.createElement('div');
            userPhotoDiv.classList.add('user_photo');

            article.appendChild(userPhotoDiv);

            const userPhoto = document.createElement('img');
            userPhoto.src = post.image;

            $mainNode.appendChild(article);
        });

        // const str = posts.reduce((string, post) => {
        //     const article = `<article class="posts">
        //         <div class="user_photo">
        //             <img class="photo" src="${post.image}" alt="${post.username}">
        //         </div>
        //         <div class="post_footer">
        //             <div class="user_avatar">
        //                 <a href="/${post.username}/" class="avatar">
        //                     <img src="${post.avatar}" alt="${post.username} avatar">
        //                 </a>
        //                 <span>${post.username}</span>
        //             </div>
        //             <div class="reaction">
        //                 <i class="icon-like"></i>
        //                 <i class="icon-comment"></i>
        //             </div>
        //         </div>
        //     </article>`;

        //     return string + article;
        // }, '');

        $mainNode.innerHTML = str;
    })
    .catch((error) => {
        console.error(error);
    });
})();