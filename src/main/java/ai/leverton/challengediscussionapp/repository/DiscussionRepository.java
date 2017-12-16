package ai.leverton.challengediscussionapp.repository;

import ai.leverton.challengediscussionapp.model.Discussion;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DiscussionRepository extends JpaRepository<Discussion, Long> {

}
