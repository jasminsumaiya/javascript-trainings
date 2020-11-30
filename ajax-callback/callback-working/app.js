let posts = [
    {title: 'Title One', body:'This is post one'},
    {title: 'Title Two', body:'This is post two'}
];

function creatPost(post,callback){
    setTimeout(function(){
        posts.push(post);
        callback();
    }, 2000);
}

function getPost(){
    setTimeout(function(){
        let output = '';
        posts.forEach(function(post){
            output += `<li>${post.title}</li>`;
            document.body.innerHTML = output;
        });
    }, 1000);
}

creatPost({title: 'Title Three', body:'This is post three'}, getPost);

