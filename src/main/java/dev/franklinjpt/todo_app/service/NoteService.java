package dev.franklinjpt.todo_app.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.fasterxml.jackson.databind.ObjectMapper;

import dev.franklinjpt.todo_app.dto.NoteRequestDTO;
import dev.franklinjpt.todo_app.dto.NoteRequestUpdateDTO;
import dev.franklinjpt.todo_app.dto.NoteResponseDTO;
import dev.franklinjpt.todo_app.entity.Note;
import dev.franklinjpt.todo_app.exception.NotFoundException;
import dev.franklinjpt.todo_app.repository.INoteRepository;

@Service
public class NoteService implements INoteService {

  private final INoteRepository noteRepository;
  private final ObjectMapper objectMapper;

  public NoteService(ObjectMapper objectMapper, INoteRepository noteRepository) {
    this.objectMapper = objectMapper;
    this.noteRepository = noteRepository;
  }

  @Override
  public NoteResponseDTO create(NoteRequestDTO noteRequestDTO) {
    Note note = mapToEntity(noteRequestDTO);
    noteRepository.save(note);
    return mapToDTO(note);
  }

  @Override
  public List<NoteResponseDTO> findAll() {
    return noteRepository.findAll().stream().map(this::mapToDTO).toList();
  }

  @Override
  public NoteResponseDTO findById(Long id) {
    Note note = noteRepository.findById(id).orElseThrow(
        () -> new NotFoundException("Note not found with id: " + id));
    return mapToDTO(note);
  }

  @Override
  public void deleteById(Long id) {
    findById(id);
    noteRepository.deleteById(id);
  }

  @Override
  public NoteResponseDTO update(NoteRequestUpdateDTO noteRequestUpdateDTO) {
    findById(noteRequestUpdateDTO.getId());
    Note note = noteRepository.save(mapToEntity(noteRequestUpdateDTO));
    return mapToDTO(note);
  }

  @Override
  public NoteResponseDTO archiveUnarchive(Long id) {
    findById(id);
    Note note = noteRepository.findById(id).get();
    note.setArchived(!note.getArchived());
    noteRepository.save(note);
    return mapToDTO(note);
  }

  @Override
  public NoteResponseDTO activeInactive(Long id) {
    findById(id);
    Note note = noteRepository.findById(id).get();
    note.setActive(!note.getActive());
    noteRepository.save(note);
    return mapToDTO(note);
  }

  @Override
  public List<NoteResponseDTO> getArchived() {
    return noteRepository.findByArchivedTrue().stream().map(this::mapToDTO).toList();
  }

  @Override
  public List<NoteResponseDTO> getActives() {
    return noteRepository.findByActiveTrue().stream().map(this::mapToDTO).toList();
  }

  private NoteResponseDTO mapToDTO(Note note) {
    return objectMapper.convertValue(note, NoteResponseDTO.class);
  }

  private Note mapToEntity(NoteRequestDTO noteRequestDTO) {
    return objectMapper.convertValue(noteRequestDTO, Note.class);
  }

  private Note mapToEntity(NoteRequestUpdateDTO noteRequestUpdateDTO) {
    return objectMapper.convertValue(noteRequestUpdateDTO, Note.class);
  }

}
