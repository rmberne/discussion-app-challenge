package ai.leverton.challengediscussionapp.api;

import ai.leverton.challengediscussionapp.model.Discussion;
import ai.leverton.challengediscussionapp.repository.DiscussionRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("threads")
public class DiscussionController {

  private final DiscussionRepository discussionRepository;

  @Autowired
  public DiscussionController(DiscussionRepository discussionRepository) {
    this.discussionRepository = discussionRepository;
  }

  @GetMapping
  public ResponseEntity<List<Discussion>> get() {
    return ResponseEntity.ok(discussionRepository.findAll());
  }

  @GetMapping("{id}")
  public ResponseEntity<Discussion> get(@PathVariable Long id) {
    return ResponseEntity.ok(discussionRepository.findOne(id));
  }

  @PostMapping
  public ResponseEntity<Discussion> post(@RequestBody Discussion discussion) {
    return ResponseEntity.ok(discussionRepository.save(discussion));
  }

  @PutMapping
  public ResponseEntity<Discussion> put(@RequestBody Discussion discussion) {
    return ResponseEntity.ok(discussionRepository.save(discussion));
  }

  @DeleteMapping
  public ResponseEntity<Long> delete(@PathVariable Long id) {
    discussionRepository.delete(id);
    return ResponseEntity.ok(id);
  }

}
