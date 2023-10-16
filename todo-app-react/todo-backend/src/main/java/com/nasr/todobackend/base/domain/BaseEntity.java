package com.nasr.todobackend.base.domain;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.MappedSuperclass;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@MappedSuperclass
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class BaseEntity<ID extends Serializable>  {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    protected  ID id;
}
