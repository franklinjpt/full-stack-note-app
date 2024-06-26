package dev.franklinjpt.todo_app.service;

import java.util.List;

import dev.franklinjpt.todo_app.dto.NoteRequestDTO;
import dev.franklinjpt.todo_app.dto.NoteRequestUpdateDTO;
import dev.franklinjpt.todo_app.dto.NoteResponseDTO;

public interface INoteService {
  NoteResponseDTO create(NoteRequestDTO noteRequestDTO);

  List<NoteResponseDTO> findAll();

  NoteResponseDTO findById(Long id);

  void deleteById(Long id);

  NoteResponseDTO update(NoteRequestUpdateDTO noteRequestuUpdateDTO);

  NoteResponseDTO archiveUnarchive(Long id);

  NoteResponseDTO activeInactive(Long id);

  List<NoteResponseDTO> getArchived();

  List<NoteResponseDTO> getActives();
}
