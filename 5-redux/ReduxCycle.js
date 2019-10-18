//! ACTION CREATOR (PERSON DROPPING OF THE FORM) ===> ACTION (THE FORM)  ===> DISPATCH (FORM RECIEVER) ===> REDUCERS (DEPARTMENTS) ===> STATE (COMPILED DEPARTMENT DATA)

//* ACTION CREATORS:

const createPolicy = (name, amount) => {
  return {
    type: "CREATE_POLICY",
    payload: {
      name,
      amount
    }
  };
};

const deletePolicy = name => {
  return {
    type: "DELETE_POLICY",
    payload: {
      name
    }
  };
};

const createClaim = (name, amountOfMoneyToCollect) => {
  return {
    type: "CREATE_CLAIM",
    payload: {
      name,
      amountOfMoneyToCollect
    }
  };
};
