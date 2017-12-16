package ai.leverton.challengediscussionapp;

import ai.leverton.challengediscussionapp.api.DiscussionController;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class DiscussionApplicationTests {

  @Autowired
  private DiscussionController discussionController;

  @Test
  public void contextLoads() {
    Assert.assertNotNull(discussionController);
  }

}
