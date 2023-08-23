import axios from "axios";
import config from "../../config.json";
import { CLIENT_RENEG_WINDOW } from "tls";

export const getLeaderboard = async () => {
  const data = await axios({
    method: "get",
    url: "https://wargames-api.onrender.com/leaderboard",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  });
  let result = `\n`;
  data["data"].map((item, index) => {
    result += `${index} :\tName: ${item.name}\n\tlevel : ${item.level}\n\n`;
  });
  return result;
};

export const getStats = async (username) => {
  const data = await axios({
    method: "post",
    url: "https://wargames-api.onrender.com/stats",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
    data: {
      username: username,
    },
  });

  return `
  Username : ${data["data"].username}
  Level : ${data["data"].level}`;
};

export const submitFlag = async (username, flag) => {
  const data = await axios({
    method: "post",
    url: "https://wargames-api.onrender.com/verify",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
    data: {
      username: username,
      flag: flag,
    },
  });

  if (data["data"].won) {
    if (data["data"].level === 10) {
      return `
      Mission complete soldier, come back to the base 🫡🫡
      `;
    }
    return `
  Congratulations! You have successfully completed level ${data["data"].level} 🥳🥳
  `;
  }
  return `
  oops!! Wrong credentials ❌❌ 
  `;
};

export const getUserName = async (email) => {
  const data = await axios({
    method: "post",
    url: "https://wargames-api.onrender.com/getUserName",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
    data: {
      email: email,
    },
  });

  return `
  UserName : ${data["data"].username}`;
};
