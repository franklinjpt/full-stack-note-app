package dev.franklinjpt.todo_app.service;

import dev.franklinjpt.todo_app.dto.NoteRequestDTO;
import dev.franklinjpt.todo_app.dto.NoteRequestUpdateDTO;
import dev.franklinjpt.todo_app.dto.NoteResponseDTO;
import java.util.List;

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
