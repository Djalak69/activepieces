import { createAction, Property } from '@activepieces/pieces-framework';

export const updateTask = createAction({
  name: 'update_task',
  displayName: 'Update Task',
  description: 'Update an existing task in ClickUp',
  props: {
    task_id: Property.ShortText({
      displayName: 'Task ID',
      required: true,
    }),
    status: Property.ShortText({
      displayName: 'Status',
      required: false,
    }),
  },
  async run(context) {
    // API Call logic goes here
    return { status: 'success' };
  },
});
