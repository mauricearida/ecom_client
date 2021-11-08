import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
// const TOKEN =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxODdlNjA2Yzk4ZjQzOWRiODM2MWQ2OCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNjI5NjQ4NiwiZXhwIjoxNjM2NTU1Njg2fQ.wc1mQxLgLsUl5wLf-iCGBePyGX_s3CDhGHXXPB8mbhw";
let TOKEN = "";
try {
  let TOKEN = JSON.parse(localStorage.getItem("persist:root")).user?.currentUser
    ?.accessToken;
  console.log(TOKEN);
} catch (e) {
  console.log(e + "no access token");
}

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
