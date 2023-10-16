package com.nasr.todobackend.repository;

import com.nasr.todobackend.domain.Todo;
import com.nasr.todobackend.dto.response.TodoResponseDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface TodoRepository  extends JpaRepository<Todo,Long> {

    @Query("select new com.nasr.todobackend.dto.response.TodoResponseDto(t.id,t.title,t.description) from Todo  as t")
    List<TodoResponseDto> findTodos();
}
