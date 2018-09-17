import { ExpectHelper } from './helpers/expect-helpers';
import { TodosPage } from './todos.po';

describe('workspace-project App', () => {
  let page: TodosPage;

  beforeEach(() => {
    page = new TodosPage();
  });

  it('should display 2 todo items', async (done) => {
    page.navigateTo();
    const res = await page.getTodos().count();
    await ExpectHelper.expectOrRetry(() => res === 2);
    done();
  });
});
