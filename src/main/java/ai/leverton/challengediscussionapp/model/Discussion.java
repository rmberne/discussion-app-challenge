package ai.leverton.challengediscussionapp.model;

import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import org.springframework.data.jpa.domain.AbstractPersistable;

@Entity
@Table(name = "discussions")
public class Discussion extends AbstractPersistable<Long> {

  @Column(name = "title", nullable = false)
  private String title;

  @Column(name = "content", length = 4000, nullable = false)
  private String content;

  @OneToMany(mappedBy = "discussion")
  private List<DiscussionEntry> entries;

  public String getTitle() {
    return title;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  public String getContent() {
    return content;
  }

  public void setContent(String content) {
    this.content = content;
  }

  public List<DiscussionEntry> getEntries() {
    return entries;
  }

  public void setEntries(List<DiscussionEntry> entries) {
    this.entries = entries;
  }
}
