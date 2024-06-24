export interface ITodo {
  getPriority(): number;
  getContent(): string;
  getCreatedAt(): string;
  getMaxAge(): string;
  getIsComplete(): boolean;
}

class Todo implements ITodo {
  private priority: number;
  private content: string;
  private createdAt: string;
  private maxAge: string;
  private isComplete: boolean;
  constructor(
    priority: number,
    content: string,
    maxAge: string,
    isComplete?: boolean
  ) {
    const date = new Date();
    this.priority = priority;
    this.content = content;
    this.createdAt = `${date.getFullYear()}-${(date.getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${date.getDate()}`;
    this.maxAge = maxAge;
    this.isComplete = isComplete ? true : false;
  }
  getPriority(): number {
    return this.priority;
  }
  getContent(): string {
    return this.content;
  }
  getCreatedAt(): string {
    return this.createdAt;
  }
  getMaxAge(): string {
    return this.maxAge;
  }
  getIsComplete(): boolean {
    return this.isComplete;
  }
}

export default Todo;
