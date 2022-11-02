import { HttpStatusCodes } from "../http/HttpStatusCode";

export class AppError {
  public readonly message: string;

  public readonly statusCode: number;

  constructor(
    message: string,
    statusCode: HttpStatusCodes = HttpStatusCodes.BAD_REQUEST
  ) {
    this.message = message;
    this.statusCode = statusCode;
  }
}
