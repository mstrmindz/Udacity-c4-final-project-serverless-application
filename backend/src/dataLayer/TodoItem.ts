export class TodoItem {
    constructor(
      public readonly todoId: string,
      public readonly createdAt: string,
      public readonly name: string,
      public readonly dueDate: string,
      public readonly done: boolean,
      public readonly attachmentUrl?: string,
    ) {}
  }
  