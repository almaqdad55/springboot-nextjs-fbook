package com.facebookservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.facebookservice.entity.PostEntity;

@Repository
public interface PostEntityRepository extends JpaRepository<PostEntity, String> {
 
}
