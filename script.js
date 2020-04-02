'use strict';

let user = {
	id:5,
	name:"Shumkar",
	mail:"shuma@mail.ru",
	pass:"qwer",
	isAuthorised:false,
	print:function printAll() {
		console.log("Your name: "+this.name+
			"\nYour mail: "+this.mail+
			"\nYour password: "+this.pass+
			"\nAutorised status: "+this.isAuthorised);
	}
};
console.log("User information");
user.print();

let post = {
	id:1,
	title:"Kyrgyzstan",
	description:"I live in Kyrgyzstan",
	userId:5, //ID юзера опубликовавшего этот пост
	isLiked: false,
	print:function printAll() {
		console.log("Title: "+this.title+
			"\nDescription: "+this.description+
			"\nLiked status: "+this.isLiked);
	}
};
console.log("Post information");
post.print();

let comment = {
	id:1,
	userId:5, //ID юзера написавшего комментарий
	postId:3, //ID публикации к которой прикреплён комментарий
	text:"Great",
	print:function printAll() {
		console.log("Text: "+this.text);
	}
}
console.log("Comment");
comment.print();

let posts = [];

function addPost(a){
	posts.push(a);
}

addPost(post);

console.log(posts);

function authoriz(a){
	a.isAuthorised = true;
}

authoriz(user);

user.print

addPost({
	id:2,
	title:"Russia",
	description:"I live in Russia",
	userId:5, //ID юзера опубликовавшего этот пост
	isLiked: true,
	print:function printAll() {
		console.log("Title: "+this.title+
			"\nDescription: "+this.description+
			"\nLiked status: "+this.isLiked);
	}
});

console.log(posts);

function like(postId){
	for (let i = 0; i < posts.length; i++) {
        if (posts[i].id === postId) {
            if (posts[i].isLiked) {
                posts[i].isLiked = false;
            } else {
                posts[i].isLiked = true;
            }
        }
    }
}

like(1);

console.log(posts);