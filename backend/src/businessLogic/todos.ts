import { TodosAccess } from '../dataLayer/todosAcess'
import { AttachmentUtils } from './attachmentUtils'
import { TodoItem } from '../models/TodoItem'
import { CreateTodoRequest } from '../requests/CreateTodoRequest'
import { UpdateTodoRequest } from '../requests/UpdateTodoRequest'
import { createLogger } from '../utils/logger'
import * as uuid from 'uuid'
import * as createError from 'http-errors'

const logger = createLogger('TodosAccess')
const attachmentUtils = new AttachmentUtils()
const todosAccess = new TodosAccess()

export const createTodo = async (
  newTodo: CreateTodoRequest,
  userId: string
): Promise<TodoItem> => {
  logger.info('Create todo function')
  const todoId = uuid.v4()
  const attachmentUrl = attachmentUtils.getAttachmentUrl(todoId)
  const createdAt = new Date().toString()
  const newItem: TodoItem = {
    userId,
    todoId,
    createdAt,
    attachmentUrl,
    done: false,
    ...newTodo,
    attachmentId: undefined
  }
  return await todosAccess.createTodoItem(newItem)
}

export async function getTodosForUser(userId: string): Promise<TodoItem[]> {
  try {
    return await todosAccess.getAllTodos(userId)
  } catch (error) {
    throw createError(500, `Error getting user todos: ${error.message}`)
  }
}

export async function updateTodo(
  todoId: string,
  userId: string,
  updateTodoRequest: UpdateTodoRequest
): Promise<void> {
  createLogger('Updating todo')
  return await todosAccess.updateTodoItem(todoId, userId, updateTodoRequest)
}

export async function deleteTodo(
  todoId: string,
  userId: string
): Promise<void> {
  return await todosAccess.deleteTodoItem(todoId, userId)
}

export async function createAttachmentPresignedUrl(
  todoId: string
): Promise<string> {
  return attachmentUtils.getUploadUrl(todoId)
}
