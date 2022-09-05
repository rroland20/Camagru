import {
  profile,
  register,
} from "./views.js";
import { urlFromPath } from "./../utils/index.js";

const urls = [
    urlFromPath("profile/", profile, "profile"),
    urlFromPath("register/", register, "register"),
];

export default urls;