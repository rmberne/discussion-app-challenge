package ai.leverton.challengediscussionapp.service;

import ai.leverton.challengediscussionapp.model.Discussion;
import ai.leverton.challengediscussionapp.repository.DiscussionRepository;
import java.util.List;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DiscussionService {

  private final DiscussionRepository discussionRepository;

  @Autowired
  public DiscussionService(DiscussionRepository discussionRepository) {
    this.discussionRepository = discussionRepository;
  }

  public List<Discussion> findAll() {
    return discussionRepository.findAll();
  }

  public Discussion find(Long id) {
    return discussionRepository.findOne(id);
  }

  @Transactional
  public Discussion save(Discussion discussion) {
    return discussionRepository.save(discussion);
  }

  @Transactional
  public void delete(Long id) {
    discussionRepository.delete(id);
  }

}
