export const filterbyname = payload => {
  return {
    type: "FILTR",
    payload
  };
};

export const changeRating = (newRating, name) => {
  return {
    type: "RATING",
    newRating,
    name
  };
};

export const Rating = (newRating, name) => {
  return {
    type: "CHANGE_RATING",
    newRating,
    name
  };
};

export const addMovie = payload => {
  return {
    type: "ADD",
    payload
  };
};

export const updatetask = payload => {
  return {
    type: "UPDATE",
    payload
  };
};

export const deletes = payload => {
  return {
    type: "DELETE",
    payload
  };
};
