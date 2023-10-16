package com.nasr.todobackend.domain;

import com.nasr.todobackend.base.domain.BaseEntity;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class Todo extends BaseEntity<Long> {

    private String title;

    @Column(columnDefinition = "text")
    private String description;
}
