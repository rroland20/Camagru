import { RESPONSE_STATUS } from "../constants/index.js";

function profile(request, response) {
  const profileInfo = JSON.stringify({
    userId: 'f22375k23k00321jgsda',
  });

  response.writeHead(200, { 'Content-Type': 'application/json' });
  response.end(profileInfo, 'utf-8');
}

function register(request, response) {
  const profileInfo = JSON.stringify({
    status: RESPONSE_STATUS.success,
  });

  response.writeHead(200, { 'Content-Type': 'application/json' });
  response.end(profileInfo, 'utf-8');
}

export {
  profile,
  register,
};