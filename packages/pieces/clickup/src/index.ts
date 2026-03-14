import { createPiece } from '@activepieces/pieces-framework';
import { createTask } from './lib/actions/create-task';
import { updateTask } from './lib/actions/update-task';

export const clickup = createPiece({
  name: 'clickup',
  displayName: 'ClickUp',
  description: 'Manage your tasks in ClickUp',
  logoUrl: 'https://cdn.activepieces.com/pieces/clickup.png',
  auth: {
    type: 'basic',
    description: 'Enter your ClickUp API Token',
  },
  actions: [createTask, updateTask],
  triggers: [],
});
