package com.leilao.backend.repository;

import com.leilao.back.model.Profile;
import org.springframework.data.jpa.repository.JpaRepository;


public interface ProfileRepository extends JpaRepository<Profile, Long>{
    
}
