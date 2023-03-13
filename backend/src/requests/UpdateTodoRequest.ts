/**
 * Fields in a request to update a single TODO item.
 */
export interface UpdateTodoRequest {
  attachmentUrl: any
  name: string
  dueDate: string
  done: boolean
}