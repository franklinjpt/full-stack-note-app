package dev.franklinjpt.todo_app.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import dev.franklinjpt.todo_app.dto.ExceptionDTO;

@ControllerAdvice
public class ExceptionConfiguration {

  @ExceptionHandler(NotFoundException.class)
  public ResponseEntity<ExceptionDTO> handler(NotFoundException e) {
    ExceptionDTO exceptionDTO = new ExceptionDTO(e.getMessage());
    return new ResponseEntity<>(exceptionDTO, HttpStatus.NOT_FOUND);
  }
}
