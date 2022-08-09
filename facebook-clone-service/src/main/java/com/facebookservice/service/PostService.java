package com.facebookservice.service;

import java.util.List;

import com.facebookservice.mdoel.Post;

public interface PostService {

	Post addPost(Post post) throws Exception;

	List<Post> getAllPosts();

}
