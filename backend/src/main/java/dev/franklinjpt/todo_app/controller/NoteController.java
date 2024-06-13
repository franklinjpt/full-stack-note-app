package dev.franklinjpt.todo_app.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import dev.franklinjpt.todo_app.dto.NoteRequestDTO;
import dev.franklinjpt.todo_app.dto.NoteRequestUpdateDTO;
import dev.franklinjpt.todo_app.dto.NoteResponseDTO;
import dev.franklinjpt.todo_app.service.INoteService;
import dev.franklinjpt.todo_app.service.NoteService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/notes")
public class NoteController {

  private final INoteService noteService;

  public NoteController(NoteService noteService) {
    this.noteService = noteService;
  }

  @PostMapping
  public ResponseEntity<NoteResponseDTO> create(@RequestBody NoteRequestDTO noteRequestDTO) {
    return ResponseEntity.status(HttpStatus.CREATED).body(noteService.create(noteRequestDTO));
  }

  @GetMapping
  public ResponseEntity<List<NoteResponseDTO>> getAll() {
    return ResponseEntity.status(HttpStatus.OK).body(noteService.findAll());
  }

  @GetMapping("/{id}")
  public ResponseEntity<NoteResponseDTO> getById(@PathVariable Long id) {
    return ResponseEntity.status(HttpStatus.OK).body(noteService.findById(id));
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<Void> deleteById(@PathVariable Long id) {
    noteService.deleteById(id);
    return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
  }

  @PutMapping
  public ResponseEntity<NoteResponseDTO> update(@RequestBody NoteRequestUpdateDTO noteRequestUpdateDTO) {
    return ResponseEntity.status(HttpStatus.OK).body(noteService.update(noteRequestUpdateDTO));
  }

  @PatchMapping("/archived/{id}")
  public ResponseEntity<NoteResponseDTO> archiveUnarchive(@PathVariable Long id) {
    return ResponseEntity.status(HttpStatus.OK).body(noteService.archiveUnarchive(id));
  }

  @PatchMapping("/active/{id}")
  public ResponseEntity<NoteResponseDTO> activeInactive(@PathVariable Long id) {
    return ResponseEntity.status(HttpStatus.OK).body(noteService.activeInactive(id));
  }

  @GetMapping("/archived")
  public ResponseEntity<List<NoteResponseDTO>> getArchived() {
    return ResponseEntity.status(HttpStatus.OK).body(noteService.getArchived());
  }

  @GetMapping("/active")
  public ResponseEntity<List<NoteResponseDTO>> getActives() {
    return ResponseEntity.status(HttpStatus.OK).body(noteService.getActives());
  }

}
