package com.portal.demo.repository;

import com.portal.demo.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;


@Repository
public interface UserRepository extends JpaRepository<User, Long> {
   Optional<User> findByUsername(String userName);
}
