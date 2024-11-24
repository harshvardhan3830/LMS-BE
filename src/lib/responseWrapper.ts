class UnauthorizedError extends Error {
  statusCode: number;
  success: boolean;
  constructor(body: { message?: string } & Record<string, any>) {
    super(body.message || "Unauthorized");
    this.statusCode = 401;
    this.success = false;
    Object.assign(this, body);
  }
}

interface Response {
  statusCode: number;
  success: boolean;
  body: string;
}

export class ResponseWrapper {
  success(body: Record<string, any>): Response {
    return {
      statusCode: 200,
      success: true,
      body: JSON.stringify({
        ...body,
      }),
    };
  }

  created(body: Record<string, any>): Response {
    return {
      statusCode: 201,
      success: true,
      body: JSON.stringify({
        ...body,
      }),
    };
  }

  updated(body: Record<string, any>): Response {
    return {
      statusCode: 204,
      success: true,
      body: JSON.stringify({
        ...body,
      }),
    };
  }

  deleted(body: Record<string, any>): Response {
    return {
      statusCode: 204,
      success: true,
      body: JSON.stringify({
        ...body,
      }),
    };
  }

  validationFailure(body: Record<string, any>): Response {
    return {
      statusCode: 400,
      success: false,
      body: JSON.stringify({
        ...body,
      }),
    };
  }

  notFound(body: Record<string, any>): Response {
    return {
      statusCode: 404,
      success: false,
      body: JSON.stringify({
        ...body,
      }),
    };
  }

  unauthorized(body: Record<string, any>): never {
    throw new UnauthorizedError(body);
  }

  error(body: Record<string, any>): Response {
    return {
      statusCode: 500,
      success: false,
      body: JSON.stringify({
        ...body,
      }),
    };
  }
}
