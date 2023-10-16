package com.nasr.todobackend.service.impl;

import com.nasr.todobackend.domain.Todo;
import com.nasr.todobackend.dto.request.TodoRequestDto;
import com.nasr.todobackend.dto.response.TodoResponseDto;
import com.nasr.todobackend.repository.TodoRepository;
import com.nasr.todobackend.service.TodoService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional(readOnly = true)
public class TodoServiceImpl implements TodoService {

    @Autowired
    private TodoRepository repository;
    private final ModelMapper mapper = new ModelMapper();

    @Override
    @Transactional
    public TodoResponseDto save(TodoRequestDto request) {

        Todo todo =  new Todo();
        BeanUtils.copyProperties(request,todo);

        return mapper.map(repository.save(todo),TodoResponseDto.class);
    }

    @Override
    @Transactional
    public TodoResponseDto update(TodoRequestDto request, Long id) {
        Todo todo = repository.findById(id)
                .orElseThrow(() -> new IllegalStateException("dont find any todo with id : " + id));

        todo.setTitle(request.getTitle());
        todo.setDescription(request.getDescription());

        return mapper.map(todo,TodoResponseDto.class);
    }

    @Override
    public List<TodoResponseDto> getAll() {
        return repository.findTodos();
    }

    @Override
    @Transactional
    public void deleteById(Long id) {
        repository.deleteById(id);
    }
}
