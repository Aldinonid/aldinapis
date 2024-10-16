export enum Message {
  USER_NOT_FOUND = 'User not found',
  INVALID_PASSWORD = 'Invalid password',
  EMAIL_EXIST = 'Email already exists',
  LOGOUT_SUCCESS = 'Logout successfully',
  DELETE_SUCCESS = 'Delete successfully',
  NAME_EXIST = 'Name already exists',
  FLOW_NOT_FOUND = 'Flow not found',
  TOOL_NOT_FOUND = 'Tool not found',
  LESSON_NOT_FOUND = 'Lesson not found',
  CHAPTER_NOT_FOUND = 'Chapter not found',
  COURSE_NOT_FOUND = 'Course not found',
  COURSE_NOT_HAVE_PRICE = 'Premium course should have price',
  REVIEW_NOT_FOUND = 'Review not found',
  TOKEN_EXPIRED = 'Token expired',
  BANK_NOT_FOUND = 'Bank not found',
  CATEGORY_NOT_FOUND = 'Category not found',
  FEATURE_NOT_FOUND = 'Feature not found',
  ACTIVITY_NOT_FOUND = 'Activity not found',
  ITEM_NOT_FOUND = 'Item not found',
  IMAGE_NOT_FOUND = 'Image not found',
  FLOW_NAME_EXIST = `Can't use same name in other flows`,
  COURSE_NAME_EXIST = `Can't use same name in other courses`,
  SOMETHING_WENT_WRONG = 'Something Went Wrong!',

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
  private readonly status: Message
  private readonly data: T
  private readonly token?: string
  
  constructor(status: Message, data: T, token?: string) {
    this.status = status
    this.data = data
    this.token = token
  }

  public userLoginResponse() {
    return {
      status: this.status,
      token: this.token,
      data: this.data
    }
  }

}