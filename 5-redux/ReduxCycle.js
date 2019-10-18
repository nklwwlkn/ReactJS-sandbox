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

//* REDUCERS:

const claimHistoryReducer = (oldListOfClaims = [], action) => {
  if (action.type !== "CREATE_CLAIM") {
    return oldListOfClaims;
  }

  return [...oldListOfClaims, action.payload];
};

const accountHistoryReducer = (moneyOfCompany = 100, action) => {
  if (action.type === "CREATE_CLAIM") {
    return moneyOfCompany + action.payload.amountOfMoneyToCollect;
  } else if (action.type === "CREATE_POLICY") {
    return moneyOfCompany + action.payload.amount;
  }

  return moneyOfCompany;
};

const policies = (listOfPolicies, action) => {
  if (action.type === "CREATE_POLICY") {
    return [...listOfPolicies, action.payload.name];
  } else if (action.type === "DELETE_POLICY") {
    return listOfPolicies.filter(name => name !== action.payload.name);
  }
  return listOfPolicies;
};
