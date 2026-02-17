
package com.app.todo;
import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@RequestMapping("/api/todos")
@CrossOrigin("*")
public class TodoController{

 private final TodoRepo repo;
 public TodoController(TodoRepo repo){this.repo=repo;}

 @GetMapping
 public List<Todo> all(){return repo.findAll();}

 @PostMapping
 public Todo add(@RequestBody Todo t){return repo.save(t);}

 @PutMapping("/{id}")
 public Todo update(@PathVariable Long id,@RequestBody Todo t){
  Todo ex=repo.findById(id).orElseThrow();
  ex.setTitle(t.getTitle());
  ex.setCompleted(t.isCompleted());
  return repo.save(ex);
 }

 @DeleteMapping("/{id}")
 public void delete(@PathVariable Long id){repo.deleteById(id);}
}
