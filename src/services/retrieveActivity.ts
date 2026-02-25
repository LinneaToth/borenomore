const retrieveActivity = async () => {
  try {
    const response = await fetch(
      "https://bored-api.appbrewery.com/random?type=recreational&participants=1",
    );
    let data = await response.json();
    return data.activity;
  } catch (e) {
    if (e instanceof Error) {
      return e.message;
    }
    return "Something went wrong!";
  }
};

export { retrieveActivity };
