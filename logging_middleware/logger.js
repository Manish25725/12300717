
import axios from "axios";

const LOG_API = "http://4.224.186.213/evaluation-service/logs";

const TOKEN = "YOUR_TOKEN";

const Logger = async (
    stack,
    level,
  packageName,
  message
) => {

  try {

    const response = await axios.post(
      LOG_API,
      {
        stack,
        level,
        package: packageName,
        message
      },
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`
        }
      }
    );

    return response.data;

  } catch (error) {

    console.error(
      "Log Error:",
      error.message
    );
  }
};

export default Logger;