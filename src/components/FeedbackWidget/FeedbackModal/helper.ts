export const sendFeedback = async (feedback: object) => {
  return await fetch(
    `https://submit-form.com/${process.env.NEXT_PUBLIC_FORMSPARK}`,
    {
      method: "POST",
      body: JSON.stringify(feedback),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    },
  );
};
