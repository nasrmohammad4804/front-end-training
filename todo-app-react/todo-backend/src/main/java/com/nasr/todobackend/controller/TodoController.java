package com.nasr.todobackend.controller;

import com.nasr.todobackend.dto.request.TodoRequestDto;
import com.nasr.todobackend.dto.response.TodoResponseDto;
import com.nasr.todobackend.service.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import static org.springframework.http.HttpStatus.CREATED;

@RestController
@RequestMapping("/todo")
@CrossOrigin(value = "http://localhost:3000")
public class TodoController {

    @Autowired
    private TodoService todoService;

    @PostMapping
    public ResponseEntity<?> saveTodo(@RequestBody @Validated TodoRequestDto request){
        TodoResponseDto dto = todoService.save(request);

        return ResponseEntity
                .status(CREATED)
                .body(dto);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTodo(@PathVariable Long id){
        todoService.deleteById(id);

        return ResponseEntity.ok().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateTodo(@RequestBody @Validated TodoRequestDto request , @PathVariable Long id){
        TodoResponseDto dto = todoService.update(request, id);
        return ResponseEntity.ok(dto);
    }

    @GetMapping("/all")
    public ResponseEntity<?> getTodos(){
        return ResponseEntity.ok(todoService.getAll());
    }
}
