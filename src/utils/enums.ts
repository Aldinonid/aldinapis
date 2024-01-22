export enum ResponseMessage {
  USER_NOT_FOUND = 'User not found',
  INVALID_PASSWORD = 'Invalid password',
  EMAIL_EXIST = 'Email already exists',
  LOGOUT_SUCCESS = 'Logout successfully',
  DELETE_SUCCESS = 'Delete successfully',
  NAME_EXIST = 'Name already exists',
  FLOW_NOT_FOUND = 'Flow not found',
  TOOL_NOT_FOUND = 'Tool not found',
  COURSE_NOT_FOUND = 'Course not found',
  COURSE_NOT_HAVE_PRICE = 'Premium course should have price',

  SUCCESS = 'SUCCESS',
  FAILED = 'FAILED'
}

export enum OtodyduckLevel {
  ALL_LEVEL = "all level",
  BEGINNER = "beginner",
  INTERMEDIATE = "intermediate",
  ADVANCED = "advanced"
}

export class Result<T> {
  private readonly status: ResponseMessage
  private readonly data: T
  
  constructor(status: ResponseMessage, data: T) {
    this.status = status
    this.data = data
  }

  public post() {
    return {
      status: this.status,
      data: this.data
    }
  }

}