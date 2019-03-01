export const hey = message => {
  message = message.replace(/\t/g, "").trim();

  switch (true) {
    case !message.length:
      return "Fine. Be that way!";

    case message.slice(-1) === "?" &&
      message === message.toUpperCase() &&
      /[A-Z]/i.test(message):
      return "Calm down, I know what I'm doing!";

    case message.slice(-1) === "?":
      return "Sure.";

    case message === message.toUpperCase() && /[A-Z]/i.test(message):
      return "Whoa, chill out!";

    default:
      return "Whatever.";
  }
};
