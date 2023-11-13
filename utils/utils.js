const getStandardHeaders = (headers) => {
  let model = {
    "Accept-Language": headers["accept-language"],
    Authorization: headers["authorization"],
    traceNumber: headers["tracenumber"],
    deviceId: headers["deviceid"],
    "api-version": headers["api-version"],
    client_id: "BAJET_APP",
  };
  if (headers["contenttype"]) {
    model["Content-Type"] = headers["contenttype"];
  } else {
    model["Content-Type"] = "application/json";
  }
  return model;
};

export const utilService = {
  getStandardHeaders,
};
