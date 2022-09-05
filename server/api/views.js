import { RESPONSE_STATUS } from "../constants/index.js";
import {jsonResponse} from "../utils/index.js";

function profile(request, response) {
  const profileInfo = JSON.stringify({
    userId: 'f22375k23k00321jgsda',
  });

  jsonResponse(response, profileInfo);
}

function register(request, response) {
  const profileInfo = JSON.stringify({
    status: RESPONSE_STATUS.success,
  });

  jsonResponse(response, profileInfo);
}

export {
  profile,
  register,
};