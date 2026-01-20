package com.allied.spring.domain;

import org.springframework.data.repository.CrudRepository;


public interface NewFormRepository extends CrudRepository<FormForAPI, Long> {

    void save(NewFormAPIDto newFormAPIDto);


}
