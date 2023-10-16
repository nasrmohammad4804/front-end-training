package com.nasr.todobackend.service;

import com.nasr.todobackend.dto.request.TodoRequestDto;
import com.nasr.todobackend.dto.response.TodoResponseDto;

import java.util.List;

public interface TodoService {

    TodoResponseDto save(TodoRequestDto request);

    TodoResponseDto update(TodoRequestDto request ,Long id);

    List<TodoResponseDto> getAll();

    void deleteById(Long id);
}
