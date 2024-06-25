package dev.franklinjpt.todo_app.repository;

import dev.franklinjpt.todo_app.entity.Note;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface INoteRepository extends JpaRepository<Note, Long> {

  List<Note> findByArchivedTrue();

  List<Note> findByActiveTrue();
}
