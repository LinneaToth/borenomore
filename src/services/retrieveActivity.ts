import { BoredResponse } from "../types/typesExt";

const retrieveActivity = async () => {
  try {
    const response = await fetch(
      "https://bored-api.appbrewery.com/random?type=recreational&participants=1",
    );

    if (!response.ok) {
      throw new Error(`Something went wrong: ${response.status}`);
    }
    const data: BoredResponse = await response.json();
    return data.activity;
  } catch (e) {
    if (e instanceof Error) {
      return e.message;
    }
    return "Something went wrong!";
  }
};

export { retrieveActivity };
