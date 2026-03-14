import { createAction, Property } from '@activepieces/pieces-framework';
import axios from 'axios';

export const createTask = createAction({
  name: 'create_task',
  displayName: 'Create Task',
  description: 'Create a new task in ClickUp',
  props: {
    task_name: Property.ShortText({
      displayName: 'Task Name',
      required: true,
    }),
    list_id: Property.ShortText({
      displayName: 'List ID',
      required: true,
    }),
    api_token: Property.ShortText({
      displayName: 'API Token',
      required: true,
    }),
  },
  async run(context) {
    const { task_name, list_id, api_token } = context.propsValue;
    const response = await axios.post(`https://api.clickup.com/api/v2/list/${list_id}/task`, {
      name: task_name,
    }, {
      headers: {
        'Authorization': api_token,
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  },
});
