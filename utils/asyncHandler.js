const asyncHandler = (handler) => {
  return async (req, res, next) => {
    try {
      await handler(req, res, next);
    } catch (error) {
      console.log("🔥 ERROR CAUGHT BY ASYNC HANDLER");
      console.log(error);
      console.log(typeof next);

      next(error);
    }
  };
};

export default asyncHandler;
