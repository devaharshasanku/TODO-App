
package com.app.todo;
import org.springframework.data.jpa.repository.JpaRepository;
public interface TodoRepo extends JpaRepository<Todo,Long>{}
