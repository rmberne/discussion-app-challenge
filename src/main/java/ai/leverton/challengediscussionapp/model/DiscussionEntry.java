package ai.leverton.challengediscussionapp.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import org.springframework.data.jpa.domain.AbstractPersistable;

@Entity
@Table(name = "discussion_entries")
@JsonIgnoreProperties({"discussion"})
public class DiscussionEntry extends AbstractPersistable<Long> {

  private String content;

  @ManyToOne(optional = false)
  @JoinColumn(name = "discussion_id", nullable = false)
  private Discussion discussion;

  public String getContent() {
    return content;
  }

  public void setContent(String content) {
    this.content = content;
  }

  public Discussion getDiscussion() {
    return discussion;
  }

  public void setDiscussion(Discussion discussion) {
    this.discussion = discussion;
  }
}
