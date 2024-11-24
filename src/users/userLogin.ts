import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { ResponseWrapper } from "../lib/responseWrapper";

const responseWrapper = new ResponseWrapper();
export const handler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  try {
    return responseWrapper.success({
      message: "Login successfull",
    });
  } catch (error) {
    console.log(error);
    return responseWrapper.error({
      message: "Error while login",
      error,
    });
  }
};
